import{l as p}from"./logUtil.56e8d39f.js";import"./index.71e18790.js";import{_ as D}from"./main.14315fab.js";import{r as C,Y as E,o as r,c as w,w as f,a as S,m as c,t as g,J as H,e as M,b as y,F as _,k as x}from"./vendor.f364ea47.js";let v=["file","string","integer","long","double","object","number","boolean","ref"];var se={getRequestParamList(s,n){if(!s)return[];let l=1,o=[];for(let h=0;h<s.length;h++){let e=s[h],a=e.description||"",i=e.type,b=e.format,k=e["x-example"],u,m,t;i==="array"?this.isSchemaRef(e.items)?(u=this.getSchemaRef(e.items),m=this.getParamDefinitions(u,n,l,{},0)):e.schema?this.isSchemaRef(e.schema.items)?(u=this.getSchemaRef(e.schema.items),m=this.getParamDefinitions(u,n,l,{},0)):e.schema.type&&(u=e.schema.type):e.items&&e.items.type?u=e.items.type:p.logMessage("001",i,e):i?v.indexOf(i)>=0||p.logMessage("003",i,e):e.schema?this.isSchemaRef(e.schema)?(i=this.getSchemaRef(e.schema),m=this.getParamDefinitions(i,n,l,{},0)):e.schema.type?(i=e.schema.type,e.schema.additionalProperties?(t={},m=this.getAdditionalProperties(e.schema.additionalProperties,t,n,l,{},0),b=t.type):e.schema.items?this.isSchemaRef(e.schema.items)?(u=this.getSchemaRef(e.schema.items),m=this.getParamDefinitions(u,n,l,{},0)):e.schema.items.type?u=e.schema.items.type:p.log("0014",i,e):p.log("0011",i,e)):p.logMessage("0013",i,e):e.items&&e.items.type?(i=e.items.type,e.items.additionalProperties?(t={},m=this.getAdditionalProperties(e.items.additionalProperties,t,n,l,{},0),b=t.type):p.logMessage("0012",i,e)):p.logMessage("002",i,e),k&&(a=a?a+"\uFF0C":"",a+="\u4F8B\uFF1A"+k),e.enum&&e.enum.length>0&&(a=a||"\u679A\u4E3E\u7C7B\u578B",a+="\uFF0C\u53EF\u9009\u503C\uFF1A"+e.enum.join("\u3001")),o.push({type:i,key:l,in:e.in,name:e.name,subType:u,required:e.required?"\u662F":"\u5426",format:b,enum:e.enum,example:k,collectionFormat:e.collectionFormat,description:a,additional:t,children:m}),l++}return o},getResponseParamList(s,n){let l=[],o=1;return Object.keys(s).forEach(h=>{let e=s[h],a,i;this.isSchemaRef(e.schema)&&(a=this.getSchemaRef(e.schema),i=this.getParamDefinitions(a,n,o,{},0)),l.push({code:h,type:a,key:o,desc:e.description,schemas:i}),o++}),l},isSchemaRef(s){return!!(s&&s.$ref)},getSchemaRef(s){return s.$ref&&s.$ref.indexOf("#/definitions/")===0?s.$ref.replace("#/definitions/",""):(p.logMessage("9467","",s),"")},getParamDefinitions(s,n,l,o,h){let e=n[s];if(h>=10||!e||(o[s]=(o[s]||0)+1,o[s]>2))return;let a=[],i=e.type,b=e.properties,k=1;if(i==="object"&&b){let u={};Object.keys(b).forEach(m=>{let t=b[m],d=t.type,P=t.format,I=t.description||"",j=t.example||t["x-example"],L,R,A,T=l+"_"+k,q;Object.keys(u).forEach(O=>{o[O]=void 0}),d==="array"?this.isSchemaRef(t.items)?(L=this.getSchemaRef(t.items),q=this.getParamDefinitions(L,n,T,o,h+1)):t.items&&t.items.type?L=t.items.type:p.logMessage("004",d,t):d==="object"?t.additionalProperties?(R={},q=this.getAdditionalProperties(t.additionalProperties,R,n,T,o,h+1),P=R.type):p.log("0041",d,t):d?v.indexOf(d)>=0||p.logMessage("006",d,t):this.isSchemaRef(t)?(d=this.getSchemaRef(t),q=this.getParamDefinitions(d,n,T,o,h+1)):p.logMessage("005",d,t),j&&(I=I?I+"\uFF0C":"",I+="\u4F8B\uFF1A"+j),t.items&&t.items.enum&&t.items.enum.length>0&&(A=t.items.enum,I=I||"\u679A\u4E3E\u7C7B\u578B",I+="\uFF0C\u53EF\u9009\u503C\uFF1A"+t.items.enum.join("\u3001")),a.push({type:d,name:m,key:T,subType:L,format:P,description:I,enum:A,additional:R,example:j,children:q}),k++,u[d]=1})}return a.length>0?a:void 0},getAdditionalProperties(s,n,l,o,h,e){if(this.isSchemaRef(s))return n.type=this.getSchemaRef(s),n.children=this.getParamDefinitions(n.type,l,o,h,e+1),n.additional;if(s.additionalProperties)return n.type=s.type,n.additional={},this.getAdditionalProperties(s.additionalProperties,n.additional,l,o,h,e+1);if(s.type==="array")if(n.type=s.type,this.isSchemaRef(s.items)){let a=this.getSchemaRef(s.items),i=this.getParamDefinitions(a,l,o,h,e+1);return n.additional={type:a,children:i},i}else p.logMessage("007","",s);else n.type=s.type,v.indexOf(n.type)>=0||p.logMessage("008","",s)}};const N={props:{docInfoShow:{type:Object,required:!0},requestParamList:{type:Array,required:!0},responseParamList:{type:Array,required:!0}},setup(){return{requestParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:200},{title:"\u7C7B\u578B",dataIndex:"type",width:150},{title:"\u53C2\u6570\u4F4D\u7F6E",dataIndex:"in",width:100},{title:"\u5FC5\u586B",dataIndex:"required",width:60},{title:"\u8BF4\u660E",dataIndex:"description"}],responseCodeListColumns:[{title:"\u72B6\u6001\u7801",dataIndex:"code",width:100},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"desc"}],responseParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:250},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"description"}]}}},B=["innerHTML"],F=c("header"),V=c("body"),z=c("query"),K=c("formData"),U=c("-"),J={key:0,style:{color:"#f00"}},Y=c("\u5426"),G=c("-"),Q=["innerHTML"],W={key:1,style:{"text-align":"center",padding:"10px 0"}};function X(s,n,l,o,h,e){const a=C("a-form-item"),i=C("a-tag"),b=C("a-table"),k=C("a-form"),u=E("highlight");return r(),w(k,{"label-col":{span:4},"wrapper-col":{span:20}},{default:f(()=>[S(a,{label:"\u63A5\u53E3\u5730\u5740"},{default:f(()=>[c(g(l.docInfoShow.url),1)]),_:1}),S(a,{label:"\u8BF4\u660E"},{default:f(()=>[H(M("div",{class:"markdown-body",innerHTML:l.docInfoShow.description},null,8,B),[[u]])]),_:1}),S(a,{label:"\u8BF7\u6C42\u65B9\u5F0F"},{default:f(()=>[c(g(l.docInfoShow.method),1)]),_:1}),S(a,{label:"\u8BF7\u6C42\u6570\u636E\u7C7B\u578B"},{default:f(()=>[c(g(l.docInfoShow.consumes),1)]),_:1}),S(a,{label:"\u54CD\u5E94\u6570\u636E\u7C7B\u578B"},{default:f(()=>[c(g(l.docInfoShow.produces),1)]),_:1}),S(a,{label:"\u8BF7\u6C42\u53C2\u6570"},{default:f(()=>[S(b,{dataSource:l.requestParamList,columns:o.requestParamListColumns,size:"small",pagination:!1,defaultExpandAllRows:""},{bodyCell:f(({column:m,text:t,record:d})=>[m.dataIndex==="type"?(r(),y(_,{key:0},[c(g(t)+" ",1),d.subType?(r(),y(_,{key:0},[c("["+g(d.subType)+"]",1)],64)):x("",!0),d.format?(r(),y(_,{key:1},[c("("+g(d.format)+")",1)],64)):x("",!0)],64)):x("",!0),m.dataIndex==="in"?(r(),y(_,{key:1},[t==="header"?(r(),w(i,{key:0,color:"pink"},{default:f(()=>[F]),_:1})):t==="body"?(r(),w(i,{key:1,color:"red"},{default:f(()=>[V]),_:1})):t==="query"?(r(),w(i,{key:2,color:"orange"},{default:f(()=>[z]),_:1})):t==="formData"?(r(),w(i,{key:3,color:"green"},{default:f(()=>[K]),_:1})):t?(r(),w(i,{key:5,color:"purple"},{default:f(()=>[c(g(t),1)]),_:2},1024)):(r(),y(_,{key:4},[U],64))],64)):x("",!0),m.dataIndex==="required"?(r(),y(_,{key:2},[t==="\u662F"?(r(),y("span",J,"\u662F")):t==="\u5426"?(r(),y(_,{key:1},[Y],64)):(r(),y(_,{key:2},[G],64))],64)):x("",!0),m.dataIndex==="description"?(r(),y(_,{key:3},[c(g(t),1)],64)):x("",!0)]),_:1},8,["dataSource","columns"])]),_:1}),S(a,{label:"\u8FD4\u56DE\u7ED3\u679C"},{default:f(()=>[S(b,{dataSource:l.responseParamList,columns:o.responseCodeListColumns,size:"small",pagination:!1},{bodyCell:f(({column:m,text:t,record:d})=>[m.dataIndex==="desc"?(r(),y("div",{key:0,innerHTML:t},null,8,Q)):x("",!0)]),expandedRowRender:f(({record:m})=>[m.schemas?(r(),w(b,{key:0,dataSource:m.schemas,columns:o.responseParamListColumns,size:"small",pagination:!1},{bodyCell:f(({column:t,text:d,record:P})=>[t.dataIndex==="type"?(r(),y(_,{key:0},[c(g(d)+" ",1),P.subType?(r(),y(_,{key:0},[c("["+g(P.subType)+"]",1)],64)):x("",!0),P.format?(r(),y(_,{key:1},[c("("+g(P.format)+")",1)],64)):x("",!0)],64)):x("",!0)]),_:2},1032,["dataSource","columns"])):(r(),y("div",W,"\u65E0\u53C2\u6570\u8BF4\u660E"))]),_:1},8,["dataSource","columns"])]),_:1})]),_:1})}var ie=D(N,[["render",X]]);export{ie as D,se as o};
