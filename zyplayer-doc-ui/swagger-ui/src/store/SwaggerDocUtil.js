const methodArray = ["get", "head", "post", "put", "patch", "delete", "options", "trace"];

/**
 * 通过tag创建文档树
 * @param swagger 文档内容
 * @param keywords 搜索内容
 * @returns {{pathDataMap: {}, pathData: {}}}
 */
export function createTreeViewByTag(swagger, keywords) {
    let pathData = {}, pathDataMap = {}, methodStatistic = {};
    let swaggerPaths = swagger.paths;
    if (!swaggerPaths) {
        return {pathDataMap, pathData, methodStatistic};
    }
    //console.log(swaggerPaths);
    Object.keys(swaggerPaths).forEach(url => {
        //console.log(key, swaggerPaths[key]);
        let pathMethods = swaggerPaths[url];
        for (let method of methodArray) {
            if (!pathMethods[method] || !pathMethods[method].tags) {
                continue;
            }
            let methodUp = method.toUpperCase();
            methodStatistic[methodUp] = (methodStatistic[methodUp] || 0) + 1;
            methodStatistic['TOTAL'] = (methodStatistic['TOTAL'] || 0) + 1;
            pathMethods[method].tags.forEach(tag => {
                let pathTag = pathData[tag];
                if (!pathTag) {
                    pathTag = pathData[tag] = {};
                }
                let pathTagUrl = pathTag[url];
                if (!pathTagUrl) {
                    pathTagUrl = pathTag[url] = {};
                }
                let tempPath = url + "." + method;
                pathTagUrl[method] = pathMethods[method];
                pathTagUrl[method].path = tempPath;
                pathTagUrl[method].url = url;
                pathTagUrl[method].method = method;
                // url对应文档的映射
                pathDataMap[tempPath] = pathMethods[method];
            });
        }
    });
    return {pathData, pathDataMap, methodStatistic};
}

export function getTreeDataForTag(swagger, pathData, metaInfo) {
    return [
        {
            key: 'main',
            title: swagger.title || 'Swagger接口文档',
            children: getTreeHtmlForTag(swagger.tags, pathData, metaInfo)
        }
    ];
}

function getTreeHtmlForTag(swaggerTags, pathData, metaInfo) {
    let treeData = [];
    let indexTag = 1;
    // 遍历分组
    swaggerTags.forEach(tag => {
        let indexUrl = 1;
        let urlTree = [];
        let pathTagNode = pathData[tag.name];
        if (!pathTagNode) {
            return;
        }
        // 遍历路劲
        Object.keys(pathTagNode).forEach(url => {
            let indexMethod = 1;
            let pathUrlNode = pathTagNode[url];
            // 遍历方法
            Object.keys(pathUrlNode).forEach(method => {
                let tempTreeId = indexTag + "_" + indexUrl + "_" + indexMethod;
                let methodNode = pathUrlNode[method];
                methodNode.treeId = tempTreeId;
                let title = methodNode.summary || methodNode.path;
                urlTree.push({
                    title: title,
                    key: tempTreeId,
                    isLeaf: true,
                    method: methodNode.method,
                    query: {
                        ...metaInfo,
                        path: methodNode.url,
                        method: methodNode.method,
                    }
                });
                indexMethod++;
            });
            indexUrl++;
        });
        treeData.push({title: tag.name, key: indexTag, children: urlTree});
        indexTag++;
    });
    return treeData;
}
