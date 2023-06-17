import{al as se,am as Pe,y as o,G as be,r as u,o as y,b as T,a,w as t,e as h,t as N,c as I,k as A,F as ie,m,an as we,ao as Se,u as de,J,L as j,d as xe,B as ue,v as Le,H as ke}from"./vendor.2a860d56.js";import{D as Oe,o as me}from"./DocContent.658bc0f2.js";import{m as De}from"./mavon-editor.824ddc3c.js";import{P as ce,a as fe,u as Ce,x as Te}from"./unitConvert.08ea372c.js";import"./index.c860d973.js";import{g as Re,z as Ie}from"./custom.ece90331.js";import{a as qe}from"./index.7873781e.js";import{_ as Z}from"./main.4232e7c8.js";import"./logUtil.532ff0b3.js";const Ne={props:{result:{type:Object,required:!0},loading:{type:Boolean,required:!0}},components:{CloseOutlined:se,ParamTable:ce,ParamBody:fe,aceEditor:qe},setup(n){const{result:r}=Pe(n);let w=o("body"),e=o("format"),_=o("json"),S=o(""),v=o([]),P=o([]),s=o(""),f=o(""),b=o({}),p=o();const d=()=>{e.value==="preview"&&setTimeout(()=>{p.value&&p.value.contentDocument.write(s.value)},0)},k=()=>{if(s.value="",f.value="",n.result.data){if(b.value=n.result.data,n.result.data.headers){v.value=n.result.data.headers;let c=v.value.find(D=>D.name==="Content-Type");c&&c.value&&(c.value.indexOf("text/html")>=0?_.value="html":c.value.indexOf("text/plain")>=0?_.value="text":c.value.indexOf("application/json")>=0?_.value="json":c.value.indexOf("application/xml")>=0||c.value.indexOf("text/xml")>=0?_.value="xml":c.value.indexOf("application/javascript")>=0&&(_.value="javascript"),S.value=_.value)}if(n.result.data.cookies&&(P.value=n.result.data.cookies),n.result.data.data||n.result.data.status===200){f.value=n.result.data.data,s.value=n.result.data.data;try{_.value==="xml"?f.value=Te(s.value):_.value==="json"?f.value=JSON.stringify(JSON.parse(s.value),null,4):_.value==="javascript"&&(f.value=JSON.stringify(s.value,null,4))}catch{f.value=n.result.data.data}}else{let c=`
// \u8BF7\u6C42\u5931\u8D25\uFF0C\u4EE5\u4E0B\u4E3A\u5C01\u88C5\u7684\u8FD4\u56DE\u503C\u5BF9\u8C61\uFF0C\u4EC5\u4F9B\u53C2\u8003

`;s.value=c+JSON.stringify(n.result.data),f.value=c+JSON.stringify(n.result.data,null,4)}d()}};return k(),be(r,()=>k()),{activePage:w,bodyShowType:e,bodyShowTypeChange:d,unitConvert:Ce,bodyShowFormatType:_,bodyShowFormatPreview:S,previewHtmlRef:p,resultData:b,resultHeaders:v,resultCookies:P,resultHeadersColumns:[{title:"KEY",dataIndex:"name"},{title:"VALUE",dataIndex:"value"}],resultCookiesColumns:[{title:"KEY",dataIndex:"name"},{title:"VALUE",dataIndex:"value"}],resultDataInit:c=>{c.setFontSize(16)},resultDataContentOrigin:s,resultDataContentFormat:f,resultDataConfig:{wrap:!0,readOnly:!0,autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,minLines:30,maxLines:30}}}},Je={key:0,style:{"margin-bottom":"30px"}},je={key:0,style:{"margin-bottom":"30px"}},Ue={style:{"margin-bottom":"10px"}},Ee=m("\u683C\u5F0F\u5316"),Ae=m("\u539F\u59CB\u503C"),Fe=m("\u9884\u89C8"),Ke=m("JSON"),Ve=m("HTML"),Be=m("XML"),Me=m("JavaScript"),He=m("TEXT"),ze={key:2},Qe={key:0,ref:"previewHtmlRef",width:"100%",height:"570px",style:{border:"0"}},Ge={class:"status-info-box"},Xe=m(" \u72B6\u6001\u7801\uFF1A"),Ye=m(" \u8017\u65F6\uFF1A"),Ze=m(" \u5927\u5C0F\uFF1A"),We={key:1},$e={style:{color:"#f00"}},ea={class:"status-info-box"},aa=m(" \u8017\u65F6\uFF1A"),ta={key:1,style:{"margin-top":"20px"}},oa={key:2,style:{"margin-top":"20px",color:"#aaa"}};function na(n,r,w,e,_,S){const v=u("a-radio-button"),P=u("a-radio-group"),s=u("a-select-option"),f=u("a-select"),b=u("ace-editor"),p=u("a-tab-pane"),d=u("a-table"),k=u("a-divider"),O=u("a-tabs"),c=u("a-skeleton"),D=u("a-spin"),x=u("a-empty");return w.result.data?(y(),T("div",Je,[w.result.data.data||w.result.data.status===200?(y(),T("div",je,[a(O,{activeKey:e.activePage,"onUpdate:activeKey":r[4]||(r[4]=L=>e.activePage=L),onTabClick:r[5]||(r[5]=()=>{}),style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[h("span",Ge,[Xe,h("span",null,N(e.resultData.status||"200"),1),a(k,{type:"vertical"}),Ye,h("span",null,N(e.unitConvert.formatSeconds(e.resultData.useTime||0)),1),a(k,{type:"vertical"}),Ze,h("span",null,N(e.unitConvert.formatFileSize(e.resultData.contentLength||0)),1)])]),default:t(()=>[a(p,{tab:"Body",key:"body",forceRender:""},{default:t(()=>[h("div",Ue,[a(P,{value:e.bodyShowType,"onUpdate:value":r[0]||(r[0]=L=>e.bodyShowType=L),onChange:e.bodyShowTypeChange,size:"small"},{default:t(()=>[a(v,{value:"format"},{default:t(()=>[Ee]),_:1}),a(v,{value:"row"},{default:t(()=>[Ae]),_:1}),a(v,{value:"preview"},{default:t(()=>[Fe]),_:1})]),_:1},8,["value","onChange"]),e.bodyShowType==="format"?(y(),I(f,{key:0,value:e.bodyShowFormatType,"onUpdate:value":r[1]||(r[1]=L=>e.bodyShowFormatType=L),size:"small",style:{"margin-left":"10px",width:"100px"}},{default:t(()=>[a(s,{value:"json"},{default:t(()=>[Ke]),_:1}),a(s,{value:"html"},{default:t(()=>[Ve]),_:1}),a(s,{value:"xml"},{default:t(()=>[Be]),_:1}),a(s,{value:"javascript"},{default:t(()=>[Me]),_:1}),a(s,{value:"text"},{default:t(()=>[He]),_:1})]),_:1},8,["value"])):A("",!0)]),e.bodyShowType==="format"?(y(),I(b,{key:0,value:e.resultDataContentFormat,"onUpdate:value":r[2]||(r[2]=L=>e.resultDataContentFormat=L),onInit:e.resultDataInit,lang:e.bodyShowFormatType,theme:"monokai",width:"100%",height:"100",options:e.resultDataConfig},null,8,["value","onInit","lang","options"])):e.bodyShowType==="row"?(y(),I(b,{key:1,value:e.resultDataContentOrigin,"onUpdate:value":r[3]||(r[3]=L=>e.resultDataContentOrigin=L),onInit:e.resultDataInit,lang:"text",theme:"chrome",width:"100%",height:"100",options:e.resultDataConfig},null,8,["value","onInit","options"])):e.bodyShowType==="preview"?(y(),T("div",ze,[e.bodyShowFormatPreview==="html"?(y(),T("iframe",Qe,null,512)):(y(),T(ie,{key:1},[m(N(e.resultDataContentOrigin),1)],64))])):A("",!0)]),_:1}),a(p,{tab:"Headers",key:"headers",forceRender:""},{default:t(()=>[a(d,{dataSource:e.resultHeaders,columns:e.resultHeadersColumns,size:"small",pagination:!1,scroll:{y:"300px"}},null,8,["dataSource","columns"])]),_:1}),a(p,{tab:"Cookies",key:"cookies",forceRender:""},{default:t(()=>[a(d,{dataSource:e.resultCookies,columns:e.resultCookiesColumns,size:"small",pagination:!1,scroll:{y:"300px"}},null,8,["dataSource","columns"])]),_:1})]),_:1},8,["activeKey"])])):(y(),T("div",We,[a(O,{style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[h("span",ea,[aa,h("span",null,N(e.unitConvert.formatSeconds(e.resultData.useTime||0)),1)])]),default:t(()=>[a(p,{tab:"\u8BF7\u6C42\u5931\u8D25",key:"body",forceRender:""},{default:t(()=>[h("div",$e,N(w.result.data.errorMsg),1)]),_:1})]),_:1})]))])):w.loading?(y(),T("div",ta,[a(D,{tip:"\u8BF7\u6C42\u6267\u884C\u4E2D..."},{default:t(()=>[a(c)]),_:1})])):(y(),T("div",oa,[a(x,{description:"\u70B9\u51FB \u2018\u53D1\u9001\u8BF7\u6C42\u2019 \u83B7\u53D6\u8BF7\u6C42\u7ED3\u679C"})]))}var ra=Z(Ne,[["render",na]]);const la={props:{docInfoShow:{type:Object,required:!0},requestParamList:{type:Array,required:!0},responseParamList:{type:Array,required:!0}},components:{VerticalAlignTopOutlined:we,VerticalAlignBottomOutlined:Se,CloseOutlined:se,ParamTable:ce,ParamBody:fe,DocDebuggerResult:ra},setup(n){const r=de();let w=r.state.apiDoc||{},e=r.state.globalParam||[],_=r.state.openApiDoc||{},S=w.rewriteDomain||"",v=_.servers||[];!S&&v.length>0&&v[0].url&&(S=v[0].url);let P=o(S+n.docInfoShow.url),s=o("urlParam");const f=o();let b=n.requestParamList.filter(i=>i.in==="query"||i.in==="path"),p=o([]);const d=o();let k=e.filter(i=>i.paramType===2),O=n.requestParamList.filter(i=>i.in==="header"),c=1;k.forEach(i=>{O.push({name:i.paramKey,value:i.paramValue,type:"string",key:"g"+c++})});let D=o(JSON.parse(JSON.stringify(O)));const x=o();let L=e.filter(i=>i.paramType===3),W=n.requestParamList.filter(i=>i.in==="cookie");L.forEach(i=>{W.push({name:i.paramKey,value:i.paramValue,type:"string",key:"g"+c++})});let $=o(JSON.parse(JSON.stringify(W)));const B=o();let ve=e.filter(i=>i.paramType===1),C=n.requestParamList.filter(i=>i.in==="formData");ve.forEach(i=>{C.push({name:i.paramKey,value:i.paramValue,type:"string",key:"g"+c++})});let U=o([]);n.docInfoShow.method==="post"?C=C.concat(b):p=o(JSON.parse(JSON.stringify(b)));const M=o();let E=o([]),H=o(),q=o("form"),z=o("json"),ee=n.requestParamList.filter(i=>i.in==="body"),ye=o(JSON.parse(JSON.stringify(ee)));n.docInfoShow.consumes.indexOf("application/x-www-form-urlencoded")>=0?(q.value="formUrlEncode",E=o(JSON.parse(JSON.stringify(C)))):n.docInfoShow.consumes.indexOf("multipart/form-data")>=0?(q.value="form",U=o(JSON.parse(JSON.stringify(C)))):n.docInfoShow.consumes.indexOf("application/json")>=0?(q.value="row",z.value="json",E=o(JSON.parse(JSON.stringify(C))),C.length>0&&(q.value="formUrlEncode")):n.docInfoShow.consumes.indexOf("application/xml")>=0||n.docInfoShow.consumes.indexOf("text/xml")>=0?(q.value="row",z.value="xml",E=o(JSON.parse(JSON.stringify(C))),C.length>0&&(q.value="formUrlEncode")):U=o(JSON.parse(JSON.stringify(C))),U.value.length>0?s.value="urlParam":C.length>0||ee.length>0?s.value="bodyParam":O.length>0&&(s.value="headerParam");let Q=o({}),F=o(!1),ae=o({url:Re()+"/doc-swagger/proxy/download",param:{}}),te=o(),oe=n.docInfoShow.produces==="application/octet-stream";const _e=()=>{if(!P.value){ue.error("\u8BF7\u8F93\u5165\u8BF7\u6C42\u7684\u76EE\u6807URL\u5730\u5740");return}let i={};const R=new FormData;let pe=f.value.getSelectedRowKeys(),ne=p.value.filter(l=>pe.indexOf(l.key)>=0&&l.name&&l.value).map(l=>(i[l.name]=l.value,l.name+"="+encodeURIComponent(l.value))).join("&"),he=d.value.getSelectedRowKeys(),re=D.value.filter(l=>he.indexOf(l.key)>=0&&l.name&&l.value).map(l=>({code:l.name,value:l.value})),ge=x.value.getSelectedRowKeys(),le=$.value.filter(l=>ge.indexOf(l.key)>=0&&l.name&&l.value).map(l=>({code:l.name,value:l.value})),G=[];if(B.value){let l=B.value.getSelectedRowKeys();G=U.value.filter(g=>l.indexOf(g.key)>=0&&g.name&&g.value).map(g=>(i[g.name]=g.value,{code:g.name,value:g.value}))}let X=[];if(M.value){let l=M.value.getSelectedRowKeys();X=E.value.filter(g=>l.indexOf(g.key)>=0&&g.name&&g.value).map(g=>(i[g.name]=g.value,{code:g.name,value:g.value}))}let Y="";H.value&&(Y=H.value.getParam());let V=ne?P.value+"?"+ne:P.value;Object.keys(i).forEach(l=>{V=V.replace("{"+l+"}",i[l])}),oe?(ae.value.param={url:V,host:S,method:n.docInfoShow.method,contentType:n.docInfoShow.consumes,headerParam:JSON.stringify(re),cookieParam:JSON.stringify(le),formParam:JSON.stringify(G),formEncodeParam:JSON.stringify(X),bodyParam:Y},setTimeout(()=>te.value.submit(),0)):(R.append("url",V),R.append("host",S),R.append("method",n.docInfoShow.method),R.append("contentType",n.docInfoShow.consumes),R.append("headerParam",JSON.stringify(re)),R.append("cookieParam",JSON.stringify(le)),R.append("formParam",JSON.stringify(G)),R.append("formEncodeParam",JSON.stringify(X)),R.append("bodyParam",Y),F.value=!0,Q.value={},Ie.requestUrl(R).then(l=>{Q.value=l,F.value=!1}).catch(l=>{F.value=!1}))};let K=o(!0);return{docUrl:P,activePage:s,activePageChange:()=>{K.value=!0},requestLoading:F,sendRequest:_e,requestResult:Q,consumesParamType:z,downloadFormParam:ae,downloadFormRef:te,isDownloadRequest:oe,urlParamRef:f,urlParamList:p,headerParamRef:d,headerParamList:D,cookieParamRef:x,cookieParamList:$,formParamRef:B,formParamList:U,formEncodeParamRef:M,formEncodeParamList:E,bodyParamRef:H,bodyParamType:q,bodyRowParamList:ye,responseCodeListColumns:[{title:"\u72B6\u6001\u7801",dataIndex:"code",width:100},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"desc"}],responseParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:250},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"description"}],queryParamVisible:K,hideQueryParam:()=>{K.value=!1},showQueryParam:()=>{K.value=!0}}}},sa={style:{"margin-bottom":"6px"}},ia=m("none"),da=m("form-data"),ua=m("x-www-form-urlencoded"),ma=m("row"),ca=m("JSON"),fa=m("HTML"),va=m("XML"),ya=m("JavaScript"),_a=m("TEXT"),pa=m("\u6536\u8D77\u53C2\u6570"),ha=m("\u5C55\u5F00\u53C2\u6570"),ga=["action"],Pa=["name","value"];function ba(n,r,w,e,_,S){const v=u("a-button"),P=u("a-input-search"),s=u("ParamTable"),f=u("a-tab-pane"),b=u("a-radio"),p=u("a-radio-group"),d=u("a-select-option"),k=u("a-select"),O=u("ParamBody"),c=u("a-tabs"),D=u("DocDebuggerResult");return y(),T("div",null,[a(P,{"addon-before":w.docInfoShow.method.toUpperCase(),value:e.docUrl,"onUpdate:value":r[0]||(r[0]=x=>e.docUrl=x),onSearch:e.sendRequest,placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807URL\u5730\u5740"},{enterButton:t(()=>[a(v,{type:"primary",loading:e.requestLoading},{default:t(()=>[m(N(e.isDownloadRequest?"\u4E0B\u8F7D\u6587\u4EF6":"\u53D1\u9001\u8BF7\u6C42"),1)]),_:1},8,["loading"])]),_:1},8,["addon-before","value","onSearch"]),a(c,{activeKey:e.activePage,"onUpdate:activeKey":r[3]||(r[3]=x=>e.activePage=x),closable:"",onTabClick:e.activePageChange,style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[e.queryParamVisible?(y(),I(v,{key:0,onClick:e.hideQueryParam,type:"link"},{default:t(()=>[pa]),_:1},8,["onClick"])):(y(),I(v,{key:1,onClick:e.showQueryParam,type:"link"},{default:t(()=>[ha]),_:1},8,["onClick"]))]),default:t(()=>[a(f,{tab:"URL\u53C2\u6570",key:"urlParam",forceRender:""},{default:t(()=>[J(h("div",null,[a(s,{ref:"urlParamRef",paramList:e.urlParamList},null,8,["paramList"])],512),[[j,e.queryParamVisible]])]),_:1}),w.docInfoShow.method!=="get"?(y(),I(f,{tab:"Body\u53C2\u6570",key:"bodyParam",forceRender:""},{default:t(()=>[J(h("div",null,[h("div",sa,[a(p,{value:e.bodyParamType,"onUpdate:value":r[1]||(r[1]=x=>e.bodyParamType=x)},{default:t(()=>[a(b,{value:"none"},{default:t(()=>[ia]),_:1}),a(b,{value:"form"},{default:t(()=>[da]),_:1}),a(b,{value:"formUrlEncode"},{default:t(()=>[ua]),_:1}),a(b,{value:"row"},{default:t(()=>[ma]),_:1})]),_:1},8,["value"]),e.bodyParamType==="row"?(y(),I(k,{key:0,value:e.consumesParamType,"onUpdate:value":r[2]||(r[2]=x=>e.consumesParamType=x),size:"small",style:{"margin-left":"10px","vertical-align":"top",width:"100px"}},{default:t(()=>[a(d,{value:"json"},{default:t(()=>[ca]),_:1}),a(d,{value:"html"},{default:t(()=>[fa]),_:1}),a(d,{value:"xml"},{default:t(()=>[va]),_:1}),a(d,{value:"javascript"},{default:t(()=>[ya]),_:1}),a(d,{value:"text"},{default:t(()=>[_a]),_:1})]),_:1},8,["value"])):A("",!0)]),J(h("div",null,[a(s,{ref:"formParamRef",paramList:e.formParamList,showType:""},null,8,["paramList"])],512),[[j,e.bodyParamType==="form"]]),J(h("div",null,[a(s,{ref:"formEncodeParamRef",paramList:e.formEncodeParamList},null,8,["paramList"])],512),[[j,e.bodyParamType==="formUrlEncode"]]),J(h("div",null,[a(O,{ref:"bodyParamRef",rowLang:e.consumesParamType,paramList:e.bodyRowParamList},null,8,["rowLang","paramList"])],512),[[j,e.bodyParamType==="row"]])],512),[[j,e.queryParamVisible]])]),_:1})):A("",!0),a(f,{tab:"Header\u53C2\u6570",key:"headerParam",forceRender:""},{default:t(()=>[J(h("div",null,[a(s,{ref:"headerParamRef",paramList:e.headerParamList},null,8,["paramList"])],512),[[j,e.queryParamVisible]])]),_:1}),a(f,{tab:"Cookie\u53C2\u6570",key:"cookieParam",forceRender:""},{default:t(()=>[J(h("div",null,[a(s,{ref:"cookieParamRef",paramList:e.cookieParamList},null,8,["paramList"])],512),[[j,e.queryParamVisible]])]),_:1})]),_:1},8,["activeKey","onTabClick"]),e.isDownloadRequest?A("",!0):(y(),I(D,{key:0,result:e.requestResult,loading:e.requestLoading},null,8,["result","loading"])),h("form",{method:"post",ref:"downloadFormRef",action:e.downloadFormParam.url,target:"_blank"},[(y(!0),T(ie,null,xe(e.downloadFormParam.param,(x,L)=>(y(),T("input",{type:"hidden",name:L,value:x},null,8,Pa))),256))],8,ga)])}var wa=Z(la,[["render",ba]]);const Sa={components:{DocContent:Oe,DocDebugger:wa},setup(){const n=Le(),r=de();let w=o("doc"),e=o([]),_=o([]),S=o({url:"",description:"",method:"",consumes:"",produces:""}),v=o(!1),P=0,s;const f=()=>{let p=n.query.path+"."+n.query.method;if(Object.keys(r.state.openApiUrlMethodMap).length<=0){console.log("\u6587\u6863\u5C1A\u672A\u52A0\u8F7D\uFF0C\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210"),s||(s=setInterval(()=>{if(v.value||P++>50){clearInterval(s);return}Object.keys(r.state.openApiUrlMethodMap).length>0&&(console.log("\u6587\u6863\u5185\u5BB9\u6539\u53D8\uFF0C\u91CD\u65B0\u52A0\u8F7D\u6587\u6863"),f())},1e3));return}let d=r.state.openApiUrlMethodMap[p];if(!d){ue.error("\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863");return}v.value=!0,r.commit("addTableName",{key:n.fullPath,val:d.summary});let k="",O="";d.consumes&&d.consumes.length>0&&(k=d.consumes.join(" ")),d.produces&&d.produces.length>0&&(O=d.produces.join(" "));let c=De.exports.markdownIt.render(d.description||d.summary||"");S.value={url:d.url,description:c,method:d.method||"",consumes:k,produces:O};let D=r.state.openApiDefinitions;e.value=me.getRequestParamList(d.parameters,D),_.value=me.getResponseParamList(d.responses,D)};return ke(()=>{f()}),{docInfoShow:S,activePage:w,changePage:()=>{},isLoadSuccess:v,requestParamList:e,responseParamList:_}}},xa=h("div",{style:{padding:"20px 0",height:"100px"}},null,-1);function La(n,r,w,e,_,S){const v=u("DocContent"),P=u("a-tab-pane"),s=u("DocDebugger"),f=u("a-tabs"),b=u("a-spin");return e.isLoadSuccess?(y(),I(f,{key:0,activeKey:e.activePage,"onUpdate:activeKey":r[0]||(r[0]=p=>e.activePage=p),closable:"",onTabClick:e.changePage,style:{padding:"5px 10px 0"}},{default:t(()=>[a(P,{tab:"\u63A5\u53E3\u8BF4\u660E",key:"doc"},{default:t(()=>[a(v,{docInfoShow:e.docInfoShow,requestParamList:e.requestParamList,responseParamList:e.responseParamList},null,8,["docInfoShow","requestParamList","responseParamList"])]),_:1}),a(P,{tab:"\u5728\u7EBF\u8C03\u8BD5",key:"debug"},{default:t(()=>[a(s,{docInfoShow:e.docInfoShow,requestParamList:e.requestParamList,responseParamList:e.responseParamList},null,8,["docInfoShow","requestParamList","responseParamList"])]),_:1})]),_:1},8,["activeKey","onTabClick"])):(y(),I(b,{key:1,tip:"\u6587\u6863\u6570\u636E\u52A0\u8F7D\u4E2D..."},{default:t(()=>[xa]),_:1}))}var Ea=Z(Sa,[["render",La]]);export{Ea as default};