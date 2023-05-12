var V=Object.defineProperty,N=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(o,t,a)=>t in o?V(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,x=(o,t)=>{for(var a in t||(t={}))D.call(t,a)&&w(o,a,t[a]);if(k)for(var a of k(t))I.call(t,a)&&w(o,a,t[a]);return o},B=(o,t)=>N(o,b(t));import{a as apiClient,z as zyplayerApi,g as getZyplayerApiBaseUrl}from"./custom.33a00f74.js";import{_ as _export_sfc}from"./main.b335ea75.js";import{r as resolveComponent,o as openBlock,c as createBlock,w as withCtx,e as createBaseVNode,t as toDisplayString,a as createVNode,n as createCommentVNode,p as createTextVNode,D as DownOutlined,U as UserOutlined,b as createElementBlock,q as withModifiers,F as Fragment,S as StarOutlined,s as SettingOutlined,C as CarryOutOutlined,u as FileTextOutlined,v as DashboardOutlined,I as InfoCircleOutlined,d as renderList,x as withDirectives,y as vShow,B as BarChartOutlined,M as MenuFoldOutlined,G as MenuUnfoldOutlined,H as pushScopeId,J as popScopeId}from"./vendor.ee21a423.js";const customApi={get:(o,t)=>apiClient({url:o,method:"get",data:t}),post:(o,t)=>apiClient({url:o,method:"post",data:t})},_sfc_main$5={data(){return{aboutDialogVisible:!1,upgradeInfo:{}}},mounted(){this.checkSystemUpgrade()},methods:{show(){this.aboutDialogVisible=!0},checkSystemUpgrade(){zyplayerApi.systemUpgradeInfo({}).then(o=>{o.data&&(this.upgradeInfo=o.data,this.upgradeInfo.upgradeContent&&(this.upgradeInfo.upgradeContent=this.upgradeInfo.upgradeContent.replaceAll("\uFF1B",`
`),console.log(`zyplayer-doc\u53D1\u73B0\u65B0\u7248\u672C\uFF1A
\u5347\u7EA7\u5730\u5740\uFF1A`+o.data.upgradeUrl+`
\u5F53\u524D\u7248\u672C\uFF1A`+o.data.nowVersion+`
\u6700\u65B0\u7248\u672C\uFF1A`+o.data.lastVersion+`
\u5347\u7EA7\u5185\u5BB9\uFF1A`+o.data.upgradeContent)))})}}},_hoisted_1$4={style:{}},_hoisted_2$4=createBaseVNode("div",{style:{"font-weight":"bold","font-size":"25px"}},"zyplayer-doc",-1),_hoisted_3$4={style:{"line-height":"30px",padding:"10px 0"}},_hoisted_4$2=createBaseVNode("div",null,[createTextVNode("\u7248\u6743\u6240\u6709 \xA9 2018-2021 "),createBaseVNode("a",{target:"_blank",href:"http://doc.zyplayer.com"},"doc.zyplayer.com")],-1),_hoisted_5$2={style:{"line-height":"30px"}},_hoisted_6$1=createBaseVNode("div",null,[createTextVNode("\u6587\u6863\uFF1A"),createBaseVNode("a",{target:"_blank",href:"http://doc.zyplayer.com/zyplayer-doc-manage/doc-wiki#/page/share/view?pageId=1&space=23f3f59a60824d21af9f7c3bbc9bc3cb"},"http://doc.zyplayer.com")],-1),_hoisted_7$1=createBaseVNode("div",null,[createTextVNode("\u4E3B\u9875\uFF1A"),createBaseVNode("a",{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"},"https://gitee.com/zyplayer/zyplayer-doc")],-1),_hoisted_8$1=createBaseVNode("div",null,[createTextVNode("\u53CD\u9988\uFF1A"),createBaseVNode("a",{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc/issues"},"https://gitee.com/zyplayer/zyplayer-doc/issues")],-1),_hoisted_9$1=createBaseVNode("div",null,"\u7279\u6027\u5173\u6CE8&\u6280\u672F\u4EA4\u6D41QQ\u7FA4\uFF1A466363173",-1),_hoisted_10$1=createTextVNode("UI/\u8BBE\u8BA1/\u5F00\u53D1/\u6D4B\u8BD5"),_hoisted_11$1=createBaseVNode("div",null,[createBaseVNode("a",{target:"_blank",href:"http://zyplayer.com"},"\u66AE\u5149\uFF1A\u57CE\u4E2D\u57CE")],-1),_hoisted_12$1={style:{"line-height":"30px"}},_hoisted_13=createBaseVNode("div",null,"\u6B64\u9879\u76EE\u57FA\u4E8E\u4EE5\u4E0B\u5F00\u6E90\u8F6F\u4EF6\u6784\u5EFA",-1),_hoisted_14=createTextVNode("\u540E\u7AEF"),_hoisted_15=createBaseVNode("div",null,[createBaseVNode("a",{target:"_blank",href:"https://spring.io/projects/spring-boot"},"Spring-Boot"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"http://www.mybatis.org"},"MyBatis"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://github.com/alibaba/druid"},"Druid"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://mp.baomidou.com"},"MyBatis-Plus"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://www.hutool.cn"},"Hutool"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://github.com/alibaba/fastjson"},"Fastjson"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://alibaba-easyexcel.github.io"},"Easy Excel"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://swagger.io"},"Swagger"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"https://dubbo.io"},"Dubbo"),createTextVNode("\u3001 "),createBaseVNode("a",{target:"_blank",href:"http://www.eclipse.org/jgit"},"JGit"),createTextVNode("\u3001... ")],-1),_hoisted_16=createTextVNode("\u524D\u7AEF"),_hoisted_17=createTextVNode(" Vue3\u3001element-ui\u3001ant-design-vue\u3001wangeditor\u3001mavon-editor\u3001qrcodejs2\u3001vant\u3001vue-router\u3001axios\u3001vue-hljs\u3001brace\u3001echarts\u3001sql-formatter\u3001vue-clipboard2\u3001... "),_hoisted_18=createBaseVNode("div",null,null,-1),_hoisted_19=createBaseVNode("span",{slot:"label"},[createTextVNode(" \u8F6F\u4EF6\u66F4\u65B0 "),createBaseVNode("sup",{class:"el-badge__content el-badge__content--undefined is-fixed is-dot",style:{top:"10px",right:"20px"}})],-1),_hoisted_20={style:{"line-height":"30px"}},_hoisted_21=createTextVNode("\u5347\u7EA7\u5730\u5740\uFF1A"),_hoisted_22=["href"],_hoisted_23=createBaseVNode("div",null,"\u5347\u7EA7\u5185\u5BB9\uFF1A",-1),_hoisted_24={style:{margin:"0","max-height":"250px",overflow:"auto"}};function _sfc_render$5(o,t,a,i,n,l){const s=resolveComponent("a-divider"),r=resolveComponent("a-tab-pane"),d=resolveComponent("a-tabs"),p=resolveComponent("a-modal");return openBlock(),createBlock(p,{visible:n.aboutDialogVisible,"onUpdate:visible":t[0]||(t[0]=u=>n.aboutDialogVisible=u),title:"\u5173\u4E8E",width:"600px",footer:null},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$4,[_hoisted_2$4,createBaseVNode("div",_hoisted_3$4,[createBaseVNode("div",null,"\u7248\u672C "+toDisplayString(n.upgradeInfo.nowVersion||"1.0.0"),1),_hoisted_4$2]),createVNode(d,{type:"card"},{default:withCtx(()=>[createVNode(r,{tab:"\u652F\u6301",key:"support"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_5$2,[_hoisted_6$1,_hoisted_7$1,_hoisted_8$1,_hoisted_9$1,createVNode(s,{"content-position":"left"},{default:withCtx(()=>[_hoisted_10$1]),_:1}),_hoisted_11$1])]),_:1}),createVNode(r,{tab:"\u5F00\u6E90\u8F6F\u4EF6",key:"software"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_12$1,[_hoisted_13,createVNode(s,{"content-position":"left"},{default:withCtx(()=>[_hoisted_14]),_:1}),_hoisted_15,createVNode(s,{"content-position":"left"},{default:withCtx(()=>[_hoisted_16]),_:1}),_hoisted_17,_hoisted_18])]),_:1}),n.upgradeInfo.lastVersion?(openBlock(),createBlock(r,{tab:"\u8F6F\u4EF6\u66F4\u65B0",key:"upgrade"},{default:withCtx(()=>[_hoisted_19,createBaseVNode("div",_hoisted_20,[createBaseVNode("div",null,"\u5F53\u524D\u7248\u672C\uFF1A"+toDisplayString(n.upgradeInfo.nowVersion),1),createBaseVNode("div",null,"\u6700\u65B0\u7248\u672C\uFF1A"+toDisplayString(n.upgradeInfo.lastVersion),1),createBaseVNode("div",null,[_hoisted_21,createBaseVNode("a",{target:"_blank",href:n.upgradeInfo.upgradeUrl},toDisplayString(n.upgradeInfo.upgradeUrl),9,_hoisted_22)]),_hoisted_23,createBaseVNode("pre",_hoisted_24,toDisplayString(n.upgradeInfo.upgradeContent),1)])]),_:1})):createCommentVNode("",!0)]),_:1})])]),_:1},8,["visible"])}var aboutDialog=_export_sfc(_sfc_main$5,[["render",_sfc_render$5]]),HeaderAvatar_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$4={name:"HeaderAvatar",data(){return{currUser:{}}},components:{DownOutlined,UserOutlined,aboutDialog},mounted(){this.getSelfUserInfo()},methods:{showAbout(){this.$refs.aboutDialog.show()},showConsole(){window.open(getZyplayerApiBaseUrl(),"_blank")},showMyInfo(){this.$router.push({path:"/user/myInfo"})},userSignOut(){zyplayerApi.userLogout().then(()=>{location.reload()})},getSelfUserInfo(){zyplayerApi.getSelfUserInfo().then(o=>{this.currUser=o.data})}}},_hoisted_1$3=createTextVNode("\u63A7\u5236\u53F0"),_hoisted_2$3=createTextVNode("\u5173\u4E8E"),_hoisted_3$3=createTextVNode("\u9000\u51FA\u767B\u5F55");function _sfc_render$4(o,t,a,i,n,l){const s=resolveComponent("UserOutlined"),r=resolveComponent("a-menu-item"),d=resolveComponent("a-menu-divider"),p=resolveComponent("a-menu"),u=resolveComponent("a-dropdown"),_=resolveComponent("about-dialog");return openBlock(),createElementBlock(Fragment,null,[createVNode(u,{trigger:"click"},{overlay:withCtx(()=>[createVNode(p,null,{default:withCtx(()=>[createVNode(r,{onClick:l.showConsole,key:"1"},{default:withCtx(()=>[_hoisted_1$3]),_:1},8,["onClick"]),createVNode(d),createVNode(r,{onClick:l.showAbout,key:"2"},{default:withCtx(()=>[_hoisted_2$3]),_:1},8,["onClick"]),createVNode(r,{onClick:l.userSignOut,key:"4"},{default:withCtx(()=>[_hoisted_3$3]),_:1},8,["onClick"])]),_:1})]),default:withCtx(()=>[createBaseVNode("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=withModifiers(()=>{},["prevent"])),style:{display:"inline-block",height:"100%","vertical-align":"initial"}},[createVNode(s),createTextVNode(" "+toDisplayString(n.currUser.userName||"-"),1)])]),_:1}),createVNode(_,{ref:"aboutDialog"},null,512)],64)}var HeaderAvatar=_export_sfc(_sfc_main$4,[["render",_sfc_render$4],["__scopeId","data-v-6260e1ae"]]);const _sfc_main$3={name:"MenuLayoutChildren",props:{menuItem:Object},data(){return{}},components:{StarOutlined,SettingOutlined,CarryOutOutlined,FileTextOutlined,DashboardOutlined,InfoCircleOutlined},methods:{haveShowChildren(o){return o.filter(t=>!t.meta||!t.meta.hidden).length>0}}};function _sfc_render$3(o,t,a,i,n,l){const s=resolveComponent("SettingOutlined"),r=resolveComponent("FileTextOutlined"),d=resolveComponent("MenuLayoutChildren"),p=resolveComponent("a-sub-menu"),u=resolveComponent("DashboardOutlined"),_=resolveComponent("InfoCircleOutlined"),h=resolveComponent("router-link"),y=resolveComponent("a-menu-item");return!a.menuItem.meta||!a.menuItem.meta.hidden?(openBlock(),createElementBlock(Fragment,{key:0},[a.menuItem.children?(openBlock(),createElementBlock(Fragment,{key:0},[l.haveShowChildren(a.menuItem.children)?(openBlock(),createBlock(p,{key:a.menuItem.path},{title:withCtx(()=>[a.menuItem.meta?(openBlock(),createElementBlock(Fragment,{key:0},[a.menuItem.meta.icon==="SettingOutlined"?(openBlock(),createBlock(s,{key:0})):createCommentVNode("",!0),a.menuItem.meta.icon==="FileTextOutlined"?(openBlock(),createBlock(r,{key:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(a.menuItem.name),1)]),default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.menuItem.children,g=>(openBlock(),createBlock(d,{menuItem:g},null,8,["menuItem"]))),256))]),_:1})):createCommentVNode("",!0)],64)):(openBlock(),createBlock(y,{key:a.menuItem.path},{default:withCtx(()=>[createVNode(h,{to:{path:a.menuItem.path,query:a.menuItem.query}},{default:withCtx(()=>[a.menuItem.meta?(openBlock(),createElementBlock(Fragment,{key:0},[a.menuItem.meta.icon==="DashboardOutlined"?(openBlock(),createBlock(u,{key:0})):createCommentVNode("",!0),a.menuItem.meta.icon==="FileTextOutlined"?(openBlock(),createBlock(r,{key:1})):createCommentVNode("",!0),a.menuItem.meta.icon==="InfoCircleOutlined"?(openBlock(),createBlock(_,{key:2})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",null,toDisplayString(a.menuItem.name),1)]),_:1},8,["to"])]),_:1}))],64)):createCommentVNode("",!0)}var MenuChildrenLayout=_export_sfc(_sfc_main$3,[["render",_sfc_render$3]]);const methodArray=["get","head","post","put","patch","delete","options","trace"];function createTreeViewByTag(o){let t={},a={},i={},n=o.paths;return n?(Object.keys(n).forEach(l=>{let s=n[l];for(let r of methodArray){if(!s[r]||!s[r].tags)continue;let d=r.toUpperCase();i[d]=(i[d]||0)+1,i.TOTAL=(i.TOTAL||0)+1,s[r].tags.forEach(p=>{let u=t[p];u||(u=t[p]={});let _=u[l];_||(_=u[l]={});let h=l+"."+r;_[r]=s[r],_[r].path=h,_[r].url=l,_[r].method=r,a[h]=s[r]})}}),{pathData:t,pathDataMap:a,methodStatistic:i}):{pathDataMap:a,pathData:t,methodStatistic:i}}function getTreeDataForTag(o,t,a,i){let n=[],l=1;return o.tags.forEach(s=>{let r=1,d=[],p=t[s.name];!p||(Object.keys(p).forEach(u=>{let _=1,h=p[u];Object.keys(h).forEach(y=>{let g=l+"_"+r+"_"+_,m=h[y];if(!searchInPathMethods(u,m,a))return;m.treeId=g;let c=m.summary||m.path;d.push({title:c,key:g,isLeaf:!0,method:m.method,query:B(x({},i),{path:m.url,method:m.method})}),_++}),r++}),d.length>0&&n.push({title:s.name,key:l,children:d}),l++)}),[{key:"main",title:o.title||"Swagger\u63A5\u53E3\u6587\u6863",children:n}]}function searchInPathMethods(o,t,a){if(!a||!o||(o=o.toLowerCase(),a=a.toLowerCase(),o.indexOf(a)>=0))return!0;let i=t.path+t.method+t.summary+t.description+t.tags;return i&&i.toLowerCase().indexOf(a)>=0}var MenuLayout_vue_vue_type_style_index_0_lang="";const _sfc_main$2={name:"MenuLayout",props:{collapsed:{type:Boolean,default:!1}},data(){return{menuData:[],selectedKeys:[],openKeys:[],treeDataLoading:!1,pathData:{},swaggerDoc:{},treeData:[],expandedKeys:[],swaggerResourceList:[],swaggerDocChoice:void 0,searchKeywords:""}},watch:{"$store.state.docChangedNum"(){this.getSwaggerResourceList()}},components:{MenuChildrenLayout},mounted(){this.menuData=this.$router.options.routes.find(i=>i.path==="/").children[0].children;let o=this.$route.meta||{},t=this.$route.path;o.parentPath&&(t=o.parentPath),this.selectedKeys=[t];let a=this.$route.matched;a.length>=1&&(this.openKeys=[a[1].path]),this.getSwaggerResourceList(),this.getGlobalParamList()},methods:{docChecked(o,t){if(t.node.key==="main")this.$router.push({path:"/swagger/info"});else if(t.node.isLeaf){let a=t.node.dataRef;this.$router.push({path:"/swagger/view",query:a.query})}},getGlobalParamList(){zyplayerApi.docSwaggerGlobalParamList().then(o=>{let t=o.data||[];this.$store.commit("setGlobalParam",t)})},getSwaggerResourceList(){customApi.get("./swagger-resources").then(o=>{if(o instanceof Array){if(this.swaggerResourceList=o||[],this.swaggerResourceList.length>0&&!this.swaggerDocChoice){let t=!1;this.$route.path==="/swagger/view"&&this.$route.query.url?this.swaggerDocChoice=this.$route.query.url:(t=!0,this.swaggerDocChoice=this.swaggerResourceList[0].url),this.loadV2Doc(t)}}else this.$message.error("\u83B7\u53D6\u6587\u6863\u5217\u8868\u8BF7\u6C42\u5931\u8D25")})},swaggerDocChoiceChange(){this.loadV2Doc(!0)},loadV2Doc(o){this.treeDataLoading=!0;let t=this.swaggerResourceList.find(a=>a.url===this.swaggerDocChoice);if(!t){this.$message.error("\u672A\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863\u5730\u5740\u4FE1\u606F");return}this.$store.commit("setSwaggerResource",t),customApi.get(this.swaggerDocChoice).then(a=>{let i=this.toJsonObj(a);if(typeof i!="object"||!i.swagger){this.$message.error("\u83B7\u53D6\u6587\u6863\u6570\u636E\u8BF7\u6C42\u5931\u8D25"),this.treeDataLoading=!1;return}this.swaggerDoc=i,this.$store.commit("setSwaggerDoc",this.swaggerDoc);let n=createTreeViewByTag(this.swaggerDoc);this.$store.commit("setSwaggerTreePathMap",n.pathDataMap),this.$store.commit("setMethodStatistic",n.methodStatistic),this.pathData=n.pathData,this.loadTreeData(),setTimeout(()=>{this.treeDataLoading=!1,o&&this.$router.push({path:"/swagger/info"})},100)})},loadTreeData(){this.expandedKeys=["main"];let o={url:this.swaggerDocChoice};this.treeData=getTreeDataForTag(this.swaggerDoc,this.pathData,this.searchKeywords,o)},toJsonObj(value){if(typeof value!="string")return value;try{return JSON.parse(value)}catch(e){try{return eval("("+value+")")}catch(o){return value||void 0}}}}},_hoisted_1$2={class:"menu-layout"},_hoisted_2$2={class:"doc-tree"},_hoisted_3$2={style:{padding:"10px 5px"}},_hoisted_4$1=createTextVNode("get"),_hoisted_5$1=createTextVNode("post"),_hoisted_6=createTextVNode("put"),_hoisted_7=createTextVNode("head"),_hoisted_8=createTextVNode("patch"),_hoisted_9=createTextVNode("delete"),_hoisted_10=createTextVNode("options"),_hoisted_11=createTextVNode("trace"),_hoisted_12={style:{margin:"0 6px 0 3px"}};function _sfc_render$2(o,t,a,i,n,l){const s=resolveComponent("menu-children-layout"),r=resolveComponent("a-menu"),d=resolveComponent("a-divider"),p=resolveComponent("a-select-option"),u=resolveComponent("a-select"),_=resolveComponent("a-input-search"),h=resolveComponent("a-tag"),y=resolveComponent("a-badge"),g=resolveComponent("a-directory-tree"),m=resolveComponent("a-spin");return openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(r,{theme:"light",mode:"inline","inline-collapsed":!1,openKeys:n.openKeys,"onUpdate:openKeys":t[0]||(t[0]=c=>n.openKeys=c),selectedKeys:n.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=c=>n.selectedKeys=c)},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.menuData,c=>(openBlock(),createBlock(s,{menuItem:c},null,8,["menuItem"]))),256))]),_:1},8,["openKeys","selectedKeys"]),createVNode(d,{style:{margin:"6px 0"}}),withDirectives(createBaseVNode("div",_hoisted_2$2,[createVNode(m,{tip:"\u52A0\u8F7D\u4E2D...",spinning:n.treeDataLoading},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$2,[createVNode(u,{placeholder:"\u8BF7\u9009\u62E9\u5206\u7EC4",value:n.swaggerDocChoice,"onUpdate:value":t[2]||(t[2]=c=>n.swaggerDocChoice=c),onChange:l.swaggerDocChoiceChange,style:{width:"100%"}},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(n.swaggerResourceList,c=>(openBlock(),createBlock(p,{value:c.url},{default:withCtx(()=>[createTextVNode(toDisplayString(c.name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value","onChange"]),createVNode(_,{value:n.searchKeywords,"onUpdate:value":t[3]||(t[3]=c=>n.searchKeywords=c),placeholder:"\u641C\u7D22\u6587\u6863\u5185\u5BB9",style:{width:"100%","margin-top":"10px"},onSearch:l.loadTreeData},null,8,["value","onSearch"])]),createVNode(g,{showIcon:!1,"tree-data":n.treeData,expandedKeys:n.expandedKeys,"onUpdate:expandedKeys":t[4]||(t[4]=c=>n.expandedKeys=c),onSelect:l.docChecked},{title:withCtx(({title:c,isLeaf:C,method:f,children:v,key:T})=>[C?(openBlock(),createElementBlock(Fragment,{key:0},[f==="get"?(openBlock(),createBlock(h,{key:0,color:"pink"},{default:withCtx(()=>[_hoisted_4$1]),_:1})):f==="post"?(openBlock(),createBlock(h,{key:1,color:"red"},{default:withCtx(()=>[_hoisted_5$1]),_:1})):f==="put"?(openBlock(),createBlock(h,{key:2,color:"orange"},{default:withCtx(()=>[_hoisted_6]),_:1})):f==="head"?(openBlock(),createBlock(h,{key:3,color:"green"},{default:withCtx(()=>[_hoisted_7]),_:1})):f==="patch"?(openBlock(),createBlock(h,{key:4,color:"cyan"},{default:withCtx(()=>[_hoisted_8]),_:1})):f==="delete"?(openBlock(),createBlock(h,{key:5,color:"blue"},{default:withCtx(()=>[_hoisted_9]),_:1})):f==="options"?(openBlock(),createBlock(h,{key:6,color:"purple"},{default:withCtx(()=>[_hoisted_10]),_:1})):f==="trace"?(openBlock(),createBlock(h,{key:7,color:"purple"},{default:withCtx(()=>[_hoisted_11]),_:1})):createCommentVNode("",!0)],64)):createCommentVNode("",!0),createBaseVNode("span",_hoisted_12,toDisplayString(c),1),v?(openBlock(),createBlock(y,{key:1,count:v.length,"number-style":{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}},null,8,["count"])):createCommentVNode("",!0)]),_:1},8,["tree-data","expandedKeys","onSelect"])]),_:1},8,["spinning"])],512),[[vShow,!a.collapsed]])])}var MenuLayout=_export_sfc(_sfc_main$2,[["render",_sfc_render$2]]),GlobalFooter_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$1={name:"GlobalFooter",props:["copyright","linkList"]},_hoisted_1$1={class:"footer"},_hoisted_2$1={class:"links"},_hoisted_3$1=["href"],_hoisted_4={class:"copyright"},_hoisted_5=createTextVNode(" Copyright");function _sfc_render$1(o,t,a,i,n,l){const s=resolveComponent("a-icon");return openBlock(),createElementBlock("div",_hoisted_1$1,[createBaseVNode("div",_hoisted_2$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.linkList,(r,d)=>(openBlock(),createElementBlock("a",{target:"_blank",key:d,href:r.link?r.link:"javascript: void(0)"},[r.icon?(openBlock(),createBlock(s,{key:0,type:r.icon},null,8,["type"])):createCommentVNode("",!0),createTextVNode(toDisplayString(r.name),1)],8,_hoisted_3$1))),128))]),createBaseVNode("div",_hoisted_4,[_hoisted_5,createVNode(s,{type:"copyright"}),createTextVNode(" "+toDisplayString(a.copyright),1)])])}var GlobalFooter=_export_sfc(_sfc_main$1,[["render",_sfc_render$1],["__scopeId","data-v-7aaaa116"]]),_imports_0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEPElEQVR4Ab1XA8xlWQx+a9u2bcRex17btj1G8Nu2bdu2bfOi02/yzjN/NWnuYdtbH42joKrqqbKy+aSsSD/yN0KS16t4PAKU5I0a/kZhD2dwVrNToKjyhUz4e0WR+ohUcgRwlgX5ke9ebI++nT+W3mYiU4Iwr9HwdAOVtHpSYuXPFF70IZDHP1Fxqwfv1RPOCMBdpvEuaDnJXLmY/yBOEFvfXKa8puP0b8Td9Jmnxib+E3EX5TYe4ztLOqFZiATQdJT51XyhQVyu6gqhX4KvAXGn8Jegq6myMwg0hFmamPa1dv9cMGfHopD8t0FsWxic/yaxwxoIoV5sy+ZxgrlHxisgsCPonvaioRAJFn0CDgd1AUPy38LFHcWgvDdI0Idjmqr+QvbYCWKo6go2uvi1zzlU0RFAq+tzNDRVa5fR4FQNrW7Mw/70te+5RnsVnQG66DAKUcS58HZTh4su/YIA43NtlN1wyK4A2fUHaWy2hQCxZV8b7f0cdJUuOpC0dLZnu/RgMY/Dx5QgogCwP/ohh9X9X9R9BKjtiTDby2k4ovUFue+kLyB1ipBDDJteaBlMIcDvoTc5LAC0CGgdTDPb+zv8Dl1oMu+nNVAFJshiOGAuQBoBfgu53mEBfgy8HEyodSjd0j58SUTEz9BABCYlrR4WD/eNl0FS+srnbIcF+NL7DIQdDUxWWdwvanUTGojSoKphgnxuenBf9APICdQ7Xoo5fe51mpEgYAQUc+zhDMZdowVgYNF3Eip+IADzrtOgnGKComJ4KLNuH3F40vLaNB2KfRxr1D6cSSvrs/RryHVgTJPzXTS10MPjM9nu1/LZGeoYycFZOhj7KC2tToIGZdUfMKIdVvi+MMGYNQH40n5cpqW1KSb2mFaAbOQD+AMEAHOaXuyFAPQrCwDhOkfycJYOxDxCi6sToIHQtC4Aq9iqCfbHPKw1QQnm9AWr92sjE5wJNDLBFzoT5MMEEN6uCSIwKbbmhBPCCc9y2gn7JystO2GLcEIpZnfCMMBmGCJdCwEQhpJBIrpzDxLR7QaJSHpam4rlPizkNh41u1DdFUqAfc6k4sh7baTiw8IBB8DbpBgtoZMxuhBT+iW2UGAQGXaZI3xHZ5sJEFf2jUkxupLWNhdFEvrZqPNVVGUKG5WdgWblGKV1bWOBhqbr7AmANMtnF6E5+sb3PKO98g5/AoCXWcesGDQkaKN2uiEJzHvNtCGx2JIlaOOT3NNf2jHmrmnPg6ZwvCTwstqUonEUQkAT2//z1w36QbnFbnuO1lkIAXXBJ34WjukEovtBK8c0DJir1zr8MNF2rySiI7fxCP1tIU9YaDgQanxn0eBhspkEmlt5mr1r8jRDJKCeI5+jqAAxxhoiwORppsww8/e39VhFuOChycIMkIOAJIM439bj1IJGTkcPhzaKvzGoZCinQIxRWJDbGZ/FWUfpngCleTNdmkrhIgAAAABJRU5ErkJggg==",GlobalLayout_vue_vue_type_style_index_0_scoped_true_lang="",GlobalLayout_vue_vue_type_style_index_1_lang="";const minHeight=window.innerHeight-64-122,_sfc_main={name:"GlobalLayout",components:{HeaderAvatar,MenuLayout,GlobalFooter,BarChartOutlined,MenuFoldOutlined,MenuUnfoldOutlined},data(){return{minHeight:minHeight+"px",appMenuCollapsed:!1,rightAsideWidth:300}},computed:{},mounted(){this.dragChangeRightAsideWidth()},methods:{dragChangeRightAsideWidth:function(){let o=this.$refs.rightResize,t=this.$refs.rightResizeBar;o.onmousedown=a=>{let i=a.clientX;return o.style.background="#ccc",t.style.background="#aaa",o.left=o.offsetLeft,document.onmousemove=n=>{let l=n.clientX,s=i-l;(s<0&&this.rightAsideWidth<600||s>0&&this.rightAsideWidth>250)&&(i=l,this.rightAsideWidth-=s)},document.onmouseup=()=>{o.style.background="#fafafa",t.style.background="#ccc",document.onmousemove=null,document.onmouseup=null},!1}}}},_withScopeId=o=>(pushScopeId("data-v-588ebf9f"),o=o(),popScopeId(),o),_hoisted_1=_withScopeId(()=>createBaseVNode("div",{class:"logo"},[createBaseVNode("img",{src:_imports_0}),createBaseVNode("h1",null,"Swagger\u6587\u6863\u7BA1\u7406")],-1)),_hoisted_2={ref:"rightResize",class:"right-resize"},_hoisted_3={ref:"rightResizeBar"};function _sfc_render(o,t,a,i,n,l){const s=resolveComponent("menu-layout"),r=resolveComponent("a-layout-sider"),d=resolveComponent("MenuUnfoldOutlined"),p=resolveComponent("MenuFoldOutlined"),u=resolveComponent("a-col"),_=resolveComponent("header-avatar"),h=resolveComponent("a-row"),y=resolveComponent("a-layout-header"),g=resolveComponent("router-view"),m=resolveComponent("a-layout-content"),c=resolveComponent("a-layout");return openBlock(),createBlock(c,{class:"swagger-menu-trigger"},{default:withCtx(()=>[createVNode(r,{theme:"light",trigger:null,collapsible:"",collapsed:n.appMenuCollapsed,"onUpdate:collapsed":t[0]||(t[0]=C=>n.appMenuCollapsed=C),width:n.rightAsideWidth,style:{height:"100vh",overflow:"auto"}},{default:withCtx(()=>[_hoisted_1,createVNode(s,{collapsed:n.appMenuCollapsed},null,8,["collapsed"])]),_:1},8,["collapsed","width"]),withDirectives(createBaseVNode("div",_hoisted_2,[createBaseVNode("i",_hoisted_3,"...",512)],512),[[vShow,!n.appMenuCollapsed]]),createVNode(c,null,{default:withCtx(()=>[createVNode(y,{style:{"border-bottom":"2px solid #eee",background:"#fff",padding:"0","box-shadow":"0 1px 4px rgba(0, 21, 41, 0.08)","-webkit-box-shadow":"0 1px 4px rgba(0, 21, 41, 0.08)"}},{default:withCtx(()=>[createVNode(h,{type:"flex"},{default:withCtx(()=>[createVNode(u,{flex:"auto"},{default:withCtx(()=>[n.appMenuCollapsed?(openBlock(),createBlock(d,{key:0,class:"trigger",onClick:t[1]||(t[1]=C=>n.appMenuCollapsed=!n.appMenuCollapsed)})):(openBlock(),createBlock(p,{key:1,class:"trigger",onClick:t[2]||(t[2]=C=>n.appMenuCollapsed=!n.appMenuCollapsed)}))]),_:1}),createVNode(u,{flex:"400px",style:{"text-align":"right","padding-right":"20px"}},{default:withCtx(()=>[createVNode(_)]),_:1})]),_:1})]),_:1}),createVNode(m,{style:{height:"calc(100vh - 80px)",overflow:"auto",background:"#fff"}},{default:withCtx(()=>[createVNode(g)]),_:1})]),_:1})]),_:1})}var GlobalLayout=_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-588ebf9f"]]);export{GlobalLayout as default};