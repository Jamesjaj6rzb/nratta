import{r as e,c as a,w as t,o,a as s}from"./vendor.0502eb24.js";const c={name:"About",components:{},data:()=>({activePage:"doc"}),computed:{},mounted(){let e=this.$route.query.path,a=this.$store.state.docMap[e];a?this.$store.commit("addTableName",{key:this.$route.fullPath,val:a.name}):this.$message.error("没有找到对应的文档")},methods:{changePage(){}}};c.render=function(c,n,d,i,r,l){const m=e("a-tab-pane"),u=e("a-tabs");return o(),a(u,{activeKey:r.activePage,"onUpdate:activeKey":n[0]||(n[0]=e=>r.activePage=e),closable:"",onTabClick:l.changePage,style:{padding:"5px 10px 0"}},{default:t((()=>[s(m,{tab:"接口说明",key:"doc"}),s(m,{tab:"在线调试",key:"debug"})])),_:1},8,["activeKey","onTabClick"])};export{c as default};
