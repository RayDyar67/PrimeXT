"use strict";(self.webpackChunkprimext_documentation=self.webpackChunkprimext_documentation||[]).push([[8712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(r),k=a,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1,description:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 Half-Life 1 SDK \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u043a\u0430 Xash3D FWGS, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u0434 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u0438\u043c\u0435\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0443\u044e \u0433\u0440\u0430\u0444\u0438\u043a\u0443 \u0438 \u0444\u0438\u0437\u0438\u043a\u0443, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0441\u0435 \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0435 GoldSrc \u0438 Xash3D \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0430\u0431\u043e\u0442\u0435."},i="\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",o={unversionedId:"rus/intro",id:"rus/intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 Half-Life 1 SDK \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u043a\u0430 Xash3D FWGS, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u0434 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u0438\u043c\u0435\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0443\u044e \u0433\u0440\u0430\u0444\u0438\u043a\u0443 \u0438 \u0444\u0438\u0437\u0438\u043a\u0443, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0441\u0435 \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0435 GoldSrc \u0438 Xash3D \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0430\u0431\u043e\u0442\u0435.",source:"@site/docs/rus/intro.md",sourceDirName:"rus",slug:"/rus/intro",permalink:"/PrimeXT/docs/rus/intro",draft:!1,editUrl:"https://github.com/SNMetamorph/PrimeXT/tree/master/documentation/docs/rus/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 Half-Life 1 SDK \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u043a\u0430 Xash3D FWGS, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u0434 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u0438\u043c\u0435\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0443\u044e \u0433\u0440\u0430\u0444\u0438\u043a\u0443 \u0438 \u0444\u0438\u0437\u0438\u043a\u0443, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0441\u0435 \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0435 GoldSrc \u0438 Xash3D \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0430\u0431\u043e\u0442\u0435."},sidebar:"tutorialSidebar",next:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043c\u043e\u0434\u0434\u0438\u043d\u0433 Half-Life 1",permalink:"/PrimeXT/docs/rus/modding_introduction"}},p={},u=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b-\u043d\u0430-\u0434\u0430\u043d\u043d\u044b\u0439-\u043c\u043e\u043c\u0435\u043d\u0442",level:3},{value:"\u041f\u043b\u0430\u043d\u044b \u043d\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435",id:"\u043f\u043b\u0430\u043d\u044b-\u043d\u0430-\u0431\u0443\u0434\u0443\u0449\u0435\u0435",level:3},{value:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0438 \u0441\u043e\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438",id:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u0438-\u0441\u043e\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438",level:3}],m={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,a.kt)("p",null,"PrimeXT - \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 Half-Life 1 SDK \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u043a\u0430 Xash3D FWGS, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u0434 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u0438\u043c\u0435\u0435\u0442 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0443\u044e \u0433\u0440\u0430\u0444\u0438\u043a\u0443 \u0438 \u0444\u0438\u0437\u0438\u043a\u0443, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0441\u0435 \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0435 GoldSrc \u0438 Xash3D \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0430\u0431\u043e\u0442\u0435.\n\u0411\u0430\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 XashXT, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u0435\u0441\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0438\u0437 XashXT \u0438 Spirit Of Half-Life. \u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0430\u043a \u0441\u0438\u043d\u0433\u043b\u043f\u043b\u0435\u0435\u0440\u043d\u044b\u0445, \u0442\u0430\u043a \u0438 \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u0435\u0440\u043d\u044b\u0445 \u043c\u043e\u0434\u043e\u0432."),(0,a.kt)("h3",{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b-\u043d\u0430-\u0434\u0430\u043d\u043d\u044b\u0439-\u043c\u043e\u043c\u0435\u043d\u0442"},"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e\u043c \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e GoldSrc"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043c\u043d\u043e\u0433\u0438\u0445 \u043b\u0438\u043c\u0438\u0442\u043e\u0432, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 GoldSrc \u0438 \u0432\u0430\u043d\u0438\u043b\u044c\u043d\u043e\u043c\u0443 Xash3D"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u043d\u0432\u0435\u0440\u0441\u043d\u0430\u044f \u043a\u0438\u043d\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 jiggle bones \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0440\u0430\u0437\u0432\u0435\u0441\u043e\u0432\u043a\u0438 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043b\u0438\u043c\u0438\u0442 \u043d\u0430 \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b (65535x65535x65535 \u044e\u043d\u0438\u0442\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u044d\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0438\u0438 (\u044d\u0444\u0444\u0435\u043a\u0442 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u0438 \u0433\u043b\u0430\u0437)"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0434\u0435\u043a\u0430\u043b\u0435\u0439 \u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u044f\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043b\u0438\u043c\u0438\u0442\u044b \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (\u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u043a\u0443\u0447\u0443 smd-\u0444\u0430\u0439\u043b\u043e\u0432)"),(0,a.kt)("li",{parentName:"ul"},"\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0442\u0435\u043d\u0435\u0439"),(0,a.kt)("li",{parentName:"ul"},"\u0424\u0438\u0437\u0438\u043a\u0430 \u0442\u0432\u0451\u0440\u0434\u044b\u0445 \u0442\u0435\u043b (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u0432\u0438\u0436\u043e\u043a PhysX)"),(0,a.kt)("li",{parentName:"ul"},"\u041d\u043e\u0440\u043c\u0430\u043b-\u043c\u0430\u043f\u043f\u0438\u043d\u0433"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0430\u0440\u0430\u043b\u043b\u0430\u043a\u0441-\u043c\u0430\u043f\u043f\u0438\u043d\u0433"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043a\u0443\u0431\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043a\u0430\u0440\u0442"),(0,a.kt)("li",{parentName:"ul"},"HDR-\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433"),(0,a.kt)("li",{parentName:"ul"},"3D \u0441\u043a\u0430\u0439\u0431\u043e\u043a\u0441"),(0,a.kt)("li",{parentName:"ul"},"Bloom"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0435 \u043b\u0443\u0447\u0438 (sunshafts/godrays)"),(0,a.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0444\u043e\u043d\u043e\u043c \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u043c\u0435\u043d\u044e"),(0,a.kt)("li",{parentName:"ul"},"\u0417\u0435\u0440\u043a\u0430\u043b\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u044b"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0440\u0442\u0430\u043b\u044b, \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u044d\u043d\u0442\u0438\u0442\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043d\u0438\u0445"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0443\u0442\u0438\u043b\u0438\u0442 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u044b \u0430\u0441\u0441\u0435\u0442\u043e\u0432, \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0449\u0438\u043a \u043c\u043e\u0434\u0435\u043b\u0435\u0439/\u0441\u043f\u0440\u0430\u0439\u0442\u043e\u0432)")),(0,a.kt)("h3",{id:"\u043f\u043b\u0430\u043d\u044b-\u043d\u0430-\u0431\u0443\u0434\u0443\u0449\u0435\u0435"},"\u041f\u043b\u0430\u043d\u044b \u043d\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 (PBR) \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0442\u0430\u0440\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u043d\u0430 GPU"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f Forward+ \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u0430\u043b\u0442\u0430\u0439\u043c \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u044d\u043a\u0440\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 (Screen Space Reflections)"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u0430\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 (depth pre-pass, \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043a\u0443\u043b\u043b\u0438\u043d\u0433\u0430 \u0438 \u0442.\u0434.)"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043d\u0430\u044f \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0438\u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u043f\u0430\u0440\u0442\u0438\u043a\u043b\u0435\u0439"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 ragdoll-\u0444\u0438\u0437\u0438\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 OpenAL Soft / Steam Audio"),(0,a.kt)("li",{parentName:"ul"},"\u0414\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u0440\u0442\u0430 \u043f\u043e\u0434 Android \u0434\u043e \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f")),(0,a.kt)("h3",{id:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u0438-\u0441\u043e\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0438 \u0441\u043e\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SNMetamorph")," - \u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Velaron")," - \u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043d\u0430 Linux"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0421ASPERX69X")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043b\u043e\u0433\u043e\u0442\u0438\u043f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ncuxonaT")," - \u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0440\u0435\u043d\u0434\u0435\u0440\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lev")," - \u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0440\u0435\u043d\u0434\u0435\u0440\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"g-cont")," - \u041f\u043e\u043c\u043e\u0449\u044c \u0432 \u043e\u0431\u0449\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next Day")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Aynekko")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ThomasvonWinkler")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"KorteZZ")," - \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0438 \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 PrimeXT - \u0434\u043b\u044f \u043d\u0430\u0441 \u0432\u0430\u0436\u0435\u043d \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u043b\u0430\u0434. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435\n\u043f\u0440\u043e \u0441\u043e\u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/BxQUMUescJ"},"Discord \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),"."))}s.isMDXComponent=!0}}]);