(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0741282a"],{"40c0":function(e,t,n){},9231:function(e,t,n){"use strict";var a=n("40c0"),r=n.n(a);r.a},ac2a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"login-background linear-gradient-"+e.bgImgRandom},[n("div",{staticClass:"login-box"},[n("el-form",{ref:"loginParam",staticClass:"demo-ruleForm login-container",attrs:{model:e.loginParam,rules:e.loginRules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("文档管理-系统登录")]),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginSubmit(t)}},model:{value:e.loginParam.username,callback:function(t){e.$set(e.loginParam,"username",t)},expression:"loginParam.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginSubmit(t)}},model:{value:e.loginParam.password,callback:function(t){e.$set(e.loginParam,"password",t)},expression:"loginParam.password"}})],1),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loginLoading},nativeOn:{click:function(t){return t.preventDefault(),e.loginSubmit(t)}}},[e._v("登录")])],1)],1)],1),e._m(0)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"power-by"},[e._v("Powered By "),n("a",{attrs:{target:"_blank",href:"https://gitee.com/zyplayer/zyplayer-doc"}},[e._v("zyplayer-doc")])])}],o=n("3099"),i={data:function(){return{loginLoading:!1,redirect:"",loginParam:{username:"",password:""},loginRules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},bgImgRandom:Math.ceil(5*Math.random())}},mounted:function(){this.redirect=this.$route.query.redirect},methods:{loginSubmit:function(){var e=this;this.$refs.loginParam.validate((function(t){t&&(e.loginLoading=!0,o["a"].userLogin(e.loginParam).then((function(){e.loginLoading=!1,e.redirect?location.href=decodeURIComponent(e.redirect):e.$router.back()})).catch((function(t){console.log("登录失败",t),e.loginLoading=!1})))}))}}},l=i,s=(n("9231"),n("2877")),u=Object(s["a"])(l,a,r,!1,null,null,null);t["default"]=u.exports}}]);