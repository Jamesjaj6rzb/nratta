
package com.zyplayer.doc.manage.framework.config;

import com.google.common.base.Predicates;
import com.zyplayer.doc.swagger.framework.configuration.EnableDocSwagger;
import io.swagger.annotations.Api;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

/**
 * 不需要管理本项目的文档，只需要开启@EnableDocSwagger即可
 * @author 暮光：城中城
 * @since 2018年11月11日
 */
@Configuration
@EnableDocSwagger(
	selfDoc = false// 是否开启自身的文档
)
public class SwaggerConfiguration {

	@Bean
	public Docket createRestApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.apis(Predicates.or(
					RequestHandlerSelectors.basePackage("com.zyplayer.doc.manage"),
					RequestHandlerSelectors.withClassAnnotation(Api.class)))
				.paths(PathSelectors.any())
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("zyplayer-doc-manage接口文档")
				.description("欢迎使用")
				.termsOfServiceUrl("")
				.contact(new Contact("", "", ""))
				.version("1.0")
				.build();
	}
}
