package com.zyplayer.doc.db.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializeConfig;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.serializer.SimpleDateFormatSerializer;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.zyplayer.doc.core.annotation.AuthMan;
import com.zyplayer.doc.core.json.ResponseJson;
import com.zyplayer.doc.core.util.StringUtil;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.DbFavorite;
import com.zyplayer.doc.data.repository.manage.entity.DbHistory;
import com.zyplayer.doc.data.repository.support.consts.DocAuthConst;
import com.zyplayer.doc.data.service.manage.DbFavoriteService;
import com.zyplayer.doc.data.service.manage.DbHistoryService;
import com.zyplayer.doc.db.framework.consts.DbAuthType;
import com.zyplayer.doc.db.framework.db.mapper.base.ExecuteResult;
import com.zyplayer.doc.db.framework.db.mapper.base.ExecuteType;
import com.zyplayer.doc.db.framework.db.mapper.base.SqlExecutor;
import com.zyplayer.doc.db.framework.json.DocDbResponseJson;
import org.apache.commons.lang.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * sql执行器
 *
 * @author 暮光：城中城
 * @since 2019年8月18日
 */
@AuthMan
@RestController
@RequestMapping("/zyplayer-doc-db/executor")
public class DbSqlExecutorController {
	
	@Resource
	SqlExecutor sqlExecutor;
	@Resource
	DbHistoryService dbHistoryService;
	@Resource
	DbFavoriteService dbFavoriteService;
	
	@PostMapping(value = "/execute")
	public ResponseJson execute(Long sourceId, String executeId, String sql, String params) {
		if (StringUtils.isBlank(sql)) {
			return DocDbResponseJson.warn("执行的SQL不能为空");
		}
		boolean manageAuth = DocUserUtil.haveAuth(DocAuthConst.DB_DATASOURCE_MANAGE);
		boolean select = DocUserUtil.haveCustomAuth(DbAuthType.SELECT.getName(), DocAuthConst.DB + sourceId);
		boolean update = DocUserUtil.haveCustomAuth(DbAuthType.UPDATE.getName(), DocAuthConst.DB + sourceId);
		if (!manageAuth && !select && !update) {
			return DocDbResponseJson.warn("没有该数据源的执行权限");
		}
		try {
			Map<String, Object> paramMap = JSON.parseObject(params);
			ExecuteType executeType = (!manageAuth && select) ? ExecuteType.SELECT : ExecuteType.ALL;
			ExecuteResult executeResult = sqlExecutor.execute(sourceId, executeId, executeType, sql, paramMap);
			SerializeConfig mapping = new SerializeConfig();
			mapping.put(Date.class, new SimpleDateFormatSerializer("yyyy-MM-dd HH:mm:ss"));
			mapping.put(Timestamp.class, new SimpleDateFormatSerializer("yyyy-MM-dd HH:mm:ss"));
			String resultJsonStr = JSON.toJSONString(executeResult, mapping, SerializerFeature.WriteMapNullValue);
			return DocDbResponseJson.ok(resultJsonStr);
		} catch (Exception e) {
			return DocDbResponseJson.warn(StringUtil.getException(e));
		}
	}
	
	@PostMapping(value = "/cancel")
	public ResponseJson cancel(String executeId) {
		sqlExecutor.cancel(executeId);
		return DocDbResponseJson.ok();
	}
	
	@PostMapping(value = "/history/list")
	public ResponseJson historyList() {
		UpdateWrapper<DbHistory> wrapper = new UpdateWrapper<>();
		wrapper.orderByDesc("id");
		List<DbHistory> favoriteList = dbHistoryService.list(wrapper);
		return DocDbResponseJson.ok(favoriteList);
	}
	
	@PostMapping(value = "/favorite/list")
	public ResponseJson favoriteList() {
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		UpdateWrapper<DbFavorite> wrapper = new UpdateWrapper<>();
		wrapper.eq("create_user_id", currentUser.getUserId());
		wrapper.eq("yn", 1);
		wrapper.orderByDesc("id");
		List<DbFavorite> favoriteList = dbFavoriteService.list(wrapper);
		return DocDbResponseJson.ok(favoriteList);
	}
	
	@PostMapping(value = "/favorite/add")
	public ResponseJson addFavorite(DbFavorite dbFavorite) {
		Integer yn = Optional.ofNullable(dbFavorite.getYn()).orElse(1);
		if (yn == 1 && StringUtils.isBlank(dbFavorite.getContent())) {
			return DocDbResponseJson.warn("收藏的SQL不能为空");
		}
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		if (dbFavorite.getId() != null && dbFavorite.getId() > 0) {
			dbFavoriteService.updateById(dbFavorite);
		} else {
			dbFavorite.setCreateTime(new Date());
			dbFavorite.setCreateUserId(currentUser.getUserId());
			dbFavorite.setCreateUserName(currentUser.getUsername());
			dbFavorite.setYn(1);
			dbFavoriteService.save(dbFavorite);
		}
		return DocDbResponseJson.ok();
	}
}

