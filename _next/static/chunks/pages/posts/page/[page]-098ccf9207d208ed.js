(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1013:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/page/[page]",function(){return n(4120)}])},4120:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return N},default:function(){return A}});var t=n(5893),o=n(1163),a=n(4028),i=n(2737),c=n(7294),u=n(5002);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){l(e,r,n[r])}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=c.forwardRef((function(e,r){var n=e.children,o=e.href,a=e.condition,i=s(e,["children","href","condition"]);return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)(u.r,f({href:o,passHref:!0},i,{ref:r,children:(0,t.jsx)("a",{children:n})})):(0,t.jsx)(t.Fragment,{children:n})})}));function b(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.filter(Boolean).join(" ")}p.displayName="ConditionalLink";var d={default:"",arrow:"",ellipsis:"w-auto px-1"},y=function(e){var r=e.children,n=e.variant,o=void 0===n?"default":n,a=e.active,i=e.disabled;return(0,t.jsx)("div",{className:b(d[o],i?"text-neutral-300 dark:text-neutral-600 ":"",a?"bg-teal-800 dark:bg-teal-600 text-white dark:text-white":"","center w-8 h-8 rounded-full text-lg text-accent-1"),children:r})},h=function(e){var r=e.cell,n=e.page,o=e.count;switch(r){case"<":return(0,t.jsx)(p,{condition:n>1,href:"posts/page/".concat(n-1),children:(0,t.jsx)("button",{type:"button","aria-label":"\u524d\u306b\u623b\u308b",disabled:1===n,children:(0,t.jsx)(y,{variant:"arrow",disabled:1===n,children:r})})});case">":return(0,t.jsx)(p,{condition:n<o,href:"/posts/page/".concat(n+1),children:(0,t.jsx)("button",{type:"button","aria-label":"\u6b21\u306b\u9032\u3080",disabled:n===o,children:(0,t.jsx)(y,{variant:"arrow",disabled:n===o,children:r})})});case"...":return(0,t.jsx)(y,{variant:"ellipsis",children:r});default:return(0,t.jsx)(i.r,{href:"posts/page/".concat(r),passHref:!0,children:(0,t.jsx)("a",{children:(0,t.jsx)(y,{active:r===n,children:r})})})}};function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function j(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return g(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m={count:-1,page:-1,siblingCount:1,boundaryCount:1},x=function(e){var r,n=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){j(e,r,n[r])}))}return e}({},m,e),t=n.count,o=n.page,a=n.siblingCount,i=n.boundaryCount,c=i+1+a,u=c+1>=o,l=t-c<=o;return r=u&&l?O(1,t+1):u?v(O(1,c+1+a+1)).concat(["..."],v(O(t+1-i,t+1))):l?v(O(1,i+1)).concat(["..."],v(O(t+1-(a+1+c),t+1))):v(O(1,1+i)).concat(["..."],v(O(o-a,o+a+1)),["..."],v(O(t+1-i,t+1))),["<"].concat(v(r),[">"])},O=function(e,r){return Array.from({length:r-e}).map((function(r,n){return e+n}))},w=function(e){var r=x(e),n=e.page,o=e.count;return(0,t.jsx)("div",{className:"overflow-x-auto w-full center",children:(0,t.jsx)("div",{className:"flex gap-1 px-4",children:r.map((function(e,r){return(0,t.jsx)(h,{cell:e,page:n,count:o},r)}))})})},P=n(9384),S=n(77),_=function(e){var r=e.posts,n=e.maxPage,i=Number((0,o.useRouter)().query.page);return(0,t.jsx)(a.A,{main:(0,t.jsxs)("div",{className:"vstack gap-10 p-8 bg-primary-1",children:[(0,t.jsx)(S.f,{posts:r}),(0,t.jsx)(w,{count:n,page:i})]}),aside:(0,t.jsx)(P.N,{})})};function k(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var N=!0,A=function(e){return(0,t.jsx)(_,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){k(e,r,n[r])}))}return e}({},e))}},1163:function(e,r,n){e.exports=n(880)}},function(e){e.O(0,[415,228,937,256,74,774,888,179],(function(){return r=1013,e(e.s=r);var r}));var r=e.O();_N_E=r}]);