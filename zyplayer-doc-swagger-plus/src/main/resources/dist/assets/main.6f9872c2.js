import{z as k,_ as w,r as p,o as l,c as h,w as m,a as _,b as P,F as $,d as O,e as x,f as v,K as b,g as A,h as I,i as C,j as D,A as N,k as y,E as L,l as R,m as S}from"./vendor.b858ca95.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}};V();var f=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const j={name:"app",components:{},data(){return{locale:k,localeEl:w}},methods:{}};function M(e,t,o,r,a,n){const i=p("router-view"),u=p("a-config-provider"),d=p("el-config-provider");return l(),h(d,{locale:a.localeEl},{default:m(()=>[_(u,{locale:a.locale},{default:m(()=>[_(i)]),_:1},8,["locale"])]),_:1},8,["locale"])}var q=f(j,[["render",M]]);const K="modulepreload",T={},B="",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${B}${r}`,r in T)return;T[r]=!0;const a=r.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":K,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((u,d)=>{i.addEventListener("load",u),i.addEventListener("error",d)})})).then(()=>t())};const F={name:"PageTableView",components:{},data(){return{pageList:[],linkList:[],activePage:"",multiPage:!0,ignoreParamPath:["/data/export"],apiRequestIndex:1}},computed:{pageTabNameMap(){return this.$store.state.pageTabNameMap}},created(){let{name:e,path:t,fullPath:o}=this.$route;this.pageList.push({name:e,path:t,fullPath:o});let r=this.getRouteRealPath(this.$route);this.linkList.push(r),this.activePage=r,this.$router.push(this.$route.fullPath)},watch:{$route:function(e,t){let o=this.getRouteRealPath(e);if(this.activePage=o,this.linkList.indexOf(o)<0){this.linkList.push(o);let{name:a,path:n,fullPath:i}=e;this.pageList.push({name:a,path:n,fullPath:i})}let r=this.pageList.find(a=>this.getRouteRealPath(a)===o);r.fullPath=e.fullPath}},methods:{isIgnoreParamPath(e){return this.ignoreParamPath.indexOf(e)>=0},getRouteRealPath(e){return this.isIgnoreParamPath(e.path)?e.path:e.fullPath},changePage(e){let t=this.pageList.find(o=>o.fullPath===e);this.activePage=this.getRouteRealPath(t),this.$router.push(t.fullPath)},editPage(e,t){this[t](e)},editPageTab(e,t){t==="add"?this.addPageTab():this.removePageTab(e)},addPageTab(){this.$router.push({path:"/doc/apiRequest",query:{id:this.apiRequestIndex++}})},removePageTab(e){if(this.pageList.length===1){this.$message.warning("\u8FD9\u662F\u6700\u540E\u4E00\u9875\uFF0C\u4E0D\u80FD\u518D\u5173\u95ED\u4E86\u5566");return}this.pageList=this.pageList.filter(o=>this.getRouteRealPath(o)!==e),this.linkList=this.linkList.filter(o=>o!==e);let t=this.linkList.indexOf(this.activePage);t<0&&(t=this.linkList.length-1,this.activePage=this.linkList[t],this.$router.push(this.activePage))}}},G={class:"page-layout"},z={class:"page-body"};function H(e,t,o,r,a,n){const i=p("a-tab-pane"),u=p("a-tabs"),d=p("router-view");return l(),P("div",G,[_(u,{type:"editable-card",activeKey:a.activePage,"onUpdate:activeKey":t[0]||(t[0]=s=>a.activePage=s),onTabClick:n.changePage,onEdit:n.editPageTab,style:{padding:"5px 10px 0"}},{default:m(()=>[(l(!0),P($,null,O(a.pageList,s=>(l(),h(i,{closable:"",tab:n.pageTabNameMap[s.fullPath]||s.name,name:n.getRouteRealPath(s),fullPath:s.fullPath,key:s.fullPath},null,8,["tab","name","fullPath"]))),128))]),_:1},8,["activeKey","onTabClick","onEdit"]),x("div",z,[_(d,null,{default:m(({Component:s,route:E})=>[(l(),h(b,null,[(l(),h(v(s),{key:E.fullPath}))],1024))]),_:1})])])}var U=f(F,[["render",H]]);const W={name:"EmptyLayout",components:{},props:[],data(){return{}},methods:{}};function J(e,t,o,r,a,n){const i=p("router-view");return l(),h(i,null,{default:m(({Component:u,route:d})=>[(l(),h(b,null,[(l(),h(v(u),{key:d.fullPath}))],1024))]),_:1})}var Q=f(W,[["render",J]]);let X=[{path:"/",name:"\u4E3B\u9875",component:()=>g(()=>import("./GlobalLayout.516ce048.js"),["assets/GlobalLayout.516ce048.js","assets/custom.e19fb7cf.js","assets/vendor.b858ca95.js"]),redirect:"/doc/info",children:[{path:"/doc",name:"\u7CFB\u7EDF\u914D\u7F6E",component:U,children:[{path:"/doc/info",name:"\u6587\u6863\u4FE1\u606F",meta:{icon:"InfoCircleOutlined"},component:()=>g(()=>import("./DocInfo.3bde37c2.js"),["assets/DocInfo.3bde37c2.js","assets/vendor.b858ca95.js"])},{path:"/doc/manage",name:"\u6587\u6863\u5730\u5740\u7BA1\u7406",meta:{icon:"FileTextOutlined"},component:()=>g(()=>import("./DocManage.a1d36733.js"),["assets/DocManage.a1d36733.js","assets/custom.e19fb7cf.js","assets/vendor.b858ca95.js"])},{path:"/doc/setting",name:"\u7CFB\u7EDF\u914D\u7F6E",meta:{icon:"SettingOutlined"},component:Q,children:[{path:"/doc/setting/globalParam",name:"\u5168\u5C40\u53C2\u6570",component:()=>g(()=>import("./GlobalParam.db422489.js"),["assets/GlobalParam.db422489.js","assets/custom.e19fb7cf.js","assets/vendor.b858ca95.js"])},{path:"/doc/setting/view",name:"\u5C55\u793A\u914D\u7F6E",meta:{hidden:!0},component:()=>g(()=>import("./SettingView.eb4dae53.js"),["assets/SettingView.eb4dae53.js","assets/vendor.b858ca95.js"])}]},{path:"/doc/view",name:"\u6587\u6863\u5C55\u793A",meta:{hidden:!0},component:()=>g(()=>import("./DocView.87c1349f.js"),["assets/DocView.87c1349f.js","assets/vendor.b858ca95.js","assets/unitConvert.f884facf.js","assets/custom.e19fb7cf.js"])},{path:"/doc/apiRequest",name:"\u63A5\u53E3\u8BF7\u6C42",meta:{hidden:!0},component:()=>g(()=>import("./ApiRequest.020c26db.js"),["assets/ApiRequest.020c26db.js","assets/vendor.b858ca95.js","assets/unitConvert.f884facf.js","assets/custom.e19fb7cf.js"])}]}]}];var Y=A({state(){return{docChangedNum:1,userInfo:{},pageTabNameMap:{},swaggerDoc:{},swaggerDefinitions:{},swaggerTreePathMap:{},methodStatistic:{},swaggerResource:{},globalParam:[]}},mutations:{setUserInfo(e,t){e.userInfo=t},setGlobalParam(e,t){e.globalParam=t},setSwaggerResource(e,t){e.swaggerResource=t},addDocChangedNum(e){e.docChangedNum++},setSwaggerDoc(e,t){e.swaggerDoc=t,e.swaggerDefinitions=t.definitions||{}},setSwaggerTreePathMap(e,t){e.swaggerTreePathMap=t},setMethodStatistic(e,t){e.methodStatistic=t},addTableName(e,t){let o=Object.assign({},e.pageTabNameMap);o[t.key]=t.val,e.pageTabNameMap=o}}});const Z=I({history:C(),routes:X}),c=D(q);c.config.productionTip=!1;c.use(N);c.use(Z);c.use(Y);c.component(y.name,y);c.component(L.name,L);c.component(R.name,R);c.mount("#app");c.directive("highlight",{updated(e){e.querySelectorAll("pre code").forEach(o=>{S.highlightBlock(o)})}});export{f as _};