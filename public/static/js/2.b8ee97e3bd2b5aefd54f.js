webpackJsonp([2],{"44TK":function(t,e){},"5rlG":function(t,e){},JXTs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-wrap clearfix"},[e("img",{attrs:{src:"/static/imgs/banner.jpg"}}),this._v(" "),e("div",{staticClass:"desc"},[this._v("火星人都会用的云笔记")])])}]};var o=a("VU/8")({name:"Banner",data:function(){return{}},components:{},methods:{}},r,!1,function(t){a("5rlG")},"data-v-6bc1b79c",null).exports,i=a("NYxO"),l={name:"UserBox",data:function(){return{formData:{username:"",email:"",avatar:""}}},components:{},methods:{handleLogin:function(){var t=this;this.$axios.post("/login",this.formData).then(function(e){console.log(e),200==e.code?(t.$message.success(e.msg),t.$store.commit("CHANGE_userInfo",{id:e.userData.id,username:e.userData.username,avatar:e.userData.avatar,email:e.userData.email})):t.$message.error(e.msg)})},handleLogout:function(){var t=this;this.$axios.delete("/logout").then(function(e){var a={avatar:"",email:"",username:"",id:""};200==e.code?(t.$message.success(e.msg),t.$store.commit("CHANGE_userInfo",a),t.$router.push("/index")):(t.$store.commit("CHANGE_userInfo",a),t.$message.info(e.msg),t.$router.push("/index"))})},handleCommand:function(t){if(1==t){var e=this.$store.state.userInfo.id;this.$router.push("/userEdit/"+e)}else 2==t?this.$router.push("/userCenter"):3==t&&this.$router.push("/searchNote")},refreshUserData:function(){var t=this,e=this.$store.state.userInfo.id;this.$axios.get("/user/"+e).then(function(e){var a={avatar:e.data.avatar,email:e.data.email,username:e.data.username,id:e.data._id};t.$store.commit("CHANGE_userInfo",a)})}},computed:s()({},Object(i.b)(["userInfo"])),created:function(){this.$store.state.userInfo.username&&this.refreshUserData()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap clearfix"},[t.userInfo.username?a("div",{staticClass:"user-box"},[a("div",{staticClass:"user-box-item user-icon"},[a("el-dropdown",{attrs:{trigger:"hover"},on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{staticClass:"avatar",attrs:{src:t.userInfo.avatar}})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"1"}},[t._v("修改信息")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"2"}},[t._v("用户中心")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"3"}},[t._v("查找笔记")])],1)],1)],1),t._v(" "),a("div",{staticClass:"name-wrap"},[t._v("\n      用户："+t._s(t.userInfo.username)+"\n    ")]),t._v(" "),a("div",{staticClass:"email-wrap"},[t._v("\n      email："+t._s(t.userInfo.email)+"\n    ")]),t._v(" "),a("div",[a("el-button",{staticClass:"btn-logout",attrs:{type:"warning"},on:{click:t.handleLogout}},[t._v("退出登录")])],1)]):a("div",{staticClass:"login-box"},[a("div",{staticClass:"item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"item"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.handleLogin}},[t._v("登录")])],1),t._v(" "),a("div",{staticClass:"item"},[a("el-button",{staticClass:"btn",on:{click:function(e){t.$router.push("/register")}}},[t._v("注册")])],1)])])},staticRenderFns:[]};var u={name:"index",data:function(){return{articleData:[],page:1,total:0,loading:!1}},components:{Banner:o,UserBox:a("VU/8")(l,c,!1,function(t){a("qAzO")},"data-v-50e22c13",null).exports},methods:{getArticleData:function(){var t=this;this.loading=!0,this.$axios.get("/article",{page:this.page}).then(function(e){t.loading=!1,t.total=e.total,t.articleData=e.data.map(function(t){var e=new Date(t.createdTime),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),r=e.getHours();return t.date=a+"年"+n+"月"+s+"日"+r+"时",t})}).catch(function(e){t.loading=!1})},jumpContent:function(t){this.$router.push("/detail/"+t)},editNote:function(t){this.$router.push("/editNote/"+t)},addCategory:function(){var t=this;this.$prompt("请输入分类标题","添加分类",{confirmButtonText:"添加",cancelButtonText:"取消"}).then(function(e){console.log(e.value),t.$axios.post("/category",{name:e.value}).then(function(e){200==e.code&&t.$message.success(e.msg)})}).catch(function(){t.$message({type:"info",message:"取消添加"})})},deleteNote:function(t){var e=this;this.$confirm("此操作将永久删除该笔记, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.delete("/article/"+t).then(function(t){e.$message.success(t.msg),e.getArticleData()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},pageChange:function(t){this.page=t,this.getArticleData()}},created:function(){this.getArticleData()},computed:s()({},Object(i.b)(["userInfo"]))},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-box"},[a("div",{staticClass:"left-box"},[a("Banner",{staticClass:"fl"}),t._v(" "),a("UserBox",{staticClass:"fr"})],1)]),t._v(" "),t.userInfo.username?a("div",{staticClass:"bottom-box"},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("笔记列表")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.addCategory}},[a("i",{staticClass:"el-icon-circle-plus"}),t._v("添加笔记分类\r\n        ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}],attrs:{border:"",data:t.articleData,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[a("el-table-column",{attrs:{label:"标题",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"作者"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"table-item-img",attrs:{src:t.row.author.avatar}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类",prop:"category.name"}}),t._v(" "),a("el-table-column",{attrs:{label:"阅读量",prop:"readnums"}}),t._v(" "),a("el-table-column",{attrs:{label:"发布时间",prop:"date"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.jumpContent(e.row._id)}}},[t._v("\r\n              查看内容\r\n            ")]),t._v(" "),a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(a){t.editNote(e.row._id)}}},[t._v("\r\n              编辑笔记\r\n            ")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.deleteNote(e.row._id)}}},[t._v("\r\n              删除笔记\r\n            ")])]}}])})],1),t._v(" "),a("div",{staticClass:"page-wrap"},[a("el-pagination",{attrs:{background:"","page-size":5,layout:"prev, pager, next",total:t.total},on:{"current-change":t.pageChange}})],1)],1)],1):t._e()])},staticRenderFns:[]};var m=a("VU/8")(u,d,!1,function(t){a("44TK")},"data-v-7fdd6bd8",null);e.default=m.exports},qAzO:function(t,e){}});
//# sourceMappingURL=2.b8ee97e3bd2b5aefd54f.js.map