package com.zyplayer.doc.data.config.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * 用户工具类
 */
public class DocUserUtil {
	
	/**
	 * 获取当前用户
	 * @return 用户信息
	 */
	public static DocUserDetails getCurrentUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null) {
			Object principal = authentication.getPrincipal();
			if (principal instanceof DocUserDetails) {
				return (DocUserDetails) principal;
			}
		}
		return null;
	}
}
