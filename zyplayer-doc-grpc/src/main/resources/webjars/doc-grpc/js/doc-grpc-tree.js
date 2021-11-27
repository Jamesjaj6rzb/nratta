/**
 * 以树形方式生成并展示：
 * /api
 *   /data
 *     /getDateList
 *       post
 *       get
 * @author 暮光：城中城
 * @since 2018年5月26日
*/

/**
 * 把原始的json字符串转换成对象列表的方式，方便后续使用
 * @param json swagger的原始对象
 * @returns
 */
function createTreeViewByTree(json, keywords) {
	var pathIndex = [];
	if (isEmptyObject(json)) {
		return;
	}
	//console.log(paths);
	var lastId = "";
	for (var i = 0; i < json.length; i++) {
		var service = json[i].service;
		var method = json[i].method;
		//console.log(key, paths[key]);
		if (!findInPathsValue(json[i], keywords)) {
			continue;
		}
		var interfaceTemp = service + "." + method;
		var keyArr = interfaceTemp.split(".");
		var nowPathObj = null;
		keyArr.forEach(function(val, index) {
			//console.log(val, index);
			if(isEmpty(val) && index == 0) {
				return;
			}
			var nowPath = val;
			if (nowPathObj == null) {
				nowPathObj = findNode(pathIndex, nowPath);
				if (nowPathObj == null) {
					nowPathObj = {
						id: pathIndex.length,
						label: nowPath, children: []
					};
					pathIndex.push(nowPathObj);
				}
				lastId = nowPathObj.id;
				nowPathObj = nowPathObj.children;
			} else {
				var tempPathObj = findNode(nowPathObj, nowPath);
				if(tempPathObj == null) {
					tempPathObj = {
						id: lastId + "." + nowPathObj.length,
						label: nowPath, children: []
					};
					nowPathObj.push(tempPathObj);
				}
				lastId = tempPathObj.id;
				nowPathObj = tempPathObj.children;
				if (index == keyArr.length - 1) {
					var tempPath = interfaceTemp;
					tempPathObj.children = null;
					tempPathObj.method = method;
					tempPathObj.interface = tempPath;
					app.treePathDataMap.set(tempPath, json[i]);
				}
			}
		});
	}
	// console.log(pathIndex);
	return pathIndex;
}

function createTreeViewByTreeWithMerge(json, keywords) {
	var pathIndex = createTreeViewByTree(json, keywords);
	mergeNode(pathIndex);
	return pathIndex;
}

/**
 * 查找node节点
 */
function findNode(arr, service){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].label == service) {
			return arr[i];
		}
	}
	return null;
}

/**
 * 多层级合并
 */
function mergeNode(node) {
	for (var i = 0; i < node.length; i++) {
		var tempNode = node[i];
		if (tempNode.children == null
			|| tempNode.children[0].children == null
			|| tempNode.children[0].children[0].children == null) {
			continue;
		}
		if (tempNode.children.length == 1) {
			tempNode.label = tempNode.label + "." + tempNode.children[0].label;
			tempNode.children = tempNode.children[0].children;
			i--;
		}
		mergeNode(tempNode.children);
	}
}

function findInPathsValue(pathsValue, keywords) {
	if (isEmpty(keywords)) {
		return true;
	}
	keywords = keywords.toLowerCase();
	// 找路径和说明里面包含关键字的
	var service = pathsValue.service;
	if (isNotEmpty(service) && service.toLowerCase().indexOf(keywords) >= 0) {
		return true;
	}
	var paramType = pathsValue.paramType;
	if (getNotEmptyStr(paramType).toLowerCase().indexOf(keywords) >= 0) {
		return true;
	}
	var resultType = pathsValue.resultType;
	if (getNotEmptyStr(resultType).toLowerCase().indexOf(keywords) >= 0) {
		return true;
	}
	var method = pathsValue.method;
	if (getNotEmptyStr(method).toLowerCase().indexOf(keywords) >= 0) {
		return true;
	}
	return false;
}

