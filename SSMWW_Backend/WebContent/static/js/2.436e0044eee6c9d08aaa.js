webpackJsonp([2],{"Cl/E":function(s,t,e){var o=e("5pnV"),a=e("/r4/"),n=e("XvZ9").f;s.exports=function(s){return function(t){for(var e,l=a(t),i=o(l),r=i.length,c=0,u=[];r>c;)n.call(l,e=i[c++])&&u.push(s?[e,l[e]]:l[e]);return u}}},MgeX:function(s,t,e){s.exports={default:e("XEbU"),__esModule:!0}},NWpI:function(s,t,e){var o=e("FITv"),a=e("Cl/E")(!1);o(o.S,"Object",{values:function(s){return a(s)}})},XEbU:function(s,t,e){e("NWpI"),s.exports=e("AKd3").Object.values},i3VB:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("MgeX"),a=e.n(o),n={name:"addgoods",data:function(){return{resultgoods:[],goodsClassJO:{},isNewClass:!1,selectclass:"",newclass:"",form:{"商品名称":"","商品编号":"","商品价格":"","商品单位":"","商品品牌":""},btnText:"新建分类 "}},methods:{btnChange:function(){this.isNewClass=!this.isNewClass,this.btnText="选择分类"==this.btnText?"新建分类":"选择分类"},btnreset:function(){this.form.商品名称="",this.form.商品价格="",this.form.商品单位="",this.form.商品品牌=""},doAddGoods:function(){var s=this;console.log(this.isNewClass?this.newclass:this.selectclass);var t=this.form,e=t.商品名称,o=t.商品编号,a=t.商品价格,n=t.商品单位,l=t.商品品牌,i={};if(""==this.form.商品名称||""==this.form.商品编号||""==this.form.商品价格||""==this.form.商品单位)this.$message({message:"编辑框内容不能为空",type:"warning"});else{if(this.isNewClass){if("全部"==this.newclass||""==this.newclass)return void this.$message({message:"请先选择分类",type:"warning"})}else if("全部"==this.selectclass||""==this.selectclass)return void this.$message({message:"请先选择分类",type:"warning"});i.goodsclass=this.isNewClass?this.newclass:this.selectclass,i.goodsname=e,i.goodsid=o,i.price=parseFloat(a),i.unit=n,i.brand=l,console.log(i),this.$axios.post("http://localhost:8080/SSMWW/addGoods.do",i).then(function(t){var e=t.data;console.log(e),"200"==e.code&&"添加成功"==e.msg?(s.$message({message:"恭喜你，添加成功",type:"success"}),s.btnreset(),s.getMaxid()):s.$message({message:"不好意思，添加失败",type:"warning"})})}},getMaxid:function(){var s=this;this.$axios.get("http://localhost:8080/SSMWW/goodsMaxId.do").then(function(t){var e=t.data;s.form.商品编号=e+1})}},created:function(){var s=this;this.$axios.get("http://localhost:8080/SSMWW/goodsClassALLMap.do").then(function(t){s.goodsClassJO=t.data,console.log(t.data),s.goodsALLcount=0;for(var e=a()(s.goodsClassJO),o=0;o<e.length;o++)s.goodsALLcount+=e[o];s.pagecount=s.goodsALLcount%s.pagelimit==0?s.pagecount=s.goodsALLcount/s.pagelimit:s.pagecount=parseInt(s.goodsALLcount/s.pagelimit)+1,s.goodscount=s.goodsALLcount}),this.getMaxid()}},l={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("form",[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"input-group col-sm-10 offset-sm-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:s.selectclass,expression:"selectclass"},{name:"show",rawName:"v-show",value:!s.isNewClass,expression:"!isNewClass"}],staticClass:"custom-select col-sm-5",attrs:{id:"inlineFormCustomSelect"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(s){return s.selected}).map(function(s){return"_value"in s?s._value:s.value});s.selectclass=t.target.multiple?e:e[0]}}},s._l(s.goodsClassJO,function(t,o,a){return e("option",[s._v(s._s(o))])})),s._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:s.isNewClass,expression:"isNewClass"},{name:"model",rawName:"v-model:value",value:s.newclass,expression:"newclass",arg:"value"}],staticClass:"form-control col-sm-5 offset-sm-1",attrs:{type:"text",placeholder:"新分类名称"},domProps:{value:s.newclass},on:{input:function(t){t.target.composing||(s.newclass=t.target.value)}}}),s._v(" "),e("span",{staticClass:" col-sm-5"}),s._v(" "),e("el-button",{on:{click:s.btnChange}},[s._v(s._s(s.btnText))])],1)]),s._v(" "),s._l(s.form,function(t,o,a){return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 offset-sm-1 col-form-label",attrs:{for:"aaa"}},[s._v(s._s(o))]),s._v(" "),e("div",{staticClass:"col-sm-8"},[e("input",{directives:[{name:"model",rawName:"v-model:value",value:s.form[o],expression:"form[key]",arg:"value"}],staticClass:"form-control",attrs:{type:"text",id:"aaa",disabled:"商品编号"==o},domProps:{value:s.form[o]},on:{input:function(t){t.target.composing||s.$set(s.form,o,t.target.value)}}})])])})],2),s._v(" "),e("div",{staticClass:"center offset-sm-5"},[e("el-button",{on:{click:s.btnreset}},[s._v("重置")]),s._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:s.doAddGoods}},[s._v("添加")])],1)])},staticRenderFns:[]},i=e("C7Lr")(n,l,!1,null,null,null);t.default=i.exports}});