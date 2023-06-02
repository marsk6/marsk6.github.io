(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{6698:function(e,t,n){"use strict";var r=n(3227),c=n(8361),o=n(5971),i=n(2715),a=n(1193);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});var l=n(8754),s=l._(n(7294)),u=l._(n(1597)),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var f={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}},h=function(e){o(l,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=a(l);if(t){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function l(){return r(this,l),n.apply(this,arguments)}return c(l,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||d[t]||"An unexpected error has occurred";return s.default.createElement("div",{style:f.error},s.default.createElement(u.default,null,s.default.createElement("title",null,t?t+": "+r:"Application error: a client-side exception has occurred")),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===n||n?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?s.default.createElement("h1",{className:"next-error-h1",style:f.h1},t):null,s.default.createElement("div",{style:f.desc},s.default.createElement("h2",{style:f.h2},this.props.title||t?r:s.default.createElement(s.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),l}(s.default.Component);h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9347:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(9499),c=n(4730),o=n(3639),i=n(43),a=n.n(i),l=n(2104),s=n(8093),u=n(3625),d=n(8427),p=n(9631),f=n(2276),h=n(7545),m=n(6674),v=n.n(m),g=n(6835),y=n(6393);function b(e){return function(t){(0,y.Vn)(t,"paragraph",function(t,n,r){var c=t.children[t.children.length-1];if(c&&"text"===c.type){var o=c.value.replace(/ +$/,""),i=o.match(/!\[{2}(.+)?\]{2}/);if(i){var a={},l=i[0],s=i[1].split("|");a.type="image",a.url="".concat(e.cdnUrl,"/").concat(s[0]),a.data||(a.data={}),a.data.hProperties||(a.data.hProperties={}),s.forEach(function(e,t){if(t>0){if(/\d(x\d)?$/.test(e)){var n=e.split("x"),r=(0,g.Z)(n,2),c=r[0],o=r[1];a.data.hProperties.style="width: ".concat(c,"px;"),o&&(a.data.hProperties.style="".concat(a.data.hProperties.style,"height: ").concat(o,"px"))}else a.title=e,a.alt=e}});var u=o.split(l),d=(0,g.Z)(u,2),p=d[0],f=d[1],h=[];p&&h.push({type:"text",value:p}),h.push(a),f&&h.push({type:"text",value:f}),t.children=h}}})}}var x=n(7484),Z=n.n(x),E=n(7294),O=n(3354),k=n(843),w=["children"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j=function(e){var t=e.children,n=(0,c.Z)(e,w),r=(0,E.useState)(!1),o=r[0],i=r[1];return(0,k.BX)("div",{className:"pre-copy",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[(0,k.tZ)(_,{visible:o,className:(0,O.cx)(o?"pre-copy-button--fade-in":"pre-copy-button--fade-out"),text:t[0].props.children[0]}),(0,k.tZ)("pre",P(P({},n),{},{children:t}))]})},_=function(e){var t=e.text,n=e.className,r=e.visible,c=(0,E.useState)(!1),o=c[0],i=c[1];return(0,E.useEffect)(function(){r||setTimeout(function(){i(!1)},500)},[r]),(0,k.tZ)("div",{className:(0,O.cx)("pre-copy-button",n),onClick:function(){(function(e){try{if(e){var t=document.createElement("p");t.innerText=e,t.style.position="absolute",t.style.left="-99999px",document.body.appendChild(t);var n=document.createRange();n.selectNodeContents(t);var r=window.getSelection();r.removeAllRanges(),r.addRange(n),document.execCommand("copy"),r.removeAllRanges(),t.remove()}}catch(e){console.error(e)}})(t),i(!0)},title:o?"Copied":"Copy",children:o?(0,k.tZ)(s.Z,{size:18,color:"green"}):(0,k.tZ)(u.Z,{size:18})})},C=function(e){var t=e.post,n=(0,o.cc)(t.content,{remarkPlugins:[a(),[b,{cdnUrl:"https://cdn.jsdelivr.net/gh/marsk6/image-center@master"}]],rehypePlugins:[[l.Z,{target:"_blank"}],f.Z,h.Z,v()],rehypeReactOptions:{components:{pre:j,img:function(e){return(0,k.tZ)("img",P(P({},e),{},{loading:"lazy"}))}}}});return(0,k.BX)("article",{className:"p-2",children:[(0,k.BX)("header",{className:"mb-4",children:[(0,k.tZ)("h1",{className:"text-center font-medium lg:text-4xl text-3xl",children:t.title}),(0,k.BX)("div",{className:"mt-2 flex justify-center text-xs items-center gap-4",children:[(0,k.BX)("div",{className:"flex gap-0.5 items-center",children:[(0,k.tZ)(d.Z,{size:12}),(0,k.tZ)("span",{children:"发布于 ".concat(Z()(t.ctime).format("YYYY-MM-DD"))})]}),(0,k.BX)("div",{className:"flex gap-0.5 items-center",children:[(0,k.tZ)(p.Z,{size:12}),(0,k.BX)("span",{children:["约 ",t.readingTime," 分钟"]})]})]})]}),(0,k.tZ)("section",{className:"markdown-body max-w-none dark:bg-[#19191c]",children:n})]})}},4897:function(e,t,n){"use strict";n(7294);var r=n(3354),c=n(843);t.Z=function(e){var t=e.title,n=e.children,o=e.className,i=!!t;return(0,c.BX)("section",{className:(0,r.cx)("rounded shadow-[0px_0px_20px_0px_#e2e8f0] border-opacity-10 bg-[#fefefe]","dark:bg-[#19191c] dark:shadow-stone-700",{"p-4":!i},o),children:[i&&(0,c.tZ)("header",{className:"border-b p-3 text-xl font-bold",children:t}),n]})}},1354:function(e,t,n){"use strict";var r=n(3354),c=n(1664),o=n.n(c);n(7294);var i=n(843);t.Z=function(e){var t=e.sup,n=e.name;return(0,i.tZ)(o(),{href:"/tags#".concat(n),legacyBehavior:!0,passHref:!0,children:(0,i.BX)("a",{className:(0,r.cx)("rounded-full py-1 px-2 font-medium text-xs","bg-stone-50 dark:bg-stone-900","hover:bg-stone-200, dark:hover:bg-stone-400"),children:[n,(0,i.tZ)("sup",{className:"ml-1 scale-75 inline-block",children:t})]})})}},3989:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return C},default:function(){return D}});var r=n(9499),c=n(1163),o=n(2918),i=n.n(o),a=n(2962),l=n(7484),s=n.n(l),u=n(8543),d=n(4897),p=n(1354),f=n(7812),h=n(7294),m=n(3639),v=n(43),g=n.n(v),y=n(6393);function b(){return function(e){(0,y.Vn)(e,"element",function(e){"a"===e.tagName&&e.properties&&(e.properties.title=e.children[0].value)})}}var x=n(843),Z=function(){var e=document.createElement("div");e.style="position:fixed;top:0;left:0;right:0;height: ".concat(156,"px;background-color: #ccc;opacity: 0.3;pointer-events: none;"),document.body.appendChild(e)},E=function(){document.documentElement.style.scrollPaddingTop="".concat(150,"px");var e=!0,t=null,n=document.documentElement.scrollTop,r=new IntersectionObserver(function(r){var c,o=n>document.documentElement.scrollTop,i=!o;if(n=document.documentElement.scrollTop,t){t=null;return}var a=r[0],l=null;if(r.forEach(function(t){var n=t.boundingClientRect.top;if(e){Math.abs(n-156)<=Math.abs(a.boundingClientRect.top-156)&&(a=t);return}t.isIntersecting&&o?l=t.target:!t.isIntersecting&&i&&(l=t.target)}),null===(c=l)||void 0===c||c.dispatchEvent(new CustomEvent("active",{detail:o?"prev":"cur"})),e){var s=location.hash;s?document.querySelector(".toc a[href='".concat(s,"']")).click():a.target.dispatchEvent(new CustomEvent("active")),e=!1}},{threshold:[1],root:document,rootMargin:"-".concat(156,"px 0px 0px 0px")}),c=(0,f.Z)(document.querySelectorAll(".toc a")),o=function(e){return c.find(function(t){return"#".concat(e.id)===decodeURIComponent(t.getAttribute("href"))})},i=document.querySelector(".markdown-body"),a=null==i?void 0:i.querySelectorAll("h1,h2,h3,h4");return null==a||a.forEach(function(e,i){var l=o(e);null==l||l.addEventListener("click",function(){(t=e).dispatchEvent(new CustomEvent("active",{detail:"cur"})),n=document.documentElement.scrollTop}),e.addEventListener("active",function(e){if(c.forEach(function(e){return e.classList.remove("active-heading")}),"prev"===e.detail&&0!==i){var t=o(a[i-1]);null==t||t.classList.add("active-heading");return}null==l||l.classList.add("active-heading")}),null==r||r.observe(e)}),r},O=function(e){var t=e.content,n=e.debug,r=(0,m.cc)(t,{remarkPlugins:[g()],rehypePlugins:[b]});return(0,h.useEffect)(function(){n&&Z();var e=E();return function(){var t;null===(t=e)||void 0===t||t.disconnect(),e=null}},[]),(0,x.tZ)("div",{className:"text-sm toc",children:r})},k=n(9347),w=n(1664),N=n.n(w),P=(0,n(853).Z)("edit-circle","IconEditCircle",[["path",{d:"M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z",key:"svg-0"}],["path",{d:"M16 5l3 3",key:"svg-1"}],["path",{d:"M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6",key:"svg-2"}]]);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var _=function(e){var t=e.post,n=e.relatedTags;return(0,u.uk)(function(){return(0,x.BX)(x.HY,{children:[(0,x.tZ)(d.Z,{className:"flex flex-col gap-2 items-start",children:n.map(function(e){return(0,x.tZ)(p.Z,{sup:e.posts.length,name:e.name},e.name)})}),(0,x.tZ)(d.Z,{className:"hidden lg:block",children:(0,x.tZ)(O,{content:t.toc})})]})}),(0,x.BX)(x.HY,{children:[(0,x.tZ)(a.PB,{title:"".concat(t.title," | ").concat("Hea的web博客"),description:t.brief,canonical:"".concat("https://marsk6.github.io","/posts/").concat(t.slug)}),(0,x.tZ)(a.dX,{type:"BlogPosting",url:"".concat("https://marsk6.github.io","/posts/").concat(t.slug),title:"Hea的web博客",images:[],datePublished:s()(t.ctime).format("YYYY-MM-DDTHH:mm:ssZZ"),dateModified:s()(t.mtime||t.ctime).format("YYYY-MM-DDTHH:mm:ssZZ"),authorName:"Marsk",description:t.brief||t.title}),(0,x.tZ)(k.Z,{post:t}),(0,x.BX)("footer",{className:"flex flex-col gap-6 mt-6",children:[!!t.mtime&&(0,x.BX)("div",{className:"flex items-center gap-1 ml-auto whitespace-nowrap text-xs leading-6 text-slate-400",children:[(0,x.tZ)(P,{size:12}),(0,x.BX)("span",{children:["更新于 ",s()(t.mtime).format("YYYY-MM-DD")]})]}),(0,x.BX)("section",{className:"flex",children:[(0,x.tZ)("div",{className:"flex-shrink-0 basis-2/4 text-ellipsis overflow-hidden",children:t.prevArticle&&(0,x.tZ)(N(),{passHref:!0,legacyBehavior:!0,href:{pathname:"/posts/[slug]",query:{slug:t.prevArticle.slug}},children:(0,x.BX)("a",{className:"text-sm underline dark:text-[#58a6ff] text-[#0969da]",title:t.prevArticle.title,children:["\uD83D\uDC48\uD83C\uDFFB ",t.prevArticle.title]})})}),(0,x.tZ)("div",{className:"flex-shrink-0 text-ellipsis overflow-hidden ml-auto",children:t.nextArticle&&(0,x.tZ)(N(),{passHref:!0,legacyBehavior:!0,href:{pathname:"/posts/[slug]",query:{slug:t.nextArticle.slug}},children:(0,x.BX)("a",{className:"text-sm underline dark:text-[#58a6ff] text-[#0969da]",title:t.nextArticle.title,children:[t.nextArticle.title," \uD83D\uDC49\uD83C\uDFFB"]})})})]})]})]})},C=!0,D=function(e){var t;return(0,c.useRouter)().isFallback||null!==(t=e.post)&&void 0!==t&&t.slug?(0,x.tZ)(_,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e)):(0,x.tZ)(i(),{statusCode:404})}},592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(3989)}])},2918:function(e,t,n){e.exports=n(6698)}},function(e){e.O(0,[962,885,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);