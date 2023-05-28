import{r as b,T as be,o as u,c as R,w as r,a as l,m as d,t as L,H as U,e as O,b as w,F as q,k as D,X as ue,Y as Se,y as m,E as we,Z as xe,_ as ke,u as me,J as F,d as Le,B as ce,v as Oe,G as Ie}from"./vendor.d3f949c4.js";import{l as N}from"./logUtil.5b305c4e.js";import{m as Te}from"./index.ea6b273d.js";import{_ as X}from"./main.d3c4ff0f.js";import{P as fe,a as ye,b as Re,u as Ce,x as De}from"./unitConvert.3de44ccf.js";import{g as qe,z as Ne}from"./custom.914a01ae.js";let te=["file","string","integer","long","double","object","number","boolean","ref"];var he={getRequestParamList(t,n){if(!t)return[];let c=1,e=[];for(let h=0;h<t.length;h++){let o=t[h],s=o.description||"",i=o.type,f=o.format,g=o["x-example"],p,y,a;i==="array"?this.isSchemaRef(o.items)?(p=this.getSchemaRef(o.items),y=this.getParamDefinitions(p,n,c,{},0)):o.schema?this.isSchemaRef(o.schema.items)?(p=this.getSchemaRef(o.schema.items),y=this.getParamDefinitions(p,n,c,{},0)):o.schema.type&&(p=o.schema.type):o.items&&o.items.type?p=o.items.type:N.logMessage("001",i,o):i?te.indexOf(i)>=0||N.logMessage("003",i,o):o.schema?this.isSchemaRef(o.schema)?(i=this.getSchemaRef(o.schema),y=this.getParamDefinitions(i,n,c,{},0)):o.schema.type?(i=o.schema.type,o.schema.additionalProperties?(a={},y=this.getAdditionalProperties(o.schema.additionalProperties,a,n,c,{},0),f=a.type):o.schema.items?this.isSchemaRef(o.schema.items)?(p=this.getSchemaRef(o.schema.items),y=this.getParamDefinitions(p,n,c,{},0)):o.schema.items.type?p=o.schema.items.type:N.log("0014",i,o):N.log("0011",i,o)):N.logMessage("0013",i,o):o.items&&o.items.type?(i=o.items.type,o.items.additionalProperties?(a={},y=this.getAdditionalProperties(o.items.additionalProperties,a,n,c,{},0),f=a.type):N.logMessage("0012",i,o)):N.logMessage("002",i,o),g&&(s=s?s+"\uFF0C":"",s+="\u4F8B\uFF1A"+g),o.enum&&o.enum.length>0&&(s=s||"\u679A\u4E3E\u7C7B\u578B",s+="\uFF0C\u53EF\u9009\u503C\uFF1A"+o.enum.join("\u3001")),e.push({type:i,key:c,in:o.in,name:o.name,subType:p,required:o.required?"\u662F":"\u5426",format:f,enum:o.enum,example:g,collectionFormat:o.collectionFormat,description:s,additional:a,children:y}),c++}return e},getResponseParamList(t,n){let c=[],e=1;return Object.keys(t).forEach(h=>{let o=t[h],s,i;this.isSchemaRef(o.schema)&&(s=this.getSchemaRef(o.schema),i=this.getParamDefinitions(s,n,e,{},0)),c.push({code:h,type:s,key:e,desc:o.description,schemas:i}),e++}),c},isSchemaRef(t){return!!(t&&t.$ref)},getSchemaRef(t){return t.$ref&&t.$ref.indexOf("#/definitions/")===0?t.$ref.replace("#/definitions/",""):(N.logMessage("9467","",t),"")},getParamDefinitions(t,n,c,e,h){let o=n[t];if(h>=10||!o||(e[t]=(e[t]||0)+1,e[t]>2))return;let s=[],i=o.type,f=o.properties,g=1;if(i==="object"&&f){let p={};Object.keys(f).forEach(y=>{let a=f[y],_=a.type,x=a.format,v=a.description||"",C=a.example||a["x-example"],I,k,V,E=c+"_"+g,K;Object.keys(p).forEach(j=>{e[j]=void 0}),_==="array"?this.isSchemaRef(a.items)?(I=this.getSchemaRef(a.items),K=this.getParamDefinitions(I,n,E,e,h+1)):a.items&&a.items.type?I=a.items.type:N.logMessage("004",_,a):_==="object"?a.additionalProperties?(k={},K=this.getAdditionalProperties(a.additionalProperties,k,n,E,e,h+1),x=k.type):N.log("0041",_,a):_?te.indexOf(_)>=0||N.logMessage("006",_,a):this.isSchemaRef(a)?(_=this.getSchemaRef(a),K=this.getParamDefinitions(_,n,E,e,h+1)):N.logMessage("005",_,a),C&&(v=v?v+"\uFF0C":"",v+="\u4F8B\uFF1A"+C),a.items&&a.items.enum&&a.items.enum.length>0&&(V=a.items.enum,v=v||"\u679A\u4E3E\u7C7B\u578B",v+="\uFF0C\u53EF\u9009\u503C\uFF1A"+a.items.enum.join("\u3001")),s.push({type:_,name:y,key:E,subType:I,format:x,description:v,enum:V,additional:k,example:C,children:K}),g++,p[_]=1})}return s.length>0?s:void 0},getAdditionalProperties(t,n,c,e,h,o){if(this.isSchemaRef(t))return n.type=this.getSchemaRef(t),n.children=this.getParamDefinitions(n.type,c,e,h,o+1),n.additional;if(t.additionalProperties)return n.type=t.type,n.additional={},this.getAdditionalProperties(t.additionalProperties,n.additional,c,e,h,o+1);if(t.type==="array")if(n.type=t.type,this.isSchemaRef(t.items)){let s=this.getSchemaRef(t.items),i=this.getParamDefinitions(s,c,e,h,o+1);return n.additional={type:s,children:i},i}else N.logMessage("007","",t);else n.type=t.type,te.indexOf(n.type)>=0||N.logMessage("008","",t)}};const je={props:{docInfoShow:{type:Object,required:!0},requestParamList:{type:Array,required:!0},responseParamList:{type:Array,required:!0}},setup(){return{requestParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:200},{title:"\u7C7B\u578B",dataIndex:"type",width:150},{title:"\u53C2\u6570\u4F4D\u7F6E",dataIndex:"in",width:100},{title:"\u5FC5\u586B",dataIndex:"required",width:60},{title:"\u8BF4\u660E",dataIndex:"description"}],responseCodeListColumns:[{title:"\u72B6\u6001\u7801",dataIndex:"code",width:100},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"desc"}],responseParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:250},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"description"}]}}},Je=["innerHTML"],Ee=d("header"),Ue=d("body"),Ae=d("query"),Fe=d("formData"),Ke=d("-"),Ve={key:0,style:{color:"#f00"}},Me=d("\u5426"),He=d("-"),Be=["innerHTML"],ze={key:1,style:{"text-align":"center",padding:"10px 0"}};function Qe(t,n,c,e,h,o){const s=b("a-form-item"),i=b("a-tag"),f=b("a-table"),g=b("a-form"),p=be("highlight");return u(),R(g,{"label-col":{span:4},"wrapper-col":{span:20}},{default:r(()=>[l(s,{label:"\u63A5\u53E3\u5730\u5740"},{default:r(()=>[d(L(c.docInfoShow.url),1)]),_:1}),l(s,{label:"\u8BF4\u660E"},{default:r(()=>[U(O("div",{class:"markdown-body",innerHTML:c.docInfoShow.description},null,8,Je),[[p]])]),_:1}),l(s,{label:"\u8BF7\u6C42\u65B9\u5F0F"},{default:r(()=>[d(L(c.docInfoShow.method),1)]),_:1}),l(s,{label:"\u8BF7\u6C42\u6570\u636E\u7C7B\u578B"},{default:r(()=>[d(L(c.docInfoShow.consumes),1)]),_:1}),l(s,{label:"\u54CD\u5E94\u6570\u636E\u7C7B\u578B"},{default:r(()=>[d(L(c.docInfoShow.produces),1)]),_:1}),l(s,{label:"\u8BF7\u6C42\u53C2\u6570"},{default:r(()=>[l(f,{dataSource:c.requestParamList,columns:e.requestParamListColumns,size:"small",pagination:!1,defaultExpandAllRows:""},{bodyCell:r(({column:y,text:a,record:_})=>[y.dataIndex==="type"?(u(),w(q,{key:0},[d(L(a)+" ",1),_.subType?(u(),w(q,{key:0},[d("["+L(_.subType)+"]",1)],64)):D("",!0),_.format?(u(),w(q,{key:1},[d("("+L(_.format)+")",1)],64)):D("",!0)],64)):D("",!0),y.dataIndex==="in"?(u(),w(q,{key:1},[a==="header"?(u(),R(i,{key:0,color:"pink"},{default:r(()=>[Ee]),_:1})):a==="body"?(u(),R(i,{key:1,color:"red"},{default:r(()=>[Ue]),_:1})):a==="query"?(u(),R(i,{key:2,color:"orange"},{default:r(()=>[Ae]),_:1})):a==="formData"?(u(),R(i,{key:3,color:"green"},{default:r(()=>[Fe]),_:1})):a?(u(),R(i,{key:5,color:"purple"},{default:r(()=>[d(L(a),1)]),_:2},1024)):(u(),w(q,{key:4},[Ke],64))],64)):D("",!0),y.dataIndex==="required"?(u(),w(q,{key:2},[a==="\u662F"?(u(),w("span",Ve,"\u662F")):a==="\u5426"?(u(),w(q,{key:1},[Me],64)):(u(),w(q,{key:2},[He],64))],64)):D("",!0),y.dataIndex==="description"?(u(),w(q,{key:3},[d(L(a),1)],64)):D("",!0)]),_:1},8,["dataSource","columns"])]),_:1}),l(s,{label:"\u8FD4\u56DE\u7ED3\u679C"},{default:r(()=>[l(f,{dataSource:c.responseParamList,columns:e.responseCodeListColumns,size:"small",pagination:!1},{bodyCell:r(({column:y,text:a,record:_})=>[y.dataIndex==="desc"?(u(),w("div",{key:0,innerHTML:a},null,8,Be)):D("",!0)]),expandedRowRender:r(({record:y})=>[y.schemas?(u(),R(f,{key:0,dataSource:y.schemas,columns:e.responseParamListColumns,size:"small",pagination:!1},{bodyCell:r(({column:a,text:_,record:x})=>[a.dataIndex==="type"?(u(),w(q,{key:0},[d(L(_)+" ",1),x.subType?(u(),w(q,{key:0},[d("["+L(x.subType)+"]",1)],64)):D("",!0),x.format?(u(),w(q,{key:1},[d("("+L(x.format)+")",1)],64)):D("",!0)],64)):D("",!0)]),_:2},1032,["dataSource","columns"])):(u(),w("div",ze,"\u65E0\u53C2\u6570\u8BF4\u660E"))]),_:1},8,["dataSource","columns"])]),_:1})]),_:1})}var Xe=X(je,[["render",Qe]]);const Ge={props:{result:{type:Object,required:!0},loading:{type:Boolean,required:!0}},components:{CloseOutlined:ue,ParamTable:fe,ParamBody:ye,aceEditor:Re},setup(t){const{result:n}=Se(t);let c=m("body"),e=m("format"),h=m("json"),o=m(""),s=m([]),i=m([]),f=m(""),g=m(""),p=m({}),y=m();const a=()=>{e.value==="preview"&&setTimeout(()=>{y.value&&y.value.contentDocument.write(f.value)},0)},_=()=>{if(f.value="",g.value="",t.result.data){if(p.value=t.result.data,t.result.data.headers){s.value=t.result.data.headers;let v=s.value.find(C=>C.name==="Content-Type");v&&v.value&&(v.value.indexOf("text/html")>=0?h.value="html":v.value.indexOf("text/plain")>=0?h.value="text":v.value.indexOf("application/json")>=0?h.value="json":v.value.indexOf("application/xml")>=0||v.value.indexOf("text/xml")>=0?h.value="xml":v.value.indexOf("application/javascript")>=0&&(h.value="javascript"),o.value=h.value)}if(t.result.data.cookies&&(i.value=t.result.data.cookies),t.result.data.data||t.result.data.status===200){g.value=t.result.data.data,f.value=t.result.data.data;try{h.value==="xml"?g.value=De(f.value):h.value==="json"?g.value=JSON.stringify(JSON.parse(f.value),null,4):h.value==="javascript"&&(g.value=JSON.stringify(f.value,null,4))}catch{g.value=t.result.data.data}}else{let v=`
// \u8BF7\u6C42\u5931\u8D25\uFF0C\u4EE5\u4E0B\u4E3A\u5C01\u88C5\u7684\u8FD4\u56DE\u503C\u5BF9\u8C61\uFF0C\u4EC5\u4F9B\u53C2\u8003

`;f.value=v+JSON.stringify(t.result.data),g.value=v+JSON.stringify(t.result.data,null,4)}a()}};return _(),we(n,()=>_()),{activePage:c,bodyShowType:e,bodyShowTypeChange:a,unitConvert:Ce,bodyShowFormatType:h,bodyShowFormatPreview:o,previewHtmlRef:y,resultData:p,resultHeaders:s,resultCookies:i,resultHeadersColumns:[{title:"KEY",dataIndex:"name"},{title:"VALUE",dataIndex:"value"}],resultCookiesColumns:[{title:"KEY",dataIndex:"name"},{title:"VALUE",dataIndex:"value"}],resultDataInit:v=>{v.setFontSize(16)},resultDataContentOrigin:f,resultDataContentFormat:g,resultDataConfig:{wrap:!0,readOnly:!0,autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,minLines:30,maxLines:30}}}},Ye={key:0,style:{"margin-bottom":"30px"}},Ze={key:0,style:{"margin-bottom":"30px"}},We={style:{"margin-bottom":"10px"}},$e=d("\u683C\u5F0F\u5316"),ea=d("\u539F\u59CB\u503C"),aa=d("\u9884\u89C8"),ta=d("JSON"),oa=d("HTML"),na=d("XML"),ra=d("JavaScript"),la=d("TEXT"),sa={key:2},ia={key:0,ref:"previewHtmlRef",width:"100%",height:"570px",style:{border:"0"}},da={class:"status-info-box"},ua=d(" \u72B6\u6001\u7801\uFF1A"),ma=d(" \u8017\u65F6\uFF1A"),ca=d(" \u5927\u5C0F\uFF1A"),fa={key:1},ya={style:{color:"#f00"}},ha={class:"status-info-box"},_a=d(" \u8017\u65F6\uFF1A"),pa={key:1,style:{"margin-top":"20px"}},ga={key:2,style:{"margin-top":"20px",color:"#aaa"}};function va(t,n,c,e,h,o){const s=b("a-radio-button"),i=b("a-radio-group"),f=b("a-select-option"),g=b("a-select"),p=b("ace-editor"),y=b("a-tab-pane"),a=b("a-table"),_=b("a-divider"),x=b("a-tabs"),v=b("a-skeleton"),C=b("a-spin"),I=b("a-empty");return c.result.data?(u(),w("div",Ye,[c.result.data.data||c.result.data.status===200?(u(),w("div",Ze,[l(x,{activeKey:e.activePage,"onUpdate:activeKey":n[4]||(n[4]=k=>e.activePage=k),onTabClick:n[5]||(n[5]=()=>{}),style:{padding:"5px 10px 0"}},{rightExtra:r(()=>[O("span",da,[ua,O("span",null,L(e.resultData.status||"200"),1),l(_,{type:"vertical"}),ma,O("span",null,L(e.unitConvert.formatSeconds(e.resultData.useTime||0)),1),l(_,{type:"vertical"}),ca,O("span",null,L(e.unitConvert.formatFileSize(e.resultData.contentLength||0)),1)])]),default:r(()=>[l(y,{tab:"Body",key:"body",forceRender:""},{default:r(()=>[O("div",We,[l(i,{value:e.bodyShowType,"onUpdate:value":n[0]||(n[0]=k=>e.bodyShowType=k),onChange:e.bodyShowTypeChange,size:"small"},{default:r(()=>[l(s,{value:"format"},{default:r(()=>[$e]),_:1}),l(s,{value:"row"},{default:r(()=>[ea]),_:1}),l(s,{value:"preview"},{default:r(()=>[aa]),_:1})]),_:1},8,["value","onChange"]),e.bodyShowType==="format"?(u(),R(g,{key:0,value:e.bodyShowFormatType,"onUpdate:value":n[1]||(n[1]=k=>e.bodyShowFormatType=k),size:"small",style:{"margin-left":"10px",width:"100px"}},{default:r(()=>[l(f,{value:"json"},{default:r(()=>[ta]),_:1}),l(f,{value:"html"},{default:r(()=>[oa]),_:1}),l(f,{value:"xml"},{default:r(()=>[na]),_:1}),l(f,{value:"javascript"},{default:r(()=>[ra]),_:1}),l(f,{value:"text"},{default:r(()=>[la]),_:1})]),_:1},8,["value"])):D("",!0)]),e.bodyShowType==="format"?(u(),R(p,{key:0,value:e.resultDataContentFormat,"onUpdate:value":n[2]||(n[2]=k=>e.resultDataContentFormat=k),onInit:e.resultDataInit,lang:e.bodyShowFormatType,theme:"monokai",width:"100%",height:"100",options:e.resultDataConfig},null,8,["value","onInit","lang","options"])):e.bodyShowType==="row"?(u(),R(p,{key:1,value:e.resultDataContentOrigin,"onUpdate:value":n[3]||(n[3]=k=>e.resultDataContentOrigin=k),onInit:e.resultDataInit,lang:"text",theme:"chrome",width:"100%",height:"100",options:e.resultDataConfig},null,8,["value","onInit","options"])):e.bodyShowType==="preview"?(u(),w("div",sa,[e.bodyShowFormatPreview==="html"?(u(),w("iframe",ia,null,512)):(u(),w(q,{key:1},[d(L(e.resultDataContentOrigin),1)],64))])):D("",!0)]),_:1}),l(y,{tab:"Headers",key:"headers",forceRender:""},{default:r(()=>[l(a,{dataSource:e.resultHeaders,columns:e.resultHeadersColumns,size:"small",pagination:!1,scroll:{y:"300px"}},null,8,["dataSource","columns"])]),_:1}),l(y,{tab:"Cookies",key:"cookies",forceRender:""},{default:r(()=>[l(a,{dataSource:e.resultCookies,columns:e.resultCookiesColumns,size:"small",pagination:!1,scroll:{y:"300px"}},null,8,["dataSource","columns"])]),_:1})]),_:1},8,["activeKey"])])):(u(),w("div",fa,[l(x,{style:{padding:"5px 10px 0"}},{rightExtra:r(()=>[O("span",ha,[_a,O("span",null,L(e.unitConvert.formatSeconds(e.resultData.useTime||0)),1)])]),default:r(()=>[l(y,{tab:"\u8BF7\u6C42\u5931\u8D25",key:"body",forceRender:""},{default:r(()=>[O("div",ya,L(c.result.data.errorMsg),1)]),_:1})]),_:1})]))])):c.loading?(u(),w("div",pa,[l(C,{tip:"\u8BF7\u6C42\u6267\u884C\u4E2D..."},{default:r(()=>[l(v)]),_:1})])):(u(),w("div",ga,[l(I,{description:"\u70B9\u51FB \u2018\u53D1\u9001\u8BF7\u6C42\u2019 \u83B7\u53D6\u8BF7\u6C42\u7ED3\u679C"})]))}var Pa=X(Ge,[["render",va]]);const ba={props:{docInfoShow:{type:Object,required:!0},requestParamList:{type:Array,required:!0},responseParamList:{type:Array,required:!0}},components:{VerticalAlignTopOutlined:xe,VerticalAlignBottomOutlined:ke,CloseOutlined:ue,ParamTable:fe,ParamBody:ye,DocDebuggerResult:Pa},setup(t){const n=me();let c=n.state.apiDoc||{},e=n.state.globalParam||[],h=n.state.swaggerDoc||{},o=c.rewriteDomain||h.host,s=m(o+t.docInfoShow.url),i=m("urlParam");const f=m();let g=t.requestParamList.filter(S=>S.in==="query"||S.in==="path"),p=m([]);const y=m();let a=e.filter(S=>S.paramType===2),_=t.requestParamList.filter(S=>S.in==="header"),x=1;a.forEach(S=>{_.push({name:S.paramKey,value:S.paramValue,type:"string",key:"g"+x++})});let v=m(JSON.parse(JSON.stringify(_)));const C=m();let I=e.filter(S=>S.paramType===3),k=t.requestParamList.filter(S=>S.in==="cookie");I.forEach(S=>{k.push({name:S.paramKey,value:S.paramValue,type:"string",key:"g"+x++})});let V=m(JSON.parse(JSON.stringify(k)));const E=m();let K=e.filter(S=>S.paramType===1),j=t.requestParamList.filter(S=>S.in==="formData");K.forEach(S=>{j.push({name:S.paramKey,value:S.paramValue,type:"string",key:"g"+x++})});let M=m([]);t.docInfoShow.method==="post"?j=j.concat(g):p=m(JSON.parse(JSON.stringify(g)));const G=m();let H=m([]),Y=m(),A=m("form"),Z=m("json"),oe=t.requestParamList.filter(S=>S.in==="body"),_e=m(JSON.parse(JSON.stringify(oe)));t.docInfoShow.consumes.indexOf("application/x-www-form-urlencoded")>=0?(A.value="formUrlEncode",H=m(JSON.parse(JSON.stringify(j)))):t.docInfoShow.consumes.indexOf("multipart/form-data")>=0?(A.value="form",M=m(JSON.parse(JSON.stringify(j)))):t.docInfoShow.consumes.indexOf("application/json")>=0?(A.value="row",Z.value="json",H=m(JSON.parse(JSON.stringify(j))),j.length>0&&(A.value="formUrlEncode")):t.docInfoShow.consumes.indexOf("application/xml")>=0||t.docInfoShow.consumes.indexOf("text/xml")>=0?(A.value="row",Z.value="xml",H=m(JSON.parse(JSON.stringify(j))),j.length>0&&(A.value="formUrlEncode")):M=m(JSON.parse(JSON.stringify(j))),M.value.length>0?i.value="urlParam":j.length>0||oe.length>0?i.value="bodyParam":_.length>0&&(i.value="headerParam");let W=m({}),B=m(!1),ne=m({url:qe()+"/doc-swagger/proxy/download",param:{}}),re=m(),le=t.docInfoShow.produces==="application/octet-stream";const pe=()=>{if(!s.value){ce.error("\u8BF7\u8F93\u5165\u8BF7\u6C42\u7684\u76EE\u6807URL\u5730\u5740");return}let S={};const J=new FormData;let ge=f.value.getSelectedRowKeys(),se=p.value.filter(P=>ge.indexOf(P.key)>=0&&P.name&&P.value).map(P=>(S[P.name]=P.value,P.name+"="+encodeURIComponent(P.value))).join("&"),ve=y.value.getSelectedRowKeys(),ie=v.value.filter(P=>ve.indexOf(P.key)>=0&&P.name&&P.value).map(P=>({code:P.name,value:P.value})),Pe=C.value.getSelectedRowKeys(),de=V.value.filter(P=>Pe.indexOf(P.key)>=0&&P.name&&P.value).map(P=>({code:P.name,value:P.value})),$=[];if(E.value){let P=E.value.getSelectedRowKeys();$=M.value.filter(T=>P.indexOf(T.key)>=0&&T.name&&T.value).map(T=>(S[T.name]=T.value,{code:T.name,value:T.value}))}let ee=[];if(G.value){let P=G.value.getSelectedRowKeys();ee=H.value.filter(T=>P.indexOf(T.key)>=0&&T.name&&T.value).map(T=>(S[T.name]=T.value,{code:T.name,value:T.value}))}let ae="";Y.value&&(ae=Y.value.getParam());let Q=se?s.value+"?"+se:s.value;Object.keys(S).forEach(P=>{Q=Q.replace("{"+P+"}",S[P])}),le?(ne.value.param={url:Q,host:o,method:t.docInfoShow.method,contentType:t.docInfoShow.consumes,headerParam:JSON.stringify(ie),cookieParam:JSON.stringify(de),formParam:JSON.stringify($),formEncodeParam:JSON.stringify(ee),bodyParam:ae},setTimeout(()=>re.value.submit(),0)):(J.append("url",Q),J.append("host",o),J.append("method",t.docInfoShow.method),J.append("contentType",t.docInfoShow.consumes),J.append("headerParam",JSON.stringify(ie)),J.append("cookieParam",JSON.stringify(de)),J.append("formParam",JSON.stringify($)),J.append("formEncodeParam",JSON.stringify(ee)),J.append("bodyParam",ae),B.value=!0,W.value={},Ne.requestUrl(J).then(P=>{W.value=P,B.value=!1}).catch(P=>{B.value=!1}))};let z=m(!0);return{docUrl:s,activePage:i,activePageChange:()=>{z.value=!0},requestLoading:B,sendRequest:pe,requestResult:W,consumesParamType:Z,downloadFormParam:ne,downloadFormRef:re,isDownloadRequest:le,urlParamRef:f,urlParamList:p,headerParamRef:y,headerParamList:v,cookieParamRef:C,cookieParamList:V,formParamRef:E,formParamList:M,formEncodeParamRef:G,formEncodeParamList:H,bodyParamRef:Y,bodyParamType:A,bodyRowParamList:_e,responseCodeListColumns:[{title:"\u72B6\u6001\u7801",dataIndex:"code",width:100},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"desc"}],responseParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:250},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"description"}],queryParamVisible:z,hideQueryParam:()=>{z.value=!1},showQueryParam:()=>{z.value=!0}}}},Sa={style:{"margin-bottom":"6px"}},wa=d("none"),xa=d("form-data"),ka=d("x-www-form-urlencoded"),La=d("row"),Oa=d("JSON"),Ia=d("HTML"),Ta=d("XML"),Ra=d("JavaScript"),Ca=d("TEXT"),Da=d("\u6536\u8D77\u53C2\u6570"),qa=d("\u5C55\u5F00\u53C2\u6570"),Na=["action"],ja=["name","value"];function Ja(t,n,c,e,h,o){const s=b("a-button"),i=b("a-input-search"),f=b("ParamTable"),g=b("a-tab-pane"),p=b("a-radio"),y=b("a-radio-group"),a=b("a-select-option"),_=b("a-select"),x=b("ParamBody"),v=b("a-tabs"),C=b("DocDebuggerResult");return u(),w("div",null,[l(i,{"addon-before":c.docInfoShow.method.toUpperCase(),value:e.docUrl,"onUpdate:value":n[0]||(n[0]=I=>e.docUrl=I),onSearch:e.sendRequest,placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807URL\u5730\u5740"},{enterButton:r(()=>[l(s,{type:"primary",loading:e.requestLoading},{default:r(()=>[d(L(e.isDownloadRequest?"\u4E0B\u8F7D\u6587\u4EF6":"\u53D1\u9001\u8BF7\u6C42"),1)]),_:1},8,["loading"])]),_:1},8,["addon-before","value","onSearch"]),l(v,{activeKey:e.activePage,"onUpdate:activeKey":n[3]||(n[3]=I=>e.activePage=I),closable:"",onTabClick:e.activePageChange,style:{padding:"5px 10px 0"}},{rightExtra:r(()=>[e.queryParamVisible?(u(),R(s,{key:0,onClick:e.hideQueryParam,type:"link"},{default:r(()=>[Da]),_:1},8,["onClick"])):(u(),R(s,{key:1,onClick:e.showQueryParam,type:"link"},{default:r(()=>[qa]),_:1},8,["onClick"]))]),default:r(()=>[l(g,{tab:"URL\u53C2\u6570",key:"urlParam",forceRender:""},{default:r(()=>[U(O("div",null,[l(f,{ref:"urlParamRef",paramList:e.urlParamList},null,8,["paramList"])],512),[[F,e.queryParamVisible]])]),_:1}),c.docInfoShow.method!=="get"?(u(),R(g,{tab:"Body\u53C2\u6570",key:"bodyParam",forceRender:""},{default:r(()=>[U(O("div",null,[O("div",Sa,[l(y,{value:e.bodyParamType,"onUpdate:value":n[1]||(n[1]=I=>e.bodyParamType=I)},{default:r(()=>[l(p,{value:"none"},{default:r(()=>[wa]),_:1}),l(p,{value:"form"},{default:r(()=>[xa]),_:1}),l(p,{value:"formUrlEncode"},{default:r(()=>[ka]),_:1}),l(p,{value:"row"},{default:r(()=>[La]),_:1})]),_:1},8,["value"]),e.bodyParamType==="row"?(u(),R(_,{key:0,value:e.consumesParamType,"onUpdate:value":n[2]||(n[2]=I=>e.consumesParamType=I),size:"small",style:{"margin-left":"10px","vertical-align":"top",width:"100px"}},{default:r(()=>[l(a,{value:"json"},{default:r(()=>[Oa]),_:1}),l(a,{value:"html"},{default:r(()=>[Ia]),_:1}),l(a,{value:"xml"},{default:r(()=>[Ta]),_:1}),l(a,{value:"javascript"},{default:r(()=>[Ra]),_:1}),l(a,{value:"text"},{default:r(()=>[Ca]),_:1})]),_:1},8,["value"])):D("",!0)]),U(O("div",null,[l(f,{ref:"formParamRef",paramList:e.formParamList,showType:""},null,8,["paramList"])],512),[[F,e.bodyParamType==="form"]]),U(O("div",null,[l(f,{ref:"formEncodeParamRef",paramList:e.formEncodeParamList},null,8,["paramList"])],512),[[F,e.bodyParamType==="formUrlEncode"]]),U(O("div",null,[l(x,{ref:"bodyParamRef",rowLang:e.consumesParamType,paramList:e.bodyRowParamList},null,8,["rowLang","paramList"])],512),[[F,e.bodyParamType==="row"]])],512),[[F,e.queryParamVisible]])]),_:1})):D("",!0),l(g,{tab:"Header\u53C2\u6570",key:"headerParam",forceRender:""},{default:r(()=>[U(O("div",null,[l(f,{ref:"headerParamRef",paramList:e.headerParamList},null,8,["paramList"])],512),[[F,e.queryParamVisible]])]),_:1}),l(g,{tab:"Cookie\u53C2\u6570",key:"cookieParam",forceRender:""},{default:r(()=>[U(O("div",null,[l(f,{ref:"cookieParamRef",paramList:e.cookieParamList},null,8,["paramList"])],512),[[F,e.queryParamVisible]])]),_:1})]),_:1},8,["activeKey","onTabClick"]),e.isDownloadRequest?D("",!0):(u(),R(C,{key:0,result:e.requestResult,loading:e.requestLoading},null,8,["result","loading"])),O("form",{method:"post",ref:"downloadFormRef",action:e.downloadFormParam.url,target:"_blank"},[(u(!0),w(q,null,Le(e.downloadFormParam.param,(I,k)=>(u(),w("input",{type:"hidden",name:k,value:I},null,8,ja))),256))],8,Na)])}var Ea=X(ba,[["render",Ja]]);const Ua={components:{DocContent:Xe,DocDebugger:Ea},setup(){const t=Oe(),n=me();let c=m("doc"),e=m([]),h=m([]),o=m({url:"",description:"",method:"",consumes:"",produces:""}),s=m(!1),i=0,f;const g=()=>{let y=t.query.path+"."+t.query.method;if(Object.keys(n.state.swaggerUrlMethodMap).length<=0){console.log("\u6587\u6863\u5C1A\u672A\u52A0\u8F7D\uFF0C\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210"),f||(f=setInterval(()=>{if(s.value||i++>50){clearInterval(f);return}Object.keys(n.state.swaggerUrlMethodMap).length>0&&(console.log("\u6587\u6863\u5185\u5BB9\u6539\u53D8\uFF0C\u91CD\u65B0\u52A0\u8F7D\u6587\u6863"),g())},1e3));return}let a=n.state.swaggerUrlMethodMap[y];if(!a){ce.error("\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863");return}s.value=!0,n.commit("addTableName",{key:t.fullPath,val:a.summary});let _="",x="";a.consumes&&a.consumes.length>0&&(_=a.consumes.join(" ")),a.produces&&a.produces.length>0&&(x=a.produces.join(" "));let v=Te.exports.markdownIt.render(a.description||a.summary||"");o.value={url:a.url,description:v,method:a.method||"",consumes:_,produces:x};let C=n.state.swaggerDefinitions;e.value=he.getRequestParamList(a.parameters,C),h.value=he.getResponseParamList(a.responses,C)};return Ie(()=>{g()}),{docInfoShow:o,activePage:c,changePage:()=>{},isLoadSuccess:s,requestParamList:e,responseParamList:h}}},Aa=O("div",{style:{padding:"20px 0",height:"100px"}},null,-1);function Fa(t,n,c,e,h,o){const s=b("DocContent"),i=b("a-tab-pane"),f=b("DocDebugger"),g=b("a-tabs"),p=b("a-spin");return e.isLoadSuccess?(u(),R(g,{key:0,activeKey:e.activePage,"onUpdate:activeKey":n[0]||(n[0]=y=>e.activePage=y),closable:"",onTabClick:e.changePage,style:{padding:"5px 10px 0"}},{default:r(()=>[l(i,{tab:"\u63A5\u53E3\u8BF4\u660E",key:"doc"},{default:r(()=>[l(s,{docInfoShow:e.docInfoShow,requestParamList:e.requestParamList,responseParamList:e.responseParamList},null,8,["docInfoShow","requestParamList","responseParamList"])]),_:1}),l(i,{tab:"\u5728\u7EBF\u8C03\u8BD5",key:"debug"},{default:r(()=>[l(f,{docInfoShow:e.docInfoShow,requestParamList:e.requestParamList,responseParamList:e.responseParamList},null,8,["docInfoShow","requestParamList","responseParamList"])]),_:1})]),_:1},8,["activeKey","onTabClick"])):(u(),R(p,{key:1,tip:"\u6587\u6863\u6570\u636E\u52A0\u8F7D\u4E2D..."},{default:r(()=>[Aa]),_:1}))}var Ya=X(Ua,[["render",Fa]]);export{Ya as default};
