package com.zyplayer.doc.db.framework.db.dto;

/**
 * 表信息
 *
 * @author 暮光：城中城
 * @since 2018-11-27
 */
public class TableInfoDto {
	private String dbName;
	private String tableName;
	private String tableComment;
	private String tableId;

	public String getTableName() {
		return tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public String getTableId() {
		return tableId;
	}

	public void setTableId(String tableId) {
		this.tableId = tableId;
	}

	public String getTableComment() {
		return tableComment;
	}

	public void setTableComment(String tableComment) {
		this.tableComment = tableComment;
	}
	
	public String getDbName() {
		return dbName;
	}
	
	public void setDbName(String dbName) {
		this.dbName = dbName;
	}
}
