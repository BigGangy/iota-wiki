"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[52967],{87039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={description:"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","crate","vault","records","GuardedVec","DbView"]},c="Structure: Engine::Vault",s={unversionedId:"structure/engine/vault",id:"structure/engine/vault",title:"Structure: Engine::Vault",description:"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.",source:"@site/external/stronghold.rs/documentation/docs/structure/engine/vault.md",sourceDirName:"structure/engine",slug:"/structure/engine/vault",permalink:"/stronghold.rs/structure/engine/vault",editUrl:"https://github.com/iotaledger/stronghold.rs/edit/dev/external/stronghold.rs/documentation/docs/structure/engine/vault.md",tags:[],version:"current",frontMatter:{description:"Vault is an implementation of a secure database for secrets, each database view is a vault which is a collection of records which are all encrypted using the same key.A collection of vaults is called a Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","crate","vault","records","GuardedVec","DbView"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Snapshot",permalink:"/stronghold.rs/structure/engine/snapshot"},next:{title:"Structure: Engine::Store",permalink:"/stronghold.rs/structure/engine/store"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-enginevault"},"Structure: Engine::Vault"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/vault"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold_engine/engine/latest/vault/index.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null})))))),(0,o.kt)("p",null,(0,o.kt)("h2",{parentName:"p"},"Stronghold Vault"),(0,o.kt)("p",{parentName:"p"},"Vault is an implementation of a secure database for secrets. From an abstract point of view, each database view is a vault which is a collection of records which are all encrypted using the same key.  And a collection of vaults is called a Stronghold. "),(0,o.kt)("p",{parentName:"p"},"The vault module defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vault")," type. Each of these vaults is composed of ",(0,o.kt)("inlineCode",{parentName:"p"},"Records"),". Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," is split into multiple pieces: an id, a data transaction, an optional revocation transaction and the blob of encrypted data. Internally, the data uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"GuardedVec")," type from the runtime module to guard the data for when it is accessed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbView")," interface. On the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbView")," interface there are methods for writing data, updating data and deleting data. To delete a record from a vault, a revocation transaction must be added to a record which marks it for garbage collection via the ",(0,o.kt)("inlineCode",{parentName:"p"},"revoke_record")," method. The records may then be garbage collected using the ",(0,o.kt)("inlineCode",{parentName:"p"},"garbage_collect_vault")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," method can be used to both write to a new record or update existing records. "),(0,o.kt)("p",{parentName:"p"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get_guard")," method allows the user to insert a closure which accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},"GuardedVec")," and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"engine::Result<()>"),".  Through this closure, the user can interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"GuardedVec")," to manipulate the data. The ",(0,o.kt)("inlineCode",{parentName:"p"},"exec_proc")," method is a version of ",(0,o.kt)("inlineCode",{parentName:"p"},"get_guard")," that accepts two vault locations, vault keys and also a closure of type ",(0,o.kt)("inlineCode",{parentName:"p"},"FnOnce(GuardedVec<u8>) -> crate::Result<Vec<u8>>"),". This method places the result of the closure into the newly specified ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," in the vault. ")))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);