(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/advotics-dashboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01d0":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},"03bb":function(t,e,a){},"0bc5":function(t,e,a){t.exports=a.p+"img/advotics-logo-optimize.08d5a9c7.jpg"},"10b5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAA6dJREFUOI2llE9sFVUUxn/n3jvT92YgvgoI1UqgVRZuIJGlicYNCzWRlQuMf0jshgWrV2pTkzFA4bWJxhj/RBfGhQmRSIxR4p/EpVESNrBsq0QMhEIlQPD5Zube48L7SEsxMelZzXe+O9895zsnV8bGxpJt27bttta+kiTJ61VVZSJywDk3671/UlUbzrnvqqraCwwkSXKiqqqnVDVL0/R0Xdf7jDE/GGMWq6p6w3t/qizLX6TT6UwDDwIbgTnAiciwql4ABgEHXAU2Awa4DGwQEVHVayIyBPypqj0RGVHV6yJy2QHPdrvdJ7Is2zQ+Pr4AcOTIkYenpqYuFkXRAkJRFDenp6c33Lp1yxw7duxqURTr0jQdmJycXJqdnX3gzJkzSydPnvSHDx/evri4uDQ8PPyNAUjTNAHWE8MYk/fzqtoAsNYO5HneiPkBVU0Ber1ec3Bw0AAkSZINDQ0lADIzM7MEnAICawhV/bnb7X566dIlOzo6+qMDrnvvP7PWVmsRDiFcKYoijI2NWQCnqn/1er2fiqIo1yJ8d7j+R6fTeU9EWiGEv2NqOPIXAIwxW1XVqupvEQ8DJoTwO4CIDIjIzfn5+YMrhEXkUeBAmqZ/ANR1vQ/InXMfAZRluV9EGmmavh/xi865xDn3CYD3fouqvrOqYsCFEEbKssxiRVuAZlmWO+LFm40xaR8bYzZ779O6rncAqOomY0y6SlhEBoA9InIjHtwFJCJSRn5XCMGJSDf+slNVnYj4yK8H8lXCIYTbdV2/PTU1dRFgZmbmpRBCPjEx8QHA8ePHXzPGNMbHx9+NM3nZWpu22+2PAY4ePTqUJMmHdwrtdDrnut3u7izLvgXe8t5fia0+AzRCCF/Eip43xqTe+8/7vKomqvpl5Ddaaw/Ozc09199jYuu5iOy31t6OB0dCCM5a+1DkHwGstXZLxCPGGANsjRJNVW3da3g3yrI8uNwKVc0PHTp0xwoRWWGFiPynFcuHJyGEVlEUtwG89+tEJCuK4v7YeqaqjT4OIeRAugy3+Pf1WyWcpWn6qrW2vxU7VTXN8zyP+HHA9R+iEMIuEbF5nt8X8fp7WtHfiomJiRVWtNvtFVvRbrf/lxV3tqLZbH4lIieAa5F7GmgAp2PFe0QkAb5exjvg+8gPAi8sLCzsXbEVIjIpIo9571vx4LmY7+Oz1tq+l6t4a63Wdf3m3VY05ufnzwPnWWO0Wq0GIE5EzjabzdOjo6O6VtEYAvz6D3f2xKuycVdsAAAAAElFTkSuQmCC"},1941:function(t,e,a){},"34d6":function(t,e,a){},"3d25":function(t,e,a){"use strict";a("afbb")},"41f6":function(t,e,a){t.exports=a.p+"img/Dashboard icon.9bb0ae89.svg"},"4ee2":function(t,e,a){},"4f08":function(t,e,a){},"52bb":function(t,e,a){t.exports=a.p+"img/product.a8b47af3.png"},5496:function(t,e,a){t.exports=a.p+"img/product2.c37f9b77.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("Sidebar"),a("div",{staticClass:"main"},[a("Dashboard")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",[s("b-col",{staticClass:"title",attrs:{cols:6}},[s("h1",{staticClass:"dashboard-title m-0"},[t._v("Dashboard")])]),s("b-col",{staticClass:"float-right",attrs:{cols:6}},[s("DatePicker")],1)],1),s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-market",modifiers:{"collapse-market":!0}}],staticClass:"w-100 btn-market",on:{click:function(e){t.openToggleMarket=!t.openToggleMarket}}},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("span",{staticClass:"market-text-btn"},[t._v("MARKET INSIGHTS")]),s("div",[s("img",{attrs:{src:a("b433")}}),s("a",{staticClass:"help",attrs:{href:"#help"}},[t._v("Click Here for Help")]),t.openToggleMarket?[s("b-icon-chevron-up")]:[s("b-icon-chevron-down")]],2)])]),s("b-collapse",{attrs:{visible:"",id:"collapse-market"}},[s("b-row",{staticClass:"pt-3"},[s("SalesTurnover")],1),s("b-row",{staticClass:"pt-3"},[s("AveragePurchaseValue"),s("CardSKU",{attrs:{title:"BEST SELLING SKU",products:t.list2}}),s("CardSKU",{attrs:{title:"TOP COMPETITOR SKU",products:t.list1}})],1)],1)],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("date-range-picker",{attrs:{"locale-data":t.localeData,opens:"left",minDate:t.last6months,maxDate:t.yesterday,ranges:t.range},on:{toggle:function(e){t.openToggleCalendar=!t.openToggleCalendar}},scopedSlots:t._u([{key:"header",fn:function(e){return s("div",{staticClass:"slot d-flex justify-content-between align-items-center p-2",staticStyle:{"border-bottom":"1px solid #ddd"}},[s("div",{staticClass:"d-flex align-items-center"},[s("img",{attrs:{src:a("10b5")}}),s("span",{staticClass:"period"},[t._v("Period")])]),s("b-icon-x",{staticStyle:{width:"25px",height:"25px",cursor:"pointer"},on:{click:e.clickCancel}})],1)}},{key:"input",fn:function(e){return[s("img",{attrs:{src:a("10b5")}}),s("span",{staticClass:"period"},[t._v("Period")]),s("span",{staticClass:"period-range"},[t._v(t._s(t._f("toDate")(e.startDate))+" - "+t._s(t._f("toDate")(e.endDate)))]),t.openToggleCalendar?[s("b-icon-chevron-up")]:[s("b-icon-chevron-down")]]}},{key:"footer",fn:function(e){return s("div",{staticClass:"footer-slot-daterange"},[s("div",[s("button",{staticClass:"applyBtn btn btn-success btn-md",attrs:{disabled:e.in_selection},on:{click:e.clickApply}},[t._v(" Apply ")])])])}}]),model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})},l=[],d=a("7386"),u=a("bbf5"),p=a.n(u),f=(a("53b4"),{name:"DatePicker",components:{DateRangePicker:p.a,BIconChevronDown:d["eh"],BIconChevronUp:d["ih"],BIconX:d["Uw"]},filters:{toDate:function(t){if(t){var e=new Date(t),a={year:"numeric",month:"long",day:"numeric"};return e.toLocaleDateString("id-ID",a)}return""}},data:function(){return{openToggleCalendar:!1,openToggleMarket:!0,dateRange:{startDate:"",endDate:""}}},created:function(){this.dateRange.startDate=this.last7days,this.dateRange.endDate=this.yesterday},computed:{localeData:function(){return{format:"d mmmm yyyy",applyLabel:"Apply",cancelLabel:"Cancel",firstDay:1}},last6months:function(){var t=new Date;return t.setMonth(this.yesterday.getMonth()-6),t.setHours(0,0,0,0),t},yesterday:function(){var t=new Date;t.setHours(0,0,0,0);var e=new Date;return e.setDate(t.getDate()-1),e.setHours(0,0,0,0),e},last7days:function(){var t=new Date;return t.setDate(this.yesterday.getDate()-7),t.setHours(0,0,0,0),t},range:function(){var t=new Date;t.setDate(this.yesterday.getDate()-30),t.setHours(0,0,0,0);var e=new Date(this.yesterday.getFullYear(),this.yesterday.getMonth(),1);return{Yesterday:[this.yesterday,this.yesterday],"Last 7 days":[this.last7days,this.yesterday],"Last 30 days":[t,this.yesterday],"This Month":[e,this.yesterday]}}}}),b=f,m=(a("8992"),a("2877")),g=Object(m["a"])(b,c,l,!1,null,null,null),v=g.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-col",{attrs:{cols:"3"}},[s("b-card",[s("div",{staticClass:"d-flex justify-content-between"},[s("p",{staticClass:"m-0 sales-turnover"},[t._v("Sales Turnover")]),s("a",{attrs:{href:"#sales"}},[s("img",{staticClass:"icon-more",attrs:{src:a("75eb"),alt:""}})])]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",[s("p",{staticClass:"nominal-sales"},[t._v(t._s(t._f("toRp")(36e5)))]),s("div",[s("img",{staticClass:"icon-down",attrs:{src:a("b5be"),alt:""}}),s("span",{staticClass:"nominal-down"},[t._v("5,67%")]),s("span",{staticClass:"nominal-small"},[t._v("last period in products sold ")])])]),s("img",{staticClass:"icon-turnover",attrs:{src:a("f286"),alt:""}})])])],1)},h=[],y={name:"SalesTurnover"},C=y,w=(a("5c80"),Object(m["a"])(C,A,h,!1,null,"2ba7186a",null)),D=w.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-col",{attrs:{cols:"6"}},[s("b-card",{staticClass:"h-100"},[s("div",{staticClass:"d-flex justify-content-between align-items-center mb-16px"},[s("p",{staticClass:"card-title"},[t._v("AVERAGE PURCHASE VALUE")]),s("div",[s("b-form-select",{staticClass:"select-chart",attrs:{options:t.options},on:{change:function(e){return t.changeSeries()}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),s("a",{attrs:{href:"#average"}},[s("img",{staticClass:"icon-more",attrs:{src:a("75eb"),alt:""}})])],1)]),s("Chart",{attrs:{series:t.series}})],1)],1)},k=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("apexchart",{attrs:{type:"line",options:t.chartOptions,series:t.series}})],1)},P=[],E=a("1321"),S=a.n(E);s["default"].use(S.a),s["default"].component("apexchart",S.a);var I={name:"Chart",props:{series:{type:Array,default:function(){return[]}}},data:function(){return{chartOptions:{colors:["#37B04C","#289E45","#7AE28C","#707070","#FFE854"],chart:{type:"line",stacked:!0},toolbar:{show:!1},zoom:{enabled:!1},plotOptions:{bar:{columnWidth:"50%"}},xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},legend:{position:"bottom"},fill:{opacity:1}}}}},V=I,T=Object(m["a"])(V,O,P,!1,null,null,null),U=T.exports,q=[{name:"Nett",type:"bar",data:[202,420,435,520,439,160,370]},{name:"Gross",type:"bar",data:[233,420,125,220,339,320,230]},{name:"Average Purchase Value",type:"bar",data:[677,432,231,132,432,432,122]},{name:"Unit per Transaction",type:"bar",data:[122,220,435,273,255,202,310]},{name:"Growth",type:"line",data:[400,421,633,578,312,733,812]}],N=[{name:"Nett",type:"bar",data:[1233,12420,23435,5120,3439,4160,8370]},{name:"Gross",type:"bar",data:[1233,1420,4125,2220,3349,3320,2320]},{name:"Average Purchase Value",type:"bar",data:[2677,1432,3231,3132,2432,2432,4122]},{name:"Unit per Transaction",type:"bar",data:[5777,2220,1435,6273,1255,2202,2310]},{name:"Growth",type:"line",data:[3333,2421,4633,4578,2312,5733,7812]}],R=[{name:"Nett",type:"bar",data:[213202,123420,432435,432520,223439,212160,323370]},{name:"Gross",type:"bar",data:[222233,321420,342125,121201,223339,444320,555230]},{name:"Average Purchase Value",type:"bar",data:[222677,555432,222231,111132,444432,421432,321122]},{name:"Unit per Transaction",type:"bar",data:[532122,211220,234435,431273,123255,421220,213310]},{name:"Growth",type:"line",data:[444400,111421,665633,221578,444312,676733,666812]}],_=[{name:"Nett",type:"bar",data:[444400,111421,665633,221578,444312,676733,666812]},{name:"Gross",type:"bar",data:[532122,211220,234435,431273,123255,421220,213310]},{name:"Average Purchase Value",type:"bar",data:[213202,123420,432435,432520,223439,212160,323370]},{name:"Unit per Transaction",type:"bar",data:[222233,321420,342125,121201,223339,444320,555230]},{name:"Growth",type:"line",data:[222677,555432,222231,111132,444432,421432,321122]}],j={name:"AveragePurchaseValue",components:{Chart:U},created:function(){this.changeSeries()},data:function(){return{series:[],selected:"last7days",options:[{value:"yesterday",text:"Yesterday"},{value:"last7days",text:"Last 7 days"},{value:"last30days",text:"Last 30 days"},{value:"thisMonth",text:"This Month"}]}},methods:{changeSeries:function(){"yesterday"!==this.selected?"last7days"!==this.selected?"last30days"!==this.selected?"thisMonth"!==this.selected||(this.series=_):this.series=R:this.series=N:this.series=q}}},G=j,M=(a("6f68"),Object(m["a"])(G,x,k,!1,null,"031f3940",null)),F=M.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-col",{attrs:{cols:"3"}},[s("b-card",{staticClass:"h-100"},[s("div",{staticClass:"d-flex justify-content-between align-items-center mb-16px"},[s("p",{staticClass:"card-title"},[t._v(t._s(t.title))]),s("a",{attrs:{href:"#sku"}},[s("img",{staticClass:"icon-more",attrs:{src:a("75eb"),alt:""}})])]),s("div",[s("ul",{staticClass:"p-0 m-0",staticStyle:{"list-style":"none"}},t._l(t.products,(function(e,a){return s("li",{key:a,staticClass:"card-item"},[s("b-card",[s("div",{class:0===a?"big-item":"small-item"},[s("img",{attrs:{src:e.img,alt:""}}),s("div",{staticClass:"detail-item"},[s("p",[t._v(t._s(e.name))]),s("div",{staticClass:"d-flex justify-content-between detail-text"},[s("p",[t._v(t._s(t._f("toRp")(e.price)))]),s("p",[t._v(t._s(e.totalOrder))])])])])])],1)})),0)])])],1)},B=[],J={name:"CardSKU",props:{title:{type:String,default:""},products:{type:Array,default:function(){return[]}}}},K=J,X=(a("3d25"),Object(m["a"])(K,H,B,!1,null,"4b4bf992",null)),z=X.exports,W=a("52bb"),Y=a.n(W),Q=a("5496"),L=a.n(Q),Z=[{id:1,name:"Product A",price:1e4,totalOrder:100,img:L.a},{id:2,name:"Product B",price:2e4,totalOrder:200,img:Y.a},{id:3,name:"Product C",price:3e4,totalOrder:300,img:Y.a},{id:4,name:"Product D",price:4e4,totalOrder:400,img:Y.a},{id:5,name:"Product E",price:5e4,totalOrder:500,img:Y.a}],$=[{id:1,name:"Product A1",price:5e4,totalOrder:500,img:Y.a},{id:2,name:"Product B2",price:4e4,totalOrder:400,img:L.a},{id:3,name:"Product C3",price:3e4,totalOrder:300,img:L.a},{id:4,name:"Product D4",price:2e4,totalOrder:200,img:L.a},{id:5,name:"Product E5",price:1e4,totalOrder:100,img:L.a}],tt={name:"Dashboard",components:{DatePicker:v,SalesTurnover:D,AveragePurchaseValue:F,CardSKU:z,BIconChevronDown:d["eh"],BIconChevronUp:d["ih"]},data:function(){return{openToggleMarket:!0}},computed:{list1:function(){return Z},list2:function(){return $}}},et=tt,at=(a("6f60"),a("ab2b"),Object(m["a"])(et,i,o,!1,null,"093f846b",null)),st=at.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"nav-bar sticky-top"},[s("div",{staticClass:"nav-heading"},[s("div",{staticClass:"d-flex"},[s("img",{staticClass:"logo",attrs:{src:a("0bc5"),alt:"icon"}}),s("div",{staticClass:"powered"},[s("span",{staticClass:"powered-text"},[t._v("powered by")]),s("img",{staticClass:"logo-small",attrs:{src:a("0bc5"),alt:"icon"}})])]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"user"},[s("p",{staticClass:"username text-right"},[t._v("Username")]),s("p",{staticClass:"company text-right"},[t._v("Company Name")])]),s("img",{staticClass:"profile",attrs:{src:a("7310")}}),s("a",{staticClass:"logout",attrs:{href:"#logout"}},[s("img",{attrs:{src:a("735a")}})])])])])},rt=[],it={name:"Navbar"},ot=it,ct=(a("d890"),Object(m["a"])(ot,nt,rt,!1,null,"25029e11",null)),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"sidenav"},[s("ul",{staticClass:"sidemenu p-0 m-0"},[s("li",[s("div",{staticClass:"d-flex"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],attrs:{variant:"white"}},[t._v("☰")])],1)]),s("li",[s("div",{staticClass:"d-flex"},[s("b-button",{staticClass:"active",attrs:{variant:"white"}},[s("img",{staticClass:"menu-icon",attrs:{src:a("41f6")}})])],1)]),t._l(3,(function(t){return s("li",{key:t},[s("div",{staticClass:"d-flex"},[s("b-button",{attrs:{variant:"link"}},[s("img",{staticClass:"menu-icon"})])],1)])}))],2)]),s("b-sidebar",{attrs:{id:"sidebar-backdrop","backdrop-variant":"dark","bg-variant":"white",width:"250px","no-header":"",backdrop:"",shadow:""}},[s("div",{staticClass:"pt-64px"},[s("ul",{staticClass:"sidemenu p-0 m-0"},[s("li",[s("div",[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],staticClass:"active d-flex align-items-center",attrs:{variant:"white"}},[s("img",{staticClass:"menu-icon",attrs:{src:a("41f6")}}),s("span",{staticStyle:{"margin-left":"16px","font-weight":"bold"}},[t._v("Dashboard")])])],1)]),t._l(3,(function(e){return s("li",{key:e},[s("div",[s("b-button",{staticClass:"d-flex align-items-center",attrs:{variant:"white"}},[s("img",{staticClass:"menu-icon"}),s("span",{staticStyle:{"margin-left":"16px"}},[t._v("Dummy Menu "+t._s(e))])])],1)])}))],2)])])],1)},ut=[],pt={name:"Sidebar"},ft=pt,bt=(a("59ce"),Object(m["a"])(ft,dt,ut,!1,null,"d6c25e34",null)),mt=bt.exports,gt={name:"App",components:{Dashboard:st,Navbar:lt,Sidebar:mt}},vt=gt,At=(a("034f"),Object(m["a"])(vt,n,r,!1,null,null,null)),ht=At.exports,yt=a("5f5b"),Ct=a("b1e0");a("f9e3"),a("2dd8"),a("4ee2");s["default"].use(yt["a"]),s["default"].use(Ct["a"]),s["default"].config.productionTip=!1,s["default"].filter("toRp",(function(t){if(""===t||isNaN(t))return"";var e=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:2}).format(t);return e})),new s["default"]({render:function(t){return t(ht)}}).$mount("#app")},"59ce":function(t,e,a){"use strict";a("34d6")},"5c80":function(t,e,a){"use strict";a("03bb")},"5d55":function(t,e,a){},"6f60":function(t,e,a){"use strict";a("5d55")},"6f68":function(t,e,a){"use strict";a("4f08")},7310:function(t,e,a){t.exports=a.p+"img/Profile.13a16178.svg"},"735a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAZZJREFUKJGVkUFrE1EUhc997zHMaCcY0BYJZCH0NwgidFUoXZv9LDMKsS504UIG6aoURpiFdGgD/oBWULtoobhUKCoBxaWQlSKmkKYJSSfvuAqUyRTSszznfuc+3pVGo7GqlXoNkQVcFAmSx2NrnyZJ8hkFMlqpbQEOLLmfD8XaP97Z2Y8iEACMiNwmsPcqjt9fNhRFkWq329er1eogiqJs4qvLgIvq9Xo3S6VS2Ol0loIgcK8Ej09OMgUsGKVelMvl5UnBTHC8s9Pp9fubFvgq5LMbc3MrtVrNMfnBIAhc3/fvGGNuFfR8AnBPjFmvVCpqCnZdt6S1XgFwt+gVJCkiiwDCKdjzvNMsyz5qrX/mMxGZh8hDkr8s+WYKjuN4AOBb3q/X6/Oe5z0GeT629iXJ3Zk+LAzD8jXXbQh535KJ1vptkiTDqc1FchzHoUgfWbY5GA6P0jQdADOeqtVq/RuNRlsZcJimaX/iy5O1td8QeSciH/KQtfZvt9v93mw2T4tKjSUfKZENkg/yoQBffN9/DuC4CP4P2LudUyGaM48AAAAASUVORK5CYII="},"75eb":function(t,e,a){t.exports=a.p+"img/Icon - More - Filled.5fd5bbaf.svg"},"7b2d":function(t,e,a){},"85ec":function(t,e,a){},8992:function(t,e,a){"use strict";a("7b2d")},ab2b:function(t,e,a){"use strict";a("01d0")},afbb:function(t,e,a){},b433:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAbJJREFUOI2llDtoFFEUhr+zZiObgItFglHEKAiaUguDpYhIgm2IqIWdARU7LSzsBEurGFDQoCCkFgsrEyR2ltFG8AHRVEEMRJTPwqOsy8zsoLe65/6P8597h4EaSz2nXqrD7atDAjaAZh1ioyDNjDqlhtpSTwK7ge3qKXVb8ibVqz0NgQfAMWAP8Ay4AKwCb4HTwJI6CpwAZuukRt2vLqqHC7AD6pJ6qJZZiubUgxX4iDpfhBXdYQAfgDcVPVeBdlHTP6+sngHGgMfAckT8KHOLCNUV4Ig6BXyKiNm/DIEnwGKme9fR6A5wFAjgVUScTagJfAHuApuls6hb1QW1P+sh9bp6Sx3Os4b6VN1VOnLHOJvqGrAPWImINfU+0B8Rn5O2I8f8WJqsK+WYuqy2sp5Qp3PfVF+o40XaKDCbzHQNYCQirql7M+Fr9TLQBt4DX4GFiLAsWZ96T21nPa8OqlfUG7l/lNjgb7wyYVeDh8A60EruBjAaERNlml5/m2/8+pw61/kqQS9Dge8FZ/9suAWY7jIZ+B/Dl8AQcDPrGWBnlaDXowwAF4HjyX0O3I6I9TLNTw92BrLd8cUhAAAAAElFTkSuQmCC"},b5be:function(t,e,a){t.exports=a.p+"img/DownArrow.a105846e.svg"},d890:function(t,e,a){"use strict";a("1941")},f286:function(t,e,a){t.exports=a.p+"img/Sales Turnover.da5d8ae5.svg"}});
//# sourceMappingURL=app.c3d6fe6d.js.map