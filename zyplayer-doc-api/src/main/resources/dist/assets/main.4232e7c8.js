import{z as k,r as u,o as l,c,w as g,a as _,b as P,F as R,d as A,e as T,f as L,K as y,g as E,h as O,i as D,j as $,A as x,l as M}from"./vendor.2a860d56.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};I();var v=(e,t)=>{const a=e.__vccOpts||e;for(const[o,i]of t)a[o]=i;return a};const S={name:"app",components:{},data(){return{locale:k}},methods:{}};function V(e,t,a,o,i,n){const s=u("router-view"),p=u("a-config-provider");return l(),c(p,{locale:i.locale},{default:g(()=>[_(s)]),_:1},8,["locale"])}var N=v(S,[["render",V]]);const j="modulepreload",w={},C="",h=function(t,a){return!a||a.length===0?t():Promise.all(a.map(o=>{if(o=`${C}${o}`,o in w)return;w[o]=!0;const i=o.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":j,i||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),i)return new Promise((p,d)=>{s.addEventListener("load",p),s.addEventListener("error",d)})})).then(()=>t())};const q={name:"PageTableView",components:{},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:["/data/export"],apiRequestIndex:1}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:a}=this.$route;this.pageList.push({name:e,path:t,fullPath:a});let o=this.getRouteRealPath(this.$route);this.linkList.push(o),this.activePage=o,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let a=this.getRouteRealPath(e);if(this.activePage=a,this.linkList.indexOf(a)<0){this.linkList.push(a);let{name:i,path:n,fullPath:s}=e;this.pageList.push({name:i,path:n,fullPath:s})}let o=this.pageList.find(i=>this.getRouteRealPath(i)===a);o.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(a=>a.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},editPageTab(e,t){t==="add"?this.addPageTab():this.removePageTab(e)},addPageTab(){this.$router.push({path:"/api/request",query:{id:this.apiRequestIndex++}})},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(a=>this.getRouteRealPath(a)!==e),this.linkList=this.linkList.filter(a=>a!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},K={class:"page-layout"},U={class:"page-body"};function W(e,t,a,o,i,n){const s=u("a-tab-pane"),p=u("a-tabs"),d=u("router-view");return l(),P("div",K,[_(p,{type:"editable-card",activeKey:i.activePage,"onUpdate:activeKey":t[0]||(t[0]=r=>i.activePage=r),onTabClick:n.changePage,onEdit:n.editPageTab,style:{padding:"5px 10px 0"}},{default:g(()=>[(l(!0),P(R,null,A(i.pageList,r=>(l(),c(s,{closable:"",tab:n.pageTabNameMap[r.fullPath]||r.name,name:n.getRouteRealPath(r),fullPath:r.fullPath,key:r.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),T("div",U,[_(d,null,{default:g(({Component:r,route:b})=>[(l(),c(y,null,[(l(),c(L(r),{key:b.fullPath}))],1024))]),_:1})])])}var B=v(q,[["render",W]]);const F={name:"PageTableView",components:{},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:[],apiRequestIndex:1}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:a}=this.$route;this.pageList.push({name:e,path:t,fullPath:a});let o=this.getRouteRealPath(this.$route);this.linkList.push(o),this.activePage=o,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let a=this.getRouteRealPath(e);if(this.activePage=a,this.linkList.indexOf(a)<0){this.linkList.push(a);let{name:i,path:n,fullPath:s}=e;this.pageList.push({name:i,path:n,fullPath:s})}let o=this.pageList.find(i=>this.getRouteRealPath(i)===a);o.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(a=>a.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},editPageTab(e,t){this.removePageTab(e)},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(a=>this.getRouteRealPath(a)!==e),this.linkList=this.linkList.filter(a=>a!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},G={class:"page-layout"},H={class:"page-body"};function z(e,t,a,o,i,n){const s=u("a-tab-pane"),p=u("a-tabs"),d=u("router-view");return l(),P("div",G,[_(p,{type:"editable-card","hide-add":"",activeKey:i.activePage,"onUpdate:activeKey":t[0]||(t[0]=r=>i.activePage=r),onTabClick:n.changePage,onEdit:n.editPageTab,style:{padding:"5px 10px 0"}},{default:g(()=>[(l(!0),P(R,null,A(i.pageList,r=>(l(),c(s,{closable:"",tab:n.pageTabNameMap[r.fullPath]||r.name,name:n.getRouteRealPath(r),fullPath:r.fullPath,key:r.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),T("div",H,[_(d,null,{default:g(({Component:r,route:b})=>[(l(),c(y,null,[(l(),c(L(r),{key:b.fullPath}))],1024))]),_:1})])])}var J=v(F,[["render",z]]);const Q={name:"EmptyLayout",components:{},props:[],data(){return{}},methods:{}};function X(e,t,a,o,i,n){const s=u("router-view");return l(),c(s,null,{default:g(({Component:p,route:d})=>[(l(),c(y,null,[(l(),c(L(p),{key:d.fullPath}))],1024))]),_:1})}var f=v(Q,[["render",X]]);let Y=[{path:"/",name:"\u4E3B\u9875",component:()=>h(()=>import("./GlobalLayout.a672085b.js"),["assets/GlobalLayout.a672085b.js","assets/custom.ece90331.js","assets/vendor.2a860d56.js","assets/api-logo.325698c8.js"]),redirect:"/manage",children:[{path:"/doc",name:"\u6587\u6863\u7BA1\u7406",component:B,children:[{path:"/manage",name:"\u6587\u6863\u5730\u5740\u7BA1\u7406",meta:{icon:"FileTextOutlined"},component:()=>h(()=>import("./DocManage.8b5ce92e.js"),["assets/DocManage.8b5ce92e.js","assets/custom.ece90331.js","assets/vendor.2a860d56.js","assets/index.7873781e.js","assets/mavon-editor.824ddc3c.js"])},{path:"/setting",name:"\u7CFB\u7EDF\u8BBE\u7F6E",meta:{icon:"SettingOutlined"},component:f,children:[{path:"/setting/globalParam",name:"\u5168\u5C40\u53C2\u6570",component:()=>h(()=>import("./GlobalParam.47a207e7.js"),["assets/GlobalParam.47a207e7.js","assets/custom.ece90331.js","assets/vendor.2a860d56.js"])},{path:"/setting/view",name:"\u5C55\u793A\u914D\u7F6E",meta:{hidden:!0},component:()=>h(()=>import("./SettingView.c261c340.js"),["assets/SettingView.c261c340.js","assets/vendor.2a860d56.js"])}]},{path:"/swagger",name:"swagger\u6587\u6863",meta:{hidden:!0,icon:"SettingOutlined"},component:f,children:[{path:"/swagger/info",name:"Swagger\u6587\u6863\u4FE1\u606F",component:()=>h(()=>import("./DocInfo.9eb6cf39.js"),["assets/DocInfo.9eb6cf39.js","assets/vendor.2a860d56.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js"])},{path:"/swagger/view",name:"Swagger\u6587\u6863\u5C55\u793A",component:()=>h(()=>import("./DocView.36b7f0c0.js"),["assets/DocView.36b7f0c0.js","assets/vendor.2a860d56.js","assets/DocContent.9af89d36.js","assets/logUtil.532ff0b3.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js","assets/unitConvert.08ea372c.js","assets/index.7873781e.js","assets/custom.ece90331.js"])}]},{path:"/openapi",name:"openApi\u6587\u6863",meta:{hidden:!0,icon:"SettingOutlined"},component:f,children:[{path:"/openapi/info",name:"OpenApi\u6587\u6863\u4FE1\u606F",component:()=>h(()=>import("./DocInfo.bfe9bf99.js"),["assets/DocInfo.bfe9bf99.js","assets/vendor.2a860d56.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js"])},{path:"/openapi/view",name:"OpenApi\u6587\u6863\u5C55\u793A",component:()=>h(()=>import("./DocView.dd198f45.js"),["assets/DocView.dd198f45.js","assets/vendor.2a860d56.js","assets/DocContent.658bc0f2.js","assets/logUtil.532ff0b3.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js","assets/unitConvert.08ea372c.js","assets/index.7873781e.js","assets/custom.ece90331.js"])}]},{path:"/api",name:"API\u8BF7\u6C42",meta:{hidden:!0},component:f,children:[{path:"/api/request",name:"\u63A5\u53E3\u8BF7\u6C42",component:()=>h(()=>import("./ApiRequest.867b4a5e.js"),["assets/ApiRequest.867b4a5e.js","assets/vendor.2a860d56.js","assets/mavon-editor.824ddc3c.js","assets/unitConvert.08ea372c.js","assets/index.c860d973.js","assets/index.7873781e.js","assets/custom.ece90331.js"])}]}]}]},{path:"/share",name:"\u5F00\u653E\u6587\u6863",component:()=>h(()=>import("./GlobalLayout.abf13edf.js"),["assets/GlobalLayout.abf13edf.js","assets/vendor.2a860d56.js","assets/custom.ece90331.js","assets/api-logo.325698c8.js"]),children:[{path:"/doc",name:"\u5F00\u653E\u6587\u6863\u7BA1\u7406",component:J,children:[{path:"/share/home",name:"\u5F00\u653E\u6587\u6863\u4F7F\u7528\u8BF4\u660E",meta:{icon:"FileTextOutlined"},component:()=>h(()=>import("./ShareHome.dc0a0554.js"),["assets/ShareHome.dc0a0554.js","assets/vendor.2a860d56.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js"])},{path:"/doc",name:"\u5F00\u653E\u6587\u6863\u67E5\u770B",meta:{hidden:!0},component:f,children:[{path:"/share/swagger/view",name:"Swagger\u5F00\u653E\u6587\u6863\u5C55\u793A",component:()=>h(()=>import("./DocView.540f70c6.js"),["assets/DocView.540f70c6.js","assets/vendor.2a860d56.js","assets/DocContent.9af89d36.js","assets/logUtil.532ff0b3.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js"])},{path:"/share/openapi/view",name:"OpenApi\u5F00\u653E\u6587\u6863\u5C55\u793A",component:()=>h(()=>import("./DocView.6c2d8bbc.js"),["assets/DocView.6c2d8bbc.js","assets/vendor.2a860d56.js","assets/DocContent.658bc0f2.js","assets/logUtil.532ff0b3.js","assets/mavon-editor.824ddc3c.js","assets/index.c860d973.js"])}]}]}]}];var Z=E({state(){return{docChangedNum:1,userInfo:{},pageTabNameMap:{},apiDoc:{},globalParam:[],leftAsideWidth:0,swaggerDoc:{},swaggerDefinitions:{},swaggerUrlMethodMap:{},swaggerMethodStatistic:{},openApiDoc:{},openApiDefinitions:{},openApiUrlMethodMap:{},openApiMethodStatistic:{}}},getters:{getDocChangedNum:e=>()=>e.docChangedNum,getLeftAsideWidth:e=>()=>e.leftAsideWidth,getApiDoc:e=>()=>e.apiDoc},mutations:{setUserInfo(e,t){e.userInfo=t},setGlobalParam(e,t){e.globalParam=t},setApiDoc(e,t){e.apiDoc=t},addDocChangedNum(e){e.docChangedNum++},setLeftAsideWidth(e,t){e.leftAsideWidth=t},setSwaggerDoc(e,t){e.swaggerDoc=t,e.swaggerDefinitions=t.definitions||{}},setSwaggerUrlMethodMap(e,t){e.swaggerUrlMethodMap=t},setSwaggerMethodStatistic(e,t){e.swaggerMethodStatistic=t},setOpenApiDoc(e,t){e.openApiDoc=t,e.openApiDefinitions=t.definitions||{}},setOpenApiUrlMethodMap(e,t){e.openApiUrlMethodMap=t},setOpenApiMethodStatistic(e,t){e.openApiMethodStatistic=t},addTableName(e,t){let a=Object.assign({},e.pageTabNameMap);a[t.key]=t.val,e.pageTabNameMap=a}}});const ee=O({history:D(),routes:Y}),m=$(N);m.config.productionTip=!1;m.use(x);m.use(ee);m.use(Z);m.mount("#app");m.directive("highlight",{updated(e){e.querySelectorAll("pre code").forEach(a=>{M.highlightBlock(a)})}});export{v as _};