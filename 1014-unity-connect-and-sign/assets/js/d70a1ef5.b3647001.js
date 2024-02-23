"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7382],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=a,g=l["".concat(p,".").concat(m)]||l[m]||d[m]||r;return t?o.createElement(g,s(s({ref:n},c),{},{components:t})):o.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_position:6},s="Debug a Snap",i={unversionedId:"how-to/debug-a-snap/index",id:"how-to/debug-a-snap/index",title:"Debug a Snap",description:"To debug your Snap, use console.log and inspect the MetaMask background process.",source:"@site/snaps/how-to/debug-a-snap/index.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/",permalink:"/1014-unity-connect-and-sign/snaps/how-to/debug-a-snap/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"snapsSidebar",previous:{title:"Test a Snap",permalink:"/1014-unity-connect-and-sign/snaps/how-to/test-a-snap"},next:{title:"Troubleshoot common issues",permalink:"/1014-unity-connect-and-sign/snaps/how-to/debug-a-snap/common-issues"}},p={},u=[],c={toc:u},l="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debug-a-snap"},"Debug a Snap"),(0,a.kt)("p",null,"To debug your Snap, use ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also see the ",(0,a.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/snaps/how-to/debug-a-snap/common-issues"},"common issues")," encountered by Snap developers.")),(0,a.kt)("p",null,"You can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,a.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/snaps/reference/cli/subcommands#m-manifest"},(0,a.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nto update the ",(0,a.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,a.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,a.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,a.kt)("li",{parentName:"ol"},"Toggle ",(0,a.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,a.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,a.kt)("strong",{parentName:"li"},"Details"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,a.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,a.kt)("p",null,"The log output displays in the console that pops up."))}d.isMDXComponent=!0}}]);