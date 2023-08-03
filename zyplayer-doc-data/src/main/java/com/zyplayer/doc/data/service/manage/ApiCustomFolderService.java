package com.zyplayer.doc.data.service.manage;

import com.zyplayer.doc.data.repository.manage.entity.ApiCustomFolder;
import com.baomidou.mybatisplus.extension.service.IService;
import com.zyplayer.doc.data.repository.manage.entity.ApiCustomRequest;

/**
 * <p>
 * 自建接口文档文件夹 服务类
 * </p>
 *
 * @author 暮光：城中城
 * @since 2021-12-22
 */
public interface ApiCustomFolderService extends IService<ApiCustomFolder> {
	
	/**
	 * 增加文件夹
	 *
	 * @author 暮光：城中城
	 * @since 2021-12-22
	 */
	void addFolder(ApiCustomFolder apiCustomFolder);
	
	/**
	 * 删除文件夹
	 *
	 * @author 暮光：城中城
	 * @since 2021-12-22
	 */
	void deleteFolder(Long id);
}
