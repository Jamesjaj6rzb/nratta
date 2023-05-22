var J=Object.defineProperty;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var q=(m,a,d)=>a in m?J(m,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):m[a]=d,O=(m,a)=>{for(var d in a||(a={}))B.call(a,d)&&q(m,d,a[d]);if(I)for(var d of I(a))F.call(a,d)&&q(m,d,a[d]);return m};import{z as T}from"./custom.fa05565e.js";import{J as A,L as D,N as M,r as i,O as G,o as s,b as C,a as t,w as e,F as S,k as f,c as g,u as H,e as u,t as K,m as l}from"./vendor.e1de8368.js";import{_ as Q}from"./main.5d87f661.js";const W={setup(){const m=A();let a=D([]),d=D(!1),o=D({docType:"",openVisit:"",docStatus:""});const k=async()=>{d.value=!0,T.swaggerDocList(o.value).then(_=>{setTimeout(()=>d.value=!1,500),a.value=_.data||[]})};let b=D({}),c=D(),p=D(!1);const r=async()=>{c.value.validate().then(()=>{T.swaggerDocAdd(b.value).then(_=>{k(),p.value=!1,m.commit("addDocChangedNum")})}).catch(_=>{console.log("error",_)})},v=async()=>{p.value=!0,b.value={docType:1,openVisit:0,docStatus:1,isNew:1}},U=_=>{b.value=O({},_),p.value=!0},E=async(_,x,y)=>{T.swaggerDocUpdate({id:_,docStatus:x,yn:y}).then(N=>{k(),m.commit("addDocChangedNum")})},h=async _=>E(_.id,null,0);return M(()=>{k()}),{searchParam:o,docList:a,docListLoading:d,newDocVisible:p,docEdit:b,newDocFormRef:c,searchDocList:k,openNewDoc:v,handleNewDocOk:r,deleteDoc:h,editDoc:U,newDocRules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0",trigger:"change"}],docUrl:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u6863\u5730\u5740",trigger:"change"}],jsonContent:[{required:!0,message:"\u8BF7\u8F93\u5165JSON\u683C\u5F0F\u7684swagger\u6587\u6863\u5185\u5BB9",trigger:"change"}],docType:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u7C7B\u578B",trigger:"change"}],openVisit:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5F00\u653E\u8BBF\u95EE",trigger:"change"}],docStatus:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u72B6\u6001",trigger:"change"}]},docListColumns:[{title:"ID",dataIndex:"id",width:70},{title:"\u6587\u6863\u540D\u79F0",dataIndex:"name",width:250},{title:"\u6587\u6863\u7C7B\u578B",dataIndex:"docType",width:90},{title:"\u5F00\u653E\u8BBF\u95EE",dataIndex:"openVisit",width:90},{title:"\u72B6\u6001",dataIndex:"docStatus",width:90},{title:"\u6587\u6863\u5730\u5740",dataIndex:"docUrl"},{title:"\u76EE\u6807\u57DF\u540D",dataIndex:"rewriteDomain",width:250},{title:"\u64CD\u4F5C",dataIndex:"operation",fixed:"right",width:170}],swaggerDocDemo:`{
    "swagger": "2.0",
    "info": {},
    "host": "doc.zyplayer.com",
    "basePath":"/",
    "tags": [],
    "paths": {},
    "definitions": {}
}`}}},X=l("\u5168\u90E8"),Y=l("URL\u6DFB\u52A0"),Z=l("JSON\u5185\u5BB9"),$=l("\u5168\u90E8"),ee=l("\u5426"),te=l("\u662F"),oe=l("\u5168\u90E8"),ae=l("\u542F\u7528"),le=l("\u7981\u7528"),ne=l("\u67E5\u8BE2"),de=l("\u65B0\u5EFA"),ie=l("\u7F16\u8F91"),se=l("\u5220\u9664"),ce=l("URL\u6DFB\u52A0"),re=l("JSON\u5185\u5BB9"),_e=l("\u672A\u5F00\u653E"),ue=l("\u5DF2\u5F00\u653E"),me=l("\u542F\u7528"),pe=l("\u7981\u7528"),he=l("URL\u6DFB\u52A0"),fe=l("JSON\u5185\u5BB9"),ge=l(" \u67E5\u770B\u6587\u6863\u5730\u5740 "),ve=u("p",null,"\u683C\u5F0F\u4E00\uFF1Ahttp://doc.zyplayer.com/v2/api-docs",-1),ye=u("p",null,"\u683C\u5F0F\u4E8C\uFF1Ahttp://doc.zyplayer.com/swagger-resources",-1),we=u("p",null,"\u683C\u5F0F\u4E09\uFF1Ahttp://doc.zyplayer.com/swagger-ui.html",-1),De=u("a",null,"\u793A\u4F8B",-1),ke=l(" \u67E5\u770B\u6587\u6863\u5185\u5BB9 "),be=u("div",null,'\u652F\u6301\u4EE5\u4E0B\u683C\u5F0F\u7684Swagger\u6587\u6863\u5185\u5BB9\u8F93\u5165\uFF0C\u5176\u4E2D {"swagger": "2.0"} \u4E3A\u5FC5\u8981\u5C5E\u6027',-1),xe={class:"lang-json"},Ce=u("a",null,"\u8BF4\u660E",-1),Se=l(" \u76EE\u6807\u57DF\u540D "),Ue=u("p",null,"\u5728\u6587\u6863\u7684\u5728\u7EBF\u8C03\u8BD5\u754C\u9762\uFF0C\u8BBF\u95EE\u7684\u57DF\u540D\u53EF\u4EE5\u521D\u59CB\u4E3A\u6B64\u5904\u5F55\u5165\u7684\u57DF\u540D\uFF0C\u800C\u975E\u6587\u6863\u672C\u8EAB\u7684\u57DF\u540D\u5730\u5740",-1),Ee=u("p",null,"\u53EF\u4FBF\u4E8E\u4E0D\u540C\u73AF\u5883\u95F4\u7684\u63A5\u53E3\u6D4B\u8BD5\uFF0C\u4F8B\uFF1Ahttp://doc.zyplayer.com",-1),Ne=u("a",null,"\u8BF4\u660E",-1),Le=l("\u542F\u7528"),Te=l("\u7981\u7528");function Ve(m,a,d,o,k,b){const c=i("a-select-option"),p=i("a-select"),r=i("a-form-item"),v=i("a-button"),U=i("a-form"),E=i("a-popconfirm"),h=i("a-tag"),_=i("a-table"),x=i("a-input"),y=i("a-radio"),N=i("a-radio-group"),L=i("a-popover"),z=i("a-textarea"),j=i("a-modal"),P=G("highlight");return s(),C(S,null,[t(U,{layout:"inline",style:{"margin-bottom":"20px"}},{default:e(()=>[t(r,{label:"\u6587\u6863\u7C7B\u578B"},{default:e(()=>[t(p,{placeholder:"\u8BF7\u9009\u62E9\u6587\u6863\u7C7B\u578B",value:o.searchParam.docType,"onUpdate:value":a[0]||(a[0]=n=>o.searchParam.docType=n),style:{width:"150px"}},{default:e(()=>[t(c,{value:""},{default:e(()=>[X]),_:1}),t(c,{value:1},{default:e(()=>[Y]),_:1}),t(c,{value:2},{default:e(()=>[Z]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"\u5F00\u653E\u8BBF\u95EE"},{default:e(()=>[t(p,{placeholder:"\u8BF7\u9009\u62E9\u5F00\u653E\u8BBF\u95EE",value:o.searchParam.openVisit,"onUpdate:value":a[1]||(a[1]=n=>o.searchParam.openVisit=n),style:{width:"150px"}},{default:e(()=>[t(c,{value:""},{default:e(()=>[$]),_:1}),t(c,{value:0},{default:e(()=>[ee]),_:1}),t(c,{value:1},{default:e(()=>[te]),_:1})]),_:1},8,["value"])]),_:1}),t(r,{label:"\u72B6\u6001"},{default:e(()=>[t(p,{placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",value:o.searchParam.docStatus,"onUpdate:value":a[2]||(a[2]=n=>o.searchParam.docStatus=n),style:{width:"150px"}},{default:e(()=>[t(c,{value:""},{default:e(()=>[oe]),_:1}),t(c,{value:1},{default:e(()=>[ae]),_:1}),t(c,{value:2},{default:e(()=>[le]),_:1})]),_:1},8,["value"])]),_:1}),t(r,null,{default:e(()=>[t(v,{onClick:o.searchDocList,type:"primary"},{default:e(()=>[ne]),_:1},8,["onClick"]),t(v,{onClick:o.openNewDoc,style:{marginLeft:"8px"}},{default:e(()=>[de]),_:1},8,["onClick"])]),_:1})]),_:1}),t(_,{dataSource:o.docList,columns:o.docListColumns,size:"middle",loading:o.docListLoading,pagination:!1,scroll:{x:1400,y:"calc(100vh - 300px)"}},{bodyCell:e(({column:n,text:w,record:V})=>[n.dataIndex==="operation"?(s(),C(S,{key:0},[t(v,{type:"link",onClick:R=>o.editDoc(V)},{default:e(()=>[ie]),_:2},1032,["onClick"]),t(E,{title:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:R=>o.deleteDoc(V)},{default:e(()=>[t(v,{type:"link",danger:""},{default:e(()=>[se]),_:1})]),_:2},1032,["onConfirm"])],64)):f("",!0),n.dataIndex==="docType"?(s(),C(S,{key:1},[w===1?(s(),g(h,{key:0,color:"red"},{default:e(()=>[ce]),_:1})):w===2?(s(),g(h,{key:1,color:"blue"},{default:e(()=>[re]),_:1})):f("",!0)],64)):f("",!0),n.dataIndex==="openVisit"?(s(),C(S,{key:2},[w===0?(s(),g(h,{key:0,color:"pink"},{default:e(()=>[_e]),_:1})):w===1?(s(),g(h,{key:1,color:"green"},{default:e(()=>[ue]),_:1})):f("",!0)],64)):f("",!0),n.dataIndex==="docStatus"?(s(),C(S,{key:3},[w===1?(s(),g(h,{key:0,color:"green"},{default:e(()=>[me]),_:1})):w===2?(s(),g(h,{key:1,color:"pink"},{default:e(()=>[pe]),_:1})):f("",!0)],64)):f("",!0)]),_:1},8,["dataSource","columns","loading","scroll"]),t(j,{visible:o.newDocVisible,"onUpdate:visible":a[9]||(a[9]=n=>o.newDocVisible=n),title:o.docEdit.isNew?"\u65B0\u589E\u6587\u6863":"\u7F16\u8F91\u6587\u6863",onOk:o.handleNewDocOk,width:600},{default:e(()=>[t(U,{layout:"horizontal",ref:"newDocFormRef",rules:o.newDocRules,model:o.docEdit,"label-col":{span:6},"wrapper-col":{span:18}},{default:e(()=>[t(r,{label:"\u6587\u6863\u540D\u79F0",required:"",name:"name"},{default:e(()=>[t(x,{placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0",value:o.docEdit.name,"onUpdate:value":a[3]||(a[3]=n=>o.docEdit.name=n)},null,8,["value"])]),_:1}),t(r,{label:"\u6587\u6863\u7C7B\u578B",required:"",name:"docType"},{default:e(()=>[t(N,{value:o.docEdit.docType,"onUpdate:value":a[4]||(a[4]=n=>o.docEdit.docType=n)},{default:e(()=>[t(y,{value:1},{default:e(()=>[he]),_:1}),t(y,{value:2},{default:e(()=>[fe]),_:1})]),_:1},8,["value"])]),_:1}),o.docEdit.docType===1?(s(),g(r,{key:0,label:"\u6587\u6863\u5730\u5740",required:"",name:"docUrl"},{extra:e(()=>[ge,t(L,{title:"\u6587\u6863\u5730\u5740\u652F\u6301\u4EE5\u4E0B\u4EFB\u4E00\u683C\u5F0F"},{content:e(()=>[ve,ye,we]),default:e(()=>[De]),_:1})]),default:e(()=>[t(x,{placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u5730\u5740URL",value:o.docEdit.docUrl,"onUpdate:value":a[5]||(a[5]=n=>o.docEdit.docUrl=n)},null,8,["value"])]),_:1})):o.docEdit.docType===2?(s(),g(r,{key:1,label:"\u6587\u6863\u5185\u5BB9",required:"",name:"jsonContent"},{extra:e(()=>[ke,t(L,{title:"\u6587\u6863\u5185\u5BB9\u8BF4\u660E"},{content:e(()=>[be,H(u("div",null,[u("pre",null,[u("code",xe,K(o.swaggerDocDemo),1)])],512),[[P]])]),default:e(()=>[Ce]),_:1})]),default:e(()=>[t(z,{placeholder:"\u8BF7\u8F93\u5165JSON\u683C\u5F0F\u7684swagger\u6587\u6863\u5185\u5BB9",value:o.docEdit.jsonContent,"onUpdate:value":a[6]||(a[6]=n=>o.docEdit.jsonContent=n)},null,8,["value"])]),_:1})):f("",!0),t(r,{label:"\u76EE\u6807\u57DF\u540D",name:"rewriteDomain"},{extra:e(()=>[Se,t(L,{title:"\u76EE\u6807\u57DF\u540D\u8BF4\u660E"},{content:e(()=>[Ue,Ee]),default:e(()=>[Ne]),_:1})]),default:e(()=>[t(x,{placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807\u57DF\u540D",value:o.docEdit.rewriteDomain,"onUpdate:value":a[7]||(a[7]=n=>o.docEdit.rewriteDomain=n)},null,8,["value"])]),_:1}),t(r,{label:"\u72B6\u6001",required:"",name:"docStatus"},{default:e(()=>[t(N,{value:o.docEdit.docStatus,"onUpdate:value":a[8]||(a[8]=n=>o.docEdit.docStatus=n)},{default:e(()=>[t(y,{value:1},{default:e(()=>[Le]),_:1}),t(y,{value:2},{default:e(()=>[Te]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["visible","title","onOk"])],64)}var je=Q(W,[["render",Ve]]);export{je as default};