"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3054],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={description:"Learn about the Snaps system at a high level.",sidebar_position:1},o="About Snaps",i={unversionedId:"learn/about-snaps/index",id:"learn/about-snaps/index",title:"About Snaps",description:"Learn about the Snaps system at a high level.",source:"@site/snaps/learn/about-snaps/index.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/",permalink:"/1072-video-formats/snaps/learn/about-snaps/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps system at a high level.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Learn",permalink:"/1072-video-formats/snaps/learn"},next:{title:"Snaps APIs",permalink:"/1072-video-formats/snaps/learn/about-snaps/apis"}},p={},l=[{value:"Technical overview",id:"technical-overview",level:2},{value:"Permissions",id:"permissions",level:3},{value:"APIs",id:"apis",level:3},{value:"User interface",id:"user-interface",level:3},{value:"Lifecycle",id:"lifecycle",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"about-snaps"},"About Snaps"),(0,s.kt)("p",null,"MetaMask Snaps is an open source system that allows anyone to safely extend the functionality of\nMetaMask, creating new web3 end user experiences.\nFor example, a Snap can add support for different blockchain networks, add custom account types, or\nprovide additional functionality using its own APIs.\nThis allows MetaMask to be used with a far more diverse set of protocols, dapps, and services."),(0,s.kt)("p",null,"The following diagram outlines the high-level architecture of the Snaps system:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Snaps architecture diagram",src:a(30525).Z,width:"1512",height:"722"})),(0,s.kt)("p",null,"The following diagram illustrates how Snaps can ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/features/non-evm-networks"},"derive non-EVM keys")," using\n",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api#snap_getbip32entropy"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_getBip32Entropy")),",\n",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api#snap_getbip44entropy"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_getBip44Entropy")),", and\n",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api#snap_getentropy"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_getEntropy")),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Snaps get entropy diagram",src:a(30175).Z,width:"1512",height:"444"})),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Snaps cannot access the user's Secret Recovery Phrase.\nSnaps can only derive non-EVM keys using the provided methods.\nFurthermore, any Snap that derives keys must undergo a security audit before it can be made\navailable to MetaMask users.")),(0,s.kt)("h2",{id:"technical-overview"},"Technical overview"),(0,s.kt)("p",null,"A Snap is a JavaScript program run in an isolated and secure ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/learn/about-snaps/execution-environment"},"execution environment"),"."),(0,s.kt)("h3",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"By default, a Snap has no capabilities.\nIt must ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/how-to/request-permissions"},"request permissions")," for various capabilities to be\ngranted by the user at installation, such as accessing the network, storing data in MetaMask, or\ndisplaying dialogs.\nData stored by a Snap is only visible to that Snap, and a Snap cannot access data of other Snaps or\nof MetaMask core unless given permission to do so."),(0,s.kt)("h3",{id:"apis"},"APIs"),(0,s.kt)("p",null,"A Snap can communicate with MetaMask using the ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api"},"Snaps API")," and some\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods.\nThe Snaps API allows Snaps to extend or modify the functionality of MetaMask, and communicate with\nother Snaps."),(0,s.kt)("p",null,"Dapps can also use certain MetaMask JSON-RPC API methods to install and communicate with Snaps."),(0,s.kt)("p",null,"A Snap can implement its own custom JSON-RPC API to communicate with dapps and other Snaps."),(0,s.kt)("p",null,"Learn more ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/learn/about-snaps/apis"},"about the Snaps APIs"),"."),(0,s.kt)("h3",{id:"user-interface"},"User interface"),(0,s.kt)("p",null,"A Snap must represent itself and what it does to the end user.\nThe user can see their installed Snaps in the MetaMask settings page.\nFor each Snap, the user can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"See most of its manifest file data."),(0,s.kt)("li",{parentName:"ul"},"See its execution status (running, stopped, or crashed)."),(0,s.kt)("li",{parentName:"ul"},"Enable and disable the Snap.")),(0,s.kt)("p",null,"Other than the settings page, a Snap can ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/features/custom-ui/"},"modify the MetaMask UI")," only\nby ",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/snaps-api#snap_dialog"},"displaying a dialog")," or\n",(0,s.kt)("a",{parentName:"p",href:"/1072-video-formats/snaps/reference/entry-points#ontransaction"},"displaying transaction insights"),"."),(0,s.kt)("p",null,"This means that most Snaps must rely on companion dapps and their custom JSON-RPC API methods to\npresent their data to the user."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Providing more ways for Snaps to modify the MetaMask UI is an important goal of the Snaps system,\nand over time more and more Snaps will be able to contain their user interfaces entirely within\nMetaMask itself.")),(0,s.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,s.kt)("p",null,"A Snap wakes up in response to messages or events, and shuts down when idle.\nAlso, if MetaMask detects that a Snap becomes unresponsive, it shuts the Snap down."),(0,s.kt)("p",null,"A Snap is considered unresponsive if one of the following occurs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It hasn't received a JSON-RPC request for 30 seconds."),(0,s.kt)("li",{parentName:"ul"},"It takes more than 60 seconds to process a JSON-RPC request.")),(0,s.kt)("p",null,"Stopped Snaps start whenever they receive a JSON-RPC request, unless they're disabled.\nIf a Snap is disabled, the user must re-enable it before it can start again."))}d.isMDXComponent=!0},30525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snaps-architecture-de7180cbb5327cca7ed91f3cad2b40c7.png"},30175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snaps-getentropy-6cccbe90c571038546e84cc3826b506b.png"}}]);