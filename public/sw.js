if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const d=e=>s(e,c),r={module:{uri:c},exports:t,require:d};a[c]=Promise.all(n.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-b9c8580d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TMNt7c6f_egmFfY6CXVip/_buildManifest.js",revision:"e89557bb5a49718f7da3555e77967cea"},{url:"/_next/static/TMNt7c6f_egmFfY6CXVip/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4322cd96-d78235cad87d066720fd.js",revision:"d78235cad87d066720fd"},{url:"/_next/static/chunks/dff27125-d92a8c54a93affce74f4.js",revision:"d92a8c54a93affce74f4"},{url:"/_next/static/chunks/f10e284a-7301bcbeed024a7dde17.js",revision:"7301bcbeed024a7dde17"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"2191d16384373197bc0a"},{url:"/_next/static/chunks/main-43adb8a9683a610c0653.js",revision:"43adb8a9683a610c0653"},{url:"/_next/static/chunks/pages/_app-b398ea7b0400d66179f1.js",revision:"b398ea7b0400d66179f1"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"737a04e9a0da63c9d162"},{url:"/_next/static/chunks/pages/event/%5Bid%5D-00f5564099b2d0ed21bf.js",revision:"00f5564099b2d0ed21bf"},{url:"/_next/static/chunks/pages/index-8544e9129a7064bbed1d.js",revision:"8544e9129a7064bbed1d"},{url:"/_next/static/chunks/pages/login-b19e1e0a9db278a91b26.js",revision:"b19e1e0a9db278a91b26"},{url:"/_next/static/chunks/pages/signup-30e53e09c54bdcfca5f3.js",revision:"30e53e09c54bdcfca5f3"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-af28476a2e7790fd48db.js",revision:"af28476a2e7790fd48db"},{url:"/_next/static/css/1c5318b6ebbc503e3ae5.css",revision:"1c5318b6ebbc503e3ae5"},{url:"/_next/static/css/2dbaa7012f73fe3cf8dc.css",revision:"2dbaa7012f73fe3cf8dc"},{url:"/_next/static/css/55144b110ddd3b8403c6.css",revision:"55144b110ddd3b8403c6"},{url:"/_next/static/css/6c9e17366da707f91a71.css",revision:"6c9e17366da707f91a71"},{url:"/_next/static/css/ee0554ab33d9dde139e7.css",revision:"ee0554ab33d9dde139e7"},{url:"/favicon.ico",revision:"2196ba4a5c2944fb21338c428fe7aa78"},{url:"/icon/circle.svg",revision:"1ecac37a1e968b6fd59728c08cefa8da"},{url:"/icon/cross.svg",revision:"338196ab41ebe5048eac3dbf430a5fac"},{url:"/icon/triangle.svg",revision:"b41968fc8ccd857083543045afad1078"},{url:"/manifest.json",revision:"5b2df25f8c629b38cbad0b8719aa8259"},{url:"/pwa/android-icon-144x144.png",revision:"6d8e1c8f10e2536407f605e7ed33095c"},{url:"/pwa/android-icon-192x192.png",revision:"309a81425c363f688d53fa49da15818f"},{url:"/pwa/android-icon-36x36.png",revision:"def0b97739f93bc2913101a832569346"},{url:"/pwa/android-icon-48x48.png",revision:"59eb1d625228b116a310ccb77604d577"},{url:"/pwa/android-icon-512x512.png",revision:"db6c73b2f1ca30f6859a51e65344d107"},{url:"/pwa/android-icon-72x72.png",revision:"adc287b7d55485ac9de1d54ea33a68d9"},{url:"/pwa/android-icon-96x96.png",revision:"985f5ddee63418efbbc75ee8239b3ff3"},{url:"/pwa/apple-icon-114x114.png",revision:"c917b9b23a9d6e6150ede379499018d9"},{url:"/pwa/apple-icon-120x129.png",revision:"0b2b99d8f2adbc8b7b87ef38a080f731"},{url:"/pwa/apple-icon-144x144.png",revision:"6d8e1c8f10e2536407f605e7ed33095c"},{url:"/pwa/apple-icon-152x152.png",revision:"d1f772b5b16ec01bd5a71207af87a37f"},{url:"/pwa/apple-icon-180x180.png",revision:"23038ec0a4de387205bc652faac17eae"},{url:"/pwa/apple-icon-57x57.png",revision:"0aab0348e2ee0997777827171a9c94e0"},{url:"/pwa/apple-icon-60x60.png",revision:"a12384d022b2e678199eb225dc37ceb4"},{url:"/pwa/apple-icon-72x72.png",revision:"d4d76c91aa33cf42723f37f3af3c898b"},{url:"/pwa/apple-icon-76x76.png",revision:"c120352e2f2ed596ec911452d86ff483"},{url:"/pwa/apple-icon.png",revision:"7b67cde33de7fb160547de3570d98f10"},{url:"/pwa/favicon-16x16.png",revision:"bafa340bc96a454e9caee674503031c5"},{url:"/pwa/favicon-32x32.png",revision:"c1c8acbde6d19501dbb0300eb64083dd"},{url:"/pwa/favicon-96x96.png",revision:"90627eed32126e5a260ca261407a3970"},{url:"/pwa/ms-icon-144x144.png",revision:"6d8e1c8f10e2536407f605e7ed33095c"},{url:"/pwa/ms-icon-150x150.png",revision:"972816951947d4223fac3714c9e2e6a6"},{url:"/pwa/ms-icon-310x310.png",revision:"11e11c16eff23af933e1d708eb6b92ff"},{url:"/pwa/ms-icon-70x70.png",revision:"ce4b7903524b055527e1824c9d75f455"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
