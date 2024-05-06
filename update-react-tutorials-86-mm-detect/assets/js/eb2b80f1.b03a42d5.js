"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4933],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(58168),n=(a(96540),a(15680));const i={sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},o="About the Wallet API",s={unversionedId:"concepts/wallet-api",id:"concepts/wallet-api",title:"About the Wallet API",description:"Learn about the MetaMask Ethereum provider API.",source:"@site/wallet/concepts/wallet-api.md",sourceDirName:"concepts",slug:"/concepts/wallet-api",permalink:"/update-react-tutorials-86-mm-detect/wallet/concepts/wallet-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/update-react-tutorials-86-mm-detect/wallet/concepts/architecture"},next:{title:"About MetaMask SDK",permalink:"/update-react-tutorials-86-mm-detect/wallet/concepts/sdk/"}},p={},l=[{value:"Ethereum provider API",id:"ethereum-provider-api",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Restricted methods",id:"restricted-methods",level:3},{value:"Unrestricted methods",id:"unrestricted-methods",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"about-the-wallet-api"},"About the Wallet API"),(0,n.yg)("p",null,"MetaMask's Wallet API consists of an ",(0,n.yg)("a",{parentName:"p",href:"#ethereum-provider-api"},"Ethereum provider API"),", which wraps\na ",(0,n.yg)("a",{parentName:"p",href:"#json-rpc-api"},"JSON-RPC API"),"."),(0,n.yg)("admonition",{title:"API documentation",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The API methods are documented in the following references:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api"},"Ethereum provider API reference")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference")))),(0,n.yg)("h2",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,n.yg)("p",null,"MetaMask injects a global JavaScript API into websites visited by its users using the\n",(0,n.yg)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nThis API is specified by ",(0,n.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", and it allows dapps to\nrequest users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more."),(0,n.yg)("admonition",{title:"Note",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"MetaMask supports ",(0,n.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative wallet detection mechanism to the ",(0,n.yg)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,n.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/concepts/wallet-interoperability"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,n.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/how-to/connect/"},"using this mechanism to connect to MetaMask"),"."),(0,n.yg)("p",{parentName:"admonition"},"You can access the provider API using the selected EIP-6963 provider object.\nThroughout this documentation, we refer to the selected provider using ",(0,n.yg)("inlineCode",{parentName:"p"},"provider"),".")),(0,n.yg)("p",null,"The MetaMask Ethereum provider API contains the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api#properties"},"Properties")," - The provider contains a property that\ndetects if a user has MetaMask installed."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api#methods"},"Methods")," - The provider contains methods that dapps can call.\nThe ",(0,n.yg)("a",{parentName:"li",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api#request"},(0,n.yg)("inlineCode",{parentName:"a"},"request()")),"\nprovider method wraps the ",(0,n.yg)("a",{parentName:"li",href:"#json-rpc-api"},"JSON-RPC API"),"; dapps can use this\nprovider method to call any RPC method."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api#events"},"Events")," - The provider emits events that dapps can listen to.")),(0,n.yg)("p",null,"View the ",(0,n.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api"},"provider API reference")," for all the provider properties,\nmethods, and events."),(0,n.yg)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,n.yg)("p",null,"MetaMask uses the ",(0,n.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api#request"},(0,n.yg)("inlineCode",{parentName:"a"},"request()")),"\nmethod of the ",(0,n.yg)("a",{parentName:"p",href:"#ethereum-provider-api"},"provider API")," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,n.yg)("p",null,"The RPC methods are documented in the interactive ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference"),"."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,n.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/reference/provider-api#request"},(0,n.yg)("inlineCode",{parentName:"a"},"request()")),".")),(0,n.yg)("p",null,"The RPC methods are divided into the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#restricted-methods"},"Restricted methods")," -  Require user consent for actions that impact assets or data (for example, initiating a transaction)."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#unrestricted-methods"},"Unrestricted methods")," - Allow dapps to perform basic actions without permission (for example, retrieving a public address).")),(0,n.yg)("h3",{id:"restricted-methods"},"Restricted methods"),(0,n.yg)("p",null,"MetaMask implements permissions based on ",(0,n.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255")," to enhance security for when users interact with dapps.\nThis requires that dapps obtain user consent before accessing certain features.\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,n.yg)("p",null,"Restricted methods are methods that cannot be called unless you have permission to do so using\n",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_requestpermissions"},(0,n.yg)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," or\n",(0,n.yg)("a",{parentName:"p",href:"/snaps/reference/wallet-api-for-snaps/#wallet_requestsnaps"},(0,n.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"."),(0,n.yg)("p",null,"The following methods are restricted:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_accounts"))," - Gaining permission requires calling ",(0,n.yg)("inlineCode",{parentName:"p"},"wallet_requestPermissions"),".\nGranting permission for ",(0,n.yg)("inlineCode",{parentName:"p"},"eth_accounts")," also grants permissions for the following methods:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_sendTransaction")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,n.yg)("inlineCode",{parentName:"a"},"personal_sign")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_signTypedData_v4"))))),(0,n.yg)("admonition",{parentName:"li",title:"important",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"To access accounts, we recommend using ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts")),",\nwhich automatically asks for permission to use ",(0,n.yg)("inlineCode",{parentName:"p"},"eth_accounts")," by calling ",(0,n.yg)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," internally.\nSee ",(0,n.yg)("a",{parentName:"p",href:"/update-react-tutorials-86-mm-detect/wallet/how-to/connect/access-accounts"},"how to access a user's accounts")," for more information."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/snaps/reference/wallet-api-for-snaps/#wallet_snap"},(0,n.yg)("inlineCode",{parentName:"a"},"wallet_snap"))," - Gaining permission requires\ncalling ",(0,n.yg)("inlineCode",{parentName:"p"},"wallet_requestSnap"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/snaps/reference/wallet-api-for-snaps/#wallet_invokesnap"},(0,n.yg)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," - Gaining\npermission requires calling ",(0,n.yg)("inlineCode",{parentName:"p"},"wallet_requestSnap"),"."))),(0,n.yg)("h3",{id:"unrestricted-methods"},"Unrestricted methods"),(0,n.yg)("p",null,"Unrestricted methods do not require requesting permission to call them, but they might require confirmation by the\nuser (for example, ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,n.yg)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."))}d.isMDXComponent=!0}}]);