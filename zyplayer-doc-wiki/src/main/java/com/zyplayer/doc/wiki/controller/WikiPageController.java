package com.zyplayer.doc.wiki.controller;

import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.zyplayer.doc.core.json.DocResponseJson;
import com.zyplayer.doc.core.json.ResponseJson;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.WikiPage;
import com.zyplayer.doc.data.repository.manage.entity.WikiPageContent;
import com.zyplayer.doc.data.repository.manage.entity.WikiPageFile;
import com.zyplayer.doc.data.repository.manage.entity.WikiPageZan;
import com.zyplayer.doc.data.service.manage.WikiPageContentService;
import com.zyplayer.doc.data.service.manage.WikiPageFileService;
import com.zyplayer.doc.data.service.manage.WikiPageService;
import com.zyplayer.doc.data.service.manage.WikiPageZanService;
import com.zyplayer.doc.wiki.controller.vo.WikiPageContentVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 * 文档控制器
 *
 * @author 暮光：城中城
 * @since 2019年2月17日
 */
@RestController
@RequestMapping("/zyplayer-doc-wiki/page")
public class WikiPageController {
	private static Logger logger = LoggerFactory.getLogger(WikiPageController.class);
	
	@Resource
	WikiPageService wikiPageService;
	@Resource
	WikiPageContentService wikiPageContentService;
	@Resource
	WikiPageFileService wikiPageFileService;
	@Resource
	WikiPageZanService wikiPageZanService;
	
	@PostMapping("/list")
	public ResponseJson<List<WikiPage>> list(WikiPage wikiPage) {
		// TODO 检查space是否开放访问
		UpdateWrapper<WikiPage> wrapper = new UpdateWrapper<>();
		wrapper.eq("del_flag", 0);
		wrapper.eq("space_id", wikiPage.getSpaceId());
		wrapper.eq(wikiPage.getParentId() == null, "parent_id", 0);
		wrapper.eq(wikiPage.getParentId() != null, "parent_id", wikiPage.getParentId());
		List<WikiPage> authList = wikiPageService.list(wrapper);
		return DocResponseJson.ok(authList);
	}
	
	@PostMapping("/detail")
	public ResponseJson<WikiPageContentVo> detail(WikiPage wikiPage) {
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		WikiPage wikiPageSel = wikiPageService.getById(wikiPage.getId());
		
		UpdateWrapper<WikiPageContent> wrapper = new UpdateWrapper<>();
		wrapper.eq("page_id", wikiPage.getId());
		WikiPageContent pageContent = wikiPageContentService.getOne(wrapper);
		
		// TODO 检查space是否开放访问
		UpdateWrapper<WikiPageFile> wrapperFile = new UpdateWrapper<>();
		wrapperFile.eq("page_id", wikiPage.getId());
		wrapperFile.eq("del_flag", 0);
		List<WikiPageFile> pageFiles = wikiPageFileService.list(wrapperFile);
		for (WikiPageFile pageFile : pageFiles) {
			pageFile.setFileUrl("zyplayer-doc-wiki/common/file?uuid=" + pageFile.getUuid());
		}
		UpdateWrapper<WikiPageZan> wrapperZan = new UpdateWrapper<>();
		wrapperZan.eq("page_id", wikiPage.getId());
		wrapperZan.eq("create_user_id", currentUser.getUserId());
		wrapperZan.eq("yn", 1);
		WikiPageZan pageZan = wikiPageZanService.getOne(wrapperZan);
		WikiPageContentVo vo = new WikiPageContentVo();
		vo.setWikiPage(wikiPageSel);
		vo.setPageContent(pageContent);
		vo.setFileList(pageFiles);
		vo.setSelfZan((pageZan != null) ? 1 : 0);
		return DocResponseJson.ok(vo);
	}
	
	@PostMapping("/update")
	public ResponseJson<Object> update(WikiPage wikiPage, String content) {
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		WikiPageContent pageContent = new WikiPageContent();
		pageContent.setContent(content);
		
		Long id = wikiPage.getId();
		if (id != null && id > 0) {
			WikiPage wikiPageSel = wikiPageService.getById(id);
			if (wikiPageSel == null || Objects.equals(wikiPageSel.getEditType(), 1)) {
				return DocResponseJson.warn("当前页面不允许编辑！");
			}
			wikiPage.setUpdateTime(new Date());
			wikiPage.setUpdateUserId(currentUser.getUserId());
			wikiPage.setUpdateUserName(currentUser.getUsername());
			wikiPageService.updateById(wikiPage);
			// 详情
			pageContent.setUpdateTime(new Date());
			pageContent.setUpdateUserId(currentUser.getUserId());
			pageContent.setUpdateUserName(currentUser.getUsername());
			UpdateWrapper<WikiPageContent> wrapper = new UpdateWrapper<>();
			wrapper.eq("page_id", id);
			wikiPageContentService.update(pageContent, wrapper);
		} else {
			wikiPage.setCreateTime(new Date());
			wikiPage.setCreateUserId(currentUser.getUserId());
			wikiPage.setCreateUserName(currentUser.getUsername());
			wikiPageService.save(wikiPage);
			// 详情
			pageContent.setPageId(wikiPage.getId());
			pageContent.setCreateTime(new Date());
			pageContent.setCreateUserId(currentUser.getUserId());
			pageContent.setCreateUserName(currentUser.getUsername());
			wikiPageContentService.save(pageContent);
		}
		return DocResponseJson.ok(wikiPage);
	}
}

