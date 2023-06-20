import{z as zyplayerApi,g as getZyplayerApiBaseUrl}from"./custom.f7427cee.js";import{_ as _export_sfc}from"./main.a6c14cdf.js";import{r as resolveComponent,o as openBlock,c as createBlock,w as withCtx,e as createBaseVNode,t as toDisplayString,a as createVNode,k as createCommentVNode,m as createTextVNode,D as DownOutlined,U as UserOutlined,b as createElementBlock,n as withModifiers,F as Fragment,S as StarOutlined,p as SettingOutlined,C as CarryOutOutlined,q as FileTextOutlined,s as DashboardOutlined,I as InfoCircleOutlined,d as renderList,u as useStore,v as useRoute,x as useRouter,y as ref,B as message,E as nextTick,G as watch,H as onMounted,J as withDirectives,L as vShow,M as BarChartOutlined,N as MenuFoldOutlined,O as MenuUnfoldOutlined,P as pushScopeId,Q as popScopeId}from"./vendor.1b910c8a.js";import{a as analysisSwaggerData,g as getTreeDataForTag,b as analysisOpenApiData,c as getTreeDataForTag$1,L as LeftResize,_ as _imports_0}from"./api-logo.01dcd617.js";const _sfc_main$7={data(){return{aboutDialogVisible:!1,upgradeInfo:{}}},mounted(){this.checkSystemUpgrade()},methods:{show(){this.aboutDialogVisible=!0},checkSystemUpgrade(){zyplayerApi.systemUpgradeInfo({}).then(l=>{l.data&&(this.upgradeInfo=l.data,this.upgradeInfo.upgradeContent&&(this.upgradeInfo.upgradeContent=this.upgradeInfo.upgradeContent.replaceAll("\uFF1B",`
`),console.log(`zyplayer-doc\u53D1\u73B0\u65B0\u7248\u672C\uFF1A
\u5347\u7EA7\u5730\u5740\uFF1A`+l.data.upgradeUrl+`
\u5F53\u524D\u7248\u672C\uFF1A`+l.data.nowVersion+`
\u6700\u65B0\u7248\u672C\uFF1A`+l.data.lastVersion+`
\u5347\u7EA7\u5185\u5BB9\uFF1A`+l.data.upgradeContent)))})}}},_hoisted_1$6={style:{}},_hoisted_2$5=createBaseVNode("div",{style:{"font-weight":"bold","font-size":"25px"}},"zyplayer-doc",-1),_hoisted_3$5={style:{"line-height":"30px",padding:"10px 0"}},_hoisted_4$3=createBaseVNode("div",null,[createTextVNode("\u7248\u6743\u6240\u6709 \xA9 2018-2021 "),createBaseVNode("a",{target:"_blank",href:"http://doc.zyplayer.com"},"doc.zyplayer.com")],-1),_hoisted_5$3={style:{"line-height":"30px"}},_hoisted_6$2=createBaseVNode("div",null,[createTextVNode("\u6587\u6863\uFF1A"),createBaseVNode("a",{target:"_blank",href:"http://doc.zyplayer.com/zyplayer-doc-manage/doc-wiki#/page/share/view?pageId=1&space=23f3f59a60824d21af9f7c3bbc9bc3cb"},"http://doc.zyplayer.com")],-1),_hoisted_7$2=createBaseVNode("div",null,[createTextVNode("\u4E3B\u9875\uFF1A"),createBaseVNode("a",{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"},"https://gitee.com/zyplayer/zyplayer-doc")],-1),_hoisted_8$2=createBaseVNode("div",null,[createTextVNode("\u53CD\u9988\uFF1A"),createBaseVNode("a",{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc/issues"},"https://gitee.com/zyplayer/zyplayer-doc/issues")],-1),_hoisted_9$2=createBaseVNode("div",null,"\u7279\u6027\u5173\u6CE8&\u6280\u672F\u4EA4\u6D41QQ\u7FA4\uFF1A466363173",-1),_hoisted_10=createTextVNode("UI/\u8BBE\u8BA1/\u5F00\u53D1/\u6D4B\u8BD5"),_hoisted_11=createBaseVNode("div",null,[createBaseVNode("a",{target:"_blank",href:"http://zyplayer.com"},"\u66AE\u5149\uFF1A\u57CE\u4E2D\u57CE")],-1),_hoisted_12={style:{"line-height":"30px"}},_hoisted_13=createBaseVNode("div",null,"\u6B64\u9879\u76EE\u57FA\u4E8E\u4EE5\u4E0B\u5F00\u6E90\u8F6F\u4EF6\u6784\u5EFA",-1),_hoisted_14=createTextVNode("\u540E\u7AEF"),_hoisted_15=createBaseVNode("div",null,[createBaseVNode("a",{target:"_blank",href:"https://spring.io/projects/spring-boot"},"Spring-Boot"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"http://www.mybatis.org"},"MyBatis"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://github.com/alibaba/druid"},"Druid"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://mp.baomidou.com"},"MyBatis-Plus"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://www.hutool.cn"},"Hutool"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://github.com/alibaba/fastjson"},"Fastjson"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://alibaba-easyexcel.github.io"},"Easy Excel"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://swagger.io"},"Swagger"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://dubbo.io"},"Dubbo"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"http://www.eclipse.org/jgit"},"JGit"),createTextVNode("\u3001... ")],-1),_hoisted_16=createTextVNode("\u524D\u7AEF"),_hoisted_17=createTextVNode(" Vue3\u3001element-ui\u3001ant-design-vue\u3001wangeditor\u3001mavon-editor\u3001qrcodejs2\u3001vant\u3001vue-router\u3001axios\u3001vue-hljs\u3001brace\u3001echarts\u3001sql-formatter\u3001vue-clipboard2\u3001... "),_hoisted_18=createBaseVNode("div",null,null,-1),_hoisted_19=createBaseVNode("span",{slot:"label"},[createTextVNode(" \u8F6F\u4EF6\u66F4\u65B0 "),createBaseVNode("sup",{class:"el-badge__content el-badge__content--undefined is-fixed is-dot",style:{top:"10px",right:"20px"}})],-1),_hoisted_20={style:{"line-height":"30px"}},_hoisted_21=createTextVNode("\u5347\u7EA7\u5730\u5740\uFF1A"),_hoisted_22=["href"],_hoisted_23=createBaseVNode("div",null,"\u5347\u7EA7\u5185\u5BB9\uFF1A",-1),_hoisted_24={style:{margin:"0","max-height":"250px",overflow:"auto"}};function _sfc_render$7(l,t,o,r,a,s){const i=resolveComponent("a-divider"),n=resolveComponent("a-tab-pane"),_=resolveComponent("a-tabs"),d=resolveComponent("a-modal");return openBlock(),createBlock(d,{visible:a.aboutDialogVisible,"onUpdate:visible":t[0]||(t[0]=p=>a.aboutDialogVisible=p),title:"\u5173\u4E8E",width:"600px",footer:null},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$6,[_hoisted_2$5,createBaseVNode("div",_hoisted_3$5,[createBaseVNode("div",null,"\u7248\u672C "+toDisplayString(a.upgradeInfo.nowVersion||"1.0.0"),1),_hoisted_4$3]),createVNode(_,{type:"card"},{default:withCtx(()=>[createVNode(n,{tab:"\u652F\u6301",key:"support"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_5$3,[_hoisted_6$2,_hoisted_7$2,_hoisted_8$2,_hoisted_9$2,createVNode(i,{"content-position":"left"},{default:withCtx(()=>[_hoisted_10]),_:1}),_hoisted_11])]),_:1}),createVNode(n,{tab:"\u5F00\u6E90\u8F6F\u4EF6",key:"software"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_12,[_hoisted_13,createVNode(i,{"content-position":"left"},{default:withCtx(()=>[_hoisted_14]),_:1}),_hoisted_15,createVNode(i,{"content-position":"left"},{default:withCtx(()=>[_hoisted_16]),_:1}),_hoisted_17,_hoisted_18])]),_:1}),a.upgradeInfo.lastVersion?(openBlock(),createBlock(n,{tab:"\u8F6F\u4EF6\u66F4\u65B0",key:"upgrade"},{default:withCtx(()=>[_hoisted_19,createBaseVNode("div",_hoisted_20,[createBaseVNode("div",null,"\u5F53\u524D\u7248\u672C\uFF1A"+toDisplayString(a.upgradeInfo.nowVersion),1),createBaseVNode("div",null,"\u6700\u65B0\u7248\u672C\uFF1A"+toDisplayString(a.upgradeInfo.lastVersion),1),createBaseVNode("div",null,[_hoisted_21,createBaseVNode("a",{target:"_blank",href:a.upgradeInfo.upgradeUrl},toDisplayString(a.upgradeInfo.upgradeUrl),9,_hoisted_22)]),_hoisted_23,createBaseVNode("pre",_hoisted_24,toDisplayString(a.upgradeInfo.upgradeContent),1)])]),_:1})):createCommentVNode("",!0)]),_:1})])]),_:1},8,["visible"])}var aboutDialog=_export_sfc(_sfc_main$7,[["render",_sfc_render$7]]),HeaderAvatar_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$6={name:"HeaderAvatar",data(){return{currUser:{}}},components:{DownOutlined,UserOutlined,aboutDialog},mounted(){this.getSelfUserInfo()},methods:{showAbout(){this.$refs.aboutDialog.show()},showConsole(){window.open(getZyplayerApiBaseUrl(),"_blank")},showMyInfo(){this.$router.push({path:"/user/myInfo"})},userSignOut(){zyplayerApi.userLogout().then(()=>{location.reload()})},getSelfUserInfo(){zyplayerApi.getSelfUserInfo().then(l=>{this.currUser=l.data})}}},_hoisted_1$5=createTextVNode("\u63A7\u5236\u53F0"),_hoisted_2$4=createTextVNode("\u5173\u4E8E"),_hoisted_3$4=createTextVNode("\u9000\u51FA\u767B\u5F55");function _sfc_render$6(l,t,o,r,a,s){const i=resolveComponent("UserOutlined"),n=resolveComponent("a-menu-item"),_=resolveComponent("a-menu-divider"),d=resolveComponent("a-menu"),p=resolveComponent("a-dropdown"),u=resolveComponent("about-dialog");return openBlock(),createElementBlock(Fragment,null,[createVNode(p,{trigger:"click"},{overlay:withCtx(()=>[createVNode(d,null,{default:withCtx(()=>[createVNode(n,{onClick:s.showConsole,key:"1"},{default:withCtx(()=>[_hoisted_1$5]),_:1},8,["onClick"]),createVNode(_),createVNode(n,{onClick:s.showAbout,key:"2"},{default:withCtx(()=>[_hoisted_2$4]),_:1},8,["onClick"]),createVNode(n,{onClick:s.userSignOut,key:"4"},{default:withCtx(()=>[_hoisted_3$4]),_:1},8,["onClick"])]),_:1})]),default:withCtx(()=>[createBaseVNode("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=withModifiers(()=>{},["prevent"])),style:{display:"inline-block",height:"100%","vertical-align":"initial"}},[createVNode(i),createTextVNode(" "+toDisplayString(a.currUser.userName||"-"),1)])]),_:1}),createVNode(u,{ref:"aboutDialog"},null,512)],64)}var HeaderAvatar=_export_sfc(_sfc_main$6,[["render",_sfc_render$6],["__scopeId","data-v-6260e1ae"]]);const _sfc_main$5={name:"MenuLayoutChildren",props:{menuItem:Object},data(){return{}},components:{StarOutlined,SettingOutlined,CarryOutOutlined,FileTextOutlined,DashboardOutlined,InfoCircleOutlined},methods:{haveShowChildren(l){return l.filter(t=>!t.meta||!t.meta.hidden).length>0}}};function _sfc_render$5(l,t,o,r,a,s){const i=resolveComponent("SettingOutlined"),n=resolveComponent("FileTextOutlined"),_=resolveComponent("MenuLayoutChildren"),d=resolveComponent("a-sub-menu"),p=resolveComponent("DashboardOutlined"),u=resolveComponent("InfoCircleOutlined"),c=resolveComponent("router-link"),f=resolveComponent("a-menu-item");return!o.menuItem.meta||!o.menuItem.meta.hidden?(openBlock(),createElementBlock(Fragment,{key:0},[o.menuItem.children?(openBlock(),createElementBlock(Fragment,{key:0},[s.haveShowChildren(o.menuItem.children)?(openBlock(),createBlock(d,{key:o.menuItem.path},{title:withCtx(()=>[o.menuItem.meta?(openBlock(),createElementBlock(Fragment,{key:0},[o.menuItem.meta.icon==="SettingOutlined"?(openBlock(),createBlock(i,{key:0})):createCommentVNode("",!0),o.menuItem.meta.icon==="FileTextOutlined"?(openBlock(),createBlock(n,{key:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(o.menuItem.name),1)]),default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.menuItem.children,y=>(openBlock(),createBlock(_,{menuItem:y},null,8,["menuItem"]))),256))]),_:1})):createCommentVNode("",!0)],64)):(openBlock(),createBlock(f,{key:o.menuItem.path},{default:withCtx(()=>[createVNode(c,{to:{path:o.menuItem.path,query:o.menuItem.query}},{default:withCtx(()=>[o.menuItem.meta?(openBlock(),createElementBlock(Fragment,{key:0},[o.menuItem.meta.icon==="DashboardOutlined"?(openBlock(),createBlock(p,{key:0})):createCommentVNode("",!0),o.menuItem.meta.icon==="FileTextOutlined"?(openBlock(),createBlock(n,{key:1})):createCommentVNode("",!0),o.menuItem.meta.icon==="InfoCircleOutlined"?(openBlock(),createBlock(u,{key:2})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(o.menuItem.name),1)]),_:1},8,["to"])]),_:1}))],64)):createCommentVNode("",!0)}var MenuChildrenLayout=_export_sfc(_sfc_main$5,[["render",_sfc_render$5]]),Swagger_vue_vue_type_style_index_0_lang="";const _sfc_main$4={components:{InfoCircleOutlined,FileTextOutlined},setup(){const store=useStore();useRoute();const router=useRouter();let tagPathMap=ref({}),swaggerDoc=ref({}),treeData=ref([]),expandedKeys=ref([]),choiceDocId=ref(""),searchKeywords=ref("");const docChecked=(l,t)=>{if(t.node.key==="info")router.push({path:"/swagger/info"});else if(t.node.isLeaf){let o=t.node.dataRef;router.push({path:"/swagger/view",query:o.query})}},loadDoc=(l,t,o)=>{choiceDocId.value=l,searchKeywords.value=t,zyplayerApi.apiDocApisDetail({id:l}).then(r=>{let a=toJsonObj(r.data);if(typeof a!="object"||!a.swagger){o(!1),message.error("\u83B7\u53D6\u6587\u6863\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u6863\u662F\u5426\u4E3A\u6807\u51C6\u7684Swagger\u6587\u6863\u683C\u5F0F");return}swaggerDoc.value=a,store.commit("setSwaggerDoc",a);let s=analysisSwaggerData(a);store.commit("setSwaggerUrlMethodMap",s.urlMethodMap),store.commit("setSwaggerMethodStatistic",s.methodStatistic),tagPathMap.value=s.tagPathMap,loadTreeData(),o(!0)})},loadTreeData=async()=>{let l={id:choiceDocId.value};treeData.value=getTreeDataForTag(swaggerDoc.value,tagPathMap.value,searchKeywords.value,l),treeData.value.unshift({key:"info",title:"\u6587\u6863\u8BF4\u660E\u4FE1\u606F",isLeaf:!0}),await nextTick(),expandedKeys.value=["main"]},toJsonObj=value=>{if(typeof value!="string")return value;try{return JSON.parse(value)}catch(e){try{return eval("("+value+")")}catch(l){return value||void 0}}};return{expandedKeys,docChecked,loadDoc,treeData}}},_hoisted_1$4=createTextVNode("get"),_hoisted_2$3=createTextVNode("post"),_hoisted_3$3=createTextVNode("put"),_hoisted_4$2=createTextVNode("head"),_hoisted_5$2=createTextVNode("patch"),_hoisted_6$1=createTextVNode("delete"),_hoisted_7$1=createTextVNode("options"),_hoisted_8$1=createTextVNode("trace"),_hoisted_9$1={style:{margin:"0 6px 0 3px"}};function _sfc_render$4(l,t,o,r,a,s){const i=resolveComponent("file-text-outlined"),n=resolveComponent("a-tag"),_=resolveComponent("a-badge"),d=resolveComponent("a-directory-tree");return openBlock(),createBlock(d,{showIcon:!1,"tree-data":r.treeData,expandedKeys:r.expandedKeys,"onUpdate:expandedKeys":t[0]||(t[0]=p=>r.expandedKeys=p),onSelect:r.docChecked},{title:withCtx(({title:p,isLeaf:u,method:c,children:f,key:y})=>[y==="info"?(openBlock(),createBlock(i,{key:0,style:{"margin-right":"3px"}})):createCommentVNode("",!0),u?(openBlock(),createElementBlock(Fragment,{key:1},[c==="get"?(openBlock(),createBlock(n,{key:0,color:"pink"},{default:withCtx(()=>[_hoisted_1$4]),_:1})):c==="post"?(openBlock(),createBlock(n,{key:1,color:"red"},{default:withCtx(()=>[_hoisted_2$3]),_:1})):c==="put"?(openBlock(),createBlock(n,{key:2,color:"orange"},{default:withCtx(()=>[_hoisted_3$3]),_:1})):c==="head"?(openBlock(),createBlock(n,{key:3,color:"green"},{default:withCtx(()=>[_hoisted_4$2]),_:1})):c==="patch"?(openBlock(),createBlock(n,{key:4,color:"cyan"},{default:withCtx(()=>[_hoisted_5$2]),_:1})):c==="delete"?(openBlock(),createBlock(n,{key:5,color:"blue"},{default:withCtx(()=>[_hoisted_6$1]),_:1})):c==="options"?(openBlock(),createBlock(n,{key:6,color:"purple"},{default:withCtx(()=>[_hoisted_7$1]),_:1})):c==="trace"?(openBlock(),createBlock(n,{key:7,color:"purple"},{default:withCtx(()=>[_hoisted_8$1]),_:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",_hoisted_9$1,toDisplayString(p),1),f?(openBlock(),createBlock(_,{key:2,count:f.length,"number-style":{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}},null,8,["count"])):createCommentVNode("",!0)]),_:1},8,["tree-data","expandedKeys","onSelect"])}var DocTreeSwagger=_export_sfc(_sfc_main$4,[["render",_sfc_render$4]]),OpenApi_vue_vue_type_style_index_0_lang="";const _sfc_main$3={components:{InfoCircleOutlined,FileTextOutlined},setup(){const store=useStore();useRoute();const router=useRouter();let tagPathMap=ref({}),openApiDoc=ref({}),treeData=ref([]),expandedKeys=ref([]),choiceDocId=ref(""),searchKeywords=ref("");const docChecked=(l,t)=>{if(t.node.key==="info")router.push({path:"/openapi/info"});else if(t.node.isLeaf){let o=t.node.dataRef;router.push({path:"/openapi/view",query:o.query})}},loadDoc=(l,t,o)=>{choiceDocId.value=l,searchKeywords.value=t,zyplayerApi.apiDocApisDetail({id:l}).then(r=>{let a=toJsonObj(r.data);if(typeof a!="object"||!a.openapi){message.error("\u83B7\u53D6\u6587\u6863\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u6863\u662F\u5426\u4E3A\u6807\u51C6\u7684OpenApi\u6587\u6863\u683C\u5F0F");return}openApiDoc.value=a,store.commit("setOpenApiDoc",a);let s=analysisOpenApiData(a);store.commit("setOpenApiUrlMethodMap",s.urlMethodMap),store.commit("setOpenApiMethodStatistic",s.methodStatistic),tagPathMap.value=s.tagPathMap,loadTreeData(),o()})},loadTreeData=async()=>{let l={id:choiceDocId.value};treeData.value=getTreeDataForTag$1(openApiDoc.value,tagPathMap.value,searchKeywords.value,l),treeData.value.unshift({key:"info",title:"\u6587\u6863\u8BF4\u660E\u4FE1\u606F",isLeaf:!0}),await nextTick(),expandedKeys.value=["main"]},toJsonObj=value=>{if(typeof value!="string")return value;try{return JSON.parse(value)}catch(e){try{return eval("("+value+")")}catch(l){return value||void 0}}};return{expandedKeys,docChecked,loadDoc,treeData}}},_hoisted_1$3=createTextVNode("get"),_hoisted_2$2=createTextVNode("post"),_hoisted_3$2=createTextVNode("put"),_hoisted_4$1=createTextVNode("head"),_hoisted_5$1=createTextVNode("patch"),_hoisted_6=createTextVNode("delete"),_hoisted_7=createTextVNode("options"),_hoisted_8=createTextVNode("trace"),_hoisted_9={style:{margin:"0 6px 0 3px"}};function _sfc_render$3(l,t,o,r,a,s){const i=resolveComponent("file-text-outlined"),n=resolveComponent("a-tag"),_=resolveComponent("a-badge"),d=resolveComponent("a-directory-tree");return openBlock(),createBlock(d,{showIcon:!1,"tree-data":r.treeData,expandedKeys:r.expandedKeys,"onUpdate:expandedKeys":t[0]||(t[0]=p=>r.expandedKeys=p),onSelect:r.docChecked},{title:withCtx(({title:p,isLeaf:u,method:c,children:f,key:y})=>[y==="info"?(openBlock(),createBlock(i,{key:0,style:{"margin-right":"3px"}})):createCommentVNode("",!0),u?(openBlock(),createElementBlock(Fragment,{key:1},[c==="get"?(openBlock(),createBlock(n,{key:0,color:"pink"},{default:withCtx(()=>[_hoisted_1$3]),_:1})):c==="post"?(openBlock(),createBlock(n,{key:1,color:"red"},{default:withCtx(()=>[_hoisted_2$2]),_:1})):c==="put"?(openBlock(),createBlock(n,{key:2,color:"orange"},{default:withCtx(()=>[_hoisted_3$2]),_:1})):c==="head"?(openBlock(),createBlock(n,{key:3,color:"green"},{default:withCtx(()=>[_hoisted_4$1]),_:1})):c==="patch"?(openBlock(),createBlock(n,{key:4,color:"cyan"},{default:withCtx(()=>[_hoisted_5$1]),_:1})):c==="delete"?(openBlock(),createBlock(n,{key:5,color:"blue"},{default:withCtx(()=>[_hoisted_6]),_:1})):c==="options"?(openBlock(),createBlock(n,{key:6,color:"purple"},{default:withCtx(()=>[_hoisted_7]),_:1})):c==="trace"?(openBlock(),createBlock(n,{key:7,color:"purple"},{default:withCtx(()=>[_hoisted_8]),_:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",_hoisted_9,toDisplayString(p),1),f?(openBlock(),createBlock(_,{key:2,count:f.length,"number-style":{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}},null,8,["count"])):createCommentVNode("",!0)]),_:1},8,["tree-data","expandedKeys","onSelect"])}var DocTreeOpenApi=_export_sfc(_sfc_main$3,[["render",_sfc_render$3]]),MenuLayout_vue_vue_type_style_index_0_lang="";const _sfc_main$2={props:{collapsed:{type:Boolean,default:!1}},components:{MenuChildrenLayout,DocTreeSwagger,DocTreeOpenApi},setup(l){const t=useStore(),o=useRoute(),r=useRouter();let a=ref([]),s=ref([]),i=ref([]),n=ref(!1),_=ref([]),d=ref(),p=ref(""),u=ref({});const c=()=>{zyplayerApi.docApiGlobalParamList().then(m=>{let g=m.data||[];t.commit("setGlobalParam",g)})},f=()=>{zyplayerApi.apiDocApis().then(m=>{_.value=m.data||[],_.value.length>0&&!d.value&&(o.path==="/swagger/view"&&o.query.id||o.path==="/openapi/view"&&o.query.id?d.value=parseInt(o.query.id):d.value=_.value[0].id,v())})};let y=ref(),h=ref();const v=async()=>{if(n.value=!0,u.value=_.value.find(g=>g.id===d.value),!u.value){message.error("\u672A\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863\u5730\u5740\u4FE1\u606F");return}await nextTick();const m=g=>{g&&t.commit("setApiDoc",u.value),n.value=!1};u.value.docType===1||u.value.docType===2?y.value&&y.value.loadDoc(d.value,p.value,m):(u.value.docType===3||u.value.docType===4)&&h.value&&h.value.loadDoc(d.value,p.value,m)},k=()=>{v()};return watch(t.getters.getDocChangedNum,()=>{f()}),onMounted(()=>{a.value=r.options.routes.find(x=>x.path==="/").children[0].children;let m=o.meta||{},g=o.path;m.parentPath&&(g=m.parentPath),s.value=[g];let C=o.matched;C.length>=1&&(i.value=[C[1].path]),f(),c()}),{menuData:a,selectedKeys:s,openKeys:i,treeDataLoading:n,docResourceList:_,docChoiceId:d,searchKeywords:p,swaggerRef:y,openApiRef:h,docChoice:u,docChoiceChange:k}}},_hoisted_1$2={class:"menu-layout"},_hoisted_2$1={class:"doc-tree"},_hoisted_3$1={style:{padding:"10px 5px"}};function _sfc_render$2(l,t,o,r,a,s){const i=resolveComponent("menu-children-layout"),n=resolveComponent("a-menu"),_=resolveComponent("a-divider"),d=resolveComponent("a-select-option"),p=resolveComponent("a-select"),u=resolveComponent("a-input-search"),c=resolveComponent("DocTreeSwagger"),f=resolveComponent("DocTreeOpenApi"),y=resolveComponent("a-spin");return openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(n,{theme:"light",mode:"inline","inline-collapsed":!1,openKeys:r.openKeys,"onUpdate:openKeys":t[0]||(t[0]=h=>r.openKeys=h),selectedKeys:r.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=h=>r.selectedKeys=h)},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.menuData,h=>(openBlock(),createBlock(i,{menuItem:h},null,8,["menuItem"]))),256))]),_:1},8,["openKeys","selectedKeys"]),createVNode(_,{style:{margin:"6px 0"}}),withDirectives(createBaseVNode("div",_hoisted_2$1,[createVNode(y,{tip:"\u52A0\u8F7D\u4E2D...",spinning:r.treeDataLoading},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$1,[createVNode(p,{placeholder:"\u8BF7\u9009\u62E9\u5206\u7EC4",value:r.docChoiceId,"onUpdate:value":t[2]||(t[2]=h=>r.docChoiceId=h),onChange:r.docChoiceChange,style:{width:"100%"}},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(r.docResourceList,h=>(openBlock(),createBlock(d,{value:h.id},{default:withCtx(()=>[createTextVNode(toDisplayString(h.name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value","onChange"]),createVNode(u,{value:r.searchKeywords,"onUpdate:value":t[3]||(t[3]=h=>r.searchKeywords=h),placeholder:"\u641C\u7D22\u6587\u6863\u5185\u5BB9",style:{width:"100%","margin-top":"10px"},onSearch:r.docChoiceChange},null,8,["value","onSearch"])]),r.docChoice&&r.docChoice.docType?(openBlock(),createElementBlock(Fragment,{key:0},[r.docChoice.docType===1||r.docChoice.docType===2?(openBlock(),createBlock(c,{key:0,ref:"swaggerRef"},null,512)):createCommentVNode("",!0),r.docChoice.docType===3||r.docChoice.docType===4?(openBlock(),createBlock(f,{key:1,ref:"openApiRef"},null,512)):createCommentVNode("",!0)],64)):createCommentVNode("",!0)]),_:1},8,["spinning"])],512),[[vShow,!o.collapsed]])])}var MenuLayout=_export_sfc(_sfc_main$2,[["render",_sfc_render$2]]),GlobalFooter_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$1={name:"GlobalFooter",props:["copyright","linkList"]},_hoisted_1$1={class:"footer"},_hoisted_2={class:"links"},_hoisted_3=["href"],_hoisted_4={class:"copyright"},_hoisted_5=createTextVNode(" Copyright");function _sfc_render$1(l,t,o,r,a,s){const i=resolveComponent("a-icon");return openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2,[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.linkList,(n,_)=>(openBlock(),createElementBlock("a",{target:"_blank",key:_,href:n.link?n.link:"javascript: void(0)"},[n.icon?(openBlock(),createBlock(i,{key:0,type:n.icon},null,8,["type"])):createCommentVNode("",!0),createTextVNode(toDisplayString(n.name),1)],8,_hoisted_3))),128))]),createBaseVNode("div",_hoisted_4,[_hoisted_5,createVNode(i,{type:"copyright"}),createTextVNode(" "+toDisplayString(o.copyright),1)])])}var GlobalFooter=_export_sfc(_sfc_main$1,[["render",_sfc_render$1],["__scopeId","data-v-7aaaa116"]]),GlobalLayout_vue_vue_type_style_index_0_scoped_true_lang="";const minHeight=window.innerHeight-64-122,_sfc_main={name:"GlobalLayout",components:{LeftResize,HeaderAvatar,MenuLayout,GlobalFooter,BarChartOutlined,MenuFoldOutlined,MenuUnfoldOutlined},data(){return{minHeight:minHeight+"px",appMenuCollapsed:!1,leftAsideWidth:300}},computed:{},mounted(){},methods:{}},_withScopeId=l=>(pushScopeId("data-v-40238062"),l=l(),popScopeId(),l),_hoisted_1=_withScopeId(()=>createBaseVNode("div",{class:"header-border logo"},[createBaseVNode("img",{src:_imports_0}),createBaseVNode("h1",null,"API\u63A5\u53E3\u6587\u6863\u7BA1\u7406")],-1));function _sfc_render(l,t,o,r,a,s){const i=resolveComponent("menu-layout"),n=resolveComponent("a-layout-sider"),_=resolveComponent("LeftResize"),d=resolveComponent("MenuUnfoldOutlined"),p=resolveComponent("MenuFoldOutlined"),u=resolveComponent("a-col"),c=resolveComponent("header-avatar"),f=resolveComponent("a-row"),y=resolveComponent("a-layout-header"),h=resolveComponent("router-view"),v=resolveComponent("a-layout-content"),k=resolveComponent("a-layout");return openBlock(),createBlock(k,{class:"api-menu-trigger"},{default:withCtx(()=>[createVNode(n,{theme:"light",trigger:null,collapsible:"",collapsed:a.appMenuCollapsed,"onUpdate:collapsed":t[0]||(t[0]=m=>a.appMenuCollapsed=m),width:a.leftAsideWidth,style:{height:"100vh",overflow:"auto"}},{default:withCtx(()=>[_hoisted_1,createVNode(i,{collapsed:a.appMenuCollapsed},null,8,["collapsed"])]),_:1},8,["collapsed","width"]),withDirectives(createVNode(_,{value:a.leftAsideWidth,"onUpdate:value":t[1]||(t[1]=m=>a.leftAsideWidth=m)},null,8,["value"]),[[vShow,!a.appMenuCollapsed]]),createVNode(k,null,{default:withCtx(()=>[createVNode(y,{class:"header-border"},{default:withCtx(()=>[createVNode(f,{type:"flex"},{default:withCtx(()=>[createVNode(u,{flex:"auto"},{default:withCtx(()=>[a.appMenuCollapsed?(openBlock(),createBlock(d,{key:0,class:"trigger",onClick:t[2]||(t[2]=m=>a.appMenuCollapsed=!a.appMenuCollapsed)})):(openBlock(),createBlock(p,{key:1,class:"trigger",onClick:t[3]||(t[3]=m=>a.appMenuCollapsed=!a.appMenuCollapsed)}))]),_:1}),createVNode(u,{flex:"400px",style:{"text-align":"right","padding-right":"20px"}},{default:withCtx(()=>[createVNode(c)]),_:1})]),_:1})]),_:1}),createVNode(v,{style:{height:"calc(100vh - 80px)",overflow:"auto",background:"#fff"}},{default:withCtx(()=>[createVNode(h)]),_:1})]),_:1})]),_:1})}var GlobalLayout=_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-40238062"]]);export{GlobalLayout as default};
