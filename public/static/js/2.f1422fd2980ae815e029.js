webpackJsonp([2],{Xh5x:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("mtWM"),r=e.n(s),n={name:"",props:{value:{type:String}},data:function(){return{formData:{token:""},imgUrl:this.value}},components:{},methods:{getToken:function(){var t=this;r.a.get("http://upload.yaojunrong.com/getToken").then(function(a){200==a.data.code&&(t.formData.token=a.data.data)})},handleSuccess:function(t){this.imgUrl=t.url,this.$emit("input",this.imgUrl)}},watch:{value:function(t){this.imgUrl=t}},created:function(){this.getToken()}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":this.handleSuccess,data:this.formData}},[this.imgUrl?a("img",{staticClass:"avatar",attrs:{src:this.imgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},staticRenderFns:[]};var i={name:"",data:function(){return{formData:{username:"",avatar:"",desc:"",password:"",email:""}}},components:{upload:e("VU/8")(n,o,!1,function(t){e("ZDnq")},null,null).exports},methods:{getEditData:function(){var t=this,a=this.$route.params.id;this.$axios.get("/user/"+a).then(function(a){t.formData=a.data})},handleSave:function(){var t=this,a=this.$route.params.id;this.$axios.patch("/user/"+a,this.formData).then(function(a){200==a.code?(t.$message.success(a.msg),t.$router.push("/index")):t.$message.error("请求有误")})}},created:function(){this.getEditData()}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-edit"},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n      修改个人信息\n    ")]),t._v(" "),e("div",{staticClass:"form-wrap"},[e("el-form",{attrs:{data:t.formData,"label-width":"80px","label-position":"left"}},[e("el-form-item",{attrs:{label:"头像"}},[e("upload",{model:{value:t.formData.avatar,callback:function(a){t.$set(t.formData,"avatar",a)},expression:"formData.avatar"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"用户名"}},[e("el-input",{model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"密码"}},[e("el-input",{attrs:{type:"password"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"描述"}},[e("el-input",{model:{value:t.formData.desc,callback:function(a){t.$set(t.formData,"desc",a)},expression:"formData.desc"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"邮箱"}},[e("el-input",{attrs:{disabled:""},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"warning"},on:{click:t.handleSave}},[t._v("保存")])],1)],1)],1)])],1)},staticRenderFns:[]};var c=e("VU/8")(i,l,!1,function(t){e("lNbV")},"data-v-8866f1a8",null);a.default=c.exports},ZDnq:function(t,a){},lNbV:function(t,a){}});
//# sourceMappingURL=2.f1422fd2980ae815e029.js.map