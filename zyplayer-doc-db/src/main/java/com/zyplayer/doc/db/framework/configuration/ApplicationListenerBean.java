package com.zyplayer.doc.db.framework.configuration;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zyplayer.doc.data.repository.manage.entity.DbDatasource;
import com.zyplayer.doc.data.service.manage.DbDatasourceService;
import com.zyplayer.doc.db.framework.db.bean.DatabaseFactoryBean;
import com.zyplayer.doc.db.framework.db.bean.DatabaseRegistrationBean;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.LinkedList;
import java.util.List;

@Component
public class ApplicationListenerBean implements ApplicationListener<ContextRefreshedEvent> {
	
	@Resource
	DatabaseRegistrationBean databaseRegistrationBean;
	@Resource
	DbDatasourceService dbDatasourceService;
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		List<DatabaseFactoryBean> databaseFactoryBeanList = new LinkedList<>();
		
		QueryWrapper<DbDatasource> wrapper = new QueryWrapper<>();
		wrapper.eq("yn", 1);
		List<DbDatasource> datasourceList = dbDatasourceService.list(wrapper);
		for (DbDatasource dbDatasource : datasourceList) {
			DatabaseFactoryBean databaseFactoryBean = DatasourceUtil.createDatabaseFactoryBean(dbDatasource);
			if (databaseFactoryBean != null) {
				databaseFactoryBeanList.add(databaseFactoryBean);
			}
		}
		databaseRegistrationBean.setDatabaseFactoryBeanList(databaseFactoryBeanList);
	}
	
}
