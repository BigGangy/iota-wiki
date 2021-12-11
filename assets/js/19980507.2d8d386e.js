"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[7227],{11084:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],s={description:"How to switch from IOTA hub using wallet.rs, or its bindings.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet.rs","IOTA Hub","iota.rs","migration"]},l="IOTA Hub Migration Guide",c={unversionedId:"guides/hub_migration",id:"guides/hub_migration",title:"IOTA Hub Migration Guide",description:"How to switch from IOTA hub using wallet.rs, or its bindings.",source:"@site/external/chrysalis-docs/docs/guides/hub_migration.md",sourceDirName:"guides",slug:"/guides/hub_migration",permalink:"/chrysalis-docs/guides/hub_migration",editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/main/external/chrysalis-docs/docs/guides/hub_migration.md",tags:[],version:"current",frontMatter:{description:"How to switch from IOTA hub using wallet.rs, or its bindings.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["wallet.rs","IOTA Hub","iota.rs","migration"]},sidebar:"mySidebar",previous:{title:"How the IOTA Chrysalis Phase 2 Token Migration Works",permalink:"/chrysalis-docs/guides/migration_mechanism"},next:{title:"Backup and Security",permalink:"/chrysalis-docs/guides/backup_security"}},u=[],d={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-hub-migration-guide"},"IOTA Hub Migration Guide"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide outlines how to switch from IOTA Hub to using ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"Wallet.rs")," or its ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/libraries/overview"},"bindings")," instead."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before you start a migration from IOTA Hub get in contact with us so we can assist you in this process. "),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Contact details:")),(0,i.kt)("p",{parentName:"div"},"Dave de Fijter"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Email"),": ",(0,i.kt)("a",{parentName:"p",href:"mailto:dave.defijter@iota.org"},"dave.defijter@iota.org")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},(0,i.kt)("strong",{parentName:"a"},"Discord")),": Dave ","[IF]","#3333"))),(0,i.kt)("p",null,"Because of the unique features of IOTA 1.0, it was difficult to manage IOTA transactions with just a library. With the Chrysalis update, we have updated to be more accommodating to industry-wide standards and developers. "),(0,i.kt)("p",null,"IOTA Hub was deprecated with the Chrysalis upgrade and will not work with the new protocol changes. If you somehow still use Hub, we recommend that you to switch our new wallet library ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/welcome"},"Iota.rs"),", or its ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/libraries/overview"},"bindings"),", where you can easily manage IOTA addresses, deposits, and withdrawals for user accounts."),(0,i.kt)("p",null,"To upgrade from Hub to a Chrysalis implementation you will need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integrate the Chrysalis network using ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/welcome"},"Wallet.rs")," as mentioned in the ",(0,i.kt)("a",{parentName:"li",href:"/chrysalis-docs/guides/exchange"},"Exchange section"),"."),(0,i.kt)("li",{parentName:"ul"},"Pause withdrawals/deposits."),(0,i.kt)("li",{parentName:"ul"},"Make sure all balances have been swept and all deposits have been processed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/chrysalis-docs/guides/token_migration"},"Transfer all IOTA to a generated migration address"),"."),(0,i.kt)("li",{parentName:"ul"},"Once migrated, transfer the IOTA coins to your host wallet account on your wallet.rs implementation.")))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);