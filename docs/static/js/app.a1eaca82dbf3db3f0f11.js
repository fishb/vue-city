webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")({name:"App"},n,!1,function(t){i("nF9L")},null,null).exports,o=i("/ocq"),c=(i("gSaA"),{name:"citySwtich",data:function(){return{city:citys,selectCity:"",selectNum:"",num:"",cityShow:!1,alpss:"",alpssShow:!1}},computed:{},methods:{altab:function(t){var e=this;e.num=t,e.alpss=e.city[e.num],e.alpssShow=!e.alpssShow,e.$refs.list.scrollTop=e.$refs.citys[e.num].offsetTop-e.$refs.citys[e.num].clientHeight,setTimeout(function(){e.alpssShow=!e.alpssShow},500)},Ascroll:function(){var t=this.$refs.list.scrollTop/(this.$refs.list.scrollHeight-this.$refs.list.clientHeight);this.num=Math.round(t*this.city.length),this.num==this.city.length&&(this.num=this.city.length-1)},selectCityBtn:function(t,e){this.selectCity=[],this.num=t,this.selectNum=e,this.selectCity=this.city[this.num].citylist[this.selectNum],this.$emit("cityValue",this.cityShow,this.selectCity)}},mounted:function(){this.$refs.list.addEventListener("scroll",this.Ascroll)}}),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"citySwtich"},[i("div",{staticClass:"cityHeader"},[i("h2",[i("em",[t._v("选择城市")]),i("span",[t._v("("+t._s(t.selectCity)+")")])])]),t._v(" "),i("main",{staticClass:"cityMain"},[i("div",{ref:"list",staticClass:"list"},t._l(t.city,function(e,s){return i("div",{key:s,ref:"citys",refInFor:!0,class:"0"==s?"hot":""},[i("div",{staticClass:"hA"},[t._v(t._s("☆"==e.hA?"热门城市":e.hA))]),t._v(" "),i("div",{staticClass:"liBox"},t._l(e.citylist,function(e,n){return i("li",{key:n,on:{click:function(e){t.selectCityBtn(s,n)}}},[t._v(t._s(e))])}))])})),t._v(" "),t.alpssShow?i("div",{staticClass:"alpss"},[i("span",[t._v(t._s(t.alpss.hA))])]):t._e(),t._v(" "),i("ul",{staticClass:"alphabet"},t._l(t.city,function(e,s){return i("li",{key:s,on:{click:function(e){t.altab(s)}}},[t._v(t._s(e.hA))])}))])])},staticRenderFns:[]};var a=i("VU/8")(c,r,!1,function(t){i("bRcA")},null,null).exports;s.a.use(o.a);var u,d=new o.a({routes:[{path:"/",name:"city",component:a}]});u=document.documentElement.clientWidth||document.body.clientWidth,document.getElementsByTagName("html")[0].style.fontSize=u>640?"64px":u/10+"px",s.a.config.productionTip=!1,new s.a({el:"#app",router:d,components:{App:l},template:"<App/>"})},bRcA:function(t,e){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'node-sass'\nRequire stack:\n- F:\\fishb\\vue-city\\node_modules\\sass-loader\\lib\\loader.js\n- F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\loadLoader.js\n- F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- F:\\fishb\\vue-city\\node_modules\\webpack\\lib\\NormalModule.js\n- F:\\fishb\\vue-city\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- F:\\fishb\\vue-city\\node_modules\\webpack\\lib\\Compiler.js\n- F:\\fishb\\vue-city\\node_modules\\webpack\\lib\\webpack.js\n- F:\\fishb\\vue-city\\build\\build.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:690:27)\n    at Module.require (internal/modules/cjs/loader.js:852:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.sassLoader (F:\\fishb\\vue-city\\node_modules\\sass-loader\\lib\\loader.js:46:72)\n    at F:\\fishb\\vue-city\\node_modules\\webpack\\lib\\NormalModule.js:195:19\n    at F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at runSyncOrAsync (F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:229:2)\n    at iterateNormalLoaders (F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:218:10)\n    at F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:3\n    at Object.context.callback (F:\\fishb\\vue-city\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.module.exports (F:\\fishb\\vue-city\\node_modules\\vue-loader\\lib\\selector.js:21:8)")},gSaA:function(t,e){window.citys=[{hA:"☆",citylist:["北京市","上海市","杭州市","深圳市","武汉市","西安市","苏州市"]},{hA:"A",citylist:["鞍山市","安庆市","安阳市","安丘市","安顺市","阿荣旗市","阿克苏市","阿勒泰市","阿拉善盟市","安溪市","安宁市","安化市","阿拉尔市","安福市","安陆市","澳门市","阿里市","阿坝市"]},{hA:"B",citylist:["北京市","包头市","保定市","蚌埠市","亳州市","滨州市","宝鸡市","白城市","霸州市","巴彦淖尔市","北海市","百色市","巴中市","毕节市","保山市","本溪市","白银市","白山市"]},{hA:"C",citylist:["重庆市","成都市","常州市","长沙市","长春市","沧州市","长治市","常熟市","常德市","承德市","潮州市","从化市","巢湖市","朝阳市","池州市","昌吉市","澄迈县市","崇左市","楚雄市","赤壁市","淳安市","承德县市","常山市","崇州市"]},{hA:"D",citylist:["大连市","东莞市","大同市","大庆市","丹东市","东营市","德州市","定西市","儋州市","大理市","丹阳市","定州市","大安市","定安县市","德宏市","大兴安岭市"]},{hA:"E",citylist:["鄂尔多斯市","鄂州市","恩施市"]},{hA:"F",citylist:["福州市","佛山市","阜阳市","抚州市","抚顺市","阜新市","防城港市"]},{hA:"G",citylist:["广州市","贵阳市","赣州市","贵港市","桂林市","广安市","高州市","高密市","巩义市","广饶市","桂平市","广汉市","高平市","灌南市","高安市","共青城市","高雄市"]},{hA:"H",citylist:["杭州市","合肥市","哈尔滨市","衡阳市","邯郸市","惠州市","呼和浩特市","海口市","湖州市","淮安市","淮南市","菏泽市","黄冈市","怀化市","衡水市","黄山市","呼伦贝尔市","惠东市","惠阳市","横店市","香港市"]},{hA:"J",citylist:["济南市","济宁市","吉林市","嘉兴市","金华市","揭阳市","九江市","晋江市","晋城市","晋中市","景德镇市","酒泉市","吉安市","鸡西市","靖江市","嘉善市","嘉峪关市","井冈山市","嘉义市","九寨沟市"]},{hA:"K",citylist:["昆明市","昆山市","开封市","克拉玛依市","开化市","开平市","库尔勒市","开阳市","奎屯市","康县市","开州区市","垦利市","宽城市","库车市","凯里市","喀什地区市","克州市","垦丁市"]},{hA:"L",citylist:["辽源市","聊城市","临汾市","临沧市","林芝市","乐山市","廊坊市","娄底市","辽阳市","连云港市","莱芜市","兰州市","吕梁市","丽水市","来宾市","陇南市","拉萨市","泸州市","六安市","洛阳市","漯河市","柳州市","六盘水市","丽江市","龙岩市","临高县市","临沂市"]},{hA:"M",citylist:["牡丹江市","绵阳市","茂名市","眉山市","梅州市","马鞍山市"]},{hA:"N",citylist:["南京市","那曲地市","宁德市","南昌市","南充市","南阳市","宁波市","南沙群岛市","南平市","南宁市","内江市","南通市"]},{hA:"P",citylist:["萍乡市","濮阳市","攀枝花市","平凉市","莆田市","盘锦市","平顶山市"]},{hA:"Q",citylist:["齐齐哈尔市","清远市","庆阳市","秦皇岛市","衢州市","青岛市","钦州市","泉州市","曲靖市","潜江市","琼海市"]},{hA:"R",citylist:["日喀则地市","日照市"]},{hA:"S",citylist:["上海市","深圳市","石家庄市","苏州市","沈阳市","三亚市","汕头市","绍兴市","松原市","韶关市","邵阳市","十堰市","商丘市","随州市","绥化市","双鸭山市","汕尾市","遂宁市","商洛市","石嘴山市","四平市","三明市","上饶市"]},{hA:"T",citylist:["天津市","太原市","泰州市","台州市","唐山市","泰安市","天水市","铜仁市","通化市","铁岭市","铜陵市","通辽市","台湾市","屯昌县市","塔城市","吐鲁番市"]},{hA:"W",citylist:["武汉市","无锡市","温州市","潍坊市","威海市","芜湖市","乌鲁木齐市","渭南市","吴江市","温岭市","乌海市","万州市","梧州市","武安市","婺源市","武夷山市","文昌市","芜湖县市","威宁市"]},{hA:"X",citylist:["西安市","厦门市","徐州市","襄阳市","湘潭市","西宁市","宣城市","咸阳市","许昌市","信阳市","邢台市","孝感市","新乡市","咸宁市","新余市","兴安盟市","夏邑市","浚县市","西乡市","西平市","新干市","兴国县市","新田市","寻乌县市","襄城县市","西塘市","香格里拉市","新竹市"]},{hA:"Y",citylist:["烟台市","扬州市","银川市","岳阳市","宜昌市","宜春市","运城市","宜宾市","义乌市","宜兴市","余姚市","乐清市","玉林市","鹰潭市","延边市","延安市","雅安市","玉树市","伊春市"]},{hA:"Z",citylist:["郑州市","淄博市","珠海市","镇江市","湛江市","中山市","舟山市","肇庆市","张家口市","遵义市","张家港市","昭通市","自贡市","章丘区市","邹城市","枣阳市","张家界市","诸城市","遵化市","资阳市","樟树市","周庄市"]}]},nF9L:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a1eaca82dbf3db3f0f11.js.map