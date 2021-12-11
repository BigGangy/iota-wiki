"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33910],{23948:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"About Nodes",description:"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle."},l="About Nodes",c={unversionedId:"support-the-network/about-nodes",id:"support-the-network/about-nodes",title:"About Nodes",description:"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle.",source:"@site/internal/participate/support-the-network/about-nodes.md",sourceDirName:"support-the-network",slug:"/support-the-network/about-nodes",permalink:"/participate/support-the-network/about-nodes",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/participate/support-the-network/about-nodes.md",tags:[],version:"current",lastUpdatedAt:1634137574,formattedLastUpdatedAt:"10/13/2021",frontMatter:{title:"About Nodes",description:"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle."},sidebar:"participate",next:{title:"Become a node operator",permalink:"/participate/support-the-network/become-a-node-operator"}},h=[{value:"Attaching new transactions to the Tangle",id:"attaching-new-transactions-to-the-tangle",children:[],level:2},{value:"Synchronizing with the rest of the network",id:"synchronizing-with-the-rest-of-the-network",children:[],level:2},{value:"Deciding which transactions are confirmed",id:"deciding-which-transactions-are-confirmed",children:[],level:2},{value:"Keeping a record of the balances on addresses",id:"keeping-a-record-of-the-balances-on-addresses",children:[],level:2},{value:"Exposing APIs for clients",id:"exposing-apis-for-clients",children:[{value:"HTTP API",id:"http-api",children:[],level:3},{value:"Events API",id:"events-api",children:[],level:3}],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-nodes"},"About Nodes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle. This section covers what nodes do in an IOTA network.")),(0,a.kt)("p",null,"Nodes are responsible for the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Attaching new transactions to the Tangle"),(0,a.kt)("li",{parentName:"ul"},"Synchronizing with the rest of the network"),(0,a.kt)("li",{parentName:"ul"},"Deciding which transactions are confirmed"),(0,a.kt)("li",{parentName:"ul"},"Keeping a record of the balances on addresses"),(0,a.kt)("li",{parentName:"ul"},"Exposing APIs for clients")),(0,a.kt)("h2",{id:"attaching-new-transactions-to-the-tangle"},"Attaching new transactions to the Tangle"),(0,a.kt)("p",null,"When nodes receive a new transaction, they attach it to the Tangle by adding it to their local database."),(0,a.kt)("p",null,"As a result, at any point in time, all nodes may have different transactions in their local databases. These transactions make up a node's view of the Tangle."),(0,a.kt)("p",null,"To distribute the transactions across the rest of the network, nodes synchronize their local databases with their neighbors."),(0,a.kt)("h2",{id:"synchronizing-with-the-rest-of-the-network"},"Synchronizing with the rest of the network"),(0,a.kt)("p",null,"Like any distributed system, nodes in an IOTA network synchronize their databases with others called neighbors to form a single source of truth."),(0,a.kt)("p",null,"When one node, no matter where it is in the world, receives a transaction, it will try to gossip it to all its neighbors. This way, all nodes eventually see all transactions and store them in their local databases."),(0,a.kt)("p",null,"To synchronize, nodes in IOTA networks use milestones.\nIf the node has the history of transactions that a milestone references, that milestone is solid."),(0,a.kt)("p",null,"Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received."),(0,a.kt)("p",null,"When a node is synchronized, it then has enough information to decide which transactions it considers confirmed."),(0,a.kt)("h2",{id:"deciding-which-transactions-are-confirmed"},"Deciding which transactions are confirmed"),(0,a.kt)("p",null,"All transactions remain in a pending state until the node is sure of its validity. For a definition of a valid transaction, see ",(0,a.kt)("strong",{parentName:"p"},"Value Transfer"),"."),(0,a.kt)("p",null,"However, even when a transaction is valid, nodes may not be able to make a decision like in the case of a double spend."),(0,a.kt)("p",null,"When nodes detect double spends, they must decide which transaction to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software. See ",(0,a.kt)("strong",{parentName:"p"},"The Coordinator")," for information about the consensus rules in IOTA networks."),(0,a.kt)("h2",{id:"keeping-a-record-of-the-balances-on-addresses"},"Keeping a record of the balances on addresses"),(0,a.kt)("p",null,"All nodes keep a record of the balances of addresses, so they can do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check that a transaction is not transferring more IOTA tokens than are available on the address"),(0,a.kt)("li",{parentName:"ul"},"Respond to clients' requests for their balance"),(0,a.kt)("li",{parentName:"ul"},"Only when a transaction is confirmed, can nodes update their record of balances.")),(0,a.kt)("h2",{id:"exposing-apis-for-clients"},"Exposing APIs for clients"),(0,a.kt)("p",null,"Nodes come with two APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP API"),(0,a.kt)("li",{parentName:"ul"},"Events API")),(0,a.kt)("h3",{id:"http-api"},"HTTP API"),(0,a.kt)("p",null,"The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get tip transactions"),(0,a.kt)("li",{parentName:"ul"},"Attach new transactions to the Tangle"),(0,a.kt)("li",{parentName:"ul"},"Do proof of work"),(0,a.kt)("li",{parentName:"ul"},"Get transactions from the Tangle")),(0,a.kt)("h3",{id:"events-api"},"Events API"),(0,a.kt)("p",null,"The Events API allows clients to poll nodes for new transactions and other events that happen on nodes."),(0,a.kt)("p",null,"This API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?o.createElement(f,i(i({ref:t},h),{},{components:n})):o.createElement(f,i({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);