(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{1422:function(e,t,r){"use strict";r(7294);var n=r(8872),c=r(5944);t.Z=function(e){var t=e.title,r=e.children,a=e.className,s=Boolean(t);return(0,c.BX)("section",{className:(0,n.cx)("rounded-lg border border-gray-900 border-opacity-10 bg-white",{"p-4":!s},a),children:[s&&(0,c.tZ)("header",{className:"border-b p-3 text-xl font-bold",children:t}),r]})}},6787:function(e,t,r){"use strict";r(7294);var n=r(9008),c=r.n(n),a=r(5944);t.Z=function(e){var t=e.title,r=e.children;return(0,a.BX)(c(),{children:[(0,a.tZ)("link",{href:"/favicon/favicon.ico",rel:"icon",sizes:"16x16",type:"image/png"}),(0,a.tZ)("title",{children:t?"".concat(t," | Marsk In Github"):"Marsk In Github"}),r]})}},9509:function(e,t,r){"use strict";r(7294);var n=r(1664),c=r.n(n),a=r(8872),s=r(5944),l={j:"text-red-800",w:"text-yellow-600",c:"text-green-500",h:"text-blue-700"};t.Z=function(e){var t=e.tags;return(0,s.tZ)("div",{className:"flex cursor-pointer",children:t.map((function(e){return(0,s.tZ)(c(),{href:"/tags#".concat(e.name),children:(0,s.BX)("div",{className:"px-2 py-0.5 text-emerald-800 text-xs rounded-2xl bg-lime-400",children:[(0,s.tZ)("span",{className:(0,a.cx)(l[e.name]),children:"#"}),e.name]})},e.name)}))})}},2887:function(e,t,r){"use strict";var n=r(1664),c=r.n(n),a=(r(7294),r(5944));t.Z=function(e){var t=e.sup,r=e.name;return(0,a.tZ)(c(),{href:"/tags#".concat(r),children:(0,a.BX)("div",{className:"bg-gray-100 px-2 rounded-sm border border-gray-300 border-dashed",children:[r,(0,a.tZ)("sup",{className:"ml-1",children:t})]})})}},4114:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y}});var n=r(9499),c=r(1163),a=r(2918),s=r(3639),l=r(1422),i=r(9509),o=r(7294),u=r(4911),d=r(1664),p=r.n(d),h=r(2887),m=r(6787),f=r(43),b=r.n(f),x=r(7116),g=r(5944);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var v=function(e){var t=e.post,r=e.relatedTags,n=(0,s.cc)(t.content,{remarkPlugins:[b()],rehypePlugins:[[x.Z,{target:"_blank"}]]}),c=(0,o.useContext)(u.DV).setSider;return(0,o.useEffect)((function(){c((function(){return(0,g.tZ)(l.Z,{className:"flex flex-col gap-2 items-start",children:r.map((function(e){return(0,g.tZ)(h.Z,{sup:e.posts.length,name:e.name},e.name)}))})}))}),[]),(0,g.BX)(g.HY,{children:[(0,g.tZ)(m.Z,{title:t.title}),(0,g.tZ)(l.Z,{children:(0,g.BX)("article",{children:[(0,g.BX)("header",{className:"mb-4",children:[(0,g.tZ)("p",{className:"text-center font-medium text-4xl",children:t.title}),(0,g.BX)("div",{className:"mt-2 flex justify-center text-xs items-center gap-1",children:[(0,g.tZ)("span",{children:t.date}),(0,g.tZ)(i.Z,{tags:t.tags})]})]}),(0,g.tZ)("section",{className:"markdown-body prose prose-slate prose-a:text-blue-600 max-w-none hover:prose-a:text-blue-500",children:n}),(0,g.BX)("footer",{className:"grid grid-cols-3 border-y border-gray-200 py-4 my-4",children:[(0,g.tZ)("div",{className:"mr-auto cursor-pointer",children:t.prev&&t.prev.slug&&(0,g.tZ)(p(),{href:{pathname:"/posts/[slug]",query:{slug:t.prev.slug}},children:(0,g.tZ)("span",{title:t.prev.title,className:"text-blue-600 border border-gray-300 rounded-2xl py-2 px-3 text-center",children:"Previous (\u524d\u4e00\u7bc7)"})})}),(0,g.tZ)("div",{className:"mx-auto cursor-pointer",children:(0,g.tZ)(p(),{href:{pathname:"/archive"},children:(0,g.tZ)("span",{className:"text-blue-600 border  border-gray-300 rounded-2xl py-2 px-3 text-center",children:"Archive\uff08\u76ee\u5f55\uff09"})})}),(0,g.tZ)("div",{className:"ml-auto cursor-pointer",children:t.next&&t.next.slug&&(0,g.tZ)(p(),{href:{pathname:"/posts/[slug]",query:{slug:t.next.slug}},children:(0,g.tZ)("span",{title:t.next.title,className:"text-blue-600 border mx-auto border-gray-300 rounded-2xl py-2 px-3 text-center",children:"Next\uff08\u540e\u4e00\u7bc7\uff09"})})})]})]})})]})},y=!0;t.default=function(e){var t;return(0,c.useRouter)().isFallback||null!==(t=e.post)&&void 0!==t&&t.slug?(0,g.tZ)(v,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)):(0,g.tZ)(a.default,{statusCode:404})}},592:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(4114)}])}},function(e){e.O(0,[901,774,888,179],(function(){return t=592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);