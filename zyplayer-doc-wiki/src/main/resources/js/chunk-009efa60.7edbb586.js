(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-009efa60"],{a190:function(e,a,t){},da3f:function(e,a,t){"use strict";var i=t("a190"),s=t.n(i);s.a},f33f:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-share-view-vue"},[t("el-row",{attrs:{type:"border-card"}},[t("div",{staticStyle:{"max-width":"950px",margin:"0 auto"}},[t("div",{staticClass:"wiki-title"},[e._v(e._s(e.wikiPage.name))]),t("div",{staticClass:"wiki-author"},[t("span",{directives:[{name:"show",rawName:"v-show",value:!e.wikiPage.updateTime,expression:"!wikiPage.updateTime"}]},[e._v("创建时间："+e._s(e.wikiPage.createTime))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.wikiPage.updateTime,expression:"wikiPage.updateTime"}]},[e._v("最后修改："+e._s(e.wikiPage.updateTime))])]),t("div",{staticClass:"wiki-files"},[t("el-table",{directives:[{name:"show",rawName:"v-show",value:e.pageFileList.length>0,expression:"pageFileList.length > 0"}],staticStyle:{width:"100%","margin-bottom":"5px"},attrs:{data:e.pageFileList,border:""}},[t("el-table-column",{attrs:{label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{target:"_blank",href:a.row.fileUrl}},[e._v(e._s(a.row.fileName))])]}}])}),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180px"}}),t("el-table-column",{attrs:{prop:"downloadNum",label:"下载次数",width:"80px"}})],1)],1),t("div",{staticClass:"wiki-content w-e-text"},[t("div",{domProps:{innerHTML:e._s(e.pageContent.content)}})])])])],1)},s=[],n=(t("b0c0"),t("0a79")),o={data:function(){return{spaceUuid:"",nowPageId:"",wikiPage:{},pageContent:{},pageFileList:[]}},beforeRouteUpdate:function(e,a,t){this.initQueryParam(e),t()},mounted:function(){this.initQueryParam(this.$route)},methods:{loadPageDetail:function(e){var a=this,t={pageId:e,space:this.spaceUuid};n["a"].openPageDetail(t).then((function(e){var t=e.data.wikiPage||{};t.selfZan=e.data.selfZan||0,a.wikiPage=t,a.pageContent=e.data.pageContent||{},a.pageFileList=e.data.fileList||[],document.title=t.name||"WIKI-内容展示"}))},initQueryParam:function(e){this.spaceUuid=e.query.space,this.nowPageId=e.query.pageId,this.nowPageId&&this.loadPageDetail(this.nowPageId)}}},l=o,r=(t("da3f"),t("2877")),d=Object(r["a"])(l,i,s,!1,null,null,null);a["default"]=d.exports}}]);