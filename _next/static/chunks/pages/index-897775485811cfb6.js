(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1422)}])},1422:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var a,s=t(2322),r=t(7729),l=t.n(r),o=t(2784),i=t(1522),c=t(5794),d=t(4423),u=JSON.parse('{"version":"v2.3.3","name":"ShinyToken","bytecode":"0001180102020200071600b11601ab160013c3038d7ea4c68000a8","codeHash":"eb751581aa1fc6da7377f792446d49817a6627c1c41b30d1f83cb6ebb57492fa","fieldsSig":{"names":[],"types":[],"isMutable":[]},"eventsSig":[],"functions":[{"name":"transfer","usePreapprovedAssets":false,"useAssetsInContract":true,"isPublic":true,"paramNames":["to","amount"],"paramTypes":["Address","U256"],"paramIsMutable":[false,false],"returnTypes":[]}],"constants":[],"enums":[]}');class h extends d.ContractFactory{at(e){return new p(e)}constructor(...e){super(...e),this.tests={transfer:async e=>(0,d.testMethod)(this,"transfer",e)}}}let m=new h(d.Contract.fromJson(u,"","eb751581aa1fc6da7377f792446d49817a6627c1c41b30d1f83cb6ebb57492fa"));class p extends d.ContractInstance{async fetchState(){return(0,d.fetchContractState)(m,this)}constructor(e){super(e)}}var x=JSON.parse('{"version":"v2.3.3","name":"Transfer","bytecodeTemplate":"01010300000006{1}{2}0e0c{0}0100","fieldsSig":{"names":["shinyTokenId","to","amount"],"types":["ByteVec","Address","U256"],"isMutable":[false,false,false]},"functions":[{"name":"main","usePreapprovedAssets":true,"useAssetsInContract":false,"isPublic":true,"paramNames":[],"paramTypes":[],"paramIsMutable":[],"returnTypes":[]}]}');!function(e){async function n(e,n){let a=await t.txParamsForExecution(e,n);return await e.signAndSubmitExecuteScriptTx(a)}e.execute=n;var t=e.script=d.Script.fromJson(x)}(a||(a={}));let f=async e=>{let n=await (0,c.Ul)();if(!(null==n?void 0:n.explorerProvider))return console.log("Alephium explorer provider not initialized"),[];let t=[],a=await n.explorerProvider.addresses.getAddressesAddressTokens(e);for(let s of a){let a=t.find(e=>e.id===s),r=await n.explorerProvider.addresses.getAddressesAddressTokensTokenIdBalance(e,s);a?(a.balance.balance+=BigInt(r.balance),a.balance.lockedBalance+=BigInt(r.lockedBalance)):t.push({id:s,balance:{balance:BigInt(r.balance),lockedBalance:BigInt(r.lockedBalance)}})}return t},v=async e=>{let n=await (0,c.Ul)();if(!(null==n?void 0:n.explorerProvider)){console.log("Alephium explorer provider not initialized");return}let t=await n.explorerProvider.addresses.getAddressesAddressBalance(e);return t},b=async(e,n)=>{let t=await (0,c.Ul)();if(!(null==t?void 0:t.connectedAccount)||!(null==t?void 0:t.connectedNetworkId))throw Error("alephium object not initialized");return m.deploy(t,{initialFields:{},initialAttoAlphAmount:BigInt(11e17),issueTokenAmount:BigInt(e)})},g=async(e,n)=>{let t=await (0,c.Ul)();if(!(null==t?void 0:t.connectedAccount)||!(null==t?void 0:t.connectedNetworkId))throw Error("alephium object not initialized");return a.execute(t,{initialFields:{shinyTokenId:(0,d.binToHex)((0,d.contractIdFromAddress)(n)),to:t.connectedAccount.address,amount:BigInt(e)}})},j=async(e,n,t,a)=>{let s=await (0,c.Ul)();if(!(null==s?void 0:s.connectedAccount)||!(null==s?void 0:s.connectedNetworkId))throw Error("alephium object not initialized");return await s.signAndSubmitTransferTx({signerAddress:s.connectedAccount.address,destinations:[{address:n,attoAlphAmount:d.DUST_AMOUNT,tokens:[{id:e,amount:BigInt(t)}]}]})},y=async e=>{let n=await (0,c.Ul)();if(void 0!==n)return null==n?void 0:n.enableIfConnected({onDisconnected:e,networkId:"devnet"}).catch(e=>{console.error(e)})},w=async e=>{let n=await (0,c.Ul)();if(void 0!==n)return null==n?void 0:n.enable({onDisconnected:e,networkId:"devnet"}).catch(e=>{throw void console.error(e)})},A=async()=>{let e=await (0,c.Ul)();return null==e?void 0:e.disconnect()},k=()=>"http://localhost:23000",S=async(e,n)=>{let t=await (0,c.Ul)();if(!(null==t?void 0:t.connectedAccount)||!(null==t?void 0:t.connectedNetworkId))throw Error("Alephium object not initialized");return await t.signMessage({signerAddress:t.connectedAccount.address,message:e,messageHasher:n})};var _=t(719),T=t.n(_);let N=e=>{let{address:n}=e,[t,a]=(0,o.useState)("10"),[r,l]=(0,o.useState)(""),[u,h]=(0,o.useState)(""),[m,p]=(0,o.useState)(""),[x,y]=(0,o.useState)("alephium"),[w,A]=(0,o.useState)(),[_,N]=(0,o.useState)(""),[I,C]=(0,o.useState)("idle"),[P,F]=(0,o.useState)(""),[B,E]=(0,o.useState)(""),[U,H]=(0,o.useState)([]),[M,z]=(0,o.useState)(),[O,D]=(0,o.useState)(),[J,W]=(0,o.useState)(!1),[X,q]=(0,o.useState)(),[G,L]=(0,o.useState)(void 0),V=["approve","pending"].includes(I),Z=()=>{D(void 0),a("10"),W(!1)};(0,o.useEffect)(()=>{f(n).then(e=>{e.length>0&&q({value:e[0],label:e[0].id}),H(e)}),v(n).then(e=>{z(e)}),(0,c.Ul)().then(e=>{e&&L(e)})},[n]),(0,o.useEffect)(()=>{(async()=>{if(_&&"pending"===I){if(F(""),null==G?void 0:G.nodeProvider){let e;let n=0;d.web3.setCurrentNodeProvider(G.nodeProvider),e=(0,d.subscribeToTxStatus)({pollingInterval:3e3,messageCallback:async t=>{switch(t.type){case"Confirmed":console.log("Transaction ".concat(_," is confirmed")),C("success"),J&&(console.log("reset mint token"),Z()),null==e||e.unsubscribe();break;case"TxNotFound":console.log("Transaction ".concat(_," is not found")),n>3?(C("failure"),F("Transaction ".concat(_," not found")),null==e||e.unsubscribe()):await new Promise(e=>setTimeout(e,3e3)),n+=1;break;case"MemPooled":console.log("Transaction ".concat(_," is in mempool")),C("pending")}},errorCallback:(e,n)=>{console.log(e),C("failure");let t=e?"".concat(e):"No further details";return(null==e?void 0:e.response)&&(t=JSON.stringify(e.response,null,2)),F(t),n.unsubscribe(),Promise.resolve()}},_)}else throw Error("Alephium object is not initialized")}})()},[I,_,null==G?void 0:G.nodeProvider,J]);let Q="devnet",R=async e=>{e.preventDefault();try{C("approve"),console.log("mint",t);let e=await b(t,Q);console.log(e),D(e.contractInstance.address),N(e.txId),C("pending")}catch(e){console.error(e),C("idle")}},K=async e=>{try{e.preventDefault(),C("approve"),console.log("transfer",{transferTo:r,transferAmount:u});let n=await j(B,r,u,Q);console.log(n),N(n.txId),C("pending")}catch(e){console.error(e),C("idle")}},Y=async e=>{try{if(e.preventDefault(),O){C("approve"),console.log("transfer",{transferTo:r,transferAmount:u,mintedToken:O});let e=await g(t,O);N(e.txId),C("pending"),W(!0)}else throw Error("No minted token")}catch(e){console.error(e),C("idle")}},$=async e=>{try{e.preventDefault(),C("approve"),console.log("sign",m,x);let n=await S(m,x);console.log(n),A(n.signature),C("success")}catch(e){console.error(e),C("idle")}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h3",{style:{margin:0},children:["Transaction status: ",(0,s.jsx)("code",{children:I})]}),_&&(0,s.jsxs)("h3",{style:{margin:0},children:["Transaction hash:"," ",(0,s.jsx)("a",{href:"".concat(k(),"/transactions/").concat(_),target:"_blank",rel:"noreferrer",style:{color:"blue",margin:"0 0 1em"},children:(0,s.jsx)("code",{children:_})})]}),P&&(0,s.jsxs)("h3",{style:{margin:0},children:["Transaction error:"," ",(0,s.jsx)("textarea",{style:{width:"100%",height:100,background:"white"},value:P,readOnly:!0})]}),(0,s.jsxs)("h3",{style:{margin:0},children:["ALPH Balance: ",(0,s.jsxs)("code",{children:[(null==M?void 0:M.balance)&&(0,d.prettifyAttoAlphAmount)(M.balance)," ALPH"]})]}),(0,s.jsx)("h3",{style:{margin:0},children:U.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("label",{children:["Token Balances (",U.length," tokens in total)"]}),(0,s.jsxs)("div",{className:"columns",children:[(0,s.jsx)(i.ZP,{value:X,onChange:e=>{e&&q(e)},options:U.map(e=>({value:e,label:e.id}))}),(0,s.jsx)("code",{children:null==X?void 0:X.value.balance.balance.toString()})]})]}):(0,s.jsx)("div",{children:"No tokens"})}),(0,s.jsxs)("div",{className:"columns",children:[O&&(null==G?void 0:G.connectedAccount)?(0,s.jsxs)("form",{onSubmit:Y,children:[(0,s.jsx)("h2",{className:T().title,children:"Withdraw all minted token"}),(0,s.jsx)("label",{htmlFor:"token-address",children:"Token Address"}),(0,s.jsx)("p",{children:O}),(0,s.jsx)("label",{htmlFor:"transfer-to",children:"To"}),(0,s.jsx)("input",{type:"text",id:"transfer-to",name:"fname",disabled:!0,value:G.connectedAccount.address,onChange:e=>l(e.target.value)}),(0,s.jsx)("label",{htmlFor:"transfer-amount",children:"Amount"}),(0,s.jsx)("input",{type:"number",id:"transfer-amount",name:"fname",disabled:!0,value:t,onChange:e=>h(e.target.value)}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"submit",disabled:V,value:"Withdraw"})]}):(0,s.jsxs)("form",{onSubmit:R,children:[(0,s.jsx)("h2",{className:T().title,children:"Mint token"}),(0,s.jsx)("label",{htmlFor:"mint-amount",children:"Amount"}),(0,s.jsx)("input",{type:"number",id:"mint-amount",name:"fname",value:t,onChange:e=>a(e.target.value)}),(0,s.jsx)("input",{type:"submit"})]}),(0,s.jsxs)("form",{onSubmit:K,children:[(0,s.jsx)("h2",{className:T().title,children:"Transfer token"}),(0,s.jsx)("label",{htmlFor:"transfer-token-address",children:"Token Id"}),(0,s.jsx)("input",{type:"text",id:"transfer-to",name:"fname",value:B,onChange:e=>E(e.target.value)}),(0,s.jsx)("label",{htmlFor:"transfer-to",children:"To"}),(0,s.jsx)("input",{type:"text",id:"transfer-to",name:"fname",value:r,onChange:e=>l(e.target.value)}),(0,s.jsx)("label",{htmlFor:"transfer-amount",children:"Amount"}),(0,s.jsx)("input",{type:"number",id:"transfer-amount",name:"fname",value:u,onChange:e=>h(e.target.value)}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{type:"submit",disabled:V,value:"Transfer"})]})]}),(0,s.jsxs)("div",{className:"columns",children:[(0,s.jsxs)("form",{onSubmit:$,children:[(0,s.jsx)("h2",{className:T().title,children:"Sign Message"}),(0,s.jsxs)("div",{className:"columns",children:[(0,s.jsx)("label",{htmlFor:"short-text",children:"Short Text"}),(0,s.jsx)("input",{type:"text",id:"short-text",name:"short-text",value:m,onChange:e=>p(e.target.value)})]}),(0,s.jsxs)("div",{className:"columns",children:[(0,s.jsx)("label",{htmlFor:"short-text",children:"Hasher"}),(0,s.jsxs)("select",{name:"hasher",id:"hasher",onChange:e=>y(e.target.value),children:[(0,s.jsx)("option",{value:"alephium",children:"Alephium"}),(0,s.jsx)("option",{value:"sha256",children:"Sha256"}),(0,s.jsx)("option",{value:"blake2b",children:"blake2b"})]})]}),(0,s.jsx)("input",{type:"submit",value:"Sign"})]}),(0,s.jsxs)("form",{children:[(0,s.jsx)("h2",{className:T().title,children:"Sign results"}),(0,s.jsx)("label",{htmlFor:"r",children:"Signature"}),(0,s.jsx)("textarea",{className:T().textarea,id:"signature",name:"signature",value:w,readOnly:!0})]})]})]})},I=()=>{let[e,n]=(0,o.useState)(),[t,a]=(0,o.useState)(void 0),[r,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=async()=>{r||y(()=>Promise.resolve(i(!1))).then(e=>{n(null==e?void 0:e.address),a("devnet"),i(!!e)})};(async()=>{await e()})()},[r]);let c=async()=>{let e=await w(()=>Promise.resolve(i(!1)));n(null==e?void 0:e.address),a("devnet"),i(!!e)},d=async()=>{await A(),n(void 0),a(void 0),i(!1)};return(0,s.jsxs)("div",{className:T().container,children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"Alephium Test dApp"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("main",{className:T().main,children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:T().connect,onClick:d,children:"Disconnect"}),(0,s.jsxs)("h3",{style:{margin:0},children:["Wallet address: ",(0,s.jsx)("code",{children:e})]}),(0,s.jsxs)("h3",{style:{margin:0},children:["Network: ",(0,s.jsx)("code",{children:t})]}),e&&(0,s.jsx)(N,{address:e})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:T().connect,onClick:c,children:"Connect Wallet"}),(0,s.jsx)("p",{children:"First connect wallet to use dapp."})]})})]})};var C=I},719:function(e){e.exports={container:"Home_container__Ennsq",main:"Home_main__EtNt2",connect:"Home_connect__28DRU",title:"Home_title__FX7xZ",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",logo:"Home_logo__80mSr",textarea:"Home_textarea__3BgG_"}},7352:function(){},7695:function(){},3196:function(){},8087:function(){},488:function(){}},function(e){e.O(0,[934,730,774,888,179],function(){return e(e.s=7314)}),_N_E=e.O()}]);