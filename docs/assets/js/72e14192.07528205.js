"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[814],{5680:(e,a,n)=>{n.d(a,{xA:()=>y,yg:()=>g});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},y=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?t.createElement(g,o(o({ref:a},y),{},{components:n})):t.createElement(g,o({ref:a},y))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2012:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=n(8168),l=(n(6540),n(5680));const r={sidebar_position:2,sidebar_label:"Quick Start",title:"Quick Start"},o=void 0,s={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Automated Installation",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/lage/docs/quick-start",draft:!1,editUrl:"https://github.com/microsoft/lage/edit/master/docs/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quick Start",title:"Quick Start"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/lage/docs/Introduction"},next:{title:"Introducing Lage",permalink:"/lage/docs/Tutorial/"}},i={},p=[{value:"Automated Installation",id:"automated-installation",level:2},{value:"Customize <code>lage.config.js</code>",id:"customize-lageconfigjs",level:2},{value:"Customize workspace (root level) <code>package.json</code>",id:"customize-workspace-root-level-packagejson",level:2},{value:"Ready to Build, Test, and Lint!",id:"ready-to-build-test-and-lint",level:2},{value:"Next Steps",id:"next-steps",level:2}],y={toc:p},c="wrapper";function d(e){let{components:a,...n}=e;return(0,l.yg)(c,(0,t.A)({},y,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"automated-installation"},"Automated Installation"),(0,l.yg)("p",null,"To automatically install ",(0,l.yg)("inlineCode",{parentName:"p"},"lage")," as a ",(0,l.yg)("inlineCode",{parentName:"p"},"devDependency")," at your workspace's root and create a default ",(0,l.yg)("inlineCode",{parentName:"p"},"lage.config.js"),", run:"),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"undefined"}},"npx lage init"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"undefined"}},"npx lage init")))))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"lage")," is compatible with all the popular workspace managers, including ",(0,l.yg)("inlineCode",{parentName:"p"},"yarn"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"npm"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"pnpm"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"rush"),"."),(0,l.yg)("h2",{id:"customize-lageconfigjs"},"Customize ",(0,l.yg)("inlineCode",{parentName:"h2"},"lage.config.js")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"init")," command will also generate a default ",(0,l.yg)("inlineCode",{parentName:"p"},"lage.config.js"),". This will likely need to be modified. In particular, pay attention to the ",(0,l.yg)("inlineCode",{parentName:"p"},"pipeline"),"\nconfiguration:"),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:"/lage.config.js"},(0,l.yg)("div",{parentName:"pre",className:"code-title"},"/lage.config.js"),(0,l.yg)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#267F99"}},"module"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#267F99"}},"exports"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," = {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"pipeline:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"build:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"^build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"test:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"],")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#001080"}},"lint:"),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}}," []")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"};"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"/lage.config.js"},(0,l.yg)("div",{parentName:"pre",className:"code-title"},"/lage.config.js"),(0,l.yg)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#88C0D0"}},"lint"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," []")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.yg)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,l.yg)("h2",{id:"customize-workspace-root-level-packagejson"},"Customize workspace (root level) ",(0,l.yg)("inlineCode",{parentName:"h2"},"package.json")),(0,l.yg)("p",null,"Modify the ",(0,l.yg)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,l.yg)("inlineCode",{parentName:"p"},"lage")," to run your tasks:"),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus with-title",style:{backgroundColor:"#FFFFFF",color:"#000000"},title:"/package.json"},(0,l.yg)("div",{parentName:"pre",className:"code-title"},"/package.json"),(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"name"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"workspace-root"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"scripts"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"lage build"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"test"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"lage test"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"lint"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"lage lint"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  },")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"devDependencies"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#0451A5"}},'"lage"'),(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},": "),(0,l.yg)("span",{parentName:"div",style:{color:"#A31515"}},'"latest"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"  }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"}"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"/package.json"},(0,l.yg)("div",{parentName:"pre",className:"code-title"},"/package.json"),(0,l.yg)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"name"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"workspace-root"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"scripts"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage build"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"test"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage test"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lint"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage lint"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"devDependencies"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lage"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.yg)("h2",{id:"ready-to-build-test-and-lint"},"Ready to Build, Test, and Lint!"),(0,l.yg)("p",null,"You are now ready to start running all the commands in your repository with ",(0,l.yg)("inlineCode",{parentName:"p"},"lage"),". You'll notice that tasks are now cached!"),(0,l.yg)("p",null,"For example (choose the appropriate command for your package manager):"),(0,l.yg)("div",{className:"shiki-twoslash-fragment"},(0,l.yg)("pre",{parentName:"div",className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"shell"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#008000"}},"# choose one")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"npm run build")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"yarn build")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#000000"}},"pnpm build"))))),(0,l.yg)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"shell"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#616E88"}},"# choose one")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm run build")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn build")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"pnpm build")))))),(0,l.yg)("h2",{id:"next-steps"},"Next Steps"),(0,l.yg)("p",null,"Now that you've configured ",(0,l.yg)("inlineCode",{parentName:"p"},"lage"),", dig deeper in the ",(0,l.yg)("a",{parentName:"p",href:"/lage/docs/Tutorial/pipeline"},"Tutorial")," section for features like remote caching, task skipping, customized pipelines, and setting priorities."))}d.isMDXComponent=!0}}]);