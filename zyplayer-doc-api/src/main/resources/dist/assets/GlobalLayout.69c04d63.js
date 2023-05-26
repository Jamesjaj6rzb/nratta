var b=Object.defineProperty,D=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var V=(a,t,o)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,B=(a,t)=>{for(var o in t||(t={}))T.call(t,o)&&V(a,o,t[o]);if(x)for(var o of x(t))S.call(t,o)&&V(a,o,t[o]);return a},w=(a,t)=>D(a,I(t));import{z as zyplayerApi,g as getZyplayerApiBaseUrl}from"./custom.914a01ae.js";import{_ as _export_sfc}from"./main.c59b3205.js";import{r as resolveComponent,o as openBlock,c as createBlock,w as withCtx,e as createBaseVNode,t as toDisplayString,a as createVNode,k as createCommentVNode,m as createTextVNode,D as DownOutlined,U as UserOutlined,b as createElementBlock,n as withModifiers,F as Fragment,S as StarOutlined,p as SettingOutlined,C as CarryOutOutlined,q as FileTextOutlined,s as DashboardOutlined,I as InfoCircleOutlined,d as renderList,u as useStore,v as useRoute,x as useRouter,y as ref,B as message,E as watch,G as onMounted,H as withDirectives,J as vShow,L as nextTick,M as BarChartOutlined,N as MenuFoldOutlined,O as MenuUnfoldOutlined,P as pushScopeId,Q as popScopeId}from"./vendor.d3f949c4.js";const _sfc_main$6={data(){return{aboutDialogVisible:!1,upgradeInfo:{}}},mounted(){this.checkSystemUpgrade()},methods:{show(){this.aboutDialogVisible=!0},checkSystemUpgrade(){zyplayerApi.systemUpgradeInfo({}).then(a=>{a.data&&(this.upgradeInfo=a.data,this.upgradeInfo.upgradeContent&&(this.upgradeInfo.upgradeContent=this.upgradeInfo.upgradeContent.replaceAll("\uFF1B",`
`),console.log(`zyplayer-doc\u53D1\u73B0\u65B0\u7248\u672C\uFF1A
\u5347\u7EA7\u5730\u5740\uFF1A`+a.data.upgradeUrl+`
\u5F53\u524D\u7248\u672C\uFF1A`+a.data.nowVersion+`
\u6700\u65B0\u7248\u672C\uFF1A`+a.data.lastVersion+`
\u5347\u7EA7\u5185\u5BB9\uFF1A`+a.data.upgradeContent)))})}}},_hoisted_1$5={style:{}},_hoisted_2$5=createBaseVNode("div",{style:{"font-weight":"bold","font-size":"25px"}},"zyplayer-doc",-1),_hoisted_3$5={style:{"line-height":"30px",padding:"10px 0"}},_hoisted_4$2=createBaseVNode("div",null,[createTextVNode("\u7248\u6743\u6240\u6709 \xA9 2018-2021 "),createBaseVNode("a",{target:"_blank",href:"http://doc.zyplayer.com"},"doc.zyplayer.com")],-1),_hoisted_5$2={style:{"line-height":"30px"}},_hoisted_6$1=createBaseVNode("div",null,[createTextVNode("\u6587\u6863\uFF1A"),createBaseVNode("a",{target:"_blank",href:"http://doc.zyplayer.com/zyplayer-doc-manage/doc-wiki#/page/share/view?pageId=1&space=23f3f59a60824d21af9f7c3bbc9bc3cb"},"http://doc.zyplayer.com")],-1),_hoisted_7$1=createBaseVNode("div",null,[createTextVNode("\u4E3B\u9875\uFF1A"),createBaseVNode("a",{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"},"https://gitee.com/zyplayer/zyplayer-doc")],-1),_hoisted_8$1=createBaseVNode("div",null,[createTextVNode("\u53CD\u9988\uFF1A"),createBaseVNode("a",{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc/issues"},"https://gitee.com/zyplayer/zyplayer-doc/issues")],-1),_hoisted_9$1=createBaseVNode("div",null,"\u7279\u6027\u5173\u6CE8&\u6280\u672F\u4EA4\u6D41QQ\u7FA4\uFF1A466363173",-1),_hoisted_10=createTextVNode("UI/\u8BBE\u8BA1/\u5F00\u53D1/\u6D4B\u8BD5"),_hoisted_11=createBaseVNode("div",null,[createBaseVNode("a",{target:"_blank",href:"http://zyplayer.com"},"\u66AE\u5149\uFF1A\u57CE\u4E2D\u57CE")],-1),_hoisted_12={style:{"line-height":"30px"}},_hoisted_13=createBaseVNode("div",null,"\u6B64\u9879\u76EE\u57FA\u4E8E\u4EE5\u4E0B\u5F00\u6E90\u8F6F\u4EF6\u6784\u5EFA",-1),_hoisted_14=createTextVNode("\u540E\u7AEF"),_hoisted_15=createBaseVNode("div",null,[createBaseVNode("a",{target:"_blank",href:"https://spring.io/projects/spring-boot"},"Spring-Boot"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"http://www.mybatis.org"},"MyBatis"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://github.com/alibaba/druid"},"Druid"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://mp.baomidou.com"},"MyBatis-Plus"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://www.hutool.cn"},"Hutool"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://github.com/alibaba/fastjson"},"Fastjson"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://alibaba-easyexcel.github.io"},"Easy Excel"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://swagger.io"},"Swagger"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://dubbo.io"},"Dubbo"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"http://www.eclipse.org/jgit"},"JGit"),createTextVNode("\u3001... ")],-1),_hoisted_16=createTextVNode("\u524D\u7AEF"),_hoisted_17=createTextVNode(" Vue3\u3001element-ui\u3001ant-design-vue\u3001wangeditor\u3001mavon-editor\u3001qrcodejs2\u3001vant\u3001vue-router\u3001axios\u3001vue-hljs\u3001brace\u3001echarts\u3001sql-formatter\u3001vue-clipboard2\u3001... "),_hoisted_18=createBaseVNode("div",null,null,-1),_hoisted_19=createBaseVNode("span",{slot:"label"},[createTextVNode(" \u8F6F\u4EF6\u66F4\u65B0 "),createBaseVNode("sup",{class:"el-badge__content el-badge__content--undefined is-fixed is-dot",style:{top:"10px",right:"20px"}})],-1),_hoisted_20={style:{"line-height":"30px"}},_hoisted_21=createTextVNode("\u5347\u7EA7\u5730\u5740\uFF1A"),_hoisted_22=["href"],_hoisted_23=createBaseVNode("div",null,"\u5347\u7EA7\u5185\u5BB9\uFF1A",-1),_hoisted_24={style:{margin:"0","max-height":"250px",overflow:"auto"}};function _sfc_render$6(a,t,o,n,r,i){const l=resolveComponent("a-divider"),s=resolveComponent("a-tab-pane"),u=resolveComponent("a-tabs"),d=resolveComponent("a-modal");return openBlock(),createBlock(d,{visible:r.aboutDialogVisible,"onUpdate:visible":t[0]||(t[0]=_=>r.aboutDialogVisible=_),title:"\u5173\u4E8E",width:"600px",footer:null},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$5,[_hoisted_2$5,createBaseVNode("div",_hoisted_3$5,[createBaseVNode("div",null,"\u7248\u672C "+toDisplayString(r.upgradeInfo.nowVersion||"1.0.0"),1),_hoisted_4$2]),createVNode(u,{type:"card"},{default:withCtx(()=>[createVNode(s,{tab:"\u652F\u6301",key:"support"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_5$2,[_hoisted_6$1,_hoisted_7$1,_hoisted_8$1,_hoisted_9$1,createVNode(l,{"content-position":"left"},{default:withCtx(()=>[_hoisted_10]),_:1}),_hoisted_11])]),_:1}),createVNode(s,{tab:"\u5F00\u6E90\u8F6F\u4EF6",key:"software"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_12,[_hoisted_13,createVNode(l,{"content-position":"left"},{default:withCtx(()=>[_hoisted_14]),_:1}),_hoisted_15,createVNode(l,{"content-position":"left"},{default:withCtx(()=>[_hoisted_16]),_:1}),_hoisted_17,_hoisted_18])]),_:1}),r.upgradeInfo.lastVersion?(openBlock(),createBlock(s,{tab:"\u8F6F\u4EF6\u66F4\u65B0",key:"upgrade"},{default:withCtx(()=>[_hoisted_19,createBaseVNode("div",_hoisted_20,[createBaseVNode("div",null,"\u5F53\u524D\u7248\u672C\uFF1A"+toDisplayString(r.upgradeInfo.nowVersion),1),createBaseVNode("div",null,"\u6700\u65B0\u7248\u672C\uFF1A"+toDisplayString(r.upgradeInfo.lastVersion),1),createBaseVNode("div",null,[_hoisted_21,createBaseVNode("a",{target:"_blank",href:r.upgradeInfo.upgradeUrl},toDisplayString(r.upgradeInfo.upgradeUrl),9,_hoisted_22)]),_hoisted_23,createBaseVNode("pre",_hoisted_24,toDisplayString(r.upgradeInfo.upgradeContent),1)])]),_:1})):createCommentVNode("",!0)]),_:1})])]),_:1},8,["visible"])}var aboutDialog=_export_sfc(_sfc_main$6,[["render",_sfc_render$6]]),HeaderAvatar_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$5={name:"HeaderAvatar",data(){return{currUser:{}}},components:{DownOutlined,UserOutlined,aboutDialog},mounted(){this.getSelfUserInfo()},methods:{showAbout(){this.$refs.aboutDialog.show()},showConsole(){window.open(getZyplayerApiBaseUrl(),"_blank")},showMyInfo(){this.$router.push({path:"/user/myInfo"})},userSignOut(){zyplayerApi.userLogout().then(()=>{location.reload()})},getSelfUserInfo(){zyplayerApi.getSelfUserInfo().then(a=>{this.currUser=a.data})}}},_hoisted_1$4=createTextVNode("\u63A7\u5236\u53F0"),_hoisted_2$4=createTextVNode("\u5173\u4E8E"),_hoisted_3$4=createTextVNode("\u9000\u51FA\u767B\u5F55");function _sfc_render$5(a,t,o,n,r,i){const l=resolveComponent("UserOutlined"),s=resolveComponent("a-menu-item"),u=resolveComponent("a-menu-divider"),d=resolveComponent("a-menu"),_=resolveComponent("a-dropdown"),c=resolveComponent("about-dialog");return openBlock(),createElementBlock(Fragment,null,[createVNode(_,{trigger:"click"},{overlay:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(s,{onClick:i.showConsole,key:"1"},{default:withCtx(()=>[_hoisted_1$4]),_:1},8,["onClick"]),createVNode(u),createVNode(s,{onClick:i.showAbout,key:"2"},{default:withCtx(()=>[_hoisted_2$4]),_:1},8,["onClick"]),createVNode(s,{onClick:i.userSignOut,key:"4"},{default:withCtx(()=>[_hoisted_3$4]),_:1},8,["onClick"])]),_:1})]),default:withCtx(()=>[createBaseVNode("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=withModifiers(()=>{},["prevent"])),style:{display:"inline-block",height:"100%","vertical-align":"initial"}},[createVNode(l),createTextVNode(" "+toDisplayString(r.currUser.userName||"-"),1)])]),_:1}),createVNode(c,{ref:"aboutDialog"},null,512)],64)}var HeaderAvatar=_export_sfc(_sfc_main$5,[["render",_sfc_render$5],["__scopeId","data-v-6260e1ae"]]);const _sfc_main$4={name:"MenuLayoutChildren",props:{menuItem:Object},data(){return{}},components:{StarOutlined,SettingOutlined,CarryOutOutlined,FileTextOutlined,DashboardOutlined,InfoCircleOutlined},methods:{haveShowChildren(a){return a.filter(t=>!t.meta||!t.meta.hidden).length>0}}};function _sfc_render$4(a,t,o,n,r,i){const l=resolveComponent("SettingOutlined"),s=resolveComponent("FileTextOutlined"),u=resolveComponent("MenuLayoutChildren"),d=resolveComponent("a-sub-menu"),_=resolveComponent("DashboardOutlined"),c=resolveComponent("InfoCircleOutlined"),h=resolveComponent("router-link"),g=resolveComponent("a-menu-item");return!o.menuItem.meta||!o.menuItem.meta.hidden?(openBlock(),createElementBlock(Fragment,{key:0},[o.menuItem.children?(openBlock(),createElementBlock(Fragment,{key:0},[i.haveShowChildren(o.menuItem.children)?(openBlock(),createBlock(d,{key:o.menuItem.path},{title:withCtx(()=>[o.menuItem.meta?(openBlock(),createElementBlock(Fragment,{key:0},[o.menuItem.meta.icon==="SettingOutlined"?(openBlock(),createBlock(l,{key:0})):createCommentVNode("",!0),o.menuItem.meta.icon==="FileTextOutlined"?(openBlock(),createBlock(s,{key:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(o.menuItem.name),1)]),default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.menuItem.children,p=>(openBlock(),createBlock(u,{menuItem:p},null,8,["menuItem"]))),256))]),_:1})):createCommentVNode("",!0)],64)):(openBlock(),createBlock(g,{key:o.menuItem.path},{default:withCtx(()=>[createVNode(h,{to:{path:o.menuItem.path,query:o.menuItem.query}},{default:withCtx(()=>[o.menuItem.meta?(openBlock(),createElementBlock(Fragment,{key:0},[o.menuItem.meta.icon==="DashboardOutlined"?(openBlock(),createBlock(_,{key:0})):createCommentVNode("",!0),o.menuItem.meta.icon==="FileTextOutlined"?(openBlock(),createBlock(s,{key:1})):createCommentVNode("",!0),o.menuItem.meta.icon==="InfoCircleOutlined"?(openBlock(),createBlock(c,{key:2})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(o.menuItem.name),1)]),_:1},8,["to"])]),_:1}))],64)):createCommentVNode("",!0)}var MenuChildrenLayout=_export_sfc(_sfc_main$4,[["render",_sfc_render$4]]);const methodArray=["get","head","post","put","patch","delete","options","trace"];function analysisSwaggerData(a){let t={},o={},n={},r=a.paths;return r?(Object.keys(r).forEach(i=>{let l=r[i];for(let s of methodArray){if(!l[s]||!l[s].tags)continue;let u=s.toLowerCase();n[u]=(n[u]||0)+1,n.total=(n.total||0)+1,l[s].tags.forEach(d=>{let _=t[d];_||(_=t[d]={});let c=_[i];c||(c=_[i]={});let h=i+"."+s;c[s]=l[s],c[s].path=h,c[s].url=i,c[s].method=s,o[h]=l[s]})}}),{urlMethodMap:o,tagPathMap:t,methodStatistic:n}):{urlMethodMap:o,tagPathMap:t,methodStatistic:n}}function getTreeDataForTag(a,t,o,n){let r=[],i=1;return(a.tags||[]).forEach(s=>{let u=1,d=[],_=t[s.name];!_||(Object.keys(_).forEach(c=>{let h=1,g=_[c];Object.keys(g).forEach(p=>{let v=i+"_"+u+"_"+h,m=g[p];if(!searchInPathMethods(c,m,o))return;m.treeId=v;let k=m.summary||m.path;d.push({title:k,key:v,isLeaf:!0,method:m.method,query:w(B({},n),{path:m.url,method:m.method})}),h++}),u++}),d.length>0&&r.push({title:s.name,key:i,children:d}),i++)}),[{key:"main",title:a.info.title||"Swagger\u63A5\u53E3\u6587\u6863",children:r}]}function searchInPathMethods(a,t,o){if(!o||!a||(a=a.toLowerCase(),o=o.toLowerCase(),a.indexOf(o)>=0))return!0;let n=t.path+t.method+t.summary+t.description+t.tags;return n&&n.toLowerCase().indexOf(o)>=0}var Swagger_vue_vue_type_style_index_0_lang="";const _sfc_main$3={setup(){const store=useStore(),route=useRoute(),router=useRouter();let tagPathMap=ref({}),swaggerDoc=ref({}),treeData=ref([]),expandedKeys=ref([]),choiceDocId=ref(""),searchKeywords=ref("");const docChecked=(a,t)=>{if(t.node.key==="main")router.push({path:"/swagger/info"});else if(t.node.isLeaf){let o=t.node.dataRef;router.push({path:"/swagger/view",query:o.query})}},loadDoc=(a,t,o)=>{choiceDocId.value=a,searchKeywords.value=t,zyplayerApi.apiDocApisDetail({id:a}).then(n=>{let r=toJsonObj(n.data);if(typeof r!="object"||!r.swagger){o(!1),message.error("\u83B7\u53D6\u6587\u6863\u6570\u636E\u8BF7\u6C42\u5931\u8D25");return}swaggerDoc.value=r,store.commit("setSwaggerDoc",r);let i=analysisSwaggerData(r);store.commit("setSwaggerUrlMethodMap",i.urlMethodMap),store.commit("setMethodStatistic",i.methodStatistic),tagPathMap.value=i.tagPathMap,loadTreeData(),o(!0),setTimeout(()=>{route.path==="/swagger/view"&&route.query.id||router.push({path:"/swagger/info"})},0)})},loadTreeData=()=>{expandedKeys.value=["main"];let a={id:choiceDocId.value};treeData.value=getTreeDataForTag(swaggerDoc.value,tagPathMap.value,searchKeywords.value,a)},toJsonObj=value=>{if(typeof value!="string")return value;try{return JSON.parse(value)}catch(e){try{return eval("("+value+")")}catch(a){return value||void 0}}};return{expandedKeys,docChecked,loadDoc,treeData}}},_hoisted_1$3=createTextVNode("get"),_hoisted_2$3=createTextVNode("post"),_hoisted_3$3=createTextVNode("put"),_hoisted_4$1=createTextVNode("head"),_hoisted_5$1=createTextVNode("patch"),_hoisted_6=createTextVNode("delete"),_hoisted_7=createTextVNode("options"),_hoisted_8=createTextVNode("trace"),_hoisted_9={style:{margin:"0 6px 0 3px"}};function _sfc_render$3(a,t,o,n,r,i){const l=resolveComponent("a-tag"),s=resolveComponent("a-badge"),u=resolveComponent("a-directory-tree");return openBlock(),createBlock(u,{showIcon:!1,"tree-data":n.treeData,expandedKeys:n.expandedKeys,"onUpdate:expandedKeys":t[0]||(t[0]=d=>n.expandedKeys=d),onSelect:n.docChecked},{title:withCtx(({title:d,isLeaf:_,method:c,children:h,key:g})=>[_?(openBlock(),createElementBlock(Fragment,{key:0},[c==="get"?(openBlock(),createBlock(l,{key:0,color:"pink"},{default:withCtx(()=>[_hoisted_1$3]),_:1})):c==="post"?(openBlock(),createBlock(l,{key:1,color:"red"},{default:withCtx(()=>[_hoisted_2$3]),_:1})):c==="put"?(openBlock(),createBlock(l,{key:2,color:"orange"},{default:withCtx(()=>[_hoisted_3$3]),_:1})):c==="head"?(openBlock(),createBlock(l,{key:3,color:"green"},{default:withCtx(()=>[_hoisted_4$1]),_:1})):c==="patch"?(openBlock(),createBlock(l,{key:4,color:"cyan"},{default:withCtx(()=>[_hoisted_5$1]),_:1})):c==="delete"?(openBlock(),createBlock(l,{key:5,color:"blue"},{default:withCtx(()=>[_hoisted_6]),_:1})):c==="options"?(openBlock(),createBlock(l,{key:6,color:"purple"},{default:withCtx(()=>[_hoisted_7]),_:1})):c==="trace"?(openBlock(),createBlock(l,{key:7,color:"purple"},{default:withCtx(()=>[_hoisted_8]),_:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",_hoisted_9,toDisplayString(d),1),h?(openBlock(),createBlock(s,{key:1,count:h.length,"number-style":{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}},null,8,["count"])):createCommentVNode("",!0)]),_:1},8,["tree-data","expandedKeys","onSelect"])}var DocTreeSwagger=_export_sfc(_sfc_main$3,[["render",_sfc_render$3]]),MenuLayout_vue_vue_type_style_index_0_lang="";const _sfc_main$2={props:{collapsed:{type:Boolean,default:!1}},components:{MenuChildrenLayout,DocTreeSwagger},setup(a){const t=useStore(),o=useRoute(),n=useRouter();let r=ref([]),i=ref([]),l=ref([]),s=ref(!1),u=ref([]),d=ref(),_=ref(""),c=ref({});const h=()=>{zyplayerApi.docApiGlobalParamList().then(f=>{let y=f.data||[];t.commit("setGlobalParam",y)})},g=()=>{zyplayerApi.apiDocApis().then(f=>{u.value=f.data||[],u.value.length>0&&!d.value&&(o.path==="/swagger/view"&&o.query.id||o.path==="/openapi/view"&&o.query.id?d.value=parseInt(o.query.id):d.value=u.value[0].id,m())})};let p=ref(),v=ref();const m=async()=>{if(s.value=!0,c.value=u.value.find(y=>y.id===d.value),!c.value){message.error("\u672A\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863\u5730\u5740\u4FE1\u606F");return}await nextTick();const f=y=>{y&&t.commit("setApiDoc",c.value),s.value=!1};c.value.docType===1||c.value.docType===2?p.value&&p.value.loadDoc(d.value,_.value,f):(c.value.docType===3||c.value.docType===4)&&v.value&&v.value.loadDoc(d.value,_.value,f)},k=()=>{m()};return watch(t.getters.getDocChangedNum,()=>{g()}),onMounted(()=>{r.value=n.options.routes.find(N=>N.path==="/").children[0].children;let f=o.meta||{},y=o.path;f.parentPath&&(y=f.parentPath),i.value=[y];let C=o.matched;C.length>=1&&(l.value=[C[1].path]),g(),h()}),{menuData:r,selectedKeys:i,openKeys:l,treeDataLoading:s,docResourceList:u,docChoiceId:d,searchKeywords:_,swaggerRef:p,docChoice:c,docChoiceChange:k}}},_hoisted_1$2={class:"menu-layout"},_hoisted_2$2={class:"doc-tree"},_hoisted_3$2={style:{padding:"10px 5px"}};function _sfc_render$2(a,t,o,n,r,i){const l=resolveComponent("menu-children-layout"),s=resolveComponent("a-menu"),u=resolveComponent("a-divider"),d=resolveComponent("a-select-option"),_=resolveComponent("a-select"),c=resolveComponent("a-input-search"),h=resolveComponent("DocTreeSwagger"),g=resolveComponent("a-spin");return openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(s,{theme:"light",mode:"inline","inline-collapsed":!1,openKeys:n.openKeys,"onUpdate:openKeys":t[0]||(t[0]=p=>n.openKeys=p),selectedKeys:n.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=p=>n.selectedKeys=p)},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.menuData,p=>(openBlock(),createBlock(l,{menuItem:p},null,8,["menuItem"]))),256))]),_:1},8,["openKeys","selectedKeys"]),createVNode(u,{style:{margin:"6px 0"}}),withDirectives(createBaseVNode("div",_hoisted_2$2,[createVNode(g,{tip:"\u52A0\u8F7D\u4E2D...",spinning:n.treeDataLoading},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$2,[createVNode(_,{placeholder:"\u8BF7\u9009\u62E9\u5206\u7EC4",value:n.docChoiceId,"onUpdate:value":t[2]||(t[2]=p=>n.docChoiceId=p),onChange:n.docChoiceChange,style:{width:"100%"}},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.docResourceList,p=>(openBlock(),createBlock(d,{value:p.id},{default:withCtx(()=>[createTextVNode(toDisplayString(p.name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value","onChange"]),createVNode(c,{value:n.searchKeywords,"onUpdate:value":t[3]||(t[3]=p=>n.searchKeywords=p),placeholder:"\u641C\u7D22\u6587\u6863\u5185\u5BB9",style:{width:"100%","margin-top":"10px"},onSearch:n.docChoiceChange},null,8,["value","onSearch"])]),n.docChoice&&n.docChoice.docType?(openBlock(),createElementBlock(Fragment,{key:0},[n.docChoice.docType===1||n.docChoice.docType===2?(openBlock(),createBlock(h,{key:0,ref:"swaggerRef"},null,512)):createCommentVNode("",!0)],64)):createCommentVNode("",!0)]),_:1},8,["spinning"])],512),[[vShow,!o.collapsed]])])}var MenuLayout=_export_sfc(_sfc_main$2,[["render",_sfc_render$2]]),GlobalFooter_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$1={name:"GlobalFooter",props:["copyright","linkList"]},_hoisted_1$1={class:"footer"},_hoisted_2$1={class:"links"},_hoisted_3$1=["href"],_hoisted_4={class:"copyright"},_hoisted_5=createTextVNode(" Copyright");function _sfc_render$1(a,t,o,n,r,i){const l=resolveComponent("a-icon");return openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.linkList,(s,u)=>(openBlock(),createElementBlock("a",{target:"_blank",key:u,href:s.link?s.link:"javascript: void(0)"},[s.icon?(openBlock(),createBlock(l,{key:0,type:s.icon},null,8,["type"])):createCommentVNode("",!0),createTextVNode(toDisplayString(s.name),1)],8,_hoisted_3$1))),128))]),createBaseVNode("div",_hoisted_4,[_hoisted_5,createVNode(l,{type:"copyright"}),createTextVNode(" "+toDisplayString(o.copyright),1)])])}var GlobalFooter=_export_sfc(_sfc_main$1,[["render",_sfc_render$1],["__scopeId","data-v-7aaaa116"]]),_imports_0="assets/logo.952f0c92.png",GlobalLayout_vue_vue_type_style_index_0_scoped_true_lang="",GlobalLayout_vue_vue_type_style_index_1_lang="";const minHeight=window.innerHeight-64-122,_sfc_main={name:"GlobalLayout",components:{HeaderAvatar,MenuLayout,GlobalFooter,BarChartOutlined,MenuFoldOutlined,MenuUnfoldOutlined},data(){return{minHeight:minHeight+"px",appMenuCollapsed:!1,rightAsideWidth:300}},computed:{},mounted(){this.dragChangeRightAsideWidth()},methods:{dragChangeRightAsideWidth:function(){let a=this.$refs.rightResize,t=this.$refs.rightResizeBar;a.onmousedown=o=>{let n=o.clientX;return a.style.background="#ccc",t.style.background="#aaa",a.left=a.offsetLeft,document.onmousemove=r=>{let i=r.clientX,l=n-i;(l<0&&this.rightAsideWidth<600||l>0&&this.rightAsideWidth>280)&&(n=i,this.rightAsideWidth-=l,this.rightAsideWidth<280&&(this.rightAsideWidth=280))},document.onmouseup=()=>{a.style.background="#fafafa",t.style.background="#ccc",document.onmousemove=null,document.onmouseup=null},!1}}}},_withScopeId=a=>(pushScopeId("data-v-061524c3"),a=a(),popScopeId(),a),_hoisted_1=_withScopeId(()=>createBaseVNode("div",{class:"logo"},[createBaseVNode("img",{src:_imports_0}),createBaseVNode("h1",null,"API\u63A5\u53E3\u6587\u6863\u7BA1\u7406")],-1)),_hoisted_2={ref:"rightResize",class:"right-resize"},_hoisted_3={ref:"rightResizeBar"};function _sfc_render(a,t,o,n,r,i){const l=resolveComponent("menu-layout"),s=resolveComponent("a-layout-sider"),u=resolveComponent("MenuUnfoldOutlined"),d=resolveComponent("MenuFoldOutlined"),_=resolveComponent("a-col"),c=resolveComponent("header-avatar"),h=resolveComponent("a-row"),g=resolveComponent("a-layout-header"),p=resolveComponent("router-view"),v=resolveComponent("a-layout-content"),m=resolveComponent("a-layout");return openBlock(),createBlock(m,{class:"api-menu-trigger"},{default:withCtx(()=>[createVNode(s,{theme:"light",trigger:null,collapsible:"",collapsed:r.appMenuCollapsed,"onUpdate:collapsed":t[0]||(t[0]=k=>r.appMenuCollapsed=k),width:r.rightAsideWidth,style:{height:"100vh",overflow:"auto"}},{default:withCtx(()=>[_hoisted_1,createVNode(l,{collapsed:r.appMenuCollapsed},null,8,["collapsed"])]),_:1},8,["collapsed","width"]),withDirectives(createBaseVNode("div",_hoisted_2,[createBaseVNode("i",_hoisted_3,"...",512)],512),[[vShow,!r.appMenuCollapsed]]),createVNode(m,null,{default:withCtx(()=>[createVNode(g,{style:{"border-bottom":"2px solid #eee",background:"#fff",padding:"0","box-shadow":"0 1px 4px rgba(0, 21, 41, 0.08)","-webkit-box-shadow":"0 1px 4px rgba(0, 21, 41, 0.08)"}},{default:withCtx(()=>[createVNode(h,{type:"flex"},{default:withCtx(()=>[createVNode(_,{flex:"auto"},{default:withCtx(()=>[r.appMenuCollapsed?(openBlock(),createBlock(u,{key:0,class:"trigger",onClick:t[1]||(t[1]=k=>r.appMenuCollapsed=!r.appMenuCollapsed)})):(openBlock(),createBlock(d,{key:1,class:"trigger",onClick:t[2]||(t[2]=k=>r.appMenuCollapsed=!r.appMenuCollapsed)}))]),_:1}),createVNode(_,{flex:"400px",style:{"text-align":"right","padding-right":"20px"}},{default:withCtx(()=>[createVNode(c)]),_:1})]),_:1})]),_:1}),createVNode(v,{style:{height:"calc(100vh - 80px)",overflow:"auto",background:"#fff"}},{default:withCtx(()=>[createVNode(p)]),_:1})]),_:1})]),_:1})}var GlobalLayout=_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-061524c3"]]);export{GlobalLayout as default};