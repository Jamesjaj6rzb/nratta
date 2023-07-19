import{z as D,r as h,o as r,c as p,w as g,a as _,P as E,b as v,F as A,d as T,e as w,f as y,K as R,g as $,h as x,i as M,j as I,A as S,l as V}from"./vendor.948fa90f.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};N();var b=(e,t)=>{const a=e.__vccOpts||e;for(const[o,i]of t)a[o]=i;return a};const j={name:"app",components:{},data(){return{locale:D}},methods:{}};function C(e,t,a,o,i,n){const s=h("router-view"),u=h("a-config-provider");return r(),p(u,{locale:i.locale},{default:g(()=>[_(s)]),_:1},8,["locale"])}var q=b(j,[["render",C]]);const K="modulepreload",O={},G="",l=function(t,a){return!a||a.length===0?t():Promise.all(a.map(o=>{if(o=`${G}${o}`,o in O)return;O[o]=!0;const i=o.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":K,i||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),i)return new Promise((u,m)=>{s.addEventListener("load",u),s.addEventListener("error",m)})})).then(()=>t())};const U={name:"PageTableView",components:{PlusOutlined:E},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:["/data/export"],apiRequestIndex:1}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:a}=this.$route;this.pageList.push({name:e,path:t,fullPath:a});let o=this.getRouteRealPath(this.$route);this.linkList.push(o),this.activePage=o,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let a=this.getRouteRealPath(e);if(this.activePage=a,this.linkList.indexOf(a)<0){this.linkList.push(a);let{name:i,path:n,fullPath:s}=e;this.pageList.push({name:i,path:n,fullPath:s})}let o=this.pageList.find(i=>this.getRouteRealPath(i)===a);o.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(a=>a.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},editPageTab(e,t){t==="add"?this.addPageTab():this.removePageTab(e)},addPageTab(){this.$router.push({path:"/api/request",query:{id:this.apiRequestIndex++}})},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(a=>this.getRouteRealPath(a)!==e),this.linkList=this.linkList.filter(a=>a!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},W={class:"page-layout"},B={class:"page-body"};function F(e,t,a,o,i,n){const s=h("plus-outlined"),u=h("a-tooltip"),m=h("a-tab-pane"),c=h("a-tabs"),L=h("router-view");return r(),v("div",W,[_(c,{type:"editable-card",activeKey:i.activePage,"onUpdate:activeKey":t[0]||(t[0]=d=>i.activePage=d),onTabClick:n.changePage,onEdit:n.editPageTab,style:{padding:"5px 10px 0"}},{addIcon:g(()=>[_(u,{title:"\u65B0\u5EFA\u4E00\u4E2AAPI\u63A5\u53E3"},{default:g(()=>[_(s)]),_:1})]),default:g(()=>[(r(!0),v(A,null,T(i.pageList,d=>(r(),p(m,{closable:"",tab:n.pageTabNameMap[d.fullPath]||d.name,name:n.getRouteRealPath(d),fullPath:d.fullPath,key:d.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),w("div",B,[_(L,null,{default:g(({Component:d,route:k})=>[(r(),p(R,null,[(r(),p(y(d),{key:k.fullPath}))],1024))]),_:1})])])}var H=b(U,[["render",F]]);const z={name:"PageTableView",components:{},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:[],apiRequestIndex:1}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:a}=this.$route;this.pageList.push({name:e,path:t,fullPath:a});let o=this.getRouteRealPath(this.$route);this.linkList.push(o),this.activePage=o,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let a=this.getRouteRealPath(e);if(this.activePage=a,this.linkList.indexOf(a)<0){this.linkList.push(a);let{name:i,path:n,fullPath:s}=e;this.pageList.push({name:i,path:n,fullPath:s})}let o=this.pageList.find(i=>this.getRouteRealPath(i)===a);o.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(a=>a.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},editPageTab(e,t){this.removePageTab(e)},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(a=>this.getRouteRealPath(a)!==e),this.linkList=this.linkList.filter(a=>a!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},J={class:"page-layout"},Q={class:"page-body"};function X(e,t,a,o,i,n){const s=h("a-tab-pane"),u=h("a-tabs"),m=h("router-view");return r(),v("div",J,[_(u,{type:"editable-card","hide-add":"",activeKey:i.activePage,"onUpdate:activeKey":t[0]||(t[0]=c=>i.activePage=c),onTabClick:n.changePage,onEdit:n.editPageTab,style:{padding:"5px 10px 0"}},{default:g(()=>[(r(!0),v(A,null,T(i.pageList,c=>(r(),p(s,{closable:"",tab:n.pageTabNameMap[c.fullPath]||c.name,name:n.getRouteRealPath(c),fullPath:c.fullPath,key:c.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),w("div",Q,[_(m,null,{default:g(({Component:c,route:L})=>[(r(),p(R,null,[(r(),p(y(c),{key:L.fullPath}))],1024))]),_:1})])])}var Y=b(z,[["render",X]]);const Z={name:"EmptyLayout",components:{},props:[],data(){return{}},methods:{}};function ee(e,t,a,o,i,n){const s=h("router-view");return r(),p(s,null,{default:g(({Component:u,route:m})=>[(r(),p(R,null,[(r(),p(y(u),{key:m.fullPath}))],1024))]),_:1})}var P=b(Z,[["render",ee]]);let te=[{path:"/",name:"\u4E3B\u9875",component:()=>l(()=>import("./GlobalLayout.52cccc9f.js"),["assets/GlobalLayout.52cccc9f.js","assets/custom.6a6c45c1.js","assets/vendor.948fa90f.js","assets/api-logo.828bc7b1.js"]),redirect:"/manage",children:[{path:"/doc",name:"\u6587\u6863\u7BA1\u7406",component:H,children:[{path:"/manage",name:"\u6587\u6863\u5730\u5740\u7BA1\u7406",meta:{icon:"FileTextOutlined"},component:()=>l(()=>import("./DocManage.48af8c82.js"),["assets/DocManage.48af8c82.js","assets/custom.6a6c45c1.js","assets/vendor.948fa90f.js","assets/index.9cc8b401.js","assets/index.b99389a4.js","assets/EditGlobalParam.67e61140.js"])},{path:"/setting",name:"\u7CFB\u7EDF\u8BBE\u7F6E",meta:{icon:"SettingOutlined"},component:P,children:[{path:"/setting/globalParam",name:"\u5168\u5C40\u53C2\u6570",component:()=>l(()=>import("./GlobalParam.8beb2f01.js"),["assets/GlobalParam.8beb2f01.js","assets/custom.6a6c45c1.js","assets/vendor.948fa90f.js","assets/EditGlobalParam.67e61140.js"])},{path:"/setting/view",name:"\u5C55\u793A\u914D\u7F6E",meta:{hidden:!0},component:()=>l(()=>import("./SettingView.986995f2.js"),["assets/SettingView.986995f2.js","assets/vendor.948fa90f.js"])}]},{path:"/swagger",name:"swagger\u6587\u6863",meta:{hidden:!0,icon:"SettingOutlined"},component:P,children:[{path:"/swagger/info",name:"Swagger\u6587\u6863\u4FE1\u606F",component:()=>l(()=>import("./DocInfo.26704d18.js"),["assets/DocInfo.26704d18.js","assets/vendor.948fa90f.js","assets/index.b99389a4.js"])},{path:"/swagger/view",name:"Swagger\u6587\u6863\u5C55\u793A",component:()=>l(()=>import("./DocView.68d359d2.js"),["assets/DocView.68d359d2.js","assets/vendor.948fa90f.js","assets/DocContent.2911adec.js","assets/logUtil.24f55f0f.js","assets/index.b99389a4.js","assets/unitConvert.b04ed2a3.js","assets/index.9cc8b401.js","assets/custom.6a6c45c1.js"])}]},{path:"/openapi",name:"openApi\u6587\u6863",meta:{hidden:!0,icon:"SettingOutlined"},component:P,children:[{path:"/openapi/info",name:"OpenApi\u6587\u6863\u4FE1\u606F",component:()=>l(()=>import("./DocInfo.86715416.js"),["assets/DocInfo.86715416.js","assets/vendor.948fa90f.js","assets/index.b99389a4.js"])},{path:"/openapi/view",name:"OpenApi\u6587\u6863\u5C55\u793A",component:()=>l(()=>import("./DocView.9ca442ee.js"),["assets/DocView.9ca442ee.js","assets/vendor.948fa90f.js","assets/DocContent.4b703d6b.js","assets/logUtil.24f55f0f.js","assets/index.b99389a4.js","assets/unitConvert.b04ed2a3.js","assets/index.9cc8b401.js","assets/custom.6a6c45c1.js"])}]},{path:"/api",name:"API\u8BF7\u6C42",meta:{hidden:!0},component:P,children:[{path:"/api/request",name:"\u63A5\u53E3\u8BF7\u6C42",component:()=>l(()=>import("./ApiRequest.31257b7b.js"),["assets/ApiRequest.31257b7b.js","assets/vendor.948fa90f.js","assets/index.b99389a4.js","assets/unitConvert.b04ed2a3.js","assets/index.9cc8b401.js","assets/custom.6a6c45c1.js"])}]}]}]},{path:"/share",name:"\u5F00\u653E\u6587\u6863",component:()=>l(()=>import("./GlobalLayout.4cd5c2be.js"),["assets/GlobalLayout.4cd5c2be.js","assets/vendor.948fa90f.js","assets/custom.6a6c45c1.js","assets/api-logo.828bc7b1.js"]),children:[{path:"/doc",name:"\u5F00\u653E\u6587\u6863\u7BA1\u7406",component:Y,children:[{path:"/share/home",name:"\u5F00\u653E\u6587\u6863\u4F7F\u7528\u8BF4\u660E",meta:{icon:"FileTextOutlined"},component:()=>l(()=>import("./ShareHome.44e1cbbd.js"),["assets/ShareHome.44e1cbbd.js","assets/vendor.948fa90f.js","assets/index.b99389a4.js"])},{path:"/doc",name:"\u5F00\u653E\u6587\u6863\u67E5\u770B",meta:{hidden:!0},component:P,children:[{path:"/share/swagger/view",name:"Swagger\u5F00\u653E\u6587\u6863\u5C55\u793A",component:()=>l(()=>import("./DocView.96961405.js"),["assets/DocView.96961405.js","assets/vendor.948fa90f.js","assets/DocContent.2911adec.js","assets/logUtil.24f55f0f.js","assets/index.b99389a4.js"])},{path:"/share/openapi/view",name:"OpenApi\u5F00\u653E\u6587\u6863\u5C55\u793A",component:()=>l(()=>import("./DocView.27a067fb.js"),["assets/DocView.27a067fb.js","assets/vendor.948fa90f.js","assets/DocContent.4b703d6b.js","assets/logUtil.24f55f0f.js","assets/index.b99389a4.js"])}]}]}]}];var ae=$({state(){return{docChangedNum:1,userInfo:{},pageTabNameMap:{},apiDoc:{},globalParam:[],docGlobalParam:[],leftAsideWidth:0,swaggerDoc:{},swaggerDefinitions:{},swaggerUrlMethodMap:{},swaggerMethodStatistic:{},openApiDoc:{},openApiDefinitions:{},openApiUrlMethodMap:{},openApiMethodStatistic:{}}},getters:{getDocChangedNum:e=>()=>e.docChangedNum,getLeftAsideWidth:e=>()=>e.leftAsideWidth,getApiDoc:e=>()=>e.apiDoc},mutations:{setUserInfo(e,t){e.userInfo=t},setGlobalParam(e,t){e.globalParam=t},setDocGlobalParam(e,t){e.docGlobalParam=t},setGlobalParamOnChange(e,t,a){a&&a>0?e.apiDoc.id===a&&(e.docGlobalParam=t):e.globalParam=t},setApiDoc(e,t){e.apiDoc=t},addDocChangedNum(e){e.docChangedNum++},setLeftAsideWidth(e,t){e.leftAsideWidth=t},setSwaggerDoc(e,t){e.swaggerDoc=t,e.swaggerDefinitions=t.definitions||{}},setSwaggerUrlMethodMap(e,t){e.swaggerUrlMethodMap=t},setSwaggerMethodStatistic(e,t){e.swaggerMethodStatistic=t},setOpenApiDoc(e,t){e.openApiDoc=t,e.openApiDefinitions=t.definitions||{}},setOpenApiUrlMethodMap(e,t){e.openApiUrlMethodMap=t},setOpenApiMethodStatistic(e,t){e.openApiMethodStatistic=t},addTableName(e,t){let a=Object.assign({},e.pageTabNameMap);a[t.key]=t.val,e.pageTabNameMap=a}}});const ie=x({history:M(),routes:te}),f=I(q);f.config.productionTip=!1;f.use(S);f.use(ie);f.use(ae);f.mount("#app");f.directive("highlight",{updated(e){e.querySelectorAll("pre code").forEach(a=>{V.highlightBlock(a)})}});export{b as _};