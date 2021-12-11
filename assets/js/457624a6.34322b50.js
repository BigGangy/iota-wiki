"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17127],{74233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={description:"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","value transactions"]},l="Overview",c={unversionedId:"overview",id:"overview",title:"Overview",description:"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.",source:"@site/external/iota.rs/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/iota.rs/overview",editUrl:"https://github.com/iotaledger/iota.rs/edit/dev/external/iota.rs/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"The wallet library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions.",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","value transactions"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/iota.rs/welcome"},next:{title:"Getting Started",permalink:"/iota.rs/getting_started"}},u=[{value:"Supported Languages",id:"supported-languages",children:[],level:2},{value:"Your Application In the IOTA Network",id:"your-application-in-the-iota-network",children:[],level:2},{value:"API Design",id:"api-design",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"To communicate with the IOTA network, you have to connect and interact with a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/node_software"},"node"),", the task that the iota.rs library is designed to simplify. It will generate addresses for you, send messages, sign and send transactions, and more."),(0,o.kt)("p",null,"Beyond establishing the initial connection to a node, iota.rs has no state. Operations use only the data that you pass during a call and have no effect on your software beyond returning a value. You are in full control of the data flow in your application."),(0,o.kt)("p",null,"This stateless approach makes iota.rs easier for you to use and understand. But since you are in full control of the data management, you also fully responsible for it, which could feel overwhelming if you have to handle complex or sensitive data. If you plan on managing funds in your application, take a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs")," library instead. It allows you to safely manage your user's funds, and it already includes our best security practices. It uses ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},"stronghold.rs")," to store sensitive data and iota.rs to communicate with the IOTA network. Unlike iota.rs, it has a state."),(0,o.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,o.kt)("p",null,"We have implemented the iota.rs library in Rust and prepared bindings for JavaScript, Python, Java, and Wasm, each carefully tailored as we adjust every binding for the language's conventions and best practices. For example, Python developers avoid the Builder programming pattern, so our Python binding uses named constructor arguments instead. We never change the meaning behind our API, however. The API stays equally powerful no matter the language you choose. "),(0,o.kt)("h2",{id:"your-application-in-the-iota-network"},"Your Application In the IOTA Network"),(0,o.kt)("p",null,"Your application communicates with iota.rs either directly in Rust or through one of the language bindings. The iota.rs library turns your requests into REST API calls and sends them to a node through the Internet. The node, in turn, interacts with the rest of an IOTA network, which could be the main operational network (mainnet) or a network for testing purposes (devnet)."),(0,o.kt)("p",null,"Different nodes could run on a different software, but they always expose the same interface to clients. For example, one node could be a ",(0,o.kt)("a",{parentName:"p",href:"https://hornet.docs.iota.org/"},"Hornet")," node and the other could be a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/bee/welcome"},"Bee")," node, and they both would appear the same for any client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A diagram that illustrates the text above. It has three layers: the application layer that includes iota.rs and its bindings, communication layer (the Internet network), and IOTA network layer with nodes that operate on one of the IOTA networks.",src:n(66228).Z,title:"An overview of IOTA layers."})),(0,o.kt)("h2",{id:"api-design"},"API Design"),(0,o.kt)("p",null,"The iota.rs library exposes operations of two types. Clients interact with nodes by calling their REST API, and the first group of operations mirrors the available calls. When your program invokes such an operation, it directly translates it into a REST call to a node. For a full list, see the ",(0,o.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"node's REST API reference"),". "),(0,o.kt)("p",null,"Operations from the first group tend to be too atomic and basic to use them in a convenient way. The second group provides you with higher-level helper functions. These functions represent an actual task and combine multiple basic operations internally. For example, you can get your token balance by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"getBalance"),". It first calls ",(0,o.kt)("inlineCode",{parentName:"p"},"getAddresses"),", then it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"getAddressBalances")," for each address, and adds the results together to return the total balance. See the ",(0,o.kt)("a",{parentName:"p",href:"./specs"},"full specification")," for details."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66228:function(e,t,n){t.Z=n.p+"assets/images/layered_overview-301744b3b835f4f09ae40dfa09ac564f.svg"}}]);