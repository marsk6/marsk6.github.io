(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{6698:function(e,t,n){"use strict";var r=n(3227),o=n(8361),c=n(5971),i=n(2715),l=n(1193);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});var a=n(8754),s=a._(n(7294)),u=a._(n(1597)),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}},h=function(e){c(a,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=l(a);if(t){var r=l(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function a(){return r(this,a),n.apply(this,arguments)}return o(a,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||d[t]||"An unexpected error has occurred";return s.default.createElement("div",{style:p.error},s.default.createElement(u.default,null,s.default.createElement("title",null,t?t+": "+r:"Application error: a client-side exception has occurred")),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===n||n?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?s.default.createElement("h1",{className:"next-error-h1",style:p.h1},t):null,s.default.createElement("div",{style:p.desc},s.default.createElement("h2",{style:p.h2},this.props.title||t?r:s.default.createElement(s.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),a}(s.default.Component);h.displayName="ErrorPage",h.getInitialProps=f,h.origGetInitialProps=f,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5754:function(e,t,n){"use strict";var r=n(3639),o=n(43),c=n.n(o),i=n(2104),l=n(8427),a=n(9631),s=n(2276),u=n(7545),d=n(6674),f=n.n(d),p=n(7484),h=n.n(p),m=n(843);t.Z=function(e){var t=e.post,n=(0,r.cc)(t.content,{remarkPlugins:[c()],rehypePlugins:[[i.Z,{target:"_blank"}],s.Z,u.Z,[f(),,{className:"blog-image-figure"}]]});return(0,m.BX)("article",{className:"p-2",children:[(0,m.BX)("header",{className:"mb-4",children:[(0,m.tZ)("p",{className:"text-center font-medium text-4xl",children:t.title}),(0,m.BX)("div",{className:"mt-2 flex justify-center text-xs items-center gap-4",children:[(0,m.BX)("div",{className:"flex gap-0.5 items-center",children:[(0,m.tZ)(l.Z,{size:12}),(0,m.tZ)("span",{children:"发布于 ".concat(h()(t.ctime).format("YYYY-MM-DD"))})]}),(0,m.BX)("div",{className:"flex gap-0.5 items-center",children:[(0,m.tZ)(a.Z,{size:12}),(0,m.BX)("span",{children:["约 ",t.readingTime," 分钟"]})]})]})]}),(0,m.tZ)("section",{className:"markdown-body max-w-none dark:bg-[#19191c]",children:n})]})}},4897:function(e,t,n){"use strict";n(7294);var r=n(3354),o=n(843);t.Z=function(e){var t=e.title,n=e.children,c=e.className,i=!!t;return(0,o.BX)("section",{className:(0,r.cx)("rounded shadow-[0px_0px_20px_0px_#e2e8f0] border-opacity-10 bg-[#fefefe]","dark:bg-[#19191c] dark:shadow-stone-700",{"p-4":!i},c),children:[i&&(0,o.tZ)("header",{className:"border-b p-3 text-xl font-bold",children:t}),n]})}},8787:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return A},default:function(){return C}});var r=n(9499),o=n(1163),c=n(2918),i=n.n(c),l=n(2962),a=n(7484),s=n.n(a),u=n(8543),d=n(4897),f=n(3354),p=n(1664),h=n.n(p),m=n(7294),g=n(843),v=function(e){var t=e.sup,n=e.name;return(0,g.tZ)(h(),{href:"/tags#".concat(n),legacyBehavior:!0,passHref:!0,children:(0,g.BX)("a",{className:(0,f.cx)("text-xs rounded-full py-1.5 px-3 font-medium","bg-stone-50 dark:bg-stone-900","hover:bg-stone-200, dark:hover:bg-stone-400"),children:[n,(0,g.tZ)("sup",{className:"ml-1",children:t})]})})},b=n(6687),x=n(3639),y=n(43),E=n.n(y),Z=n(6393);function k(){return function(e){(0,Z.Vn)(e,"element",function(e){"a"===e.tagName&&e.properties&&(e.properties.title=e.children[0].value)})}}var N=function(){var e=document.createElement("div");e.style="position:fixed;top:0;left:0;right:0;height: ".concat(156,"px;background-color: #ccc;opacity: 0.3;pointer-events: none;"),document.body.appendChild(e)},_=function(){document.documentElement.style.scrollPaddingTop="".concat(150,"px");var e=!0,t=null,n=document.documentElement.scrollTop,r=new IntersectionObserver(function(r){var o,c=n>document.documentElement.scrollTop,i=!c;if(n=document.documentElement.scrollTop,t){t=null;return}var l=r[0],a=null;if(r.forEach(function(t){var n=t.boundingClientRect.top;if(e){Math.abs(n-156)<=Math.abs(l.boundingClientRect.top-156)&&(l=t);return}t.isIntersecting&&c?a=t.target:!t.isIntersecting&&i&&(a=t.target)}),null===(o=a)||void 0===o||o.dispatchEvent(new CustomEvent("active",{detail:c?"prev":"cur"})),e){var s=location.hash;s?document.querySelector(".toc a[href='".concat(s,"']")).click():l.target.dispatchEvent(new CustomEvent("active")),e=!1}},{threshold:[1],root:document,rootMargin:"-".concat(156,"px 0px 0px 0px")}),o=(0,b.Z)(document.querySelectorAll(".toc a")),c=function(e){return o.find(function(t){return"#".concat(e.id)===decodeURIComponent(t.getAttribute("href"))})},i=document.querySelector(".markdown-body"),l=null==i?void 0:i.querySelectorAll("h1,h2,h3,h4");return null==l||l.forEach(function(e,i){var a=c(e);null==a||a.addEventListener("click",function(){(t=e).dispatchEvent(new CustomEvent("active",{detail:"cur"})),n=document.documentElement.scrollTop}),e.addEventListener("active",function(e){if(o.forEach(function(e){return e.classList.remove("active-heading")}),"prev"===e.detail&&0!==i){var t=c(l[i-1]);null==t||t.classList.add("active-heading");return}null==a||a.classList.add("active-heading")}),null==r||r.observe(e)}),r},w=function(e){var t=e.content,n=e.debug,r=(0,x.cc)(t,{remarkPlugins:[E()],rehypePlugins:[k]});return(0,m.useEffect)(function(){n&&N();var e=_();return function(){var t;null===(t=e)||void 0===t||t.disconnect(),e=null}},[]),(0,g.tZ)("div",{className:"text-sm toc",children:r})},O=n(5754);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var B=function(e){var t=e.post,n=e.relatedTags;return(0,u.uk)(function(){return(0,g.BX)(g.HY,{children:[(0,g.tZ)(d.Z,{className:"flex flex-col gap-2 items-start",children:n.map(function(e){return(0,g.tZ)(v,{sup:e.posts.length,name:e.name},e.name)})}),(0,g.tZ)(d.Z,{className:"hidden lg:block",children:(0,g.tZ)(w,{content:t.toc})})]})}),(0,g.BX)(g.HY,{children:[(0,g.tZ)(l.PB,{title:"".concat(t.title," | ").concat("Hea的web博客"),description:t.brief,canonical:"".concat("https://masrk.github.io","/posts/").concat(t.slug)}),(0,g.tZ)(l.dX,{type:"BlogPosting",url:"".concat("https://masrk.github.io","/posts/").concat(t.slug),title:"Hea的web博客",images:[],datePublished:s()(t.ctime).format("YYYY-MM-DDTHH:mm:ssZZ"),dateModified:s()(t.ctime).format("YYYY-MM-DDTHH:mm:ssZZ"),authorName:"Marsk",description:t.brief||t.title}),(0,g.tZ)(O.Z,{post:t}),function(){if(t.prevArticle||t.nextArticle)return(0,g.BX)("section",{className:"flex mt-6",children:[(0,g.tZ)("div",{className:"flex-shrink-0 basis-2/4 text-ellipsis overflow-hidden",children:t.prevArticle&&(0,g.tZ)(h(),{passHref:!0,legacyBehavior:!0,href:{pathname:"/posts/[slug]",query:{slug:t.prevArticle.slug}},children:(0,g.BX)("a",{className:"text-sm underline text-[#58a6ff]",title:t.prevArticle.title,children:["\uD83D\uDC48\uD83C\uDFFB ",t.prevArticle.title]})})}),(0,g.tZ)("div",{className:"flex-shrink-0 text-ellipsis overflow-hidden ml-auto",children:t.nextArticle&&(0,g.tZ)(h(),{passHref:!0,legacyBehavior:!0,href:{pathname:"/posts/[slug]",query:{slug:t.nextArticle.slug}},children:(0,g.BX)("a",{className:"text-sm underline text-[#58a6ff]",title:t.nextArticle.title,children:[t.nextArticle.title," \uD83D\uDC49\uD83C\uDFFB"]})})})]})}()]})},A=!0,C=function(e){var t;return(0,o.useRouter)().isFallback||null!==(t=e.post)&&void 0!==t&&t.slug?(0,g.tZ)(B,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e)):(0,g.tZ)(i(),{statusCode:404})}},592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(8787)}])},2918:function(e,t,n){e.exports=n(6698)}},function(e){e.O(0,[962,470,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);