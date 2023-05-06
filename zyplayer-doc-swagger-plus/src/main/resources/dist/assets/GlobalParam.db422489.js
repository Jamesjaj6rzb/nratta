var P=Object.defineProperty;var w=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var I=(c,e,n)=>e in c?P(c,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[e]=n,V=(c,e)=>{for(var n in e||(e={}))U.call(e,n)&&I(c,n,e[n]);if(w)for(var n of w(e))B.call(e,n)&&I(c,n,e[n]);return c};import{z as b}from"./custom.e19fb7cf.js";import{O as F,Q as L,R as K,r as f,o,b as r,e as N,a as s,w as l,F as v,c as y,t as S,n as g,p as i}from"./vendor.b858ca95.js";import{_ as j}from"./main.6f9872c2.js";const z={setup(){const c=F();let e=L([]),n=L(!1);const a=async()=>{d.value={},n.value=!0,b.docSwaggerGlobalParamList().then(t=>{setTimeout(()=>n.value=!1,500),e.value=t.data||[],c.commit("setGlobalParam",e.value)})};let d=L({});const D=()=>{d.value.isEdit&&k(d.value);let t={isEdit:!0};e.value.push(t),d.value=t},p=t=>{d.value.isEdit&&k(d.value),t.isEdit=!0,d.value=V({},t)},k=t=>{t.isEdit=!1,t.id?e.value.forEach(_=>_.isEdit=!1):e.value=e.value.filter(_=>_!==t),d.value={}},x=t=>{b.docSwaggerGlobalParamUpdate(d.value).then(_=>{t.isEdit=!1,a()})},h=async t=>{b.docSwaggerGlobalParamUpdate({id:t.id,yn:0}).then(_=>{a()})};return K(()=>{a()}),{docList:e,docListLoading:n,docEdit:d,searchDocList:a,deleteDoc:h,editDoc:p,saveEditDoc:x,cancelEditDoc:k,addDocLine:D,docListColumns:[{title:"\u53C2\u6570\u540D\u79F0",dataIndex:"paramKey",width:250},{title:"\u53C2\u6570\u503C",dataIndex:"paramValue"},{title:"\u53C2\u6570\u4F4D\u7F6E",dataIndex:"paramType",width:120},{title:"\u64CD\u4F5C",dataIndex:"operation",fixed:"right",width:170}]}}},H={style:{"margin-bottom":"10px","text-align":"right"}},A=i("\u5237\u65B0"),M=i("\u65B0\u5EFA"),O={key:1},Q={key:1},R=i("Form"),q=i("Header"),J=i("Cookie"),W=i("Form"),X=i("Header"),Y=i("Cookie"),Z=i("\u53D6\u6D88"),$=i("\u4FDD\u5B58"),ee=i("\u7F16\u8F91"),ae=i("\u5220\u9664");function te(c,e,n,a,d,D){const p=f("a-button"),k=f("a-input"),x=f("a-textarea"),h=f("a-select-option"),t=f("a-select"),_=f("a-tag"),T=f("a-popconfirm"),G=f("a-table");return o(),r(v,null,[N("div",H,[s(p,{onClick:a.searchDocList,type:"primary"},{default:l(()=>[A]),_:1},8,["onClick"]),s(p,{onClick:a.addDocLine},{default:l(()=>[M]),_:1},8,["onClick"])]),s(G,{dataSource:a.docList,columns:a.docListColumns,size:"middle",loading:a.docListLoading,pagination:!1,scroll:{x:1e3,y:"calc(100vh - 340px)"}},{bodyCell:l(({column:C,text:E,record:m})=>[C.dataIndex==="paramKey"?(o(),r(v,{key:0},[m.isEdit?(o(),y(k,{key:0,placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\u540D\u79F0",value:a.docEdit.paramKey,"onUpdate:value":e[0]||(e[0]=u=>a.docEdit.paramKey=u)},null,8,["value"])):(o(),r("span",O,S(E),1))],64)):g("",!0),C.dataIndex==="paramValue"?(o(),r(v,{key:1},[m.isEdit?(o(),y(x,{key:0,rows:1,placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\u503C",value:a.docEdit.paramValue,"onUpdate:value":e[1]||(e[1]=u=>a.docEdit.paramValue=u)},null,8,["value"])):(o(),r("span",Q,S(E),1))],64)):g("",!0),C.dataIndex==="paramType"?(o(),r(v,{key:2},[m.isEdit?(o(),y(t,{key:0,placeholder:"\u53C2\u6570\u4F4D\u7F6E",value:a.docEdit.paramType,"onUpdate:value":e[2]||(e[2]=u=>a.docEdit.paramType=u),style:{width:"110px"}},{default:l(()=>[s(h,{value:1},{default:l(()=>[R]),_:1}),s(h,{value:2},{default:l(()=>[q]),_:1}),s(h,{value:3},{default:l(()=>[J]),_:1})]),_:1},8,["value"])):(o(),r(v,{key:1},[E===1?(o(),y(_,{key:0,color:"green"},{default:l(()=>[W]),_:1})):E===2?(o(),y(_,{key:1,color:"pink"},{default:l(()=>[X]),_:1})):E===3?(o(),y(_,{key:2,color:"pink"},{default:l(()=>[Y]),_:1})):g("",!0)],64))],64)):g("",!0),C.dataIndex==="operation"?(o(),r(v,{key:3},[m.isEdit?(o(),r(v,{key:0},[s(p,{type:"link",onClick:u=>a.cancelEditDoc(m)},{default:l(()=>[Z]),_:2},1032,["onClick"]),s(p,{type:"link",onClick:u=>a.saveEditDoc(m)},{default:l(()=>[$]),_:2},1032,["onClick"])],64)):(o(),r(v,{key:1},[s(p,{type:"link",onClick:u=>a.editDoc(m)},{default:l(()=>[ee]),_:2},1032,["onClick"]),s(T,{title:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:u=>a.deleteDoc(m)},{default:l(()=>[s(p,{type:"link",danger:""},{default:l(()=>[ae]),_:1})]),_:2},1032,["onConfirm"])],64))],64)):g("",!0)]),_:1},8,["dataSource","columns","loading","scroll"])],64)}var de=j(z,[["render",te]]);export{de as default};