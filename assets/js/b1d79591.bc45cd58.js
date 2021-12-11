"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71505],{75088:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"IOTA DIDComm Specification",sidebar_label:"Overview"},c=void 0,l={unversionedId:"specs/didcomm/overview",id:"specs/didcomm/overview",title:"IOTA DIDComm Specification",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/overview.md",sourceDirName:"specs/didcomm",slug:"/specs/didcomm/overview",permalink:"/identity.rs/specs/didcomm/overview",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/overview.md",tags:[],version:"current",frontMatter:{title:"IOTA DIDComm Specification",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Merkle Key Collection",permalink:"/identity.rs/specs/did/merkle_key_collection"},next:{title:"Connection",permalink:"/identity.rs/specs/didcomm/protocols/connection"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Conformance",id:"conformance",children:[],level:2},{value:"Versioning",id:"versioning",children:[],level:2},{value:"Protocols",id:"protocols",children:[],level:2},{value:"External Protocols",id:"external-protocols",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2},{value:"Diagrams",id:"diagrams",children:[],level:2},{value:"Changelog",id:"changelog",children:[],level:2},{value:"Future Work",id:"future-work",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The IOTA DIDComm Specification standardizes how Self-Sovereign Identities (SSIs) can interact with each other and exchange information. Any applications that implement this standard will naturally be interoperable with each other. This reduces fragmentation in the ecosystem and therefore it is highly recommended to use this for any application built on top of the IOTA Identity framework. The specification defines several ",(0,i.kt)("a",{parentName:"p",href:"#protocols"},"protocols"),", that can be used for common interactions like ",(0,i.kt)("a",{parentName:"p",href:"./protocols/issuance"},"issuing")," and ",(0,i.kt)("a",{parentName:"p",href:"./protocols/presentation"},"presenting")," verifiable credentials as well as supporting functions, such as ",(0,i.kt)("a",{parentName:"p",href:"./protocols/connection"},"connection")," establishment and ",(0,i.kt)("a",{parentName:"p",href:"/identity.rs/specs/didcomm/protocols/authentication"},"authentication"),". Cross-cutting concerns like ",(0,i.kt)("a",{parentName:"p",href:"/identity.rs/specs/didcomm/resources/problem-reports"},"error handling")," and ",(0,i.kt)("a",{parentName:"p",href:"/identity.rs/specs/didcomm/resources/credential-info"},"credential negotiation")," are discussed in the ",(0,i.kt)("a",{parentName:"p",href:"#resources"},"resources")," section."),(0,i.kt)("p",null,"The IOTA DIDComm Specification builds on the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm Messaging Specification")," developed by the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"Decentralized Identity Foundation (DIF)")," and utilises ",(0,i.kt)("a",{parentName:"p",href:"#external-protocols"},"external protocols")," from the messaging specification for well-established interactions like feature discovery."),(0,i.kt)("p",null,"This specification is meant to be a complete solution for common use cases and therefore contains protocols for common SSI interactions. It is possible to extend the specification with custom protocols and custom methods in existing protocols to support application-specific requirements. "),(0,i.kt)("p",null,"The specification itself is technology agnostic. Much like the ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm Messaging Specification")," there are no restrictions on transport layers and a concrete implementation can be done with many different technologies."),(0,i.kt)("h2",{id:"conformance"},"Conformance"),(0,i.kt)("p",null,'The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL\nNOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and\n"OPTIONAL" in this specification are to be interpreted as described in\n',(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/info/bcp14"},"BCP 14"),(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2119.txt"},"[RFC 2119]"),"."),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"Protocols follow ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0")," conventions."),(0,i.kt)("h2",{id:"protocols"},"Protocols"),(0,i.kt)("p",null,"The specification defines several ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#protocols"},"DIDComm protocols")," that can be used for common SSI interactions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/connection"},"Connection")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Establishes a ",(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#connections"},"DIDComm connection")," between two parties.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/authentication"},"Authentication")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows two parties to mutually authenticate, verifying the DID of each other.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/presentation"},"Presentation")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows presentation of verifiable credentials that are issued to a holder and uniquely presented to a third-party verifier.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/issuance"},"Issuance")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows the exchange of a verifiable credential between an issuer and a holder.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/signing"},"Signing")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows a trusted-party to request the signing of an unsigned verifiable credential by an issuer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/revocation"},"Revocation")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows to request revocation of an issued credential, either by the holder or a trusted-party.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/revocation-options"},"Revocation Options")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows discovery of available ",(0,i.kt)("a",{parentName:"td",href:"./protocols/revocation#RevocationInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"RevocationInfo"))," types for use with the ",(0,i.kt)("a",{parentName:"td",href:"./protocols/revocation"},"revocation")," protocol.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/post"},"Post")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allows the sending of a single message with arbitrary data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/protocols/termination"},"Termination")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Indicates the graceful termination of a connection.")))),(0,i.kt)("h2",{id:"external-protocols"},"External Protocols"),(0,i.kt)("p",null,"In addition to the protocols defined in this specification, we RECOMMEND implementors use the following well-known protocols:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/9039564e143380a0085a788b6dfd20e63873b9ca/docs/spec-files/feature_discovery.md"},"Discover Features")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Describes how agents can query one another to discover which features they support, and to what extent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/9039564e143380a0085a788b6dfd20e63873b9ca/docs/spec-files/trustping.md"},"Trust Ping")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A standard way for agents to test connectivity, responsiveness, and security of a DIDComm channel.")))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Additionally, general guidelines on concerns across protocols are provided:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/resources/problem-reports"},"Problem Reports")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Definitions of expected problem reports and guidance on global handling.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/identity.rs/specs/didcomm/resources/credential-info"},"Credential Info")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Definition of methods to negotiate a specific kind of verifiable credential.")))),(0,i.kt)("h2",{id:"diagrams"},"Diagrams"),(0,i.kt)("p",null,"The diagrams in this specification follow the ",(0,i.kt)("a",{parentName:"p",href:"https://www.omg.org/spec/BPMN/2.0/"},"BPMN 2.0")," notation. The diagrams are created with ",(0,i.kt)("a",{parentName:"p",href:"https://www.diagrams.net"},"https://www.diagrams.net"),", the source is embedded in the ",(0,i.kt)("inlineCode",{parentName:"p"},".svg")," files."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"./CHANGELOG"},"CHANGELOG"),"."),(0,i.kt)("h2",{id:"future-work"},"Future Work"),(0,i.kt)("p",null,"\u25c8 If necessary, discuss ways for some agent to request the start of an interaction. This has narrow use cases, but might be interesting in the long run.\n\u25c8 Add section or article on anonymous encryption, sender authenticated encryption, signed messages. Include a table of comparisons with guarantees? E.g. authentication, eavesdropping protection, integrity etc."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);