package com.zyplayer.doc.manage.web.manage;

import cn.hutool.core.util.RandomUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.zyplayer.doc.core.json.DocResponseJson;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.repository.manage.entity.AuthInfo;
import com.zyplayer.doc.data.repository.manage.entity.UserAuth;
import com.zyplayer.doc.data.repository.manage.entity.UserInfo;
import com.zyplayer.doc.data.service.manage.AuthInfoService;
import com.zyplayer.doc.data.service.manage.UserAuthService;
import com.zyplayer.doc.data.service.manage.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
import java.util.stream.Collectors;

@RestController
public class LoginController {

	@Autowired
	private UserInfoService userInfoService;
	@Autowired
	private UserAuthService userAuthService;
	@Autowired
	private AuthInfoService authInfoService;
	
	@PostMapping(value = "/login")
	public DocResponseJson<Object> login(String username, String password, HttpServletResponse response) {
		QueryWrapper<UserInfo> queryWrapper = new QueryWrapper<>();
		queryWrapper.eq("user_no", username);
		queryWrapper.eq("del_flag", 0);
		UserInfo userInfo = userInfoService.getOne(queryWrapper);
		if (userInfo == null) {
			return DocResponseJson.warn("用户名'" + username + "'没有找到！");
		}
		String pwdMd5 = DigestUtils.md5DigestAsHex(password.getBytes());
		if (!Objects.equals(userInfo.getPassword(), pwdMd5)) {
			return DocResponseJson.warn("密码错误");
		}
		QueryWrapper<UserAuth> authWrapper = new QueryWrapper<>();
		authWrapper.eq("user_id", userInfo.getId()).eq("del_flag", "0");
		List<UserAuth> userAuthList = userAuthService.list(authWrapper);
		Set<String> userAuthSet = Collections.emptySet();
		if (userAuthList != null && userAuthList.size() > 0) {
			List<Long> authIdList = userAuthList.stream().map(UserAuth::getAuthId).collect(Collectors.toList());
			Collection<AuthInfo> authInfoList = authInfoService.listByIds(authIdList);
			Map<Long, String> authNameMap = authInfoList.stream().collect(Collectors.toMap(AuthInfo::getId, AuthInfo::getAuthName));
			userAuthSet = userAuthList.stream().map(val -> {
				String authName = Optional.ofNullable(authNameMap.get(val.getAuthId())).orElse("");
				return authName + Optional.ofNullable(val.getAuthCustomSuffix()).orElse("");
			}).collect(Collectors.toSet());
		}
		String accessToken = RandomUtil.simpleUUID();
		DocUserDetails userDetails = new DocUserDetails(userInfo.getId(), userInfo.getUserName(), userInfo.getPassword(), true, userAuthSet);
		DocUserUtil.setCurrentUser(accessToken, userDetails);
		// 放入cookie，过期时间：24小时
		Cookie cookie = new Cookie("accessToken", accessToken);
		cookie.setPath("/");
		cookie.setDomain("zyplayer.com");
		cookie.setMaxAge(60 * 60 * 24);
		response.addCookie(cookie);
		// 再搞一份当前路劲的cookie
		cookie = new Cookie("accessToken", accessToken);
		cookie.setPath("/");
		cookie.setMaxAge(60 * 60 * 24);
		response.addCookie(cookie);
		return DocResponseJson.ok();
	}
	
	@PostMapping(value = "/logout")
	public DocResponseJson<Object> logout() {
		DocUserUtil.logout();
		return DocResponseJson.ok();
	}
}