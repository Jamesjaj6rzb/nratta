package com.zyplayer.doc.db.service;

import cn.hutool.core.date.DateTime;
import cn.hutool.core.io.IoUtil;
import com.alibaba.fastjson.JSONObject;
import com.zyplayer.doc.core.exception.ConfirmException;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.support.consts.DocAuthConst;
import com.zyplayer.doc.db.controller.param.DataViewParam;
import com.zyplayer.doc.db.controller.param.ProcedureListParam;
import com.zyplayer.doc.db.controller.vo.TableColumnVo;
import com.zyplayer.doc.db.controller.vo.TableDdlVo;
import com.zyplayer.doc.db.controller.vo.TableStatusVo;
import com.zyplayer.doc.db.framework.consts.DbAuthType;
import com.zyplayer.doc.db.framework.db.bean.DatabaseFactoryBean;
import com.zyplayer.doc.db.framework.db.bean.DatabaseRegistrationBean;
import com.zyplayer.doc.db.framework.db.dto.*;
import com.zyplayer.doc.db.framework.db.enums.DatabaseProductEnum;
import com.zyplayer.doc.db.framework.db.mapper.base.BaseMapper;
import com.zyplayer.doc.db.framework.db.mapper.base.ExecuteParam;
import com.zyplayer.doc.db.framework.db.mapper.base.ExecuteResult;
import com.zyplayer.doc.db.framework.db.mapper.base.SqlExecutor;
import com.zyplayer.doc.db.service.download.BaseDownloadService;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import java.util.*;
import java.util.stream.Collectors;

/**
 * 数据库的mapper持有对象接口
 *
 * @author 暮光：城中城
 * @since 2018年8月8日
 */
public abstract class DbBaseService {
	
	@Resource
	SqlExecutor sqlExecutor;
	@Resource
	BaseDownloadService baseDownloadService;
	@Resource
	DatabaseRegistrationBean databaseRegistrationBean;
	
	/**
	 * 判断查看权和获取BaseMapper
	 *
	 * @author 暮光：城中城
	 */
	public BaseMapper getViewAuthBaseMapper(Long sourceId) {
		this.judgeAuth(sourceId, DbAuthType.VIEW.getName(), "没有查看该库表信息的权限");
		BaseMapper baseMapper = databaseRegistrationBean.getBaseMapperById(sourceId);
		if (baseMapper == null) {
			throw new ConfirmException("未找到对应的数据库连接");
		}
		return baseMapper;
	}
	
	/**
	 * 权限判断
	 *
	 * @author 暮光：城中城
	 */
	private void judgeAuth(Long sourceId, String authName, String noAuthInfo) {
		if (!DocUserUtil.haveAuth(DocAuthConst.DB_DATASOURCE_MANAGE)
				&& !DocUserUtil.haveCustomAuth(authName, DocAuthConst.DB + sourceId)) {
			throw new ConfirmException(noAuthInfo);
		}
	}
	
	/**
	 * 获取当前是什么数据源服务
	 *
	 * @return 服务类型
	 */
	public abstract DatabaseProductEnum getDatabaseProduct();
	
	/**
	 * 获取库列表
	 *
	 * @return 数据库列表
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public TableDdlVo getTableDdl(Long sourceId, String dbName, String tableName) {
		// 需要各数据服务自己实现，各数据库产品的实现都不一样
		throw new ConfirmException("暂未支持的数据库类型");
	}
	
	/**
	 * 获取库列表
	 *
	 * @return 数据库列表
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public List<DatabaseInfoDto> getDatabaseList(Long sourceId) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		return baseMapper.getDatabaseList();
	}
	
	/**
	 * 获取表列表
	 *
	 * @param dbName 数据库名
	 * @return 数据库表列表
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public List<TableInfoDto> getTableList(Long sourceId, String dbName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		return baseMapper.getTableList(dbName);
	}
	
	/**
	 * 获取字段列表
	 *
	 * @param dbName    数据库名
	 * @param tableName 表名
	 * @return 字段列表
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public TableColumnVo getTableColumnList(Long sourceId, String dbName, String tableName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		List<TableColumnDescDto> columnDescDto = baseMapper.getTableColumnList(dbName, tableName);
		TableColumnVo tableColumnVo = new TableColumnVo();
		tableColumnVo.setColumnList(columnDescDto);
		// 表注释
		TableColumnVo.TableInfoVo tableInfoVo = new TableColumnVo.TableInfoVo();
		List<TableDescDto> tableDescList = baseMapper.getTableDescList(dbName, tableName);
		String description = null;
		if (tableDescList.size() > 0) {
			TableDescDto descDto = tableDescList.get(0);
			description = descDto.getDescription();
		}
		description = Optional.ofNullable(description).orElse("");
		tableInfoVo.setDescription(description);
		tableInfoVo.setTableName(tableName);
		tableColumnVo.setTableInfo(tableInfoVo);
		return tableColumnVo;
	}
	
	/**
	 * 获取字段注释
	 *
	 * @param tableName 表名
	 * @return 表字段注释
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public List<TableColumnDescDto> getTableColumnDescList(Long sourceId, String tableName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		return baseMapper.getTableColumnDescList(tableName);
	}
	
	/**
	 * 模糊搜索表和字段
	 *
	 * @param dbName     数据库名
	 * @param searchText 搜索内容
	 * @return 表和字段信息
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public List<QueryTableColumnDescDto> getTableAndColumnBySearch(Long sourceId, String dbName, String searchText) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		searchText = "%" + searchText + "%";
		return baseMapper.getTableAndColumnBySearch(dbName, searchText);
	}
	
	/**
	 * 获取表注释
	 *
	 * @param tableName 可不传，传了只查询指定表的注释
	 * @return 表注释
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public List<TableDescDto> getTableDescList(Long sourceId, String dbName, String tableName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		return baseMapper.getTableDescList(dbName, tableName);
	}
	
	/**
	 * 增加表注释
	 *
	 * @param tableName 表名
	 * @param newDesc   新的注释
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public void updateTableDesc(Long sourceId, String dbName, String tableName, String newDesc) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		baseMapper.updateTableDesc(dbName, tableName, newDesc);
	}
	
	/**
	 * 增加字段注释
	 *
	 * @param dbName     数据库名
	 * @param tableName  表名
	 * @param columnName 字段名
	 * @param newDesc    新的注释
	 * @author 暮光：城中城
	 * @since 2018年8月8日
	 */
	public void updateTableColumnDesc(Long sourceId, String dbName, String tableName, String columnName, String newDesc) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		baseMapper.updateTableColumnDesc(dbName, tableName, columnName, newDesc, null);
	}
	
	/**
	 * 获取表基本信息
	 *
	 * @param dbName    数据库名
	 * @param tableName 表名
	 * @author 暮光：城中城
	 * @since 2019年9月1日
	 */
	public TableStatusVo getTableStatus(Long sourceId, String dbName, String tableName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		TableStatusVo tableStatusVo = baseMapper.getTableStatus(dbName, tableName);
		DatabaseFactoryBean factoryBean = databaseRegistrationBean.getOrCreateFactoryById(sourceId);
		tableStatusVo.setDbType(factoryBean.getDatabaseProduct().name().toLowerCase());
		return tableStatusVo;
	}
	
	/**
	 * 获取编辑器所需的所有信息，用于自动补全
	 * 此接口会返回所有库表结构，介意的话请自己手动屏蔽调此接口
	 *
	 * @param sourceId sourceId
	 * @author 暮光：城中城
	 * @since 2019年9月1日
	 */
	public Map<String, Object> getEditorData(Long sourceId) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		DatabaseFactoryBean databaseFactoryBean = databaseRegistrationBean.getOrCreateFactoryById(sourceId);
		List<DatabaseInfoDto> dbNameDtoList = baseMapper.getDatabaseList();
		Map<String, List<TableInfoDto>> dbTableMap = new HashMap<>();
		Map<String, List<TableColumnDescDto>> tableColumnsMap = new HashMap<>();
		
		Map<String, List<TableInfoDto>> tableMapList = new HashMap<>();
		// MYSQL可以一次性查询所有库表
		if (databaseFactoryBean.getDatabaseProduct() == DatabaseProductEnum.MYSQL) {
			List<TableInfoDto> dbTableList = baseMapper.getTableList(null);
			tableMapList = dbTableList.stream().collect(Collectors.groupingBy(TableInfoDto::getDbName));
		}
		for (DatabaseInfoDto infoDto : dbNameDtoList) {
			List<TableInfoDto> tableInfoDtoList = tableMapList.get(infoDto.getDbName());
			// SQLSERVER必须要库才能查
			if (databaseFactoryBean.getDatabaseProduct() == DatabaseProductEnum.SQLSERVER) {
				tableInfoDtoList = baseMapper.getTableList(infoDto.getDbName());
			}
			if (CollectionUtils.isEmpty(tableInfoDtoList)) {
				continue;
			}
			dbTableMap.put(infoDto.getDbName(), tableInfoDtoList);
			// 小于10个库，查所有库，否则只查询当前链接的库，防止库表太多，数据量太大
			// 如果觉得没必要就自己改吧！
			Map<String, List<TableColumnDescDto>> columnDescDtoMap = new HashMap<>();
			if (dbNameDtoList.size() <= 10 || Objects.equals(databaseFactoryBean.getDbName(), infoDto.getDbName())) {
				List<TableColumnDescDto> columnDescDto = baseMapper.getTableColumnList(infoDto.getDbName(), null);
				columnDescDtoMap = columnDescDto.stream().collect(Collectors.groupingBy(TableColumnDescDto::getTableName));
			}
			for (TableInfoDto tableInfoDto : tableInfoDtoList) {
				List<TableColumnDescDto> descDtoList = columnDescDtoMap.get(tableInfoDto.getTableName());
				if (CollectionUtils.isNotEmpty(descDtoList)) {
					tableColumnsMap.put(tableInfoDto.getTableName(), descDtoList);
				}
			}
		}
		Map<String, Object> dbResultMap = new HashMap<>();
		dbResultMap.put("db", dbNameDtoList);
		dbResultMap.put("table", dbTableMap);
		dbResultMap.put("column", tableColumnsMap);
		return dbResultMap;
	}
	
	/**
	 * 获取存储过程列表
	 *
	 * @param procedureParam 参数
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public Long getProcedureCount(ProcedureListParam procedureParam) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(procedureParam.getSourceId());
		return baseMapper.getProcedureCount(procedureParam);
	}
	
	/**
	 * 获取存储过程列表
	 *
	 * @param procedureParam 参数
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public List<ProcedureDto> getProcedureList(ProcedureListParam procedureParam) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(procedureParam.getSourceId());
		// MySQL是加%，其他数据库不一样的话需要改到各自的实现里面去
		if (StringUtils.isNotBlank(procedureParam.getName())) {
			procedureParam.setName("%" + procedureParam.getName() + "%");
		}
		return baseMapper.getProcedureList(procedureParam);
	}
	
	/**
	 * 获取存储过程详情
	 *
	 * @param dbName 数据库名
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public ProcedureDto getProcedureDetail(Long sourceId, String dbName, String typeName, String procName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		return baseMapper.getProcedureDetail(dbName, typeName, procName);
	}
	
	/**
	 * 删除存储过程
	 *
	 * @param dbName 数据库名
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public void deleteProcedure(Long sourceId, String dbName, String typeName, String procName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		baseMapper.deleteProcedure(dbName, typeName, procName);
	}
	
	/**
	 * 保存存储过程
	 *
	 * @param procSql 存储过程SQL
	 * @return
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public ExecuteResult saveProcedure(Long sourceId, String dbName, String typeName, String procName, String procSql) {
		// 需要各数据服务自己实现，各数据库产品的实现都不一样
		throw new ConfirmException("暂未支持的数据库类型");
	}
	
	/**
	 * 获取全量数据查询的SQL
	 *
	 * @return 分页查询的SQL
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public String getQueryAllSql(DataViewParam dataViewParam) {
		String queryColumns = StringUtils.defaultIfBlank(dataViewParam.getRetainColumn(), "*");
		StringBuilder sqlSb = new StringBuilder();
		sqlSb.append(String.format("select %s from %s.%s", queryColumns, dataViewParam.getDbName(), dataViewParam.getTableName()));
		if (StringUtils.isNotBlank(dataViewParam.getCondition())) {
			sqlSb.append(String.format(" where %s", dataViewParam.getCondition()));
		}
		return sqlSb.toString();
	}
	
	/**
	 * 获取分页查询的SQL
	 *
	 * @return 分页查询的SQL
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public String getQueryPageSql(DataViewParam dataViewParam) {
		StringBuilder sqlSb = new StringBuilder();
		sqlSb.append(String.format("select * from %s.%s", dataViewParam.getDbName(), dataViewParam.getTableName()));
		if (StringUtils.isNotBlank(dataViewParam.getCondition())) {
			sqlSb.append(String.format(" where %s", dataViewParam.getCondition()));
		}
		if (StringUtils.isNotBlank(dataViewParam.getOrderColumn()) && StringUtils.isNotBlank(dataViewParam.getOrderType())) {
			sqlSb.append(String.format(" order by %s %s", dataViewParam.getOrderColumn(), dataViewParam.getOrderType()));
		}
		sqlSb.append(String.format(" limit %s offset %s", dataViewParam.getPageSize(), dataViewParam.getOffset()));
		return sqlSb.toString();
	}
	
	/**
	 * 获取查询总条数的SQL
	 *
	 * @return 查询总条数的SQL
	 * @author 暮光：城中城
	 * @since 2020年4月24日
	 */
	public String getQueryCountSql(DataViewParam dataViewParam) {
		StringBuilder sqlSb = new StringBuilder();
		sqlSb.append(String.format("select count(1) as counts from %s.%s", dataViewParam.getDbName(), dataViewParam.getTableName()));
		if (StringUtils.isNotBlank(dataViewParam.getCondition())) {
			sqlSb.append(String.format(" where %s", dataViewParam.getCondition()));
		}
		return sqlSb.toString();
	}
	
	/**
	 * 导出单表数据
	 *
	 * @author 暮光：城中城
	 * @since 2020年6月5日
	 */
	public void downloadSingleTableData(HttpServletResponse response, DataViewParam param, ExecuteParam executeParam, List<TableColumnDescDto> dataCols, Set<String> conditionSet) throws Exception {
		if (Objects.equals(param.getDownloadType(), "insert")) {
			String resultStr = baseDownloadService.downloadDataByInsert(param, executeParam, dataCols, conditionSet);
			baseDownloadService.sendResponse(response, param.getTableName(), ".sql", resultStr);
		} else if (Objects.equals(param.getDownloadType(), "update")) {
			String resultStr = baseDownloadService.downloadDataByUpdate(param, executeParam, dataCols, conditionSet);
			baseDownloadService.sendResponse(response, param.getTableName(), ".sql", resultStr);
		} else if (Objects.equals(param.getDownloadType(), "json")) {
			String resultStr = baseDownloadService.downloadDataByJson(param, executeParam, dataCols, conditionSet);
			baseDownloadService.sendResponse(response, param.getTableName(), ".json", resultStr);
		}
	}
	
	/**
	 * 获取表数据
	 *
	 * @author 暮光：城中城
	 * @since 2020年6月5日
	 */
	public String getDownloadTableData(DataViewParam param, ExecuteParam executeParam, List<TableColumnDescDto> dataCols, Set<String> conditionSet) throws Exception {
		if (Objects.equals(param.getDownloadType(), "insert")) {
			return baseDownloadService.downloadDataByInsert(param, executeParam, dataCols, conditionSet);
		} else if (Objects.equals(param.getDownloadType(), "update")) {
			return baseDownloadService.downloadDataByUpdate(param, executeParam, dataCols, conditionSet);
		} else if (Objects.equals(param.getDownloadType(), "json")) {
			return baseDownloadService.downloadDataByJson(param, executeParam, dataCols, conditionSet);
		}
		return null;
	}
}
