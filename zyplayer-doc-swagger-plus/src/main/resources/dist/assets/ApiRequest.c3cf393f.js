import{V as Q,W as se,P as l,X as de,r as d,o as f,b as S,a,w as t,e as _,t as O,c as R,n as q,F as M,p as n,Y as ue,Z as me,$ as ce,O as fe,N as ve,d as _e,x as D,y as E}from"./vendor.ee21a423.js";import{P as X,a as Y,b as ye,u as pe,x as he}from"./unitConvert.c16ab317.js";import{z as Pe}from"./custom.33a00f74.js";import{_ as W}from"./main.b335ea75.js";const ge={props:{result:{type:Object,required:!0},loading:{type:Boolean,required:!0}},components:{CloseOutlined:Q,ParamTable:X,ParamBody:Y,aceEditor:ye},setup(v){const{result:o}=se(v);let w=l("body"),e=l("format"),y=l("json"),L=l(""),c=l([]),x=l([]),u=l(""),p=l(""),h=l({}),P=l();const g=()=>{e.value==="preview"&&setTimeout(()=>{P.value&&P.value.contentDocument.write(u.value)},0)},k=()=>{if(u.value="",p.value="",v.result.data){if(h.value=v.result.data,v.result.data.headers){c.value=v.result.data.headers;let m=c.value.find(T=>T.name==="Content-Type");m&&m.value&&(m.value.indexOf("text/html")>=0?y.value="html":m.value.indexOf("text/plain")>=0?y.value="text":m.value.indexOf("application/json")>=0?y.value="json":m.value.indexOf("application/xml")>=0||m.value.indexOf("text/xml")>=0?y.value="xml":m.value.indexOf("application/javascript")>=0&&(y.value="javascript"),L.value=y.value)}if(v.result.data.cookies&&(x.value=v.result.data.cookies),v.result.data.data){u.value=v.result.data.data,p.value=v.result.data.data;try{y.value==="xml"?p.value=he(u.value):y.value==="json"?p.value=JSON.stringify(JSON.parse(u.value),null,4):y.value==="javascript"&&(p.value=JSON.stringify(u.value,null,4))}catch{p.value=v.result.data.data}}else{let m=`
// \u8BF7\u6C42\u5931\u8D25\uFF0C\u4EE5\u4E0B\u4E3A\u5C01\u88C5\u7684\u8FD4\u56DE\u503C\u5BF9\u8C61\uFF0C\u4EC5\u4F9B\u53C2\u8003

`;u.value=m+JSON.stringify(v.result.data),p.value=m+JSON.stringify(v.result.data,null,4)}g()}};return k(),de(o,()=>k()),{activePage:w,bodyShowType:e,bodyShowTypeChange:g,unitConvert:pe,bodyShowFormatType:y,bodyShowFormatPreview:L,previewHtmlRef:P,resultData:h,resultHeaders:c,resultCookies:x,resultHeadersColumns:[{title:"KEY",dataIndex:"name"},{title:"VALUE",dataIndex:"value"}],resultCookiesColumns:[{title:"KEY",dataIndex:"name"},{title:"VALUE",dataIndex:"value"}],resultDataInit:m=>{m.setFontSize(16)},resultDataContentOrigin:u,resultDataContentFormat:p,resultDataConfig:{wrap:!0,readOnly:!0,autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,minLines:30,maxLines:30}}}},be={key:0,style:{"margin-bottom":"30px"}},xe={key:0,style:{"margin-bottom":"30px"}},ke={style:{"margin-bottom":"10px"}},Se=n("\u683C\u5F0F\u5316"),we=n("\u539F\u59CB\u503C"),Le=n("\u9884\u89C8"),Te=n("JSON"),Re=n("HTML"),Ce=n("XML"),Oe=n("JavaScript"),De=n("TEXT"),Ee={key:2},Ne={key:0,ref:"previewHtmlRef",width:"100%",height:"570px",style:{border:"0"}},Ue={class:"status-info-box"},qe=n(" \u72B6\u6001\u7801\uFF1A"),Ie=n(" \u8017\u65F6\uFF1A"),Je=n(" \u5927\u5C0F\uFF1A"),Ve={key:1},je={style:{color:"#f00"}},Ae={class:"status-info-box"},Ke=n(" \u8017\u65F6\uFF1A"),Fe={key:1,style:{"margin-top":"20px"}},Be={key:2,style:{"margin-top":"20px",color:"#aaa"}};function He(v,o,w,e,y,L){const c=d("a-radio-button"),x=d("a-radio-group"),u=d("a-select-option"),p=d("a-select"),h=d("ace-editor"),P=d("a-tab-pane"),g=d("a-table"),k=d("a-tabs"),C=d("a-skeleton"),m=d("a-spin"),T=d("a-empty");return w.result.data?(f(),S("div",be,[w.result.data.data?(f(),S("div",xe,[a(k,{activeKey:e.activePage,"onUpdate:activeKey":o[4]||(o[4]=i=>e.activePage=i),onTabClick:o[5]||(o[5]=()=>{}),style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[_("span",Ue,[qe,_("span",null,O(e.resultData.status||"200"),1),Ie,_("span",null,O(e.unitConvert.formatSeconds(e.resultData.useTime||0)),1),Je,_("span",null,O(e.unitConvert.formatFileSize(e.resultData.contentLength||0)),1)])]),default:t(()=>[a(P,{tab:"Body",key:"body",forceRender:""},{default:t(()=>[_("div",ke,[a(x,{value:e.bodyShowType,"onUpdate:value":o[0]||(o[0]=i=>e.bodyShowType=i),onChange:e.bodyShowTypeChange,size:"small"},{default:t(()=>[a(c,{value:"format"},{default:t(()=>[Se]),_:1}),a(c,{value:"row"},{default:t(()=>[we]),_:1}),a(c,{value:"preview"},{default:t(()=>[Le]),_:1})]),_:1},8,["value","onChange"]),e.bodyShowType==="format"?(f(),R(p,{key:0,value:e.bodyShowFormatType,"onUpdate:value":o[1]||(o[1]=i=>e.bodyShowFormatType=i),size:"small",style:{"margin-left":"10px",width:"100px"}},{default:t(()=>[a(u,{value:"json"},{default:t(()=>[Te]),_:1}),a(u,{value:"html"},{default:t(()=>[Re]),_:1}),a(u,{value:"xml"},{default:t(()=>[Ce]),_:1}),a(u,{value:"javascript"},{default:t(()=>[Oe]),_:1}),a(u,{value:"text"},{default:t(()=>[De]),_:1})]),_:1},8,["value"])):q("",!0)]),e.bodyShowType==="format"?(f(),R(h,{key:0,value:e.resultDataContentFormat,"onUpdate:value":o[2]||(o[2]=i=>e.resultDataContentFormat=i),onInit:e.resultDataInit,lang:e.bodyShowFormatType,theme:"monokai",width:"100%",height:"100",options:e.resultDataConfig},null,8,["value","onInit","lang","options"])):e.bodyShowType==="row"?(f(),R(h,{key:1,value:e.resultDataContentOrigin,"onUpdate:value":o[3]||(o[3]=i=>e.resultDataContentOrigin=i),onInit:e.resultDataInit,lang:"text",theme:"chrome",width:"100%",height:"100",options:e.resultDataConfig},null,8,["value","onInit","options"])):e.bodyShowType==="preview"?(f(),S("div",Ee,[e.bodyShowFormatPreview==="html"?(f(),S("iframe",Ne,null,512)):(f(),S(M,{key:1},[n(O(e.resultDataContentOrigin),1)],64))])):q("",!0)]),_:1}),a(P,{tab:"Headers",key:"headers",forceRender:""},{default:t(()=>[a(g,{dataSource:e.resultHeaders,columns:e.resultHeadersColumns,size:"small",pagination:!1,scroll:{y:"300px"}},null,8,["dataSource","columns"])]),_:1}),a(P,{tab:"Cookies",key:"cookies",forceRender:""},{default:t(()=>[a(g,{dataSource:e.resultCookies,columns:e.resultCookiesColumns,size:"small",pagination:!1,scroll:{y:"300px"}},null,8,["dataSource","columns"])]),_:1})]),_:1},8,["activeKey"])])):(f(),S("div",Ve,[a(k,{style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[_("span",Ae,[Ke,_("span",null,O(e.unitConvert.formatSeconds(e.resultData.useTime||0)),1)])]),default:t(()=>[a(P,{tab:"\u8BF7\u6C42\u5931\u8D25",key:"body",forceRender:""},{default:t(()=>[_("div",je,O(w.result.data.errorMsg),1)]),_:1})]),_:1})]))])):w.loading?(f(),S("div",Fe,[a(m,{tip:"\u8BF7\u6C42\u6267\u884C\u4E2D..."},{default:t(()=>[a(C)]),_:1})])):(f(),S("div",Be,[a(T,{description:"\u70B9\u51FB \u2018\u53D1\u9001\u8BF7\u6C42\u2019 \u83B7\u53D6\u8BF7\u6C42\u7ED3\u679C"})]))}var ze=W(ge,[["render",He]]);const Ge={components:{VerticalAlignTopOutlined:ue,VerticalAlignBottomOutlined:me,CloseOutlined:Q,ParamTable:X,ParamBody:Y,ApiRequestResult:ze},setup(v){let o=l(""),w=l("urlParam");const e=ce(),y=fe();y.commit("addTableName",{key:e.fullPath,val:"\u63A5\u53E3\u8BF7\u6C42"+e.query.id});let L=y.state.globalParam||[],c=1;const x=l();let u=l([]);const p=l();let h=[];L.filter(s=>s.paramType===2).forEach(s=>{h.push({name:s.paramKey,value:s.paramValue,type:"string",key:"g"+c++})});let g=l(JSON.parse(JSON.stringify(h)));const k=l();let C=[];L.filter(s=>s.paramType===3).forEach(s=>{C.push({name:s.paramKey,value:s.paramValue,type:"string",key:"g"+c++})});let T=l(JSON.parse(JSON.stringify(C)));const i=l();let j=[];L.filter(s=>s.paramType===1).forEach(s=>{j.push({name:s.paramKey,value:s.paramValue,type:"string",key:"g"+c++})});let A=l(JSON.parse(JSON.stringify(j)));const I=l();let K=l([]),J=l(),Z=l("form"),$=l("json"),ee=l({}),F=l({method:"get"}),V=l({}),N=l(!1);const ae=()=>{if(!o.value){ve.error("\u8BF7\u8F93\u5165\u8BF7\u6C42\u7684\u76EE\u6807URL\u5730\u5740");return}const s=new FormData;let te=x.value.getSelectedRowKeys(),B=u.value.filter(r=>te.indexOf(r.key)>=0&&r.name&&r.value).map(r=>r.name+"="+encodeURIComponent(r.value)).join("&"),oe=p.value.getSelectedRowKeys(),le=g.value.filter(r=>oe.indexOf(r.key)>=0&&r.name&&r.value).map(r=>({code:r.name,value:r.value})),re=k.value.getSelectedRowKeys(),ne=T.value.filter(r=>re.indexOf(r.key)>=0&&r.name&&r.value).map(r=>({code:r.name,value:r.value})),H=[];if(i.value){let r=i.value.getSelectedRowKeys();H=A.value.filter(b=>r.indexOf(b.key)>=0&&b.name&&b.value).map(b=>({code:b.name,value:b.value}))}let z=[];if(I.value){let r=I.value.getSelectedRowKeys();z=K.value.filter(b=>r.indexOf(b.key)>=0&&b.name&&b.value).map(b=>({code:b.name,value:b.value}))}let G="";J.value&&(G=J.value.getParam());let ie=B?o.value+"?"+B:o.value;s.append("url",ie),s.append("host",""),s.append("method",F.value.method),s.append("contentType",""),s.append("headerParam",JSON.stringify(le)),s.append("cookieParam",JSON.stringify(ne)),s.append("formParam",JSON.stringify(H)),s.append("formEncodeParam",JSON.stringify(z)),s.append("bodyParam",G),N.value=!0,V.value={},Pe.requestUrl(s).then(r=>{V.value=r,N.value=!1}).catch(r=>{N.value=!1})};let U=l(!0);return{docUrl:o,activePage:w,activePageChange:()=>{U.value=!0},requestLoading:N,sendRequest:ae,requestResult:V,consumesParamType:$,urlParamRef:x,urlParamList:u,headerParamRef:p,headerParamList:g,cookieParamRef:k,cookieParamList:T,formParamRef:i,formParamList:A,formEncodeParamRef:I,formEncodeParamList:K,bodyParamRef:J,bodyParamType:Z,bodyRowParamList:ee,queryParamVisible:U,docInfoShow:F,hideQueryParam:()=>{U.value=!1},showQueryParam:()=>{U.value=!0},methodList:["get","post","put","patch","head","delete","options","trace"]}}},Qe=n("\u53D1\u9001\u8BF7\u6C42"),Me={style:{"margin-bottom":"6px"}},Xe=n("none"),Ye=n("form-data"),We=n("x-www-form-urlencoded"),Ze=n("row"),$e=n("binary"),ea=n("JSON"),aa=n("HTML"),ta=n("XML"),oa=n("JavaScript"),la=n("TEXT"),ra=n("\u6536\u8D77\u53C2\u6570"),na=n("\u5C55\u5F00\u53C2\u6570");function ia(v,o,w,e,y,L){const c=d("a-select-option"),x=d("a-select"),u=d("a-button"),p=d("a-input-search"),h=d("ParamTable"),P=d("a-tab-pane"),g=d("a-radio"),k=d("a-radio-group"),C=d("ParamBody"),m=d("a-tabs"),T=d("ApiRequestResult");return f(),S("div",null,[a(p,{value:e.docUrl,"onUpdate:value":o[1]||(o[1]=i=>e.docUrl=i),onSearch:e.sendRequest,placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807URL\u5730\u5740"},{addonBefore:t(()=>[a(x,{value:e.docInfoShow.method,"onUpdate:value":o[0]||(o[0]=i=>e.docInfoShow.method=i),style:{width:"100px"}},{default:t(()=>[(f(!0),S(M,null,_e(e.methodList,i=>(f(),R(c,{value:i},{default:t(()=>[n(O(i.toUpperCase()),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),enterButton:t(()=>[a(u,{type:"primary",loading:e.requestLoading},{default:t(()=>[Qe]),_:1},8,["loading"])]),_:1},8,["value","onSearch"]),a(m,{activeKey:e.activePage,"onUpdate:activeKey":o[4]||(o[4]=i=>e.activePage=i),closable:"",onTabClick:e.activePageChange,style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[e.queryParamVisible?(f(),R(u,{key:0,onClick:e.hideQueryParam,type:"link"},{default:t(()=>[ra]),_:1},8,["onClick"])):(f(),R(u,{key:1,onClick:e.showQueryParam,type:"link"},{default:t(()=>[na]),_:1},8,["onClick"]))]),default:t(()=>[a(P,{tab:"URL\u53C2\u6570",key:"urlParam",forceRender:""},{default:t(()=>[D(_("div",null,[a(h,{ref:"urlParamRef",paramList:e.urlParamList},null,8,["paramList"])],512),[[E,e.queryParamVisible]])]),_:1}),e.docInfoShow.method!=="get"?(f(),R(P,{tab:"Body\u53C2\u6570",key:"bodyParam",forceRender:""},{default:t(()=>[D(_("div",null,[_("div",Me,[a(k,{value:e.bodyParamType,"onUpdate:value":o[2]||(o[2]=i=>e.bodyParamType=i)},{default:t(()=>[a(g,{value:"none"},{default:t(()=>[Xe]),_:1}),a(g,{value:"form"},{default:t(()=>[Ye]),_:1}),a(g,{value:"formUrlEncode"},{default:t(()=>[We]),_:1}),a(g,{value:"row"},{default:t(()=>[Ze]),_:1}),a(g,{value:"binary"},{default:t(()=>[$e]),_:1})]),_:1},8,["value"]),e.bodyParamType==="row"?(f(),R(x,{key:0,value:e.consumesParamType,"onUpdate:value":o[3]||(o[3]=i=>e.consumesParamType=i),size:"small",style:{"margin-left":"10px","vertical-align":"top",width:"100px"}},{default:t(()=>[a(c,{value:"json"},{default:t(()=>[ea]),_:1}),a(c,{value:"html"},{default:t(()=>[aa]),_:1}),a(c,{value:"xml"},{default:t(()=>[ta]),_:1}),a(c,{value:"javascript"},{default:t(()=>[oa]),_:1}),a(c,{value:"text"},{default:t(()=>[la]),_:1})]),_:1},8,["value"])):q("",!0)]),D(_("div",null,[a(h,{ref:"formParamRef",paramList:e.formParamList,showType:""},null,8,["paramList"])],512),[[E,e.bodyParamType==="form"]]),D(_("div",null,[a(h,{ref:"formEncodeParamRef",paramList:e.formEncodeParamList},null,8,["paramList"])],512),[[E,e.bodyParamType==="formUrlEncode"]]),D(_("div",null,[a(C,{ref:"bodyParamRef",rowLang:e.consumesParamType,paramList:e.bodyRowParamList},null,8,["rowLang","paramList"])],512),[[E,e.bodyParamType==="row"]])],512),[[E,e.queryParamVisible]])]),_:1})):q("",!0),a(P,{tab:"Header\u53C2\u6570",key:"headerParam",forceRender:""},{default:t(()=>[D(_("div",null,[a(h,{ref:"headerParamRef",paramList:e.headerParamList},null,8,["paramList"])],512),[[E,e.queryParamVisible]])]),_:1}),a(P,{tab:"Cookie\u53C2\u6570",key:"cookieParam",forceRender:""},{default:t(()=>[D(_("div",null,[a(h,{ref:"cookieParamRef",paramList:e.cookieParamList},null,8,["paramList"])],512),[[E,e.queryParamVisible]])]),_:1})]),_:1},8,["activeKey","onTabClick"]),a(T,{result:e.requestResult,loading:e.requestLoading},null,8,["result","loading"])])}var ya=W(Ge,[["render",ia]]);export{ya as default};