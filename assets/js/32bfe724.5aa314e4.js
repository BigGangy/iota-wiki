"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57184],{95515:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=t(66816),l=t(71871),u=t(34369),s=["components"],d={title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},c=void 0,p={unversionedId:"decentralized_identifiers/resolve",id:"decentralized_identifiers/resolve",title:"Resolve an IOTA Identity",description:"Explain how resolving works including arguments",source:"@site/external/identity.rs/documentation/docs/decentralized_identifiers/resolve.mdx",sourceDirName:"decentralized_identifiers",slug:"/decentralized_identifiers/resolve",permalink:"/identity.rs/decentralized_identifiers/resolve",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/decentralized_identifiers/resolve.mdx",tags:[],version:"current",frontMatter:{title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},sidebar:"docs",previous:{title:"Secure",permalink:"/identity.rs/decentralized_identifiers/secure"},next:{title:"Resolve a DID history",permalink:"/identity.rs/decentralized_identifiers/resolve_history"}},m=[{value:"Example",id:"example",children:[],level:2}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TODO: Explain how resolving works including arguments."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"A short example that shows how you can resolve a DID Document. This example returns the latest DID Document."),(0,o.kt)(a.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates a DID Document, publishes it to the Tangle,\n//! and retrieves information through DID Document resolution/dereferencing.\n//!\n//! See also https://www.w3.org/TR/did-core/#did-resolution and https://www.w3.org/TR/did-core/#did-url-dereferencing\n//!\n//! cargo run --example resolution\n\nuse identity::core::SerdeInto;\nuse identity::did::resolution;\nuse identity::did::resolution::Dereference;\nuse identity::did::resolution::InputMetadata;\nuse identity::did::resolution::Resolution;\nuse identity::did::resolution::Resource;\nuse identity::did::resolution::SecondaryResource;\nuse identity::did::DID;\nuse identity::iota::ClientMap;\nuse identity::iota::IotaDID;\nuse identity::iota::IotaDIDUrl;\nuse identity::iota::Receipt;\nuse identity::prelude::*;\n\nmod create_did;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a client instance to send messages to the Tangle.\n  let client: ClientMap = ClientMap::new();\n\n  // Create a signed DID Document and KeyPair (see create_did.rs).\n  let (document, _, _): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // ===========================================================================\n  // DID Resolution\n  // ===========================================================================\n\n  let doc_did: &IotaDID = document.id();\n  let did_url: &str = doc_did.as_str();\n\n  // Retrieve the published DID Document from the Tangle.\n  let input: InputMetadata = Default::default();\n  let output: Resolution = resolution::resolve(did_url, input, &client).await?;\n\n  println!("Resolution > {:#?}", output);\n\n  // The resolved Document should be the same as what we published.\n  assert_eq!(output.document.unwrap(), document.serde_into().unwrap());\n\n  // ===========================================================================\n  // DID Dereferencing\n  // ===========================================================================\n\n  let resource_url: IotaDIDUrl = doc_did.to_url().join("#sign-0")?;\n\n  // Retrieve a subset of the published DID Document properties.\n  let input: InputMetadata = Default::default();\n  let output: Dereference = resolution::dereference(resource_url.to_string(), input, &client).await?;\n\n  println!("Dereference > {:#?}", output);\n\n  // The resolved resource should be the DID Document\'s default signing method.\n  match output.content.unwrap() {\n    Resource::Secondary(SecondaryResource::VerificationKey(method)) => {\n      assert_eq!(method, **document.default_signing_method()?);\n    }\n    resource => {\n      panic!("Invalid Resource Dereference > {:#?}", resource);\n    }\n  }\n\n  Ok(())\n}\n')),(0,o.kt)(l.Z,{value:"nodejs",mdxType:"TabItem"},(0,o.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, Config} from \'@iota/identity-wasm\';\nimport {manipulateIdentity} from "./manipulate_did";\n\n/**\n A short example to show how to resolve a DID. This returns the latest DID Document.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n @param {string} did\n **/\nasync function resolution(clientConfig, did) {\n    // Create a default client configuration from the parent config network.\n    const config = Config.fromNetwork(clientConfig.network);\n\n    // Create a client instance to publish messages to the Tangle.\n    const client = Client.fromConfig(config);\n\n    if (!did) {\n        // Creates a new identity, that also is updated (See "manipulate_did" example).\n        let {doc} = await manipulateIdentity(clientConfig);\n        did = doc.id.toString();\n    }\n\n    // Resolve a DID.\n    return await client.resolve(did);\n}\n\nexport {resolution};\n'))))}v.isMDXComponent=!0},71871:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},66816:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(83117),r=t(67294),o=t(5730),a=t(54179);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(59137),s=t(86010),d="tabItem_1uMI";function c(e){var n,t,i,o=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var D=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==D&&!h.some((function(e){return e.value===D})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+D+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,I=y.setTabGroupChoices,b=(0,r.useState)(D),_=b[0],k=b[1],T=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=w[m];null!=C&&C!==_&&h.some((function(e){return e.value===C}))&&k(C)}var R=function(e){var n=e.currentTarget,t=T.indexOf(n),i=h[t].value;i!==_&&(x(n),k(i),null!=m&&I(m,i))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=T.indexOf(e.currentTarget)+1;t=T[i]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},f)},h.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,className:(0,s.Z)("tabs__item",d,{"tabs__item--active":_===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:R,onClick:R},null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function p(e){var n=(0,o.Z)();return r.createElement(c,(0,i.Z)({key:String(n)},e))}}}]);