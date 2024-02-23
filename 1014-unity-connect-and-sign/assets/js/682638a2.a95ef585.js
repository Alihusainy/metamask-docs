"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},l),{},{components:a})):n.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},o="Use MetaMask SDK with pure JavaScript",s={unversionedId:"how-to/use-sdk/javascript/pure-js",id:"how-to/use-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"Set up the SDK in your Pure JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/1014-unity-connect-and-sign/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/pure-js.md",tags:[{label:"JavaScript SDK",permalink:"/1014-unity-connect-and-sign/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React UI",permalink:"/1014-unity-connect-and-sign/wallet/how-to/use-sdk/javascript/react/react-ui"},next:{title:"Other web frameworks",permalink:"/1014-unity-connect-and-sign/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},p={},c=[{value:"Example",id:"example",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/wallet/concepts/sdk/"},"MetaMask SDK")," into your pure JavaScript dapp to enable\nyour users to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for pure JavaScript has the ",(0,r.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<head>\n    ...\n    <script src="https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js"><\/script>\n    <script>\n        const MMSDK = new MetaMaskSDK.MetaMaskSDK(\n            dappMetadata: {\n                name: "Example Pure JS Dapp",\n                url: window.location.href,\n            },\n            // Other options\n        )\n        // Because the init process of MetaMask SDK is async.\n        setTimeout(() => {\n            // You can also access via window.ethereum\n            const ethereum = MMSDK.getProvider();\n\n            ethereum.request({ method: \'eth_requestAccounts\' });\n        }, 0)\n    <\/script>\n    ...\n</head>\n')),(0,r.kt)("p",null,"You can configure the SDK using any ",(0,r.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,r.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,r.kt)("a",{parentName:"p",href:"/1014-unity-connect-and-sign/wallet/reference/provider-api#windowethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)"))," first,\nsince it prompts the installation or connection popup to appear."),(0,r.kt)("admonition",{title:"Important SDK options",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1014-unity-connect-and-sign/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1014-unity-connect-and-sign/wallet/reference/sdk-js-options#modals"},(0,r.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,r.kt)("a",{parentName:"li",href:"/1014-unity-connect-and-sign/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1014-unity-connect-and-sign/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,r.kt)("a",{parentName:"li",href:"/1014-unity-connect-and-sign/wallet/how-to/make-read-only-requests"},"make read-only RPC requests")," from your dapp."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/pure-javascript"},"example pure JavaScript dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}d.isMDXComponent=!0}}]);