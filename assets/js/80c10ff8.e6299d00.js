"use strict";(self.webpackChunkprimext_documentation=self.webpackChunkprimext_documentation||[]).push([[205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5},i="\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438",o={unversionedId:"rus/working_with_materials",id:"rus/working_with_materials",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438",description:"\u0412 PrimeXT \u0435\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432. \u0422\u0430\u043a\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u044b \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0430\u043c, \u044d\u0442\u043e \u0434\u0430\u0451\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0433\u0438\u0431\u043a\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 (\u0437\u0432\u0443\u043a\u0438 \u0448\u0430\u0433\u043e\u0432, \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u0435, \u043f\u0440\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0434\u0435\u043a\u0430\u043b\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f).",source:"@site/docs/rus/working_with_materials.md",sourceDirName:"rus",slug:"/rus/working_with_materials",permalink:"/PrimeXT/docs/rus/working_with_materials",draft:!1,editUrl:"https://github.com/SNMetamorph/PrimeXT/tree/master/documentation/docs/rus/working_with_materials.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0430\u043c\u0438",permalink:"/PrimeXT/docs/rus/working_with_textures"},next:{title:"pxstudiomdl",permalink:"/PrimeXT/docs/rus/tools/pxstudiomdl"}},p={},s=[{value:"\u0424\u043e\u043d\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u043c\u0435\u043d\u044e (chapterbackgrounds.txt)",id:"\u0444\u043e\u043d\u043e\u0432\u0430\u044f-\u043a\u0430\u0440\u0442\u0430-\u0432-\u0433\u043b\u0430\u0432\u043d\u043e\u043c-\u043c\u0435\u043d\u044e-chapterbackgroundstxt",level:2},{value:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b (materials.def)",id:"\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b-materialsdef",level:2},{value:"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u043a \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0435",id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430-\u043a-\u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0435",level:2},{value:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0443\u0440",id:"\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0442\u0435\u043a\u0441\u0442\u0443\u0440",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c\u0438"),(0,r.kt)("p",null,"\u0412 PrimeXT \u0435\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432. \u0422\u0430\u043a\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u044b \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0430\u043c, \u044d\u0442\u043e \u0434\u0430\u0451\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0433\u0438\u0431\u043a\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 (\u0437\u0432\u0443\u043a\u0438 \u0448\u0430\u0433\u043e\u0432, \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u0435, \u043f\u0440\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0434\u0435\u043a\u0430\u043b\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f).\n\u0424\u0430\u0439\u043b\u044b \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),", \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043d\u0435 \u043f\u0440\u0438\u0431\u0435\u0433\u0430\u044f \u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0438\u0433\u0440\u044b."),(0,r.kt)("h2",{id:"\u0444\u043e\u043d\u043e\u0432\u0430\u044f-\u043a\u0430\u0440\u0442\u0430-\u0432-\u0433\u043b\u0430\u0432\u043d\u043e\u043c-\u043c\u0435\u043d\u044e-chapterbackgroundstxt"},"\u0424\u043e\u043d\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u043c\u0435\u043d\u044e (chapterbackgrounds.txt)"),(0,r.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0432\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u043c\u0435\u043d\u0430 \u043a\u0430\u0440\u0442 \u0434\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0431\u044d\u043a\u0433\u0440\u0430\u0443\u043d\u0434\u0430 \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u043c\u0435\u043d\u044e \u0438\u0433\u0440\u044b. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0444\u043e\u043d \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e \u0434\u0432\u0435 \u043a\u0430\u0440\u0442\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"test_0.bsp")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"test_1.bsp"),". \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043d\u0443\u0436\u043d\u043e \u0432\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0444\u0430\u0439\u043b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"test_0\ntest_1\n")),(0,r.kt)("p",null,"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u044b (",(0,r.kt)("inlineCode",{parentName:"p"},".bsp"),") \u043d\u0435 \u043d\u0443\u0436\u043d\u043e. \u041f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043e\u0434\u043d\u0430 \u0438\u0437 \u043a\u0430\u0440\u0442 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0432 \u043c\u0435\u043d\u044e. \u041f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0443\u0436\u0435 \u0441\u0430\u043c\u043e\u0439 \u0438\u0433\u0440\u044b, \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0431\u044d\u043a\u0433\u0440\u0430\u0443\u043d\u0434 \u043f\u0440\u043e\u043f\u0430\u0434\u0435\u0442, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043e\u043a\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430. "),(0,r.kt)("admonition",{title:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u0412 \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u0440\u0442\u0430\u0445 \u0431\u0443\u0434\u0443\u0442 \u0442\u0430\u043a \u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b, \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u044b, \u0438 \u043c\u0443\u0437\u044b\u043a\u0430. \u041d\u043e \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0435\u0441\u0442\u044c \u044d\u043d\u0442\u0438\u0442\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"ambient_music"),", \u043e\u043d\u0430 \u0437\u0430\u0433\u043b\u0443\u0448\u0438\u0442 \u043c\u0443\u0437\u044b\u043a\u0443 \u0438\u0437 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u044e. \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u043e.")),(0,r.kt)("h2",{id:"\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b-materialsdef"},"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b (materials.def)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u0437\u0432\u0443\u043a\u0438 \u0448\u0430\u0433\u043e\u0432/\u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f, \u0434\u0435\u043a\u0430\u043b\u0438, \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b.\n\u0422\u0430\u043a\u0436\u0435, \u0432 \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u043d\u0435\u0434\u0440\u044f\u0442\u044c \u0432 \u043a\u043e\u0434 \u0438\u0433\u0440\u044b, \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0438\u0433\u0440\u044b.\n\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e, \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u0445 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u0438 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438. "),(0,r.kt)("p",null,"\u0412\u043e\u0442 \u0442\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"default"\n{\n    "impact_decal"  "shot"\n    "impact_parts"  "test_impact" "test_smoke"\n    "impact_sound"  "materials/debris_concrete_01.wav" "materials/debris_concrete_02.wav" \n    "step_sound"    "materials/walk_concrete_01.wav" "materials/walk_concrete_02.wav" \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0443\u043d\u043a\u0442 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"default"')," - \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"li"},"asphalt"),", \u043d\u0443\u0436\u043d\u043e \u0432\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043a\u0430\u0432\u044b\u0447\u043a\u0438 \u0441\u043b\u043e\u0432\u043e, \u0438 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"asphalt"\n{\n    "impact_decal"  "shot"\n    "impact_parts"  "test_impact" "test_smoke"\n    "impact_sound"  "materials/debris_concrete_01.wav" "materials/debris_concrete_02.wav" \n    "step_sound"    "materials/walk_concrete_01.wav" "materials/walk_concrete_02.wav" \n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"impact_decal"')," - \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0434\u0435\u043a\u0430\u043b\u0438 \u0441\u043b\u0435\u0434\u043e\u0432 \u043e\u0442 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u0430 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0443. \u0412\u0441\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u0434\u0435\u043a\u0430\u043b\u0435\u0439 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"gfx\\decals\\decalinfo.txt"),".\n\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u0438\u0437 \u0433\u0440\u0443\u043f\u043f, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u044b\u0448\u0435\u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u043e\u043c \u0444\u0430\u0439\u043b\u0435.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0441\u043b\u0435\u0434\u044b \u043e\u0442 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0430 \u0434\u0435\u043a\u0430\u043b\u0435\u0439 ",(0,r.kt)("inlineCode",{parentName:"li"},"shot")," \u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"decalinfo.txt"),".")),(0,r.kt)("p",null,"\u0412 ",(0,r.kt)("inlineCode",{parentName:"p"},"decalinfo.txt")," \u044d\u0442\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a, \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u043e\u0434\u0433\u0440\u0443\u043f\u043f\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0435\u043a\u0430\u043b\u0435\u0439 \u0438 \u0432\u043c\u0435\u0441\u0442\u043e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shot\n{\n    shot    6   6   0.5\n}\n")),(0,r.kt)("p",null,"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u043e\u0432:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shot\n{\n    shot    6   6   0.5\n    shot1   6   6   0.5\n    shot2   6   6   0.5\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"impact_parts"')," - \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0447\u0430\u0441\u0442\u0438\u0446\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0441\u0435\u043a\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0438 ",(0,r.kt)("strong",{parentName:"li"},"(\u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"impact_sound"')," - \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0432\u0443\u043a\u043e\u0432 (\u043e\u0442 1 \u0434\u043e 8), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0438 \u043f\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0443. \u041f\u0443\u0442\u044c \u0434\u043e \u0437\u0432\u0443\u043a\u043e\u0432 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0438\u0437 \u043f\u0430\u043f\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"sound"),", \u0434\u0430\u043b\u0435\u0435 \u0432\u044b \u0432 \u043f\u0440\u0430\u0432\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u043f\u043e\u0434\u043f\u0430\u043f\u043e\u043a, \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 4 \u0437\u0432\u0443\u043a\u0430\u043c\u0438 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"impact_sound" "materials/debris_concrete_01.wav" "materials/debris_concrete_02.wav" "materials/debris_concrete_03.wav" "materials/debris_concrete_04.wav"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"step_sound"')," - \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0432\u0443\u043a\u043e\u0432 (\u043e\u0442 1 \u0434\u043e 8), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u0440\u0438 \u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u043f\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0443 \u0438\u0433\u0440\u043e\u043a\u0430 \u0438\u043b\u0438 NPC. \u041f\u0443\u0442\u044c \u0434\u043e \u0437\u0432\u0443\u043a\u043e\u0432 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0438\u0437 \u043f\u0430\u043f\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"sound"),", \u0434\u0430\u043b\u0435\u0435 \u0432\u044b \u0432 \u043f\u0440\u0430\u0432\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u043f\u043e\u0434\u043f\u0430\u043f\u043e\u043a, \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441 4 \u0437\u0432\u0443\u043a\u0430\u043c\u0438 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"step_sound" "materials/walk_asphalt_01.wav" "materials/walk_asphalt_02.wav" "materials/walk_asphalt_03.wav" "materials/walk_asphalt_04.wav"\n')),(0,r.kt)("h2",{id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430-\u043a-\u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0435"},"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u043a \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0435"),(0,r.kt)("p",null,"\u041a \u043b\u044e\u0431\u043e\u0439 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b. \u042d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u044c\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 ",(0,r.kt)("inlineCode",{parentName:"p"},".mat")," \u0444\u0430\u0439\u043b\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0430\u043f\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),".\n\u041d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435, \u0442\u0430\u043a\u0436\u0435, \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0442\u0430\u043a\u043e\u0439 \u0444\u0430\u0439\u043b. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0430 \u0434\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u043e\u0439 \u0441\u0442\u0435\u043d\u044b \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"wood_01"),". \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u0430\u0439\u043b \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"textures.mat"),". \u0412 \u044d\u0442\u043e\u0439 \u0444\u0430\u0439\u043b\u0435 \u043c\u044b \u043f\u0438\u0448\u0435\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"wood_01"\n{\n    "material" "wood"\n}\n')),(0,r.kt)("p",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c, \u0438 \u0442\u0435\u043f\u0435\u0440\u044c \u0432 \u0438\u0433\u0440\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u0432\u0443\u043a\u0438 \u0448\u0430\u0433\u043e\u0432/\u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u0434\u0435\u043a\u0430\u043b\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"wood"),".\n\u0427\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u043a \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0430\u043c \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u0442\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438, \u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0443\u0436\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b, \u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"box.mdl")," \u0441 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"box/body"\n{\n    "material" "wood"\n}\n')),(0,r.kt)("h2",{id:"\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0442\u0435\u043a\u0441\u0442\u0443\u0440"},"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0443\u0440"),(0,r.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435, \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},".mat")," \u0444\u0430\u0439\u043b\u0430\u0445 \u043f\u043e\u043c\u0438\u043c\u043e \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430, \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0443\u0440."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"reflectScale"')," - \u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430. \u0411\u043e\u043b\u044c\u0448\u0435 \u0447\u0438\u0441\u043b\u043e - \u044f\u0440\u0447\u0435 \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"reliefScale"')," - \u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0432\u044b\u0441\u043e\u0442\u044b \u0434\u043b\u044f \u043f\u0430\u0440\u0430\u043b\u043b\u0430\u043a\u0441-\u043c\u0430\u043f\u043f\u0438\u043d\u0433\u0430 (\u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043a\u0430\u0440\u0442\u0430 \u0432\u044b\u0441\u043e\u0442)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"refractScale"')," - \u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043f\u0440\u0435\u043b\u043e\u043c\u043b\u0435\u043d\u0438\u044f (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0435\u0439)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"aberrationScale"')," - \u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0445\u0440\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0430\u0431\u0435\u0440\u0440\u0430\u0446\u0438\u044f (\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0435\u0439)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"smoothness"')," - \u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0433\u043b\u0430\u0434\u043a\u043e\u0441\u0442\u0438 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438, \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 0.0 \u0434\u043e 1.0")),(0,r.kt)("p",null,"\u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u043e\u0440\u0443\u0436\u0438\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"v_9mmAR/body"\n{\n    "reflectScale"  "0.3"\n    "material" "metal"\n    "refractScale"  "3"\n    "aberrationScale" "0.01"\n}\n')))}c.isMDXComponent=!0}}]);