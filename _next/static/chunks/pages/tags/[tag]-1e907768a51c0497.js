(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7516:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return t(5884)}])},4707:function(e,r,t){"use strict";t.d(r,{E:function(){return l}});var n=t(5893),i=t(7294),c=t(1891);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.forwardRef((function(e,r){var t=e.children,i=e.src,l=e.alt,s=o(e,["children","src","alt"]),u=(0,c.O)()+i;return(0,n.jsx)("img",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({src:u,alt:l},s,{ref:r,children:t}))}));l.displayName="Image"},6195:function(e,r,t){"use strict";t.d(r,{A:function(){return k}});var n=t(5893),i=t(958),c=t(9352),a=t(7294),o=t(9221),l=t(8820),s=t(3746),u=t(1190),f=(0,t(6902).ZP)((function(e){return{open:!1,setOpen:function(r){return e((function(){return{open:r}}))}}}));function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function h(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=(0,s.E)(l.g7),x={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},g=function(e){var r=e.children,t=h(e,["children"]),i=f((function(e){return e.setOpen}));return(0,n.jsx)(o.fC,m({},t,{onOpenChange:function(e){return i(e)},children:r}))},v=a.forwardRef((function(e,r){var t=e.children,i=h(e,["children"]),c=f((function(e){return e})).open;return(0,n.jsx)(u.M,{children:c&&(0,n.jsx)(p,m({},x,{children:(0,n.jsx)(l.g7,m({},i,{children:(0,n.jsx)(o.VY,{ref:r,forceMount:!0,children:t})}))}))})}));v.displayName="DropdownMenuContent";var b=o.xz,j=o.ck,y=t(2737),w=t(9562),O=function(e){var r=e.children;return(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{asChild:!0,children:(0,n.jsx)("button",{className:"icon-btn rounded-full bg-white dark:bg-black shadow-xl","aria-label":"hamburger menu",children:(0,n.jsx)(c.I0R,{size:28})})}),(0,n.jsxs)(v,{sideOffset:8,collisionTolerance:16,className:"vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg",children:[(0,n.jsx)("div",{className:"center",children:w.O.map((function(e){var r=e.name,t=e.href,i=e.icon;return(0,n.jsx)(j,{onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},className:"text-md text-primary-1 hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer",children:(0,n.jsx)(y.r,{href:t,passHref:!0,children:(0,n.jsxs)("a",{className:"hstack gap-3 py-3 px-6",children:[i," ",r]})})},r)}))}),r]})]})},N=t(7377),k=function(e){var r=e.main,t=e.aside,c=e.hamburgerMenu,a=(0,N.P)("lg");return(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-10",children:[(0,n.jsx)("div",{className:"lg:col-span-2",children:(0,n.jsx)("main",{children:r})}),(0,n.jsx)("aside",{children:t}),a||(0,n.jsx)(i.h_,{children:(0,n.jsx)("div",{className:"fixed left-8 bottom-8",children:(0,n.jsx)(O,{children:c})})})]})}},397:function(e,r,t){"use strict";t.d(r,{E:function(){return a}});var n=t(5893),i=t(9352),c=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},a=function(e){var r=e.date;return(0,n.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,n.jsx)(i.N$g,{}),c(r)]})}},9384:function(e,r,t){"use strict";t.d(r,{N:function(){return o}});var n=t(5893),i=t(4707),c=t(7735),a=[{icon:(0,n.jsx)(c.jVV,{size:20})},{icon:(0,n.jsx)(c.pZu,{size:20})},{icon:(0,n.jsx)(c.mWf,{size:20})}],o=function(){return(0,n.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,n.jsx)(i.E,{className:"object-cover w-28 h-28 rounded-full bg-white",alt:"subt avatar",src:"/assets/author.png"}),(0,n.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"subt"})]}),(0,n.jsx)("p",{className:"text-primary-1",children:"Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI."}),(0,n.jsx)("div",{className:"flex gap-4",children:a.map((function(e,r){var t=e.icon;return(0,n.jsx)("div",{className:"text-primary-1",children:t},r)}))})]})}},77:function(e,r,t){"use strict";t.d(r,{f:function(){return l}});var n=t(5893),i=t(4707),c=t(2737),a=t(397),o=function(e){var r=e.title,t=e.coverImage,o=e.date,l=e.excerpt,s=e.slug;return(0,n.jsx)(c.r,{href:"/posts/".concat(s),children:(0,n.jsxs)("a",{className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ",children:[(0,n.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,n.jsx)(i.E,{src:t,alt:"Cover Image for ".concat(r),className:"w-full max-w-xs h-full object-cover"})}),(0,n.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,n.jsx)(a.E,{date:o}),(0,n.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:r}),(0,n.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:l})]})]})})},l=function(e){var r=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-primary-1 mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Stories"}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-10",children:r.map((function(e){return(0,n.jsx)(o,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},7377:function(e,r,t){"use strict";t.d(r,{P:function(){return o}});var n=t(7294);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,c=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(c.push(n.value),!r||c.length!==r);a=!0);}catch(l){o=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(o)throw i}}return c}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a={sm:640,md:768,lg:1024,xl:1280},o=function(e){return function(){var e=c(n.useState({width:0,height:0}),2),r=e[0],t=e[1];return n.useEffect((function(){var e=function(){return t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),r}().width>=a[e]}},5884:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return s},default:function(){return u}});var n=t(5893),i=t(6195),c=t(9384),a=t(77),o=function(e){var r=e.posts;return(0,n.jsx)(i.A,{main:(0,n.jsx)("div",{className:"p-8 bg-primary-1",children:(0,n.jsx)(a.f,{posts:r})}),aside:(0,n.jsx)(c.N,{})})};function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var s=!0,u=function(e){return(0,n.jsx)(o,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){l(e,r,t[r])}))}return e}({},e))}}},function(e){e.O(0,[415,937,256,774,888,179],(function(){return r=7516,e(e.s=r);var r}));var r=e.O();_N_E=r}]);