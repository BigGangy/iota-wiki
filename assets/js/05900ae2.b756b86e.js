"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93011],{59452:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(83117),s=r(80102),o=(r(67294),r(3905)),i=["components"],c={},a="Exposed Metrics",u={unversionedId:"metrics",id:"metrics",title:"Exposed Metrics",description:"You can see all exposed metrics on https://metrics.wasp.sc.iota.org.",source:"@site/external/wasp/documentation/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/smart-contracts/metrics",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/smart-contracts/contribute"}},l=[{value:"wasp_off_ledger_requests_counter",id:"wasp_off_ledger_requests_counter",children:[],level:3},{value:"wasp_on_ledger_request_counter",id:"wasp_on_ledger_request_counter",children:[],level:3},{value:"wasp_processed_request_counter",id:"wasp_processed_request_counter",children:[],level:3},{value:"messages_received_per_chain",id:"messages_received_per_chain",children:[],level:3},{value:"receive_requests_acknowledgement_message",id:"receive_requests_acknowledgement_message",children:[],level:3},{value:"request_processing_time",id:"request_processing_time",children:[],level:3},{value:"vm_run_time",id:"vm_run_time",children:[],level:3}],p={toc:l};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exposed-metrics"},"Exposed Metrics"),(0,o.kt)("p",null,"You can see all exposed metrics on ",(0,o.kt)("a",{parentName:"p",href:"https://metrics.wasp.sc.iota.org"},"https://metrics.wasp.sc.iota.org"),"."),(0,o.kt)("h3",{id:"wasp_off_ledger_requests_counter"},"wasp_off_ledger_requests_counter"),(0,o.kt)("p",null,"Off ledger requests per chain"),(0,o.kt)("h3",{id:"wasp_on_ledger_request_counter"},"wasp_on_ledger_request_counter"),(0,o.kt)("p",null,"On ledger requests per chain"),(0,o.kt)("h3",{id:"wasp_processed_request_counter"},"wasp_processed_request_counter"),(0,o.kt)("p",null,"Total number of requests processed"),(0,o.kt)("h3",{id:"messages_received_per_chain"},"messages_received_per_chain"),(0,o.kt)("p",null,"Number of messages received per chain"),(0,o.kt)("h3",{id:"receive_requests_acknowledgement_message"},"receive_requests_acknowledgement_message"),(0,o.kt)("p",null,"Number of request acknowledgement messages per chain"),(0,o.kt)("h3",{id:"request_processing_time"},"request_processing_time"),(0,o.kt)("p",null,"Time to process request"),(0,o.kt)("h3",{id:"vm_run_time"},"vm_run_time"),(0,o.kt)("p",null,"Time it takes to run the vm"))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,_=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(_,i(i({ref:t},l),{},{components:r})):n.createElement(_,i({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);