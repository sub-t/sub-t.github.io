if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/R5IYAU8bohHvmYyIOjZW_/_buildManifest.js",revision:"d038015076ee31116288415898e6a2a2"},{url:"/_next/static/R5IYAU8bohHvmYyIOjZW_/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/R5IYAU8bohHvmYyIOjZW_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/252f366e-75931ac92edbacfb.js",revision:"75931ac92edbacfb"},{url:"/_next/static/chunks/256-66d7a844c7e4cd3c.js",revision:"66d7a844c7e4cd3c"},{url:"/_next/static/chunks/585-83005a2f4ef3db45.js",revision:"83005a2f4ef3db45"},{url:"/_next/static/chunks/78e521c3-b788f792bb30a0b7.js",revision:"b788f792bb30a0b7"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-784e916df6ec1917.js",revision:"784e916df6ec1917"},{url:"/_next/static/chunks/pages/404-a8525209a4f996d7.js",revision:"a8525209a4f996d7"},{url:"/_next/static/chunks/pages/_app-b0859693047397a9.js",revision:"b0859693047397a9"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/about-710a5402d5a8f9d5.js",revision:"710a5402d5a8f9d5"},{url:"/_next/static/chunks/pages/index-5eb0dd4223468a76.js",revision:"5eb0dd4223468a76"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-8444c529d536db12.js",revision:"8444c529d536db12"},{url:"/_next/static/chunks/pages/posts/page/%5Bpage%5D-c7ab0ec873a43bc2.js",revision:"c7ab0ec873a43bc2"},{url:"/_next/static/chunks/pages/tags-10e8ef6258d75da9.js",revision:"10e8ef6258d75da9"},{url:"/_next/static/chunks/pages/tags/%5Btag%5D-553599b29cd8a715.js",revision:"553599b29cd8a715"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-df4cf1c8d23aa877.js",revision:"df4cf1c8d23aa877"},{url:"/_next/static/css/253ecef90bf34b8a.css",revision:"253ecef90bf34b8a"},{url:"/_next/static/css/7b203be1511c3192.css",revision:"7b203be1511c3192"},{url:"/assets/author.png",revision:"829b50d88d20785c48d0eb603a1d5368"},{url:"/assets/blog/dynamic-routing/cover.jpg",revision:"50bc698719258529c800491531a3fe21"},{url:"/assets/blog/hello-world/cover.jpg",revision:"faa59500b8a23c3dade89705c3d663a8"},{url:"/assets/blog/preview/cover.jpg",revision:"ea4aba2e4b93a3bb05f45b5a99cf6cc6"},{url:"/favicon.ico",revision:"464fc3ebf4d24995e8b4b50fb479af5b"},{url:"/favicons/android-chrome-192x192.png",revision:"8a9c1aae98aa36235f0aacdfd4eb6c06"},{url:"/favicons/android-chrome-512x512.png",revision:"8cd629c50d41f5fa3b6dc3e16361941f"},{url:"/favicons/apple-touch-icon.png",revision:"9a4ebd20d416d11ba8f42ec89ac163c8"},{url:"/favicons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicons/favicon-16x16.png",revision:"2cb959d951e7eef95b6cea7d70d8959d"},{url:"/favicons/favicon-32x32.png",revision:"5f6f6accd26b7f64000169b71d1d1ab3"},{url:"/favicons/mstile-150x150.png",revision:"77b4facc7f90887da7877648c6d76cde"},{url:"/favicons/safari-pinned-tab.svg",revision:"c2837191a34fa5fdbcd7b9e4cff54a8d"},{url:"/manifest.json",revision:"1deacbda571673e4b69d584b8ad05e54"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
