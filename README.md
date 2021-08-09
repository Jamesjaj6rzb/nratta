# zyplayer-doc

#### 项目介绍
定位为所有文档的管理项目，swagger文档、数据库文档、、、、等，提供一整套的解决方案，欢迎有想法的一起来写

#### 软件架构
##### zyplayer-doc-core 一些核心、公用的类

##### zyplayer-doc-db 数据库文档
> 原[zyplayer-doc-db](https://gitee.com/zyplayer/zyplayer-doc-db)，具有数据库文档的查看、管理、导出等功能

##### zyplayer-doc-manage 可以单独部署的文档管理后台
> 后端使用spring-boot、mybatis-plus、springfox-swagger等优秀框架，前端使用[ZUI](http://zui.sexy/)、[Vue](https://cn.vuejs.org/)等框架

> 已集成三套优秀swagger文档前端：[zyplayer-doc-swagger](https://gitee.com/zyplayer/zyplayer-doc)、[swagger-bootstrap-ui](https://gitee.com/xiaoym/swagger-bootstrap-ui)、[springfox-swagger-ui](https://github.com/springfox/springfox/tree/master/springfox-swagger-ui)

> 已集成[zyplayer-doc-db](https://gitee.com/zyplayer/zyplayer-doc)数据库文档

##### zyplayer-doc-swagger 原[swagger-mg-ui](https://gitee.com/zyplayer/swagger-mg-ui)，swagger的UI及整套解决方案
> 具有 后端存储、代理请求、模拟返回、所有文档管理 等一系列原创功能，不止UI

#### 打开方式

1. 创建数据库：zyplayer_doc_manage，执行脚本：[zyplayer_doc_manage.sql](https://gitee.com/zyplayer/zyplayer-doc/blob/master/zyplayer-doc-manage/src/main/resources/sql/zyplayer_doc_manage.sql)

2. 修改zyplayer-doc-manage项目的application.yml配置文件里面的数据库账号密码

3. 启动zyplayer-doc-manage项目
![](https://images.gitee.com/uploads/images/2019/0106/212019_fa2bc7ec_596905.png "屏幕截图.png")
![](https://images.gitee.com/uploads/images/2018/1219/231332_0a95e458_596905.png "屏幕截图.png")

完成，就可以看到提供的三套UI地址和一个后台管理地址，默认集成了三套优秀的swagger的UI提供选择

进入：http://127.0.0.1:8082/zyplayer-doc-manage/document.html 管理和增加任意地址的文档，在集成的三套UI中都可以直接查看和调试这里配置的文档，不用对UI做任何调整，只要标准的UI集成进来也可以直接用
![](https://images.gitee.com/uploads/images/2018/1216/223459_553cd220_596905.png "屏幕截图.png")

![](https://images.gitee.com/uploads/images/2018/1216/223927_a35c6cc5_596905.png "屏幕截图.png")

#### 权限和人员管理
进入后台管理地址可对人员、权限进行配置：http://127.0.0.1:8082/zyplayer-doc-manage/statics/manage/home.html 所有的文档都必须登录之后且具有权限才可访问
![](https://images.gitee.com/uploads/images/2018/1216/224050_3f93dd4a_596905.png "屏幕截图.png")