(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5540)}])},8572:function(e,n,r){"use strict";r.d(n,{E:function(){return s}});var t=r(5893),i=r(9352),a=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},s=function(e){var n=e.date;return(0,t.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,t.jsx)(i.N$g,{}),a(n)]})}},4949:function(e,n,r){"use strict";r.d(n,{A:function(){return P}});var t=r(5893),i=r(7377),a=r(7294),s=r(958),c=r(8820),l=r(3746),o=r(9221),u=r(1190),d=(0,r(6902).ZP)((function(e){return{open:!1,setOpen:function(n){return e((function(){return{open:n}}))}}}));function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){f(e,n,r[n])}))}return e}function m(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var x=(0,l.E)(c.g7),p={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},g=function(e){var n=e.children,r=m(e,["children"]),i=d((function(e){return e.setOpen}));return(0,t.jsx)(o.fC,h({},r,{onOpenChange:function(e){return i(e)},children:n}))},j=a.forwardRef((function(e,n){var r=e.children,i=m(e,["children"]),a=d((function(e){return e})).open;return(0,t.jsx)(u.M,{children:a&&(0,t.jsx)(x,h({},p,{children:(0,t.jsx)(c.g7,h({},i,{children:(0,t.jsx)(o.VY,{ref:n,forceMount:!0,children:r})}))}))})}));j.displayName="DropdownMenuContent";var v=o.xz,b=o.ck,y=r(4929),w=r(9562),N=r(5434),O=r(9352),k=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{asChild:!0,children:(0,t.jsx)("button",{"aria-label":"hamburger menu",className:"icon-btn rounded-full bg-white dark:bg-black shadow-xl",children:(0,t.jsx)(O.I0R,{size:28})})}),(0,t.jsx)("div",{className:"p-1 icon-btn absolute -bottom-2 -right-2 rounded-full bg-white dark:bg-black shadow-xl cursor-grab",children:(0,t.jsx)(N.iVq,{size:16})})]})},E=function(e){var n=e.children;return(0,t.jsxs)(g,{children:[(0,t.jsx)(k,{}),(0,t.jsxs)(j,{sideOffset:8,collisionTolerance:16,className:"vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg",children:[(0,t.jsx)("div",{className:"center",children:w.O.map((function(e){var n=e.name,r=e.href,i=e.icon;return(0,t.jsx)(b,{onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},className:"text-md text-primary-1 hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer",children:(0,t.jsx)(y.r,{href:r,passHref:!0,children:(0,t.jsxs)("a",{className:"hstack gap-3 py-3 px-6",children:[i," ",n]})})},n)}))}),n]})]})},S=(0,l.E)(c.g7),_=function(e){var n=e.hamburgerMenu,r=a.useRef(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h_,{ref:r,style:{zIndex:-1,position:"fixed",inset:16}}),(0,t.jsx)(s.h_,{children:(0,t.jsx)(S,{drag:!0,dragConstraints:r,children:(0,t.jsx)("div",{className:"z-50 fixed left-8 bottom-8",children:(0,t.jsx)(E,{children:n})})})})]})},P=function(e){var n=e.main,r=e.aside,a=e.hamburgerMenu,s=(0,i.P)("lg");return(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-10",children:[(0,t.jsx)("div",{className:"lg:col-span-2",children:(0,t.jsx)("main",{children:n})}),(0,t.jsx)("aside",{children:r}),s||(0,t.jsx)(_,{hamburgerMenu:a})]})}},713:function(e,n,r){"use strict";r.d(n,{N:function(){return s}});var t=r(5893),i=r(7735),a=[{icon:(0,t.jsx)(i.jVV,{size:20})},{icon:(0,t.jsx)(i.pZu,{size:20})},{icon:(0,t.jsx)(i.mWf,{size:20})}],s=function(){return(0,t.jsxs)("div",{className:"select-none vstack items-center gap-5 p-6 bg-primary-1",children:[(0,t.jsxs)("div",{className:"vstack items-center gap-2",children:[(0,t.jsx)("img",{className:"object-cover w-28 h-28 rounded-full bg-white",alt:"subt avatar",src:"/assets/author.png"}),(0,t.jsx)("h1",{className:"text-2xl font-semibold text-primary-1",children:"subt"})]}),(0,t.jsx)("p",{className:"text-primary-1",children:"Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI."}),(0,t.jsx)("div",{className:"flex gap-4",children:a.map((function(e,n){var r=e.icon;return(0,t.jsx)("div",{className:"text-primary-1",children:r},n)}))})]})}},1362:function(e,n,r){"use strict";r.d(n,{f:function(){return c}});var t=r(5893),i=r(4929),a=r(8572),s=function(e){var n=e.title,r=e.coverImage,s=e.date,c=e.excerpt,l=e.slug;return(0,t.jsx)(i.r,{href:"/posts/".concat(l),children:(0,t.jsxs)("a",{className:"select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ",children:[(0,t.jsx)("div",{className:"center w-full md:w-1/3 h-52 md:h-full bg-neutral-50 md:bg-transparent",children:(0,t.jsx)("img",{src:r,alt:n,className:"w-full max-w-xs h-full object-cover"})}),(0,t.jsxs)("div",{className:"md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1",children:[(0,t.jsx)(a.E,{date:s}),(0,t.jsx)("h3",{className:"text-primary-1 text-xl font-medium",children:n}),(0,t.jsx)("p",{className:"text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3",children:c})]})]})})},c=function(e){var n=e.posts;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"text-primary-1 mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Stories"}),(0,t.jsx)("div",{className:"grid grid-cols-1 gap-10",children:n.map((function(e){return(0,t.jsx)(s,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},7377:function(e,n,r){"use strict";r.d(n,{P:function(){return c}});var t=r(7294);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);s=!0);}catch(l){c=!0,i=l}finally{try{s||null==r.return||r.return()}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s={sm:640,md:768,lg:1024,xl:1280},c=function(e){return function(){var e=a(t.useState({width:0,height:0}),2),n=e[0],r=e[1];return t.useEffect((function(){var e=function(){return r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),n}().width>=s[e]}},5540:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return x},default:function(){return p}});var t=r(5893),i=r(4929),a=r(4949),s=r(713),c=(r(7294),r(8820)),l=(0,r(3746).E)(c.g7),o={initial:{},hover:{}},u={initial:{opacity:0},hover:{opacity:1}},d=function(){return(0,t.jsx)(l,{variants:o,transition:{staggerChildren:.1},initial:"initial",whileHover:"hover",children:(0,t.jsxs)("div",{className:"btn",children:[(0,t.jsx)("div",{className:"w-10"}),"\u3082\u3063\u3068\u898b\u308b",(0,t.jsx)("div",{className:"hstack",children:Array.from({length:3}).map((function(e,n){return(0,t.jsx)(l,{variants:u,children:(0,t.jsx)("div",{children:">"})},n)}))})]})})},f=r(1362),h=function(e){var n=e.posts;return(0,t.jsx)(a.A,{main:(0,t.jsxs)("div",{className:"vstack gap-12 p-8 bg-primary-1",children:[(0,t.jsx)(f.f,{posts:n}),(0,t.jsx)(i.r,{href:"/posts/page/1",passHref:!0,children:(0,t.jsx)("a",{children:(0,t.jsx)(d,{})})})]}),aside:(0,t.jsx)(s.N,{})})};function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var x=!0,p=function(e){return(0,t.jsx)(h,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){m(e,n,r[n])}))}return e}({},e))}}},function(e){e.O(0,[415,228,937,256,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);