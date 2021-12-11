"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91326],{69452:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return h}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=n(66816),s=n(71871),d=n(34369),l=["components"],c={title:"DID Messages",sidebar_label:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from it's origin to the current version using Integration and Differentiation Chains.",image:"/img/Identity_icon.png",keywords:["Diff Chain","Differentiation Chain","Integration Chain","smart contracts","Chronicle","state","stateless"]},u=void 0,f={unversionedId:"advanced/did_messages",id:"advanced/did_messages",title:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from it's origin to the current version using Integration and Differentiation Chains.",source:"@site/external/identity.rs/documentation/docs/advanced/did_messages.mdx",sourceDirName:"advanced",slug:"/advanced/did_messages",permalink:"/identity.rs/advanced/did_messages",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/advanced/did_messages.mdx",tags:[],version:"current",frontMatter:{title:"DID Messages",sidebar_label:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from it's origin to the current version using Integration and Differentiation Chains.",image:"/img/Identity_icon.png",keywords:["Diff Chain","Differentiation Chain","Integration Chain","smart contracts","Chronicle","state","stateless"]},sidebar:"docs",previous:{title:"IOTA Client",permalink:"/identity.rs/advanced/client"},next:{title:"Storage Adapter",permalink:"/identity.rs/advanced/storage_adapter"}},h=[{value:"Valid DID Documents",id:"valid-did-documents",children:[],level:3},{value:"DID Messages",id:"did-messages",children:[],level:3},{value:"Example of Utilizing a Diff Chain",id:"example-of-utilizing-a-diff-chain",children:[],level:2}],p={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain the concept of DID Messages and how they can be used to optimize DID updates."),(0,r.kt)("h3",{id:"valid-did-documents"},"Valid DID Documents"),(0,r.kt)("p",null,"Most DID methods are implemented on a Distributed Ledger Technology (DLT), such as Bitcoin, Ethereum or IOTA. Most common DID implementation on DLTs are based on fit-for-purpose Blockchains that store the state of a DID Document in the ledger, or a general purpose Blockchain that utilize smart contracts to store the state. Updating a DID Document where the state is understood by the network is straightforward. The network can determine if an action is legal and if a cryptographic signature is provided correctly, as it understands the underlying data structure, and can update the state accordingly. The individual state updates, or transactions, can be forgotten."),(0,r.kt)("p",null,"The IOTA Tangle is unable to track, state, or understand the data structure. Storing the state is neither possible in the ledger, nor via a Smart contract (yet). Therefore, IOTA Identity has to recreate and validate the state from the origin of the Identity to the current version. The process involves querying all the relevant transactions from the Tangle, ordering them, filtering out the transactions that perform illegal actions or have an incorrect signature and then recreate state. As this requires the full history of the Identity, we recommend utilizing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/chronicle.rs"},"Chronicle"),", an IOTA permanode, which stores the entire history of the Tangle. Further research will be performed to reduce storage requirements for IOTA Identity based applications."),(0,r.kt)("h3",{id:"did-messages"},"DID Messages"),(0,r.kt)("p",null,"Due to this constant need for state recreating, unique performance improvements have been design and implemented for IOTA Identity. Most DID Documents will need few to no updates, however identities that sign a lot of Verifiable Credentials might update more frequently, as will be explained in the Verifiable Credentials section. To support higher frequency identity updates, we have introduced a unique solution called the \u201cIntegration Chain\u201d and the \u201cDifferentiation Chain\u201d (Diff Chain)."),(0,r.kt)("p",null,"The Integration Chain is a chain of transactions that contain full DID Documents. They are unrestricted in what they can add or remove from the DID Document. Every Integration Chain transaction points to a separate new Diff Chain. These Diff Chain transactions only list the changes to a DID Document and are therefore more compact. It is, however, restricted in rotating the signing key, making it fast and easy to validate the transaction."),(0,r.kt)("p",null,"Once a new Integration chain transaction is created, it will take all Diff Chain updates and compress them into a new DID Document, essentially combining them all into a single transaction. This reduces the amount of updates that need to be queried and validated tremendously. For example, lets assume every Diff chain contains 100 updates. Then validating a DID that has done 1050 updates, only requires the validation of 10 Integration Chain updates and 40 Diff Chain updates (The latest Diff Chain). We skipped out on 10 Diff Chains each containing 100 updates, and only validated the 10 Integration Chain updates and the last Diff Chain containing 40 updates. If we estimate every update to be on average 1 Kb, we only have to download 50 kb of information and validate it, which is significantly less than the otherwise 1.025 Mb of information."),(0,r.kt)("p",null,"The improved performance and ability to handle frequently updated DID Documents is especially beneficial for Verifiable Credential Revocation, by utilizing revocation flags. These concepts will be explained in the Verifiable Credentials and Key Collections sections."),(0,r.kt)("h2",{id:"example-of-utilizing-a-diff-chain"},"Example of Utilizing a Diff Chain"),(0,r.kt)("p",null,"This example is a basic introduction on how you can create a diff message and publish it to the tangle."),(0,r.kt)(o.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! An example that demonstrates how to publish changes to the integration chain to update a\n//! DID Document.\n//!\n//! cargo run --example update_did\n\nuse identity::core::json;\nuse identity::core::FromJson;\nuse identity::did::Service;\nuse identity::did::DID;\nuse identity::iota::ClientMap;\nuse identity::iota::DiffMessage;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::Receipt;\nuse identity::iota::TangleRef;\nuse identity::prelude::*;\n\nmod create_did;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a client instance to send messages to the Tangle.\n  let client: ClientMap = ClientMap::new();\n\n  // Create a signed DID Document and KeyPair (see create_did.rs).\n  let (document, keypair, receipt): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // Update the document by adding a new service endpoint\n  let updated_document: IotaDocument = {\n    let mut doc: IotaDocument = document.clone();\n\n    // Add a Service\n    let service: Service = Service::from_json_value(json!({\n      "id": doc.id().to_url().join("#linked-domain")?,\n      "type": "LinkedDomains",\n      "serviceEndpoint": "https://iota.org"\n    }))?;\n    assert!(doc.insert_service(service));\n    doc\n  };\n\n  // Generate a signed diff object.\n  let diff: DiffMessage = document.diff(\n    &updated_document,\n    *receipt.message_id(),\n    keypair.private(),\n    document.default_signing_method()?.id(),\n  )?;\n\n  println!("Diff > {:#?}", diff);\n\n  // Publish the diff object to the Tangle, starting a diff chain.\n  let update_receipt: Receipt = client.publish_diff(receipt.message_id(), &diff).await?;\n\n  println!("Diff Update Receipt > {:#?}", update_receipt);\n\n  // Display the web explorer url that shows the published diff message.\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "Diff Update Transaction > {}",\n    explorer.message_url(update_receipt.message_id())?\n  );\n  println!("Explore the DID Document > {}", explorer.resolver_url(document.did())?);\n\n  Ok(())\n}\n')),(0,r.kt)(s.Z,{value:"nodejs",mdxType:"TabItem"},(0,r.kt)(d.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {Client, Config, Document, Service} from \'@iota/identity-wasm\';\nimport {createIdentity} from "./create_did";\nimport {logExplorerUrl, logResolverUrl} from "./utils";\n\n/**\n This example is a basic introduction to creating a diff message and publishing it to the tangle.\n 1. A did document is created and published with one service.\n 2. The document is cloned and another service is added.\n 3. The difference between the two documents is created and published as a diff message.\n 4. The final DID will contain both services.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n **/\nasync function createDiff(clientConfig) {\n    // Create a default client configuration from the parent config network.\n    const config = Config.fromNetwork(clientConfig.network);\n\n    // Create a client instance to publish messages to the Tangle.\n    const client = Client.fromConfig(config);\n\n    // Create a new identity (see "create_did.js" example).\n    const {key, doc, receipt} = await createIdentity(clientConfig);\n\n    // Clone the Document\n    const updatedDoc = Document.fromJSON(doc.toJSON());\n\n    // Add a Service\n    let serviceJSON = {\n        id: doc.id + "#new-linked-domain",\n        type: "LinkedDomains",\n        serviceEndpoint: "https://identity.iota.org",\n    };\n    updatedDoc.insertService(Service.fromJSON(serviceJSON));\n    console.log(updatedDoc);\n\n    // Create diff\n    const diff = doc.diff(updatedDoc, receipt.messageId, key, doc.defaultSigningMethod().id.toString());\n    console.log(diff);\n\n    // Publish diff to the Tangle\n    const diffReceipt = await client.publishDiff(receipt.messageId, diff);\n    console.log(diffReceipt);\n    logExplorerUrl("Diff Chain Transaction:", clientConfig.explorer, diffReceipt.messageId);\n    logResolverUrl("Explore the DID Document:", clientConfig.explorer, doc.id.toString());\n\n    return {updatedDoc, key, diffMessageId: diffReceipt.messageId};\n}\n\nexport {createDiff};\n'))))}m.isMDXComponent=!0},71871:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(83117),a=n(67294),r=n(5730),o=n(54179);var s=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(59137),l=n(86010),c="tabItem_1uMI";function u(e){var t,n,i,r=e.lazy,o=e.block,u=e.defaultValue,f=e.values,h=e.groupId,p=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,d.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var D=null===u?u:null!=(t=null!=u?u:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=m[0])?void 0:i.props.value;if(null!==D&&!g.some((function(e){return e.value===D})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+D+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=s(),b=y.tabGroupChoices,I=y.setTabGroupChoices,w=(0,a.useState)(D),C=w[0],k=w[1],T=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=b[h];null!=_&&_!==C&&g.some((function(e){return e.value===_}))&&k(_)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),i=g[n].value;i!==C&&(x(t),k(i),null!=h&&I(h,i))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=T.indexOf(e.currentTarget)+1;n=T[i]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},p)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":C===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:E,onClick:E},null!=n?n:t)}))),r?(0,a.cloneElement)(m.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function f(e){var t=(0,r.Z)();return a.createElement(u,(0,i.Z)({key:String(t)},e))}}}]);