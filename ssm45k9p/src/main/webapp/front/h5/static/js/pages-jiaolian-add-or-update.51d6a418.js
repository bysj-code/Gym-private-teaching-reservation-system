(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiaolian-add-or-update"],{"2be4":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var a=i(t("3b8d")),n=i(t("e2b1")),o={data:function(){return{ruleForm:{jiaolianbianhao:"",jiaolianxingming:"",mima:"",jiaoling:"",dengji:"",lianxidianhua:"",shenfenzheng:"",touxiang:""},user:{},ro:{jiaolianbianhao:!1,jiaolianxingming:!1,mima:!1,jiaoling:!1,dengji:!1,lianxidianhua:!1,shenfenzheng:!1,touxiang:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var t,i,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=13;break}return this.ruleForm.id=e.id,r.next=11,this.$api.info("jiaolian",this.ruleForm.id);case 11:i=r.sent,this.ruleForm=i.data;case 13:if(!e.cross){r.next=52;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 16:if((r.t1=r.t0()).done){r.next=52;break}if(n=r.t1.value,"jiaolianbianhao"!=n){r.next=22;break}return this.ruleForm.jiaolianbianhao=a[n],this.ro.jiaolianbianhao=!0,r.abrupt("continue",16);case 22:if("jiaolianxingming"!=n){r.next=26;break}return this.ruleForm.jiaolianxingming=a[n],this.ro.jiaolianxingming=!0,r.abrupt("continue",16);case 26:if("mima"!=n){r.next=30;break}return this.ruleForm.mima=a[n],this.ro.mima=!0,r.abrupt("continue",16);case 30:if("jiaoling"!=n){r.next=34;break}return this.ruleForm.jiaoling=a[n],this.ro.jiaoling=!0,r.abrupt("continue",16);case 34:if("dengji"!=n){r.next=38;break}return this.ruleForm.dengji=a[n],this.ro.dengji=!0,r.abrupt("continue",16);case 38:if("lianxidianhua"!=n){r.next=42;break}return this.ruleForm.lianxidianhua=a[n],this.ro.lianxidianhua=!0,r.abrupt("continue",16);case 42:if("shenfenzheng"!=n){r.next=46;break}return this.ruleForm.shenfenzheng=a[n],this.ro.shenfenzheng=!0,r.abrupt("continue",16);case 46:if("touxiang"!=n){r.next=50;break}return this.ruleForm.touxiang=a[n],this.ro.touxiang=!0,r.abrupt("continue",16);case 50:r.next=16;break;case 52:this.styleChange();case 53:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},touxiangTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.touxiang=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.jiaolianbianhao){r.next=3;break}return this.$utils.msg("教练编号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.jiaolianxingming){r.next=6;break}return this.$utils.msg("教练姓名不能为空"),r.abrupt("return");case 6:if(this.ruleForm.mima){r.next=9;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.jiaoling||this.$validate.isIntNumer(this.ruleForm.jiaoling)){r.next=12;break}return this.$utils.msg("教龄应输入整数"),r.abrupt("return");case 12:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){r.next=15;break}return this.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 15:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=18;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 18:if(!this.ruleForm.id){r.next=23;break}return r.next=21,this.$api.update("jiaolian",this.ruleForm);case 21:r.next=25;break;case 23:return r.next=25,this.$api.add("jiaolian",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},"383a":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0f3925ca]{padding:%?20?%}.content[data-v-0f3925ca]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0f3925ca]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0f3925ca]{width:%?180?%}.avator[data-v-0f3925ca]{width:%?150?%;height:%?60?%}.right-input[data-v-0f3925ca]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0f3925ca]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0f3925ca]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0f3925ca]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0f3925ca]{border:0}.cu-form-group uni-input[data-v-0f3925ca]{padding:0 %?30?%}.uni-input[data-v-0f3925ca]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0f3925ca]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0f3925ca]::after{line-height:%?88?%}.select .uni-input[data-v-0f3925ca]{line-height:%?88?%}.input .right-input[data-v-0f3925ca]{line-height:%?88?%}',""]),r.exports=e},"3d2c":function(r,e,t){var i=t("383a");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=t("4f06").default;a("a901fba8",i,!0,{sourceMap:!1,shadowMode:!1})},"5e7d":function(r,e,t){"use strict";t.r(e);var i=t("b122"),a=t("f7a2");for(var n in a)"default"!==n&&function(r){t.d(e,r,(function(){return a[r]}))}(n);t("8f9e");var o,l=t("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"0f3925ca",null,!1,i["a"],o);e["default"]=s.exports},"8f9e":function(r,e,t){"use strict";var i=t("3d2c"),a=t.n(i);a.a},b122:function(r,e,t){"use strict";var i,a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("教练编号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.jiaolianbianhao,placeholder:"教练编号"},model:{value:r.ruleForm.jiaolianbianhao,callback:function(e){r.$set(r.ruleForm,"jiaolianbianhao",e)},expression:"ruleForm.jiaolianbianhao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("教练姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.jiaolianxingming,placeholder:"教练姓名"},model:{value:r.ruleForm.jiaolianxingming,callback:function(e){r.$set(r.ruleForm,"jiaolianxingming",e)},expression:"ruleForm.jiaolianxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("教龄")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.jiaoling,placeholder:"教龄"},model:{value:r.ruleForm.jiaoling,callback:function(e){r.$set(r.ruleForm,"jiaoling",e)},expression:"ruleForm.jiaoling"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("等级")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.dengji,placeholder:"等级"},model:{value:r.ruleForm.dengji,callback:function(e){r.$set(r.ruleForm,"dengji",e)},expression:"ruleForm.dengji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("联系电话")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[r._v("身份证")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shenfenzheng,placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.touxiangTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[r._v("头像")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.touxiang?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.touxiang,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}))},f7a2:function(r,e,t){"use strict";t.r(e);var i=t("2be4"),a=t.n(i);for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);e["default"]=a.a}}]);