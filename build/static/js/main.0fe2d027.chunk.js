(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/main_logo_left.dd08f33a.png"},128:function(e,t,a){},175:function(e,t,a){e.exports=a(187)},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),l=a(247),c=a(10),m=a(112),u=a.n(m),s=(a(128),a(28)),d=a(268),p=a(266),f=a(245),b=a(246),g=a(267),h=a(148),v=a.n(h),E=a(147),x=a.n(E),y=a(138),C=a.n(y),N=a(143),w=a.n(N),O=a(139),j=a.n(O),T=a(140),M=a.n(T),S=a(141),k=a.n(S),R=a(142),F=a.n(R),A=a(4),B=a(36),I=a(278),D=a(24),z=a(260),P=a(136),W=a.n(P),q=a(137),L=a.n(q),Q=a(104),H=a.n(Q),V=a(113),J=a(39),K=a(40),G=function(){function e(){Object(J.a)(this,e)}return Object(K.a)(e,[{key:"SetBody",value:function(e){return"undefined"!==typeof window?{method:"POST",mode:"cors",headers:new Headers({Accept:"application/json","Content-Type":"application/json",ApiKey:"hL4bA4nB4yI0vI0fC8fH7eT6"}),body:JSON.stringify(e)}:{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",ApiKey:"hL4bA4nB4yI0vI0fC8fH7eT6"}}}}]),e}(),X=Object.freeze(new G),_=("undefined"!==typeof window&&new Headers({Accept:"application/json","Content-Type":"application/json",ApiKey:"hL4bA4nB4yI0vI0fC8fH7eT6"}),"https://msoregistration.herokuapp.com/api/"),U="v1",$=function(){function e(){Object(J.a)(this,e)}return Object(K.a)(e,[{key:"post",value:function(){var e=Object(V.a)(H.a.mark(function e(t,a){var n,r,o,i;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=X.SetBody(t),r=Object.assign({},n,{method:"POST"}),o=_+U+a,console.log(o),e.next=6,fetch(o,r);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),Y=Object.freeze(new $),Z=function(){return[{id:"Miss",title:"Miss"},{id:"Mr",title:"Mr"},{id:"Mrs",title:"Mrs"},{id:"Ms",title:"Ms"},{id:"Dr",title:"Dr"},{id:"Sir",title:"Sir"}]},ee=function(){return[{id:"S",title:"Intermediary"},{id:"A",title:"Administrator"},{id:"SU",title:"Supervisor"}]},te=function(){return[{id:"NBS",title:"Nationwide"},{id:"TMW",title:"The Mortgage Works"},{id:"BOTH",title:"BOTH"}]},ae=a(258),ne=a(12),re=a(271);function oe(e){var t=e.title;return r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(re.a,{sx:{m:1},variant:"h5"},t))}var ie=a(85),le=a(272);var ce=a(276),me=a(234),ue=a(263),se=a(280),de=a(253);var pe=a(277),fe=a(251),be=a(281),ge=a(279);var he=a(255);var ve=a(250),Ee=a(242),xe=a(249);var ye=a(8),Ce=a(264),Ne=Object(ye.a)(function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}});var we=Object(ye.a)(function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}});var Oe={Input:function(e){var t=e.name,a=e.label,n=e.value,o=e.error,i=void 0===o?null:o,l=e.onChange,c=Object(ie.a)(e,["name","label","value","error","onChange"]);return r.a.createElement(z.a,{item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(le.a,Object.assign({size:"small",label:a,name:t,value:n,onChange:l},c,i&&{error:!0,helperText:i})))},RadioGroup:function(e){var t=e.name,a=e.label,n=e.value,o=e.onChange,i=e.items;return r.a.createElement(ce.a,null,r.a.createElement(me.a,null,a),r.a.createElement(ue.a,{row:!0,name:t,value:n,onChange:o},i.map(function(e){return r.a.createElement(se.a,{key:e.id,value:e.id,control:r.a.createElement(de.a,null),label:e.title})})))},Select:function(e){Object(D.useMediaQuery)({query:"(max-width: 760px)"});var t=e.name,a=e.label,n=e.value,o=e.error,i=void 0===o?null:o,l=e.onChange,c=e.options,m=e.helperText;return r.a.createElement(z.a,{item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(ce.a,Object.assign({sx:{m:1,minWidth:"35ch"}},i&&{error:!0}),r.a.createElement(pe.a,null,a),r.a.createElement(fe.a,{label:a,name:t,value:n,size:"small",onChange:l},r.a.createElement(be.a,{value:""},"Please Select"),c.map(function(e){return r.a.createElement(be.a,{key:e.id,value:e.id},e.title)})),i&&r.a.createElement(ge.a,null,m)))},Checkbox:function(e){var t=e.name,a=e.label,n=e.value,o=e.onChange;return r.a.createElement(ce.a,null,r.a.createElement(se.a,{control:r.a.createElement(he.a,{name:t,color:"primary",checked:n,onChange:function(e){return o(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:a}))},DatePickers:function(e){var t=e.name,a=e.label,n=e.value,o=e.onChange,i=e.error,l=void 0===i?null:i,c=e.helperText;return r.a.createElement(z.a,{item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(ce.a,l&&{error:!0},r.a.createElement(Ee.b,{dateAdapter:ve.a},r.a.createElement(xe.a,{size:"small",label:a,value:n,onChange:o,name:t,inputFormat:"dd/MM/yyyy",renderInput:function(e){return r.a.createElement(le.a,Object.assign({onChange:o},e,{sx:{mb:4},size:"small",name:t}))}})),l&&r.a.createElement(ge.a,null,c)))},Button:function(e){var t=e.text,a=e.size,n=e.color,o=e.variant,i=e.onClick,l=Object(ie.a)(e,["text","size","color","variant","onClick"]),c=Ne();return r.a.createElement(Ce.a,Object.assign({variant:o||"contained",size:a||"large",color:n||"primary",onClick:i},l,{classes:{root:c.root,label:c.label}}),t)},ActionButton:function(e){var t=e.color,a=e.children,n=e.onClick,o=we();return r.a.createElement(Ce.a,{className:"".concat(o.root," ").concat(o[t]),onClick:n},a)}};function je(e){var t=e.title;return r.a.createElement(z.a,{columns:12,container:!0,sx:{mx:"auto",bgcolor:"primary.light",color:"#fff",borderTopLeftRadius:5,borderTopRightRadius:5}},r.a.createElement(re.a,{sx:{m:1}},t))}var Te=a(252);function Me(e){var t=e.titles,a=void 0===t?[]:t,n=e.outlined,o=void 0===n||n,i=e.severity,l=void 0===i?"info":i;return r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(z.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(Te.a,{variant:"outlined",severity:l,sx:{m:1,border:o?"auto":"none",padding:o?"auto":0}},a.map(function(e){return r.a.createElement(re.a,{key:e.id,variant:"body2"},e.title)}))))}var Se=function(e){var t=e.NavigateToNext,a=t.FormState,n=t.setFormDataState,o=function(e){n(function(t){var n;return Object(B.a)({},a,t,(n={},Object(A.a)(n,e.target.name,e.target.value),Object(A.a)(n,"errorMessage",Object(B.a)({},t.errorMessage,Object(A.a)({},e.target.name,""))),n))})},i=(Object(D.useMediaQuery)({query:"(max-width: 760px)"}),r.a.useState(!0)),l=Object(c.a)(i,2),m=l[0],u=l[1],s=r.a.useState(!0),p=Object(c.a)(s,2),f=p[0],b=p[1],g=r.a.useState(!1),h=Object(c.a)(g,2),v=h[0],E=h[1],x=r.a.useState(!1),y=Object(c.a)(x,2),C=y[0],N=y[1],w=Object(ne.useNavigate)();return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(z.a,{container:!0,spacing:1,columns:12},r.a.createElement(oe,{title:"Registration Details"}),r.a.createElement(z.a,{container:!0,columns:12,display:m?"none":"block"},r.a.createElement(Me,{severity:"warning",titles:[{id:1,title:"We have been unable to find a company on the FCA register matching the FCA number entered."},{id:2,title:"The information we hold is updated each Monday, with changes made with the FCA up to the previous Thursday."},{id:3,title:"If you believe the details you have entered are correct and you\u2019re registering in line with the above timescales, please contact the FCA."}]})),r.a.createElement(Me,{titles:[{id:1,title:"If you\u2019re registering with Nationwide, your details must match with your MTE registration. If these details are different, you will be unable to login to NFI Online."},{id:2,title:"Please check and confirm before proceeding."}]}),r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(z.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(I.a,{variant:"elevation",sx:{m:1}},r.a.createElement(je,{title:"Personal Details"}),r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(Oe.Select,{value:a.Title,label:"Title",onChange:o,size:"small",name:"Title",options:Z(),error:a.errorMessage.Title,helperText:a.errorMessage.Title}),r.a.createElement(Oe.Input,{label:"First Name",onChange:o,type:"text",name:"firstName",value:a.firstName,error:a.errorMessage.firstName,helperText:a.errorMessage.firstName}),r.a.createElement(Oe.Input,{label:"Surname",onChange:o,type:"text",name:"Surname",value:a.Surname,error:a.errorMessage.Surname,helperText:a.errorMessage.Surname,size:"small"}),r.a.createElement(Oe.DatePickers,{label:"Date of birth",value:a.date,onChange:function(e){n(Object(B.a)({},a,{date:e}))},name:"date",error:a.errorMessage.date,helperText:a.errorMessage.date}),r.a.createElement(Oe.Select,{value:a.Role,label:"Role",onChange:o,size:"small",name:"Role",options:ee(),error:a.errorMessage.Role,helperText:a.errorMessage.Role}),r.a.createElement(Oe.Select,{value:a.Brand,label:"Which brand(s) are you registering for?",onChange:o,size:"small",name:"Brand",options:te(),error:a.errorMessage.Brand,helperText:a.errorMessage.Brand})),r.a.createElement(Me,{outlined:!1,titles:[{id:1,title:"If you\u2019re already registered with Nationwide or The Mortgage Works and would like to register for a second brand, select \u2018Both\u2019."}]}))),r.a.createElement(z.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(I.a,{variant:"elevation",sx:{m:1}},r.a.createElement(je,{title:"Company Details"}),r.a.createElement(Me,{outlined:!1,titles:[{id:1,title:"Please enter your company FCA number and select \u2018Search\u2019 to retrieve details from the FCA register."}]}),r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(Oe.Input,{label:"Company FCA number",onChange:function(e){o(e),b(!0)},type:"text",name:"CompanyFCAnumber",value:a.CompanyFCAnumber,error:""!==a.errorMessage.CompanyFCAnumber,helperText:a.errorMessage.CompanyFCAnumber,size:"small"}),r.a.createElement(z.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(ae.a,{startIcon:r.a.createElement(W.a,null),sx:{m:1,width:"35ch"},variant:"contained",loading:v,loadingPosition:"start",disabled:""===a.CompanyFCAnumber,color:"success",size:"medium",onClick:function(e){E(!0),console.log(a.CompanyFCAnumber),Y.post(a.CompanyFCAnumber,"/validatefca").then(function(e){e.ok?(u(!0),b(!1),console.log("Enable and redirect to, next menu"),E(!1)):(u(!1),b(!0),E(!1))}).catch(function(e){console.error(e),u(!1),E(!1)})}},"Search"))))),r.a.createElement(z.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(I.a,{variant:"elevation",sx:{m:1}},r.a.createElement(je,{title:"Declaration"}),r.a.createElement(Me,{outlined:!1,titles:[{id:1,title:"By clicking \u2018Agree & Continue\u2019, you confirm you have read and agree to the registration declaration."}]}))),r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(z.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(ae.a,{startIcon:r.a.createElement(L.a,null),sx:{m:1,width:"35ch"},variant:"contained",disabled:f,loading:C,loadingPosition:"start",color:"success",onClick:function(e){!function(e){Object.entries(a).map(function(t){var a=Object(c.a)(t,2),r=a[0],o=a[1];return r===e.target.name&&null!==e.target.value&&""!==e.target.value||""!==o&&null!==o?n(function(e){return Object(B.a)({},e,{error:!1,errorMessage:Object(B.a)({},e.errorMessage,Object(A.a)({},r,""))})}):n(function(e){return Object(B.a)({},e,{error:!0,errorMessage:Object(B.a)({},e.errorMessage,Object(A.a)({},r,"enter correct "+r))})})})}(e),a.error||(N(!0),Y.post({title:{value:a.Title,caption:a.TitleCaption},firstname:a.firstName,surname:a.Surname,dateOfBirth:a.date,role:{value:a.Role,caption:a.RoleCaption},brand:{value:a.Brand,caption:a.BrandCaption},fcaNumber:a.CompanyFCAnumber},"/register").then(function(e){e.ok&&(console.log("Enable and redirect to, next menu"),t.NavigateToNext(De.RouteNumber),w(De.RouteName)),N(!1)}).catch(function(e){console.error(e),N(!1)}))}},"Agree & Continue"),r.a.createElement(ae.a,{onClick:function(){t.NavigateToNext(De.RouteNumber),w(De.RouteName)}},"Test Next Button")))))))},ke=function(e){var t=e.NavigateToNext,a=Object(ne.useNavigate)(),n=Object(D.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(z.a,{container:!0,spacing:1,columns:12},r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(re.a,{sx:{m:1},variant:"h5"},"Company Details "))),r.a.createElement(ae.a,{onClick:function(){t.NavigateToNext(ze.RouteNumber),a(ze.RouteName)}},"Test Next Button")),r.a.createElement(I.a,{variant:"outlined"},r.a.createElement(je,{title:"Personal Details"}),r.a.createElement(z.a,{container:!0,sx:{m:1},columns:12},r.a.createElement(Oe.Input,{label:"First Name",type:"text",name:"firstName"}),r.a.createElement(Oe.Input,{label:"First Name",type:"text",name:"firstName"}),r.a.createElement(Oe.Input,{label:"First Name",type:"text",name:"firstName"}))))},Re=function(e){var t=e.NavigateToNext,a=Object(ne.useNavigate)(),n=Object(D.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},"   ",r.a.createElement(oe,{title:"Address Details"}),r.a.createElement(ae.a,{onClick:function(){t.NavigateToNext(Pe.RouteNumber),a(Pe.RouteName)}},"Test Next Button")))},Fe=function(e){var t=e.NavigateToNext,a=Object(ne.useNavigate)(),n=Object(D.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(z.a,{container:!0,spacing:1,columns:12},r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(re.a,{sx:{m:1},variant:"h5"},"Submission Route(s) "))),r.a.createElement(ae.a,{onClick:function(){t.NavigateToNext(qe.RouteNumber),a(qe.RouteName)}},"Test Next Button")))},Ae=function(e){var t=e.NavigateToNext,a=Object(ne.useNavigate)(),n=Object(D.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(z.a,{container:!0,spacing:1,columns:12},r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(re.a,{sx:{m:1},variant:"h5"},"Contact Details "))),r.a.createElement(ae.a,{onClick:function(){t.NavigateToNext(We.RouteNumber),a(We.RouteName)}},"Test Next Button")))},Be=function(){var e=Object(D.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:e?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(z.a,{container:!0,spacing:1,columns:12},r.a.createElement(z.a,{columns:12,container:!0},r.a.createElement(re.a,{sx:{m:1},variant:"h5"},"Confirmation")))))};var Ie=function(e){return{menuitem:[{menucaption:"Registration Details",menupath:"/registrationdetails",icon:n.createElement(C.a,{color:"primary"}),routedata:n.createElement(Se,{NavigateToNext:e}),disabled:!1,selected:!0},{menucaption:"Company Name",menupath:"/companyname",icon:n.createElement(j.a,{color:"primary"}),routedata:n.createElement(ke,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Address Details",menupath:"/addressdetails",icon:n.createElement(M.a,{color:"primary"}),routedata:n.createElement(Re,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Contact Details",menupath:"/contactdetails",icon:n.createElement(k.a,{color:"primary"}),routedata:n.createElement(Ae,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Submission Route(s)",menupath:"/submissionroute",icon:n.createElement(F.a,{color:"primary"}),routedata:n.createElement(Fe,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Confirmation",menupath:"/confirmation",icon:n.createElement(w.a,{color:"primary"}),routedata:n.createElement(Be,{NavigateToNext:e}),disabled:!0,selected:!1}]}},De={RouteName:"/companyname",RouteNumber:1},ze={RouteName:"/addressdetails",RouteNumber:2},Pe={RouteName:"/contactdetails",RouteNumber:3},We={RouteName:"/submissionroute",RouteNumber:4},qe={RouteName:"/confirmation",RouteNumber:5},Le=a(269),Qe=a(144),He=a(243),Ve=a(244),Je=a(259),Ke=a(51);function Ge(e){var t=e.children;return"undefined"===typeof window?n.createElement(Qe.a,{location:"/registrationdetails"},t):n.createElement(ne.MemoryRouter,{initialEntries:["/registrationdetails"],initialIndex:0},t)}var Xe=function(e){return{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},_e=function(e){return Object(A.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},Ue=Object(ye.a)("div")(function(e){var t=e.theme;return Object(B.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)}),$e=Object(ye.a)(Je.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var t=e.theme,a=e.open;return Object(B.a)({width:240,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},a&&Object(B.a)({},Xe(t),{"& .MuiDrawer-paper":Xe(t)}),!a&&Object(B.a)({},_e(t),{"& .MuiDrawer-paper":_e(t)}))});function Ye(e){var t=e.icon,a=e.primary,r=e.to,o=e.onclick,i=e.Selected,l=e.Disabled,c=n.useMemo(function(){return n.forwardRef(function(e,t){return n.createElement(Ke.a,Object.assign({to:r,ref:t},e,{role:void 0,onClick:o,selected:i,disabled:l}))})},[r]);return n.createElement("li",null,n.createElement(Le.a,{component:c,onClick:o,selected:i,disabled:l},t?n.createElement(He.a,null,t):null,n.createElement(Ve.a,{primary:a})))}function Ze(e){var t=Object(ne.useLocation)();return Ie(e).menuitem.find(function(e){return e.menupath===t.pathname}).routedata}var et={errorMessage:{firstName:"",Surname:"",date:"",Title:"",Role:"",Brand:"",CompanyFCAnumber:""},error:!0,activeStep:0,firstName:"",Surname:"",date:null,Title:"",Role:"",Brand:"",CompanyFCAnumber:""},tt=a(282),at=a(283),nt=a(146),rt=a.n(nt),ot=a(270);function it(e){var t=e.open,a=e.logo,n=e.handleDrawerOpen,o=Object(ye.a)(ot.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var t=e.theme;e.open;return{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})}});return r.a.createElement(o,{position:"fixed",open:t},r.a.createElement(tt.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:n,edge:"start"},r.a.createElement(rt.a,null)),r.a.createElement("img",{alt:"Nationwide Logo",src:a,className:"App-logo"}),r.a.createElement(re.a,{variant:"h6",noWrap:!0,component:"div"},r.a.createElement(at.a,{underline:"none",color:"inherit",className:"App-name",href:"#"}," MSO Registration"))))}function lt(){var e=Object(s.a)(),t=Object(D.useMediaQuery)({query:"(max-width: 760px)"}),a=r.a.useState(!t),o=Object(c.a)(a,2),i=o[0],l=o[1],m=r.a.useState(0),h=Object(c.a)(m,2),E=h[0],y=h[1],C=r.a.useState(0),N=Object(c.a)(C,2),w=N[0],O=N[1];function j(e){O(e),y(E>=e?E:e)}var T=Object(n.useState)(et),M=Object(c.a)(T,2),S=M[0],k=M[1];return r.a.createElement(d.a,{sx:{display:"flex"}},r.a.createElement(Ge,null,r.a.createElement(f.a,null),r.a.createElement(it,{open:i,logo:u.a,handleDrawerOpen:function(){l(!i)}}),r.a.createElement($e,{variant:"permanent",open:i},r.a.createElement(Ue,null,r.a.createElement(g.a,{onClick:function(){l(!i)}},"rtl"===e.direction?r.a.createElement(x.a,null):r.a.createElement(v.a,null))),r.a.createElement(b.a,null),r.a.createElement(p.a,null,Ie(j).menuitem.map(function(e,t){return r.a.createElement(Ye,{to:e.menupath,primary:e.menucaption,icon:e.icon,key:e.menucaption,onclick:function(e){return function(e){O(e)}(t)},Selected:w===t,Disabled:!(t===E||t<E)})}))),r.a.createElement(d.a,{component:"main",sx:{flexGrow:1,p:3}},r.a.createElement(Ue,null),r.a.createElement(ne.Routes,null,r.a.createElement(ne.Route,{path:"*",element:r.a.createElement(Ze,{NavigateToNext:j,FormState:S,setFormDataState:k})})))))}var ct=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,248)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.createElement(l.a,{injectFirst:!0},n.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),ct()}},[[175,3,2]]]);
//# sourceMappingURL=main.0fe2d027.chunk.js.map