import{z as k,_ as w,r as c,o as u,c as g,w as m,a as _,b as P,F as R,d as T,e as $,f as O,K as x,g as C,h as N,i as D,j as A,A as I,k as v,E as b,l as y,m as S}from"./vendor.1f907179.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};M();var f=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const V={name:"app",components:{},data(){return{locale:k,localeEl:w}},methods:{}};function j(e,t,o,r,a,n){const i=c("router-view"),h=c("a-config-provider"),p=c("el-config-provider");return u(),g(p,{locale:a.localeEl},{default:m(()=>[_(h,{locale:a.locale},{default:m(()=>[_(i)]),_:1},8,["locale"])]),_:1},8,["locale"])}var K=f(V,[["render",j]]);const B="modulepreload",L={},F="",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${F}${r}`,r in L)return;L[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":B,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((h,p)=>{i.addEventListener("load",h),i.addEventListener("error",p)})})).then(()=>t())};const q={name:"PageTableView",components:{},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:["/data/export"]}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:o}=this.$route;this.pageList.push({name:e,path:t,fullPath:o});let r=this.getRouteRealPath(this.$route);this.linkList.push(r),this.activePage=r,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let o=this.getRouteRealPath(e);if(this.activePage=o,this.linkList.indexOf(o)<0){this.linkList.push(o);let{name:a,path:n,fullPath:i}=e;this.pageList.push({name:a,path:n,fullPath:i})}let r=this.pageList.find(a=>this.getRouteRealPath(a)===o);r.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(o=>o.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(o=>this.getRouteRealPath(o)!==e),this.linkList=this.linkList.filter(o=>o!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},z={class:"page-layout"},G={class:"page-body"};function H(e,t,o,r,a,n){const i=c("a-tab-pane"),h=c("a-tabs"),p=c("router-view");return u(),P("div",z,[_(h,{type:"editable-card","hide-add":"",activeKey:a.activePage,"onUpdate:activeKey":t[0]||(t[0]=s=>a.activePage=s),onTabClick:n.changePage,onEdit:n.removePageTab,style:{padding:"5px 10px 0"}},{default:m(()=>[(u(!0),P(R,null,T(a.pageList,s=>(u(),g(i,{closable:"",tab:n.pageTabNameMap[s.fullPath]||s.name,name:n.getRouteRealPath(s),fullPath:s.fullPath,key:s.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),$("div",G,[_(p,null,{default:m(({Component:s,route:E})=>[(u(),g(x,null,[(u(),g(O(s),{key:E.fullPath}))],1024))]),_:1})])])}var U=f(q,[["render",H]]);const W={name:"EmptyLayout",components:{},props:[],data(){return{}},methods:{}};function J(e,t,o,r,a,n){const i=c("router-view");return u(),g(i)}var Q=f(W,[["render",J]]);let X=[{path:"/",name:"\u4E3B\u9875",component:()=>d(()=>import("./GlobalLayout.a8b6fa3b.js"),["assets/GlobalLayout.a8b6fa3b.js","assets/custom.93dbced2.js","assets/vendor.1f907179.js"]),redirect:"/doc/info",children:[{path:"/doc",name:"\u7CFB\u7EDF\u914D\u7F6E",component:U,children:[{path:"/doc/info",name:"\u6587\u6863\u4FE1\u606F",meta:{icon:"InfoCircleOutlined"},component:()=>d(()=>import("./DocInfo.dc3c1689.js"),["assets/DocInfo.dc3c1689.js","assets/vendor.1f907179.js"])},{path:"/doc/manage",name:"\u6587\u6863\u5730\u5740\u7BA1\u7406",meta:{icon:"FileTextOutlined"},component:()=>d(()=>import("./DocManage.780beadf.js"),["assets/DocManage.780beadf.js","assets/custom.93dbced2.js","assets/vendor.1f907179.js"])},{path:"/doc/setting",name:"\u7CFB\u7EDF\u914D\u7F6E",meta:{icon:"SettingOutlined"},component:Q,children:[{path:"/doc/setting/globalParam",name:"\u5168\u5C40\u53C2\u6570",component:()=>d(()=>import("./GlobalParam.582cc314.js"),["assets/GlobalParam.582cc314.js","assets/custom.93dbced2.js","assets/vendor.1f907179.js"])},{path:"/doc/setting/view",name:"\u5C55\u793A\u914D\u7F6E",meta:{hidden:!0},component:()=>d(()=>import("./SettingView.8295c58d.js"),["assets/SettingView.8295c58d.js","assets/vendor.1f907179.js"])}]},{path:"/doc/view",name:"\u6587\u6863\u5C55\u793A",meta:{hidden:!0},component:()=>d(()=>import("./DocView.967e78b1.js"),["assets/DocView.967e78b1.js","assets/vendor.1f907179.js","assets/custom.93dbced2.js"])}]}]}];var Y=C({state(){return{docChangedNum:1,userInfo:{},pageTabNameMap:{},swaggerDoc:{},swaggerDefinitions:{},swaggerTreePathMap:{},methodStatistic:{},swaggerResource:{}}},mutations:{setUserInfo(e,t){e.userInfo=t},setSwaggerResource(e,t){e.swaggerResource=t},addDocChangedNum(e){e.docChangedNum++},setSwaggerDoc(e,t){e.swaggerDoc=t,e.swaggerDefinitions=t.definitions||{}},setSwaggerTreePathMap(e,t){e.swaggerTreePathMap=t},setMethodStatistic(e,t){e.methodStatistic=t},addTableName(e,t){let o=Object.assign({},e.pageTabNameMap);o[t.key]=t.val,e.pageTabNameMap=o}}});const Z=N({history:D(),routes:X}),l=A(K);l.config.productionTip=!1;l.use(I);l.use(Z);l.use(Y);l.component(v.name,v);l.component(b.name,b);l.component(y.name,y);l.mount("#app");l.directive("highlight",{updated(e){e.querySelectorAll("pre code").forEach(o=>{S.highlightBlock(o)})}});export{f as _};
