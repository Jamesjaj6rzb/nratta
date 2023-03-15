package com.zyplayer.doc.data.service.manage.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zyplayer.doc.data.repository.manage.entity.SwaggerDoc;
import com.zyplayer.doc.data.repository.manage.mapper.SwaggerDocMapper;
import com.zyplayer.doc.data.service.manage.SwaggerDocService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * swagger文档地址 服务实现类
 * </p>
 *
 * @author 暮光：城中城
 * @since 2021-10-15
 */
@Service
public class SwaggerDocServiceImpl extends ServiceImpl<SwaggerDocMapper, SwaggerDoc> implements SwaggerDocService {
	
	@Override
	public List<SwaggerDoc> getSwaggerDocList() {
		QueryWrapper<SwaggerDoc> queryWrapper = new QueryWrapper<>();
		queryWrapper.eq("yn", 1);
		return this.list(queryWrapper);
	}
}
