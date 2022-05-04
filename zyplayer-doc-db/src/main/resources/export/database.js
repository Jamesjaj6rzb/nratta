var docDbDatabase = {"columnList":{"es_datasource":[{"description":"主键自增ID","name":"id","nullable":"0","type":"bigint(20)"},{"description":"数据源名称","name":"name","nullable":"1","type":"varchar(50)"},{"description":"地址和端口","name":"host_port","nullable":"1","type":"varchar(512)"},{"description":"scheme，http或其他","name":"scheme","nullable":"1","type":"varchar(512)"},{"description":"创建人ID","name":"create_user_id","nullable":"1","type":"bigint(20)"},{"description":"创建人名字","name":"create_user_name","nullable":"1","type":"varchar(20)"},{"description":"创建时间","name":"create_time","nullable":"1","type":"datetime"},{"description":"是否有效 0=无效 1=有效","name":"yn","nullable":"1","type":"tinyint(4)"}],"db_datasource":[{"description":"主键自增ID","name":"id","nullable":"0","type":"bigint(20)"},{"description":"数据源驱动类","name":"driver_class_name","nullable":"1","type":"varchar(50)"},{"description":"数据源地址","name":"source_url","nullable":"1","type":"varchar(512)"},{"description":"数据源用户名","name":"source_name","nullable":"1","type":"varchar(50)"},{"description":"数据源密码","name":"source_password","nullable":"1","type":"varchar(50)"},{"description":"创建人ID","name":"create_user_id","nullable":"1","type":"bigint(20)"},{"description":"创建人名字","name":"create_user_name","nullable":"1","type":"varchar(20)"},{"description":"创建时间","name":"create_time","nullable":"1","type":"datetime"},{"description":"是否有效 0=无效 1=有效","name":"yn","nullable":"1","type":"tinyint(4)"},{"description":"数据源名称","name":"name","nullable":"1","type":"varchar(50)"}],"user_auth":[{"description":"主键自增ID","name":"id","nullable":"0","type":"bigint(20)"},{"description":"用户ID","name":"user_id","nullable":"1","type":"bigint(20)"},{"description":"权限ID","name":"auth_id","nullable":"1","type":"bigint(20)"},{"description":"创建用户ID","name":"create_uid","nullable":"1","type":"bigint(20)"},{"description":"更新用户ID","name":"update_uid","nullable":"1","type":"bigint(20)"},{"description":"是否删除 0=未删除 1=已删除","name":"del_flag","nullable":"1","type":"tinyint(4)"},{"description":"创建时间","name":"creation_time","nullable":"1","type":"datetime"},{"description":"更新时间","name":"update_time","nullable":"1","type":"datetime"},{"description":"自定义权限结尾","name":"auth_custom_suffix","nullable":"1","type":"varchar(100)"}],"auth_info":[{"description":"主键自增ID","name":"id","nullable":"0","type":"bigint(20)"},{"description":"权限名","name":"auth_name","nullable":"1","type":"varchar(50)"},{"description":"权限说明","name":"auth_desc","nullable":"1","type":"varchar(100)"},{"description":"是否可编辑 0=否 1=是","name":"can_edit","nullable":"1","type":"tinyint(4)"},{"description":"创建人用户ID","name":"create_uid","nullable":"1","type":"bigint(20)"},{"description":"创建时间","name":"creation_time","nullable":"1","type":"datetime"},{"description":"权限类型 0=可使用 1=隐藏权限","name":"auth_type","nullable":"0","type":"tinyint(4)"}]},"tableList":[{"description":"","tableName":"db_datasource"},{"description":"权限信息表","tableName":"auth_info"},{"description":"","tableName":"es_datasource"},{"description":"","tableName":"user_auth"}]}