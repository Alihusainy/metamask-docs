"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1891],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),g=r,d=u["".concat(i,".").concat(g)]||u[g]||y[g]||o;return a?n.createElement(d,c(c({ref:t},p),{},{components:a})):n.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),r=(a(96540),a(15680));const o={sidebar_position:3,sidebar_label:"Interact with smart contracts",description:"Interact with smart contracts in your Unity game.",tags:["Unity SDK"]},c="Interact with smart contracts in Unity",s={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/index",id:"how-to/use-sdk/gaming/unity/smart-contracts/index",title:"Interact with smart contracts in Unity",description:"Interact with smart contracts in your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/index.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/",permalink:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/index.md",tags:[{label:"Unity SDK",permalink:"/1264-snaps-network-access/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Interact with smart contracts",description:"Interact with smart contracts in your Unity game.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Set up Infura",permalink:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/infura"},next:{title:"Contract interface",permalink:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Generate contract code",id:"generate-contract-code",level:2},{value:"Use the contract",id:"use-the-contract",level:2},{value:"Use contract templates",id:"use-contract-templates",level:3},{value:"Advanced topics",id:"advanced-topics",level:2}],p={toc:l},u="wrapper";function y(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"interact-with-smart-contracts-in-unity"},"Interact with smart contracts in Unity"),(0,r.yg)("p",null,"You can interact with smart contracts from your Unity game with MetaMask SDK installed."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/"},"MetaMask SDK set up")," in your Unity game"),(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("a",{parentName:"li",href:"/1264-snaps-network-access/wallet/concepts/smart-contracts#contract-abi"},"contract ABI")," JSON file or\n",(0,r.yg)("a",{parentName:"li",href:"https://hardhat.org/hardhat-runner/docs/advanced/artifacts#compilation-artifacts"},"Hardhat artifact"),"\nJSON file")),(0,r.yg)("h2",{id:"generate-contract-code"},"Generate contract code"),(0,r.yg)("p",null,"You can use the MetaMask Unity contract code generator to generate\n",(0,r.yg)("a",{parentName:"p",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},"contract interface")," files.\nThe code generator automatically generates backed types for all contract interfaces to be used by\nthe ",(0,r.yg)("a",{parentName:"p",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory"},"contract factory"),"."),(0,r.yg)("p",null,"In your Unity editor, go to ",(0,r.yg)("strong",{parentName:"p"},"Tools > MetaMask > Contract ABI Converter"),".\nA new dialog box opens:"),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"dialog",src:a(45113).A,width:"440",height:"612"}))),(0,r.yg)("p",null,"Paste your contract ABI JSON file or Hardhat artifact JSON file.\nIf you plan to deploy your contract, you must provide a Hardhat artifact, since this\nhas the required ",(0,r.yg)("a",{parentName:"p",href:"/1264-snaps-network-access/wallet/concepts/smart-contracts#contract-bytecode"},"contract bytecode")," needed for deployment."),(0,r.yg)("p",null,"You can also specify the ",(0,r.yg)("inlineCode",{parentName:"p"},"Root Namespace")," for the generated contract code, with the default value being ",(0,r.yg)("inlineCode",{parentName:"p"},"Contracts"),". Ensure that you include ",(0,r.yg)("inlineCode",{parentName:"p"},"using Contracts"),"; at the beginning of your scripts before using the generated code."),(0,r.yg)("p",null,"Select ",(0,r.yg)("strong",{parentName:"p"},"Convert"),", which opens a save dialog box. Then, select a folder to save the generated code files to, somewhere inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"Assets")," folder."),(0,r.yg)("h2",{id:"use-the-contract"},"Use the contract"),(0,r.yg)("p",null,"After generating the contract code, you can use the contract using the\n",(0,r.yg)("inlineCode",{parentName:"p"},"Contract.Attach<T>(...)")," function."),(0,r.yg)("p",null,"This function takes a type ",(0,r.yg)("inlineCode",{parentName:"p"},"T")," which must be the interface type of the contract to use.\nThis function returns that type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),"."),(0,r.yg)("p",null,"You must provide the ",(0,r.yg)("inlineCode",{parentName:"p"},"address")," string the contract should be loaded from, and the\n",(0,r.yg)("a",{parentName:"p",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"provider")," to use to interact with the contract.\nUsually, the provider is ",(0,r.yg)("inlineCode",{parentName:"p"},"MetaMaskUnity.Instance.Wallet"),"."),(0,r.yg)("p",null,"The following is an example of using a contract:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public async void Start()\n{\n  var metaMask = MetaMaskUnity.Instance.Wallet;\n  var address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";\n  \n  ERC20 usdc = Contract.Attach<ERC20>(address, metaMask);\n}\n')),(0,r.yg)("p",null,"Once you have an instance of your contract interface of type ",(0,r.yg)("inlineCode",{parentName:"p"},"T")," (in this example, ",(0,r.yg)("inlineCode",{parentName:"p"},"ERC20"),"), you may\ninvoke any function inside the interface type.\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"public async void Start()\n{\n  // Setup...\n\n  var balance = await usdc.BalanceOf(metaMask.SelectedAddress);\n  Debug.Log(balance);\n}\n")),(0,r.yg)("h3",{id:"use-contract-templates"},"Use contract templates"),(0,r.yg)("p",null,"The MetaMask Unity SDK offers several contract templates that you can create and manage inside the\nUnity editor.\nThese templates are scriptable objects, so you can configure them once inside the editor and use\nthem throughout your scripts.\nThese templates automatically perform the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract.Attach")," function for you and automatically\nswitch contract addresses when the network changes."),(0,r.yg)("p",null,"You can create a new template by going to ",(0,r.yg)("strong",{parentName:"p"},"Assets > Create > MetaMask > Contract Templates")," and\nselecting one of the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ERC20")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ERC721")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ERC1155"))),(0,r.yg)("p",null,"Before using the contract template, configure the contract address to use for each chain:"),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"empty template",src:a(77636).A,width:"433",height:"218"}))),(0,r.yg)("p",null,"Select ",(0,r.yg)("strong",{parentName:"p"},"+")," to add a new address/chain pair.\nWhen adding a new address, if you don't see your desired blockchain listed, you can modify the\n",(0,r.yg)("inlineCode",{parentName:"p"},"ScriptableContract.ChainId")," enum to include your chain and chain ID."),(0,r.yg)("p",{align:"center"},(0,r.yg)("p",null,(0,r.yg)("img",{alt:"full template",src:a(39991).A,width:"435",height:"342"}))),(0,r.yg)("p",null,"Once configured, you can use this scriptable object as a variable inside your scripts.\nThe contract template has the same interface and usage as if you used ",(0,r.yg)("inlineCode",{parentName:"p"},"Contract.Attach"),", but the\nsetup and network switching is done for you."),(0,r.yg)("h2",{id:"advanced-topics"},"Advanced topics"),(0,r.yg)("p",null,"To learn more about and customize your contract interactions using the Unity SDK, see the following topics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},"Contract interface")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory"},"Contract factory")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"},"Contract proxy class")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/1264-snaps-network-access/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"Contract provider"))))}y.isMDXComponent=!0},45113:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/contract-abi-converter-dialog-56376f7101d15948e9e7f7687f904d75.png"},77636:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/unity-empty-template-a5d151ef642b84b3d7618e5099b9dda2.png"},39991:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/unity-example-template-3e25ec341358849753f8f3462bb88b76.png"}}]);