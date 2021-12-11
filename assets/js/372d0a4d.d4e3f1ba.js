"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90530],{38878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={title:"Connection",sidebar_label:"Connection"},p=void 0,d={unversionedId:"specs/didcomm/protocols/connection",id:"specs/didcomm/protocols/connection",title:"Connection",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/protocols/connection.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/connection",permalink:"/identity.rs/specs/didcomm/protocols/connection",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/protocols/connection.md",tags:[],version:"current",frontMatter:{title:"Connection",sidebar_label:"Connection"},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/specs/didcomm/overview"},next:{title:"Authentication",permalink:"/identity.rs/specs/didcomm/protocols/authentication"}},l=[{value:"Overview",id:"overview",children:[{value:"Relationships",id:"relationships",children:[],level:3},{value:"Example Use-Cases",id:"example-use-cases",children:[],level:3},{value:"Roles",id:"roles",children:[],level:3},{value:"Interaction",id:"interaction",children:[],level:3}],level:2},{value:"Messages",id:"messages",children:[{value:"1. invitation",id:"invitation",children:[{value:"Structure",id:"structure",children:[],level:4},{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"2. connection",id:"connection",children:[{value:"Structure",id:"structure-1",children:[],level:4},{value:"Examples",id:"examples-1",children:[],level:4}],level:3},{value:"Problem Reports",id:"problem-reports",children:[],level:3}],level:2},{value:"Considerations",id:"considerations",children:[],level:2},{value:"Unresolved Questions",id:"unresolved-questions",children:[],level:2},{value:"Related Work",id:"related-work",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],c={toc:l};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Allows establishment of a ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#connections"},"DIDComm connection")," between two parties. The connection may be established by an explicit invitation delivered ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/49935b7b119591a009ce61d044ba9ad6fa40c7b7/docs/spec-files/out_of_band.md"},"out-of-band"),"\u2014","such as a QR code, URL, or email","\u2014","or by following an implicit invitation in the form of a ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint"},"service endpoint")," attached to a public DID document."),(0,r.kt)("h3",{id:"relationships"},"Relationships"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./termination"},"Termination"),": the DIDComm connection may be gracefully concluded using the ",(0,r.kt)("a",{parentName:"li",href:"./termination"},"termination protocol"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./authentication"},"Authentication"),": the authentication protocol can be used to authenticate parties participating in the established ",(0,r.kt)("a",{parentName:"li",href:"./connection"},"connection"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./feature-discovery"},"Feature Discovery"),": feature discovery can be used to learn about the capabilities of the other party after connection.")),(0,r.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A corporation offers a QR code on their website for customers to connect to their services."),(0,r.kt)("li",{parentName:"ul"},"A person sends an invitation as an email to a friend, to exchange information."),(0,r.kt)("li",{parentName:"ul"},"A device has a service embedded in their DID, that allows others to connect to it, in order to read data.")),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inviter: offers methods to establish connections."),(0,r.kt)("li",{parentName:"ul"},"Invitee: may connect to the inviter using offered methods.")),(0,r.kt)("h3",{id:"interaction"},"Interaction"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConnectionDiagram",src:n(61912).Z})),(0,r.kt)("sub",null,"For guidance on diagrams see the ",(0,r.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"invitation"},"1. invitation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://didcomm.org/out-of-band/2.0/invitation")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"inviter"))),(0,r.kt)("p",null,"A message containing information on how to connect to the inviter. This message is delivered out-of-band, e.g. in form of a link or QR code. The message contains all information required to establish a DIDComm connection. "),(0,r.kt)("h4",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The general structure of the invitation message is described in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/49935b7b119591a009ce61d044ba9ad6fa40c7b7/docs/spec-files/out_of_band.md"},"Out Of Band Messages of the DIDComm specification"),". Note that the invitation message may be ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed")," to provide ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#tamper-resistant-oob-messages"},"tamper resistance"),"."),(0,r.kt)("p",null,"The actual invitation is contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"attachments")," field in the message, which is structured as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serviceId": DIDUrl,                  // OPTIONAL\n  "service": {                          \n    "serviceEndpoint": string,          // REQUIRED\n    "accept": [string],                 // OPTIONAL\n    "recipientKeys": [DIDUrl | DIDKey], // OPTIONAL\n    "routingKeys": [DIDUrl | DIDKey],   // OPTIONAL\n  }, // OPTIONAL\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A string representing a ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrl")," referencing a resolvable ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#services"},"service"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#services"},(0,r.kt)("inlineCode",{parentName:"a"},"service"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A structure analogous to the ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#services"},"DID service specification"),", including all information necessary to establish a connection with the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"inviter"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#dfn-serviceendpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"serviceEndpoint"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc3986"},"URI")," including all details needed to connect to the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"inviter"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"accept"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"An optional array of ",(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#defined-profiles"},"DIDComm profiles")," in the order of preference for sending a message to the endpoint. If omitted, defer to the ",(0,r.kt)("inlineCode",{parentName:"td"},"accept")," field of the invitation body."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recipientKeys")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An ordered array of ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrls")," or ",(0,r.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-key/"},(0,r.kt)("inlineCode",{parentName:"a"},"did:key"))," strings referencing public keys, any of which may be used for ",(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"routingKeys"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"An ordered array of ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrls")," or ",(0,r.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-key/"},(0,r.kt)("inlineCode",{parentName:"a"},"did:key"))," strings referencing keys to be used when preparing the message for transmission; see ",(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#routing"},"DIDComm Routing"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," One of ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," MUST be present for the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," to be able to connect. If both fields are present, the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," SHOULD default to the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId"),"."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," It is RECOMMENDED that the service referenced by ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId")," conforms to the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint"},'"DIDCommMessaging" service type from the DIDComm specification')," as it allows ",(0,r.kt)("inlineCode",{parentName:"p"},"routingKeys")," to be included if necessary. The DID document referenced by ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId")," SHOULD include one or more ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#key-agreement"},(0,r.kt)("inlineCode",{parentName:"a"},"keyAgreement"))," sections to use for ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"),"; the absence of any ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#key-agreement"},(0,r.kt)("inlineCode",{parentName:"a"},"keyAgreement"))," section implies no ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption")," will be used for the connection and an ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," may choose to reject such an invitation. A public ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId")," may reveal the identity of the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter")," to anyone able to view the invitation; if privacy is a concern using an inline ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," should be preferred. For a public organisation whose DID is already public knowledge, using ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId")," has a few benefits: it establishes some level of trust that the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," may be connecting to the correct party since a service from their public DID document is used, and the invitation may be re-used indefinitely even if the service referenced is updated with different endpoints. When using ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceId"),", a signed invitation may provide a similar level of trust. However, neither should be used as a complete replacement for interactive authentication due to the risk of man-in-the-middle attacks."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKeys")," may have multiple entries in order of preference of the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter"),"; this is to offer multiple key types (e.g. Ed25519, X25519) and an ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," may choose any key with which they are compatible. These keys may be static or generated once per invitation. Omitting ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKeys")," implies that ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption")," will not be used in the ensuing DIDComm connection. It is RECOMMENDED to include as ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption")," ensures message integrity and protects communications from eavesdroppers over insecure channels. ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"Invitees")," may choose to reject invitations that do not include ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKeys")," if they want to enforce ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"),"."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," Implementors should avoid using a ",(0,r.kt)("inlineCode",{parentName:"p"},"DIDUrl")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKeys")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"routingKeys")," if privacy is a concern, as may reveal the identity of the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter")," to any party other than the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," that intercepts the invitation. However, using a ",(0,r.kt)("inlineCode",{parentName:"p"},"DIDUrl")," may be useful as it allows for key-rotation without needing to update the invitation."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following examples include the entire DIDComm message structure for illustration, including ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#message-headers"},"message headers")," with the actual ",(0,r.kt)("a",{parentName:"p",href:"#invitation"},"invitation payload")," defined in this specification included in the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#attachments"},"attachments")," section."),(0,r.kt)("p",null,"For further information on how to encode the invitation message for delivery refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#standard-message-encoding"},"DIDComm specification"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Invitation with a single attachment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typ": "application/didcomm-plain+json",\n  "type": "https://didcomm.org/out-of-band/2.0/invitation",\n  "id": "fde5eb9e-0560-48cf-b860-acd178c1e0b0",\n  "body": {\n    "accept": [\n      "didcomm/v2"\n    ],\n  },\n  "attachments": [\n    {\n      "@id": "request-0",\n      "mime-type": "application/json",\n      "data": {\n          "json": {\n            "service": {\n              "serviceEndpoint": "wss://example.com/path",\n              "recipientKeys": ["did:key:z6LSoMdmJz2Djah2P4L9taDmtqeJ6wwd2HhKZvNToBmvaczQ"],\n              "routingKeys": []\n            }\n          }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#standard-message-encoding"},"DIDComm specification")," for further information on how to encode the invitation message for delivery."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Invitation with a goal indicated and two attachments in order of preference. An ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"invitee")," should pick the first one with which they are compatible:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typ": "application/didcomm-plain+json",\n  "type": "https://didcomm.org/out-of-band/2.0/invitation",\n  "id": "fde5eb9e-0560-48cf-b860-acd178c1e0b0",\n  "body": {\n    "goal_code": "issue-vc",\n    "goal": "To issue a Faber College Graduate credential",\n    "accept": [\n      "didcomm/v2"\n    ],\n  },\n  "attachments": [\n    {\n      "@id": "request-0",\n      "mime-type": "application/json",\n      "data": {\n          "json": {\n            "service": {\n              "serviceEndpoint": "wss://example.com/path",\n              "accept": [\n                "didcomm/v2",\n              ],\n              "recipientKeys": [\n                "did:key:z6LSoMdmJz2Djah2P4L9taDmtqeJ6wwd2HhKZvNToBmvaczQ",\n                "did:key:z82Lm1MpAkeJcix9K8TMiLd5NMAhnwkjjCBeWHXyu3U4oT2MVJJKXkcVBgjGhnLBn2Kaau9"\n              ],\n              "routingKeys": ["did:key:z6LStiZsmxiK4odS4Sb6JmdRFuJ6e1SYP157gtiCyJKfrYha"]\n            }\n          }\n      }\n    },\n    {\n      "@id": "request-1",\n      "mime-type": "application/json",\n      "data": {\n          "json": {\n            "serviceId": "did:iota:123456789abcdefghi#didcomm-1",\n          }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"connection"},"2. connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/connection/0.1/connection")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"invitee"))),(0,r.kt)("p",null,"Following a successful connection, the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," sends its public keys necessary to establish ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"),". This may be preceded by an ",(0,r.kt)("a",{parentName:"p",href:"#invitation"},"invitation")," message, or the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," may connect directly to the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter")," in the case of an implicit invitation."),(0,r.kt)("h4",{id:"structure-1"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "recipientKey": DIDUrl | DIDKey,  // OPTIONAL\n  "routingKeys": [DIDUrl | DIDKey], // OPTIONAL\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recipientKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrl")," or ",(0,r.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-key/"},(0,r.kt)("inlineCode",{parentName:"a"},"did:key"))," strings referencing a public key of the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"invitee")," to be used for ",(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"routingKeys"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"An ordered array of ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/#did-url-syntax"},"DIDUrls")," or ",(0,r.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-key/"},(0,r.kt)("inlineCode",{parentName:"a"},"did:key"))," strings referencing keys to be used by the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"inviter")," when preparing the message for transmission; see ",(0,r.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#routing"},"DIDComm Routing"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2716")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the preceding ",(0,r.kt)("a",{parentName:"p",href:"#invitation"},"invitation")," message MUST be used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"pthid")," header property on this message. Both the ",(0,r.kt)("inlineCode",{parentName:"p"},"thid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pthid")," properties MUST be omitted in the case of an implicit invitation when connecting to a public service endpoint of an ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#message-headers"},"DIDComm Message Headers")," for more information."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," If present, the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKey")," sent by the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},(0,r.kt)("inlineCode",{parentName:"a"},"invitee"))," MUST match the key type (e.g. Ed25519, X25519) of one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKeys")," in the ",(0,r.kt)("a",{parentName:"p",href:"#invitation"},"invitation")," message, or of a ",(0,r.kt)("inlineCode",{parentName:"p"},"keyAgreement")," public key attached to the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter`s")," DID document in the case of an implicit invitation. The ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKey")," should be omitted if no ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKeys")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"keyAgreement")," sections are present, or if the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," does not wish to use ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption")," for the connection. An ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"inviter")," may choose to reject connection messages that omit a ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKey"),", terminating the connection."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," Similar to the considerations for the ",(0,r.kt)("a",{parentName:"p",href:"#invitation"},"invitation")," message, implementors should avoid using a ",(0,r.kt)("inlineCode",{parentName:"p"},"DIDUrl")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"recipientKey")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"routingKeys")," as it may reveal the identity of the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"invitee")," to eavesdroppers prior to encryption being established. Using a ",(0,r.kt)("inlineCode",{parentName:"p"},"DIDUrl")," for key rotation is less of a concern for a ",(0,r.kt)("a",{parentName:"p",href:"#connection"},"connection")," message as, unlike an ",(0,r.kt)("a",{parentName:"p",href:"#invitation"},"invitation"),", the message is intended to be transient and should not persist beyond a single connection attempt."),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connection with a P-384 Key DID as the recipient key:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "recipientKey": "did:key:z82LkvCwHNreneWpsgPEbV3gu1C6NFJEBg4srfJ5gdxEsMGRJUz2sG9FE42shbn2xkZJh54"\n}\n')),(0,r.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,r.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their custom application-specific problem-reports."),(0,r.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,r.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.connection.reject-connection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#connection"},"connection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#roles"},"Inviter")," rejects a connection request for any reason, e.g. untrusted ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"invitee")," or lacking ",(0,r.kt)("inlineCode",{parentName:"td"},"recipientKey")," for anonymous encryption.")))),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"This section is non-normative."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),": implementors SHOULD NOT use any information transmitted in the connection protocol for direct authentication or proof of identity. See the ",(0,r.kt)("a",{parentName:"li",href:"./authentication"},"authentication")," protocol.")),(0,r.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List supported handshake protocols for authentication post-connection?"),(0,r.kt)("li",{parentName:"ul"},"How do parties know what to do post-connection, send protocol in the invitation, or does one party just try to start a protocol immediately? For custom/corporate applications likely hard-coded, for general SSI wallets, it is an open question.")),(0,r.kt)("h2",{id:"related-work"},"Related Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aries Hyperledger:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connection protocol: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0160-connection-protocol"},"https://github.com/hyperledger/aries-rfcs/tree/main/features/0160-connection-protocol")),(0,r.kt)("li",{parentName:"ul"},"Out-of-Band protocol: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0434-outofband"},"https://github.com/hyperledger/aries-rfcs/tree/main/features/0434-outofband")),(0,r.kt)("li",{parentName:"ul"},"DID Exchange protocol: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange"},"https://github.com/hyperledger/aries-rfcs/tree/main/features/0023-did-exchange"))))),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#connections"},"DIDComm Connections")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/49935b7b119591a009ce61d044ba9ad6fa40c7b7/docs/spec-files/out_of_band.md"},"DIDComm Out Of Band Messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#did-document-service-endpoint"},"DIDComm Service Endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#services"},"DID Services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/main/concepts/0519-goal-codes"},"Aries Hyperledger Goal Codes"))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,f=m["".concat(p,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61912:function(e,t,n){t.Z=n.p+"assets/images/connection.drawio-abc65c74ef7c1fd8155ef88042d8a125.svg"}}]);