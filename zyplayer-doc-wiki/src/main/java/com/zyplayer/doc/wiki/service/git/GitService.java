package com.zyplayer.doc.wiki.service.git;

import cn.hutool.core.io.FileUtil;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.WikiPageHistory;
import com.zyplayer.doc.data.service.manage.WikiPageHistoryService;
import org.apache.commons.collections.CollectionUtils;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.Status;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.lib.ObjectId;
import org.eclipse.jgit.lib.ObjectLoader;
import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.revwalk.RevCommit;
import org.eclipse.jgit.revwalk.RevWalk;
import org.eclipse.jgit.treewalk.TreeWalk;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Set;

/**
 * git管理相关服务
 *
 * @author 暮光：城中城
 * @since 2020年9月5日
 */
@Service
public class GitService {
	private static Logger logger = LoggerFactory.getLogger(GitService.class);
	
	@Value("${zyplayer.doc.wiki.git-file-path:''}")
	private String gitFilePath;
	
	@Resource
	WikiPageHistoryService wikiPageHistoryService;
	
	/**
	 * 提交和写历史记录
	 */
	public void commitAndAddHistory(Long pageId, String content) {
		String commitId = this.writeAndCommit(pageId, content);
		// 保存历史记录
		if (commitId != null) {
			DocUserDetails currentUser = DocUserUtil.getCurrentUser();
			WikiPageHistory entity = new WikiPageHistory();
			entity.setPageId(pageId);
			entity.setCreateTime(new Date());
			entity.setDelFlag(0);
			entity.setGitCommitId(commitId);
			entity.setCreateUserId(currentUser.getUserId());
			entity.setCreateUserName(currentUser.getUsername());
			wikiPageHistoryService.save(entity);
		}
	}
	
	/**
	 * 把内容写入文件并提交git
	 */
	private synchronized String writeAndCommit(Long pageId, String content) {
		try {
			// 初始化git仓库
			File dirFile = new File(this.getGitPath());
			Git git = Git.init().setGitDir(dirFile).setDirectory(dirFile.getParentFile()).call();
			// 修改文件内容
			FileUtil.writeString(content, this.getGitPagePath(pageId), "utf-8");
			// git提交
			if (git.status().call().isClean()) {
				logger.info("no changed");
				return null;
			}
			git.add().addFilepattern(".").call();
			Status status = git.status().call();
			Set<String> missing = status.getMissing();
			if (CollectionUtils.isNotEmpty(missing)) {
				for (String f : missing) {
					logger.info("missing file: {}", f);
					git.rm().addFilepattern(f).call();
				}
			}
			Set<String> removed = status.getRemoved();
			if (CollectionUtils.isNotEmpty(removed)) {
				for (String f : removed) {
					logger.info("remove file: {}", f);
					git.rm().addFilepattern(f).call();
				}
			}
			RevCommit commit = git.commit().setMessage("commit").call();
			logger.info("commit id: {}", commit.getName());
			return commit.getName();
		} catch (Exception e) {
			logger.error("git仓库提交失败", e);
		}
		return null;
	}
	
	public String getPageHistory(String objId, Long pageId) {
		try {
			Git git = Git.open(new File(this.getGitPath()));
			Repository repository = git.getRepository();
			RevCommit revCommit = new RevWalk(repository).parseCommit(ObjectId.fromString(objId));
			TreeWalk treeWalk = TreeWalk.forPath(repository, this.getGitPageFile(pageId), revCommit.getTree());
			treeWalk.setRecursive(false);
			ObjectId blobId = treeWalk.getObjectId(0);
			ObjectLoader loader = repository.open(blobId);
			return new String(loader.getBytes());
		} catch (Exception e) {
			logger.error("获取git文件内容失败", e);
			return null;
		}
	}
	
	private String getGitPath() {
		return gitFilePath + "/.git";
	}
	
	
	private String getGitPageFile(Long pageId) {
		return pageId + ".txt";
	}
	
	private String getGitPagePath(Long pageId) {
		return gitFilePath + "/" + this.getGitPageFile(pageId);
	}
}
