import"./mavon-editor.463f2be8.js";import"./index.c860d973.js";import{_ as K}from"./main.635ba9a5.js";import{al as M,ap as J,y as A,r as R,o as g,b as I,e as Z,a as T,w as _,c as L,k as D,F as B,m as b,t as q,d as X}from"./vendor.5cdfcd20.js";import{a as z}from"./index.dd427060.js";function Q(e,t={}){t.filter=t.filter||(()=>!0);function c(){return s()||k()||o()||p()}function r(){return m(/\s*/),s(!0)||o()||F()||d(!1)}function x(){const i=v(),n=[];let a,w=r();for(;w;){if(w.node.type==="Element"){if(a)throw new Error("Found multiple root nodes");a=w.node}w.excluded||n.push(w.node),w=r()}if(!a)throw new Error("Failed to parse XML");return{declaration:i?i.node:null,root:a,children:n}}function v(){return d(!0)}function d(i){const n=m(i?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!n)return;const a={name:n[1],type:"ProcessingInstruction",attributes:{}};for(;!(y()||h("?>"));){const w=f();if(!w)return a;a.attributes[w.name]=w.value}return m(/\?>/),{excluded:i?!1:t.filter(a)===!1,node:a}}function s(i){const n=m(/^<([\w-:.]+)\s*/);if(!n)return;const a={type:"Element",name:n[1],attributes:{},children:[]};for(;!(y()||h(">")||h("?>")||h("/>"));){const l=f();if(!l)return a;a.attributes[l.name]=l.value}const w=i?!1:t.filter(a)===!1;if(m(/^\s*\/>/))return a.children=null,{excluded:w,node:a};if(m(/\??>/),!w){let l=c();for(;l;)l.excluded||a.children.push(l.node),l=c()}return m(/^<\/[\w-:.]+>/),{excluded:w,node:a}}function F(){const i=m(/^<!DOCTYPE\s+[^>]*>/);if(i){const n={type:"DocumentType",content:i[0]};return{excluded:t.filter(n)===!1,node:n}}}function p(){if(e.startsWith("<![CDATA[")){const i=e.indexOf("]]>");if(i>-1){const n=i+3,a={type:"CDATA",content:e.substring(0,n)};return e=e.slice(n),{excluded:t.filter(a)===!1,node:a}}}}function o(){const i=m(/^<!--[\s\S]*?-->/);if(i){const n={type:"Comment",content:i[0]};return{excluded:t.filter(n)===!1,node:n}}}function k(){const i=m(/^([^<]+)/);if(i){const n={type:"Text",content:i[1]};return{excluded:t.filter(n)===!1,node:n}}}function f(){const i=m(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(!!i)return{name:i[1],value:u(i[2])}}function u(i){return i.replace(/^['"]|['"]$/g,"")}function m(i){const n=e.match(i);if(!!n)return e=e.slice(n[0].length),n}function y(){return e.length===0}function h(i){return e.indexOf(i)===0}return e=e.trim(),x()}var $=Q;function j(e){if(!e.options.indentation&&!e.options.lineSeparator)return;e.content+=e.options.lineSeparator;let t;for(t=0;t<e.level;t++)e.content+=e.options.indentation}function S(e,t){e.content+=t}function H(e,t,c){if(typeof e.content=="string")ee(e,t,c);else if(e.type==="Element")te(e,t,c);else if(e.type==="ProcessingInstruction")Y(e,t);else throw new Error("Unknown node type: "+e.type)}function ee(e,t,c){c||(e.content=e.content.trim()),e.content.length>0&&(!c&&t.content.length>0&&j(t),S(t,e.content))}function te(e,t,c){if(!c&&t.content.length>0&&j(t),S(t,"<"+e.name),W(t,e.attributes),e.children===null){const r=t.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";S(t,r)}else if(e.children.length===0)S(t,"></"+e.name+">");else{S(t,">"),t.level++;let r=e.attributes["xml:space"]==="preserve";if(!r&&t.options.collapseContent){let x=!1,v=!1,d=!1;e.children.forEach(function(s,F){s.type==="Text"?(s.content.includes(`
`)?(v=!0,s.content=s.content.trim()):(F===0||F===e.children.length-1)&&s.content.trim().length===0&&(s.content=""),s.content.length>0&&(x=!0)):d=!0}),x&&(!d||!v)&&(r=!0)}e.children.forEach(function(x){H(x,t,c||r,t.options)}),t.level--,!c&&!r&&j(t),S(t,"</"+e.name+">")}}function W(e,t){Object.keys(t).forEach(function(c){const r=t[c].replace(/"/g,"&quot;");S(e," "+c+'="'+r+'"')})}function Y(e,t){t.content.length>0&&j(t),S(t,"<?"+e.name),W(t,e.attributes),S(t,"?>")}function ne(e,t={}){t.indentation="indentation"in t?t.indentation:"    ",t.collapseContent=t.collapseContent===!0,t.lineSeparator="lineSeparator"in t?t.lineSeparator:`\r
`,t.whiteSpaceAtEndOfSelfclosingTag=!!t.whiteSpaceAtEndOfSelfclosingTag;const r=$(e,{filter:t.filter}),x={content:"",level:0,options:t};return r.declaration&&Y(r.declaration,x),r.children.forEach(function(v){H(v,x,!1)}),x.content.replace(/\r\n/g,`
`).replace(/\n/g,t.lineSeparator)}var Le=ne;const ae={props:{paramList:{type:Array,required:!0},showType:{type:Boolean}},components:{CloseOutlined:M,UploadOutlined:J},emits:["update:selected"],setup(e,{attrs:t,slots:c,emit:r,expose:x}){let v=A(e.paramList),d=1e4;(v.value.length<=0||!v.value[v.value.length-1].isLastRow)&&e.paramList.push({name:"",value:void 0,type:"integer",key:++d,isLastRow:!0});let s=A([]);v.value.forEach(l=>{l.value=l.value||l.example||void 0,(l.enum&&l.type==="array"||l.type==="file"||l.subType==="MultipartFile")&&(l.value=[]),s.value.push(l.key)});const F=(l,C)=>{s.value=l},p=l=>{l.isLastRow&&(l.isLastRow=!1,e.paramList.push({name:"",value:void 0,type:"integer",key:++d,isLastRow:!0}),s.value.push(d))},o=l=>{if(!l.isLastRow){let C=e.paramList.findIndex(P=>P===l);e.paramList.splice(C,1)}};let k=A([]);k.value.push({title:"\u53C2\u6570\u540D",dataIndex:"name",width:250}),e.showType,k.value.push({title:"\u53C2\u6570\u503C",dataIndex:"value"}),k.value.push({title:"",dataIndex:"action",width:40});const f=(l,C)=>(C.type!=="array"?C.value=[l]:C.value=[...C.value,l],!1),u=(l,C)=>{C.value=C.value.filter(P=>P!==l)},m=l=>l.type==="file"||l.subType==="file"||l.subType==="MultipartFile";let y=A(!1),h=A("");const i=()=>{y.value=!0,h.value=v.value.filter(l=>l.name||l.value).map(l=>m(l)?(l.name||"")+":":(l.name||"")+":"+(l.value||"")).join(`
`)},n=()=>{a(),y.value=!1},a=()=>{if(!y.value)return;let l={};e.paramList.forEach(E=>l[E.name]=E);let C=h.value.split(`
`),P=[];C.forEach(E=>{if(!E)return;let N=E.indexOf(":");if(N>=0){let U=E.substring(0,N),O=E.substring(N+1);if(U||O){let V=l[U]||{name:U,value:O,type:"integer",key:++d};V.value=O,P.push(V)}}else{let U=l[E]||{name:E,value:void 0,type:"integer",key:++d};P.push(U)}}),P.push({name:"",value:void 0,type:"integer",key:++d,isLastRow:!0}),s.value=[],e.paramList.splice(0,e.paramList.length),P.forEach(E=>{e.paramList.push(E),s.value.push(E.key)})};return{paramListRef:v,queryParamSelectedRowKeys:s,queryParamRowSelectionChange:F,queryParamChange:p,queryParamRemove:o,beforeUpload:f,handleRemove:u,paramListColumns:k,isFileType:m,getSelectedRowKeys:()=>(a(),s.value),multilineEdit:y,multilineEditValue:h,toMultilineEdit:i,toKeyValueEdit:n,convertKeyValueEdit:a}}},le={key:0},re={style:{"text-align":"right"}},ue=b("\u8868\u5355\u7F16\u8F91"),ie={key:1},oe=b("\u591A\u884C\u7F16\u8F91"),se=b("Integer"),ce=b("String"),fe=b("File"),pe=b("Integer"),de=b("String"),me=b("TRUE"),he=b("FALSE"),ve=b("\u9009\u62E9\u6587\u4EF6");function ye(e,t,c,r,x,v){const d=R("a-button"),s=R("a-textarea"),F=R("a-input"),p=R("a-select-option"),o=R("a-select"),k=R("a-tag"),f=R("upload-outlined"),u=R("a-upload"),m=R("CloseOutlined"),y=R("a-table");return r.multilineEdit?(g(),I("div",le,[Z("div",re,[T(d,{onClick:r.toKeyValueEdit,type:"link"},{default:_(()=>[ue]),_:1},8,["onClick"])]),T(s,{value:r.multilineEditValue,"onUpdate:value":t[0]||(t[0]=h=>r.multilineEditValue=h),"auto-size":{minRows:14,maxRows:14}},null,8,["value"])])):(g(),I("div",ie,[T(y,{"row-selection":{selectedRowKeys:r.queryParamSelectedRowKeys,onChange:r.queryParamRowSelectionChange},dataSource:r.paramListRef,columns:r.paramListColumns,size:"small",pagination:!1,scroll:{y:"300px"}},{headerCell:_(({column:h})=>[h.dataIndex==="action"?(g(),L(d,{key:0,onClick:r.toMultilineEdit,type:"link",style:{"margin-left":"-50px"}},{default:_(()=>[oe]),_:1},8,["onClick"])):D("",!0)]),bodyCell:_(({column:h,text:i,record:n})=>[h.dataIndex==="name"?(g(),L(F,{key:0,placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\u540D",value:n.name,"onUpdate:value":a=>n.name=a,onChange:a=>r.queryParamChange(n)},null,8,["value","onUpdate:value","onChange"])):D("",!0),h.dataIndex==="type"?(g(),I(B,{key:1},[n.key>=1e4?(g(),L(o,{key:0,value:n.type,"onUpdate:value":a=>n.type=a},{default:_(()=>[T(p,{value:"integer"},{default:_(()=>[se]),_:1}),T(p,{value:"string"},{default:_(()=>[ce]),_:1}),T(p,{value:"file"},{default:_(()=>[fe]),_:1})]),_:2},1032,["value","onUpdate:value"])):i==="integer"?(g(),L(k,{key:1,color:"pink"},{default:_(()=>[pe]),_:1})):i==="string"?(g(),L(k,{key:2,color:"red"},{default:_(()=>[de]),_:1})):(g(),L(k,{key:3,color:"green"},{default:_(()=>[b(q(i||"-"),1)]),_:2},1024))],64)):D("",!0),h.dataIndex==="value"?(g(),I(B,{key:2},[n.enum&&n.type==="array"?(g(),L(o,{key:0,value:n.value,"onUpdate:value":a=>n.value=a,mode:"multiple",placeholder:n.description||"\u8BF7\u9009\u62E9\u679A\u4E3E\u503C",style:{width:"100%"}},{default:_(()=>[(g(!0),I(B,null,X(n.enum,a=>(g(),L(p,{value:a},{default:_(()=>[b(q(a),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value","placeholder"])):n.enum?(g(),L(o,{key:1,value:n.value,"onUpdate:value":a=>n.value=a,placeholder:n.description||"\u8BF7\u9009\u62E9\u679A\u4E3E\u503C",style:{width:"100%"}},{default:_(()=>[(g(!0),I(B,null,X(n.enum,a=>(g(),L(p,{value:a},{default:_(()=>[b(q(a),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value","placeholder"])):n.type==="boolean"?(g(),L(o,{key:2,value:n.value,"onUpdate:value":a=>n.value=a,placeholder:n.description||"\u8BF7\u9009\u62E9\u53C2\u6570\u503C",style:{width:"100%"}},{default:_(()=>[T(p,{value:"true"},{default:_(()=>[me]),_:1}),T(p,{value:"false"},{default:_(()=>[he]),_:1})]),_:2},1032,["value","onUpdate:value","placeholder"])):r.isFileType(n.type)?(g(),L(u,{key:3,"file-list":n.value,name:"file",multiple:n.type==="array","before-upload":a=>r.beforeUpload(a,n),remove:a=>r.handleRemove(a,n)},{default:_(()=>[T(d,null,{default:_(()=>[T(f),ve]),_:1})]),_:2},1032,["file-list","multiple","before-upload","remove"])):(g(),L(F,{key:4,placeholder:n.description||"\u8BF7\u8F93\u5165\u53C2\u6570\u503C",value:n.value,"onUpdate:value":a=>n.value=a,onChange:a=>r.queryParamChange(n)},null,8,["placeholder","value","onUpdate:value","onChange"]))],64)):D("",!0),h.dataIndex==="action"?(g(),I(B,{key:3},[n.isLastRow?D("",!0):(g(),L(m,{key:0,onClick:a=>r.queryParamRemove(n),style:{cursor:"pointer"}},null,8,["onClick"]))],64)):D("",!0)]),_:1},8,["row-selection","dataSource","columns"])]))}var Pe=K(ae,[["render",ye]]),G={exports:{}};(function(e){var t="a-zA-Z_\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD",c="-.0-9\xB7\u0300-\u036F\u203F\u2040",r=new RegExp("^([^"+t+"])|^((x|X)(m|M)(l|L))|([^"+t+c+"])","g"),x=/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,v=function(p,o){var k=function(f,u,m,y,h){var i=o.indent!==void 0?o.indent:"	",n=o.prettyPrint?`
`+new Array(y).join(i):"";o.removeIllegalNameCharacters&&(f=f.replace(r,"_"));var a=[n,"<",f,m||""];return u&&u.length>0||o.html?(a.push(">"),a.push(u),h&&a.push(n),a.push("</"),a.push(f),a.push(">")):a.push("/>"),a.join("")};return function f(u,m,y){var h=typeof u;switch((Array.isArray?Array.isArray(u):u instanceof Array)?h="array":u instanceof Date&&(h="date"),h){case"array":var i=[];return u.map(function(N){i.push(f(N,1,y+1))}),o.prettyPrint&&i.push(`
`),i.join("");case"date":return u.toJSON?u.toJSON():u+"";case"object":if(m==1&&u.name){var n=[],a=[];if(u.attrs)if(typeof u.attrs!="object")a.push(" "),a.push(u.attrs);else for(var w in u.attrs){var l=u.attrs[w];a.push(" "),a.push(w),a.push('="'),a.push(o.escape?s(l):l),a.push('"')}if(typeof u.value!="undefined"){var C=""+u.value;n.push(o.escape&&!u.noescape?s(C):C)}else if(typeof u.text!="undefined"){var C=""+u.text;n.push(o.escape&&!u.noescape?s(C):C)}return u.children&&n.push(f(u.children,0,y+1)),k(u.name,n.join(""),a.join(""),y,!!u.children)}else{var P=[];for(var E in u)P.push(k(E,f(u[E],0,y+1),null,y+1));return o.prettyPrint&&P.length>0&&P.push(`
`),P.join("")}case"function":return u();default:return o.escape?s(u):""+u}}(p,0,0)},d=function(p){var o=['<?xml version="1.0" encoding="utf-8"'];return p&&o.push(' standalone="yes"'),o.push("?>"),o.join("")};e.exports=function(p,o){var k=typeof Buffer!="undefined"?Buffer:function(){};if(typeof p=="string"||p instanceof k)try{p=JSON.parse(p.toString())}catch{return!1}var f="",u="";o&&(typeof o=="object"?(o.xmlHeader&&(f=d(!!o.xmlHeader.standalone)),typeof o.docType!="undefined"&&(u="<!DOCTYPE "+o.docType+">")):f=d()),o=o||{};var m=[f,o.prettyPrint&&u?`
`:"",u,v(p,o)];return m.join("")},e.exports.json_to_xml=e.exports.obj_to_xml=e.exports,e.exports.escape=s;function s(p){return(""+p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(x,"")}e.exports.cdata=F;function F(p){return p?"<![CDATA["+p.replace(/]]>/g,"")+"]]>":"<![CDATA[]]>"}})(G);var ge=G.exports;const xe={props:{paramList:{type:Array,required:!0},rowLang:{type:String,required:!0}},components:{CloseOutlined:M,UploadOutlined:J,aceEditor:z},emits:[],setup(e,{attrs:t,slots:c,emit:r,expose:x}){let v=e.paramList,d="",s=f=>{if(f.children){let m={};return f.children.forEach(y=>m[y.name]=s(y)),f.type==="array"?[m]:m}let u=f.example||"";return f.type==="array"?u?[u]:[]:u};v.length===1?d=s(v[0]):v.length>1&&v.forEach(f=>{d[f.name]=s(f)});let F=A("");d&&(e.rowLang==="json"?F.value=JSON.stringify(d,null,4):e.rowLang==="xml"&&(F.value=ge(d,{html:!0,prettyPrint:!0,xmlHeader:!0})));const p=()=>F.value;let o=A();return{getParam:p,rowParamInit:f=>{o.value=f,o.value.setFontSize(16)},bodyRowParam:F,rowParamConfig:{wrap:!0,autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,minLines:18,maxLines:18}}}};function _e(e,t,c,r,x,v){const d=R("ace-editor");return g(),L(d,{value:r.bodyRowParam,"onUpdate:value":t[0]||(t[0]=s=>r.bodyRowParam=s),onInit:r.rowParamInit,lang:c.rowLang,theme:"monokai",width:"100%",height:"100",options:r.rowParamConfig},null,8,["value","onInit","lang","options"])}var be=K(xe,[["render",_e]]),Re={formatSeconds(e){let t=parseInt(e),c=t/1e3,r=Math.floor(c%60),x=t%1e3;return r>0?`${r}.${x} s`:`${x} ms`},formatFileSize(e){if(!e)return"0 B";let t="";e<.1*1024?t=e.toFixed(2)+" B":e<.1*1024*1024?t=(e/1024).toFixed(2)+" KB":e<.1*1024*1024*1024?t=(e/(1024*1024)).toFixed(2)+" MB":t=(e/(1024*1024*1024)).toFixed(2)+" GB";let c=t+"",r=c.indexOf(".");return c.substr(r+1,2)=="00"?c.substring(0,r)+c.substr(r+3,2):t}};export{Pe as P,be as a,Re as u,Le as x};
