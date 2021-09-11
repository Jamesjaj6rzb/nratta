package com.zyplayer.doc.dubbo.framework.bean;

import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.ReferenceConfig;
import com.alibaba.dubbo.rpc.service.GenericService;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author 暮光：城中城
 * @since 2019年1月10日
 **/
public class ReferenceConfigHolder {
	private static Map<String, ReferenceConfig> referenceConfigMap = new ConcurrentHashMap<>();
	
	public static GenericService getBean(DubboInfo dubboInfo) {
		String name = dubboInfo.getInterfaceX();
		String url = "dubbo://" + dubboInfo.getIp() + ":" + dubboInfo.getPort() + "/" + dubboInfo.getInterfaceX();
		ReferenceConfig referenceConfig = referenceConfigMap.get(name);
		if (referenceConfig == null) {
			ApplicationConfig application = new ApplicationConfig();
			application.setName("zyplayer-doc-consume");
			// 参考：http://dubbo.apache.org/zh-cn/docs/user/configuration/api.html
			// 此实例很重，封装了与注册中心的连接以及与提供者的连接，请自行缓存，否则可能造成内存和连接泄漏
			referenceConfig = new ReferenceConfig<>();
			// 如果点对点直连，可以用reference.setUrl()指定目标地址，设置url后将绕过注册中心，
			// 其中，协议对应provider.setProtocol()的值，端口对应provider.setPort()的值，
			// 路径对应service.setPath()的值，如果未设置path，缺省path为接口名
			referenceConfig.setUrl(url);
			referenceConfig.setInterface(name.substring(name.lastIndexOf(".") + 1));
			referenceConfig.setGeneric(true);
			referenceConfig.setApplication(application);
			referenceConfigMap.put(name, referenceConfig);
		}
		return (GenericService) referenceConfig.get();
	}
	
}
