"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[67213],{93663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return b},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),l=n(66816),i=n(71871),o=["components"],u={keywords:["functions","state","structures","storage","named fields"],description:"You can use structs directly as a type in state storage definitions and the schema tool will automatically generate the proxy code to access it properly.",image:"/img/logo/WASP_logo_dark.png"},b="Structured Data Types",c={unversionedId:"guide/schema/structs",id:"guide/schema/structs",title:"Structured Data Types",description:"You can use structs directly as a type in state storage definitions and the schema tool will automatically generate the proxy code to access it properly.",source:"@site/external/wasp/documentation/docs/guide/schema/structs.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/structs",permalink:"/smart-contracts/guide/schema/structs",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/structs.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","state","structures","storage","named fields"],description:"You can use structs directly as a type in state storage definitions and the schema tool will automatically generate the proxy code to access it properly.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Using the Schema Tool",permalink:"/smart-contracts/guide/schema/usage"},next:{title:"Type Definitions",permalink:"/smart-contracts/guide/schema/typedefs"}},m=[],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"structured-data-types"},"Structured Data Types"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/usage"},"schema tool")," allows you to define your own structured data types that are\ncomposed of the predefined WasmLib value data types. The tool will generate a struct with\nnamed fields according to the definition in the schema definition file, and also generate\ncode to serialize and deserialize the structure to a byte array, so that it can be saved\nas a single unit of data, for example in state storage."),(0,s.kt)("p",null,"You can use structs directly as a type in state storage definitions and the schema tool\nwill automatically generate the proxy code to access it properly."),(0,s.kt)("p",null,"For example, let's say you are creating a ",(0,s.kt)("inlineCode",{parentName:"p"},"betting")," smart contract. Then you would want to\nstore information for each bet. The Bet structure could consist of the bet amount and\ntime, the number of the item that was bet on, and the agent ID of the one who placed the\nbet. And you would keep track of all bets in state storage in an array of Bet structs.\nTo do so, you would insert the following into the schema definition file:"),(0,s.kt)(l.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "structs": {\n    "Bet": {\n      "amount": "Int64 // bet amount",\n      "time": "Int64 // timestamp of this bet",\n      "number": "Int32 // number of item we bet on",\n      "better": "AgentID // Who placed this bet"\n    }\n  },\n  "state": {\n    "bets": "Bet[] // all bets made in this round"\n  }\n}\n'))),(0,s.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"structs:\n  Bet:\n    amount: Int64 // bet amount\n    time: Int64 // timestamp of this bet\n    number: Int32 // number of item we bet on\n    better: AgentID // Who placed this bet\nstate:\n  bets: Bet[] // all bets made in this round\n")))),(0,s.kt)("p",null,"The schema tool will generate ",(0,s.kt)("inlineCode",{parentName:"p"},"types.xx")," which contains the following code for the Bet\nstruct:"),(0,s.kt)(l.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype Bet struct {\n    Amount int64             // bet amount\n    Better wasmlib.ScAgentID // Who placed this bet\n    Number int32             // number of item we bet on\n    Time   int64             // timestamp of this bet\n}\n\nfunc NewBetFromBytes(bytes []byte) *Bet {\n    decode := wasmlib.NewBytesDecoder(bytes)\n    data := &Bet{}\n    data.Amount = decode.Int64()\n    data.Better = decode.AgentID()\n    data.Number = decode.Int32()\n    data.Time = decode.Int64()\n    decode.Close()\n    return data\n}\n\nfunc (o *Bet) Bytes() []byte {\n    return wasmlib.NewBytesEncoder().\n        Int64(o.Amount).\n        AgentID(o.Better).\n        Int32(o.Number).\n        Int64(o.Time).\n        Data()\n}\n\ntype ImmutableBet struct {\n    objID int32\n    keyID wasmlib.Key32\n}\n\nfunc (o ImmutableBet) Exists() bool {\n    return wasmlib.Exists(o.objID, o.keyID, wasmlib.TYPE_BYTES)\n}\n\nfunc (o ImmutableBet) Value() *Bet {\n    return NewBetFromBytes(wasmlib.GetBytes(o.objID, o.keyID, wasmlib.TYPE_BYTES))\n}\n\ntype MutableBet struct {\n    objID int32\n    keyID wasmlib.Key32\n}\n\nfunc (o MutableBet) Exists() bool {\n    return wasmlib.Exists(o.objID, o.keyID, wasmlib.TYPE_BYTES)\n}\n\nfunc (o MutableBet) SetValue(value *Bet) {\n    wasmlib.SetBytes(o.objID, o.keyID, wasmlib.TYPE_BYTES, value.Bytes())\n}\n\nfunc (o MutableBet) Value() *Bet {\n    return NewBetFromBytes(wasmlib.GetBytes(o.objID, o.keyID, wasmlib.TYPE_BYTES))\n}\n'))),(0,s.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\nuse wasmlib::host::*;\n\npub struct Bet {\n    pub amount: i64,       // bet amount\n    pub better: ScAgentID, // Who placed this bet\n    pub number: i32,       // number of item we bet on\n    pub time:   i64,       // timestamp of this bet\n}\n\nimpl Bet {\n    pub fn from_bytes(bytes: &[u8]) -> Bet {\n        let mut decode = BytesDecoder::new(bytes);\n        Bet {\n            amount: decode.int64(),\n            better: decode.agent_id(),\n            number: decode.int32(),\n            time: decode.int64(),\n        }\n    }\n\n    pub fn to_bytes(&self) -> Vec<u8> {\n        let mut encode = BytesEncoder::new();\n        encode.int64(self.amount);\n        encode.agent_id(&self.better);\n        encode.int32(self.number);\n        encode.int64(self.time);\n        return encode.data();\n    }\n}\n\npub struct ImmutableBet {\n    pub(crate) obj_id: i32,\n    pub(crate) key_id: Key32,\n}\n\nimpl ImmutableBet {\n    pub fn exists(&self) -> bool {\n        exists(self.obj_id, self.key_id, TYPE_BYTES)\n    }\n\n    pub fn value(&self) -> Bet {\n        Bet::from_bytes(&get_bytes(self.obj_id, self.key_id, TYPE_BYTES))\n    }\n}\n\npub struct MutableBet {\n    pub(crate) obj_id: i32,\n    pub(crate) key_id: Key32,\n}\n\nimpl MutableBet {\n    pub fn exists(&self) -> bool {\n        exists(self.obj_id, self.key_id, TYPE_BYTES)\n    }\n\n    pub fn set_value(&self, value: &Bet) {\n        set_bytes(self.obj_id, self.key_id, TYPE_BYTES, &value.to_bytes());\n    }\n\n    pub fn value(&self) -> Bet {\n        Bet::from_bytes(&get_bytes(self.obj_id, self.key_id, TYPE_BYTES))\n    }\n}\n"))),(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib"\n\nexport class Bet {\n    amount: i64 = 0;          // bet amount\n    better: wasmlib.ScAgentID = new wasmlib.ScAgentID(); // Who placed this bet\n    number: i32 = 0;          // number of item we bet on\n    time  : i64 = 0;          // timestamp of this bet\n\n    static fromBytes(bytes: u8[]): Bet {\n        let decode = new wasmlib.BytesDecoder(bytes);\n        let data = new Bet();\n        data.amount = decode.int64();\n        data.better = decode.agentID();\n        data.number = decode.int32();\n        data.time = decode.int64();\n        decode.close();\n        return data;\n    }\n\n    bytes(): u8[] {\n        return new wasmlib.BytesEncoder().\n            int64(this.amount).\n            agentID(this.better).\n            int32(this.number).\n            int64(this.time).\n            data();\n    }\n}\n\nexport class ImmutableBet {\n    objID: i32;\n    keyID: wasmlib.Key32;\n\n    constructor(objID: i32, keyID: wasmlib.Key32) {\n        this.objID = objID;\n        this.keyID = keyID;\n    }\n\n    exists(): boolean {\n        return wasmlib.exists(this.objID, this.keyID, wasmlib.TYPE_BYTES);\n    }\n\n    value(): Bet {\n        return Bet.fromBytes(wasmlib.getBytes(this.objID, this.keyID,wasmlib. TYPE_BYTES));\n    }\n}\n\nexport class MutableBet {\n    objID: i32;\n    keyID: wasmlib.Key32;\n\n    constructor(objID: i32, keyID: wasmlib.Key32) {\n        this.objID = objID;\n        this.keyID = keyID;\n    }\n\n    exists(): boolean {\n        return wasmlib.exists(this.objID, this.keyID, wasmlib.TYPE_BYTES);\n    }\n\n    setValue(value: Bet): void {\n        wasmlib.setBytes(this.objID, this.keyID, wasmlib.TYPE_BYTES, value.bytes());\n    }\n\n    value(): Bet {\n        return Bet.fromBytes(wasmlib.getBytes(this.objID, this.keyID,wasmlib. TYPE_BYTES));\n    }\n}\n')))),(0,s.kt)("p",null,"Notice how the generated ImmutableBet and MutableBet proxies use the fromBytes() and\ntoBytes() (de)serialization code to automatically transform byte arrays into Bet structs."),(0,s.kt)("p",null,"The generated code in ",(0,s.kt)("inlineCode",{parentName:"p"},"state.xx")," that implements the state interface is shown here:"),(0,s.kt)(l.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype ArrayOfImmutableBet struct {\n    objID int32\n}\n\nfunc (a ArrayOfImmutableBet) Length() int32 {\n    return wasmlib.GetLength(a.objID)\n}\n\nfunc (a ArrayOfImmutableBet) GetBet(index int32) ImmutableBet {\n    return ImmutableBet{objID: a.objID, keyID: wasmlib.Key32(index)}\n}\n\ntype ImmutableBettingState struct {\n    id int32\n}\n\nfunc (s ImmutableBettingState) Bets() ArrayOfImmutableBet {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ArrayOfImmutableBet{objID: arrID}\n}\n\nfunc (s ImmutableBettingState) Owner() wasmlib.ScImmutableAgentID {\n    return wasmlib.NewScImmutableAgentID(s.id, idxMap[IdxStateOwner])\n}\n\ntype ArrayOfMutableBet struct {\n    objID int32\n}\n\nfunc (a ArrayOfMutableBet) Clear() {\n    wasmlib.Clear(a.objID)\n}\n\nfunc (a ArrayOfMutableBet) Length() int32 {\n    return wasmlib.GetLength(a.objID)\n}\n\nfunc (a ArrayOfMutableBet) GetBet(index int32) MutableBet {\n    return MutableBet{objID: a.objID, keyID: wasmlib.Key32(index)}\n}\n\ntype MutableBettingState struct {\n    id int32\n}\n\nfunc (s MutableBettingState) Bets() ArrayOfMutableBet {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ArrayOfMutableBet{objID: arrID}\n}\n\nfunc (s MutableBettingState) Owner() wasmlib.ScMutableAgentID {\n    return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxStateOwner])\n}\n'))),(0,s.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\nuse wasmlib::host::*;\n\nuse crate::*;\nuse crate::keys::*;\nuse crate::types::*;\n\npub struct ArrayOfImmutableBet {\n    pub(crate) obj_id: i32,\n}\n\nimpl ArrayOfImmutableBet {\n    pub fn length(&self) -> i32 {\n        get_length(self.obj_id)\n    }\n\n    pub fn get_bet(&self, index: i32) -> ImmutableBet {\n        ImmutableBet { obj_id: self.obj_id, key_id: Key32(index) }\n    }\n}\n\n#[derive(Clone, Copy)]\npub struct ImmutableBettingState {\n    pub(crate) id: i32,\n}\n\nimpl ImmutableBettingState {\n    pub fn bets(&self) -> ArrayOfImmutableBet {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_BETS), TYPE_ARRAY | TYPE_BYTES);\n        ArrayOfImmutableBet { obj_id: arr_id }\n    }\n\n    pub fn owner(&self) -> ScImmutableAgentID {\n        ScImmutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n}\n\npub struct ArrayOfMutableBet {\n    pub(crate) obj_id: i32,\n}\n\nimpl ArrayOfMutableBet {\n    pub fn clear(&self) {\n        clear(self.obj_id);\n    }\n\n    pub fn length(&self) -> i32 {\n        get_length(self.obj_id)\n    }\n\n    pub fn get_bet(&self, index: i32) -> MutableBet {\n        MutableBet { obj_id: self.obj_id, key_id: Key32(index) }\n    }\n}\n\n#[derive(Clone, Copy)]\npub struct MutableBettingState {\n    pub(crate) id: i32,\n}\n\nimpl MutableBettingState {\n    pub fn bets(&self) -> ArrayOfMutableBet {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_BETS), TYPE_ARRAY | TYPE_BYTES);\n        ArrayOfMutableBet { obj_id: arr_id }\n    }\n\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n}\n"))),(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib"\nimport * as sc from "./index";\n\nexport class ArrayOfImmutableBet {\n    objID: i32;\n\n    constructor(objID: i32) {\n        this.objID = objID;\n    }\n\n    length(): i32 {\n        return wasmlib.getLength(this.objID);\n    }\n\n    getBet(index: i32): sc.ImmutableBet {\n        return new sc.ImmutableBet(this.objID, new wasmlib.Key32(index));\n    }\n}\n\nexport class ImmutableBettingState extends wasmlib.ScMapID {\n    bets(): sc.ArrayOfImmutableBet {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ArrayOfImmutableBet(arrID)\n    }\n\n    owner(): wasmlib.ScImmutableAgentID {\n        return new wasmlib.ScImmutableAgentID(this.mapID, sc.idxMap[sc.IdxStateOwner]);\n    }\n}\n\nexport class ArrayOfMutableBet {\n    objID: i32;\n\n    constructor(objID: i32) {\n        this.objID = objID;\n    }\n\n    clear(): void {\n        wasmlib.clear(this.objID);\n    }\n\n    length(): i32 {\n        return wasmlib.getLength(this.objID);\n    }\n\n    getBet(index: i32): sc.MutableBet {\n        return new sc.MutableBet(this.objID, new wasmlib.Key32(index));\n    }\n}\n\nexport class MutableBettingState extends wasmlib.ScMapID {\n    bets(): sc.ArrayOfMutableBet {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ArrayOfMutableBet(arrID)\n    }\n\n    owner(): wasmlib.ScMutableAgentID {\n        return new wasmlib.ScMutableAgentID(this.mapID, sc.idxMap[sc.IdxStateOwner]);\n    }\n}\n')))),(0,s.kt)("p",null,"The end result is an ImmutableBettingState and MutableBettingState structure that can\ndirectly interface to the state of the betting contract."),(0,s.kt)("p",null,"In the next section we will look at how to make even more\n",(0,s.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/typedefs"},"complex type definitions"),"."))}p.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},66816:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),s=n(5730),l=n(54179);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(59137),u=n(86010),b="tabItem_1uMI";function c(e){var t,n,a,s=e.lazy,l=e.block,c=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,o.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var I=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==I&&!y.some((function(e){return e.value===I})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),w=h.tabGroupChoices,B=h.setTabGroupChoices,D=(0,r.useState)(I),T=D[0],v=D[1],k=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=w[d];null!=_&&_!==T&&y.some((function(e){return e.value===_}))&&v(_)}var j=function(e){var t=e.currentTarget,n=k.indexOf(t),a=y[n].value;a!==T&&(x(t),v(a),null!=d&&B(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=k.indexOf(e.currentTarget)+1;n=k[a]||k[0];break;case"ArrowLeft":var r=k.indexOf(e.currentTarget)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},p)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",b,{"tabs__item--active":T===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:j,onClick:j},null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return b},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,p=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(p,l(l({ref:t},b),{},{components:n})):a.createElement(p,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);