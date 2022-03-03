"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[539],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={sidebar_position:4,title:"Caching"},l="Caching",s={unversionedId:"Guide/cache",id:"Guide/cache",title:"Caching",description:"lage by default will cache tasks that it has already done recently locally on disk. As long as the source file and the command arguments have not changed, those cached results will be restored.",source:"@site/docs/Guide/cache.md",sourceDirName:"Guide",slug:"/Guide/cache",permalink:"/lage/docs-new/docs/Guide/cache",editUrl:"https://github.com/microsoft/lage/docs-new/docs/Guide/cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Caching"},sidebar:"tutorialSidebar",previous:{title:"Scoped builds",permalink:"/lage/docs-new/docs/Guide/scopes"},next:{title:"Remote Cache",permalink:"/lage/docs-new/docs/Guide/remote-cache"}},u=[{value:"Turn off cache",id:"turn-off-cache",children:[],level:2},{value:"Resetting cache",id:"resetting-cache",children:[],level:2},{value:"Cache Options",id:"cache-options",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"caching"},"Caching"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lage")," by default will cache tasks that it has already done recently locally on disk. As long as the source file and the command arguments have not changed, those cached results will be restored."),(0,o.kt)("p",null,"See (Remote Cache)","[./remote-cache]"," for details about speeding up local dev environment even further with a remote cache from Continuous Integration jobs."),(0,o.kt)("h2",{id:"turn-off-cache"},"Turn off cache"),(0,o.kt)("p",null,"Sometimes, this incremental behavior is not desired. You can override the caching behavior by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-cache")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ lage build --no-cache\n")),(0,o.kt)("h2",{id:"resetting-cache"},"Resetting cache"),(0,o.kt)("p",null,"Once in a while, the cache might need to be recreated from scratch. In those situations, you can reset the cache by passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--reset-cache")," argument to the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lage --reset-cache\n")),(0,o.kt)("h2",{id:"cache-options"},"Cache Options"),(0,o.kt)("p",null,"Caching capability is provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"backfill"),". All of the configuration under the ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheOptions")," key is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"backfill"),". For the complete documentation of ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheOptions"),", see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/backfill#configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"backfill")," configuration documentation")))}d.isMDXComponent=!0}}]);