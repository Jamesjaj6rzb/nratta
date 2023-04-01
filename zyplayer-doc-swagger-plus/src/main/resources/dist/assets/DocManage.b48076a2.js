var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{z as o}from"./custom.6e797d8c.js";import{O as n,Q as u,R as r,r as i,T as c,b as s,a as p,w as m,F as f,o as g,n as v,c as y,B as h,d as _,t as w,p as b}from"./vendor.d5dc506b.js";const D={setup(){const e=n();let i=u([]),c=u(!1),s=u({docType:"",openVisit:"",docStatus:""});const p=async()=>{c.value=!0,o.swaggerDocList(s.value).then((e=>{setTimeout((()=>c.value=!1),500),i.value=e.data||[]}))};let m=u({}),f=u(),g=u(!1);return r((()=>{p()})),{searchParam:s,docList:i,docListLoading:c,newDocVisible:g,docEdit:m,newDocFormRef:f,searchDocList:p,openNewDoc:async()=>{g.value=!0,m.value={docType:1,openVisit:0,docStatus:1}},handleNewDocOk:async()=>{f.value.validate().then((()=>{o.swaggerDocAdd(m.value).then((a=>{p(),g.value=!1,e.commit("addDocChangedNum")}))})).catch((e=>{console.log("error",e)}))},deleteDoc:async a=>(async(a,t,l)=>{o.swaggerDocUpdate({id:a,docStatus:t,yn:l}).then((a=>{p(),e.commit("addDocChangedNum")}))})(a.id,null,0),editDoc:e=>{m.value=((e,o)=>{for(var n in o||(o={}))t.call(o,n)&&d(e,n,o[n]);if(a)for(var n of a(o))l.call(o,n)&&d(e,n,o[n]);return e})({},e),g.value=!0},newDocRules:{name:[{required:!0,message:"请输入文档名称",trigger:"change"}],docUrl:[{required:!0,message:"请输入文档地址",trigger:"change"}],jsonContent:[{required:!0,message:"请输入JSON格式的swagger文档内容",trigger:"change"}],docType:[{type:"number",required:!0,message:"请选择文档类型",trigger:"change"}],openVisit:[{type:"number",required:!0,message:"请选择是否开放访问",trigger:"change"}],docStatus:[{type:"number",required:!0,message:"请选择文档状态",trigger:"change"}]},docListColumns:[{title:"ID",dataIndex:"id",width:70},{title:"文档名称",dataIndex:"name",width:250},{title:"文档类型",dataIndex:"docType",width:90},{title:"开放访问",dataIndex:"openVisit",width:90},{title:"状态",dataIndex:"docStatus",width:90},{title:"文档地址",dataIndex:"docUrl"},{title:"目标域名",dataIndex:"rewriteDomain",width:250},{title:"操作",dataIndex:"operation",fixed:"right",width:170}],swaggerDocDemo:'{\n    "swagger": "2.0",\n    "info": {},\n    "host": "doc.zyplayer.com",\n    "basePath":"/",\n    "tags": [],\n    "paths": {},\n    "definitions": {}\n}'}}},k=b("全部"),x=b("URL添加"),S=b("JSON内容"),U=b("全部"),C=b("否"),E=b("是"),L=b("全部"),O=b("启用"),I=b("禁用"),T=b("查询"),V=b("新建"),q=b("编辑"),j=b("删除"),N=b("URL添加"),P=b("JSON内容"),R=b("未开放"),z=b("已开放"),J=b("启用"),F=b("禁用"),A=b("URL添加"),B=b("JSON内容"),Q=b(" 查看文档地址 "),G=_("p",null,"格式一：http://doc.zyplayer.com/v2/api-docs",-1),H=_("p",null,"格式二：http://doc.zyplayer.com/swagger-resources",-1),K=_("p",null,"格式三：http://doc.zyplayer.com/swagger-ui.html",-1),M=_("a",null,"示例",-1),W=b(" 查看文档内容 "),X=_("div",null,'支持以下格式的Swagger文档内容输入，其中 {"swagger": "2.0"} 为必要属性',-1),Y={class:"lang-json"},Z=_("a",null,"说明",-1),$=b("否"),ee=b("开放"),ae=b("启用"),te=b("禁用");D.render=function(e,a,t,l,d,o){const n=i("a-select-option"),u=i("a-select"),r=i("a-form-item"),b=i("a-button"),D=i("a-form"),le=i("a-popconfirm"),de=i("a-tag"),oe=i("a-table"),ne=i("a-card"),ue=i("a-input"),re=i("a-radio"),ie=i("a-radio-group"),ce=i("a-popover"),se=i("a-textarea"),pe=i("a-modal"),me=c("highlight");return g(),s(f,null,[p(ne,null,{default:m((()=>[p(D,{layout:"inline",style:{"margin-bottom":"20px"}},{default:m((()=>[p(r,{label:"文档类型"},{default:m((()=>[p(u,{placeholder:"请选择文档类型",value:l.searchParam.docType,"onUpdate:value":a[0]||(a[0]=e=>l.searchParam.docType=e),style:{width:"150px"}},{default:m((()=>[p(n,{value:""},{default:m((()=>[k])),_:1}),p(n,{value:1},{default:m((()=>[x])),_:1}),p(n,{value:2},{default:m((()=>[S])),_:1})])),_:1},8,["value"])])),_:1}),p(r,{label:"开放访问"},{default:m((()=>[p(u,{placeholder:"请选择开放访问",value:l.searchParam.openVisit,"onUpdate:value":a[1]||(a[1]=e=>l.searchParam.openVisit=e),style:{width:"150px"}},{default:m((()=>[p(n,{value:""},{default:m((()=>[U])),_:1}),p(n,{value:0},{default:m((()=>[C])),_:1}),p(n,{value:1},{default:m((()=>[E])),_:1})])),_:1},8,["value"])])),_:1}),p(r,{label:"状态"},{default:m((()=>[p(u,{placeholder:"请选择状态",value:l.searchParam.docStatus,"onUpdate:value":a[2]||(a[2]=e=>l.searchParam.docStatus=e),style:{width:"150px"}},{default:m((()=>[p(n,{value:""},{default:m((()=>[L])),_:1}),p(n,{value:1},{default:m((()=>[O])),_:1}),p(n,{value:2},{default:m((()=>[I])),_:1})])),_:1},8,["value"])])),_:1}),p(r,null,{default:m((()=>[p(b,{onClick:l.searchDocList,type:"primary"},{default:m((()=>[T])),_:1},8,["onClick"]),p(b,{onClick:l.openNewDoc,style:{marginLeft:"8px"}},{default:m((()=>[V])),_:1},8,["onClick"])])),_:1})])),_:1}),p(oe,{dataSource:l.docList,columns:l.docListColumns,size:"middle",loading:l.docListLoading,pagination:!1,scroll:{x:1400,y:"calc(100vh - 340px)"}},{bodyCell:m((({column:e,text:a,record:t})=>["operation"===e.dataIndex?(g(),s(f,{key:0},[p(b,{type:"link",onClick:e=>l.editDoc(t)},{default:m((()=>[q])),_:2},1032,["onClick"]),p(le,{title:"确定要删除吗？",onConfirm:e=>l.deleteDoc(t)},{default:m((()=>[p(b,{type:"link",danger:""},{default:m((()=>[j])),_:1})])),_:2},1032,["onConfirm"])],64)):v("",!0),"docType"===e.dataIndex?(g(),s(f,{key:1},[1===a?(g(),y(de,{key:0,color:"red"},{default:m((()=>[N])),_:1})):2===a?(g(),y(de,{key:1,color:"blue"},{default:m((()=>[P])),_:1})):v("",!0)],64)):v("",!0),"openVisit"===e.dataIndex?(g(),s(f,{key:2},[0===a?(g(),y(de,{key:0,color:"pink"},{default:m((()=>[R])),_:1})):1===a?(g(),y(de,{key:1,color:"green"},{default:m((()=>[z])),_:1})):v("",!0)],64)):v("",!0),"docStatus"===e.dataIndex?(g(),s(f,{key:3},[1===a?(g(),y(de,{key:0,color:"green"},{default:m((()=>[J])),_:1})):2===a?(g(),y(de,{key:1,color:"pink"},{default:m((()=>[F])),_:1})):v("",!0)],64)):v("",!0)])),_:1},8,["dataSource","columns","loading","scroll"])])),_:1}),p(pe,{visible:l.newDocVisible,"onUpdate:visible":a[9]||(a[9]=e=>l.newDocVisible=e),title:"新增文档",onOk:l.handleNewDocOk,width:600},{default:m((()=>[p(D,{layout:"horizontal",ref:"newDocFormRef",rules:l.newDocRules,model:l.docEdit,"label-col":{span:6},"wrapper-col":{span:18}},{default:m((()=>[p(r,{label:"文档名称",required:"",name:"name"},{default:m((()=>[p(ue,{placeholder:"请输入文档名称",value:l.docEdit.name,"onUpdate:value":a[3]||(a[3]=e=>l.docEdit.name=e)},null,8,["value"])])),_:1}),p(r,{label:"文档类型",required:"",name:"docType"},{default:m((()=>[p(ie,{value:l.docEdit.docType,"onUpdate:value":a[4]||(a[4]=e=>l.docEdit.docType=e)},{default:m((()=>[p(re,{value:1},{default:m((()=>[A])),_:1}),p(re,{value:2},{default:m((()=>[B])),_:1})])),_:1},8,["value"])])),_:1}),1===l.docEdit.docType?(g(),y(r,{key:0,label:"文档地址",required:"",name:"docUrl"},{extra:m((()=>[Q,p(ce,{title:"文档地址支持以下任一格式"},{content:m((()=>[G,H,K])),default:m((()=>[M])),_:1})])),default:m((()=>[p(ue,{placeholder:"请输入文档地址URL",value:l.docEdit.docUrl,"onUpdate:value":a[5]||(a[5]=e=>l.docEdit.docUrl=e)},null,8,["value"])])),_:1})):2===l.docEdit.docType?(g(),y(r,{key:1,label:"文档内容",required:"",name:"jsonContent"},{extra:m((()=>[W,p(ce,{title:"文档内容说明"},{content:m((()=>[X,h(_("div",null,[_("pre",null,[_("code",Y,w(l.swaggerDocDemo),1)])],512),[[me]])])),default:m((()=>[Z])),_:1})])),default:m((()=>[p(se,{placeholder:"请输入JSON格式的swagger文档内容",value:l.docEdit.jsonContent,"onUpdate:value":a[6]||(a[6]=e=>l.docEdit.jsonContent=e)},null,8,["value"])])),_:1})):v("",!0),p(r,{label:"开放访问",required:"",name:"openVisit"},{default:m((()=>[p(ie,{value:l.docEdit.openVisit,"onUpdate:value":a[7]||(a[7]=e=>l.docEdit.openVisit=e)},{default:m((()=>[p(re,{value:0},{default:m((()=>[$])),_:1}),p(re,{value:1},{default:m((()=>[ee])),_:1})])),_:1},8,["value"])])),_:1}),p(r,{label:"状态",required:"",name:"docStatus"},{default:m((()=>[p(ie,{value:l.docEdit.docStatus,"onUpdate:value":a[8]||(a[8]=e=>l.docEdit.docStatus=e)},{default:m((()=>[p(re,{value:1},{default:m((()=>[ae])),_:1}),p(re,{value:2},{default:m((()=>[te])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["visible","onOk"])],64)};export{D as default};
