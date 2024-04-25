(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,a,t){e.exports={card:"Search_card__1GlJ5",cardBorder:"Search_cardBorder__2ZZa8",information:"Search_information__27EoH",addMargin:"Search_addMargin__3NQ26",centerGrid:"Search_centerGrid__2yNlI",root:"Search_root__1IfTG",submit:"Search_submit__fJLIE",backdrop:"Search_backdrop__3JRdh",form:"Search_form__2CVfX"}},15:function(e,a,t){e.exports={toolbar:"PageTemplate_toolbar__6Snp7",toolbarIcon:"PageTemplate_toolbarIcon__3JgX3",root:"PageTemplate_root__18hz2",menuButton:"PageTemplate_menuButton__2ccr-",container:"PageTemplate_container__2RJ1i",backdrop:"PageTemplate_backdrop__2jOPu",form:"PageTemplate_form__89VH8",title:"PageTemplate_title__3x5UC",content:"PageTemplate_content__Tpjp8",reset:"PageTemplate_reset__2Jp4p",confirm:"PageTemplate_confirm__39LGf"}},152:function(e,a,t){e.exports=t(277)},277:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),o=t(52),i=t(14),s=t(316),m=t(319),u=t(346),d=t(320),p=t(321),E=t(40),g=t(345),h=t(324),b=t(325),v=t(326),k=Object(n.createContext)(null),f=t(13),y=t.n(f),S=t(35),x=t.n(S);t(173);var C=()=>{const e=Object(i.f)(),{setUserData:a}=Object(n.useContext)(k),[t,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(""),[f,S]=Object(n.useState)(""),[C,N]=Object(n.useState)(),[j,_]=Object(n.useState)(""),[O,w]=Object(n.useState)("");return"LOADING"===C?r.a.createElement(r.a.Fragment,null," Loading ... "):r.a.createElement("div",{className:x.a.background},r.a.createElement(s.a,null),r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(u.a,{width:"70vh",boxShadow:1},r.a.createElement(d.a,{className:x.a.paper},r.a.createElement(p.a,null,r.a.createElement(E.a,{component:"h1",variant:"h5"}," ","Login"," "),r.a.createElement("form",{className:x.a.form,onSubmit:async t=>{t.preventDefault(),c(!0);const n={username:l,password:f},r=await y.a.post("/api/auth/login",n);"fail"===r.data.status?(c(!1),_(r.data.message),w(r.data.message)):(a(r.data),localStorage.setItem("auth-token",r.data.token),e.push("/"))}},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",error:j.length>0,helperText:j,value:l,onChange:e=>{const a=e.target.value;o(a)}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:O.length>0,helperText:O,value:f,onChange:e=>{const a=e.target.value;S(a)}}),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},t?r.a.createElement(b.a,null):r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:x.a.submit},"Login")),r.a.createElement(h.a,{style:{padding:"2%",color:"azure",fontVariant:"ruby",backgroundColor:"red",width:"100%",margin:"-1% 0% 3%",fontSize:"101%"},variant:"contained",color:"primary",fullWidth:!0,onClick:()=>{o("guest123"),S("123456")}},"Get Guest User Credentials"),r.a.createElement("br",null)),r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(v.a,{href:"/register",variant:"body2"}," ","Need an account?"," "))))))))};var N=()=>{const e=Object(i.f)(),[a,t]=Object(n.useState)(!1),[c,l]=Object(n.useState)(""),[o,k]=Object(n.useState)(""),[f,S]=Object(n.useState)(""),[C,N]=Object(n.useState)("");return r.a.createElement("div",{className:x.a.background},r.a.createElement(s.a,null),r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(u.a,{width:"70vh",boxShadow:1},r.a.createElement(d.a,{className:x.a.paper},r.a.createElement(p.a,null,r.a.createElement(E.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:x.a.form,onSubmit:async a=>{if(a.preventDefault(),t(!0),!o&&!C){const a={username:c,password:f},n="/api/auth/register",r=await y.a.post(n,a);"7"!==r.length&&"fail"===r.data.status?(t(!1),r.data.type?"username"===r.data.type?k(r.data.message):"password"===r.data.type&&N(r.data.message):(N(r.data.message),k(r.data.message))):e.push("/login")}t(!1)}},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",error:o.length>0,helperText:o,value:c,onChange:e=>{const a=e.target.value;l(a),a.length<4||a.length>15?k("Username must be between 4 and 15 characters."):k("")}}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:C.length>0,helperText:C,value:f,onChange:e=>{const a=e.target.value;S(a),a.length<6||a.length>20?N("Password must be between 6 and 20 characters."):N("")}}),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},a?r.a.createElement(b.a,null):r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:x.a.submit},"Register"))),r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement(v.a,{href:"/login",variant:"body2"}," Already have an account? "))))))))},j=t(15),_=t.n(j),O=t(3),w=t(342),P=t(343),D=t(332),I=t(349),B=t(344),M=t(323),A=t(137),T=t.n(A),L=t(138),q=t.n(L),G=t(338),U=t(327),H=t(328),W=t(329),J=t(130),$=t.n(J),R=t(131),V=t.n(R),z=t(132),F=t.n(z);var X=e=>{let{currentPage:a,setCurrentPage:t}=e;return r.a.createElement("div",null,r.a.createElement(U.a,{button:!0,selected:"dashboard"===a,onClick:e=>{e.preventDefault(),t("dashboard")}},r.a.createElement(H.a,null,"     ",r.a.createElement($.a,null),"   "),r.a.createElement(W.a,{primary:"Dashboard"})),r.a.createElement(U.a,{button:!0,selected:"search"===a,onClick:e=>{e.preventDefault(),t("search")}},r.a.createElement(H.a,null,r.a.createElement(V.a,null)),r.a.createElement(W.a,{primary:"Search"})),r.a.createElement(U.a,{button:!0,selected:"news"===a,onClick:e=>{e.preventDefault(),t("news")}},r.a.createElement(H.a,null,r.a.createElement(F.a,null)),r.a.createElement(W.a,{primary:"Market News"})))},Z=t(133),Q=t.n(Z),Y=t(134),K=t.n(Y);var ee=e=>{let{logout:a,openSettings:t}=e;return r.a.createElement("div",null,r.a.createElement(U.a,{button:!0,onClick:t},r.a.createElement(H.a,null,r.a.createElement(Q.a,null)),r.a.createElement(W.a,{primary:"Settings"})),r.a.createElement(U.a,{button:!0,onClick:a},r.a.createElement(H.a,null,r.a.createElement(K.a,null)),r.a.createElement(W.a,{primary:"Log Out"})))},ae=t(330),te=t(140);var ne=e=>r.a.createElement(E.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children),re=t(77);var ce=e=>{let{pastDataPeriod:a,stockInfo:t,duration:n}=e;return a.length>0?r.a.createElement(re.Line,{data:{labels:a.map((e,a)=>{let{date:t}=e;return(e=>{var a=new Date(e),t=""+(a.getMonth()+1),n=""+a.getDate();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[t,n].join("-")})(t)}),datasets:[{data:a.map(e=>{let{adjClose:a}=e;return a}),label:"Price",borderColor:"rgba(0, 0, 255, 0.5)",fill:!0,backgroundColor:"rgba(116, 185, 255, 0.2)"}]},options:{maintainAspectRatio:!1,elements:{point:{radius:2}},legend:{display:!1},layout:{padding:{left:20,right:20,top:15,bottom:0}},title:{display:!0,text:"Stock price of ".concat(t.ticker," over the past ").concat(n),position:"bottom"},animation:{duration:2e3}}}):null};var le=()=>{const[e,a]=Object(n.useState)(void 0);return Object(n.useEffect)(()=>{(async()=>{const e=await y.a.get("/api/data/random");"success"===e.data.status&&a(e.data)})()},[]),r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",{style:{minHeight:"240px"}},r.a.createElement(ne,null,"Explore ",e.name,"'s Stock Chart"),r.a.createElement(ce,{pastDataPeriod:e.data,stockInfo:{ticker:e.ticker},duration:"3 years"})))},oe=t(29),ie=t.n(oe);var se=e=>{let{purchasedStocks:a}=e;const{userData:t}=Object(n.useContext)(k),[c,l]=Object(n.useState)(0);return Object(n.useEffect)(()=>{l((()=>{let e=0;return a.forEach(a=>{e+=Number(a.currentPrice)*Number(a.quantity)}),Math.round(100*(e+Number.EPSILON))/100})())},[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null,"Current Balance"),r.a.createElement("br",null),r.a.createElement("div",{className:ie.a.depositContext},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Cash Balance:"),r.a.createElement(E.a,{component:"p",variant:"h6",align:"center"},"$",t?t.user.balance.toLocaleString():"$---"),r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Portfolio Balance:"),r.a.createElement(E.a,{component:"p",variant:"h6",align:"center",gutterBottom:!0},"$",c.toLocaleString()),r.a.createElement("div",{className:ie.a.addMargin},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Total:"),r.a.createElement(E.a,{component:"p",variant:"h4",align:"center",className:Number(t.user.balance+c)>=1e5?ie.a.positive:ie.a.negative},"$",t?(t.user.balance+c).toLocaleString():"---"))),r.a.createElement("div",null,r.a.createElement(E.a,{color:"textSecondary",align:"center"},(new Date).toDateString())))},me=t(333),ue=t(337),de=t(336),pe=t(334),Ee=t(335),ge=t(331),he=t(39),be=t(57),ve=t.n(be);const ke=e=>{let{setStart:a,stock:t}=e;const{userData:c}=Object(n.useContext)(k),[l,o]=Object(n.useState)(1);return r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(u.a,{width:"60vh",boxShadow:1},r.a.createElement(d.a,null,r.a.createElement(ge.a,{action:r.a.createElement(D.a,{"aria-label":"Close",onClick:()=>{a(!1)}},r.a.createElement(ve.a,null))}),r.a.createElement(p.a,null,r.a.createElement(E.a,{component:"h1",variant:"h6",align:"center"},"Sell"),r.a.createElement("form",{className:_.a.form,onSubmit:e=>e.preventDefault()},r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"name",label:"Name",name:"Name",autoComplete:"Name",value:t.name}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"price",label:"Price",name:"price",autoComplete:"price",value:t.currentPrice}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",name:"quantity",autoComplete:"quantity",value:l,onChange:e=>{!isNaN(e.target.value)&&Number(e.target.value)<=t.quantity&&o(e.target.value)}})),r.a.createElement("br",null),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:_.a.confirm,onClick:async e=>{e.preventDefault();const n={"x-auth-token":c.token},r={stockId:t.id,quantity:Number(l),userId:c.user.id,price:Number(t.currentPrice)};console.log(r);const o=await y.a.patch("/api/stock",r,{headers:n});console.log("ok"+o),"success"===o.data.status&&a(!1)}},"Confirm")),r.a.createElement("br",null),r.a.createElement("br",null)))))};var fe=e=>{let{setStart:a,stock:t}=e;return r.a.createElement(he.a.div,{className:_.a.backdrop,initial:{opacity:0},animate:{opacity:1},id:"backdrop"},r.a.createElement(ae.a,null,r.a.createElement(he.a.div,{animate:{opacity:1,y:-20}},r.a.createElement(ke,{setStart:a,stock:t}))))};var ye=e=>{let{purchasedStocks:a}=e;const[t,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(void 0),i=e=>Math.round(100*(e+Number.EPSILON))/100;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{minHeight:"200px"}},r.a.createElement(ne,null,"Stocks in Your Portfolio"),r.a.createElement(me.a,{size:"small"},r.a.createElement(pe.a,null,r.a.createElement(Ee.a,null,r.a.createElement(de.a,null,"Company Ticker"),r.a.createElement(de.a,null,"Name"),r.a.createElement(de.a,null,"Quantity"),r.a.createElement(de.a,null,"Price of Purchase"),r.a.createElement(de.a,null,"Purchase Total"),r.a.createElement(de.a,{align:"right"},"Current Price"),r.a.createElement(de.a,{align:"right"},"Current Total"),r.a.createElement(de.a,{align:"right"},"Difference"))),r.a.createElement(ue.a,null,a.map(e=>{const a=(e.currentPrice-e.purchasePrice)/e.currentPrice,t=Number(e.quantity)*Number(e.purchasePrice),n=Number(e.quantity)*Number(e.currentPrice);return r.a.createElement(Ee.a,{key:e.id},r.a.createElement(de.a,null,r.a.createElement(v.a,{onClick:()=>(e=>{console.log(e),o(e),c(!0)})(e)}," ",e.ticker," ")),r.a.createElement(de.a,null," ",e.name||"----"," "),r.a.createElement(de.a,null,e.quantity||"----"),r.a.createElement(de.a,{align:"right"}," $",e.purchasePrice.toLocaleString()||"----"," "),r.a.createElement(de.a,{align:"right"}," $",i(t).toLocaleString()||"----"," "),r.a.createElement(de.a,{align:"right",className:e.currentPrice>=e.purchasePrice?ie.a.positive:ie.a.negative},"$",e.currentPrice.toLocaleString()||"----"),r.a.createElement(de.a,{align:"right",className:n>=t?ie.a.positive:ie.a.negative},"$",i(n).toLocaleString()||"----"),r.a.createElement(de.a,{align:"right",className:a>=0?ie.a.positive:ie.a.negative},a>=0?"\u25b2":"\u25bc"," "," ",Math.abs(100*a).toFixed(2),"%"))}))),t&&l&&r.a.createElement(fe,{setStart:c,stock:l})))};const Se=Object(G.a)(e=>({paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350}}));var xe=e=>{let{purchasedStocks:a}=e;const t=Se(),n=Object(O.a)(t.paper,t.fixedHeight);return r.a.createElement(ae.a,{maxWidth:"lg",className:_.a.container},r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(te.a,{className:n},r.a.createElement(le,null))),r.a.createElement(m.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(te.a,{className:n},r.a.createElement(se,{purchasedStocks:a}))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(te.a,{className:t.paper},r.a.createElement(ye,{purchasedStocks:a})))))},Ce=t(340),Ne=t(339),je=t(135);const _e=Object(G.a)(e=>({appBarSpacer:e.mixins.toolbar,icon:{marginRight:e.spacing(2)},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},card:{height:"100%",display:"flex",flexDirection:"column"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}})),Oe=()=>r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(m.a,{container:!0,spacing:4},Array.from(new Array(9)).map((e,a)=>r.a.createElement(m.a,{item:!0,key:a,xs:12,sm:6,md:4},r.a.createElement(u.a,{key:a,width:210,marginRight:.5},r.a.createElement(Ne.a,{variant:"rect",width:300,height:200}),r.a.createElement(u.a,{pt:.5},r.a.createElement(Ne.a,null),r.a.createElement(Ne.a,{width:"60%"})))))));function we(){const e=_e(),[a,t]=Object(n.useState)([]),[c,l]=Object(n.useState)(!0),o=async()=>{if(a.length>=30)return void l(!1);const e=Math.floor(a.length/6)+1,n="/api/news/".concat(e);try{const e=await y.a.get(n);if(0===e.data.data.length)return void l(!1);t(a.concat(e.data.data))}catch(r){l(!1),console.error(r)}};return Object(n.useEffect)(()=>{o()},[]),r.a.createElement(ae.a,{className:e.cardGrid},r.a.createElement(je.a,{dataLength:null===a||void 0===a?void 0:a.length,next:o,hasMore:c,loader:r.a.createElement(Oe,null),height:600,endMessage:r.a.createElement("h4",{style:{textAlign:"center"}},r.a.createElement("b",null,"Thats all for today, Please Come tomorrow to read more news"))},r.a.createElement(m.a,{container:!0,spacing:4},null===a||void 0===a?void 0:a.map(a=>r.a.createElement(m.a,{item:!0,key:null===a||void 0===a?void 0:a.headline,xs:12,sm:6,md:4},r.a.createElement(d.a,{className:null===e||void 0===e?void 0:e.card},r.a.createElement(v.a,{href:null===a||void 0===a?void 0:a.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Ce.a,{className:e.cardMedia,image:null===a||void 0===a?void 0:a.image,title:null===a||void 0===a?void 0:a.headline})),r.a.createElement(p.a,{className:null===e||void 0===e?void 0:e.cardContent},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",component:"h4"},null===a||void 0===a?void 0:a.headline))))))))}var Pe=t(341),De=t(347);var Ie=e=>{let{sixMonthAverages:a,stockInfo:t}=e;const n=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];return a?r.a.createElement(re.Bar,{data:{labels:a.map(e=>{let{month:a}=e;return n[a]}),datasets:[{label:"Price",backgroundColor:"rgba(0, 0, 255, 0.3)",data:a.map(e=>{let{value:a}=e;return a})}]},options:{maintainAspectRatio:!1,title:{display:!0,text:"Average closing price per month of ".concat(t.ticker," over the past 6 months"),position:"bottom"},layout:{padding:{left:10,right:10,top:15,bottom:0}},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},animation:{duration:2e3}}}):null},Be=t(10),Me=t.n(Be);const Ae=e=>{let{text:a}=e;return r.a.createElement(E.a,{variant:"body1",color:"inherit",align:"center",display:"block"},a)},Te=e=>{let{text:a}=e;return r.a.createElement(E.a,{variant:"body2",color:"inherit",align:"center",display:"block"},a)};var Le=e=>{let{stockInfo:a,price:t}=e;return r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:12,component:d.a,className:Object(O.a)(Me.a.card,Me.a.cardBorder)},r.a.createElement(p.a,null,r.a.createElement(ne,null,a.name),r.a.createElement(E.a,{variant:"body2"},a.description),r.a.createElement(m.a,{container:!0,spacing:3,className:Me.a.addMargin},r.a.createElement(m.a,{item:!0,sm:3,xs:4,className:Me.a.centerGrid},r.a.createElement("div",{className:Me.a.information},r.a.createElement(Ae,{text:"Stock Symbol:"}),r.a.createElement(Te,{text:a.ticker}))),r.a.createElement(m.a,{item:!0,sm:3,xs:4,className:Me.a.centerGrid},r.a.createElement("div",{className:Me.a.information},r.a.createElement(Ae,{text:"Current Price:"}),r.a.createElement(Te,{text:t}))),r.a.createElement(m.a,{item:!0,sm:3,xs:4,className:Me.a.centerGrid},r.a.createElement("div",{className:Me.a.information},r.a.createElement(Ae,{text:"Exchange:"}),r.a.createElement(Te,{text:a.exchangeCode})))))))};var qe=e=>{let{pastDay:a}=e;return r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:!0,sm:!0,component:d.a,className:Me.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Opening:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjOpen)),r.a.createElement(m.a,{item:!0,xs:!0,sm:!0,component:d.a,className:Me.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"High:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjHigh)),r.a.createElement(m.a,{item:!0,xs:!0,sm:!0,component:d.a,className:Me.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Low:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjLow)),r.a.createElement(m.a,{item:!0,xs:!0,sm:!0,component:d.a,className:Me.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Closing:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjClose)))};var Ge=e=>{let{setSelected:a,balance:t}=e;return r.a.createElement(m.a,{item:!0,xs:12,sm:!0,component:d.a,className:Me.a.card},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{color:"textSecondary",align:"center",className:Me.a.addMargin},"Your Cash Balance:"),r.a.createElement(E.a,{variant:"h6",align:"center"},t?"$"+t.toLocaleString():"Balance Unavailable"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"body2",align:"center",className:Me.a.addMargin},"You have sufficient funds to buy this stock."),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:Me.a.submit,onClick:()=>a(!0)},"Open Purchase System")))};const Ue=e=>{let{setSelected:a,stockInfo:t,pastDay:c,setPurchasedStocks:l,purchasedStocks:o}=e;const{userData:i,setUserData:s}=Object(n.useContext)(k),[b,v]=Object(n.useState)(1),[f,S]=Object(n.useState)(Number(c.adjClose));return r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(u.a,{width:"60vh",boxShadow:1},r.a.createElement(d.a,{className:Me.a.paper},r.a.createElement(ge.a,{action:r.a.createElement(D.a,{"aria-label":"Close",onClick:e=>{a(!1)}},r.a.createElement(ve.a,null))}),r.a.createElement(p.a,null,r.a.createElement(E.a,{component:"h1",variant:"h6",align:"center"},"Purchase ",t.name," Stock"),r.a.createElement("form",{className:Me.a.form,onSubmit:e=>e.preventDefault()},r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"stock",label:"Stock Name",name:"stock",autoComplete:"stock",value:t.name}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"price",label:"Stock Price",name:"price",autoComplete:"price",value:c.adjClose}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",name:"quantity",autoComplete:"quantity",value:b,onChange:e=>{if(!isNaN(e.target.value)){if(i.user.balance-Number(c.adjClose)*Number(e.target.value)<0)return;v(e.target.value),S(Math.round(100*(Number(c.adjClose)*Number(e.target.value)+Number.EPSILON))/100)}}}),r.a.createElement(E.a,{variant:"body2",align:"center",className:Me.a.addMargin},"Total = $",f.toLocaleString()),r.a.createElement(E.a,{variant:"body2",align:"center"},"Cash Balance after purchase:"," ",i?"$"+(i.user.balance-f).toLocaleString():"Balance Unavailable"),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:Me.a.submit,onClick:async e=>{e.preventDefault();const n={"x-auth-token":i.token},r={userId:i.user.id,ticker:t.ticker,quantity:Number(b),price:c.adjClose},m=await y.a.post("/api/stock",r,{headers:n});if("success"===m.data.status){s({token:i.token,user:m.data.user}),a(!1);const e={id:m.data.stockId,ticker:t.ticker,name:t.name,purchasePrice:c.adjClose,purchaseDate:new Date,quantity:Number(b),currentDate:new Date,currentPrice:c.adjClose},n=[...o,e];l(n)}else console.log("Couldn't purchase stock.")}},"Confirm"))),r.a.createElement("br",null),r.a.createElement("br",null)))))};var He=e=>{let{setSelected:a,stockInfo:t,pastDay:n,setPurchasedStocks:c,purchasedStocks:l}=e;return r.a.createElement(he.a.div,{className:Me.a.backdrop,initial:{opacity:0},animate:{opacity:1},id:"backdrop"},r.a.createElement(ae.a,null,r.a.createElement(he.a.div,{animate:{opacity:1,y:-20}},r.a.createElement(Ue,{stockInfo:t,pastDay:n,setSelected:a,setPurchasedStocks:c,purchasedStocks:l}))))};const We=Object(Pe.a)(),Je=Object(G.a)(e=>({paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",marginBottom:"40px"}})),$e=e=>{let{pastDataPeriod:a,stockInfo:t,duration:n}=e;return r.a.createElement(m.a,{item:!0,xs:12,sm:7,component:d.a,className:Me.a.card,style:{minHeight:"350px"}},r.a.createElement(ce,{pastDataPeriod:a,stockInfo:t,duration:n}))},Re=e=>{let{sixMonthAverages:a,stockInfo:t}=e;return r.a.createElement(m.a,{item:!0,xs:12,sm:!0,component:d.a,className:Me.a.card},r.a.createElement(Ie,{sixMonthAverages:a,stockInfo:t}))},Ve=e=>{let{setPurchasedStocks:a,purchasedStocks:t,currentStock:c}=e;const{userData:l}=Object(n.useContext)(k),[o,i]=Object(n.useState)(!1),[s,u]=Object(n.useState)(void 0),[d,p]=Object(n.useState)(void 0),[E,g]=Object(n.useState)(void 0),[h,b]=Object(n.useState)(void 0),[v,f]=Object(n.useState)(void 0);return Object(n.useEffect)(()=>{(async()=>{const e="/api/data/prices/".concat(c.ticker),a=await y.a.get(e);"success"===a.data.status&&u(a.data.data)})();(async()=>{const e="/api/data/prices/".concat(c.ticker,"/full"),a=await y.a.get(e);"success"===a.data.status&&(p(a.data.sixMonthAverages),g(a.data.pastDay),b(a.data.pastMonth),f(a.data.pastTwoYears))})()},[]),r.a.createElement("div",{className:Me.a.root},s&&E&&r.a.createElement(Le,{stockInfo:s,price:E.adjClose}),d&&E&&h&&v&&r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement($e,{pastDataPeriod:v,stockInfo:s,duration:"2 years"}),r.a.createElement(Re,{sixMonthAverages:d,stockInfo:s})),r.a.createElement(qe,{pastDay:E}),r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(Ge,{setSelected:i,balance:l.user.balance}),r.a.createElement($e,{pastDataPeriod:h,stockInfo:s,duration:"month"})),o&&r.a.createElement(He,{stockInfo:s,pastDay:E,setSelected:i,setPurchasedStocks:a,purchasedStocks:t})))},ze=[{name:"Apple",ticker:"AAPL"},{name:"Amazon",ticker:"AMZN"},{name:"Google",ticker:"GOOG"},{name:"Microsoft",ticker:"MSFT"},{name:"Walmart",ticker:"WMT"},{name:"Intel",ticker:"INTC"},{name:"American Express",ticker:"AXP"},{name:"Boeing",ticker:"BA"},{name:"Cisco",ticker:"CSCO"},{name:"Goldman Sachs",ticker:"GS"},{name:"Johnson & Johnson",ticker:"JNJ"},{name:"Coca-Cola",ticker:"KO"},{name:"McDonald's",ticker:"MCD"},{name:"Nike",ticker:"NKE"},{name:"Procter & Gamble",ticker:"PG"},{name:"Verizon",ticker:"VZ"},{name:"Salesforce",ticker:"CRM"},{name:"Visa",ticker:"V"},{name:"UnitedHealth",ticker:"UNH"},{name:"IBM",ticker:"IBM"},{name:"Chevron",ticker:"CVX"}];var Fe=e=>{let{setPurchasedStocks:a,purchasedStocks:t}=e;const c=Je(),[l,o]=Object(n.useState)(null),[i,s]=Object(n.useState)(null);return r.a.createElement(ae.a,{className:c.addMargin},r.a.createElement(De.a,{value:l,onChange:(e,a)=>{o(a),s(a||null)},filterOptions:(e,a)=>{let t=We(e,a);return i&&(t=t.slice(0,4)),t},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"stock-search-bar",options:ze,getOptionLabel:e=>e.name,renderOption:e=>e.name,style:{maxWidth:"700px",margin:"30px auto",marginBottom:"60px"},renderInput:e=>r.a.createElement(g.a,Object.assign({},e,{label:"Search for a stock",variant:"outlined"}))}),i&&r.a.createElement(Ve,{setPurchasedStocks:a,purchasedStocks:t,currentStock:i}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))};const Xe=e=>{let{setSettingsOpen:a}=e;const{userData:t,setUserData:c}=Object(n.useContext)(k),[l,o]=Object(n.useState)(!1);return r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(u.a,{width:"60vh",boxShadow:1},r.a.createElement(d.a,null,r.a.createElement(ge.a,{action:r.a.createElement(D.a,{"aria-label":"Close",onClick:()=>{a(!1)}},r.a.createElement(ve.a,null))}),r.a.createElement(p.a,null,r.a.createElement(E.a,{component:"h1",variant:"h6",align:"center"},"Settings"),r.a.createElement("form",{className:_.a.form,onSubmit:e=>e.preventDefault()},r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"Username",label:"Username",name:"Username",autoComplete:"Username",value:t.user.username}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"balance",label:"Cash Balance",name:"balance",autoComplete:"balance",value:t.user.balance})),r.a.createElement("br",null),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:_.a.reset,onClick:()=>{o(!0)}},"Reset My Account")),l&&r.a.createElement("div",null,r.a.createElement(E.a,{component:"p",variant:"caption",align:"center"},"This is a permanent change. If you are sure press Reset."),r.a.createElement(u.a,{display:"flex",justifyContent:"center"},r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:_.a.reset,onClick:async e=>{e.preventDefault();const a={"x-auth-token":t.token},n="/api/stock/".concat(t.user.id),r=await y.a.delete(n,{headers:a});"success"===r.data.status&&c({token:t.token,user:r.data.user})}},"Reset"),r.a.createElement(h.a,{type:"submit",variant:"contained",color:"primary",className:_.a.confirm,onClick:()=>{o(!1)}},"Cancel"))),r.a.createElement("br",null),r.a.createElement("br",null)))))};var Ze=e=>{let{setSettingsOpen:a}=e;return r.a.createElement(he.a.div,{className:_.a.backdrop,initial:{opacity:0},animate:{opacity:1},id:"backdrop"},r.a.createElement(ae.a,null,r.a.createElement(he.a.div,{animate:{opacity:1,y:-20}},r.a.createElement(Xe,{setSettingsOpen:a}))))};const Qe=Object(G.a)(e=>({appBarSpacer:e.mixins.toolbar,appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7),[e.breakpoints.up("sm")]:{width:e.spacing(9)}}}));var Ye=()=>{const e=Object(i.f)(),a=Qe(),{userData:t,setUserData:c}=Object(n.useContext)(k),[l,o]=Object(n.useState)(!1),[m,u]=Object(n.useState)("dashboard"),[d,p]=Object(n.useState)(!1),[g,h]=Object(n.useState)([]);t.user||e.push("/login"),Object(n.useEffect)(()=>{(async()=>{const e="/api/stock/".concat(t.user.id),a={"x-auth-token":t.token},n=await y.a.get(e,{headers:a});"success"===n.data.status&&h(n.data.stocks)})()},[]);return r.a.createElement("div",{className:_.a.root},r.a.createElement(s.a,null),r.a.createElement(w.a,{position:"absolute",style:{background:"#2E3B55"},className:Object(O.a)(_.a.appBarBackground,a.appBar,l&&a.appBarShift)},r.a.createElement(P.a,{className:_.a.toolbar},r.a.createElement(D.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:()=>{o(!0)},className:Object(O.a)(_.a.menuButton,l&&_.a.menuButtonHidden)},r.a.createElement(T.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:_.a.title},"dashboard"===m&&"Dashboard","news"===m&&"Market News","search"===m&&"Search"),r.a.createElement(E.a,{color:"inherit"}," Hello,"," ",t.user.username?t.user.username.charAt(0).toUpperCase()+t.user.username.slice(1):""))),r.a.createElement(I.a,{variant:"permanent",classes:{paper:Object(O.a)(a.drawerPaper,!l&&a.drawerPaperClose)},open:l},r.a.createElement("div",{className:_.a.toolbarIcon},r.a.createElement(D.a,{onClick:()=>{o(!1)}},r.a.createElement(q.a,null))),r.a.createElement(B.a,null),r.a.createElement(M.a,null,r.a.createElement(X,{currentPage:m,setCurrentPage:u})),r.a.createElement(B.a,null),r.a.createElement(M.a,null,r.a.createElement(ee,{logout:()=>{c({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),e.push("/login")},openSettings:()=>{p(!0)}}))),r.a.createElement("main",{className:_.a.content},r.a.createElement("div",{className:a.appBarSpacer}),"dashboard"===m&&r.a.createElement(xe,{purchasedStocks:g}),"news"===m&&r.a.createElement(we,null),"search"===m&&r.a.createElement(Fe,{setPurchasedStocks:h,purchasedStocks:g}),d&&r.a.createElement(Ze,{setSettingsOpen:p})))};var Ke=()=>(Object(i.f)().push("/"),r.a.createElement("h1",null,"Not Found!"));var ea=function(){const[e,a]=Object(n.useState)({token:void 0,user:void 0});return Object(n.useEffect)(()=>{(async()=>{let e=localStorage.getItem("auth-token");if(null==e)return localStorage.setItem("auth-token",""),e="",void a({token:void 0,user:void 0});const t={"x-auth-token":e};if((await y.a.post("/api/auth/validate",null,{headers:t})).data){const n=await y.a.get("/api/auth/user",{headers:t});a({token:e,user:n.data})}else a({token:void 0,user:void 0})})()},[]),r.a.createElement(o.a,null,r.a.createElement(k.Provider,{value:{userData:e,setUserData:a}},r.a.createElement("div",null,r.a.createElement(i.c,null,e.user?r.a.createElement(i.a,{path:"/",exact:!0,component:Ye}):r.a.createElement(i.a,{path:"/",exact:!0,component:C}),r.a.createElement(i.a,{path:"/login",exact:!0,component:C}),r.a.createElement(i.a,{path:"/register",exact:!0,component:N}),r.a.createElement(i.a,{component:Ke})))))};l.a.render(r.a.createElement(ea,null),document.getElementById("root"))},29:function(e,a,t){e.exports={positive:"Dashboard_positive__2SV-z",negative:"Dashboard_negative__uI7s3",depositContext:"Dashboard_depositContext__12JXE",addMargin:"Dashboard_addMargin__12DIb"}},35:function(e,a,t){e.exports={paper:"Auth_paper__1N8mV",form:"Auth_form__3-hni",submit:"Auth_submit__3CgWp",background:"Auth_background__-fUBZ",gradient:"Auth_gradient__LBpqg"}}},[[152,1,2]]]);
//# sourceMappingURL=main.a9465ef4.chunk.js.map