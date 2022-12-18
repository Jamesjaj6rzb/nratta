package com.zyplayer.doc.db.service;

import com.zyplayer.doc.db.framework.db.enums.DatabaseProductEnum;
import org.springframework.stereotype.Service;

@Service
public class OracleServiceImpl extends DbBaseService {
	
	@Override
	DatabaseProductEnum getDatabaseProduct() {
		return DatabaseProductEnum.ORACLE;
	}
}
