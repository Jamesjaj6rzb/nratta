package com.zyplayer.doc.data.aspect;

import com.zyplayer.doc.core.json.DocResponseJson;
import com.zyplayer.doc.core.json.HttpConst;
import com.zyplayer.doc.core.json.ResponseJson;
import com.zyplayer.doc.data.config.security.DocUserDetails;
import com.zyplayer.doc.data.config.security.DocUserUtil;
import com.zyplayer.doc.data.service.manage.UserAuthService;
import com.zyplayer.doc.data.utils.BeanUtil;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.lang.reflect.Method;

@Aspect
@Component
public class AuthAspect {
	
	@Resource
	private UserAuthService userAuthService;
	
	@Around(value = "@annotation(AuthMan) || @within(AuthMan)")
	public Object authController(ProceedingJoinPoint pjp) throws Throwable {
		AuthMan authMan = BeanUtil.getAnnotation(pjp, AuthMan.class);
		ResponseBody responseBody = BeanUtil.getAnnotation(pjp, ResponseBody.class);
		RestController restController = BeanUtil.getAnnotation(pjp, RestController.class);
		boolean isResponseBody = (restController != null || responseBody != null);
		
		DocUserDetails currentUser = DocUserUtil.getCurrentUser();
		if (currentUser == null) {
			String reason = "你访问的内容需要登录，请登录后再试";
			if (isResponseBody) {
				return DocResponseJson.failure(HttpConst.TOKEN_TIMEOUT, reason);
			} else {
				return authMan.authUrl();
			}
		}
		// 判断权限是否足够
		boolean haveAuth = DocUserUtil.haveAuth(authMan.value());
		if (haveAuth) {
			return pjp.proceed();
		}
		String reasonStr = "没有操作权限，请联系管理员";
		if (isResponseBody) {
			Method method = ((MethodSignature) pjp.getSignature()).getMethod();
			if (method.getReturnType().equals(ResponseJson.class)) {
				return DocResponseJson.warn(reasonStr);
			} else {
				try {
					return Class.forName(method.getReturnType().getName()).newInstance();
				} catch (Exception e) {
					return null;
				}
			}
		} else {
			return authMan.authUrl();
		}
	}
}
