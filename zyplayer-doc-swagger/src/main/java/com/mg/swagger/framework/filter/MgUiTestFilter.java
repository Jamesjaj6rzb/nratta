package com.mg.swagger.framework.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mg.swagger.framework.service.MgStorageService;

/**
 * 判断是否是模拟请求，功能需求：<br>
 * 很多时候后端定义好了接口，但还未实现，这时前端已经需要数据调试了，这时就需要用到这个过滤器了！<br>
 * 在页面上先配置好模拟返回的数据，然后在url上加入参数：mgUiTestFlag=1<br>
 * 例：http://192.168.0.249:8082/openApi/case/info?mgUiTestFlag=1<br>
 * 本过滤器就直接返回了之前配置的模拟数据，而不用等到后端必须把接口实现之后才能调试，或者在前端写一大段测试数据。<br>
 * 
 * 例：笔者的公司后端人较少，一个需求需要10个接口，需求分析完后首先就把接口、参数、返回值定义好，然后一个个的去实现。
 * 也许需要10天才能写完，但前端两天就写好了，急需数据看效果，这时就让他们自己去设置模拟值，加上参数自己测试好。
 * 而不是一味的催后台，把各种锅丢给后端，然后玩自己的去了，浪费各环节等待时间。
 */
@Component
public class MgUiTestFilter implements Filter {

	@Autowired(required = false)
	private MgStorageService mgStorageService;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String mockTestFlag = request.getParameter("mgUiTestFlag");
		if (!"1".equals(mockTestFlag)) {
			chain.doFilter(request, response);
			return;
		}
		// 如果是模拟请求则直接返回模拟值
		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		String requestUrl = httpServletRequest.getRequestURI();
		String cacheResult = mgStorageService.get("p-simulation-response-" + requestUrl);
		if (cacheResult != null) {
			responseWrite(cacheResult, (HttpServletResponse) response);
		}
	}

	@Override
	public void destroy() {

	}

	private static void responseWrite(String params, HttpServletResponse response) throws IOException {
		response.setStatus(200);
		// response.setContentType("application/json");
		// 模拟返回支持跨域访问，正式对接需要自己协调怎么处理跨域问题
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		response.setHeader("Cache-Control", "no-cache, must-revalidate");
		response.getWriter().write(params);
	}

}
