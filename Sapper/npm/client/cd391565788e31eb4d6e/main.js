!function(t){function e(e){for(var n,o,a=e[0],c=e[1],s=0,l=[];s<a.length;s++)o=a[s],r[o]&&l.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(i&&i(e);l.length;)l.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=a);var c,s=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(t){return o.p+"cd391565788e31eb4d6e/"+({1:"index",2:"about",3:"blog",4:"blog_$slug"}[t]||t)+"."+t+".js"}(t),c=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[t]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,s.appendChild(i)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="client/",o.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var i=c;o(o.s=1)}([function(t,e,n){"use strict";function r(){}function o(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n)}function s(t){t.parentNode.removeChild(t)}function i(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(t){return Array.from(t.childNodes)}function d(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var c=0;c<a.attributes.length;c+=1){var s=a.attributes[c];n[s.name]||a.removeAttribute(s.name)}return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):l(e)}function h(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=e,t.splice(n,1)[0]}return u(e)}function p(t,e){t.data=""+e}n.d(e,"l",function(){return v}),n.d(e,"c",function(){return E}),n.d(e,"o",function(){return N}),n.d(e,"a",function(){return a}),n.d(e,"m",function(){return c}),n.d(e,"j",function(){return s}),n.d(e,"i",function(){return i}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return h}),n.d(e,"p",function(){return p}),n.d(e,"k",function(){return b}),n.d(e,"n",function(){return r}),n.d(e,"b",function(){return o});function b(t,e){for(var n={},r={},o={},a=t.length;a--;){var c=t[a],s=e[a];if(s){for(var i in c)i in s||(r[i]=1);for(var i in s)o[i]||(n[i]=s[i],o[i]=1);t[a]=s}else for(var i in c)o[i]=1}for(var i in r)i in n||(n[i]=void 0);return n}function m(t){this.destroy=r,this.fire("destroy"),this.set=r,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function g(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function j(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1){var o=n[r];if(!o.__calling)try{o.__calling=!0,o.call(this,e)}finally{o.__calling=!1}}}function O(){return this._state}function v(t,e){t._handlers=Object.create(null),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=e.store||t.root.store}function _(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function w(t){this._set(o({},t)),this.root._lock||(this.root._lock=!0,E(this.root._beforecreate),E(this.root._oncreate),E(this.root._aftercreate),this.root._lock=!1)}function y(t){var e=this._state,n={},r=!1;for(var a in t)this._differs(t[a],e[a])&&(n[a]=r=!0);r&&(this._state=o(o({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))}function E(t){for(;t&&t.length;)t.shift()()}function x(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}var N={destroy:m,get:O,fire:j,on:_,set:w,_recompute:r,_set:y,_mount:x,_differs:g}},function(t,e,n){"use strict";function r(t){t.parentNode.removeChild(t)}function o(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function a(){return{x:window.scrollX,y:window.scrollY}}n.r(e);const c="undefined"!=typeof window&&window.__SAPPER__;let s,i,l,u,f=[];const d={path:null,params:null,query:null,child:{segment:null,component:null,props:{}}},h="undefined"!=typeof window?window.history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},p={};let b,m,g,j,O=1;function v(t){if(t.origin!==window.location.origin)return null;if(!t.pathname.startsWith(c.baseUrl))return null;const e=t.pathname.slice(c.baseUrl.length);if(!u.ignore.some(t=>t.test(e)))for(let n=0;n<u.pages.length;n+=1){const r=u.pages[n],o=r.pattern.exec(e);if(o){const n={};return t.search.length>0&&t.search.slice(1).split("&").forEach(t=>{const[,e,r]=/([^=]+)=(.*)/.exec(t);n[e]=r||!0}),{url:t,path:e,page:r,match:o,query:n}}}}function _(t,e){return JSON.stringify(t)!==JSON.stringify(e)}function w(t){s&&s.set({preloading:!0});const{page:e,path:n,query:r}=t,o=n.split("/").filter(Boolean);let a=0;for(;f[a]&&o[a]&&f[a]===o[a];)a+=1;let i=null,h=null;const p={store:l,fetch:(t,e)=>window.fetch(t,e),redirect:(t,e)=>{if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:(t,e)=>{h={statusCode:t,message:e}}};return g||(g=u.root.preload?c.preloaded[0]||u.root.preload.call(p,{path:n,query:r,params:{}}):{}),Promise.all(e.parts.map(async(e,o)=>{if(o<a)return null;if(!e)return null;const{default:s}=await e.component(),i={path:n,query:r,params:e.params?e.params(t.match):{}};return{Component:s,preloaded:P||!c.preloaded[o+1]?s.preload?await s.preload.call(p,i):{}:c.preloaded[o+1]}})).catch(t=>(h={statusCode:500,message:t},[])).then(async c=>{if(j||(j=await g),i)return{redirect:i};f=o;const s=(e.parts[e.parts.length-1].params||(()=>({})))(t.match);if(h){const t={path:n,query:r,params:s,error:"string"==typeof h.message?new Error(h.message):h.message,status:h.statusCode};return{data:Object.assign({},t,{preloading:!1,child:{component:u.error,props:t}})}}const l={path:n,query:r},p={path:n,preloading:!1,child:Object.assign({},d.child,{segment:f[0]})};_(r,d.query)&&(p.query=r),_(s,d.params)&&(p.params=s);let b=p.child,m=0;for(let o=0;o<e.parts.length;o+=1){const s=e.parts[o];if(!s)continue;const i=s.params||(()=>({}));o<a?(b.props.path=n,b.props.query=r,b.props.child=Object.assign({},b.props.child),m+=1):(b.component=c[o].Component,b.props=Object.assign({},b.props,l,{params:i(t.match)},c[o].preloaded),b.props.child={}),(b=b.props.child).segment=f[o+1]}return{data:p,nullable_depth:m}})}async function y(t,e){e?b=e:(p[b]=a(),e=b=++O,p[b]={x:0,y:0}),b=e;const n=k&&k.href===t.url.href?k.promise:w(t);k=null;const o=m={},{redirect:c,data:f,nullable_depth:g}=await n;c?await function(t,e={replaceState:!1}){const n=v(new URL(t,document.baseURI));let r;n?(r=y(n,null),h&&h[e.replaceState?"replaceState":"pushState"]({id:b},"",t)):(window.location.href=t,r=new Promise(t=>{}));return r}(c.location,{replaceState:!0}):(!function(t,e,n,o){if(m===o){if(s){let n=t.child;for(let t=0;t<e&&t!==e;t+=1)n=n.props.child;const{component:r}=n;n.component=null,s.set({child:t.child}),n.component=r,s.set(t)}else{const e=document.querySelector("#sapper-head-start"),n=document.querySelector("#sapper-head-end");if(e&&n){for(;e.nextSibling!==n;)r(e.nextSibling);r(e),r(n)}Object.assign(t,j),s=new u.root({target:i,data:t,store:l,hydrate:!0})}n&&window.scrollTo(n.x,n.y),Object.assign(d,t),P=!0}}(f,g,p[e],o),document.activeElement&&document.activeElement.blur())}function E(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=o(t.target);if(!e)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===window.location.href)return void t.preventDefault();if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const a=new URL(r);if(a.pathname===window.location.pathname&&a.search===window.location.search)return;const c=v(a);c&&(y(c,null),t.preventDefault(),h.pushState({id:b},"",a.href))}function x(t){if(p[b]=a(),t.state){const e=v(new URL(window.location.href));e?y(e,t.state.id):window.location.href=window.location.href}else b=++O,h.replaceState({id:b},"",window.location.href)}"scrollRestoration"in h&&(h.scrollRestoration="manual");let N,S,k=null;function R(t){clearTimeout(N),N=setTimeout(()=>{C(t)},20)}function C(t){const e=o(t.target);e&&"prefetch"===e.rel&&function(t){const e=v(new URL(t,document.baseURI));!e||k&&t===k.href||(k={href:t,promise:w(e)})}(e.href)}let P=!1;var L=n(0);function q(t){if(Object(L.l)(this,t),this._state=Object(L.b)({undefined:void 0},t.data),this._intro=!0,document.getElementById("svelte-18u57i1-style")||function(){var t=Object(L.g)("style");t.id="svelte-18u57i1-style",t.textContent="nav.svelte-18u57i1{border-bottom:1px solid rgba(170,30,30,0.1);font-weight:300;padding:0 1em}ul.svelte-18u57i1{margin:0;padding:0}ul.svelte-18u57i1::after{content:'';display:block;clear:both}li.svelte-18u57i1{display:block;float:left}.selected.svelte-18u57i1{position:relative;display:inline-block}.selected.svelte-18u57i1::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(170,30,30);display:block;bottom:-1px}a.svelte-18u57i1{text-decoration:none;padding:1em 0.5em;display:block}",Object(L.a)(document.head,t)}(),this._fragment=function(t,e){var n,r,o,a,c,s,i,l,u,f,d,h,p,b,m,g;return{c(){n=Object(L.g)("nav"),r=Object(L.g)("ul"),o=Object(L.g)("li"),a=Object(L.g)("a"),c=Object(L.h)("home"),i=Object(L.h)("\n\t\t"),l=Object(L.g)("li"),u=Object(L.g)("a"),f=Object(L.h)("about"),h=Object(L.h)("\n\n\t\t\n\t\t"),p=Object(L.g)("li"),b=Object(L.g)("a"),m=Object(L.h)("blog"),this.h()},l(t){n=Object(L.e)(t,"NAV",{class:!0},!1);var e=Object(L.d)(n);r=Object(L.e)(e,"UL",{class:!0},!1);var s=Object(L.d)(r);o=Object(L.e)(s,"LI",{class:!0},!1);var d=Object(L.d)(o);a=Object(L.e)(d,"A",{class:!0,href:!0},!1);var g=Object(L.d)(a);c=Object(L.f)(g,"home"),g.forEach(L.j),d.forEach(L.j),i=Object(L.f)(s,"\n\t\t"),l=Object(L.e)(s,"LI",{class:!0},!1);var j=Object(L.d)(l);u=Object(L.e)(j,"A",{class:!0,href:!0},!1);var O=Object(L.d)(u);f=Object(L.f)(O,"about"),O.forEach(L.j),j.forEach(L.j),h=Object(L.f)(s,"\n\n\t\t\n\t\t"),p=Object(L.e)(s,"LI",{class:!0},!1);var v=Object(L.d)(p);b=Object(L.e)(v,"A",{rel:!0,class:!0,href:!0},!1);var _=Object(L.d)(b);m=Object(L.f)(_,"blog"),_.forEach(L.j),v.forEach(L.j),s.forEach(L.j),e.forEach(L.j),this.h()},h(){a.className=s=(e.segment===e.undefined?"selected":"")+" svelte-18u57i1",a.href=".",o.className="svelte-18u57i1",u.className=d=("about"===e.segment?"selected":"")+" svelte-18u57i1",u.href="about",l.className="svelte-18u57i1",b.rel="prefetch",b.className=g=("blog"===e.segment?"selected":"")+" svelte-18u57i1",b.href="blog",p.className="svelte-18u57i1",r.className="svelte-18u57i1",n.className="svelte-18u57i1"},m(t,e){Object(L.m)(t,n,e),Object(L.a)(n,r),Object(L.a)(r,o),Object(L.a)(o,a),Object(L.a)(a,c),Object(L.a)(r,i),Object(L.a)(r,l),Object(L.a)(l,u),Object(L.a)(u,f),Object(L.a)(r,h),Object(L.a)(r,p),Object(L.a)(p,b),Object(L.a)(b,m)},p(t,e){(t.segment||t.undefined)&&s!==(s=(e.segment===e.undefined?"selected":"")+" svelte-18u57i1")&&(a.className=s),t.segment&&d!==(d=("about"===e.segment?"selected":"")+" svelte-18u57i1")&&(u.className=d),t.segment&&g!==(g=("blog"===e.segment?"selected":"")+" svelte-18u57i1")&&(b.className=g)},d(t){t&&Object(L.j)(n)}}}(0,this._state),t.target){var e=Object(L.d)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(L.j),this._mount(t.target,t.anchor)}}Object(L.b)(q.prototype,L.o);var A=q;function T(t){if(Object(L.l)(this,t),this._state=Object(L.b)({},t.data),this._intro=!0,document.getElementById("svelte-1uhnsl8-style")||function(){var t=Object(L.g)("style");t.id="svelte-1uhnsl8-style",t.textContent="main.svelte-1uhnsl8{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",Object(L.a)(document.head,t)}(),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,r,o={segment:e.child.segment},a=new A({root:t.root,store:t.store,data:o}),c=[e.child.props],s=e.child.component;function i(e){for(var n={},r=0;r<c.length;r+=1)n=Object(L.b)(n,c[r]);return{root:t.root,store:t.store,data:n}}if(s)var l=new s(i());return{c(){a._fragment.c(),n=Object(L.h)("\n\n"),r=Object(L.g)("main"),l&&l._fragment.c(),this.h()},l(t){a._fragment.l(t),n=Object(L.f)(t,"\n\n"),r=Object(L.e)(t,"MAIN",{class:!0},!1);var e=Object(L.d)(r);l&&l._fragment.l(e),e.forEach(L.j),this.h()},h(){r.className="svelte-1uhnsl8"},m(t,e){a._mount(t,e),Object(L.m)(t,n,e),Object(L.m)(t,r,e),l&&l._mount(r,null)},p(t,e){var n={};t.child&&(n.segment=e.child.segment),a._set(n);var o=t.child?Object(L.k)(c,[e.child.props]):{};s!==(s=e.child.component)?(l&&l.destroy(),s?((l=new s(i()))._fragment.c(),l._mount(r,null)):l=null):s&&l._set(o)},d(t){a.destroy(t),t&&(Object(L.j)(n),Object(L.j)(r)),l&&l.destroy()}}}(this,this._state),t.target){var e=Object(L.d)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(L.j),this._mount(t.target,t.anchor),this._lock=!0,Object(L.c)(this._beforecreate),Object(L.c)(this._oncreate),Object(L.c)(this._aftercreate),this._lock=!1}}Object(L.b)(T.prototype,L.o);var U=T;function I(t){if(Object(L.l)(this,t),this._state=Object(L.b)({JSON:JSON},t.data),this._intro=!0,document.getElementById("svelte-8lferx-style")||function(){var t=Object(L.g)("style");t.id="svelte-8lferx-style",t.textContent="h1.svelte-8lferx,p.svelte-8lferx{margin:0 auto}h1.svelte-8lferx{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8lferx{margin:1em auto}@media(min-width: 480px){h1.svelte-8lferx{font-size:4em}}",Object(L.a)(document.head,t)}(),this._fragment=function(t,e){var n,r,o,a,c,s,i,l,u,f,d,h=e.error.message,p=e.JSON.stringify(e.error);return document.title=n=e.status,{c(){r=Object(L.h)("\n\n"),o=Object(L.g)("h1"),a=Object(L.h)(e.status),c=Object(L.h)("\n\n"),s=Object(L.g)("p"),i=Object(L.h)(h),l=Object(L.h)("\n"),u=Object(L.g)("p"),f=Object(L.h)("ERROR: "),d=Object(L.h)(p),this.h()},l(t){r=Object(L.f)(t,"\n\n"),o=Object(L.e)(t,"H1",{class:!0},!1);var n=Object(L.d)(o);a=Object(L.f)(n,e.status),n.forEach(L.j),c=Object(L.f)(t,"\n\n"),s=Object(L.e)(t,"P",{class:!0},!1);var b=Object(L.d)(s);i=Object(L.f)(b,h),b.forEach(L.j),l=Object(L.f)(t,"\n"),u=Object(L.e)(t,"P",{class:!0},!1);var m=Object(L.d)(u);f=Object(L.f)(m,"ERROR: "),d=Object(L.f)(m,p),m.forEach(L.j),this.h()},h(){o.className="svelte-8lferx",s.className="svelte-8lferx",u.className="svelte-8lferx"},m(t,e){Object(L.m)(t,r,e),Object(L.m)(t,o,e),Object(L.a)(o,a),Object(L.m)(t,c,e),Object(L.m)(t,s,e),Object(L.a)(s,i),Object(L.m)(t,l,e),Object(L.m)(t,u,e),Object(L.a)(u,f),Object(L.a)(u,d)},p(t,e){t.status&&n!==(n=e.status)&&(document.title=n),t.status&&Object(L.p)(a,e.status),t.error&&h!==(h=e.error.message)&&Object(L.p)(i,h),(t.JSON||t.error)&&p!==(p=e.JSON.stringify(e.error))&&Object(L.p)(d,p)},d(t){t&&(Object(L.j)(r),Object(L.j)(o),Object(L.j)(c),Object(L.j)(s),Object(L.j)(l),Object(L.j)(u))}}}(0,this._state),t.target){var e=Object(L.d)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(L.j),this._mount(t.target,t.anchor)}}Object(L.b)(I.prototype,L.o);const J={ignore:[/^\/blog.json\/?$/,/^\/blog\/([^\/]+?).json\/?$/],pages:[{pattern:/^\/?$/,parts:[{component:()=>n.e(1).then(n.bind(null,2))}]},{pattern:/^\/about\/?$/,parts:[{component:()=>n.e(2).then(n.bind(null,3))}]},{pattern:/^\/blog\/?$/,parts:[null,{component:()=>n.e(3).then(n.bind(null,4))}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{component:()=>n.e(4).then(n.bind(null,5)),params:t=>({slug:t[1]})}]}],root:U,error:I};!function(t){if(t instanceof HTMLElement)throw new Error("The signature of init(...) has changed — see https://sapper.svelte.technology/guide#0-11-to-0-12 for more information");if(t.routes)throw new Error("As of Sapper 0.15, opts.routes should be opts.manifest");i=t.target,u=t.manifest,t&&t.store&&(l=t.store(c.store)),S||(window.addEventListener("click",E),window.addEventListener("popstate",x),window.addEventListener("touchstart",C),window.addEventListener("mousemove",R),S=!0),Promise.resolve().then(()=>{const{hash:t,href:e}=window.location,n=t&&document.getElementById(t.slice(1));if(p[O]=n?{x:0,y:n.getBoundingClientRect().top}:a(),h.replaceState({id:O},"",e),!c.error){const t=v(new URL(window.location.href));if(t)return y(t,O)}})}({target:document.querySelector("#sapper"),manifest:J})}]);