webpackJsonp([5],{"6jnQ":function(e,t){},"NTb/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"",data:function(){return{formData:{username:"",email:"",password:""}}},components:{},methods:{handleRegister:function(){var e=this;this.$axios.post("/register",this.formData).then(function(t){200==t.code?(e.$message.success(t.msg),setTimeout(function(){e.$router.push("/index")},500)):t.err?e.$message.error(t.err):e.$message.error(t.msg)})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("h2",[e._v("新用户注册")]),e._v(" "),a("div",{staticClass:"item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||e.$set(e.formData,"username",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.formData.password},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleRegister(t):null},input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"item"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.handleRegister}},[e._v("注册")])],1)])},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(e){a("6jnQ")},"data-v-0ed66105",null);t.default=o.exports}});
//# sourceMappingURL=5.0e2ff66899fd2c0c7c77.js.map