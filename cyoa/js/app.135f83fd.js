(function(e){function t(t){for(var o,a,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2848:function(e,t,n){"use strict";n.r(t);var o={currentStep:1},r={},i={setCurrentStep:function(e,t){e.currentStep=t}},a={};t["default"]={state:o,getters:a,mutations:i,actions:r,namespaced:!0}},"2a74":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var o=n("d307"),r={};o.keys().forEach((function(e){"./index.js"!==e&&(r[e.replace(/(\.\/|\.js)/g,"")]=o(e).default)})),t["default"]=r},"2c0b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bus",(function(){return P}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},i=[],a={name:"App",components:{},computed:{},mounted:function(){},methods:{}},u=a,s=n("2877"),c=Object(s["a"])(u,r,i,!1,null,null,null),d=c.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"storyboard",style:{"background-image":"url("+e.storyboard.background+")"}},[n("div",{staticClass:"storyboard__body"},[n("h1",[e._v(e._s(e.storyboard.title))]),e.storyboard.body?n("div",{domProps:{innerHTML:e._s(e.storyboard.body)}}):e._e()]),e.storyboard.outcomes&&e.storyboard.outcomes.length?n("div",{staticClass:"outcome"},e._l(e.storyboard.outcomes,(function(t,o){return n("div",{key:o,staticClass:"outcome__item",class:"outcome__item--"+t.type},[n("h2",[e._v(e._s(t.title))]),t.body?n("div",{domProps:{innerHTML:e._s(t.body)}}):e._e()])})),0):e._e(),e.storyboard.decisions&&e.storyboard.decisions.length?n("div",{staticClass:"decisions"},e._l(e.storyboard.decisions,(function(t,o){return n("div",{key:o,staticClass:"decision__item"},[n("h2",[e._v(e._s(t.title))]),t.body?n("div",{domProps:{innerHTML:e._s(t.body)}}):e._e()])})),0):e._e()]),n("div",{staticClass:"navigation"},[e.currentStep>1?n("button",{staticClass:"navigation__button navigation__button--previous",on:{click:function(t){return t.preventDefault(),e.previousStep()}}},[e._v(" Vorige ")]):n("span"),e.currentStep<e.story.length?n("button",{staticClass:"navigation__button navigation__button--next",on:{click:function(t){return t.preventDefault(),e.nextStep()}}},[e._v(" Volgende ")]):e._e()])])},f=[],b=n("5530"),v=n("2f62"),m={name:"Adventure",components:{},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(v["b"])("story",["story"])),Object(v["b"])("adventure",["currentStep"])),{},{storyboard:function(){return this.$store.getters["story/getCurrentStep"](this.currentStep)}}),mounted:function(){},methods:{nextStep:function(){this.$store.commit("adventure/setCurrentStep",this.currentStep+1)},previousStep:function(){this.$store.commit("adventure/setCurrentStep",this.currentStep-1)}}},h=m,y=(n("7bc6"),Object(s["a"])(h,p,f,!1,null,"51a1dd7e",null)),g=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Move along, nothing to see here. ")])},j=[],k={name:"404",components:{},computed:{},mounted:function(){},methods:{}},w=k,O=Object(s["a"])(w,_,j,!1,null,null,null),S=O.exports;o["a"].use(l["a"]);var x=new l["a"]({routes:[{path:"/",name:"Adventure",component:g,meta:{title:"Welkom bij Adventure"}},{path:"*",name:"404",component:S,meta:{title:"Niet gevonden"}}]}),C=n("2a74");o["a"].use(v["a"]);var M=new v["a"].Store({modules:C["default"],strict:!1}),P=new o["a"];o["a"].config.productionTip=!1,new o["a"]({router:x,store:M,render:function(e){return e(d)}}).$mount("#app")},6726:function(e,t,n){"use strict";n.r(t);n("7db0");var o={story:[{step:1,type:"text",background:"http://placehold.it/1920x1080",title:"Uitleg van het spel",body:"\n        <ul><li>Mag gewoon</li><li>html in zitten</li></ul>\n        <p>Blaboepie</p>\n      "},{step:2,type:"decision",background:"http://placehold.it/1920x1080",title:"Jullie starten jullie tocht naar het sinterklaas huis",body:"Aangekomen bij een rij huizen zien jullie een cadeau op het dak liggen",decisions:[{title:"Gebruik een artikel uit jullie rugtas om het cadeau te bemachtingen",body:"Overleg in je team. De teamleider geeft definitief het antwoord door"}]},{step:3,type:"itemChoice",background:"http://placehold.it/1920x1080",title:"Uitkomst",outcomes:[{type:"positive",title:"Kozen jullie het touw of de ladder?",body:"Jullie weten het cadeau te bemachtigen! (Schrijf deze op)",consequence:"De trap/ladder waait weg nadat je je voeten weer op de grond zet. Deze is nu stuk (streep dit artikel door)"},{type:"negative",title:"Kozen jullie geen touw of de ladder?",body:"Jullie weten het cadeau niet te bemachtigen!",consequence:"Jullie artikel is dusdanig misbruikt bij het beklimmen van het dak dat deze onbruikbaar is geworden(streep dit artikel door)"}]}]},r={},i={},a={getCurrentStep:function(e){return function(t){return e.story.find((function(e){return e.step===t}))}}};t["default"]={state:o,getters:a,mutations:i,actions:r,namespaced:!0}},"7bc6":function(e,t,n){"use strict";var o=n("2c0b"),r=n.n(o);r.a},d307:function(e,t,n){var o={"./adventure.js":"2848","./index.js":"2a74","./story.js":"6726"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="d307"}});
//# sourceMappingURL=app.135f83fd.js.map