if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>s(e,o),a={module:{uri:o},exports:t,require:l};i[o]=Promise.all(n.map((e=>a[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3dd7a3c1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-touch-icon.882f145e.png",revision:null},{url:"assets/favicon.3c7e6317.ico",revision:null},{url:"assets/index.08082564.js",revision:null},{url:"assets/index.6153fb23.css",revision:null},{url:"assets/safari-pinned-tab.ef92233a.svg",revision:null},{url:"favicon.ico",revision:"bea7aa31cd7f23c029a6ae005a44a67b"},{url:"index.html",revision:"02efe5aee7d1065d6d444ef2a14092fe"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"bea7aa31cd7f23c029a6ae005a44a67b"},{url:"manifest.webmanifest",revision:"b2642d7f314ce6ba92b03880e1d86a7e"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
