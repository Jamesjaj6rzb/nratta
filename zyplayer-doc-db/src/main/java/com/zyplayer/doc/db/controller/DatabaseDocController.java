package com.zyplayer.doc.db.controller;

import cn.hutool.core.io.IoUtil;
import cn.hutool.core.util.ZipUtil;
import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zyplayer.doc.core.annotation.AuthMan;
import com.zyplayer.doc.core.exception.ConfirmException;
import com.zyplayer.doc.core.json.ResponseJson;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.DbDatasource;
import com.zyplayer.doc.data.repository.manage.entity.UserAuth;
import com.zyplayer.doc.data.repository.support.consts.DocAuthConst;
import com.zyplayer.doc.data.service.manage.DbDatasourceService;
import com.zyplayer.doc.data.service.manage.UserAuthService;
import com.zyplayer.doc.db.controller.vo.DatabaseExportVo;
import com.zyplayer.doc.db.controller.vo.TableColumnVo;
import com.zyplayer.doc.db.controller.vo.TableColumnVo.TableInfoVo;
import com.zyplayer.doc.db.framework.consts.DbAuthType;
import com.zyplayer.doc.db.framework.db.bean.DatabaseFactoryBean;
import com.zyplayer.doc.db.framework.db.bean.DatabaseFactoryBean.DatabaseProduct;
import com.zyplayer.doc.db.framework.db.bean.DatabaseRegistrationBean;
import com.zyplayer.doc.db.framework.db.dto.*;
import com.zyplayer.doc.db.framework.db.mapper.base.BaseMapper;
import com.zyplayer.doc.db.framework.db.mapper.mysql.MysqlMapper;
import com.zyplayer.doc.db.framework.json.DocDbResponseJson;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.*;
import java.util.stream.Collectors;

/**
 * 文档控制器
 *
 * @author 暮光：城中城
 * @since 2018年8月8日
 */
@AuthMan
@RestController
@RequestMapping("/zyplayer-doc-db/doc-db")
public class DatabaseDocController {
	
	@Resource
	DatabaseRegistrationBean databaseRegistrationBean;
	@Resource
	DbDatasourceService dbDatasourceService;
	@Resource
	UserAuthService userAuthService;
	
	@PostMapping(value = "/getDataSourceList")
	public ResponseJson getDataSourceList() {
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		QueryWrapper<DbDatasource> wrapper = new QueryWrapper<>();
		wrapper.eq("yn", 1);
		// 没管理权限只返回有权限的数据源
		if (!DocUserUtil.haveAuth(DocAuthConst.DB_DATASOURCE_MANAGE)) {
			QueryWrapper<UserAuth> updateWrapper = new QueryWrapper<>();
			updateWrapper.likeRight("auth_custom_suffix", DocAuthConst.DB);
			updateWrapper.eq("del_flag", 0);
			updateWrapper.eq("user_id", currentUser.getUserId());
			List<UserAuth> userAuthList = userAuthService.list(updateWrapper);
			if (userAuthList == null || userAuthList.isEmpty()) {
				return DocDbResponseJson.ok();
			}
			List<Long> userAuthDbIds = userAuthList.stream().map(val -> NumberUtils.toLong(val.getAuthCustomSuffix().replace(DocAuthConst.DB, ""))).collect(Collectors.toList());
			wrapper.in("id", userAuthDbIds);
		}
		List<DbDatasource> datasourceList = dbDatasourceService.list(wrapper);
		List<DatabaseFactoryBean> dataSourceList = datasourceList.stream().map(val -> {
			DatabaseFactoryBean bean = new DatabaseFactoryBean();
			bean.setCnName(val.getName());
			bean.setId(val.getId());
			return bean;
		}).collect(Collectors.toList());
		return DocDbResponseJson.ok(dataSourceList);
	}
	
	@PostMapping(value = "/getDatabaseList")
	public ResponseJson getDatabaseList(Long sourceId) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		List<DatabaseInfoDto> dbNameDtoList = baseMapper.getDatabaseList();
		return DocDbResponseJson.ok(dbNameDtoList);
	}
	
	@PostMapping(value = "/getTableList")
	public ResponseJson getTableList(Long sourceId, String dbName) {
		BaseMapper baseMapper = this.getBaseMapper(sourceId);
		List<TableInfoDto> dbTableList = baseMapper.getTableList(dbName);
		return DocDbResponseJson.ok(dbTableList);
	}
	
	@PostMapping(value = "/getTableColumnList")
	public ResponseJson getTableColumnList(Long sourceId, String dbName, String tableName) {
		this.judgeAuth(sourceId, DbAuthType.VIEW.getName(), "没有查看该库表信息的权限");
		DatabaseFactoryBean databaseFactoryBean = databaseRegistrationBean.getFactoryById(sourceId);
		if (databaseFactoryBean == null) {
			return DocDbResponseJson.warn("未找到对应的数据库连接");
		}
		TableColumnVo tableColumnVo = this.getTableColumnVo(databaseFactoryBean, dbName, tableName);
		return DocDbResponseJson.ok(tableColumnVo);
	}
	
	@PostMapping(value = "/getTableColumnDescList")
	public ResponseJson getTableColumnDescList(Long sourceId, String tableName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		List<TableColumnDescDto> columnDescDto = baseMapper.getTableColumnDescList(tableName);
		return DocDbResponseJson.ok(columnDescDto);
	}
	
	@PostMapping(value = "/getTableAndColumnBySearch")
	public ResponseJson getTableAndColumnBySearch(Long sourceId, String dbName, String searchText) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		if (StringUtils.isBlank(searchText)) {
			return DocDbResponseJson.ok();
		}
		searchText = "%" + searchText + "%";
		List<QueryTableColumnDescDto> columnDescDto = baseMapper.getTableAndColumnBySearch(dbName, searchText);
		return DocDbResponseJson.ok(columnDescDto);
	}
	
	@PostMapping(value = "/getTableDescList")
	public ResponseJson getTableDescList(Long sourceId, String tableName) {
		BaseMapper baseMapper = this.getViewAuthBaseMapper(sourceId);
		List<TableDescDto> columnDescDto = baseMapper.getTableDescList(tableName);
		return DocDbResponseJson.ok(columnDescDto);
	}
	
	@PostMapping(value = "/updateTableDesc")
	public ResponseJson updateTableDesc(Long sourceId, String dbName, String tableName, String newDesc) {
		this.judgeAuth(sourceId, DbAuthType.DESC_EDIT.getName(), "没有修改该表注释的权限");
		BaseMapper baseMapper = this.getBaseMapper(sourceId);
		baseMapper.updateTableDesc(dbName, tableName, newDesc);
		return DocDbResponseJson.ok();
	}
	
	@PostMapping(value = "/updateTableColumnDesc")
	public ResponseJson updateTableColumnDesc(Long sourceId, String dbName, String tableName, String columnName, String newDesc) {
		this.judgeAuth(sourceId, DbAuthType.DESC_EDIT.getName(), "没有修改该表字段注释的权限");
		BaseMapper baseMapper = this.getBaseMapper(sourceId);
		ColumnInfoDto columnInfo = null;
		// mysql要同时修改类型默认值等，所以先查出来
		MysqlMapper mysqlMapper = databaseRegistrationBean.getBaseMapper(sourceId, MysqlMapper.class);
		if (mysqlMapper != null) {
			columnInfo = mysqlMapper.getColumnInfo(dbName, tableName, columnName);
			String isNullable = Optional.ofNullable(columnInfo.getIsNullable()).orElse("");
			columnInfo.setIsNullable("yes".equalsIgnoreCase(isNullable) ? "null" : "not null");
			String columnDefault = columnInfo.getColumnDefault();
			if (StringUtils.isNotBlank(columnDefault)) {
				columnInfo.setColumnDefault("DEFAULT " + columnDefault);
			} else {
				columnInfo.setColumnDefault("");
			}
			String extra = columnInfo.getExtra();
			columnInfo.setExtra(StringUtils.isBlank(extra) ? "" : extra);
		}
		baseMapper.updateTableColumnDesc(dbName, tableName, columnName, newDesc, columnInfo);
		return DocDbResponseJson.ok();
	}
	
	@GetMapping(value = "/exportDatabase")
	public ResponseJson exportDatabase(HttpServletResponse response, Long sourceId, String dbName, String tableNames) {
		this.judgeAuth(sourceId, DbAuthType.VIEW.getName(), "没有查看该库表信息的权限");
		if (StringUtils.isBlank(tableNames)) {
			return DocDbResponseJson.warn("请选择需要导出的表");
		}
		DatabaseFactoryBean databaseFactoryBean = databaseRegistrationBean.getFactoryById(sourceId);
		if (databaseFactoryBean == null) {
			return DocDbResponseJson.warn("未找到对应的数据库连接");
		}
		List<TableInfoVo> tableList = new LinkedList<>();
		Map<String, List<TableColumnDescDto>> columnList = new HashMap<>();
		String[] tableNameArr = tableNames.split(",");
		for (String tableName : tableNameArr) {
			if (StringUtils.isBlank(tableName)) {
				continue;
			}
			TableColumnVo tableColumnVo = this.getTableColumnVo(databaseFactoryBean, dbName, tableName);
			columnList.put(tableName, tableColumnVo.getColumnList());
			tableList.add(tableColumnVo.getTableInfo());
		}
		DatabaseExportVo exportVo = new DatabaseExportVo();
		exportVo.setColumnList(columnList);
		exportVo.setTableList(tableList);
		String content = JSON.toJSONString(exportVo);
		content = "var docDbDatabase = " + content;
		
		response.setContentType("application/octet-stream");
		response.addHeader("Content-Disposition", "attachment;filename=database.js");
		response.setCharacterEncoding("utf-8");
		// 将文件输入流写入response的输出流中
		try {
			IoUtil.write(response.getOutputStream(), "utf-8", true, content);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return DocDbResponseJson.ok();
	}
	
	private TableColumnVo getTableColumnVo(DatabaseFactoryBean databaseFactoryBean, String dbName, String tableName) {
		SqlSessionTemplate sessionTemplate = databaseFactoryBean.getSqlSessionTemplate();
		BaseMapper baseMapper = sessionTemplate.getMapper(BaseMapper.class);
		List<TableColumnDescDto> columnDescDto = baseMapper.getTableColumnList(dbName, tableName);
		// SQLSERVER要单独查字段注释
		if (databaseFactoryBean.getDatabaseProduct() == DatabaseProduct.SQLSERVER) {
			List<TableColumnDescDto> columnDescList = baseMapper.getTableColumnDescList(tableName);
			Map<String, TableColumnDescDto> columnMap = columnDescDto.stream().collect(Collectors.toMap(TableColumnDescDto::getName, val -> val));
			// 字段注释
			for (TableColumnDescDto descDto : columnDescList) {
				TableColumnDescDto tempDesc = columnMap.get(descDto.getName());
				if (tempDesc != null) {
					tempDesc.setDescription(descDto.getDescription());
				}
			}
		}
		TableColumnVo tableColumnVo = new TableColumnVo();
		tableColumnVo.setColumnList(columnDescDto);
		// 表注释
		TableInfoVo tableInfoVo = new TableInfoVo();
		List<TableDescDto> tableDescList = baseMapper.getTableDescList(tableName);
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
	 * 权限判断
	 * @author 暮光：城中城
	 */
	private void judgeAuth(Long sourceId, String authName, String noAuthInfo) {
		if (!DocUserUtil.haveAuth(DocAuthConst.DB_DATASOURCE_MANAGE)
				&& !DocUserUtil.haveCustomAuth(authName, DocAuthConst.DB + sourceId)) {
			throw new ConfirmException(noAuthInfo);
		}
	}
	
	/**
	 * 获取BaseMapper
	 * @author 暮光：城中城
	 */
	private BaseMapper getBaseMapper(Long sourceId) {
		BaseMapper baseMapper = databaseRegistrationBean.getBaseMapperById(sourceId);
		if (baseMapper == null) {
			throw new ConfirmException("未找到对应的数据库连接");
		}
		return baseMapper;
	}
	
	/**
	 * 判断查看权和获取BaseMapper
	 * @author 暮光：城中城
	 */
	private BaseMapper getViewAuthBaseMapper(Long sourceId) {
		this.judgeAuth(sourceId, DbAuthType.VIEW.getName(), "没有查看该库表信息的权限");
		return this.getBaseMapper(sourceId);
	}
	
	public static void main(String[] args) {
		//File zipFile = ZipUtil.zip("d:/aaa");
		File zipFile = new File("d:/111.zip");
		ZipUtil.zip(zipFile, true, new File("d:/111.txt"),
				new File("d:/222.txt"), new File("d:/aaa"));
	}
}

