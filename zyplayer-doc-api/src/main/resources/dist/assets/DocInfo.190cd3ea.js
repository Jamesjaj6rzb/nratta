import{u as S,ar as D,r,o as t,c as l,w as o,a as n,m as s,t as c,b as p,F as f,k as i,e as m,d as w}from"./vendor.f364ea47.js";import{m as M}from"./index.71e18790.js";import{_ as B}from"./main.14315fab.js";const C={setup(){const _=S(),A=D(()=>_.state.openApiDoc),u=D(()=>_.state.openApiDoc.info),e=D(()=>_.state.openApiMethodStatistic);return{openApiDoc:A,openApiDocInfo:u,openApiMethodStatistic:e,getDescription:I=>M.exports.markdownIt.render(I||"")}}},N=["href"],V=["href"],j=["href"],L=["innerHTML"],O={key:1,style:{"text-align":"center"}};function T(_,A,u,e,v,I){const a=r("a-form-item"),h=r("a-divider"),b=r("a-statistic"),k=r("a-card"),y=r("a-col"),g=r("a-row"),x=r("a-form");return t(),l(k,null,{default:o(()=>[e.openApiDocInfo?(t(),l(x,{key:0,"label-col":{span:4},"wrapper-col":{span:20}},{default:o(()=>[n(a,{label:"\u6807\u9898"},{default:o(()=>[s(c(e.openApiDocInfo.title),1)]),_:1}),n(a,{label:"\u7248\u672C"},{default:o(()=>[s(c(e.openApiDocInfo.version),1)]),_:1}),e.openApiDocInfo.contact?(t(),l(a,{key:0,label:"\u4F5C\u8005"},{default:o(()=>[e.openApiDocInfo.contact.name?(t(),p(f,{key:0},[s(c(e.openApiDocInfo.contact.name),1)],64)):i("",!0),e.openApiDocInfo.contact.email?(t(),p(f,{key:1},[n(h,{type:"vertical"}),s(c(e.openApiDocInfo.contact.email),1)],64)):i("",!0),e.openApiDocInfo.contact.url?(t(),p(f,{key:2},[n(h,{type:"vertical"}),m("a",{href:e.openApiDocInfo.contact.url,target:"_blank"},c(e.openApiDocInfo.contact.url),9,N)],64)):i("",!0)]),_:1})):i("",!0),n(a,{label:"host"},{default:o(()=>[s(c(e.openApiDoc.host),1)]),_:1}),e.openApiDocInfo.license?(t(),l(a,{key:1,label:"\u8BB8\u53EF\u8BC1"},{default:o(()=>[m("a",{href:e.openApiDocInfo.license.url,target:"_blank"},c(e.openApiDocInfo.license.name),9,V)]),_:1})):i("",!0),e.openApiDocInfo.termsOfService?(t(),l(a,{key:2,label:"\u670D\u52A1\u6761\u6B3E"},{default:o(()=>[m("a",{href:e.openApiDocInfo.termsOfService,target:"_blank"},c(e.openApiDocInfo.termsOfService),9,j)]),_:1})):i("",!0),n(a,{label:"\u6587\u6863\u8BF4\u660E"},{default:o(()=>[m("div",{class:"markdown-body",innerHTML:e.getDescription(e.openApiDocInfo.description)},null,8,L)]),_:1}),n(a,{label:"\u63A5\u53E3\u7EDF\u8BA1"},{default:o(()=>[n(g,{gutter:[16,16]},{default:o(()=>[(t(),p(f,null,w(["get","post","put","delete","head","patch","options","trace","total"],d=>(t(),p(f,null,[e.openApiMethodStatistic[d]?(t(),l(y,{key:0,span:6},{default:o(()=>[n(k,{size:"small"},{default:o(()=>[n(b,{title:d==="total"?"\u603B\u8BA1":d.toUpperCase()+"\u65B9\u6CD5",value:e.openApiMethodStatistic[d],suffix:"\u4E2A"},null,8,["title","value"])]),_:2},1024)]),_:2},1024)):i("",!0)],64))),64))]),_:1})]),_:1})]),_:1})):(t(),p("div",O,"\u6682\u65E0\u6587\u6863\u4FE1\u606F\uFF0C\u8BF7\u5148\u9009\u62E9\u6587\u6863"))]),_:1})}var z=B(C,[["render",T]]);export{z as default};
