"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3439],{36273:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return g}});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],c={keywords:["Smart Contracts","Chain","Management","Grafana"],description:"How to manage a chain using the Grafana dashboard, a client to receive published events, logging and validators.",image:"/img/logo/WASP_logo_dark.png"},s="Chain Management",d={unversionedId:"guide/chains_and_nodes/chain-management",id:"guide/chains_and_nodes/chain-management",title:"Chain Management",description:"How to manage a chain using the Grafana dashboard, a client to receive published events, logging and validators.",source:"@site/external/wasp/documentation/docs/guide/chains_and_nodes/chain-management.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/chain-management",permalink:"/smart-contracts/guide/chains_and_nodes/chain-management",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/chains_and_nodes/chain-management.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Chain","Management","Grafana"],description:"How to manage a chain using the Grafana dashboard, a client to receive published events, logging and validators.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Chain",permalink:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain"},next:{title:"Testnet",permalink:"/smart-contracts/guide/chains_and_nodes/testnet"}},u=[{value:"Monitoring",id:"monitoring",children:[],level:2},{value:"Managing Chain Configuration and Validators",id:"managing-chain-configuration-and-validators",children:[],level:2}],l={toc:u};function g(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chain-management"},"Chain Management"),(0,i.kt)("h2",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"Each Wasp node provides a ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/running-a-node###grafana"},"Grafana dashboard")," where you can visualize metrics gathered by the node."),(0,i.kt)("p",null,"You can view the chain state using the ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/running-a-node###Dashboard"},"dashboard")," (by default on port ",(0,i.kt)("inlineCode",{parentName:"p"},":7000"),")."),(0,i.kt)("p",null,"You can also set up a client to receive ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/running-a-node###Publisher"},"published events")," to have insights on what's happening in the system."),(0,i.kt)("p",null,"Lastly, each Wasp node will produce a log file (",(0,i.kt)("inlineCode",{parentName:"p"},"wasp.log"),") where the behaviour of a node can be investigated."),(0,i.kt)("h2",{id:"managing-chain-configuration-and-validators"},"Managing Chain Configuration and Validators"),(0,i.kt)("p",null,"You can manage the chain configuration and committee of validators by interacting with the ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/governance"},"Governance contract"),"."))}g.isMDXComponent=!0},3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return p}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=d(a),p=r,h=g["".concat(s,".").concat(p)]||g[p]||l[p]||i;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);