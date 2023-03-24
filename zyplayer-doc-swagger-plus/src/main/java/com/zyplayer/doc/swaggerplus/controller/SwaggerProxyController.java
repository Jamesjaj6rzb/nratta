package com.zyplayer.doc.swaggerplus.controller;

import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.zyplayer.doc.core.annotation.AuthMan;
import com.zyplayer.doc.core.exception.ConfirmException;
import com.zyplayer.doc.core.json.DocResponseJson;
import com.zyplayer.doc.core.json.ResponseJson;
import com.zyplayer.doc.data.repository.manage.entity.SwaggerDoc;
import com.zyplayer.doc.data.service.manage.SwaggerDocService;
import com.zyplayer.doc.swaggerplus.service.SwaggerHttpRequestService;
import io.swagger.models.Swagger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.spring.web.json.Json;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger.web.SwaggerResource;
import springfox.documentation.swagger.web.UiConfiguration;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

/**
 * 承接了所有的ApiResourceController的接口
 *
 * @author 暮光：城中城
 * @since 2021年10月16日
 */
@AuthMan
@RestController
public class SwaggerProxyController {
	
	private static final String HAL_MEDIA_TYPE = "application/hal+json";
	
	@Resource
	private SwaggerDocService swaggerDocService;
	@Resource
	private SwaggerHttpRequestService swaggerHttpRequestService;
	
	@RequestMapping("/swagger-resources")
	public List<SwaggerResource> swaggerResources() {
		List<SwaggerResource> resourceList = new LinkedList<>();
		List<SwaggerDoc> docList = swaggerDocService.getSwaggerDocList(new SwaggerDoc());
		for (SwaggerDoc swaggerDoc : docList) {
			SwaggerResource resource = new SwaggerResource();
			resource.setUrl("/v2/api-docs?id=" + swaggerDoc.getId());
			resource.setName(swaggerDoc.getName());
			resource.setSwaggerVersion("2.0");
			resourceList.add(resource);
		}
		return resourceList;
	}
	
	@ResponseBody
	@RequestMapping(value = "/v2/api-docs", produces = {MimeTypeUtils.APPLICATION_JSON_VALUE, HAL_MEDIA_TYPE})
	public ResponseEntity<Json> content(HttpServletRequest request, Long id) {
		SwaggerDoc swaggerDoc = swaggerDocService.getById(id);
		if (swaggerDoc == null) {
			throw new ConfirmException("文档不存在");
		}
		if (Objects.equals(swaggerDoc.getDocType(), 1)) {
			String contentStr = swaggerHttpRequestService.requestUrl(request, swaggerDoc.getDocUrl());
			return new ResponseEntity<>(new Json(contentStr), HttpStatus.OK);
		}
		return new ResponseEntity<>(new Json(swaggerDoc.getJsonContent()), HttpStatus.OK);
	}
	
	@ResponseBody
	@RequestMapping(value = "/swagger-resources/configuration/security")
	public ResponseEntity<SecurityConfiguration> securityConfiguration() {
		SecurityConfiguration securityConfiguration = new SecurityConfiguration(null, null, null, null, null, ApiKeyVehicle.HEADER, "api_key", ",");
		return new ResponseEntity<>(securityConfiguration, HttpStatus.OK);
	}
	
	@ResponseBody
	@RequestMapping(value = "/swagger-resources/configuration/ui")
	public ResponseEntity<UiConfiguration> uiConfiguration() {
		UiConfiguration uiConfiguration = new UiConfiguration(null);
		return new ResponseEntity<>(uiConfiguration, HttpStatus.OK);
	}
}

