import{u as p,y as g,H as f,G as x,o as i,b as l,e as _,F as w,d as L,aq as N,ar as C,t as H,ak as I,r as m,a as v,w as u,c as S,k as A}from"./vendor.2a860d56.js";import{m as T}from"./mavon-editor.824ddc3c.js";import"./index.c860d973.js";import{_ as y}from"./main.e2223e67.js";const D={props:{heading:{type:Array,default:[]}},setup(r){const s=p();let a=g("100px");f(()=>{window.onresize=()=>{n()},setTimeout(()=>{n()},100)}),x(s.getters.getLeftAsideWidth,()=>{n()});let e=g();const n=()=>{a.value=window.getComputedStyle(e.value,null).width};return{navigationRef:e,navigationWidth:a,headingItemClick:t=>{t.node.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}}},b={class:"navigation"},j={ref:"navigationRef",style:{display:"inline-block",width:"100%",height:"1px"}},q=["onClick"];function B(r,s,a,e,n,c){return i(),l("div",b,[_("div",j,null,512),_("div",{class:"navigation-heading",style:N({width:e.navigationWidth})},[(i(!0),l(w,null,L(a.heading,t=>(i(),l("div",{class:C("heading-item heading-"+t.level),onClick:o=>e.headingItemClick(t)},H(t.text),11,q))),256))],4)])}var M=y(D,[["render",B]]);const R={components:{Navigation:M},setup(){const r=p(),s=I(()=>r.state.apiDoc);let a=g();x(r.getters.getApiDoc,()=>{setTimeout(()=>{c(".share-instruction")},100)});const e=t=>T.exports.markdownIt.render(t||"");let n=g([]);const c=t=>{if(!document.querySelector(t))return[];let o=document.querySelector(t).querySelectorAll("h1,h2,h3,h4,h5,h6");if(o.length<=0)return[];let d=[];o.forEach(h=>{let k=h.innerHTML.replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/<\/?[^>]+(>|$)/g,"");d.push({node:h,level:parseInt(h.tagName.replace(/[h]/i,""),10),text:k})}),n.value=d};return f(()=>{}),{apiDoc:s,navigationRef:a,navigationList:n,markdownToHtml:e}}},V={key:0},W=["innerHTML"],$={key:1,style:{"text-align":"center"}};function z(r,s,a,e,n,c){const t=m("Navigation"),o=m("a-col"),d=m("a-row");return e.apiDoc.shareInstruction?(i(),l("div",V,[v(d,null,{default:u(()=>[e.navigationList.length>0?(i(),S(o,{key:0,xs:0,sm:4,md:4,lg:6,xl:6},{default:u(()=>[v(t,{ref:"navigationRef",heading:e.navigationList},null,8,["heading"])]),_:1})):A("",!0),v(o,{xs:24,sm:e.navigationList.length>0?20:24,md:e.navigationList.length>0?20:24,lg:e.navigationList.length>0?18:24,xl:e.navigationList.length>0?18:24},{default:u(()=>[_("div",{class:"markdown-body share-instruction",innerHTML:e.markdownToHtml(e.apiDoc.shareInstruction),style:{margin:"0 auto","max-width":"1000px"}},null,8,W)]),_:1},8,["sm","md","lg","xl"])]),_:1})])):(i(),l("div",$,"\u6B22\u8FCE\u8BBF\u95EE\u5F00\u653EAPI\u6587\u6863"))}var J=y(R,[["render",z]]);export{J as default};
