(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[302],{853:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(5697),o=n.n(a),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},c=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))f.call(t,n)&&p(e,n,t[n]);return e},m=(e,t,n)=>{const a=(0,r.forwardRef)(((t,a)=>{var o,c=t,{color:p="currentColor",size:m=24,stroke:v=2,children:g}=c,y=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(c,["color","size","stroke","children"]);return(0,r.createElement)("svg",h((o=h({ref:a},i),s(o,l({width:m,height:m,stroke:p,strokeWidth:v,className:`tabler-icon tabler-icon-${e}`}))),y),[...n.map((([e,t])=>(0,r.createElement)(e,t))),...g||[]])}));return a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),stroke:o().oneOfType([o().string,o().number])},a.displayName=`${t}`,a}},9631:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(853).Z)("clock","IconClock",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 7l0 5l3 3",key:"svg-1"}]])},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var r=n(6495).Z,a=n(2648).Z,o=(0,n(1598).Z)(n(7294)),i=a(n(1585)),c=n(8e3),s=n(5850),l=n(9470);n(9475);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(d,[]).reverse().concat(u(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var u=f[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=a.props[u],p=r[u]||new Set;"name"===u&&i||!p.has(d)?(p.add(d),r[u]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=r({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,o.default.cloneElement(e,i)}return o.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=o.useContext(c.AmpStateContext),r=o.useContext(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function c(){if(t&&t.mountedInstances){var a=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),c()}return o((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((function(){return t&&(t._pendingUpdate=c),function(){t&&(t._pendingUpdate=c)}})),i((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var a=!1,o=a?function(){}:r.useLayoutEffect,i=a?function(){}:r.useEffect},1341:function(e,t,n){"use strict";n(7294);var r=n(9008),a=n.n(r),o=n(5944);t.Z=function(e){var t=e.title,n=e.children;return(0,o.BX)(a(),{children:[(0,o.tZ)("link",{href:"/favicon/favicon.ico",rel:"icon",sizes:"16x16",type:"image/png"}),(0,o.tZ)("title",{children:t?"".concat(t," | Marsk In Github"):"Marsk In Github"}),n]})}},3491:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(7294);var r=n(1664),a=n.n(r),o=(0,n(853).Z)("tag","IconTag",[["circle",{cx:"8.5",cy:"8.5",r:"1",fill:"currentColor",key:"svg-0"}],["path",{d:"M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z",key:"svg-1"}]]),i=n(5944),c=function(e){var t=e.tag;return(0,i.tZ)(a(),{href:"/tags#".concat(t),children:(0,i.BX)("div",{className:"text-xs flex items-center gap-0.5 cursor-pointer",children:[(0,i.tZ)(o,{size:12}),t]})})}},3110:function(e,t,n){"use strict";var r=n(1664),a=n.n(r),o=(n(7294),n(5944));t.Z=function(e){var t=e.sup,n=e.name;return(0,o.tZ)(a(),{href:"/tags#".concat(n),passHref:!0,children:(0,o.BX)("a",{className:"text-xs rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100",children:[n,(0,o.tZ)("sup",{className:"ml-1",children:t})]})})}},9302:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return y}});var r=n(7294),a=n(1664),o=n.n(a),i=n(1163),c=n(1824),s=n(9561),l=n(3354),u=n(3110),d=n(1341),f=n(5944);var p=function(e){var t=e.items;return(0,f.tZ)("div",{className:"flex flex-col",children:t.map((function(e,t){return(0,f.tZ)(h,{isFirst:0===t,item:e},t)}))})},h=function(e){var t=e.item,n=e.isFirst;return(0,f.BX)("div",{className:(0,l.cx)("grid",(0,l.iv)({name:"6u6ob0",styles:"grid-template-columns:140px 36px auto"})),children:[(0,f.tZ)("div",{className:"mt-6 whitespace-nowrap leading-6 dark:text-slate-400",children:t.label}),(0,f.BX)("div",{className:"flex flex-col items-center relative",children:[(0,f.tZ)("div",{className:(0,l.cx)("w-0.5 bg-gray-200 flex-1 absolute","h-full",n&&"top-8")}),(0,f.tZ)("div",{className:(0,l.cx)("w-3 h-3 border-2 border-gray-400 rounded-full bg-white flex-grow-0 absolute top-8")})]}),(0,f.tZ)("div",{className:(0,l.cx)("p-6 rounded-2xl hover:bg-slate-50/70","dark:hover:bg-slate-800/50"),children:t.content})]})},m=n(9631),v=n(3491),g=!0,y=function(e){var t=e.allPosts,n=e.years,a=e.tags,h=(0,r.useContext)(s.DV).setSider,g=(0,i.useRouter)();(0,r.useEffect)((function(){h((function(){return(0,f.tZ)(c.Z,{title:"#Tags",children:(0,f.tZ)("div",{className:"flex gap-2 items-start p-4 flex-wrap",children:a.map((function(e){return(0,f.tZ)(u.Z,{sup:e.postsCount,name:e.name},e.name)}))})})}))}),[]);var y=t.map((function(e,t){return{label:(0,f.BX)("div",{className:"flex flex-col px-3 pt-0.5 pb-12 gap-1",children:[(0,f.tZ)("p",{children:e.date}),e.tags.map((function(e){return(0,f.tZ)(v.Z,{tag:e.name},e.name)})),(0,f.BX)("div",{className:"flex gap-0.5 items-center text-xs",children:[(0,f.tZ)(m.Z,{size:12}),e.readingTime]})]}),content:(0,f.tZ)(o(),{href:{pathname:"/posts/lab/[slug]",query:{slug:e.slug}},children:(0,f.BX)("article",{className:"flex flex-col gap-1",children:[(0,f.tZ)("header",{className:"text-xl font-bold cursor-pointer text-slate-900 dark:text-slate-200",children:e.title}),(0,f.tZ)("p",{children:e.brief})]},e.slug)})}}));return(0,f.BX)(f.HY,{children:[(0,f.tZ)(d.Z,{}),(0,f.BX)(c.Z,{children:[(0,f.BX)("section",{className:"flex gap-4",children:[(0,f.tZ)(o(),{href:{pathname:"/"},passHref:!0,children:(0,f.tZ)("a",{className:(0,l.cx)("rounded-full px-2 py-1 border border-slate-700 dark:border-slate-200",!g.query.page&&"font-bold"),children:"Latest"})}),n.map((function(e){return(0,f.tZ)(o(),{href:{pathname:"/page/[page]",query:{page:e}},passHref:!0,children:(0,f.tZ)("a",{className:(0,l.cx)("rounded-full px-2 py-1 border border-slate-700 dark:border-slate-200",g.query.page==="".concat(e)&&"font-medium"),children:e})},e)}))]}),(0,f.tZ)(p,{items:y})]})]})}},9008:function(e,t,n){e.exports=n(2717)},2703:function(e,t,n){"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);