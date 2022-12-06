(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073e4e5b"],{"159b":function(e,t,r){var i=r("da84"),s=r("fdbc"),a=r("17c2"),o=r("9112");for(var n in s){var c=i[n],l=c&&c.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(e,t,r){"use strict";var i=r("b727").forEach,s=r("b301");e.exports=s("forEach")?function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},2352:function(e,t,r){},4049:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-group-vue"},[r("el-breadcrumb",{staticStyle:{padding:"20px 10px"},attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v("分组管理")])],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"group-box page-scroll-box"},[r("el-popover",{attrs:{placement:"bottom",width:"300",trigger:"click"},model:{value:e.createUserGroupVisible,callback:function(t){e.createUserGroupVisible=t},expression:"createUserGroupVisible"}},[r("el-tag",{staticClass:"group-item",attrs:{slot:"reference"},on:{click:function(e){}},slot:"reference"},[r("div",{staticStyle:{"text-align":"center"}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 创建分组")])]),r("div",[r("el-input",{staticStyle:{width:"220px","margin-right":"10px"},attrs:{placeholder:"请输入新的分组名称"},model:{value:e.editGroupName,callback:function(t){e.editGroupName=t},expression:"editGroupName"}}),r("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.createUserGroup}},[e._v("创建")])],1)],1),e._l(e.userGroupList,(function(t){return r("el-tag",{staticClass:"group-item",attrs:{type:t.id==e.checkedUserGroupId?"warning":"info"},on:{click:function(r){return e.loadUserGroupRelation(t.id)}},nativeOn:{dblclick:function(e){t.edit=!0}}},[t.edit?r("el-input",{staticClass:"group-name-input",attrs:{size:"mini"},on:{blur:function(r){return e.updateUserGroup(t)}},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserGroup(t)}},model:{value:t.editName,callback:function(r){e.$set(t,"editName",r)},expression:"item.editName"}},[e._v(e._s(t.name))]):r("span",[e._v(e._s(t.name))]),r("el-popconfirm",{attrs:{title:"确定要删除此分组吗？"},on:{confirm:function(r){return e.removeUserGroup(t.id)}}},[r("i",{staticClass:"el-tag__close el-icon-close",attrs:{slot:"reference"},slot:"reference"})])],1)}))],2)]),r("el-col",{attrs:{span:18}},[e.checkedUserGroupId>0?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.searchLoading,expression:"searchLoading"}],staticClass:"page-scroll-box"},[r("div",{staticStyle:{"margin-bottom":"10px"}},[r("el-button",{attrs:{size:"mini",plain:"",type:"primary",icon:"el-icon-plus"},on:{click:e.showChoiceUserDialog}},[e._v("添加用户")])],1),r("el-table",{staticStyle:{width:"100%","margin-bottom":"5px"},attrs:{data:e.userGroupRelationList,border:"","max-height":e.tableHeight}},[r("el-table-column",{attrs:{prop:"id",label:"编号",width:"60"}}),r("el-table-column",{attrs:{prop:"userNo",label:"账号"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),r("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),r("el-table-column",{attrs:{label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0==t.row.sex?"女":"男"))]}}],null,!1,1138127522)}),r("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",plain:"",type:"danger"},on:{click:function(r){return e.removeUserRelationFromList(t.row.id)}}},[e._v("移除")])]}}],null,!1,1988185234)})],1)],1):e._e()])],1),r("el-dialog",{attrs:{title:"添加用户到分组",visible:e.choiceUserVisible,width:"600px"},on:{"update:visible":function(t){e.choiceUserVisible=t},close:e.closeChoiceUserDialog}},[r("el-row",[r("el-select",{staticStyle:{width:"450px","margin-right":"10px"},attrs:{filterable:"",remote:"","reserve-keyword":"",autoComplete:"new-password",placeholder:"请输入名字、邮箱、账号搜索用户","remote-method":e.getSearchUserList,loading:e.searchUserLoading},model:{value:e.searchAddNewUser,callback:function(t){e.searchAddNewUser=t},expression:"searchAddNewUser"}},e._l(e.searchUserList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.userName,value:e.id}})})),1),r("el-button",{on:{click:e.addSearchChoiceUser}},[e._v("添加")])],1),r("div",{staticStyle:{margin:"10px 0"}},e._l(e.searchAddUserList,(function(t){return r("el-tag",{key:t.userId,staticStyle:{"margin-right":"10px"},attrs:{closable:"",type:"info"},on:{close:function(r){return e.removeUserRelationFromSearch(t.userId)}}},[e._v(" "+e._s(t.userName)+" ")])})),1)],1)],1)},s=[],a=(r("4de4"),r("7db0"),r("4160"),r("b0c0"),r("159b"),r("3099")),o={data:function(){return{searchLoading:!1,editUserDialogVisible:!1,editUserAuthDialogVisible:!1,totalCount:0,searchParam:{type:1,keyword:""},searchResultList:[],roleOptions:[{value:"管理员"}],editUserForm:{},allUserAuth:[],editUserAuth:[],userGroupRelationList:[],userGroupList:[],editGroupName:"",checkedUserGroupId:"",createUserGroupVisible:!1,choiceUserVisible:!1,searchAddUserList:[],searchUserList:[],searchAddNewUser:"",searchUserLoading:!1,tableHeight:document.body.clientHeight-250}},mounted:function(){this.getUserGroupList()},methods:{getUserGroupList:function(){var e=this;this.userGroupList=[],a["a"].userGroupList().then((function(t){var r=t.data||[];r.forEach((function(e){e.edit=!1,e.checked=!1,e.editName=e.name})),e.userGroupList=r}))},loadUserGroupRelation:function(e,t){var r=this;(t||e!=this.checkedUserGroupId)&&(this.checkedUserGroupId=e,this.searchLoading=!0,a["a"].userGroupRelationList({groupId:e}).then((function(e){r.searchLoading=!1,r.userGroupRelationList=e.data||[]})))},updateUserGroup:function(e){if(e.name!=e.editName){var t={id:e.id,name:e.editName};a["a"].updateUserGroup(t).then((function(t){e.edit=!1,e.name=e.editName}))}else e.edit=!1},createUserGroup:function(){var e=this,t={name:this.editGroupName};a["a"].updateUserGroup(t).then((function(t){e.editGroupName="",e.createUserGroupVisible=!1,e.getUserGroupList()}))},removeUserGroup:function(e){var t=this;a["a"].deleteUserGroup({id:e}).then((function(e){t.checkedUserGroupId="",t.getUserGroupList()}))},closeChoiceUserDialog:function(){this.loadUserGroupRelation(this.checkedUserGroupId,!0)},showChoiceUserDialog:function(){var e=this;this.choiceUserVisible=!0,this.searchAddUserList=[],this.userGroupRelationList.forEach((function(t){e.searchAddUserList.push({userName:t.userName,userId:t.id})}))},getSearchUserList:function(e){var t=this;e&&(this.searchUserLoading=!0,a["a"].searchUserInfoList({search:e}).then((function(e){t.searchUserList=e.data||[],t.searchUserLoading=!1})))},removeUserRelationFromSearch:function(e){var t=this,r={groupId:this.checkedUserGroupId,userId:e};a["a"].removeUserGroupRelation(r).then((function(r){t.searchAddUserList=t.searchAddUserList.filter((function(t){return t.userId!=e}))}))},removeUserRelationFromList:function(e){var t=this,r={groupId:this.checkedUserGroupId,userId:e};a["a"].removeUserGroupRelation(r).then((function(e){t.loadUserGroupRelation(t.checkedUserGroupId,!0)}))},addSearchChoiceUser:function(){var e=this;if(this.searchAddNewUser.length<=0)this.$message.warning("请先选择用户");else if(this.searchAddUserList.find((function(t){return t.userId==e.searchAddNewUser})))this.searchAddNewUser="";else{var t=this.searchUserList.find((function(t){return t.id==e.searchAddNewUser})).userName,r={groupId:this.checkedUserGroupId,userId:this.searchAddNewUser};a["a"].updateUserGroupRelation(r).then((function(r){e.searchAddUserList.push({userName:t,userId:e.searchAddNewUser})})),this.searchAddNewUser=""}}}},n=o,c=(r("71a4"),r("2877")),l=Object(c["a"])(n,i,s,!1,null,null,null);t["default"]=l.exports},4160:function(e,t,r){"use strict";var i=r("23e7"),s=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"71a4":function(e,t,r){"use strict";var i=r("2352"),s=r.n(i);s.a},"7db0":function(e,t,r){"use strict";var i=r("23e7"),s=r("b727").find,a=r("44d2"),o="find",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),i({target:"Array",proto:!0,forced:n},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);