(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={index:0},o={index:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-24e2611c":"78802811","chunk-2d207ece":"7082335b","chunk-32cc5643":"3536e9a6","chunk-34407190":"efce39df","chunk-49c0ba36":"c0b5607a","chunk-4cdf76bb":"fb302398","chunk-74910b48":"1671a875","chunk-ff4f9ca0":"929c179f","chunk-1f1da349":"0dfa90f2","chunk-72e49b1a":"095bf283","chunk-a21d2576":"83cdcde6","chunk-578c28a7":"83c83c20","chunk-ed5bdb80":"246b9406"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-24e2611c":1,"chunk-32cc5643":1,"chunk-34407190":1,"chunk-49c0ba36":1,"chunk-4cdf76bb":1,"chunk-74910b48":1,"chunk-ff4f9ca0":1,"chunk-1f1da349":1,"chunk-72e49b1a":1,"chunk-a21d2576":1,"chunk-578c28a7":1,"chunk-ed5bdb80":1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-24e2611c":"bf68cbeb","chunk-2d207ece":"31d6cfe0","chunk-32cc5643":"5a5b2ca1","chunk-34407190":"57bbfb51","chunk-49c0ba36":"ec6236ec","chunk-4cdf76bb":"ee7c52fa","chunk-74910b48":"47603b8f","chunk-ff4f9ca0":"d02f27be","chunk-1f1da349":"3a83823c","chunk-72e49b1a":"8ccc36ca","chunk-a21d2576":"08702abb","chunk-578c28a7":"83c6d32d","chunk-ed5bdb80":"17d2b8a1"}[e]+".css",o=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],p.parentNode.removeChild(p),a(r)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,a[1](u)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0a79":function(e,t,a){"use strict";var n=a("4328"),i=a.n(n),o=a("d978");t["a"]={pageUpdate:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/update",method:"post",data:i.a.stringify(e)})},pageChangeParent:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/changeParent",method:"post",data:i.a.stringify(e)})},pageList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/list",method:"post",data:i.a.stringify(e)})},updatePage:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/update",method:"post",data:i.a.stringify(e)})},pageDetail:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/detail",method:"post",data:i.a.stringify(e)})},pageDelete:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/delete",method:"post",data:i.a.stringify(e)})},pageHistoryList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/history/list",method:"post",data:i.a.stringify(e)})},pageHistoryDetail:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/history/detail",method:"post",data:i.a.stringify(e)})},pageNews:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/news",method:"post",data:i.a.stringify(e)})},pageSearchByEs:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/searchByEs",method:"post",data:i.a.stringify(e)})},pageLock:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/lock",method:"post",data:i.a.stringify(e)})},pageUnlock:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/unlock",method:"post",data:i.a.stringify(e)})},spaceFavoriteUpdate:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/favorite/update",method:"post",data:i.a.stringify(e)})},spaceAuthAssign:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/auth/assign",method:"post",data:i.a.stringify(e)})},spaceAuthList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/auth/list",method:"post",data:i.a.stringify(e)})},spaceSettingList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/setting/list",method:"post",data:i.a.stringify(e)})},spaceSettingUpdate:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/setting/update",method:"post",data:i.a.stringify(e)})},spaceList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/list",method:"post",data:i.a.stringify(e)})},updateSpace:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/space/update",method:"post",data:i.a.stringify(e)})},getPageUserAuthList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/auth/list",method:"post",data:i.a.stringify(e)})},assignPageUserAuth:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/auth/assign",method:"post",data:i.a.stringify(e)})},deletePageFile:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/file/delete",method:"post",data:i.a.stringify(e)})},pageCommentList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/comment/list",method:"post",data:i.a.stringify(e)})},updatePageComment:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/comment/update",method:"post",data:i.a.stringify(e)})},deletePageComment:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/comment/delete",method:"post",data:i.a.stringify(e)})},pageZanList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/zan/list",method:"post",data:i.a.stringify(e)})},updatePageZan:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/page/zan/update",method:"post",data:i.a.stringify(e)})},openPageDetail:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/open-api/page/detail",method:"post",data:i.a.stringify(e)})},openPageList:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/open-api/page/list",method:"post",data:i.a.stringify(e)})},openSpaceInfo:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/open-api/space/info",method:"post",data:i.a.stringify(e)})},openPageNews:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/open-api/page/news",method:"post",data:i.a.stringify(e)})},xxxxxxxxxxxx:function(e){return Object(o["a"])({url:"update",method:"post",data:i.a.stringify(e)})}}},"149b":function(e,t,a){"use strict";a("197f")},"14eb":function(e,t,a){"use strict";a("9f92")},"180a":function(e,t,a){},"197f":function(e,t,a){},"1a7f":function(e,t,a){},"1cc7":function(e,t,a){"use strict";a("d1f1")},"34c6":function(e,t,a){"use strict";a("180a")},"50da":function(e,t,a){"use strict";a("1a7f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b0c0"),a("d3b7"),a("159b");var n=a("2b0e"),i=a("5c96"),o=a.n(i),r=(a("0fae"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),s=[],c={name:"app",components:{},data:function(){return{}},methods:{}},l=c,d=(a("034f"),a("2877")),u=Object(d["a"])(l,r,s,!1,null,null,null),p=u.exports,h=a("8c4f"),f=(a("3ca3"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"global-layout-vue"},[a("el-container",[a("el-aside",{directives:[{name:"show",rawName:"v-show",value:e.leftCollapse,expression:"leftCollapse"}],style:{width:e.rightAsideWidth+"px"}},[a("div",{staticStyle:{padding:"10px",height:"100%","box-sizing":"border-box",background:"#fafafa"}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:e.choiceSpace,filterable:"",placeholder:"选择空间"},on:{change:e.spaceChangeEvents}},[a("el-option-group",{attrs:{label:""}},[a("el-option",{key:"0",attrs:{label:"创建空间",value:"0"}}),a("el-option",{key:"-1",attrs:{label:"空间管理",value:"-1"}})],1),a("el-option-group",{attrs:{label:""}},e._l(e.spaceOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("div",{attrs:{align:"center"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-plus"},on:{click:e.createWiki}},[e._v("创建文档")])],1),a("el-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"搜索文档"},on:{input:e.searchByKeywords},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchByKeywords.apply(null,arguments)}},model:{value:e.searchKeywords,callback:function(t){e.searchKeywords=t},expression:"searchKeywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchByKeywordsNewPage},slot:"append"})],1),a("div",{staticStyle:{overflow:"auto","padding-bottom":"30px"}},[a("el-tree",{ref:"wikiPageTree",staticStyle:{"background-color":"#fafafa"},attrs:{props:e.defaultProps,data:e.wikiPageList,draggable:"","filter-node-method":e.filterPageNode,"highlight-current":"","expand-on-click-node":!1,"default-expanded-keys":e.wikiPageExpandedKeys,"node-key":"id"},on:{"node-click":e.handleNodeClick,"node-expand":e.handleNodeExpand,"node-drop":e.handlePageDrop}})],1)],1)]),a("RightResize",{directives:[{name:"show",rawName:"v-show",value:e.leftCollapse,expression:"leftCollapse"}],on:{change:e.rightAsideWidthChange},model:{value:e.rightAsideWidth,callback:function(t){e.rightAsideWidth=t},expression:"rightAsideWidth"}}),a("el-container",[a("el-header",[e.leftCollapse?a("i",{staticClass:"el-icon-fold el-icon-s-fold",on:{click:e.turnLeftCollapse}}):a("i",{staticClass:"el-icon-fold el-icon-s-unfold",on:{click:e.turnLeftCollapse}}),a("span",{staticClass:"header-right-user-name"},[e._v(e._s(e.userSelfInfo.userName))]),a("el-popover",{attrs:{placement:"bottom",width:"600",trigger:"click"},model:{value:e.userMessagePopVisible,callback:function(t){e.userMessagePopVisible=t},expression:"userMessagePopVisible"}},[a("el-badge",{staticStyle:{"line-height":"20px",margin:"0 15px"},attrs:{slot:"reference","is-dot":e.haveNotReadUserMessage},slot:"reference"},[a("i",{staticClass:"el-icon-bell head-icon",staticStyle:{"margin-right":"0"},on:{click:e.loadUserMessageIfPopVisible}})]),a("div",{staticStyle:{"margin-bottom":"10px"}},[a("span",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[e._v("通知")]),e.haveNotReadUserMessage?a("el-link",{staticStyle:{float:"right"},attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.readAllUserMessage}},[e._v("本页标记已读")]):e._e()],1),a("div",{staticClass:"header-user-message"},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"5px"},attrs:{data:e.userMessageList,border:"","max-height":"500",size:"mini"}},[a("el-table-column",{attrs:{prop:"operatorUserName",label:"操作人",width:"100px"}}),a("el-table-column",{attrs:{prop:"creationTime",label:"操作时间",width:"140px"}}),a("el-table-column",{attrs:{label:"内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.msgContent)+" "),a("el-badge",{staticStyle:{"line-height":"10px","padding-right":"5px"},attrs:{slot:"reference","is-dot":0==t.row.msgStatus},slot:"reference"},[a("el-link",{attrs:{type:"primary"},on:{click:function(a){return e.showUserMessage(t.row)}}},[e._v("查看>")])],1)]}}])})],1),a("div",{staticClass:"page-info-box"},[a("el-pagination",{attrs:{"page-size":e.userMsgParam.pageSize,"current-page":e.userMsgParam.pageNum,layout:"prev, pager, next, total",total:e.userMsgTotalCount},on:{"current-change":e.handleCurrentChange}})],1)],1)],1),a("el-dropdown",{attrs:{trigger:"click"},on:{command:e.userSettingDropdown}},[a("i",{staticClass:"el-icon-setting head-icon"}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"console"}},[e._v("控制台")]),a("el-dropdown-item",{attrs:{command:"aboutDoc"}},[e._v("关于")]),a("el-dropdown-item",{attrs:{command:"userSignOut",divided:""}},[e._v("退出登录")])],1)],1)],1),a("el-main",{staticStyle:{padding:"0","border-left":"1px solid #dcdfe6"}},[a("router-view",{attrs:{spaceId:e.choiceSpace,spaceInfo:e.getSpaceInfo(e.choiceSpace)},on:{loadPageList:e.loadPageList,changeExpandedKeys:e.changeWikiPageExpandedKeys,switchSpace:e.switchSpacePage,loadSpace:e.loadSpaceList}})],1)],1)],1),a("create-space",{ref:"createSpace",on:{success:e.loadSpaceList}}),a("about-dialog",{ref:"aboutDialog"})],1)}),g=[],m=(a("4ec9"),a("4de4"),a("a15b"),a("7db0"),a("9f03")),b=a("0a79"),y=a("c82a"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"rightResize",staticClass:"right-resize"},[a("i",{ref:"rightResizeBar"},[e._v("...")])])},w=[],k={data:function(){return{rightAsideWidth:300}},mounted:function(){this.dragChangeRightAsideWidth()},methods:{dragChangeRightAsideWidth:function(){var e=this,t=this.$refs.rightResize,a=this.$refs.rightResizeBar;t.onmousedown=function(n){var i=n.clientX;return t.style.background="#ccc",a.style.background="#aaa",t.left=t.offsetLeft,document.onmousemove=function(t){var a=t.clientX,n=i-a;(n<0&&e.rightAsideWidth<600||n>0&&e.rightAsideWidth>300)&&(i=a,e.rightAsideWidth-=n,e.rightAsideWidth<300&&(e.rightAsideWidth=300),e.$emit("input",e.rightAsideWidth),e.$emit("change",e.rightAsideWidth))},document.onmouseup=function(){t.style.background="#fafafa",a.style.background="#ccc",document.onmousemove=null,document.onmouseup=null},!1}}}},S=k,_=(a("b49e"),Object(d["a"])(S,v,w,!1,null,"5c90866c",null)),x=_.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"关于",visible:e.aboutDialogVisible,width:"600px","custom-class":"about-zyplayer-doc"},on:{"update:visible":function(t){e.aboutDialogVisible=t}}},[a("div",{},[a("div",{staticStyle:{"font-weight":"bold","font-size":"25px"}},[e._v("zyplayer-doc")]),a("div",{staticStyle:{"line-height":"30px",padding:"10px 0"}},[a("div",[e._v("版本 "+e._s(e.upgradeInfo.nowVersion||"1.0.0"))]),a("div",[e._v("版权所有 © 2018-2021 "),a("a",{attrs:{target:"_blank",href:"http://doc.zyplayer.com"}},[e._v("doc.zyplayer.com")])])]),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"支持"}},[a("div",{staticStyle:{"line-height":"30px"}},[a("div",[e._v("文档："),a("a",{attrs:{target:"_blank",href:"http://doc.zyplayer.com/zyplayer-doc-manage/doc-wiki#/page/share/view?pageId=1&space=23f3f59a60824d21af9f7c3bbc9bc3cb"}},[e._v("http://doc.zyplayer.com")])]),a("div",[e._v("主页："),a("a",{attrs:{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"}},[e._v("https://gitee.com/zyplayer/zyplayer-doc")])]),a("div",[e._v("反馈："),a("a",{attrs:{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc/issues"}},[e._v("https://gitee.com/zyplayer/zyplayer-doc/issues")])]),a("div",[e._v("特性关注&技术交流QQ群：466363173")]),a("el-divider",{attrs:{"content-position":"left"}},[e._v("UI/设计/开发/测试")]),a("div",[a("a",{attrs:{target:"_blank",href:"http://zyplayer.com"}},[e._v("暮光：城中城")])])],1)]),a("el-tab-pane",{attrs:{label:"开源软件"}},[a("div",{staticStyle:{"line-height":"30px"}},[a("div",[e._v("此项目基于以下开源软件构建")]),a("el-divider",{attrs:{"content-position":"left"}},[e._v("后端")]),a("div",[a("a",{attrs:{target:"_blank",href:"https://spring.io/projects/spring-boot"}},[e._v("Spring-Boot")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"http://www.mybatis.org"}},[e._v("MyBatis")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://github.com/alibaba/druid"}},[e._v("Druid")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://mp.baomidou.com"}},[e._v("MyBatis-Plus")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://www.hutool.cn"}},[e._v("Hutool")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://github.com/alibaba/fastjson"}},[e._v("Fastjson")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://alibaba-easyexcel.github.io"}},[e._v("Easy Excel")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://swagger.io"}},[e._v("Swagger")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"https://dubbo.io"}},[e._v("Dubbo")]),e._v("、 "),a("a",{attrs:{target:"_blank",href:"http://www.eclipse.org/jgit"}},[e._v("JGit")]),e._v("、... ")]),a("el-divider",{attrs:{"content-position":"left"}},[e._v("前端")]),e._v(" Vue、element-ui、wangeditor、mavon-editor、qrcodejs2、vant、vue-router、axios、vue-hljs、brace、echarts、sql-formatter、vue-clipboard2、... "),a("div")],1)]),e.upgradeInfo.lastVersion?a("el-tab-pane",{attrs:{label:"软件更新"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 软件更新 "),a("sup",{staticClass:"el-badge__content el-badge__content--undefined is-fixed is-dot",staticStyle:{top:"10px",right:"20px"}})]),a("div",{staticStyle:{"line-height":"30px"}},[a("div",[e._v("当前版本："+e._s(e.upgradeInfo.nowVersion))]),a("div",[e._v("最新版本："+e._s(e.upgradeInfo.lastVersion))]),a("div",[e._v("升级地址："),a("a",{attrs:{target:"_blank",href:e.upgradeInfo.upgradeUrl}},[e._v(e._s(e.upgradeInfo.upgradeUrl))])]),a("div",[e._v("升级内容：")]),a("pre",{staticStyle:{margin:"0","max-height":"250px",overflow:"auto"}},[e._v(e._s(e.upgradeInfo.upgradeContent))])])]):e._e()],1)],1)])},L=[],C=(a("ac1f"),a("5319"),a("5b81"),a("4328")),I=a.n(C),z=a("d978"),O={systemUpgradeInfo:function(e){return Object(z["a"])({url:"/system/info/upgrade",method:"post",data:I.a.stringify(e)})}},j={data:function(){return{aboutDialogVisible:!1,upgradeInfo:{}}},mounted:function(){this.checkSystemUpgrade()},methods:{show:function(){this.aboutDialogVisible=!0},checkSystemUpgrade:function(){var e=this;O.systemUpgradeInfo({}).then((function(t){t.data&&(e.upgradeInfo=t.data,e.upgradeInfo.upgradeContent&&(e.upgradeInfo.upgradeContent=e.upgradeInfo.upgradeContent.replaceAll("；","\n"),console.log("zyplayer-doc发现新版本：\n升级地址："+t.data.upgradeUrl+"\n当前版本："+t.data.nowVersion+"\n最新版本："+t.data.lastVersion+"\n升级内容："+t.data.upgradeContent)))}))}}},M=j,U=(a("1cc7"),Object(d["a"])(M,P,L,!1,null,null,null)),E=U.exports,$={data:function(){return{leftCollapse:!0,rightContentLoading:!1,pathIndex:[],defaultProps:{children:"children",label:"name"},spaceOptions:[],spaceList:[],choiceSpace:"",nowSpaceShow:{},nowPageId:"",treePathDataMap:new Map,searchKeywords:"",wikiPageList:[],wikiPage:{},wikiPageExpandedKeys:[],userSelfInfo:{},userMessageList:[],haveNotReadUserMessage:!1,userMessagePopVisible:!1,userMsgTotalCount:0,userMsgParam:{sysType:2,pageNum:1,pageSize:20},rightAsideWidth:300}},components:{RightResize:x,"create-space":y["a"],"about-dialog":E},computed:{},mounted:function(){this.loadSpaceList(),this.loadUserMessageList(),this.getSelfUserInfo()},methods:{loadPageList:function(e){e=e||{},this.doGetPageList(e.parentId,e.node)},turnLeftCollapse:function(){var e=this;this.leftCollapse=!this.leftCollapse,setTimeout((function(){e.leftCollapse?e.rightAsideWidthChange(e.rightAsideWidth+1):e.rightAsideWidthChange(1)}),100)},createWiki:function(){this.choiceSpace>0?this.$router.push({path:"/page/edit",query:{parentId:this.nowPageId}}):this.$message.warning("请先选择或创建空间")},changeWikiPageExpandedKeys:function(e){},searchByKeywords:function(){this.$refs.wikiPageTree.filter(this.searchKeywords)},searchByKeywordsNewPage:function(){var e=this.$router.resolve({path:"/page/search",query:{keywords:this.searchKeywords}});window.open(e.href,"_blank")},handleNodeClick:function(e){console.log("点击节点：",e),this.nowPageId=e.id,this.$router.push({path:"/page/show",query:{pageId:e.id}}),this.handleNodeExpand(e)},handleNodeExpand:function(e){e.children.length>0&&e.children[0].needLoad&&(console.log("加载节点：",e),this.doGetPageList(e.id,e))},handlePageDrop:function(e,t,a,n){var i=this;console.log("tree drop: ",e.data,t.data,a);var o={id:e.data.id,parentId:t.data.parentId};"inner"==a?o.parentId=t.data.id:"before"==a?o.beforeSeq=t.data.seqNo:"after"==a&&(o.afterSeq=t.data.seqNo),b["a"].pageChangeParent(o).then((function(e){i.doGetPageList(null)}))},loadUserMessageIfPopVisible:function(){this.userMessagePopVisible||this.loadUserMessageList()},loadUserMessageList:function(){var e=this;m["a"].getUserMessageList(this.userMsgParam).then((function(t){e.userMessageList=t.data||[],e.userMsgTotalCount=t.total||0,e.haveNotReadUserMessage=e.userMessageList.filter((function(e){return 0==e.msgStatus})).length>0}))},showUserMessage:function(e){var t=this;0==e.msgStatus&&m["a"].readUserMessage({ids:e.id}).then((function(){t.loadUserMessageList()})),e.msgType>=2&&e.msgType<=12&&(this.$router.push({path:"/page/show",query:{pageId:e.dataId}}),this.userMessagePopVisible=!1)},readAllUserMessage:function(){var e=this,t=[];this.userMessageList.filter((function(e){return 0==e.msgStatus})).forEach((function(e){t.push(e.id)})),t.length<=0||m["a"].readUserMessage({ids:t.join(",")}).then((function(){e.$message.success("标记成功"),e.loadUserMessageList()}))},handleCurrentChange:function(e){this.userMsgParam.pageNum=e,this.loadUserMessageList()},filterPageNode:function(e,t){if(!e||!t.name)return!0;var a=t.name.toLowerCase();return-1!==a.indexOf(e.toLowerCase())},spaceChangeEvents:function(e){if(0==e)this.$refs.createSpace.show();else if(-1==e)this.$router.push({path:"/space/manage"});else{this.choiceSpace=e;for(var t=0;t<this.spaceList.length;t++)if(this.spaceList[t].id==e){this.nowSpaceShow=this.spaceList[t];break}this.nowPageId="",this.doGetPageList(null),this.$router.push({path:"/home",query:{spaceId:e}})}},loadSpaceList:function(e){var t=this;b["a"].spaceList({}).then((function(a){t.spaceList=a.data||[];var n=[];if(t.spaceList.forEach((function(e){return n.push({label:e.name,value:e.id})})),t.spaceOptions=n,t.spaceList.length>0){var i=e,o=t.spaceList.find((function(t){return t.id==e}));o||(o=t.spaceList[0],i=o.id),t.nowSpaceShow=o,t.choiceSpace=i,t.nowPageId="",t.doGetPageList(null);try{"/home"==t.$router.app._route.path&&t.$router.push({path:"/home",query:{spaceId:i}})}catch(r){console.log(r)}}}))},doGetPageList:function(e,t){var a=this,n={spaceId:this.choiceSpace,parentId:e||0};0===this.nowSpaceShow.treeLazyLoad&&(n.parentId=null),b["a"].pageList(n).then((function(n){var i=n.data||[],o=[];if(0===a.nowSpaceShow.treeLazyLoad)o=i;else for(var r=0;r<i.length;r++){var s=i[r];s.parentId=s.parentId||0,s.children=[{name:"加载中...",needLoad:!0}],o.push(s)}e>0?t.children=o:a.wikiPageList=o})).catch((function(){e>0&&(t.children=[])}))},userSettingDropdown:function(e){console.log("command:"+e),"userSignOut"==e?this.userSignOut():"aboutDoc"==e?this.$refs.aboutDialog.show():"myInfo"==e?this.$router.push({path:"/user/myInfo"}):"console"==e?window.open("./","_blank"):this.$message.warning("暂未开放")},userSignOut:function(){m["a"].userLogout().then((function(){location.reload()}))},getSelfUserInfo:function(){var e=this;m["a"].getSelfUserInfo().then((function(t){e.userSelfInfo=t.data}))},getSpaceInfo:function(e){for(var t=0;t<this.spaceList.length;t++)if(this.spaceList[t].id==e)return this.spaceList[t];return{}},switchSpacePage:function(e){e=parseInt(e),this.choiceSpace!=e&&(this.choiceSpace=e,this.doGetPageList(null))},rightAsideWidthChange:function(e){this.$store.commit("global/setRightAsideWidth",e)}}},A=$,N=(a("149b"),Object(d["a"])(A,f,g,!1,null,null,null)),W=N.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("el-container",[a("el-aside",{directives:[{name:"show",rawName:"v-show",value:e.leftCollapse,expression:"leftCollapse"}],staticStyle:{"background-color":"#fafafa"},style:{width:e.rightAsideWidth+"px"},attrs:{width:"300px"}},[a("div",{staticClass:"logo"},[e._v(e._s(e.nowSpaceShow.name))]),a("div",{staticStyle:{padding:"10px","box-sizing":"border-box",background:"#fafafa"}},[a("el-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"搜索文档"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchByKeywords.apply(null,arguments)}},model:{value:e.searchKeywords,callback:function(t){e.searchKeywords=t},expression:"searchKeywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchByKeywords},slot:"append"})],1),a("el-tree",{ref:"wikiPageTree",staticStyle:{"background-color":"#fafafa","padding-bottom":"30px"},attrs:{props:e.defaultProps,data:e.wikiPageList,"filter-node-method":e.filterPageNode,"highlight-current":"","expand-on-click-node":!1,"default-expanded-keys":e.wikiPageExpandedKeys,"node-key":"id"},on:{"node-click":e.handleNodeClick}}),a("div",{staticClass:"build-info"},[e._v("本文档使用"),a("a",{attrs:{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"}},[e._v("zyplayer-doc")]),e._v("构建")])],1)]),a("RightResize",{directives:[{name:"show",rawName:"v-show",value:e.leftCollapse,expression:"leftCollapse"}],model:{value:e.rightAsideWidth,callback:function(t){e.rightAsideWidth=t},expression:"rightAsideWidth"}}),a("el-container",[a("el-main",{staticClass:"doc-body-box"},[a("router-view")],1)],1)],1)],1)},D=[],F={data:function(){return{leftCollapse:!0,defaultProps:{children:"children",label:"name"},spaceUuid:"",nowPageId:"",nowSpaceShow:{},searchKeywords:"",wikiPageList:[],wikiPageExpandedKeys:[],rightAsideWidth:300}},components:{RightResize:x},mounted:function(){this.spaceUuid=this.$route.query.space||"",this.getSpaceInfo(),this.doGetPageList(null)},methods:{filterPageNode:function(e,t){if(!e||!t.name)return!0;var a=t.name.toLowerCase();return-1!==a.indexOf(e.toLowerCase())},handleNodeClick:function(e){this.nowPageId!=e.id&&(console.log("点击节点：",e),this.nowPageId=e.id,this.$router.push({path:"/page/share/view",query:{pageId:e.id,space:this.spaceUuid}}))},searchByKeywords:function(){this.$refs.wikiPageTree.filter(this.searchKeywords)},doGetPageList:function(){var e=this;b["a"].openPageList({space:this.spaceUuid}).then((function(t){e.wikiPageList=t.data||[],e.nowPageId=""}))},getSpaceInfo:function(){var e=this;b["a"].openSpaceInfo({space:this.spaceUuid}).then((function(t){e.nowSpaceShow=t.data}))}}},V=F,T=(a("50da"),Object(d["a"])(V,K,D,!1,null,"a8a86fe2",null)),R=T.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"share-mobile-layout"},[a("van-popup",{staticClass:"popup-module",style:{height:"100%",width:"80%"},attrs:{closeable:"",position:"left"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[a("div",{staticClass:"header"},[a("van-nav-bar",{attrs:{title:e.nowSpaceShow.name}})],1),a("div",{staticClass:"main"},[a("page-tree",{attrs:{"page-list":e.wikiPageList},on:{pageChange:e.pageSelectChange}}),a("div",{staticClass:"build-info"},[e._v("本文档使用"),a("a",{attrs:{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"}},[e._v("zyplayer-doc")]),e._v("构建")])],1)]),a("router-view",{on:{popupShow:e.popupShowChange}})],1)},B=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("van-collapse",{model:{value:e.pageSelect,callback:function(t){e.pageSelect=t},expression:"pageSelect"}},[e._l(e.pageList,(function(t){return[t.children?a("van-collapse-item",{attrs:{name:t.id}},[a("span",{attrs:{slot:"title"},on:{click:function(a){return e.pageSelectChange(t.id)}},slot:"title"},[e._v(e._s(t.name))]),a("page-tree",{attrs:{"page-list":t.children},on:{pageChange:e.pageSelectChange}})],1):a("div",{staticClass:"van-cell van-cell--clickable",on:{click:function(a){return e.pageSelectChange(t.id)}}},[e._v(e._s(t.name))])]}))],2)},H=[],J={name:"pageTree",data:function(){return{pageSelect:[]}},props:{pageList:Array},mounted:function(){},methods:{pageSelectChange:function(e){this.$emit("pageChange",e)}}},Q=J,X=Object(d["a"])(Q,G,H,!1,null,"aafa12d4",null),Z=X.exports,Y=a("b970");a("157a");n["default"].use(Y["a"]);var ee={data:function(){return{defaultProps:{children:"children",label:"name"},spaceUuid:"",nowPageId:"",nowSpaceShow:{},searchKeywords:"",wikiPageList:[],wikiPageExpandedKeys:[],popupShow:!1,pageSelect:[]}},components:{PageTree:Z},mounted:function(){this.spaceUuid=this.$route.query.space||"",this.getSpaceInfo(),this.doGetPageList(null)},methods:{filterPageNode:function(e,t){return!e||-1!==t.name.indexOf(e)},pageSelectChange:function(e){console.log("页面修改："+e),this.popupShow=!1,this.$router.replace({path:"/page/share/mobile/view",query:{pageId:e,space:this.spaceUuid}})},popupShowChange:function(e){this.popupShow=e,console.log(this.pageSelect)},doGetPageList:function(){var e=this;b["a"].openPageList({space:this.spaceUuid}).then((function(t){e.wikiPageList=t.data||[],e.nowPageId=""}))},getSpaceInfo:function(){var e=this;b["a"].openSpaceInfo({space:this.spaceUuid}).then((function(t){e.nowSpaceShow=t.data}))}}},te=ee,ae=(a("14eb"),Object(d["a"])(te,q,B,!1,null,"12cfde59",null)),ne=ae.exports,ie=[{path:"/",redirect:"/home"},{path:"/page/search",name:"WIKI-全局搜索",component:function(){return a.e("chunk-34407190").then(a.bind(null,"f890"))}},{path:"/common/noAuth",name:"WIKI-没有权限",component:function(){return a.e("chunk-2d207ece").then(a.bind(null,"a339"))}},{path:"/page/editorTest",name:"编辑内容",component:function(){return a.e("chunk-ed5bdb80").then(a.bind(null,"ed40"))}},{path:"/",name:"页面管理",component:W,children:[{path:"/home",name:"WIKI文档管理",component:function(){return a.e("chunk-578c28a7").then(a.bind(null,"b3d7"))}},{path:"/user/myInfo",name:"WIKI-我的信息",component:function(){return a.e("chunk-32cc5643").then(a.bind(null,"408e"))}},{path:"/page/show",name:"WIKI-内容展示",component:function(){return Promise.all([a.e("chunk-4cdf76bb"),a.e("chunk-ff4f9ca0"),a.e("chunk-1f1da349")]).then(a.bind(null,"fb9f"))}},{path:"/page/edit",name:"WIKI-编辑内容",component:function(){return Promise.all([a.e("chunk-4cdf76bb"),a.e("chunk-74910b48")]).then(a.bind(null,"73f0"))}},{path:"/space/manage",name:"WIKI-空间管理",component:function(){return a.e("chunk-24e2611c").then(a.bind(null,"aa65"))}}]},{path:"/",name:"页面管理",component:R,children:[{path:"/page/share/home",name:"WIKI-开放文档",component:function(){return a.e("chunk-49c0ba36").then(a.bind(null,"7fc3"))}},{path:"/page/share/view",name:"WIKI-内容展示",component:function(){return Promise.all([a.e("chunk-4cdf76bb"),a.e("chunk-ff4f9ca0"),a.e("chunk-a21d2576")]).then(a.bind(null,"4aa7"))}}]},{path:"/",name:"页面管理",component:ne,children:[{path:"/page/share/mobile/view",name:"WIKI-开放文档",component:function(){return Promise.all([a.e("chunk-4cdf76bb"),a.e("chunk-ff4f9ca0"),a.e("chunk-72e49b1a")]).then(a.bind(null,"8b30"))}}]}],oe=ie,re=a("2f62"),se={namespaced:!0,state:{pageTabNameMap:{},rightAsideWidth:0},getters:{getPageTabNameMap:function(e){return e.pageTabNameMap}},mutations:{addTableName:function(e,t){var a=Object.assign({},e.pageTabNameMap);a[t.key]=t.val,e.pageTabNameMap=a},setRightAsideWidth:function(e,t){e.rightAsideWidth=t}}};n["default"].use(re["a"]);var ce=new re["a"].Store({modules:{global:se}}),le=a("bc3a"),de=a.n(le),ue=a("a7fe"),pe=a.n(ue),he=a("1487"),fe=a.n(he);n["default"].use(o.a),n["default"].use(h["a"]),n["default"].use(pe.a,de.a),n["default"].prototype.$store=ce;var ge=new h["a"]({routes:oe});ge.beforeEach((function(e,t,a){e.name&&(document.title=e.name),a()}));var me=new n["default"]({el:"#app",router:ge,render:function(e){return e(p)}});n["default"].directive("highlight",(function(e){var t=e.querySelectorAll("pre code");t.forEach((function(e){fe.a.highlightBlock(e)}))}));t["default"]=me},"85ec":function(e,t,a){},"9f03":function(e,t,a){"use strict";var n=a("4328"),i=a.n(n),o=a("d978");t["a"]={userLogin:function(e){return Object(o["a"])({url:"/login",method:"post",data:i.a.stringify(e)})},userLogout:function(){return Object(o["a"])({url:"/logout",method:"post",data:i.a.stringify({})})},getSelfUserInfo:function(){return Object(o["a"])({url:"/user/info/selfInfo",method:"post",data:i.a.stringify({})})},getUserBaseInfo:function(e){return Object(o["a"])({url:"/zyplayer-doc-wiki/common/user/base",method:"post",data:i.a.stringify(e)})},userGroupList:function(e){return Object(o["a"])({url:"/user/group/list",method:"post",data:i.a.stringify(e)})},getUserMessageList:function(e){return Object(o["a"])({url:"/user/message/list",method:"post",data:i.a.stringify(e)})},readUserMessage:function(e){return Object(o["a"])({url:"/user/message/read",method:"post",data:i.a.stringify(e)})},deleteUserMessage:function(e){return Object(o["a"])({url:"/user/message/delete",method:"post",data:i.a.stringify(e)})}}},"9f92":function(e,t,a){},b49e:function(e,t,a){"use strict";a("f29e")},c82a:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create-space-vue"},[a("el-dialog",{attrs:{title:"创建空间",visible:e.newSpaceDialogVisible,width:"600px","close-on-click-modal":!1},on:{"update:visible":function(t){e.newSpaceDialogVisible=t}}},[a("el-form",{ref:"newSpaceForm",attrs:{"label-width":"100px",model:e.newSpaceForm,rules:e.newSpaceFormRules}},[a("el-form-item",{attrs:{label:"空间名：",prop:"name"}},[a("el-input",{model:{value:e.newSpaceForm.name,callback:function(t){e.$set(e.newSpaceForm,"name",t)},expression:"newSpaceForm.name"}})],1),a("el-form-item",{attrs:{label:"空间描述：",prop:"spaceExplain"}},[a("el-input",{model:{value:e.newSpaceForm.spaceExplain,callback:function(t){e.$set(e.newSpaceForm,"spaceExplain",t)},expression:"newSpaceForm.spaceExplain"}})],1),a("el-form-item",{attrs:{label:"空间开放："}},[a("el-switch",{attrs:{"inactive-text":"需要登录","inactive-value":0,"active-text":"开放访问","active-value":1},model:{value:e.newSpaceForm.openDoc,callback:function(t){e.$set(e.newSpaceForm,"openDoc",t)},expression:"newSpaceForm.openDoc"}})],1),a("el-form-item",{attrs:{label:"目录加载："}},[a("el-switch",{attrs:{"inactive-text":"预先加载","inactive-value":0,"active-text":"延迟加载","active-value":1},model:{value:e.newSpaceForm.treeLazyLoad,callback:function(t){e.$set(e.newSpaceForm,"treeLazyLoad",t)},expression:"newSpaceForm.treeLazyLoad"}})],1),a("el-form-item",{attrs:{label:"空间类型："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"选择类型"},model:{value:e.newSpaceForm.type,callback:function(t){e.$set(e.newSpaceForm,"type",t)},expression:"newSpaceForm.type"}},[a("el-option",{key:1,attrs:{label:"公共空间",value:1}},[a("span",{staticStyle:{float:"left"}},[e._v("公共空间")]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("属于公共，登录用户可访问、编辑")])]),a("el-option",{key:2,attrs:{label:"个人空间",value:2}},[a("span",{staticStyle:{float:"left"}},[e._v("个人空间")]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("属于个人，所有登录用户可访问")])]),a("el-option",{key:3,attrs:{label:"隐私空间",value:3}},[a("span",{staticStyle:{float:"left"}},[e._v("隐私空间")]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("属于个人，仅创建者可访问")])])],1)],1),a("el-form-item",[e.newSpaceForm.id>0?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onNewSpaceSubmit("newSpaceForm")}}},[e._v("保存修改")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onNewSpaceSubmit("newSpaceForm")}}},[e._v("立即创建")]),a("el-button",{on:{click:e.onNewSpaceCancel}},[e._v("取消")])],1)],1)],1)],1)},i=[],o=(a("b0c0"),a("0a79")),r={data:function(){return{newSpaceDialogVisible:!1,manageSpaceDialogVisible:!1,newSpaceForm:{id:"",name:"",spaceExplain:"",treeLazyLoad:0,openDoc:0,uuid:"",type:1},newSpaceFormRules:{name:[{required:!0,message:"请输入空间名",trigger:"blur"},{min:2,max:25,message:"长度在 2 到 25 个字符",trigger:"blur"}]},editSpaceId:""}},mounted:function(){},methods:{show:function(e){var t=this;this.newSpaceForm={id:"",name:"",spaceExplain:"",treeLazyLoad:0,openDoc:0,uuid:"",type:1},this.editSpaceId=e||"",this.editSpaceId&&o["a"].spaceList({id:this.editSpaceId}).then((function(e){var a=e.data||[];a.length>0&&(t.newSpaceForm=a[0])})),this.newSpaceDialogVisible=!0},onNewSpaceSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a={id:t.newSpaceForm.id,name:t.newSpaceForm.name,type:t.newSpaceForm.type,openDoc:t.newSpaceForm.openDoc,spaceExplain:t.newSpaceForm.spaceExplain,treeLazyLoad:t.newSpaceForm.treeLazyLoad};o["a"].updateSpace(a).then((function(e){t.$message.success("创建成功"),t.newSpaceDialogVisible=!1,t.$emit("success",e.data.id)}))}}))},onNewSpaceCancel:function(){this.newSpaceDialogVisible=!1}}},s=r,c=(a("34c6"),a("2877")),l=Object(c["a"])(s,n,i,!1,null,null,null);t["a"]=l.exports},d1f1:function(e,t,a){},d978:function(e,t,a){"use strict";a("d3b7");var n=a("bc3a"),i=a.n(n),o=a("56d7"),r=i.a.create({baseURL:"./",timeout:1e4,headers:{"Content-type":"application/x-www-form-urlencoded"},withCredentials:!0}),s={"/zyplayer-doc-db/executor/execute":!0};r.interceptors.request.use((function(e){return e.needValidateResult=!0,s[e.url]&&(e.needValidateResult=!1),e}),(function(e){return console.log(e),Promise.reject(e)})),r.interceptors.response.use((function(e){if(e.message)o["default"].$message.error("请求错误："+e.message);else{if(!e.config.needValidateResult||200==e.data.errCode)return e.data;if(400==e.data.errCode){o["default"].$message.error("请先登录");var t=encodeURIComponent(window.location.href);window.location="./#/user/login?redirect="+t}else 402==e.data.errCode?o["default"].$router.push("/common/noAuth"):200!==e.data.errCode&&o["default"].$message.error(e.data.errMsg||"未知错误")}return Promise.reject("请求错误")}),(function(e){return console.log("err"+e),o["default"].$message.info("请求错误："+e.message),Promise.reject(e)})),t["a"]=r},f29e:function(e,t,a){}});