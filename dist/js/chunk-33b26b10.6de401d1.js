(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33b26b10"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?a(t):o(r(t))}},"0693":function(t,e,n){"use strict";n("cdf1")},"1a15":function(t,e,n){},"1c62":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0,observeImage:!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("home-swiper",{attrs:{banners:t.banners},on:{imageLoad:t.swiperImageLoad}}),n("home-recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||a(t)||c(t)||u()}var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper",t._l(t.banners,(function(e,r){return n("swiper-item",{key:r},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)],1)},d=[],h=n("dc2c"),m={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:h["a"],SwiperItem:h["b"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("imageLoad"),this.isLoad=!0)}}},p=m,b=n("2877"),v=Object(b["a"])(p,f,d,!1,null,null,null),y=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e,r){return n("div",{key:r,staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},w=[],x={name:"HomeRecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},S=x,T=(n("cde2"),Object(b["a"])(S,g,w,!1,null,null,null)),C=T.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],_={name:"FeatureView"},k=_,j=(n("46b3"),Object(b["a"])(k,I,O,!1,null,null,null)),$=j.exports,A=n("a7ac"),E=n("9bd0"),L=n("6d71"),N=n("5d17"),W=n("fdd6"),H=n("1bab");function P(){return Object(H["a"])({url:"/home/multidata"})}function G(t,e){return Object(H["a"])({url:"/home/data",params:{type:t,page:e}})}var M=n("eecb"),F={name:"Home",components:{NavBar:A["a"],HomeSwiper:y,HomeRecommendView:C,FeatureView:$,TabControl:E["a"],GoodsList:L["a"],Scroll:N["a"],BackTop:W["a"]},mixins:[M["b"]],data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",showTop:!1,tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentType].list}},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.itemImgListener)},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){},methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},backTop:function(){this.$refs.scroll.scrollTo(0,0)},contentScroll:function(t){this.showTop=Math.abs(t.y)>1e3,this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;P().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;G(t,n).then((function(n){var r;(r=e.goods[t].list).push.apply(r,l(n.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}}},B=F,D=(n("93f2"),Object(b["a"])(B,r,o,!1,null,"086f7b98",null));e["default"]=D.exports},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),s=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"46b3":function(t,e,n){"use strict";n("d505")},"48fe":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),s=n("e95a"),a=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,h,m=o(t),p="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,y=void 0!==v,g=u(m),w=0;if(y&&(v=r(v,b>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(e=a(m.length),n=new p(e);e>w;w++)h=y?v(m[w],w):m[w],c(n,w,h);else for(f=g.call(m),d=f.next,n=new p;!(l=d.call(f)).done;w++)h=y?i(f,v,[l.value,w],!0):l.value,c(n,w,h);return n.length=w,n}},"4e7c":function(t,e,n){"use strict";n("99bb")},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"6d71":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t,e){return n("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},o=[],i=n("9977"),s={name:"GoodsList",components:{GoodsListItem:i["a"]},props:{goods:{type:Array,default:function(){return[]}}}},a=s,c=(n("8a4a"),n("2877")),u=Object(c["a"])(a,r,o,!1,null,null,null);e["a"]=u.exports},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?o.f(t,s,i(0,n)):t[s]=n}},8505:function(t,e,n){"use strict";n("cce7")},"8a4a":function(t,e,n){"use strict";n("adf1")},"93f2":function(t,e,n){"use strict";n("48fe")},"99bb":function(t,e,n){},"9bd0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{key:r,staticClass:"tab-control-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},o=[],i={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},s=i,a=(n("4e7c"),n("2877")),c=Object(a["a"])(s,r,o,!1,null,null,null);e["a"]=c.exports},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(s){throw o(t),s}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),h=n("861d"),m=n("825a"),p=n("7b0b"),b=n("fc6a"),v=n("c04e"),y=n("5c6c"),g=n("7c73"),w=n("df75"),x=n("241c"),S=n("057f"),T=n("7418"),C=n("06cf"),I=n("9bf2"),O=n("d1e7"),_=n("9112"),k=n("6eeb"),j=n("5692"),$=n("f772"),A=n("d012"),E=n("90e3"),L=n("b622"),N=n("e538"),W=n("746f"),H=n("d44e"),P=n("69f3"),G=n("b727").forEach,M=$("hidden"),F="Symbol",B="prototype",D=L("toPrimitive"),X=P.set,R=P.getterFor(F),J=Object[B],V=o.Symbol,Y=i("JSON","stringify"),U=C.f,z=I.f,q=S.f,Q=O.f,K=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),nt=j("wks"),rt=o.QObject,ot=!rt||!rt[B]||!rt[B].findChild,it=a&&l((function(){return 7!=g(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(J,e);r&&delete J[e],z(t,e,n),r&&t!==J&&z(J,e,r)}:z,st=function(t,e){var n=K[t]=g(V[B]);return X(n,{type:F,tag:t,description:e}),a||(n.description=e),n},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,e,n){t===J&&ct(Z,e,n),m(t);var r=v(e,!0);return m(n),f(K,r)?(n.enumerable?(f(t,M)&&t[M][r]&&(t[M][r]=!1),n=g(n,{enumerable:y(0,!1)})):(f(t,M)||z(t,M,y(1,{})),t[M][r]=!0),it(t,r,n)):z(t,r,n)},ut=function(t,e){m(t);var n=b(e),r=w(n).concat(mt(n));return G(r,(function(e){a&&!ft.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},ft=function(t){var e=v(t,!0),n=Q.call(this,e);return!(this===J&&f(K,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,M)&&this[M][e])||n)},dt=function(t,e){var n=b(t),r=v(e,!0);if(n!==J||!f(K,r)||f(Z,r)){var o=U(n,r);return!o||!f(K,r)||f(n,M)&&n[M][r]||(o.enumerable=!0),o}},ht=function(t){var e=q(b(t)),n=[];return G(e,(function(t){f(K,t)||f(A,t)||n.push(t)})),n},mt=function(t){var e=t===J,n=q(e?Z:b(t)),r=[];return G(n,(function(t){!f(K,t)||e&&!f(J,t)||r.push(K[t])})),r};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===J&&n.call(Z,t),f(this,M)&&f(this[M],e)&&(this[M][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(J,e,{configurable:!0,set:n}),st(e,t)},k(V[B],"toString",(function(){return R(this).tag})),k(V,"withoutSetter",(function(t){return st(E(t),t)})),O.f=ft,I.f=ct,C.f=dt,x.f=S.f=ht,T.f=mt,N.f=function(t){return st(L(t),t)},a&&(z(V[B],"description",{configurable:!0,get:function(){return R(this).description}}),s||k(J,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),G(w(nt),(function(t){W(t)})),r({target:F,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=V(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:l((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(p(t))}}),Y){var pt=!c||l((function(){var t=V();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(h(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,Y.apply(null,o)}})}V[B][D]||_(V[B],D,V[B].valueOf),H(V,F),A[M]=!0},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:o})},adf1:function(t,e,n){},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,s=i.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},cce7:function(t,e,n){},cde2:function(t,e,n){"use strict";n("1a15")},cdf1:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},d505:function(t,e,n){},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,r){return n("div",{key:r,staticClass:"indi-item",class:{active:r===t.currentIndex-1}})}))):t._e()],2)],2)},o=[],i=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),r=e[this.slideCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(){var t=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&t>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&t>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),s=i,a=(n("8505"),n("2877")),c=Object(a["a"])(s,r,o,!1,null,"3e9a8307",null),u=c.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},f=[],d={name:"Slide"},h=d,m=(n("0693"),Object(a["a"])(h,l,f,!1,null,"376fae32",null)),p=m.exports},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var h=d.prototype=l.prototype;h.constructor=d;var m=h.toString,p="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=m.call(t);if(s(f,t))return"";var n=p?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),s=n("23cb"),a=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=f("slice"),h=l("species"),m=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,l,f=c(this),d=a(f.length),b=s(t,d),v=s(void 0===e?d:e,d);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(f,b,v);for(r=new(void 0===n?Array:n)(p(v-b,0)),l=0;b<v;b++,l++)b in f&&u(r,l,f[b]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-33b26b10.6de401d1.js.map