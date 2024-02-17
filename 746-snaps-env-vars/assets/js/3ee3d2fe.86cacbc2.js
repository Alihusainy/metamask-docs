"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1402],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=s,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(h,p(p({ref:n},m),{},{components:t})):a.createElement(h,p({ref:n},m))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:s,p[1]=i;for(var l=2;l<r;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));const r={description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},p="About the Snaps APIs",i={unversionedId:"learn/about-snaps/apis",id:"learn/about-snaps/apis",title:"About the Snaps APIs",description:"Learn about the Snaps APIs.",source:"@site/snaps/learn/about-snaps/apis.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/apis",permalink:"/746-snaps-env-vars/snaps/learn/about-snaps/apis",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about the Snaps APIs.",sidebar_position:1,sidebar_label:"Snaps APIs"},sidebar:"snapsSidebar",previous:{title:"About Snaps",permalink:"/746-snaps-env-vars/snaps/learn/about-snaps/"},next:{title:"Snaps files",permalink:"/746-snaps-env-vars/snaps/learn/about-snaps/files"}},o={},l=[{value:"Snaps API",id:"snaps-api",level:2},{value:"MetaMask JSON-RPC API",id:"metamask-json-rpc-api",level:2},{value:"Dapp requests",id:"dapp-requests",level:3},{value:"Snap requests",id:"snap-requests",level:3},{value:"Custom JSON-RPC APIs",id:"custom-json-rpc-apis",level:2}],m={toc:l},u="wrapper";function c(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"about-the-snaps-apis"},"About the Snaps APIs"),(0,s.kt)("p",null,"Snaps, dapps, and MetaMask can communicate with each other using the ",(0,s.kt)("a",{parentName:"p",href:"#snaps-api"},"Snaps API"),",\n",(0,s.kt)("a",{parentName:"p",href:"#metamask-json-rpc-api"},"MetaMask JSON-RPC API"),", and ",(0,s.kt)("a",{parentName:"p",href:"#custom-json-rpc-apis"},"custom JSON-RPC APIs"),"."),(0,s.kt)("h2",{id:"snaps-api"},"Snaps API"),(0,s.kt)("p",null,"Snaps can access the global object ",(0,s.kt)("inlineCode",{parentName:"p"},"snap"),", which has one method: ",(0,s.kt)("inlineCode",{parentName:"p"},"request"),".\nYou can use this object to make ",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/snaps-api"},"Snaps API")," requests.\nThese API methods allow Snaps to extend or modify the functionality of MetaMask."),(0,s.kt)("p",null,"To call each method, you must first ",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/how-to/request-permissions"},"request permission")," in the Snap\nmanifest file.\nFor example, to call ",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/snaps-api#snap_notify"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_notify")),", first request the\n",(0,s.kt)("inlineCode",{parentName:"p"},"snap_notify")," permission:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_notify": {}\n}\n')),(0,s.kt)("p",null,"Your Snap can then call ",(0,s.kt)("inlineCode",{parentName:"p"},"snap_notify")," in its source code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"await snap.request({\n  method: 'snap_notify',\n  params: {\n    type: 'inApp',\n    message: 'Hello, world!',\n  },\n});\n")),(0,s.kt)("h2",{id:"metamask-json-rpc-api"},"MetaMask JSON-RPC API"),(0,s.kt)("h3",{id:"dapp-requests"},"Dapp requests"),(0,s.kt)("p",null,"Dapps can install and communicate with Snaps using the following\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"MetaMask JSON-RPC API")," methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_getsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," - Gets the dapp's permitted Snaps."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps"))," - Requests permission to\ncommunicate with the specified Snaps."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_snap"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_snap"))," - (Restricted) Calls the specified custom JSON-RPC\nAPI method of the specified Snap."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_invokesnap"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," - (Restricted) Synonymous with ",(0,s.kt)("inlineCode",{parentName:"li"},"wallet_snap"),".")),(0,s.kt)("p",null,"A dapp must first request permission to communicate with a Snap using ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),".\nThe dapp can then call ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_snap")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_invokeSnap")," on the permitted Snap.\nFor example, to call ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_snap"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"// Request permission to connect to the Snap.\nawait window.ethereum.request({\n  method: 'wallet_requestSnaps',\n  params: {\n    'npm:hello-snap': {},\n  },\n});\n\n// Call the 'hello' method of the Snap using wallet_snap.\nconst response = await window.ethereum.request({\n  method: 'wallet_snap',\n  params: { snapId: 'npm:hello-snap', request: { method: 'hello' } },\n});\n\nconsole.log(response); // 'world!'\n")),(0,s.kt)("h3",{id:"snap-requests"},"Snap requests"),(0,s.kt)("p",null,"Snaps can also call some MetaMask JSON-RPC API methods using the ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," global, which is an\n",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193")," provider."),(0,s.kt)("p",null,"To expose ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," to the Snap execution environment, a Snap must first request the\n",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/permissions#endowmentethereum-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission.\nFor example, to call ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),", first request\nthe required permission:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n')),(0,s.kt)("p",null,"Your Snap can then call ",(0,s.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," in its source code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'await ethereum.request({\n  "method": "eth_requestAccounts"\n});\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ethereum")," global available to Snaps has fewer capabilities than ",(0,s.kt)("inlineCode",{parentName:"p"},"window.ethereum")," for dapps.\nSnaps can only use it to make read requests, not to write to the blockchain or initiate transactions.\nSnaps can call all MetaMask API methods ",(0,s.kt)("strong",{parentName:"p"},"except")," the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_requestSnaps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_requestPermissions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_revokePermissions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_watchAsset")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_registerOnboarding")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"wallet_scanQRCode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_sendRawTransaction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_sendTransaction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_decrypt")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_getEncryptionPublicKey"))),(0,s.kt)("h2",{id:"custom-json-rpc-apis"},"Custom JSON-RPC APIs"),(0,s.kt)("p",null,"Snaps can implement their own custom JSON-RPC APIs to communicate with dapps and other Snaps.\nTo do so, a Snap must expose the ",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/entry-points#onrpcrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"onRpcRequest"))," entry\npoint and request the ",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/permissions#endowmentrpc"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:rpc"))," permission."),(0,s.kt)("p",null,"The Snap's custom API is entirely up to you, as long as it's a valid\n",(0,s.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," API."),(0,s.kt)("admonition",{title:"Does my Snap need a custom API?",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If your Snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,s.kt)("a",{parentName:"p",href:"/746-snaps-env-vars/snaps/reference/entry-points#ontransaction"},"transaction insights"),", you do not need to\nimplement a custom API.\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your Snap, you must implement a custom API.")),(0,s.kt)("p",null,"For example, to create a simple Snap with a custom API, first request the ",(0,s.kt)("inlineCode",{parentName:"p"},"endowment:rpc")," permission:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true // Enable dapps to make JSON-RPC requests.\n  }\n}\n')),(0,s.kt)("p",null,"Your Snap can then implement and expose a custom API using the ",(0,s.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    // Expose a 'hello' JSON-RPC method to dapps.\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,s.kt)("p",null,"A dapp can then install the Snap and call the exposed method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// Request permission to connect to the Snap.\n// If the Snap is not already installed, the user will be prompted to install it.\nawait window.ethereum.request({\n  method: 'wallet_requestSnaps',\n  params: {\n    // Assuming the Snap is published to npm using the package name 'hello-snap'.\n    'npm:hello-snap': {},\n  },\n});\n\n// Invoke the 'hello' JSON-RPC method exposed by the Snap.\nconst response = await window.ethereum.request({\n  method: 'wallet_invokeSnap',\n  params: { snapId: 'npm:hello-snap', request: { method: 'hello' } },\n});\n\nconsole.log(response); // 'world!'\n")))}c.isMDXComponent=!0}}]);