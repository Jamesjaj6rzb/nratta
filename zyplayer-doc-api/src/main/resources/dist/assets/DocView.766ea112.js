import{v as y,u as j,y as n,H as D,r as h,o as g,c as v,w as k,B as w,e as x}from"./vendor.f364ea47.js";import{D as I,o as _}from"./DocContent.922a925e.js";import{m as M}from"./index.71e18790.js";import{_ as q}from"./main.14315fab.js";import"./logUtil.56e8d39f.js";const S={components:{DocContent:I},setup(){const a=y(),t=j();let p=n("doc"),o=n([]),r=n([]),i=n({url:"",description:"",method:"",consumes:"",produces:""}),s=n(!1),c=0,l;const m=()=>{let P=a.query.path+"."+a.query.method;if(Object.keys(t.state.openApiUrlMethodMap).length<=0){console.log("\u6587\u6863\u5C1A\u672A\u52A0\u8F7D\uFF0C\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210"),l||(l=setInterval(()=>{if(s.value||c++>50){clearInterval(l);return}Object.keys(t.state.openApiUrlMethodMap).length>0&&(console.log("\u6587\u6863\u5185\u5BB9\u6539\u53D8\uFF0C\u91CD\u65B0\u52A0\u8F7D\u6587\u6863"),m())},1e3));return}let e=t.state.openApiUrlMethodMap[P];if(!e){w.error("\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863");return}s.value=!0,t.commit("addTableName",{key:a.fullPath,val:e.summary});let u="",d="";e.consumes&&e.consumes.length>0&&(u=e.consumes.join(" ")),e.produces&&e.produces.length>0&&(d=e.produces.join(" "));let L=M.exports.markdownIt.render(e.description||e.summary||"");i.value={url:e.url,description:L,method:e.method||"",consumes:u,produces:d};let f=t.state.openApiDefinitions;o.value=_.getRequestParamList(e.parameters,f),r.value=_.getResponseParamList(e.responses,f)};return D(()=>{m()}),{docInfoShow:i,activePage:p,changePage:()=>{},isLoadSuccess:s,requestParamList:o,responseParamList:r}}},A=x("div",{style:{padding:"20px 0",height:"100px"}},null,-1);function C(a,t,p,o,r,i){const s=h("DocContent"),c=h("a-spin");return o.isLoadSuccess?(g(),v(s,{key:0,docInfoShow:o.docInfoShow,requestParamList:o.requestParamList,responseParamList:o.responseParamList},null,8,["docInfoShow","requestParamList","responseParamList"])):(g(),v(c,{key:1,tip:"\u6587\u6863\u6570\u636E\u52A0\u8F7D\u4E2D..."},{default:k(()=>[A]),_:1}))}var T=q(S,[["render",C]]);export{T as default};
