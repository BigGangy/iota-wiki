"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50999],{84765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return c}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={description:"An IOTA node needs to discover and maintain a list of the reachable IP addresses of other peers. Nodes need to be kept up-to-date about the ledger state, thus they exchange information with each other.",image:"/img/protocol_specification/peer_discovery.png",keywords:["node","neighbors","selection","pong","ping","peer","peering","discovery","request","accepted","salt update"]},l="Autopeering",p={unversionedId:"protocol_specification/components/autopeering",id:"protocol_specification/components/autopeering",title:"Autopeering",description:"An IOTA node needs to discover and maintain a list of the reachable IP addresses of other peers. Nodes need to be kept up-to-date about the ledger state, thus they exchange information with each other.",source:"@site/external/goshimmer/documentation/docs/protocol_specification/components/autopeering.md",sourceDirName:"protocol_specification/components",slug:"/protocol_specification/components/autopeering",permalink:"/goshimmer/protocol_specification/components/autopeering",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/protocol_specification/components/autopeering.md",tags:[],version:"current",frontMatter:{description:"An IOTA node needs to discover and maintain a list of the reachable IP addresses of other peers. Nodes need to be kept up-to-date about the ledger state, thus they exchange information with each other.",image:"/img/protocol_specification/peer_discovery.png",keywords:["node","neighbors","selection","pong","ping","peer","peering","discovery","request","accepted","salt update"]},sidebar:"docs",previous:{title:"Tangle",permalink:"/goshimmer/protocol_specification/components/tangle"},next:{title:"Mana Implementation",permalink:"/goshimmer/protocol_specification/components/mana"}},h=[{value:"Node Identities",id:"node-identities",children:[],level:2},{value:"Peer Discovery",id:"peer-discovery",children:[{value:"Verification",id:"verification",children:[],level:3},{value:"Removal",id:"removal",children:[],level:3},{value:"Discovery",id:"discovery",children:[],level:3}],level:2},{value:"Neighbor Selection",id:"neighbor-selection",children:[{value:"Local Variables",id:"local-variables",children:[],level:3},{value:"Mana Rank Interval",id:"mana-rank-interval",children:[],level:3},{value:"Selection",id:"selection",children:[],level:3},{value:"Neighbor Removal",id:"neighbor-removal",children:[],level:3}],level:2}],d={toc:h};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"autopeering"},"Autopeering"),(0,r.kt)("p",null,"In order to establish connections, an IOTA node needs to discover and maintain a list of the reachable IP addresses of other peers. Nodes need to be kept up-to-date about the ledger state, thus they exchange information with each other. Each node establishes a communication channel with a small subset of nodes (i.e., neighbors) via a process called ",(0,r.kt)("inlineCode",{parentName:"p"},"peering"),". Such a process must be resilient against eclipse attacks: if all of a node\u2019s neighbors are controlled by an attacker, then the attacker has complete control over the node\u2019s view of the Tangle. Moreover, to prevent or limit sybil-based attacks, the neighbor selection protocol makes use of a scarce resource dubbed Consensus Mana: arbitrary nodes can be created, but it is difficult to produce high mana nodes."),(0,r.kt)("p",null,"Throughout this section the terms ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Peer")," are used interchangeably to refer to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," device."),(0,r.kt)("p",null,"The usage of the ",(0,r.kt)("em",{parentName:"p"},"Ping")," and ",(0,r.kt)("em",{parentName:"p"},"Pong")," mechanism is to be considered as a bidirectional exchange similarly to how described by other standards such as ",(0,r.kt)("a",{parentName:"p",href:"https://core-wg.github.io/coap-sig/"},"CoAP")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6455#section-5.5.2"},"WebSocket"),"."),(0,r.kt)("h2",{id:"node-identities"},"Node Identities"),(0,r.kt)("p",null,"Every node has a cryptographic identity, a key on the ed25519 elliptic curve. The ",(0,r.kt)("inlineCode",{parentName:"p"},"blake2b")," hash of the public key of the peer serves as its identifier or ",(0,r.kt)("inlineCode",{parentName:"p"},"node ID"),"."),(0,r.kt)("h2",{id:"peer-discovery"},"Peer Discovery"),(0,r.kt)("p",null,"The main goal of the ",(0,r.kt)("em",{parentName:"p"},"Peer Discovery")," protocol is to expose an interface providing a list of all the verified peers.\nTo bootstrap the peer discovery, a node ",(0,r.kt)("em",{parentName:"p"},"must")," be able to reach one or more entry nodes. To achieve this, the implementation of the protocol ",(0,r.kt)("em",{parentName:"p"},"shall")," provide a hard-coded list of trusted ",(0,r.kt)("strong",{parentName:"p"},"entry nodes")," run by the IF or by trusted community members that answer to peer discovery packets coming from new nodes joining the IOTA network. This approach is a common practice of many distributed networks ",(0,r.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/iel7/9739/8649699/08456488.pdf"},"[Neudecker 2018]"),".\nPublic Key-based Cryptography (PKC) ",(0,r.kt)("em",{parentName:"p"},"shall")," be used for uniquely ",(0,r.kt)("a",{parentName:"p",href:"#Node_identities"},"identifying")," peers and for authenticating each packet.\nThe usage of the Ping and Pong protocols is that ",(0,r.kt)("em",{parentName:"p"},"Ping")," are sent to verify a given peer and, upon reception of a valid ",(0,r.kt)("em",{parentName:"p"},"Pong")," as a response from that peer, the peer is verified.\nOnce a peer has been verified, it can be queried to discover new peers by sending a ",(0,r.kt)("em",{parentName:"p"},"DiscoveryRequest"),". As a response, a ",(0,r.kt)("em",{parentName:"p"},"DiscoveryResponse")," ",(0,r.kt)("em",{parentName:"p"},"shall")," be returned, containing a list of new peers. The new peer nodes in this list ",(0,r.kt)("em",{parentName:"p"},"shall")," be verified by the receiving application."),(0,r.kt)("p",null,"This process is summarized in the following figure and detailed in the following subsections:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(28338).Z},(0,r.kt)("img",{alt:"Peer discovery",src:n(51897).Z,title:"Peer discovery"}))),(0,r.kt)("h3",{id:"verification"},"Verification"),(0,r.kt)("p",null,"The verification process aims at both verifying peer identities and checking their online status. Each peer ",(0,r.kt)("em",{parentName:"p"},"shall")," maintain a list of all the known peers. This list ",(0,r.kt)("em",{parentName:"p"},"shall")," be called ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list"),". Elements of any known peer list ",(0,r.kt)("em",{parentName:"p"},"shall")," contain a reference to a ",(0,r.kt)("a",{parentName:"p",href:"#Peer"},"Peer")," and a time at which it ",(0,r.kt)("em",{parentName:"p"},"shall")," be verified/re-verified.\nAs such, the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list")," can be seen as a time-priority queue. A newly discovered peer gets added to the list at the current time. Whenever a peer is verified, its time value on the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list")," gets updated to the time at which that peer ",(0,r.kt)("em",{parentName:"p"},"shall")," be re-verified.\nThe intent of this arrangement is to allow the node application to first verify newly discovered (and thus still unverified) peers and then to re-verify older peers (to confirm their online status) by iterating over the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list"),".\nIt is worthwhile to note that the order in which the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list")," is worked through is important. For example, if the peer is added to the front ('head') of the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list"),", it is possible for an adversary to front-fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list")," with a selection of its own nodes. This is resolved by the use of the time-priority queue."),(0,r.kt)("p",null,"The verification process always initiates from a ",(0,r.kt)("em",{parentName:"p"},"Ping"),". Upon reception of a ",(0,r.kt)("em",{parentName:"p"},"Ping"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall")," check its validity by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verifying that the signature of the ",(0,r.kt)("em",{parentName:"li"},"Ping")," is valid and discarding the request otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"network_id")," fields match its configuration and discarding the ",(0,r.kt)("em",{parentName:"li"},"Ping")," otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," field is fresh (i.e., not older than a given time) and discarding the packet otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"dest_addr")," matches its IP address and discarding the ",(0,r.kt)("em",{parentName:"li"},"Ping")," otherwise.")),(0,r.kt)("p",null,"Upon successful validation of a received ",(0,r.kt)("em",{parentName:"p"},"Ping"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall")," respond with a ",(0,r.kt)("em",{parentName:"p"},"Pong"),". In case the sender of the ",(0,r.kt)("em",{parentName:"p"},"Ping")," is a new peer from the perspective of the receiving node, the receiver peer ",(0,r.kt)("em",{parentName:"p"},"shall")," add it to its ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list"),". This enables the verification process to also occur in the reverse direction. "),(0,r.kt)("p",null,"Upon reception of a ",(0,r.kt)("em",{parentName:"p"},"Pong"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall")," check its validity by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verifying that the signature of the ",(0,r.kt)("em",{parentName:"li"},"Pong")," is valid and discarding it otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"req_hash")," field matches a request (i.e. ",(0,r.kt)("em",{parentName:"li"},"Ping"),") previously sent and not expired (i.e., the difference between the timestamp of the ",(0,r.kt)("em",{parentName:"li"},"Ping")," and ",(0,r.kt)("em",{parentName:"li"},"Pong")," is not greater than a given threshold) and discarding the associated ",(0,r.kt)("em",{parentName:"li"},"Ping")," or ",(0,r.kt)("em",{parentName:"li"},"Pong")," otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"dest_addr")," matches its IP address and discarding the associated ",(0,r.kt)("em",{parentName:"li"},"Ping")," or ",(0,r.kt)("em",{parentName:"li"},"Pong")," otherwise.")),(0,r.kt)("p",null,"Upon successful validation of a received ",(0,r.kt)("em",{parentName:"p"},"Pong"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add the peer sender of the ",(0,r.kt)("em",{parentName:"li"},"Pong")," to a list of verified peers called ",(0,r.kt)("inlineCode",{parentName:"li"},"verified_peer_list"),";"),(0,r.kt)("li",{parentName:"ul"},"move the peer entry of the ",(0,r.kt)("inlineCode",{parentName:"li"},"known_peer_list")," to the tail.")),(0,r.kt)("h3",{id:"removal"},"Removal"),(0,r.kt)("p",null,"While verifying a new peer, if no or an invalid ",(0,r.kt)("em",{parentName:"p"},"Pong")," is received after ",(0,r.kt)("inlineCode",{parentName:"p"},"max_verify_attempts")," attempts, that node ",(0,r.kt)("em",{parentName:"p"},"shall")," be removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list"),". Each expected reply should have a timeout such that if no answer is received after that, an attempt is considered concluded and counted as failed. "),(0,r.kt)("p",null,"Each peer on the ",(0,r.kt)("inlineCode",{parentName:"p"},"verified_peer_list")," ",(0,r.kt)("em",{parentName:"p"},"shall")," be re-verified after ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_lifetime")," hours; while re-verifying a peer, if no or invalid ",(0,r.kt)("em",{parentName:"p"},"Pong")," is received after ",(0,r.kt)("inlineCode",{parentName:"p"},"max_reverify_attempts")," attempts, the peer ",(0,r.kt)("em",{parentName:"p"},"shall")," be removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"verified_peer_list"),"."),(0,r.kt)("h3",{id:"discovery"},"Discovery"),(0,r.kt)("p",null,"Each peer entry of the ",(0,r.kt)("inlineCode",{parentName:"p"},"verified_peer_list")," may be used to discover new peers. This process is initiated by sending a ",(0,r.kt)("em",{parentName:"p"},"DiscoveryRequest"),"."),(0,r.kt)("p",null,"Upon reception of a ",(0,r.kt)("em",{parentName:"p"},"DiscoveryRequest"),", a peer node ",(0,r.kt)("em",{parentName:"p"},"shall")," check its validity by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"checking that the sender of the ",(0,r.kt)("em",{parentName:"li"},"DiscoveryRequest")," is a verified peer (i.e. is stored in the ",(0,r.kt)("inlineCode",{parentName:"li"},"verified_peer_list"),") and discarding the request otherwise;"),(0,r.kt)("li",{parentName:"ul"},"verifying that the signature of the ",(0,r.kt)("em",{parentName:"li"},"DiscoveryRequest")," is valid and discarding the request otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," field is fresh (i.e., not older than a given time) and discarding the request otherwise.")),(0,r.kt)("p",null,"Upon successful validation of a received ",(0,r.kt)("em",{parentName:"p"},"DiscoveryRequest"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall")," reply with a ",(0,r.kt)("em",{parentName:"p"},"DiscoveryResponse"),"."),(0,r.kt)("p",null,"Upon reception of a ",(0,r.kt)("em",{parentName:"p"},"DiscoveryResponse"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall")," check its validity by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verifying that the signature of the ",(0,r.kt)("em",{parentName:"li"},"DiscoveryResponse")," is valid and discarding the response otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"req_hash")," field matches a discovery request (i.e. ",(0,r.kt)("em",{parentName:"li"},"DiscoveryRequest"),") previously sent and not expired (i.e., the difference between the timestamp of the ",(0,r.kt)("em",{parentName:"li"},"DiscoveryRequest")," and ",(0,r.kt)("em",{parentName:"li"},"DiscoveryResponse")," is not greater than a given threshold) and discarding the response otherwise.")),(0,r.kt)("p",null,"Upon successful validation of a received ",(0,r.kt)("em",{parentName:"p"},"DiscoveryResponse"),", a node ",(0,r.kt)("em",{parentName:"p"},"shall")," add the nodes contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"peers")," field to the ",(0,r.kt)("inlineCode",{parentName:"p"},"known_peer_list"),"."),(0,r.kt)("h2",{id:"neighbor-selection"},"Neighbor Selection"),(0,r.kt)("p",null,"The goal of the neighbor selection is to build a node's neighborhood (to be used by the gossip protocol) while preventing attackers from \u201ctricking\u201d other nodes into becoming neighbors. Neighbors are established when one node sends a peering request to another node, which in turn accepts or rejects the request with a peering response. "),(0,r.kt)("p",null,"To prevent attacks, the protocol makes the peering request ",(0,r.kt)("em",{parentName:"p"},"verifiably random")," such that attackers cannot create nodes to which the target node will send requests. At its core, the neighbor selection protocol uses both a screening process called ",(0,r.kt)("em",{parentName:"p"},"Consensus Mana rank")," and a ",(0,r.kt)("em",{parentName:"p"},"score function")," that takes into account some randomness dubbed ",(0,r.kt)("em",{parentName:"p"},"private salt")," and ",(0,r.kt)("em",{parentName:"p"},"public salt"),".\nHalf of the neighbors will be constituted from nodes that accepted the peering request, while half will be constituted of nodes that will request for the peering. The two distinct groups of neighbors are consequently called:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chosen neighbors (outbound). The peers that the node proactively selected through the neighbor selection mechanism."),(0,r.kt)("li",{parentName:"ul"},"Accepted neighbors (inbound). The peers that sent the peering request to the node and were accepted as a neighbor.")),(0,r.kt)("h3",{id:"local-variables"},"Local Variables"),(0,r.kt)("p",null,"Local variables defined here are included to help in understanding the protocol described in this section. The node application shall handle those variables in some form."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saltUpdateInterval"),": The time interval at which nodes shall update their salts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseTimeout"),": The time that node waits for a response during one peering attempt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestExpirationTime"),": The time used for the request timestamp validation, if the timestamp is older than this threshold the request is dropped"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxPeeringAttempts"),": The maximum number of peering requests retries sent to the selected node before the next salt update.")),(0,r.kt)("h3",{id:"mana-rank-interval"},"Mana Rank Interval"),(0,r.kt)("p",null,"Each peer discovered and verified via the ",(0,r.kt)("em",{parentName:"p"},"Peer Discovery")," protocol ",(0,r.kt)("em",{parentName:"p"},"shall")," have a consensus mana value associated with it. The peer running the ",(0,r.kt)("em",{parentName:"p"},"Neighbor Selection")," protocol ",(0,r.kt)("em",{parentName:"p"},"shall")," keep this information up-to-date and use it to update a data structure called ",(0,r.kt)("inlineCode",{parentName:"p"},"manaRank")," containing the list of the nodes' identities for each mana value. The aim of this ranking is to select a subset of peers having similar mana to the node preparing the ranking. More specifically, let's define ",(0,r.kt)("inlineCode",{parentName:"p"},"potentialNeighbors")," to be such a subset, that is divided into a ",(0,r.kt)("inlineCode",{parentName:"p"},"lower")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"upper")," set with respect to a ",(0,r.kt)("inlineCode",{parentName:"p"},"targetMana")," value (i.e., the mana value of the node performing the ranking). By iterating over the ",(0,r.kt)("inlineCode",{parentName:"p"},"manaRank"),", each node ",(0,r.kt)("em",{parentName:"p"},"shall")," fill both the ",(0,r.kt)("inlineCode",{parentName:"p"},"lower")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"upper")," sets with nodes' identities having a similar rank to itself, not less/greater than a given threshold ",(0,r.kt)("inlineCode",{parentName:"p"},"rho")," respectively, except when each subset does not reach the minimal size ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),"."),(0,r.kt)("p",null,"The following pseudocode describes a reference implementation of this process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Inputs: \n    manaRank: mapping between mana values and the list of nodes' identities with that mana; \n    targetMana: the mana value of the node performing the ranking;\n    rho: the ratio determining the length of the rank to consider;\n    r: the minimum number of nodes' identities to return for both lower and upper sets;\n    Largest(r, targetMana): the set of r largest cMana holders less than targetMana;\n    Smallest(r, targetMana): the set of r smallest cMana holders greater than targetMana;\n\nOutputs:\n    potentialNeighbors: the set of nodes' identities to consider for neighbor selection;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vbnet"},"FOR mana IN manaRank\n    nodeID = manaRank[mana]\n    IF mana > targetMana\n        IF mana / targetMana < rho\n            Append(upperSet, nodeID)\n    ELSE IF mana == 0 || mana == targetMana\n        BREAK\n    ELSE IF targetMana / mana < rho\n        Append(lowerSet, nodeID)\n\nIF Len(lowerSet) < r\n    // set lowerSet with the r largest mana holders less than targetMana\n    lowerSet = Largest(r, targetMana)\n    \nIF Len(upperSet) < r\n    // set upperSet with the r smallest mana holders greater than targetMana\n    upperSet = Smallest(r, targetMana)\n\npotentialNeighbors = Append(upperSet, lowerSet)\nRETURN potentialNeighbors\n\n")),(0,r.kt)("h3",{id:"selection"},"Selection"),(0,r.kt)("p",null,"The maximum number of neighbors is a parameter of the gossip protocol. This section proposes to use a size of 8 equally divided into 4 chosen (outbound) and 4 accepted (inbound) neighbors. It is crucial to decide on a fixed number of neighbors, as the constant number decreases an eclipse probability exponentially. The chosen ",(0,r.kt)("em",{parentName:"p"},"k")," is a compromise between having more connections resulting in lower performance and increased protection from an eclipse attack."),(0,r.kt)("p",null,"The operations involved during neighbor selection are listed in the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get an up-to-date list of verified and known peers from the ",(0,r.kt)("em",{parentName:"li"},"Peer Discovery")," protocol. "),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"#Mana_rank"},"mana rank")," to filter the previous list to obtain a list of peers to be potential neighbors."),(0,r.kt)("li",{parentName:"ol"},"Use the score function to request/accept neighbors.")),(0,r.kt)("p",null,"The score between two nodes is measured through the score function ",(0,r.kt)("em",{parentName:"p"},"s"),", defined by:"),(0,r.kt)("p",null,"s(nodeID1, nodeID2, salt) = hash(nodeID1 || nodeID2 || salt), where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodeID1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeID2")," are the identities of the considered nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"salt")," is the salt value that can be private or public depending on the peering direction (inbound/outbound)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash")," is the ",(0,r.kt)("inlineCode",{parentName:"li"},"blake2b")," hash function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"||")," is the concatanation operation.")),(0,r.kt)("p",null,"Note that the value used as the score is an unsigned integer derived from the first 4 bytes of the byte array after the ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," function."),(0,r.kt)("p",null,"In order to connect to new neighbors, each node with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"ownID")," and public salt ",(0,r.kt)("inlineCode",{parentName:"p"},"pubSalt")," keeps a list of potential neighbors derived via ",(0,r.kt)("a",{parentName:"p",href:"#Mana_rank"},"Mana rank")," that is sorted by their score ",(0,r.kt)("inlineCode",{parentName:"p"},"d(ownID, \xb7, pubSalt)"),". Then, the node shall send peering requests in ",(0,r.kt)("em",{parentName:"p"},"ascending order"),", containing its own current public salt and a timestamp representing the issuance time of the request.\nThe connecting node shall repeat this process until it has established connections to enough neighbors or it finds closer peers. Those neighbors make up its list of chosen neighbors. This entire process is also illustrated in the following pseudocode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Inputs: \n    k: desired amount of neighbors; \n    c: current list of chosen neighbors; \n    p: list of potential peers;\n    localID: local nodeID \n    pubSalt: local public salt;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vbnet"},"pSorted = SortByScoreAsc(P, localID, pubSalt)\nFOR p IN pSorted\n    peeringRequest = SendPeeringRequest(p)\n    IF peeringRequest.accepted \n        Append(c, p)\n        IF Len(c) == Ceil(k/2) \n            RETURN\n")),(0,r.kt)("p",null,"More specifically, after sending a peering request a node ",(0,r.kt)("em",{parentName:"p"},"shall"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wait to get a ",(0,r.kt)("em",{parentName:"li"},"Peering Response")," that could be positive or negative. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If positive, add the peer to its chosen neighbor list"),(0,r.kt)("li",{parentName:"ul"},"If negative, filter out the peer from future requests until the next salt update or the end of the list of potential neighbors is reached."),(0,r.kt)("li",{parentName:"ul"},"If after ",(0,r.kt)("inlineCode",{parentName:"li"},"responseTimeout")," no response is received, try again for a fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"maxPeeringAttempts"),". If not successful, filter out the peer from future requests until the next salt update or the end of the list of potential neighbors is reached.")))),(0,r.kt)("p",null,"Similar to the previous case, in order to accept neighbors, every node with ID ownID ",(0,r.kt)("em",{parentName:"p"},"shall")," generate a private salt ",(0,r.kt)("inlineCode",{parentName:"p"},"privSalt"),"."),(0,r.kt)("p",null,"Upon reception of a ",(0,r.kt)("em",{parentName:"p"},"Peering Request"),", a peer ",(0,r.kt)("em",{parentName:"p"},"shall")," make a decision to accept, reject or discard the request by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verifying that the signature of the ",(0,r.kt)("em",{parentName:"li"},"Peering Request")," is valid and discard the request otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," field is valid (i.e., not older than a given threshold ",(0,r.kt)("inlineCode",{parentName:"li"},"requestExpirationTime")," specified by the node) and discard the request otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the ",(0,r.kt)("em",{parentName:"li"},"mana")," of the requester peer is within the own ",(0,r.kt)("a",{parentName:"li",href:"#Mana_rank"},"Mana rank")," and send back a ",(0,r.kt)("em",{parentName:"li"},"negative")," ",(0,r.kt)("em",{parentName:"li"},"Peering Response")," otherwise;"),(0,r.kt)("li",{parentName:"ul"},"checking that the requestor salt matches its hash chain by:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"taking the difference between the timestamp of the peering request and the time the initial salt was set, and then dividing this number by ",(0,r.kt)("inlineCode",{parentName:"li"},"saltUpdateInterval"),", rounding down;"),(0,r.kt)("li",{parentName:"ul"},"hashing the requester public salt as many times as the number of salt changes;"),(0,r.kt)("li",{parentName:"ul"},"finally, if the result does not match the initial salt, discard the peering request;"))),(0,r.kt)("li",{parentName:"ul"},"applying a statistical test to the request defined as ",(0,r.kt)("em",{parentName:"li"},"s(remoteID, ownID, \u03b6_remote) < \u03b8")," for a fixed threshold \u03b8, and discard it otherwise. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this test determines the effectiveness of the brute force attack when an attacker tries to establish a connection with a desired peer;"),(0,r.kt)("li",{parentName:"ul"},"with \u03b8 set to 0.01 an attacker has only 1% of chance of being successful;"))),(0,r.kt)("li",{parentName:"ul"},"accept the peering request by sending back a ",(0,r.kt)("em",{parentName:"li"},"positive")," ",(0,r.kt)("em",{parentName:"li"},"Peering Response")," if either one of the following conditions is satisfied, and send back a ",(0,r.kt)("em",{parentName:"li"},"negative")," ",(0,r.kt)("em",{parentName:"li"},"Peering Response")," otherwise:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the current size of the accepted neighbors list is smaller than ",(0,r.kt)("em",{parentName:"li"},"Floor(k/2)"),"; "),(0,r.kt)("li",{parentName:"ul"},"the score defined as ",(0,r.kt)("em",{parentName:"li"},"s(ownID, remoteID, privSalt)")," is lower than the current highest score among accepted neighbors. In this case, send a ",(0,r.kt)("em",{parentName:"li"},"Peering Drop")," to drop the accepted neighbor with the highest score replaced by the requester peer. ")))),(0,r.kt)("h3",{id:"neighbor-removal"},"Neighbor Removal"),(0,r.kt)("p",null,"Neighbor removal can occur for several reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A node is replacing a neighbor with a better (in terms of score function) one;"),(0,r.kt)("li",{parentName:"ul"},"From the gossip layer, the connection with a neighbor is lost;"),(0,r.kt)("li",{parentName:"ul"},"If some form of reputation or bad behavior is being monitored, a neighbor could be dropped in case of misbehavior. For example, a node could respond to the peering request but choose not to gossip received messages.")),(0,r.kt)("p",null,"Independently from the reason, when a peer drops a neighbor ",(0,r.kt)("em",{parentName:"p"},"shall")," send a ",(0,r.kt)("em",{parentName:"p"},"Peering Drop")," and remove the neighbor from its requested/accepted neighbor list. Upon reception of a ",(0,r.kt)("em",{parentName:"p"},"Peering Drop"),", the peer ",(0,r.kt)("em",{parentName:"p"},"shall")," remove the dropping neighbor from its requested/accepted neighbor list."))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(u,o(o({ref:t},h),{},{components:n})):a.createElement(u,o({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28338:function(e,t,n){t.Z=n.p+"assets/files/peer_discovery-693ece6c7a10731425bbb474bea31ccf.png"},51897:function(e,t,n){t.Z=n.p+"assets/images/peer_discovery-693ece6c7a10731425bbb474bea31ccf.png"}}]);