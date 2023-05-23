"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(687),s=n.n(c),u=n(791),o=n(689),i=n(87),p=n(485),f=n(207),l=n(184);t.default=function(){var e,t=(0,u.useState)(""),n=(0,a.Z)(t,2),c=n[0],h=n[1],d=(0,u.useState)([]),m=(0,a.Z)(d,2),v=m[0],w=m[1],g=(0,u.useState)(""),y=(0,a.Z)(g,2),b=y[0],x=y[1],Z=(0,o.TH)(),k=(0,i.lr)(),S=(0,a.Z)(k,2),j=S[0],_=S[1],D=null!==(e=j.get("query"))&&void 0!==e?e:"";return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchSearchingMovies(c);case 3:0!==(t=e.sent).results.length?(w(t.results),x("")):x("\ud83d\ude45\u200d\u2640\ufe0f Unfortunately there are no such movies"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),w([]),x(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),h(D),""===D.trim())return alert("\ud83e\udd84 Please enter text to search movies")},children:[(0,l.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:D,onChange:function(e){var t=e.currentTarget.value.toLowerCase();_(""!==t?{query:t}:{})}}),(0,l.jsx)("button",{type:"submit",className:"button",children:(0,l.jsx)("span",{className:"button-label",children:"Search"})})]}),b?(0,l.jsx)("p",{children:b}):(0,l.jsx)("ul",{children:v.map((function(e){var t=e.id,n=e.title,r=e.release_date;return(0,l.jsx)("li",{children:(0,l.jsxs)(i.rU,{to:"".concat(t),state:{from:Z},children:[n," (",(0,p.Z)(new Date(r)),")"]})},t)}))})]})}},207:function(e,t,n){var r=n(861),a=n(687),c=n.n(a),s=n(243),u="0dd8a44a838b85596fd1a072a37c7f7d",o="https://api.themoviedb.org/3/";function i(){return(i=(0,r.Z)(c().mark((function e(){var t,n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:u,page:1}),n="".concat(o,"trending/movie/day?").concat(t),e.next=4,s.Z.get(n);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u,page:1,query:t}),r="".concat(o,"search/movie?").concat(n),e.next=4,s.Z.get(r);case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u}),r="".concat(o,"movie/").concat(t,"?").concat(n),e.next=4,s.Z.get(r);case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u,page:1}),r="".concat(o,"movie/").concat(t,"/reviews?").concat(n),e.next=4,s.Z.get(r);case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:u}),r="".concat(o,"movie/").concat(t,"/credits?").concat(n),e.next=4,s.Z.get(r);case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={fetchTrandingMovies:function(){return i.apply(this,arguments)},fetchSearchingMovies:function(e){return p.apply(this,arguments)},fetchMovie:function(e){return f.apply(this,arguments)},fetchReviews:function(e){return l.apply(this,arguments)},fetchCast:function(e){return h.apply(this,arguments)}};t.Z=d},485:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2);function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(e){return a(1,arguments),c(e).getFullYear()}}}]);
//# sourceMappingURL=134.9086df43.chunk.js.map