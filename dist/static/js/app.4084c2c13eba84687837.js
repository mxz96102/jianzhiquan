webpackJsonp([0],[,function(t,e,a){"use strict";var n=a(4),s=a.n(n),o=s.a.create({baseURL:"http://job.4nian.cc/com.cn.plurality/"});e.a=o},,function(t,e,a){t.exports=a.p+"static/img/logo.6ed7bad.png"},,,function(t,e,a){a(69);var n=a(0)(a(34),a(106),"data-v-7cc13d71",null);t.exports=n.exports},,,,,,,function(t,e,a){"use strict";var n=a(7),s=a(109),o=a(74),i=a.n(o),l=a(76),c=a.n(l),r=a(75),u=a.n(r),v=a(73),d=a.n(v),m=a(81),_=a.n(m),f=a(77),p=a.n(f),h=a(78),b=a.n(h),g=a(88),C=a.n(g),j=a(89),y=a.n(j),E=a(79),x=a.n(E),S=a(80),N=a.n(S),k=a(87),$=a.n(k),w=a(86),L=a.n(w),B=a(84),M=a.n(B),P=a(85),R=a.n(P),U=a(83),O=a.n(U),T=a(82),I=a.n(T);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"index",component:i.a},{path:"/register",name:"register",component:c.a},{path:"/register/:phonenum",name:"register",component:c.a},{path:"/login",name:"login",component:u.a},{path:"/login/:phonenum",name:"login",component:u.a},{path:"/complete",name:"complete",component:d.a},{path:"/job/info/:id",name:"jobInfo",component:p.a},{path:"/my/job/list",name:"myjobList",component:y.a},{path:"/my/job/info/:id",name:"myjobInfo",component:C.a},{path:"/job/list",name:"jobList",component:b.a},{path:"/balance",name:"balance",component:x.a},{path:"/balance/check",name:"balanceCheck",component:N.a},{path:"/center/job/:id",name:"jobManage",component:$.a},{path:"/class/manage/:id",name:"classManage",component:L.a},{path:"/class/add",name:"classAdd",component:I.a},{path:"/class/info/:id/:name",name:"classInfo",component:M.a},{path:"/class/bargin/:id/:type",name:"classBargin",component:O.a},{path:"/class/",name:"classList",component:R.a},{path:"/center",name:"center",component:_.a}]})},function(t,e,a){a(55);var n=a(0)(a(33),a(92),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(7),s=a(14),o=a.n(s),i=a(13);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(52);a.n(n);e.default={name:"navbar",data:function(){return{location:window.location}}}},function(t,e,a){"use strict";function n(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];for(var n=0;n<e.length;n++)e[n]=document.getElementsByName(e[n])[0].value;return e}function s(t){for(var e=arguments.length,a=Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];for(var s=0;s<t.length;s++)if(t[s].length<a[s])return alert("请正确填写信息"),!1;return!0}Object.defineProperty(e,"__esModule",{value:!0});var o=a(1);e.default={name:"",data:function(){return o.a.post("user/userInfo").then(function(t){console.log(t),"401"===t.data.code?(alert("请登录"),location.hash="/"):o.a.get("/uni/allColleage?uniid="+t.data.result.uniid).then(function(t){"SUCCESS"===t.data.msg&&(__this.colleageList=t.data.result)})}),{colleageList:[],dormList:[]}},methods:{toOne:function(){document.getElementsByClassName("step-zero")[0].className+=" hidden",document.getElementsByClassName("step-one")[0].className="step-one"},toTwo:function(){s(n("name","qq"),2,5)&&(document.getElementsByClassName("step-one")[0].className+=" hidden",document.getElementsByClassName("step-two")[0].className="step-two")},toThree:function(){var t=[];s(n("class","dorm","college"),1,4,2)&&(t=n("name","qq","gender","class","dorm","grade","college"),o.a.get("/user/insertInfo?username="+t[0]+"&qq="+t[1]+"&sex="+t[2]+"&clazz="+t[3]+"&dorm="+t[4]+"&grade="+t[5]+"&colleage="+t[6]).then(function(t){"SUCCESS"===t.data.msg?location.hash="/center":alert("信息错误，请重试")}).catch(function(t){alert("请求错误")}))},toEnd:function(){}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"index",data:function(){return{}},methods:{checkUser:function(){var t=[document.getElementsByClassName("phone-passwd")[0],document.getElementsByClassName("form-input")[1],document.getElementsByClassName("form-input")[0]],e=(t[0],t[1],t[2]);/^1[34578]\d{9}$/.test(e.value)?n.a.get("auth/isRegistered?phonenum="+e.value,{phonenum:""}).then(function(t){"TRUE"===t.data.msg?location.hash="#/login/"+e.value:location.hash="#/register/"+e.value}).catch(function(t){alert("请求错误"),console.log(t)}):alert("请输入正确的手机号码")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"login",data:function(){return{}},methods:{toggle:function t(){var e=[document.getElementsByClassName("phone-passwd")[0],document.getElementsByClassName("form-input")[1],document.getElementsByClassName("login-toggle")[0]],a=e[0],n=e[1],t=e[2];"form-input"===n.className?(n.className="form-input hidden",a.className="phone-passwd",t.innerHTML="使用密码登录"):(n.className="form-input",a.className="phone-passwd hidden",t.innerHTML="使用验证码登录")},phoneCount:function(){var t=document.getElementsByClassName("phone-passwd")[0],e=document.getElementsByClassName("form-input")[0],a=t.getElementsByTagName("button")[0],s=60;if(!/^1[34578]\d{9}$/.test(e.value))return void alert("请输入正确的手机号码");if("获取验证码"===a.innerHTML){n.a.get("/auth/code?phonenum="+e.value),function t(){s--,a.innerHTML="请等待"+s+"s",s>0?setTimeout(t,1e3):a.innerHTML="获取验证码"}()}},loginUser:function(){var t=[document.getElementsByClassName("phone-passwd")[0],document.getElementsByClassName("form-input")[1],document.getElementsByClassName("form-input")[0]],e=(t[0],t[1]),a=t[2];/^1[34578]\d{9}$/.test(a.value)?"form-input"===e.className?e.value?n.a.get("auth/login?phonenum="+a.value+"&credential="+e.value,{}).then(function(t){"SUCCESS"===t.data.msg?location.hash="#/center":alert("请检查手机号和密码")}).catch(function(t){alert("请求错误"),console.log(t)}):alert("请输入密码"):document.getElementsByClassName("phone-passwd-input")[0].value?n.a.get("auth/login?phonenum="+a.value+"&code="+document.getElementsByClassName("phone-passwd-input")[0].value,{}).then(function(t){"SUCCESS"===t.data.msg?location.hash="#/center":alert("请检查手机号和验证码")}).catch(function(t){alert("请求错误"),console.log(t)}):alert("请输入验证码"):alert("请输入正确的手机号码")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=!0;e.default={name:"register",data:function(){var t=[{uniname:"loading...",id:"1"}],e=this;return n.a.get("/uni/allUniversity").then(function(t){"SUCCESS"===t.data.msg&&(e.schoolList=t.data.result,console.log(e.schoolList))}),{schoolList:t}},methods:{phoneCount:function(){var t=document.getElementsByClassName("phone-passwd")[0],e=document.getElementsByClassName("form-input")[0],a=t.getElementsByTagName("button")[0],s=60;if(!/^1[34578]\d{9}$/.test(e.value))return void alert("请输入正确的手机号码");if("获取验证码"===a.innerHTML){n.a.get("/auth/code?phonenum="+e.value),function t(){s--,a.innerHTML="请等待"+s+"s",s>0?setTimeout(t,1e3):a.innerHTML="获取验证码"}()}},nextStep:function(){var t=[document.getElementsByClassName("phone-passwd")[0],document.getElementsByClassName("form-input")[1],document.getElementsByClassName("form-input")[0]],e=t[0],a=t[1],o=t[2];if(!/^1[34578]\d{9}$/.test(o.value))return void alert("请输入正确的手机号码");s?e.getElementsByTagName("input")[0].value?function(){var t=document.getElementsByClassName("register-complete")[0];o.disabled=!0,t.className="register-complete",e.className+=" hidden",s=!1}():alert("请输入验证码"):a.value.length<9?alert("密码长度最少是9"):n.a.get("auth/register?phonenum="+o.value+"&credential="+a.value+"&code="+e.getElementsByTagName("input")[0].value+"&uniid="+document.getElementsByTagName("select")[0].value).then(function(t){t.data;"SUCCESS"===t.data.msg?location.hash="#/complete":t.data.msg.includes("code")?(alert("验证码错误，请重试"),location.reload()):alert("该号码已注册，请重试")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"myjobInfo",data:function(){var t=this;return n.a.get("/job/getInfo?id="+this.$route.params.id).then(function(e){"401"===e.data.code||(t.job=e.data.result)}).catch(function(t){alert("请求错误")}),{job:{}}},methods:{applyJob:function(){n.a.get("job/apply?id="+this.$route.params.id).then(function(t){"401"===t.data.code?(alert("请注册或登录"),location.hash="/?job="+__this.$route.params.id):"SUCCESS"===t.data.msg?alert("申请成功"):alert("人数已满或者你已经申请。"),location.reload()}).catch(function(t){alert("请求错误")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),s=a.n(n),o=a(1);e.default={name:"jobList",data:function(){var t=this;return o.a.get("/job/getAvailableJob").then(function(e){"401"===e.data.code?(alert("请登录"),location.hash="/"):"SUCCESS"===e.data.msg&&(t.jobs=e.data.result)}).catch(function(t){alert("请求错误")}),{jobs:[{jobname:"暂时没有工作"}],state:{WANTING:"招募中",WORKING:"兼职中",ENDED:"已结束"},location:location}},components:{navbar:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"",data:function(){var t=this;return n.a.get("account/accountInfo").then(function(e){"SUCCESS"===e.data.msg&&(t.balance=e.data.result)}),n.a.get("/account/tradeList").then(function(e){"SUCCESS"===e.data.msg&&(t.infos=e.data.result)}),{infos:[],balance:{},location:location,allstate:{HANDLING:"处理中",DONE:"已处理",REFUSED:"已拒绝"}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"balanceCheck",data:function(){},methods:{submit:function(){var t=document.getElementsByName("volume")[0].value,e=document.getElementsByName("discription")[0].value;confirm("金额："+t+"\n支付宝账号："+e+"\n你是否确认提现")&&n.a.get("/account/transferRequest?volume=-"+t+"&discription="+e).then(function(t){"401"===t.data.code?(alert("请登录"),location.hash="/"):"SUCCESS"===t.data.msg?alert("申请成功"):alert("余额不足，请检查余额后再继续"),history.back()}).catch(function(t){alert("请求错误")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=a(6),o=a.n(s);e.default={name:"",getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),n=a.exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},beforeCreate:function(){n.a.get("/user/checkUserInfo").then(function(t){"FALSE"===t.data.msg&&(alert("请完善信息"),location.hash="/complete")}).catch(function(t){alert("请求错误")}),""!==getParameterByName("job")&&(location.hash="#/job/info"+getParameterByName("job"))},data:function(){var t=this;return n.a.post("user/userInfo").then(function(e){console.log(e),"401"===e.data.code?(alert("请登录"),location.hash="/"):t.result=e.data.result}).catch(function(t){}),n.a.get("/user/figures").then(function(e){console.log(e),"SUCCESS"===e.data.msg&&(t.num=e.data.result)}),n.a.get("/party/partyInfo").catch(function(e){t.auth=!1}),{auth:!0,result:{username:"Loading",phonenum:"",school:"",university:{uniname:"Loading"}},location:window.location,num:{}}},components:{navbar:o.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"balanceCheck",data:function(){return n.a.post("user/userInfo").then(function(t){console.log(t),"401"===t.data.code?(alert("请登录"),location.hash="/"):n.a.get("/uni/allColleage?uniid="+t.data.result.uniid).then(function(t){"SUCCESS"===t.data.msg&&(__this.colleageList=t.data.result)})}),{colleageList:[]}},methods:{submit:function(){var t=document.getElementsByName("colleage")[0].value,e=document.getElementsByName("class")[0].value;n.a.get("/uni/createColleage?colleage="+t+"&class="+e).then(function(t){"401"===t.data.code?(alert("请登录"),location.hash="/"):"SUCCESS"===t.data.msg?(alert("添加成功"),history.back()):alert("请检查表单后重试"),history.back()}).catch(function(t){alert("请求错误")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"classBargin",data:function(){return{}},methods:{submit:function(){var t=document.getElementsByName("volume")[0].value,e=document.getElementsByName("discription")[0].value,a=document.getElementsByName("custom")[0].value;axios.get("/account/transferRequest?volume="+t+"&discription="+e+"&custom="+a+"&marketid="+this.$route.params.id+"&dealtype="+this.$route.params.type).then(function(t){"401"===t.data.code?alert("请登录"):"SUCCESS"===t.data.msg?(alert("提交成功"),window.history.back()):alert("申请失败，请尝试刷新后申请"),location.reload()}).catch(function(t){alert("请求错误")})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),s=a.n(n);e.default={name:"classInfo",data:function(){var t=this,e=void 0;return s.a.get("/job/getAllAtten?marketid="+t.$route.params.id).then(function(e){"SUCCESS"===e.data.msg&&(t.contacts=e.data.result)}).catch(function(t){}),s.a.get("/job/getAllNoteMessage?marketid="+t.$route.params.id).then(function(e){"SUCCESS"===e.data.msg&&(t.msgList=e.data.result)}).catch(function(t){}),s.a.get("/job/getAllDeal?marketid="+t.$route.params.id).then(function(a){if("SUCCESS"===a.data.msg)for(e=0;e<a.data.result.length;e++)switch(a.data.result[e].dealtype){case"PAPER":t.deals[0]=a.data.result[e];break;case"D_SCHOOL":t.deals[1]=a.data.result[e];break;case"T-SHIRT":t.deals[2]=a.data.result[e];break;case"MEETING":t.deals[3]=a.data.result[e]}t.deals=a.data.result}).catch(function(t){}),{deals:[{vomule:"loading"},{vomule:"loading"},{vomule:"loading"},{vomule:"loading"}],contacts:[{role:"loading"}],location:location,msgList:[{createtime:0,ownername:"loading",content:"loading..."}]}},methods:{send:function(){var t=document.getElementsByName("message")[0].value;s.a.get("/market/createNoteMessage?content="+t+"&marketid="+this.$route.params.id).then(function(t){"SUCCESS"===t.data.msg&&location.reload()})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"",data:function(){return n.a.get("/market/getAvailableColleage").then(function(t){t.data.msg}),{list:[{name:"Loading ..."}]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"classManage",data:function(){var t=this;return n.a.get("/market/getAvailableMarket").then(function(e){"SUCCESS"===e.data.msg&&(t.allclazz=e.data.result)}),{allclazz:[{colleage:"loading..."}],location:location}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),s=a.n(n);e.default={name:"jobManage",data:function(){return s.a.get(" /party/partyInfo").then(function(t){"SUCCESS"===t.data.msg&&(__this.info=t.data.result)}).catch(),s.a.get("/party/allMember?partyid="+this.$route.params.id).then(function(t){"SUCCESS"===t.data.msg&&(__this.men=t.data.result)}).catch(),s.a.post("user/userInfo").then(function(t){console.log(t),"401"===t.data.code?(alert("请登录"),location.hash="/"):__this.user=t.data.result.username}),{info:{},men:[],user:"Loading"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"jobInfo",data:function(){var t=this;return n.a.get("/job/getInfo?id="+this.$route.params.id).then(function(e){"401"===e.data.code?alert("请登录"):t.job=e.data.result}).catch(function(t){alert("请求错误")}),{job:{},location:location}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),s=a.n(n),o=a(1);e.default={name:"myjobList",data:function(){var t=this;return o.a.get("/user/userJob").then(function(e){"401"===e.data.code?(alert("请登录"),location.hash="/"):"SUCCESS"===e.data.msg&&(t.jobs=e.data.result)}).catch(function(t){alert("请求错误"),console.log(t)}),{jobs:[{jobname:"暂时没有工作"}],state:{WANTING:"招募中",WORKING:"兼职中",ENDED:"已结束"},location:location}},components:{navbar:s.a}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){a(67);var n=a(0)(a(35),a(104),"data-v-77d9dd2e",null);t.exports=n.exports},function(t,e,a){a(57);var n=a(0)(a(36),a(94),null,null);t.exports=n.exports},function(t,e,a){a(54);var n=a(0)(a(37),a(91),null,null);t.exports=n.exports},function(t,e,a){a(66);var n=a(0)(a(38),a(103),null,null);t.exports=n.exports},function(t,e,a){a(59);var n=a(0)(a(39),a(96),"data-v-447b8494",null);t.exports=n.exports},function(t,e,a){a(56);var n=a(0)(a(40),a(93),"data-v-1f81ad86",null);t.exports=n.exports},function(t,e,a){a(62);var n=a(0)(a(41),a(99),"data-v-56581890",null);t.exports=n.exports},function(t,e,a){a(63);var n=a(0)(a(42),a(100),"data-v-567bce23",null);t.exports=n.exports},function(t,e,a){a(65);var n=a(0)(a(43),a(102),"data-v-6cb4979e",null);t.exports=n.exports},function(t,e,a){a(61);var n=a(0)(a(44),a(98),"data-v-4c1f53a9",null);t.exports=n.exports},function(t,e,a){a(53);var n=a(0)(a(45),a(90),"data-v-07ef8e01",null);t.exports=n.exports},function(t,e,a){a(71);var n=a(0)(a(46),a(108),"data-v-e2a06554",null);t.exports=n.exports},function(t,e,a){a(64);var n=a(0)(a(47),a(101),"data-v-576cbd74",null);t.exports=n.exports},function(t,e,a){a(70);var n=a(0)(a(48),a(107),"data-v-b37662e6",null);t.exports=n.exports},function(t,e,a){a(60);var n=a(0)(a(49),a(97),"data-v-4b0ae049",null);t.exports=n.exports},function(t,e,a){a(58);var n=a(0)(a(50),a(95),"data-v-35dd3210",null);t.exports=n.exports},function(t,e,a){a(68);var n=a(0)(a(51),a(105),"data-v-7b770600",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"class-bargin"},[a("label",[t._v("交易金额:")]),a("input",{attrs:{name:"volume",type:"text"}}),t._v("元"),a("br"),t._v(" "),a("label",[t._v("描述:")]),a("input",{attrs:{name:"discription",type:"text"}}),a("br"),t._v(" "),a("label",[t._v("客户:")]),a("input",{attrs:{name:"custom",type:"text"}}),t._v(" "),a("button",{on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[t._m(0),t._v(" "),a("div",{staticClass:"login-form"},[a("input",{staticClass:"form-input",attrs:{placeholder:"请输入手机号码",type:"text",name:"phone"},domProps:{value:t.$route.params.phonenum}}),a("br"),t._v(" "),a("input",{staticClass:"form-input",attrs:{placeholder:"请输入密码",type:"password",name:"passwd",value:""}}),a("br"),t._v(" "),a("div",{staticClass:"phone-passwd hidden"},[a("input",{staticClass:"phone-passwd-input",attrs:{type:"text",name:"",value:""}}),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(e){t.phoneCount()}}},[t._v("获取验证码")]),a("br")]),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(e){t.loginUser()}}},[t._v("下一步")])]),t._v(" "),a("h1",{staticClass:"login-toggle",on:{click:function(e){t.toggle()}}},[t._v("使用验证码登录")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-large"},[n("img",{attrs:{src:a(3),alt:""}}),t._v(" "),n("h1",[t._v("兼职圈 靠自己")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{staticClass:"main-body"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-list"},[a("ul",t._l(t.jobs,function(e){return a("li",[a("div",{staticClass:"job-list-title",on:{click:function(){return t.location.hash="#/job/info/"+e.id}}},[t._v("\n      "+t._s(e.jobname)+"\n    ")]),t._v(" "),a("div",{staticClass:"job-list-state"},[t._v("\n      时间："+t._s(new Date(e.fromtime).toLocaleDateString())+"     "),a("span",[t._v(t._s(t.state[e.jobstate]))])])])})),t._v(" "),a("navbar")],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[t._m(0),t._v(" "),a("div",{staticClass:"index-form"},[a("input",{staticClass:"form-input",attrs:{placeholder:"请输入手机号码",type:"text",name:"phone"}}),a("br"),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(e){t.checkUser()}}},[t._v("下一步")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-large"},[n("img",{attrs:{src:a(3),alt:""}}),t._v(" "),n("h1",[t._v("兼职圈 靠自己")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-info"},[a("ul",{staticClass:"job-info-list"},[a("li",[t._m(0),a("div",{staticClass:"job-title job-info-content"},[t._v(t._s(t.job.jobname))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作日期")]),a("div",{staticClass:"job-info-content"},[t._v("从"+t._s(new Date(t.job.fromtime).toLocaleDateString())+"到"+t._s(new Date(t.job.untiltime).toLocaleDateString()))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("兼职时段")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.time))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作地点")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.place))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("招聘人数")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.workernumnow)+"/"+t._s(t.job.workernummax)+"人")])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作任务")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.description))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作要求")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.request))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-info-title"},[a("div",{staticClass:"job-label"},[t._v("兼职")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-info"},[a("ul",{staticClass:"job-info-list"},[a("li",[t._m(0),a("div",{staticClass:"job-title job-info-content"},[t._v(t._s(t.job.jobname))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作日期")]),a("div",{staticClass:"job-info-content"},[t._v("从"+t._s(new Date(t.job.fromtime).toLocaleDateString())+"到"+t._s(new Date(t.job.untiltime).toLocaleDateString()))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("兼职时段")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.time))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作地点")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.place))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("招聘人数")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.workernumnow)+"/"+t._s(t.job.workernummax)+"人")])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作任务")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.request))])]),t._v(" "),a("li",[a("div",{staticClass:"job-info-title"},[t._v("工作要求")]),a("div",{staticClass:"job-info-content"},[t._v(t._s(t.job.description))])])]),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(e){t.applyJob()}}},[t._v("马上申请兼职")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-info-title"},[a("div",{staticClass:"job-label"},[t._v("兼职")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-manage"},[a("h1",[t._v(t._s(t.user))]),t._v(" "),a("h2",[t._v(t._s(t.info.name)+"圈主")]),t._v(" "),a("p",[t._v("圈子id："+t._s(t.info.id))]),t._v(" "),a("p",[t._v("圈主id："+t._s(t.info.ownerid)+" ")]),t._v(" "),a("table",[t._m(0),t._v(" "),t._l(t.men,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.username))]),t._v(" "),a("td",[t._v(t._s(e.clazz))]),t._v(" "),a("td",[t._v(t._s(e.qq))]),t._v(" "),a("td",[t._v(t._s(e.dorm))])])})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("序号")]),t._v(" "),a("td",[t._v("姓名")]),t._v(" "),a("td",[t._v("班级")]),t._v(" "),a("td",[t._v("QQ号")]),t._v(" "),a("td",[t._v("宿舍")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"class-add"},[a("label",[t._v("学院")]),t._v(" "),a("select",{staticClass:"form-input",attrs:{name:"colleage"}},t._l(t.colleageList,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.colleagename))])})),t._v(" "),a("br"),t._v(" "),a("label",[t._v("班级")]),t._v(" "),a("input",{attrs:{type:"text",name:"class",value:""}}),a("br"),t._v(" "),a("button",{on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"balance"},[a("h1",[t._v("感谢这么努力的自己")]),t._v(" "),a("div",{staticClass:"balance-money"},[a("div",{staticClass:"balance-all"},[t._m(0),t._v(" "),a("div",{staticClass:"balance-num"},[t._v("\n        "+t._s(t.balance.earn)+"元\n      ")])]),t._v(" "),a("div",{staticClass:"balance-now"},[t._m(1),t._v(" "),a("div",{staticClass:"balance-num"},[t._v("\n        "+t._s(t.balance.balance)+"元\n      ")])])]),t._v(" "),a("div",{staticClass:"balance-button"},[a("button",{on:{click:function(){return t.location.hash="#/balance/check"}}},[t._v("提现到支付宝")]),t._v(" "),a("p",[t._v("3个工作日报账")])]),t._v(" "),a("ul",{staticClass:"balance-info"},t._l(t.infos,function(e){return a("li",[a("div",[t._v("\n        2016年8月19日 19:08 "),a("span",{staticClass:"balance-type"}),t._v(" "),a("span",{staticClass:"balance-list-num"},[t._v(t._s(e.volume)+"元")])]),t._v(" "),a("div",[t._v("\n        "+t._s(e.discription)),a("span",{staticClass:"balance-state"},[t._v(t._s(t.allstate[e.tradestate]))])])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"balance-title"},[a("p",[t._v("已挣金额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"balance-title"},[a("p",[t._v("钱包余额")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"balance-check"},[a("label",[t._v("提现金额:")]),a("input",{attrs:{name:"volume",type:"text"}}),t._v("元"),a("br"),t._v(" "),a("label",[t._v("支付宝账号:")]),a("input",{attrs:{name:"discription",type:"text"}}),a("br"),t._v(" "),a("button",{on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"class-list"},[a("ul",[t._m(0),t._v(" "),t._l(t.list,function(e){return a("li",{on:{click:function(){return t.location.hash="/class/manage/"+e.id}}},[a("h1",[t._v(t._s(e.name))]),a("i",{staticClass:"fa fa-angle-right"})])})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("h1",[t._v("学院选择")])])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center"},[a("div",{staticClass:"center-head"},[t._m(0),t._v(" "),a("div",{staticClass:"center-info"},[a("h1",{staticClass:"center-name"},[t._v(t._s(t.result.username))]),t._v(" "),a("p",[t._v("学校："+t._s(t.result.university.uniname))]),t._v(" "),a("p",[t._v("手机号："+t._s(t.result.phonenum))])])]),t._v(" "),a("ul",{staticClass:"center-list"},[a("li",{on:{click:function(){return t.location.hash="#/balance"}}},[t._v("\n      钱包余额 "),a("span",{staticClass:"center-list-im"},[t._v(t._s(t.num.balance)+"元")]),a("span",{staticClass:"center-list-less"},[t._v("明细/工资/提现")]),a("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),null!==t.result.party?a("li",{on:{click:function(){return t.location.hash="#/center/job/"+t.result.partyid}}},[t._v("\n          兼职管理 "),a("span",{staticClass:"center-list-im"},[t._v(t._s(t.num.memberNum)+"个")]),a("span",{staticClass:"center-list-less"},[t._v("人员/工作管理")]),a("i",{staticClass:"fa fa-angle-right"})]):t._e(),t._v(" "),null!==t.result.party?a("li",{on:{click:function(){return t.location.hash="#/class/"}}},[t._v("\n          班级管理 "),a("span",{staticClass:"center-list-im"},[t._v(t._s(t.num.colleageNum)+"个")]),a("span",{staticClass:"center-list-less"},[t._v("销售/班级管理")]),a("i",{staticClass:"fa fa-angle-right"})]):t._e()]),t._v(" "),a("navbar")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center-avatar"},[n("img",{attrs:{src:a(3),alt:""}})])}]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[t._m(0),t._v(" "),a("div",{staticClass:"register-form"},[a("input",{staticClass:"form-input",attrs:{placeholder:"请输入手机号码",type:"text",name:"phone"},domProps:{value:t.$route.params.phonenum}}),a("br"),t._v(" "),a("div",{staticClass:"register-complete hidden"},[a("input",{staticClass:"form-input",attrs:{placeholder:"请输入密码",type:"password",name:"passwd",value:""}}),a("br"),t._v(" "),a("select",{staticClass:"form-input",attrs:{name:""}},t._l(t.schoolList,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.uniname))])}))]),t._v(" "),a("div",{staticClass:"phone-passwd"},[a("input",{attrs:{type:"text",name:"",value:""}}),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(e){t.phoneCount()}}},[t._v("获取验证码")]),a("br")]),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(e){t.nextStep()}}},[t._v("下一步")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-large"},[n("img",{attrs:{src:a(3),alt:""}}),t._v(" "),n("h1",[t._v("兼职圈 靠自己")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"complete"},[a("div",{staticClass:"step-zero"},[t._m(0),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.toOne}},[t._v("去完善信息")])]),t._v(" "),a("div",{staticClass:"step-one hidden"},[a("h1",[t._v("很高兴认识你")]),t._v(" "),t._m(1),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.toTwo}},[t._v("下一步")])]),t._v(" "),a("div",{staticClass:"step-two hidden"},[a("div",{staticClass:"complete-form"},[a("label",[t._v("学院")]),t._v(" "),a("select",{staticClass:"form-input",attrs:{name:"colleage"}},t._l(t.colleageList,function(e){return a("option",{domProps:{value:e.colleagename}},[t._v(t._s(e.colleagename))])})),t._v(" "),a("br"),t._v(" "),a("label",[t._v("年级")]),t._v(" "),t._m(2),t._v(" "),a("br"),t._v(" "),a("label",[t._v("班级")]),t._v(" "),a("input",{attrs:{type:"text",name:"class",value:""}}),a("br"),t._v(" "),a("label",[t._v("宿舍")]),t._v(" "),a("select",{staticClass:"form-input",attrs:{name:"dorm"}},t._l(t.dormList,function(e){return a("option",{domProps:{value:e.dormname}},[t._v(t._s(e.dormname))])})),t._v(" "),a("br")]),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.toThree}},[t._v("提交")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n       欢迎你 "),a("br"),t._v("\n       你是第 1022 位加入兼职圈的同学"),a("br"),t._v("\n       完善信息才能做兼职哦\n      ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"complete-form"},[a("label",[t._v("姓名")]),t._v(" "),a("input",{attrs:{type:"text",name:"name",value:""}}),a("br"),t._v(" "),a("label",[t._v("性别")]),t._v(" "),a("select",{attrs:{name:"gender",value:"男"}},[a("option",{attrs:{value:"男"}},[t._v("帅气boy")]),a("option",{attrs:{value:"女"}},[t._v("漂亮girl")])]),a("br"),t._v(" "),a("label",[t._v("QQ号")]),t._v(" "),a("input",{attrs:{type:"text",name:"qq",value:""}}),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"form-input",attrs:{name:"grade"}},[a("option",{attrs:{value:"2013"}},[t._v("2013")]),t._v(" "),a("option",{attrs:{value:"2013"}},[t._v("2014")]),t._v(" "),a("option",{attrs:{value:"2013"}},[t._v("2015")]),t._v(" "),a("option",{attrs:{value:"2013"}},[t._v("2016")]),t._v(" "),a("option",{attrs:{value:"2013"}},[t._v("2017")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-list"},[a("ul",t._l(t.jobs,function(e){return a("li",{on:{click:function(){return t.location.hash="#/my/job/info/"+e.id}}},[a("div",{staticClass:"job-list-title"},[t._v("\n                "+t._s(e.jobname)+"\n  ")]),t._v(" "),a("div",{staticClass:"job-list-state"},[t._v("\n                时间："+t._s(new Date(e.fromtime).toLocaleString())+"     "),a("span",[t._v(t._s(t.state[e.salary]))])])])})),t._v(" "),a("navbar")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("div",{staticClass:"navbar-item",on:{click:function(){return t.location.hash="#/my/job/list"}}},[a("i",{staticClass:"fa fa-send"}),t._v("我的兼职\n  ")]),t._v(" "),a("div",{staticClass:"navbar-item",on:{click:function(){return t.location.hash="#/job/list"}}},[a("i",{staticClass:"fa fa-bullhorn"}),t._v("发现兼职\n  ")]),t._v(" "),a("div",{staticClass:"navbar-item",on:{click:function(){return t.location.hash="#/center"}}},[a("i",{staticClass:"fa fa-user"}),t._v("个人中心\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"class-manage"},[a("table",[t._m(0),t._v(" "),t._l(t.allclazz,function(e){return a("tr",[a("td",{staticClass:"class-manage-title",on:{click:function(){return t.location.hash="#/class/info/"+e.id+"/"+e.marketname}}},[t._v(t._s(e.colleage))]),t._v(" "),a("td",[t._v(t._s(e.grade))]),t._v(" "),a("td",[t._v(t._s(e.marketname))]),t._v(" "),a("td",[t._v(t._s(e.attennum))]),t._v(" "),a("td",[t._v(t._s(e.notemessagenum))])])})],2),t._v(" "),a("button",{on:{click:function(){return t.location.hash="#/class/add"}}},[t._v("新增班级")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("学院")]),t._v(" "),a("td",[t._v("年级")]),t._v(" "),a("td",[t._v("专业班级")]),t._v(" "),a("td",[t._v("联系人")]),t._v(" "),a("td",[t._v("业务")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"class-info"},[n("h1",[e._v(e._s(e.$route.params.name))]),e._v(" "),n("h2",[e._v("联系人")]),e._v(" "),n("table",[e._m(0),e._v(" "),e._l(e.contacts,function(t){return n("tr",[n("td",[e._v(e._s(t.role))]),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.phonenum))]),e._v(" "),n("td",[e._v(e._s(t.qq))]),e._v(" "),n("td",[e._v(e._s(t.dorm))])])})],2),e._v(" "),n("h2",[e._v("成交数据")]),e._v(" "),n("table",[e._m(1),e._v(" "),n("tr",[n("td",[e._v("单数")]),e._v(" "),n("td",[e._v(e._s(e.deals[0].vomule))]),e._v(" "),n("td",[e._v(e._s(e.deals[1].vomule))]),e._v(" "),n("td",[e._v(e._s(e.deals[2].vomule))]),e._v(" "),n("td",[e._v(e._s(e.deals[3].vomule))])]),e._v(" "),n("tr",[n("td",[e._v("增加")]),e._v(" "),n("td",{on:{click:function(){return e.location.hash="#/class/bargin/"+t.$route.params.id+"/PAPER"}}},[e._v("+")]),e._v(" "),n("td",{on:{click:function(){return e.location.hash="#/class/bargin/"+t.$route.params.id+"/D_SCHOOL"}}},[e._v("+")]),e._v(" "),n("td",{on:{click:function(){return e.location.hash="#/class/bargin/"+t.$route.params.id+"/MEETING"}}},[e._v("+")]),e._v(" "),n("td",{on:{click:function(){return e.location.hash="#/class/bargin/"+t.$route.params.id+"/T-SHIRT"}}},[e._v("+")])])]),e._v(" "),n("h2",[e._v("拜访记录")]),e._v(" "),n("ul",[e._l(e.msgList,function(t){return n("li",[n("p",[n("i",{staticClass:"fa fa-angle-right"}),e._v(e._s(new Date(t.createtime).toLocaleString())+"  "+e._s(t.ownername))]),e._v(" "),n("p",{staticStyle:{"padding-left":"2rem"}},[e._v(e._s(t.content))])])}),e._v(" "),n("li",[n("input",{attrs:{type:"text",name:"message",placeholder:"新增记录"}}),e._v(" "),n("button",{on:{click:e.send}},[e._v("提交")])])],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("身份")]),t._v(" "),a("td",[t._v("姓名")]),t._v(" "),a("td",[t._v("电话")]),t._v(" "),a("td",[t._v("QQ号")]),t._v(" "),a("td",[t._v("宿舍号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td"),t._v(" "),a("td",[t._v("试卷")]),t._v(" "),a("td",[t._v("驾校")]),t._v(" "),a("td",[t._v("聚会")]),t._v(" "),a("td",[t._v("文化衫")])])}]}}],[32]);
//# sourceMappingURL=app.4084c2c13eba84687837.js.map