import base from './base'

export default {
	format(type, product, dataCols, choiceData, condition, tableName) {
		let formatter = this.getProduct(product);
		if (type === 'insert') {
			// 复制为insert语句
			return formatter.insert(dataCols, choiceData, tableName);
		} else if (type === 'update') {
			// 复制为update语句
			return formatter.update(dataCols, choiceData, condition, tableName);
		} else if (type === 'json') {
			// 复制为json
			return formatter.json(dataCols, choiceData, tableName);
		}
	},
	getProduct(product) {
		if (product === 'mysql') {
			// 不同数据源类型可以用不用的处理器类型，暂时只实现了一套基础的
		}
		return base;
	},
}
