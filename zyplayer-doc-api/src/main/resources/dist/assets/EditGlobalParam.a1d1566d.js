var K=Object.defineProperty;var I=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var B=(s,e,a)=>e in s?K(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,x=(s,e)=>{for(var a in e||(e={}))N.call(e,a)&&B(s,a,e[a]);if(I)for(var a of I(e))O.call(e,a)&&B(s,a,e[a]);return s};import{z as V}from"./custom.05b2559c.js";import{P as S,a4 as U,R as j,u as A,y as L,W as F,r as m,o as l,b as u,e as z,a as d,w as n,F as v,c as k,t as G,k as b,B as R,m as c}from"./vendor.160e93e4.js";import{_ as H}from"./main.ac653d82.js";const q={components:{PlusOutlined:S,SearchOutlined:U,ReloadOutlined:j},props:{dynamicParam:{type:Object,required:!0}},setup(s){const e=A();let a=L([]),t=L(!1);const h=async()=>{i.value={},t.value=!0,V.docApiGlobalParamList(s.dynamicParam).then(o=>{setTimeout(()=>t.value=!1,500),a.value=o.data||[],e.commit("setGlobalParamOnChange",a.value,s.dynamicParam.id)})};let i=L({}),D=L();const p=()=>{i.value.isEdit&&f(i.value);let o={isEdit:!0,paramType:1};a.value.unshift(o),i.value=o,setTimeout(()=>{let r=document.getElementsByClassName("ant-table-body")[0];r.scrollTop=0},0)},P=o=>{i.value.isEdit&&f(i.value),o.isEdit=!0,i.value=x({},o)},f=o=>{o.isEdit=!1,o.id?a.value.forEach(r=>r.isEdit=!1):a.value=a.value.filter(r=>r!==o),i.value={}},E=o=>{if(!i.value.paramKey||!i.value.paramValue){R.error("\u53C2\u6570\u540D\u6216\u53C2\u6570\u503C\u4E0D\u80FD\u4E3A\u7A7A");return}let r=x(x({},s.dynamicParam),i.value);V.docApiGlobalParamUpdate(r).then(w=>{o.isEdit=!1,h()})},T=async o=>{V.docApiGlobalParamUpdate({id:o.id,yn:0}).then(r=>{h()})};return F(()=>{h()}),{docList:a,docListLoading:t,docEdit:i,tableRef:D,searchDocList:h,deleteDoc:T,editDoc:P,saveEditDoc:E,cancelEditDoc:f,addDocLine:p,docListColumns:[{title:"\u53C2\u6570\u540D\u79F0",dataIndex:"paramKey",width:250},{title:"\u53C2\u6570\u503C",dataIndex:"paramValue"},{title:"\u53C2\u6570\u4F4D\u7F6E",dataIndex:"paramType",width:120},{title:"\u64CD\u4F5C",dataIndex:"operation",fixed:"right",width:170}]}}},M={style:{"margin-bottom":"10px","text-align":"right"}},W=c(" \u5237\u65B0"),J=c(" \u65B0\u5EFA"),Q={key:1},X={key:1},Y=c("Form"),Z=c("Header"),$=c("Cookie"),ee=c("Form"),ae=c("Header"),te=c("Cookie"),oe=c("\u53D6\u6D88"),ne=c("\u4FDD\u5B58"),le=c("\u7F16\u8F91"),ie=c("\u5220\u9664");function de(s,e,a,t,h,i){const D=m("reload-outlined"),p=m("a-button"),P=m("plus-outlined"),f=m("a-input"),E=m("a-select-option"),T=m("a-select"),o=m("a-tag"),r=m("a-popconfirm"),w=m("a-table");return l(),u(v,null,[z("div",M,[d(p,{onClick:t.searchDocList,type:"primary"},{icon:n(()=>[d(D)]),default:n(()=>[W]),_:1},8,["onClick"]),d(p,{onClick:t.addDocLine},{icon:n(()=>[d(P)]),default:n(()=>[J]),_:1},8,["onClick"])]),d(w,{dataSource:t.docList,columns:t.docListColumns,size:"middle",id:"paramTable",loading:t.docListLoading,pagination:!1,scroll:{x:1e3,y:"calc(100vh - 240px)"}},{bodyCell:n(({column:g,text:C,record:y})=>[g.dataIndex==="paramKey"?(l(),u(v,{key:0},[y.isEdit?(l(),k(f,{key:0,placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\u540D\u79F0",value:t.docEdit.paramKey,"onUpdate:value":e[0]||(e[0]=_=>t.docEdit.paramKey=_)},null,8,["value"])):(l(),u("span",Q,G(C),1))],64)):b("",!0),g.dataIndex==="paramValue"?(l(),u(v,{key:1},[y.isEdit?(l(),k(f,{key:0,rows:1,placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\u503C",value:t.docEdit.paramValue,"onUpdate:value":e[1]||(e[1]=_=>t.docEdit.paramValue=_)},null,8,["value"])):(l(),u("span",X,G(C),1))],64)):b("",!0),g.dataIndex==="paramType"?(l(),u(v,{key:2},[y.isEdit?(l(),k(T,{key:0,placeholder:"\u53C2\u6570\u4F4D\u7F6E",value:t.docEdit.paramType,"onUpdate:value":e[2]||(e[2]=_=>t.docEdit.paramType=_),style:{width:"110px"}},{default:n(()=>[d(E,{value:1},{default:n(()=>[Y]),_:1}),d(E,{value:2},{default:n(()=>[Z]),_:1}),d(E,{value:3},{default:n(()=>[$]),_:1})]),_:1},8,["value"])):(l(),u(v,{key:1},[C===1?(l(),k(o,{key:0,color:"green"},{default:n(()=>[ee]),_:1})):C===2?(l(),k(o,{key:1,color:"pink"},{default:n(()=>[ae]),_:1})):C===3?(l(),k(o,{key:2,color:"pink"},{default:n(()=>[te]),_:1})):b("",!0)],64))],64)):b("",!0),g.dataIndex==="operation"?(l(),u(v,{key:3},[y.isEdit?(l(),u(v,{key:0},[d(p,{type:"link",onClick:_=>t.cancelEditDoc(y)},{default:n(()=>[oe]),_:2},1032,["onClick"]),d(p,{type:"link",onClick:_=>t.saveEditDoc(y)},{default:n(()=>[ne]),_:2},1032,["onClick"])],64)):(l(),u(v,{key:1},[d(p,{type:"link",onClick:_=>t.editDoc(y)},{default:n(()=>[le]),_:2},1032,["onClick"]),d(r,{title:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:_=>t.deleteDoc(y)},{default:n(()=>[d(p,{type:"link",danger:""},{default:n(()=>[ie]),_:1})]),_:2},1032,["onConfirm"])],64))],64)):b("",!0)]),_:1},8,["dataSource","columns","loading","scroll"])],64)}var _e=H(q,[["render",de]]);export{_e as E};
