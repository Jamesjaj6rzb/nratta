import{z as k,_ as $,r as h,o as l,c as d,w as m,a as _,b as v,F as O,d as x,e as A,f as b,K as y,g as I,h as D,i as N,j as C,A as S,k as L,E as w,l as R,m as V}from"./vendor.ee21a423.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};j();var f=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const M={name:"app",components:{},data(){return{locale:k,localeEl:$}},methods:{}};function q(e,t,o,r,a,n){const i=h("router-view"),u=h("a-config-provider"),p=h("el-config-provider");return l(),d(p,{locale:a.localeEl},{default:m(()=>[_(u,{locale:a.locale},{default:m(()=>[_(i)]),_:1},8,["locale"])]),_:1},8,["locale"])}var K=f(M,[["render",q]]);const B="modulepreload",T={},F="",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${F}${r}`,r in T)return;T[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":B,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((u,p)=>{i.addEventListener("load",u),i.addEventListener("error",p)})})).then(()=>t())};const G={name:"PageTableView",components:{},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:["/data/export"],apiRequestIndex:1}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:o}=this.$route;this.pageList.push({name:e,path:t,fullPath:o});let r=this.getRouteRealPath(this.$route);this.linkList.push(r),this.activePage=r,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let o=this.getRouteRealPath(e);if(this.activePage=o,this.linkList.indexOf(o)<0){this.linkList.push(o);let{name:a,path:n,fullPath:i}=e;this.pageList.push({name:a,path:n,fullPath:i})}let r=this.pageList.find(a=>this.getRouteRealPath(a)===o);r.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(o=>o.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},editPageTab(e,t){t==="add"?this.addPageTab():this.removePageTab(e)},addPageTab(){this.$router.push({path:"/api/request",query:{id:this.apiRequestIndex++}})},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(o=>this.getRouteRealPath(o)!==e),this.linkList=this.linkList.filter(o=>o!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},z={class:"page-layout"},H={class:"page-body"};function U(e,t,o,r,a,n){const i=h("a-tab-pane"),u=h("a-tabs"),p=h("router-view");return l(),v("div",z,[_(u,{type:"editable-card",activeKey:a.activePage,"onUpdate:activeKey":t[0]||(t[0]=s=>a.activePage=s),onTabClick:n.changePage,onEdit:n.editPageTab,style:{padding:"5px 10px 0"}},{default:m(()=>[(l(!0),v(O,null,x(a.pageList,s=>(l(),d(i,{closable:"",tab:n.pageTabNameMap[s.fullPath]||s.name,name:n.getRouteRealPath(s),fullPath:s.fullPath,key:s.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),A("div",H,[_(p,null,{default:m(({Component:s,route:E})=>[(l(),d(y,null,[(l(),d(b(s),{key:E.fullPath}))],1024))]),_:1})])])}var W=f(G,[["render",U]]);const J={name:"EmptyLayout",components:{},props:[],data(){return{}},methods:{}};function Q(e,t,o,r,a,n){const i=h("router-view");return l(),d(i,null,{default:m(({Component:u,route:p})=>[(l(),d(y,null,[(l(),d(b(u),{key:p.fullPath}))],1024))]),_:1})}var P=f(J,[["render",Q]]);let X=[{path:"/",name:"\u4E3B\u9875",component:()=>g(()=>import("./GlobalLayout.8ec927cc.js"),["assets/GlobalLayout.8ec927cc.js","assets/custom.33a00f74.js","assets/vendor.ee21a423.js"]),redirect:"/manage",children:[{path:"/doc",name:"\u6587\u6863\u7BA1\u7406",component:W,children:[{path:"/manage",name:"\u6587\u6863\u5730\u5740\u7BA1\u7406",meta:{icon:"FileTextOutlined"},component:()=>g(()=>import("./DocManage.7b9f9647.js"),["assets/DocManage.7b9f9647.js","assets/custom.33a00f74.js","assets/vendor.ee21a423.js"])},{path:"/setting",name:"\u7CFB\u7EDF\u8BBE\u7F6E",meta:{icon:"SettingOutlined"},component:P,children:[{path:"/setting/globalParam",name:"\u5168\u5C40\u53C2\u6570",component:()=>g(()=>import("./GlobalParam.d500c409.js"),["assets/GlobalParam.d500c409.js","assets/custom.33a00f74.js","assets/vendor.ee21a423.js"])},{path:"/setting/view",name:"\u5C55\u793A\u914D\u7F6E",meta:{hidden:!0},component:()=>g(()=>import("./SettingView.2d5a00d6.js"),["assets/SettingView.2d5a00d6.js","assets/vendor.ee21a423.js"])}]},{path:"/swagger",name:"swagger\u6587\u6863",meta:{hidden:!0,icon:"SettingOutlined"},component:P,children:[{path:"/swagger/info",name:"\u6587\u6863\u4FE1\u606F",component:()=>g(()=>import("./DocInfo.be0f94b2.js"),["assets/DocInfo.be0f94b2.js","assets/vendor.ee21a423.js"])},{path:"/swagger/view",name:"\u6587\u6863\u5C55\u793A",component:()=>g(()=>import("./DocView.1d0defca.js"),["assets/DocView.1d0defca.js","assets/vendor.ee21a423.js","assets/unitConvert.c16ab317.js","assets/custom.33a00f74.js"])}]},{path:"/api",name:"API\u8BF7\u6C42",meta:{hidden:!0},component:P,children:[{path:"/api/request",name:"\u63A5\u53E3\u8BF7\u6C42",component:()=>g(()=>import("./ApiRequest.c3cf393f.js"),["assets/ApiRequest.c3cf393f.js","assets/vendor.ee21a423.js","assets/unitConvert.c16ab317.js","assets/custom.33a00f74.js"])}]}]}]}];var Y=I({state(){return{docChangedNum:1,userInfo:{},pageTabNameMap:{},swaggerDoc:{},swaggerDefinitions:{},swaggerTreePathMap:{},methodStatistic:{},swaggerResource:{},globalParam:[]}},mutations:{setUserInfo(e,t){e.userInfo=t},setGlobalParam(e,t){e.globalParam=t},setSwaggerResource(e,t){e.swaggerResource=t},addDocChangedNum(e){e.docChangedNum++},setSwaggerDoc(e,t){e.swaggerDoc=t,e.swaggerDefinitions=t.definitions||{}},setSwaggerTreePathMap(e,t){e.swaggerTreePathMap=t},setMethodStatistic(e,t){e.methodStatistic=t},addTableName(e,t){let o=Object.assign({},e.pageTabNameMap);o[t.key]=t.val,e.pageTabNameMap=o}}});const Z=D({history:N(),routes:X}),c=C(K);c.config.productionTip=!1;c.use(S);c.use(Z);c.use(Y);c.component(L.name,L);c.component(w.name,w);c.component(R.name,R);c.mount("#app");c.directive("highlight",{updated(e){e.querySelectorAll("pre code").forEach(o=>{V.highlightBlock(o)})}});export{f as _};