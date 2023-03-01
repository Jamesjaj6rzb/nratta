package com.zyplayer.doc.db.controller.param;

public class DataViewParam {
	// 基本信息
	private String executeId;
	private Long sourceId;
	private Integer pageSize;
	private Integer pageNum;
	private String dbName;
	private String tableName;
	// 保留的列json，多个使用英文逗号分隔，{"user_info": "id,name,age"}
	private String retainColumnJson;
	// 查询的条件json，{"user_info": "id > 0"}
	private String conditionJson;
	// 哪些列作为update语句的更新条件json，{"user_info": "id,name"}，用于update语句拼where条件使用
	private String conditionColumnJson;
	// 解析之后设置的，待使用
	private String condition;
	private String retainColumn;
	private String conditionColumn;
	// 下载多张数据表
	private String tableNames;
	private String downloadType;
	private Integer dropTableFlag;
	private Integer createTableFlag;
	private Integer downloadFileType;
	// 数据查询时使用，导出暂不支持排序
	private String orderColumn;
	private String orderType;
	
	public Integer getOffset() {
		return ((this.pageNum - 1) * this.pageSize);
	}
	
	public Long getSourceId() {
		return sourceId;
	}
	
	public void setSourceId(Long sourceId) {
		this.sourceId = sourceId;
	}
	
	public String getExecuteId() {
		return executeId;
	}
	
	public void setExecuteId(String executeId) {
		this.executeId = executeId;
	}
	
	public Integer getPageSize() {
		return pageSize;
	}
	
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	
	public Integer getPageNum() {
		return pageNum;
	}
	
	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}
	
	public String getDbName() {
		return dbName;
	}
	
	public void setDbName(String dbName) {
		this.dbName = dbName;
	}
	
	public String getTableName() {
		return tableName;
	}
	
	public void setTableName(String tableName) {
		this.tableName = tableName;
	}
	
	public String getOrderColumn() {
		return orderColumn;
	}
	
	public void setOrderColumn(String orderColumn) {
		this.orderColumn = orderColumn;
	}
	
	public String getOrderType() {
		return orderType;
	}
	
	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}
	
	public String getCondition() {
		return condition;
	}
	
	public void setCondition(String condition) {
		this.condition = condition;
	}
	
	public String getDownloadType() {
		return downloadType;
	}
	
	public void setDownloadType(String downloadType) {
		this.downloadType = downloadType;
	}
	
	public String getConditionColumn() {
		return conditionColumn;
	}
	
	public void setConditionColumn(String conditionColumn) {
		this.conditionColumn = conditionColumn;
	}
	
	public Integer getDropTableFlag() {
		return dropTableFlag;
	}
	
	public void setDropTableFlag(Integer dropTableFlag) {
		this.dropTableFlag = dropTableFlag;
	}
	
	public Integer getCreateTableFlag() {
		return createTableFlag;
	}
	
	public void setCreateTableFlag(Integer createTableFlag) {
		this.createTableFlag = createTableFlag;
	}
	
	public String getRetainColumn() {
		return retainColumn;
	}
	
	public void setRetainColumn(String retainColumn) {
		this.retainColumn = retainColumn;
	}
	
	public String getTableNames() {
		return tableNames;
	}
	
	public void setTableNames(String tableNames) {
		this.tableNames = tableNames;
	}
	
	public Integer getDownloadFileType() {
		return downloadFileType;
	}
	
	public void setDownloadFileType(Integer downloadFileType) {
		this.downloadFileType = downloadFileType;
	}
	
	public String getRetainColumnJson() {
		return retainColumnJson;
	}
	
	public void setRetainColumnJson(String retainColumnJson) {
		this.retainColumnJson = retainColumnJson;
	}
	
	public String getConditionJson() {
		return conditionJson;
	}
	
	public void setConditionJson(String conditionJson) {
		this.conditionJson = conditionJson;
	}
	
	public String getConditionColumnJson() {
		return conditionColumnJson;
	}
	
	public void setConditionColumnJson(String conditionColumnJson) {
		this.conditionColumnJson = conditionColumnJson;
	}
}
