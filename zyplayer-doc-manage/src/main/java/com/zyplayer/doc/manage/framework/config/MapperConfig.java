package com.zyplayer.doc.manage.framework.config;

import com.github.dozermapper.core.DozerBeanMapperBuilder;
import com.github.dozermapper.core.DozerConverter;
import com.github.dozermapper.core.Mapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * mapper配置类
 *
 * @author 暮光：城中城
 * @since 2018年12月15日
 */
@Configuration
public class MapperConfig {
	
	@Bean
	public Mapper dozerBeanMapper() {
		DozerBeanMapperBuilder builder = DozerBeanMapperBuilder.create()
				.withCustomConverter(new DateStringConvert(Date.class, String.class))
				.withCustomConverter(new BigdecimalToStringConvert(BigDecimal.class, String.class));
		return builder.build();
	}
	
	private class DateStringConvert extends DozerConverter<Date, String> {
		private DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		public DateStringConvert(Class<Date> prototypeA, Class<String> prototypeB) {
			super(prototypeA, prototypeB);
		}
		
		@Override
		public String convertTo(Date source, String destination) {
			destination = dateFormat.format(source);
			return destination;
		}
		
		@Override
		public Date convertFrom(String source, Date destination) {
			try {
				destination = dateFormat.parse(source);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			return destination;
		}
	}
	
	private class BigdecimalToStringConvert extends DozerConverter<BigDecimal, String> {
		
		public BigdecimalToStringConvert(Class<BigDecimal> prototypeA, Class<String> prototypeB) {
			super(prototypeA, prototypeB);
		}
		
		@Override
		public String convertTo(BigDecimal source, String destination) {
			return source.toString();
		}
		
		@Override
		public BigDecimal convertFrom(String source, BigDecimal destination) {
			return BigDecimal.valueOf(Double.parseDouble(source));
		}
	}
}
