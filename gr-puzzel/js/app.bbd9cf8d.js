(function(t){function s(s){for(var e,u,r=s[0],o=s[1],l=s[2],h=0,f=[];h<r.length;h++)u=r[h],a[u]&&f.push(a[u][0]),a[u]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);c&&c(s);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,s=0;s<i.length;s++){for(var n=i[s],e=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(e=!1)}e&&(i.splice(s--,1),t=u(u.s=n[0]))}return t}var e={},a={app:0},i=[];function u(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=e,u.d=function(t,s,n){u.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,s){if(1&s&&(t=u(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)u.d(n,e,function(s){return t[s]}.bind(null,e));return n},u.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(s,"a",s),s},u.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},u.p="/gr-puzzel/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var c=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,s,n){t.exports=n("56d7")},"56d7":function(t,s,n){"use strict";n.r(s);n("cadf"),n("551c"),n("f751"),n("097d");var e=n("2b0e"),a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"octagon"},[n("Lights",{staticClass:"octagon__light octagon__light--one",attrs:{amount:5}}),n("Lights",{staticClass:"octagon__light octagon__light--two",attrs:{amount:6}}),n("Lights",{staticClass:"octagon__light octagon__light--three",attrs:{amount:7}})],1)])},i=[],u=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",{staticClass:"lights"},t._l(t.lights,function(s,e){return n("li",{key:e,staticClass:"lights__item light"},[n("div",{staticClass:"light",class:{"light--on":!0===s.status}}),n("div",{staticClass:"lever",class:{"lever--on":!0===s.status},on:{click:function(s){return s.preventDefault(),t.turnLever(e)}}})])}),0)},r=[],o={name:"lichtPuzzel",props:["amount"],data:function(){return{lights:[]}},computed:{},mounted:function(){5===this.amount&&(this.lights=[{status:!0},{status:!1},{status:!1},{status:!0},{status:!1}]),6===this.amount&&(this.lights=[{status:!0},{status:!1},{status:!0},{status:!1},{status:!0},{status:!0}]),7===this.amount&&(this.lights=[{status:!1},{status:!0},{status:!1},{status:!0},{status:!0},{status:!1},{status:!1}])},methods:{turnLever:function(t){this.lights[t-1]&&(this.lights[t-1].status=!this.lights[t-1].status),this.lights[t+1]&&(this.lights[t+1].status=!this.lights[t+1].status),this.lights[t].status=!this.lights[t].status}}},l=o,c=(n("7495"),n("2877")),h=Object(c["a"])(l,u,r,!1,null,null,null),f=h.exports,p={name:"app",components:{Lights:f}},g=p,d=(n("5c0b"),Object(c["a"])(g,a,i,!1,null,null,null)),v=d.exports,_=n("2f62");e["a"].use(_["a"]);var m=new _["a"].Store({state:{},mutations:{},actions:{}});e["a"].config.productionTip=!1,new e["a"]({store:m,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,s,n){"use strict";var e=n("5e27"),a=n.n(e);a.a},"5e27":function(t,s,n){},7495:function(t,s,n){"use strict";var e=n("dc19"),a=n.n(e);a.a},dc19:function(t,s,n){}});
//# sourceMappingURL=app.bbd9cf8d.js.map