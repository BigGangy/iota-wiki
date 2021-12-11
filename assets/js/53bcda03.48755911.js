"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51851],{73959:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],c={description:"How to run a Wasp node in using Docker. Build the image, configure it, run it.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Running a node","docker","image","build","configure","arguments"]},d="Docker (Standalone)",u={unversionedId:"guide/chains_and_nodes/docker_standalone",id:"guide/chains_and_nodes/docker_standalone",title:"Docker (Standalone)",description:"How to run a Wasp node in using Docker. Build the image, configure it, run it.",source:"@site/external/wasp/documentation/docs/guide/chains_and_nodes/docker_standalone.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/docker_standalone",permalink:"/smart-contracts/guide/chains_and_nodes/docker_standalone",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/chains_and_nodes/docker_standalone.md",tags:[],version:"current",frontMatter:{description:"How to run a Wasp node in using Docker. Build the image, configure it, run it.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Running a node","docker","image","build","configure","arguments"]},sidebar:"tutorialSidebar",previous:{title:"Running a Node",permalink:"/smart-contracts/guide/chains_and_nodes/running-a-node"},next:{title:"Configuring wasp-cli",permalink:"/smart-contracts/guide/chains_and_nodes/wasp-cli"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Running a Wasp Node",id:"running-a-wasp-node",children:[{value:"Configuration",id:"configuration",children:[],level:3}],level:2}],l={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-standalone"},"Docker (Standalone)"),(0,a.kt)("p",null,"This page describes the configuration of a single Wasp node in combination with Docker. If you followed the instructions in ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/running-a-node"},"Running a Node"),", you can skip to ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/wasp-cli"},"Configuring wasp-cli"),"."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"running-a-wasp-node"},"Running a Wasp Node"),(0,a.kt)("p",null,"Checkout the project, switch to 'develop' and build the main image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone -b develop https://github.com/iotaledger/wasp.git\ncd wasp\ndocker build -t wasp-node .\n")),(0,a.kt)("p",null,"The build process will copy the docker_config.json file into the image, which will be used when the node gets started. "),(0,a.kt)("p",null,"By default, the build process will use ",(0,a.kt)("inlineCode",{parentName:"p"},"-tags rocksdb,builtin_static")," as a build argument. This argument can be modified with ",(0,a.kt)("inlineCode",{parentName:"p"},"--build-arg BUILD_TAGS=<tags>"),"."),(0,a.kt)("p",null,"Depending on the use case, Wasp requires a different GoShimmer hostname which can be changed at this part inside the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/docker_config.json"},"docker_config.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "nodeconn": {\n    "address": "goshimmer:5000"\n  },\n')),(0,a.kt)("p",null,"After the build process has finished, you can start your Wasp node by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run wasp-node\n")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"After the build process has been completed, it is still possible to inject a different configuration file into a new container by running: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v $(pwd)/alternative_docker_config.json:/etc/wasp_config.json wasp-node\n")),(0,a.kt)("p",null,"You can also add further configuration using arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run wasp-node --nodeconn.address=alt_goshimmer:5000 \n")),(0,a.kt)("p",null,"To get a list of all available arguments, run the node with the argument '--help'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run wasp-node --help\n")))}p.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,f=p["".concat(d,".").concat(g)]||p[g]||l[g]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);