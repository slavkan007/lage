"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[998],{5318:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var n=t(7378);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),k=l,N=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return t?n.createElement(N,r(r({ref:a},d),{},{components:t})):n.createElement(N,r({ref:a},d))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1923:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(5773),l=(t(7378),t(5318));const o={sidebar_position:2,title:"2. Pipeline"},r=void 0,i={unversionedId:"Tutorial/pipeline",id:"Tutorial/pipeline",title:"2. Pipeline",description:'In this step, you\'ll learn about how to influence how lage schedules which "target" runs at which time. For full details on how to configure pipelines, make sure to consult with the reference for configuration.',source:"@site/docs/Tutorial/pipeline.md",sourceDirName:"Tutorial",slug:"/Tutorial/pipeline",permalink:"/lage/docs/Tutorial/pipeline",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/Tutorial/pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2. Pipeline"},sidebar:"tutorialSidebar",previous:{title:"1. Installation",permalink:"/lage/docs/Tutorial/installation"},next:{title:"3. Scoping by packages",permalink:"/lage/docs/Tutorial/scopes"}},s={},p=[{value:"What is a <code>lage</code> pipeline?",id:"what-is-a-lage-pipeline",level:2},{value:"Defining a pipeline",id:"defining-a-pipeline",level:2},{value:"Task dependency format",id:"task-dependency-format",level:3},{value:"Topological dependency",id:"topological-dependency",level:3},{value:"Empty dependency list",id:"empty-dependency-list",level:3},{value:"Tasks that are in the <code>pipeline</code> but not in SOME <code>package.json</code>",id:"tasks-that-are-in-the-pipeline-but-not-in-some-packagejson",level:3},{value:"Specific package tasks",id:"specific-package-tasks",level:3}],d={toc:p};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this step, you'll learn about how to influence how ",(0,l.kt)("inlineCode",{parentName:"p"},"lage"),' schedules which "target" runs at which time. For full details on how to configure pipelines, make sure to consult with the ',(0,l.kt)("a",{parentName:"p",href:"/docs/Reference/config"},"reference for configuration"),"."),(0,l.kt)("h2",{id:"what-is-a-lage-pipeline"},"What is a ",(0,l.kt)("inlineCode",{parentName:"h2"},"lage")," pipeline?"),(0,l.kt)("p",null,"In the traditional monorepo task runners, each npm lifecycle script like ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," is run topologically or in parallel individually. Depending on the graph of the packages, CPU cores are left idle wasting developer time."),(0,l.kt)("p",null,"Futhermore, the developer is expected to keep track of an ",(0,l.kt)("strong",{parentName:"p"},"implicit")," graph of the tasks. For example, the developer is expected to understand that perhaps the ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," task is only available after ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," has completed."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lage")," gives developers a way to specify these relationships ",(0,l.kt)("strong",{parentName:"p"},"explicitly"),". The advantage here are two fold. First, incoming new developers can look at ",(0,l.kt)("inlineCode",{parentName:"p"},"lage.config.js")," and understand how tasks are related. Second, ",(0,l.kt)("inlineCode",{parentName:"p"},"lage")," can use this explicit declaration to perform an optimized build based on the abundant availability of multi-core processors."),(0,l.kt)("h2",{id:"defining-a-pipeline"},"Defining a pipeline"),(0,l.kt)("p",null,"To define the task dependency graph, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline")," key in the ",(0,l.kt)("inlineCode",{parentName:"p"},"lage.config.js"),". For example, this is the default generated configuration when you run ",(0,l.kt)("inlineCode",{parentName:"p"},"npx lage init"),":"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"module"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"exports"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  pipeline"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    build"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"^build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    test"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    lint"),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," []"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"lint"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," []"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,l.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,l.kt)("h3",{id:"task-dependency-format"},"Task dependency format"),(0,l.kt)("p",null,"What you are declaring here in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline")," object of the configuration is a dependency graph of tasks. The ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," task above depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," task of the same package. The dependencies of ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," is an array, so it actually can depend on multiple tasks. This may be more relevant in a more complex monorepo."),(0,l.kt)("h3",{id:"topological-dependency"},"Topological dependency"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"^")," symbol explicitly declares that the task has a package-topological dependency on another task. For example, if ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," package depends on ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lage build")," will guarantee that the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," task of ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," will happen before ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," task."),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"pipeline"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"^build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"pipeline"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.kt)("h3",{id:"empty-dependency-list"},"Empty dependency list"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"lint")," task above has NO dependencies. This means that it can start whenever it can!"),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"pipeline"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"lint"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," []")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"pipeline"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lint"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[]")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.kt)("h3",{id:"tasks-that-are-in-the-pipeline-but-not-in-some-packagejson"},"Tasks that are in the ",(0,l.kt)("inlineCode",{parentName:"h3"},"pipeline")," but not in SOME ",(0,l.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,l.kt)("p",null,"Sometimes tasks declared in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pipeline")," are not present in all packages' ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," files. ",(0,l.kt)("inlineCode",{parentName:"p"},"lage")," will automatically ignore those. No problem!"),(0,l.kt)("h3",{id:"specific-package-tasks"},"Specific package tasks"),(0,l.kt)("p",null,"Sometimes it becomes necessary to manually place a package task dependency on another package task. This can occur especially in repos that are just coming off of a lerna or rush repository where the tasks are traditionally run in separate phases. Sometimes assumptions were made in those repositories that are not expressable in the simple task pipeline configuration as seen above. For thoes cases, simply place those alongside with the rest of the pipeline configuration."),(0,l.kt)("p",null,"In this example, we illustrate a ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," script of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," package depends on the ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," script of ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),". The syntax is ",(0,l.kt)("inlineCode",{parentName:"p"},"[package]#[task]"),"."),(0,l.kt)("div",{className:"shiki-twoslash-fragment"},(0,l.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// package-a build depends on the output of package-b build.")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"pipeline"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"test"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"foo#build"'),(0,l.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,l.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"bar#test"'),(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,l.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// package-a build depends on the output of package-b build.")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"pipeline"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"test"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"],")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"foo#build"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"bar#test"),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,l.kt)("p",null,"This seems like it goes against the ",(0,l.kt)("inlineCode",{parentName:"p"},'test: ["build"]'),", but it does not. Since ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," scripts does not have a topological dependency, it theoretically can get triggered anytime its own package's ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," script has finished! The general guidance is to get rid of these specific package-task to package-task dependency in the pipeline as quickly as possible so the builds can be optimized better."))}c.isMDXComponent=!0}}]);