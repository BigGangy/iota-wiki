"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2011],{22790:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return h},toc:function(){return l},default:function(){return d}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=["components"],c={description:"The Realities Ledger State prevents double spending by leveraging certain properties of UTXO.",image:"/img/logo/Coordicide_Logo_Black.png",keywords:["transactions","double spending","utxo","dag","branch","unique identifier","conflict","aggregated"]},o="5.2 Ledger State",h={unversionedId:"5.2LedgerState",id:"5.2LedgerState",title:"5.2 Ledger State",description:"The Realities Ledger State prevents double spending by leveraging certain properties of UTXO.",source:"@site/external/IOTA-2.0-Research-Specifications/docs/5.2LedgerState.md",sourceDirName:".",slug:"/5.2LedgerState",permalink:"/IOTA-2.0-Research-Specifications/5.2LedgerState",editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/docusaurus/external/IOTA-2.0-Research-Specifications/docs/5.2LedgerState.md",tags:[],version:"current",frontMatter:{description:"The Realities Ledger State prevents double spending by leveraging certain properties of UTXO.",image:"/img/logo/Coordicide_Logo_Black.png",keywords:["transactions","double spending","utxo","dag","branch","unique identifier","conflict","aggregated"]},sidebar:"tutorialSidebar",previous:{title:"5.1 UTXO",permalink:"/IOTA-2.0-Research-Specifications/5.1UTXO"},next:{title:"5.3 Mana",permalink:"/IOTA-2.0-Research-Specifications/5.3Mana"}},l=[{value:"5.2.1 Introduction",id:"521-introduction",children:[],level:2},{value:"5.2.2 Dependencies",id:"522-dependencies",children:[],level:2},{value:"5.2.3 Realities Ledger State",id:"523-realities-ledger-state",children:[],level:2},{value:"5.2.4 The UTXO DAG",id:"524-the-utxo-dag",children:[{value:"5.2.4.1 Conflict sets and detection of double spends",id:"5241-conflict-sets-and-detection-of-double-spends",children:[],level:3}],level:2},{value:"5.2.5 Branches",id:"525-branches",children:[{value:"5.2.5.1 Conflict branches",id:"5251-conflict-branches",children:[],level:3},{value:"5.2.5.2 Aggregated branches",id:"5252-aggregated-branches",children:[],level:3},{value:"5.2.5.3 The branch DAG",id:"5253-the-branch-dag",children:[],level:3},{value:"5.2.5.4 Detecting conflicting branches",id:"5254-detecting-conflicting-branches",children:[],level:3},{value:"5.2.5.5 Merging of branches",id:"5255-merging-of-branches",children:[],level:3}],level:2},{value:"5.2.6 Relation to the Tangle",id:"526-relation-to-the-tangle",children:[],level:2}],p={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"52-ledger-state"},"5.2 Ledger State"),(0,i.kt)("h2",{id:"521-introduction"},"5.2.1 Introduction"),(0,i.kt)("p",null,"The introduction of a voting-based consensus requires a fast and easy way to determine a node's initial opinion for every received transaction. This includes the ability to both detect double spends and transactions that try to spend non-existing funds.\nThese conditions are fulfilled by the introduction of an Unspent Transaction Output (UTXO) model for record-keeping, which enables the validation of transactions in real time, see also the section on ",(0,i.kt)("a",{parentName:"p",href:"./5.1UTXO"},"UTXO"),"."),(0,i.kt)("p",null,"The concept of UTXO style transactions is directly linked to the creation of a directed acyclic graph (DAG), in which the vertices are transactions and the links between these are determined by the outputs and inputs of transactions. "),(0,i.kt)("p",null,"To deal with double spends and leverage on certain properties of UTXO, we introduce the Realities Ledger State. "),(0,i.kt)("h2",{id:"522-dependencies"},"5.2.2 Dependencies"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Ledger State")," depends on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UTXO: see the Section on ","[UTXO DAG]","(#5.2.4 The UTXO DAG) as well as ",(0,i.kt)("a",{parentName:"li",href:"./5.1UTXO"},"5.1 UTXO"),"."),(0,i.kt)("li",{parentName:"ul"},"Tangle: the Tangle maps the approval relations between messages as well as transactions, see ",(0,i.kt)("a",{parentName:"li",href:"./4.1TheTangle"},"4.1 The Tangle"),"."),(0,i.kt)("li",{parentName:"ul"},"Solidification: Secures that all non-conflicting transactions converge to the same ledger state, see ",(0,i.kt)("a",{parentName:"li",href:"./4.4Solidification"},"4.4 Solidification"),". ")),(0,i.kt)("h2",{id:"523-realities-ledger-state"},"5.2.3 Realities Ledger State"),(0,i.kt)("p",null,"In the Realities Ledger State, we model the different perceptions of the ledger state that exist in the Tangle. In each \u201creality\u201d on its own there are zero conflicting transactions.\nEach reality thus forms an in itself consistent UTXO sub-DAG, where every transaction references any other transaction correctly."),(0,i.kt)("p",null,"Since outputs of transactions can only be consumed once, a transaction that double spends outputs creates a persistent branch in a corresponding UTXO DAG. Each branch receives a unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"branchID"),". These branches cannot be merged by any vertices (transactions).\nA transaction that attempts to merge incompatible branches fails to pass a validity check and is marked as invalid."),(0,i.kt)("p",null,"The composition of all realities defines the Realities Ledger State. "),(0,i.kt)("p",null,"From this composition nodes are able to know which possible outcomes for the Tangle exist, where they split, how they relate to each other, if they can be merged and which messages are valid tips. All of this information can be retrieved in a fast and efficient way without having to walk the Tangle. "),(0,i.kt)("p",null,"Ultimately, for a set of competing realities, only one reality can survive. It is then up to the consensus protocol to determine which branch is part of the eventually accepted reality."),(0,i.kt)("p",null,"In total the ledger state thus involves three different layers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ","[UTXO DAG]","(#5.2.4 The UTXO DAG),"),(0,i.kt)("li",{parentName:"ul"},"its extension to the corresponding ","[branches]","(#5.2.5 Branches) and the ","[branch DAG]","(#5.2.5.3 The branch DAG),"),(0,i.kt)("li",{parentName:"ul"},"the Tangle, which maps the parent relations between messages and thus also transactions.")),(0,i.kt)("h2",{id:"524-the-utxo-dag"},"5.2.4 The UTXO DAG"),(0,i.kt)("p",null,"The UTXO DAG models the relationship between transactions, by tracking which outputs have been spent by what transaction, see also the section on ",(0,i.kt)("a",{parentName:"p",href:"./5.1UTXO"},"UTXO"),". Since outputs can only be spent once, we use this property to detect double spends. "),(0,i.kt)("p",null,"We allow for different versions of the ledger to coexist temporarily.\nThis is enabled by extending the UTXO DAG by the introduction of branches (see the following section). We can then determine which conflicting versions of the ledger state exist in the presence of conflicts.\nThus, we allow for different versions of the ledger to coexist temporarily. "),(0,i.kt)("h3",{id:"5241-conflict-sets-and-detection-of-double-spends"},"5.2.4.1 Conflict sets and detection of double spends"),(0,i.kt)("p",null,"For every output we maintain a list of consumers ",(0,i.kt)("inlineCode",{parentName:"p"},"consumerList"),", and where the consumers have the unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"consumerID"),". For a given output this list keeps track of which transactions have spent that particular output. For every spending transaction we add an element with ",(0,i.kt)("inlineCode",{parentName:"p"},"consumerID=transactionID"),".\nOutputs without consumers are considered to be unspent outputs. Transactions that consume an output that have more than one consumer are considered to be double spends. "),(0,i.kt)("p",null,"When there are more than one consumer in the consumer list we ",(0,i.kt)("em",{parentName:"p"},"shall")," create a conflict set list ",(0,i.kt)("inlineCode",{parentName:"p"},"conflictSet"),", whose elements have a unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"conflictID")," each. The ",(0,i.kt)("inlineCode",{parentName:"p"},"conflictSet")," is uniquely identified by the unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"conflictSetID"),". Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputID")," is directly and uniquely linked to the conflict set, we set ",(0,i.kt)("inlineCode",{parentName:"p"},"conflictSetID=outputID"),". For every transaction that ",(0,i.kt)("em",{parentName:"p"},"shall")," be added to the conflict set we add an element with ",(0,i.kt)("inlineCode",{parentName:"p"},"conflictID=transactionID"),"."),(0,i.kt)("h2",{id:"525-branches"},"5.2.5 Branches"),(0,i.kt)("p",null,"The UTXO model and the concept of solidification, see section ",(0,i.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/4.4Solidification"},"4.4 Solidification"),", makes all non-conflicting transactions converge to the same ledger state no matter in which order the transactions are received. Messages containing these transactions could always reference each other in the Tangle without limitations."),(0,i.kt)("p",null,"However, every double spend creates a new possible version of the ledger state that will no longer converge. Whenever a double spend is detected (see the previous section), we track the outputs created by the conflicting transactions and all the transactions that spend these outputs, by creating a container for them in the ledger which we call a branch. "),(0,i.kt)("p",null,"More specifically a container ",(0,i.kt)("inlineCode",{parentName:"p"},"branch")," ",(0,i.kt)("em",{parentName:"p"},"shall")," be created for each transaction that double spends one or several outputs, or if messages aggregate those branches.\nEvery transaction that spends directly or indirectly from a transaction that created a branch, i.e. double spent funds, is also contained in this ",(0,i.kt)("inlineCode",{parentName:"p"},"branch")," or one of its child branches.\nNote that a branch that was created by a transaction that spends multiple outputs can be part of multiple conflict sets."),(0,i.kt)("p",null,"In other words, a branch is a downward closed, conflict free collection of conflicts."),(0,i.kt)("p",null,"Every branch ",(0,i.kt)("em",{parentName:"p"},"shall")," be identified by the unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"branchID"),". We consider two kinds of branches: conflict branches and aggregated branches, which are explained in the following sections."),(0,i.kt)("h3",{id:"5251-conflict-branches"},"5.2.5.1 Conflict branches"),(0,i.kt)("p",null,"A conflict branch is created by a corresponding double spend transaction. Since the transaction identifier is unique, we choose the transaction id ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionID")," of the double spending transaction as the ",(0,i.kt)("inlineCode",{parentName:"p"},"branchID"),"."),(0,i.kt)("p",null,"Outputs inside a branch can be double spent again, recursively forming sub-branches. "),(0,i.kt)("p",null,"On solidification of a message, we ",(0,i.kt)("em",{parentName:"p"},"shall")," store the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"branchID")," together with every output, as well as the transaction metadata to enable instant lookups of this information. Thus, on solidification, a transaction can be immediately associated with a branch. "),(0,i.kt)("h3",{id:"5252-aggregated-branches"},"5.2.5.2 Aggregated branches"),(0,i.kt)("p",null,"A transaction that does not create a double spend inherits the branches of the input's branches. In the simplest case, where there is only one input branch the transaction inherits that branch.\nIf outputs from multiple non-conflicting branches are spent in the same transaction, then the transaction and its resulting outputs are part of an aggregated branch.  This type of branch is not part of any conflict set. Rather it simply combines the perception that the individual conflict branches associated to the transaction's inputs are the ones that will be accepted by the network. "),(0,i.kt)("p",null,"Furthermore, since a message inherits the branches from its parents, it also can create aggregated branches."),(0,i.kt)("p",null,"Each aggregated branch ",(0,i.kt)("em",{parentName:"p"},"shall")," have a unique identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"branchID"),", which is the same type as for conflict branches. Furthermore, the container for an aggregated branch is also of type ",(0,i.kt)("inlineCode",{parentName:"p"},"branch"),". "),(0,i.kt)("p",null,"To calculate the unique identifier of a new aggregated branch, we take the identifiers of the branches that were aggregated, sort them lexicographically and hash the concatenated identifiers once:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"# AggregatedBranchID returns the identifier for an aggregated branch.\nFUNCTION aggregatedBranchID = GetAggregatedBranchID(branchIDs)\n    sortedBranchIDs = Sort(branchIDs)\n    RETURN Hash(sortedBranchIDs)\n")),(0,i.kt)("p",null,"An aggregated branch can't aggregate other aggregated branches. However, it can aggregate the conflict branches that are part of the referenced aggregated branch.\nThus aggregated branches have no further branches as their children and they remain tips in the branch DAG. Furthermore, the sortation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"branchID"),"s in the function ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatedBranchID()")," ensures that even though messages can attach at different points in the Tangle and aggregate different aggregated branches they are treated as if they are in the same aggregated branch ",(0,i.kt)("strong",{parentName:"p"},"if")," the referenced conflict branches are the same. "),(0,i.kt)("p",null,"These properties allow for an efficient reduction of a set of branches. In the following we will require the following fields as part of the branch data: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isConflictBranch")," is a boolean flat that is ",(0,i.kt)("inlineCode",{parentName:"li"},"TRUE")," if the branch is a conflict branch or ",(0,i.kt)("inlineCode",{parentName:"li"},"FALSE")," if its an aggregated branch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parentBranches")," contains the list of parent conflict branches of the branch, i.e. the conflict branches that are directly referenced by this branch.")),(0,i.kt)("p",null,"Then the following function takes a list of branches (which can be either conflict or aggregated branches) and returns a unique set of conflict branches that these branches represent. This is done by replacing duplicates and extracting the parent conflict branches from aggregated branches. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION reducedBranches = ReduceBranches(branches)\n    FOR branch IN branches\n        IF branch.isConflictBranch\n            IF NOT (branch IN reducedBranches)\n                Append(reducedBranches,branch)\n        ELSE\n            FOR parentBranch IN branch.parentBranches\n                IF NOT (parentBranch IN reducedBranches)\n                    Append(reducedBranches,parentBranch)\n    RETURN reducedBranches\n")),(0,i.kt)("h3",{id:"5253-the-branch-dag"},"5.2.5.3 The branch DAG"),(0,i.kt)("p",null,"A new branch is created for each transaction that is part of a conflict set, or if a transaction aggregates branches."),(0,i.kt)("p",null,"In the branch DAG, branches constitute the vertices of the DAG. A branch that is created by a transaction that is spending outputs from other branches has edges pointing to those branches.\nThe branch DAG maps the UTXO DAG to a simpler structure that ignores details about relations between transactions inside the branches and instead retains only details about the interrelations of conflicts."),(0,i.kt)("p",null,"The set of all non-conflicting transactions form the master branch. Thus, at its root the branch DAG has the master branch, which consists of non-conflicting transaction and resolved transactions. From this root of the branch DAG the various branches emerge. "),(0,i.kt)("p",null,"In other words the conflict branches and the aggregated branches appear as the children of the master branch. "),(0,i.kt)("h3",{id:"5254-detecting-conflicting-branches"},"5.2.5.4 Detecting conflicting branches"),(0,i.kt)("p",null,"Branches are conflicting if they, or any of their ancestors, are part of the same conflict set."),(0,i.kt)("p",null,"The branch DAG can be used to check if branches are conflicting, by applying an operation called normalization, to a set of input branches."),(0,i.kt)("p",null,"From this information we can identify messages or transactions that are trying to combine branches belonging to conflicting double spends, and thus introduce an invalid perception of the ledger state."),(0,i.kt)("p",null,"Since branches represent the ledger state associated with a double spend and sub-branches implicitly share the perception of their parents, we define a function ",(0,i.kt)("inlineCode",{parentName:"p"},"NormalizeBranches()")," to normalize a list of branches and that gets rid of all branches that are referenced by other branches in that list. The function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," if the branches are conflicting and can not be merged."),(0,i.kt)("p",null,"In order to explain this function in pseudo code we require the following global variables "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"seenConflictSets = map[]conflictSetID"),(0,i.kt)("li",{parentName:"ul"},"traversedBranches = map[]branch"),(0,i.kt)("li",{parentName:"ul"},"parentsToCheck = map[]branch")),(0,i.kt)("p",null,"as well as a function ",(0,i.kt)("inlineCode",{parentName:"p"},"BranchCheck()")," that performs certain checks and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE")," when the branch is conflicting with a previously seen branch. However, we note that this is an implementation detail that must not match the implementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"# reduce list of branches to normalized branches, and return NULL when detecting conflicting branches\nFUNCTION normalizedBranches = NormalizeBranches(initialBranches)\n    IF Len(initialBranches) == 0\n        RETURN masterBranch\n    IF Len(initialBranches) == 1\n        RETURN initialBranches\n\n    # check original set of branches\n    normalizedBranches = ReduceBranches(initialBranches)\n    FOR branch IN normalizedBranches\n        BranchCheck(branch)\n\n    # check every ancestor\n    WHILE Len(parentsToCheck) != 0\n        branch = parentsToCheck[0]\n        Delete(parentsToCheck,branch) # delete this branch from the list\n        # remove this ancestor\n        IF branch IN normalizedBranches\n            Delete(normalizedBranches,branch)\n        # if branch check fails, i.e. a conflict set was seen twice, return a null list\n        IF BranchCheck(branch) \n            RETURN NULL\n\n    RETURN normalizedBranches\n")),(0,i.kt)("p",null,"The branch check function ",(0,i.kt)("inlineCode",{parentName:"p"},"BranchCheck()")," checks if the branch was already traversed, i.e. we have handled this branch already. Then it checks if the branch's conflict set has been already seen, which proofs that the current branch conflicts with an already traversed branch. Lastly it adds new branches to the queue of branches that should be traversed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"FUNCTION isConflicting = BranchCheck(branch)\n    # abort if branch was traversed already\n    IF branch IN traversedBranches \n        RETURN FALSE\n    ELSE \n        Append(traversedBranches,branch.ID)\n    # check if conflict set was seen twice\n    IF branch.conflictSetID IN seenConflictSets\n        RETURN TRUE\n    ELSE \n        Append(seenConflictSets,branch.conflictSetID)\n\n    # queue parents to be checked when traversing ancestors\n    FOR parentBranch IN branch.parentBranches\n        IF branch NOT IN parentsToCheck\n            Append(parentsToCheck,parentBranch)\n    RETURN FALSE\n")),(0,i.kt)("h3",{id:"5255-merging-of-branches"},"5.2.5.5 Merging of branches"),(0,i.kt)("p",null,"A branch gains approval weight when messages from (previously non-attached) ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeID"),"s attach to messages in the future cone of that branch. Once the approval weight exceeds a certain threshold we consider the branch as confirmed, see also section ",(0,i.kt)("a",{parentName:"p",href:"./6.4Finalization"},"6.4 Finality"),"."),(0,i.kt)("p",null,"However, there are two special cases of branches:"),(0,i.kt)("p",null,"First the branch that is created by the genesis transaction is called master branch and has the identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"masterBranchID"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"masterBranchID"),' is confirmed on creation and thus it is the "correct" reality by definition.\nOnce a conflict branch is confirmed, it can be merged into the master branch. Since the approval weight is monotonically increasing for branches from the past to the future, branches are only merged into the master branch.'),(0,i.kt)("p",null,"Second, a branch ",(0,i.kt)("inlineCode",{parentName:"p"},"rejectedBranch")," is created that is rejected by definition, and it has the identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"rejectedBranchID"),".\nMessages that are contained in a rejected branch or in one its child branches are booked into the ",(0,i.kt)("inlineCode",{parentName:"p"},"rejectedBranch"),"."),(0,i.kt)("h2",{id:"526-relation-to-the-tangle"},"5.2.6 Relation to the Tangle"),(0,i.kt)("p",null,"Since messages in the Tangle are dependent on the fate of the messages they approve, we ",(0,i.kt)("em",{parentName:"p"},"shall")," create dependencies between payloads, messages, and branches.  The branch ID of a message or of a transaction represents all the conflicts upon which that object depends.  Specifically, we associate a branch to a payload and to a message in the following way.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The branch of a non-value payload is always the master branch."),(0,i.kt)("li",{parentName:"ul"},"The branch of a transaction is assigned in one of two ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the transaction is a conflict, then a new branch  is created whose branchID is that transactionID.  The transaction gets assigned to this new branch."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, the transaction is assigned to the aggregated branch of all its inputs."))),(0,i.kt)("li",{parentName:"ul"},"The branch of a message is the aggregate of ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The branch of its payload"),(0,i.kt)("li",{parentName:"ul"},"The branches of each strong parent"),(0,i.kt)("li",{parentName:"ul"},"The branches of the payloads of the weak parents.")))),(0,i.kt)("p",null,"This assignments captures the essence of weak and strong parents, see ",(0,i.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/4.3TipSelectionAlgorithm"},"4.3 Tip Selection Specification"),".  Strong arrows pick up the dependencies of the whole past cone, where as the weak arrows only penetrate to the paylaod of the parent, ignoring the history of the parent.",(0,i.kt)("br",{parentName:"p"}),"\n","We that a message  ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"M")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M")))))," (resp. transaction ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"X")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"X")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"))))),") belongs to a branch ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"B")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B")))))," if the branch ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"A")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"A")))))," of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"M")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M")))))," (resp. ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"X")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"X")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"))))),") is in the branch past of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"B")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"B")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"))))),".  Thus, branches, represent certain coherent sections of the Tangle which are then ordered by inclusion.",(0,i.kt)("br",{parentName:"p"}),"\n","After a message is solidified, it and its payload are both assigned to their branch.  During this check, the message is flagged as invalid if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The payload is a transaction, and the node cannot aggregate branchIDs of the  transaction's input into a valid branchID."),(0,i.kt)("li",{parentName:"ul"},"The branchID of the message cannot be aggregated.\nIf these branchID's cannot be computed, then the message contains a pair of its history, and thus does not support a coherent view of the ledger.")))}d.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),h=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=h(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(a),m=r,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(u,s(s({ref:t},l),{},{components:a})):n.createElement(u,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var h=2;h<i;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);