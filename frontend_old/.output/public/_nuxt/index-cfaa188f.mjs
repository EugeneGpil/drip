import{a as d,o as i,b as l,e,u as a,p as E,f as A,h as M,i as k,j as p,r as I,k as T,l as $,t as b,m,w as O,v as U,q as g,c as h,s as v,x,y,z as r,A as V,B as G,C as L,D as F,E as R,F as q,G as z,H as W,I as j,J as B}from"./entry-dcb12f4d.mjs";function J(){return{getElementByQuerySelector(n){return typeof n=="string"||n instanceof String?document==null?void 0:document.querySelector(n):n}}}function N(){return{goToTopOfElement:n=>{var o;const t=(o=J().getElementByQuerySelector(n))==null?void 0:o.offsetTop;t!==void 0&&window&&window.scrollTo({top:t,behavior:"smooth"})}}}const S=n=>(E("data-v-f3fcd7cc"),n=n(),A(),n),Q={class:"menu-outer-container"},X={class:"menu-container"},K=S(()=>e("img",{class:"logo",src:M,alt:"drip calculator logo"},null,-1)),Z={class:"menu-outer-item menu-outer-item1"},ee={class:"menu-inner-item"},te=S(()=>e("img",{class:"menu-inner-item__logo",src:k,alt:"menu item logo"},null,-1)),ne=S(()=>e("span",{class:"nowrap"},"HELP THE",-1)),ae=p(" CREATOR "),se=[ne,ae],oe={class:"menu-outer-item menu-outer-item2"},ie={class:"menu-inner-item"},ce=S(()=>e("img",{class:"menu-inner-item__logo",src:k,alt:"menu item logo"},null,-1)),re=S(()=>e("span",{class:"nowrap"},[p(" ABOUT "),e("span",{class:"menu-inner-item__bigger-text"},"DRIP")],-1)),le=p(" CALCULATOR "),de=[re,le],_e={__name:"Menu",setup(n){const{goToTopOfElement:t}=N();return(o,s)=>(i(),l("div",Q,[e("section",X,[K,e("div",Z,[e("div",ee,[te,e("div",{class:"menu-inner-item__text",onClick:s[0]||(s[0]=c=>a(t)("#donation"))},se)])]),e("div",oe,[e("div",ie,[ce,e("div",{class:"menu-inner-item__text",onClick:s[1]||(s[1]=c=>a(t)("#about"))},de)])])])]))}};var ue=d(_e,[["__scopeId","data-v-f3fcd7cc"]]);const pe={class:"modal-container__content-inner-container content-inner-container"},me={__name:"Modal",emits:["close"],setup(n,{emit:t}){const o=s=>{s.target.classList.contains("modal-container")&&t("close")};return(s,c)=>(i(),l("div",{class:"modal-container",onClick:o},[e("div",pe,[I(s.$slots,"default",{},void 0,!0)])]))}};var D=d(me,[["__scopeId","data-v-213cf656"]]);const he={class:"content-main-block content-inner-container__block"},ve={class:"main-value-container"},$e={class:"main-value-underline-container"},fe=e("div",{class:"main-value-underline"},null,-1),ge={class:"main-value-currency"},w={__name:"MainInputBlock",props:{text:{type:String,required:!0},currency:{type:String,required:!0},modelValue:{type:String,required:!0},"onUpdate:modelValue":{}},emits:["input"],setup(n,{emit:t}){const o=n,s=T(!1),c=$({get:()=>o.modelValue,set:_=>t("update:modelValue",b(_))});return(_,u)=>(i(),l("div",he,[e("h2",{class:"content-main-block__headline content-main-headline content-main-headline-with-info",onClick:u[0]||(u[0]=f=>s.value=!0)},m(n.text),1),e("div",ve,[O(e("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>g(c)?c.value=f:null),ref:"input",class:"main-value-input"},null,512),[[U,a(c)]]),e("div",$e,[fe,e("div",ge,m(n.currency),1)])]),s.value?(i(),h(a(D),{key:0,onClose:u[2]||(u[2]=f=>s.value=!1)},{default:v(()=>[I(_.$slots,"default")]),_:3})):x("",!0)]))}},Ie=e("div",{class:"modal-headline"},"YOU MAY ADJUST THIS VALUE ONLY ONCE",-1),Te=e("div",{class:"modal-headline"},"IT WILL BE SAVED IN YOUR BROWSER",-1),ye={__name:"HydrationGasFee",setup(n){const t=y(),o=$({get:()=>t.hydrationGasFee,set:t.setHydrationGasFee});return(s,c)=>(i(),h(a(w),{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=_=>g(o)?o.value=_:null),text:"HYDRATION GAS FEE",currency:"BNB"},{default:v(()=>[Ie,Te]),_:1},8,["modelValue"]))}},Se=n=>(E("data-v-1676e371"),n=n(),A(),n),Ee={class:"content-pair-block"},Ae=Se(()=>e("div",{class:"main-value-underline-container"},[e("div",{class:"main-value-underline pair-value-underline"}),e("div",{class:"main-value-currency"},"USD")],-1)),xe={__name:"PairedBlock",props:{text:{type:String,required:!0},modelValue:{type:String,required:!0},"onUpdate:modelValue":{}},emits:["input"],setup(n,{emit:t}){const o=n,s=$({get:()=>o.modelValue,set:_=>t("update:modelValue",b(_))}),c=T(!1);return(_,u)=>(i(),l("div",Ee,[e("h2",{class:"content-pair-block__headline content-main-headline content-pair-block-headline content-main-headline-with-info",onClick:u[0]||(u[0]=f=>c.value=!0)},m(n.text),1),O(e("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>g(s)?s.value=f:null),class:"main-value-input content-pair-block-input"},null,512),[[U,a(s)]]),Ae,c.value?(i(),h(a(D),{key:0,onClose:u[2]||(u[2]=f=>c.value=!1)},{default:v(()=>[I(_.$slots,"default",{},void 0,!0)]),_:3})):x("",!0)]))}};var C=d(xe,[["__scopeId","data-v-1676e371"]]);const De=e("div",{class:"modal-headline"},[p(" THIS VALUE GET UPDATED FROM "),e("a",{href:"https://drip.community/fountain",target:"_blank"},"https://drip.community/fountain")],-1),be=e("div",{class:"modal-headline"},"EVERY 5 MINUTES",-1),Re=e("div",null,"BUT YOU MAY EDIT IT IF YOU WISH",-1),ke={__name:"DripPrice",setup(n){const t=y(),o=$({get:()=>t.dripRate,set:s=>t.setDripRate(s)});return(s,c)=>(i(),h(a(C),{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=_=>g(o)?o.value=_:null),text:"DRIP PRICE"},{default:v(()=>[De,be,Re]),_:1},8,["modelValue"]))}},Oe=e("div",{class:"modal-headline"},[p(" THIS VALUE GET UPDATED FROM "),e("a",{href:"https://www.coingecko.com/en/coins/bnb",target:"_blank"}," https://www.coingecko.com/en/coins/bnb ")],-1),Ue=e("div",{class:"modal-headline"},"EVERY 5 MINUTES",-1),Ve=e("div",null,"BUT YOU MAY EDIT IT IF YOU WISH",-1),Be={__name:"BnbPrice",setup(n){const t=y(),o=$({get:()=>t.bnbRate,set:s=>t.setBnbRate(b(s))});return(s,c)=>(i(),h(a(C),{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=_=>g(o)?o.value=_:null),text:"BNB PRICE"},{default:v(()=>[Oe,Ue,Ve]),_:1},8,["modelValue"]))}},Ne={class:"content-pair-block-container content-inner-container__block"},we={__name:"PairBlock",setup(n){return(t,o)=>(i(),l("div",Ne,[r(a(ke)),r(a(Be))]))}};var Ce=d(we,[["__scopeId","data-v-f7dc9d5e"]]);const He=e("div",{class:"modal-headline"},"YOU MAY ADJUST THIS VALUE ONLY ONCE",-1),Ye=e("div",{class:"modal-headline"},"IT WILL BE SAVED IN YOUR BROWSER",-1),Pe={__name:"DepositAmount",setup(n){const t=y(),o=$({get:()=>t.depositAmount,set:s=>t.setDepositAmount(s)});return(s,c)=>(i(),h(a(w),{modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=_=>g(o)?o.value=_:null),text:"DEPOSIT AMOUNT",currency:"DRIP"},{default:v(()=>[He,Ye]),_:1},8,["modelValue"]))}},Me={class:"content-main-block content-inner-container__block"},Ge={class:"main-value-container main-value-result-container"},Le={class:"value-result"},Fe={__name:"MainResultBlock",props:{value:{type:String,required:!0},title:{type:String,required:!0},isInfoVisible:{type:Boolean,required:!1,default:!1}},setup(n){const t=T(!1);return(o,s)=>(i(),l("div",Me,[e("div",Ge,[e("h2",{class:V([{"content-main-headline-with-info":n.isInfoVisible},"main-value-result-container__headline content-main-headline main-value-result-headline"]),onClick:s[0]||(s[0]=c=>t.value=n.isInfoVisible)},m(n.title),3),e("div",Le,m(n.value),1)]),t.value?(i(),h(a(D),{key:0,onClose:s[1]||(s[1]=c=>t.value=!1)},{default:v(()=>[I(o.$slots,"default",{},void 0,!0)]),_:3})):x("",!0)]))}};var H=d(Fe,[["__scopeId","data-v-fa50bf6c"]]);const qe={class:"content-outer-container"},ze={class:"content-inner-container"},We={__name:"Calculator",async setup(n){let t,o;const s=y();return[t,o]=G(()=>s.getRates()),await t,o(),L(()=>{s.getRates(),s.getDepositAmount(),s.getHydrationGasFee(),s.startUpdateRatesInterval()}),F(()=>{s.clearUpdateRatesInterval()}),(c,_)=>(i(),l("div",qe,[e("section",ze,[r(a(ye)),r(a(Ce)),r(a(Pe)),r(a(H),{value:`${a(s).amountToHydrate} DRIP`,title:"AMOUNT TO HYDRATE PROPERLY"},null,8,["value"])])]))}};var je=d(We,[["__scopeId","data-v-29bbd770"]]);const Je=e("div",{class:"modal-headline"},"INTERVAL TO HYDRATE:",-1),Qe={__name:"IntervalToHydrate",setup(n){const t=R(),o=$(()=>t.daysToHydrate),s=$(()=>t.hoursToHydrate),c=$(()=>t.minutesToHydrate);return(_,u)=>(i(),h(a(H),{value:`${a(o)}D ${a(s)}H ${a(c)}M`,isInfoVisible:!0,title:"INTERVAL TO HYDRATE"},{default:v(()=>[Je,e("div",null,m(a(o))+" DAYS",1),e("div",null,m(a(s))+" HOURS",1),e("div",null,m(a(c))+" MINUTES",1)]),_:1},8,["value"]))}},Xe={class:"additional-info-block"},Ke={class:"additional-info-value"},Ze={__name:"AdditionalInfoBlock",props:{text:{type:String,required:!0},value:{type:String,required:!0}},setup(n){const t=T(!1);return(o,s)=>(i(),l("div",Xe,[e("h3",{class:"additional-info-text content-main-headline-with-info",onClick:s[0]||(s[0]=c=>t.value=!0)},m(n.text),1),e("div",Ke,m(n.value),1),t.value?(i(),h(a(D),{key:0,onClose:s[1]||(s[1]=c=>t.value=!1)},{default:v(()=>[I(o.$slots,"default",{},void 0,!0)]),_:3})):x("",!0)]))}};var Y=d(Ze,[["__scopeId","data-v-57e23bd4"]]);const et=e("div",{class:"modal-headline"},"SAVED BY NOT HYDRATING DAILY",-1),tt=e("div",{class:"modal-headline"},"DURING THE ABOVE MENTIONED TIMESPAN,",-1),nt=e("div",{class:"modal-headline"},"THAT COULD BE USED TO BUY AND DEPOSIT MORE DRIP",-1),at=e("div",{class:"modal-headline"},"(DEPOSIT TEX ALREADY SUBTRACTED)",-1),st=e("div",null,"IN USD",-1),ot={__name:"SavedInUsd",setup(n){const t=R();return(o,s)=>(i(),h(a(Y),{value:`$ ${a(t).savedInUsd}`,text:"saved in usd"},{default:v(()=>[et,tt,nt,at,st]),_:1},8,["value"]))}},it=e("div",{class:"modal-headline"},"SAVED BY NOT HYDRATING DAILY",-1),ct=e("div",{class:"modal-headline"},"CONSIDERING TAXES AND GAS FEES FOR DEPOSITING DRIP",-1),rt=e("div",{class:"modal-headline"},"(BUT NOT CONSIDERING GAS FEES FOR SWAPPING)",-1),lt=e("div",null,"IN DRIP",-1),dt={__name:"SavedInDrip",setup(n){const t=R();return(o,s)=>(i(),h(a(Y),{value:`${a(t).savedInDrip} DRIP`,text:"saved in drip"},{default:v(()=>[it,ct,rt,lt]),_:1},8,["value"]))}},_t={class:"content-outer-container"},ut={class:"content-inner-container"},pt={class:"additional-info-container"},mt={__name:"IntervalAndSavings",setup(n){return(t,o)=>(i(),l("div",_t,[e("section",ut,[r(a(Qe)),e("div",pt,[r(a(ot)),r(a(dt))])])]))}};var ht=d(mt,[["__scopeId","data-v-1730d546"]]);const vt={},$t={id:"about",class:"content-outer-container"},ft=e("section",{class:"content-inner-container"},[e("div",{class:"text-container"},[e("h1",{class:"the-main-headline content-main-headline"},"DRIP HYDRATE CALCULATOR"),e("p",{class:"text-container__paragraph paragraph"}," This calculator was created to help you calculate the most effective hydration interval to gain as much interest as possible without waisting money on gas fees ")])],-1),gt=[ft];function It(n,t){return i(),l("div",$t,gt)}var Tt=d(vt,[["render",It]]);const yt=n=>(E("data-v-584ccc79"),n=n(),A(),n),St=yt(()=>e("img",{class:"go-up-small-logo",src:z,alt:"small_logo"},null,-1)),Et={__name:"GoUp",setup(n){const{goToTopOfElement:t}=N();return(o,s)=>{const c=q("FontAwesomeIcon");return i(),l("div",{class:"go-up-arrow-container",onClick:s[0]||(s[0]=_=>a(t)("body"))},[r(c,{class:"go-up-arrow",icon:"arrow-up-long"}),St])}}};var At=d(Et,[["__scopeId","data-v-584ccc79"]]);const xt={},Dt={class:"second-headline content-main-headline text-container__headline"};function bt(n,t){return i(),l("h2",Dt," DONATION ")}var Rt=d(xt,[["render",bt]]);const kt={},Ot={class:"text-container__paragraph paragraph"};function Ut(n,t){return i(),l("p",Ot," Send me some BNB(BEP20) ")}var Vt=d(kt,[["render",Ut]]);const Bt={},Nt={class:"text-container__paragraph paragraph"};function wt(n,t){return i(),l("p",Nt," Also use this wallet as buddy address. 50% of referral rewards will be airdropped ")}var Ct=d(Bt,[["render",wt]]);const Ht={},P=n=>(E("data-v-22246394"),n=n(),A(),n),Yt={class:"contacts-container"},Pt=P(()=>e("a",{target:"_blank",href:"https://t.me/EfimovEv"},[e("img",{class:"contact-link-img",src:W,alt:"telegram_logo"})],-1)),Mt=P(()=>e("a",{target:"_blank",href:"https://github.com/EugeneGpil/drip"},[e("img",{class:"contact-link-img",src:j,alt:"github_logo"})],-1)),Gt=[Pt,Mt];function Lt(n,t){return i(),l("div",Yt,Gt)}var Ft=d(Ht,[["render",Lt],["__scopeId","data-v-22246394"]]);const qt={class:"data-line-outer-container"},zt={class:"data-line-inner-container"},Wt={class:"data-line-inner-container__data-line data-line"},jt={__name:"Wallet",setup(n){const{wallet:t}=B();return(o,s)=>(i(),l("div",qt,[e("div",zt,[e("div",Wt,m(a(t)),1)])]))}};var Jt=d(jt,[["__scopeId","data-v-5fd894c4"]]);const Qt={class:"data-copy-container-1 data-field-container__data-copy-container-1"},Xt={class:"data-copy-text"},Kt={__name:"CopyButton",setup(n){const t=T(!1),{wallet:o}=B(),s=()=>{navigator.clipboard.writeText(o),t.value=!0,setTimeout(()=>{t.value=!1},1e3)};return(c,_)=>(i(),l("div",Qt,[e("div",{class:"data-copy-container-2",onClick:s},[e("div",{class:V([{"data-copy-container-3_copying":t.value},"data-copy-container-3"])},[e("div",Xt,m(t.value?"OK":"copy"),1)],2)])]))}};var Zt=d(Kt,[["__scopeId","data-v-02be7c46"]]);const en={id:"donation",class:"content-outer-container"},tn={class:"content-inner-container"},nn={class:"text-container"},an={class:"data-field-container"},sn={__name:"Donation",setup(n){return(t,o)=>(i(),l("div",en,[e("section",tn,[e("div",nn,[r(a(Rt)),r(a(Vt)),e("div",an,[r(a(Zt)),r(a(Jt))]),r(a(Ct))])]),r(a(Ft))]))}};var on=d(sn,[["__scopeId","data-v-0203063b"]]);const cn={},rn=e("p",{class:"text-container__paragraph paragraph"},[p(" Adjust "),e("span",{class:"emphasized"},'"Hydration gas fee"')],-1),ln=e("p",{class:"text-container__paragraph paragraph"},[e("a",{target:"_blank",href:"https://cryptozoa.com/drip-save-gas-fees-in-metamask-8e24c563b536"}," There is helpful article about it ")],-1),dn=[rn,ln];function _n(n,t){return i(),l("div",null,dn)}var un=d(cn,[["render",_n]]);const pn={},mn={class:"text-container__paragraph paragraph"},hn=p(" Enter your "),vn=e("span",{class:"emphasized"},'"Deposit amount"',-1),$n=p(" in drip "),fn=[hn,vn,$n];function gn(n,t){return i(),l("p",mn,fn)}var In=d(pn,[["render",gn]]);const Tn={},yn={class:"text-container__paragraph paragraph"},Sn=p(" And that's all. You are ready to go! Check out "),En=e("span",{class:"emphasized"},'"Amount to hydrate properly"',-1),An=p(" and "),xn=e("span",{class:"emphasized"},'"Interval to hydrate"',-1),Dn=[Sn,En,An,xn];function bn(n,t){return i(),l("p",yn,Dn)}var Rn=d(Tn,[["render",bn]]);const kn={},On={class:"text-container__paragraph paragraph"},Un=e("span",{class:"emphasized"},'"Hydration gas fee"',-1),Vn=p(" and "),Bn=e("span",{class:"emphasized"},'"Deposit amount"',-1),Nn=p(" will be saved in your browser. No need to enter it every time "),wn=[Un,Vn,Bn,Nn];function Cn(n,t){return i(),l("p",On,wn)}var Hn=d(kn,[["render",Cn]]);const Yn={},Pn={class:"text-container__paragraph paragraph"},Mn=e("span",{class:"emphasized"},'"Drip price"',-1),Gn=p(" and "),Ln=e("span",{class:"emphasized"},'"BNB price"',-1),Fn=p(" are get updated every 5 minutes. No need to adjust it. But if you want you free to enter your values "),qn=[Mn,Gn,Ln,Fn];function zn(n,t){return i(),l("p",Pn,qn)}var Wn=d(Yn,[["render",zn]]);const jn={},Jn={class:"text-container__paragraph paragraph"};function Qn(n,t){return i(),l("p",Jn," happy DRIPping! ")}var Xn=d(jn,[["render",Qn]]);const Kn={},Zn={class:"second-headline content-main-headline text-container__headline"};function ea(n,t){return i(),l("h2",Zn," INSTRUCTION ")}var ta=d(Kn,[["render",ea]]);const na={class:"content-outer-container"},aa={class:"content-inner-container"},sa={class:"text-container"},oa={__name:"Instruction",setup(n){return(t,o)=>(i(),l("div",na,[e("div",aa,[e("div",sa,[r(a(ta)),r(a(In)),r(a(un)),r(a(Rn)),r(a(Hn)),r(a(Wn)),r(a(Xn))])])]))}},ia={class:"outer-wrapper"},ca={class:"content-wrapper"},ra={__name:"index",setup(n){return(t,o)=>(i(),l("div",ia,[e("div",ca,[r(a(ue)),r(a(je)),r(a(ht)),r(a(Tt)),r(a(oa)),r(a(on)),r(a(At))])]))}};var da=d(ra,[["__scopeId","data-v-6ef0a294"]]);export{da as default};
