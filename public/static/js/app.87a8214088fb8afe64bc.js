webpackJsonp([7],{"/13X":function(t,e){},"4er+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("NYxO");var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header-wrap"},[n("h1",{staticClass:"title fl",staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.push("/")}}},[t._v("云笔记")]),t._v(" "),n("div",{staticClass:"btn-wrap fr"},[n("el-button",{staticClass:"btn",on:{click:t.handleWrite}},[t._v("\n        写笔记\n      ")])],1)])])},staticRenderFns:[]};var a={name:"",data:function(){return{articleData:[]}},components:{Header:n("VU/8")({name:"Header",data:function(){return{}},methods:{handleWrite:function(){this.$store.state.userInfo.username?this.$router.push("/writeNote"):this.$message.info("登录后才能发布笔记")}}},r,!1,function(t){n("/13X")},"data-v-112727f3",null).exports},methods:{}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("8h+L")},"data-v-685b05d8",null);e.default=o.exports},"8h+L":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={name:"App",components:{Layout:n("4er+").default}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("if5v")},null,null).exports,u=n("/ocq"),s=n("Y81h"),c=n.n(s);n("UVIz");r.default.use(u.a);var l={layout:function(){return new Promise(function(t){t()}).then(n.bind(null,"4er+"))},index:function(){return n.e(1).then(n.bind(null,"JXTs"))},register:function(){return n.e(5).then(n.bind(null,"NTb/"))},userEdit:function(){return n.e(2).then(n.bind(null,"Xh5x"))},userCenter:function(){return n.e(4).then(n.bind(null,"Jd6B"))},writeNote:function(){return n.e(0).then(n.bind(null,"Guuz"))},detail:function(){return n.e(3).then(n.bind(null,"fquS"))}},d=new u.a({routes:[{path:"/",name:"layout",component:l.layout,redirect:"/index",children:[{path:"index",name:"index",meta:{title:"云笔记首页"},component:l.index},{path:"register",name:"register",meta:{title:"云笔记注册"},component:l.register},{path:"userEdit/:id",name:"userEdit",meta:{title:"修改个人信息"},component:l.userEdit},{path:"userCenter",name:"userCenter",meta:{title:"用户中心"},component:l.userCenter},{path:"writeNote",name:"writeNote",meta:{title:"编写云笔记"},component:l.writeNote},{path:"editNote/:id",name:"editNote",meta:{title:"编辑云笔记"},component:l.writeNote},{path:"detail/:id",name:"detail",meta:{title:"笔记详情页"},component:l.detail}]}]});d.beforeEach(function(t,e,n){c.a.start(),t.meta.title&&(document.title=t.meta.title),n()}),d.afterEach(function(t,e){c.a.done()});var f=d,m=n("NYxO"),h=n("424j");r.default.use(m.a);var p=new m.a.Store({state:{userInfo:{email:"",avatar:"",username:"",id:""}},mutations:{CHANGE_userInfo:function(t,e){t.userInfo=e}},actions:{},plugins:[Object(h.a)({storage:{getItem:function(t){return sessionStorage.getItem(t)},setItem:function(t,e){return sessionStorage.setItem(t,e)},removeItem:function(t){return sessionStorage.removeItem(t)}}})]}),v=n("zL8q"),b=n.n(v),w=(n("tvR6"),n("//Fk")),g=n.n(w),_=n("mtWM"),N=n.n(_).a.create({baseURL:"",timeout:15e3}),x={get:function(t,e,n){return new g.a(function(r,a){N.get(t,{params:e},n).then(function(t){r(t.data)}).catch(function(t){a(t)})})},fetch:function(t,e,n,r){return new g.a(function(a,i){N[r](t,e,n).then(function(t){a(t.data)}).catch(function(t){i(t)})})},post:function(t,e,n){return this.fetch(t,e,n,"post")},delete:function(t,e,n){return this.fetch(t,e,n,"delete")},patch:function(t,e,n){return this.fetch(t,e,n,"patch")}};r.default.config.productionTip=!1,r.default.use(b.a),r.default.prototype.$axios=x,new r.default({el:"#app",router:f,store:p,components:{App:o},template:"<App/>"})},UVIz:function(t,e){},if5v:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.87a8214088fb8afe64bc.js.map