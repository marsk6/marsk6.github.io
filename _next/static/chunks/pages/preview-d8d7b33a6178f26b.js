(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{9347:function(e,t,n){"use strict";n.d(t,{Z:function(){return X}});var r=n(9499),c=n(4730),i=n(3639),a=n(43),o=n.n(a),s=n(2104),l=n(8093),u=n(3625),d=n(8427),p=n(9631),f=n(983),h=n(7545),m=n(6674),v=n.n(m),g=n(6835),y=n(6393);function Z(e){return function(t){(0,y.Vn)(t,"paragraph",function(t,n,r){var c=t.children[t.children.length-1];if(c&&"text"===c.type){var i=c.value.replace(/ +$/,""),a=i.match(/!\[{2}(.+)?\]{2}/);if(a){var o={},s=a[0],l=a[1].split("|");o.type="image",o.url="".concat(e.cdnUrl,"/").concat(l[0]),o.data||(o.data={}),o.data.hProperties||(o.data.hProperties={}),l.forEach(function(e,t){if(t>0){if(/\d(x\d)?$/.test(e)){var n=e.split("x"),r=(0,g.Z)(n,2),c=r[0],i=r[1];o.data.hProperties.style="width: ".concat(c,"px;"),i&&(o.data.hProperties.style="".concat(o.data.hProperties.style,"height: ").concat(i,"px"))}else o.title=e,o.alt=e}});var u=i.split(s),d=(0,g.Z)(u,2),p=d[0],f=d[1],h=[];p&&h.push({type:"text",value:p}),h.push(o),f&&h.push({type:"text",value:f}),t.children=h}}})}}var b=n(7484),w=n.n(b),x=n(7294),O=n(3354),N=n(1046),P=n(843),_=["children"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=function(e){var t=e.children,n=(0,c.Z)(e,_),r=(0,x.useState)(!1),i=r[0],a=r[1],o=(0,x.useRef)(null);return(0,P.BX)("div",{className:"pre-copy",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:[(0,P.tZ)(S,{visible:i,className:(0,O.cx)(i?"pre-copy-button--fade-in":"pre-copy-button--fade-out"),node:o.current}),(0,P.tZ)("pre",E(E({ref:o},n),{},{children:t}))]})},S=function(e){var t=e.node,n=e.className,r=e.visible,c=(0,x.useState)(!1),i=c[0],a=c[1];return(0,x.useEffect)(function(){r||setTimeout(function(){a(!1)},500)},[r]),(0,P.tZ)("div",{className:(0,O.cx)("pre-copy-button",n),onClick:function(){t&&(function(e){try{if(e){var t=document.createRange();t.selectNodeContents(e);var n=window.getSelection();n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),n.removeAllRanges()}}catch(e){console.error(e)}}(t),a(!0))},title:i?"Copied":"Copy",children:i?(0,P.tZ)(l.Z,{size:18,color:"green"}):(0,P.tZ)(u.Z,{size:18})})},X=function(e){var t=e.post,n=(0,i.cc)(t.content,{remarkPlugins:[o(),[Z,{cdnUrl:"https://cdn.jsdelivr.net/gh/marsk6/image-center@master"}]],rehypePlugins:[[s.Z,{target:"_blank"}],f.Z,h.Z,v(),[N.ZP,{showLineNumbers:!0}]],rehypeReactOptions:{components:{pre:k,img:function(e){return(0,P.tZ)("img",E(E({},e),{},{loading:"lazy"}))}}}});return(0,P.BX)("article",{className:"p-2",children:[(0,P.BX)("header",{className:"mb-4",children:[(0,P.tZ)("h1",{className:"text-center font-medium lg:text-4xl text-3xl",children:t.title}),(0,P.BX)("div",{className:"mt-2 flex justify-center text-xs items-center gap-4",children:[(0,P.BX)("div",{className:"flex gap-0.5 items-center",children:[(0,P.tZ)(d.Z,{size:12}),(0,P.tZ)("span",{children:"发布于 ".concat(w()(t.ctime).format("YYYY-MM-DD"))})]}),(0,P.BX)("div",{className:"flex gap-0.5 items-center",children:[(0,P.tZ)(p.Z,{size:12}),(0,P.BX)("span",{children:["约 ",t.readingTime," 分钟"]})]})]})]}),(0,P.tZ)("section",{className:"markdown-body max-w-none dark:bg-[#19191c]",children:n})]})}},7903:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var r=n(9347),c=n(7294),i=n(843),a=!0;t.default=function(){var e=(0,c.useState)(null),t=e[0],n=e[1];return((0,c.useEffect)(function(){var e=function(e){n(JSON.parse(e.data))};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}},[]),t)?(0,i.tZ)(r.Z,{post:t}):(0,i.tZ)("p",{children:"no data"})}},9257:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preview",function(){return n(7903)}])}},function(e){e.O(0,[493,774,888,179],function(){return e(e.s=9257)}),_N_E=e.O()}]);