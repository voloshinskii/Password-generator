(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,n){e.exports=n(362)},215:function(e,t){},217:function(e,t){},252:function(e,t){},253:function(e,t){},359:function(e,t,n){},360:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),l=n(63),o=n(50),u=n(28),s=n(175),i=n(33),p=n(79),m=n(52),d=n(208),E={length:8,password:"",uppercase:!0,numbers:!0,symbols:!1,similar:!0},h=function(){return function(e,t){var n=t().password;e({type:"password/GENERATE_PASSWORD",password:d.generate({length:n.length,strict:!0,uppercase:n.uppercase,numbers:n.numbers,symbols:n.symbols,excludeSimilarCharacters:!n.similar})})}},b=function(e){return function(t){e>1024&&(e=1024),e<5&&(e=5),t({type:"password/SET_LENGTH",length:e}),t(h())}},g=function(e,t){return function(n){n({type:"password/CHANGE_PROP",prop:{name:e,value:t}}),n(h())}},f=Object(u.c)({password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"password/GENERATE_PASSWORD":return Object(m.a)({},e,{password:t.password});case"password/SET_LENGTH":return Object(m.a)({},e,{length:t.length});case"password/CHANGE_PROP":return Object(m.a)({},e,Object(p.a)({},t.prop.name,t.prop.value));default:return e}}}),w=i.a(),y=[s.a,Object(o.routerMiddleware)(w)],v=u.d.apply(void 0,[u.a.apply(void 0,y)].concat([])),O=Object(u.e)(Object(o.connectRouter)(w)(f),{},v);O.dispatch(h());var C=O,P=n(122),j=n(368),k=n(369),R=n(365),x=n(366),S=n(367),T=n(176),G=n(298),L=Object(l.connect)(function(e){var t=e.password;return Object(m.a)({},t)},function(e){return Object(u.b)({generate:h,setLength:b,changeProp:g},e)})(function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"auto",marginTop:50,width:"70%",display:"flex",flexDirection:"column"}},r.a.createElement(T.CopyToClipboard,{text:e.password,onCopy:function(){return G.fire({type:"success",title:"Copied!",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}},r.a.createElement("h2",null,e.password)),r.a.createElement("label",null,"Password length"),r.a.createElement(j.a,null,r.a.createElement(k.a,{span:12},r.a.createElement(R.a,{min:5,max:32,onChange:e.setLength,value:"number"===typeof e.length?e.length:0})),r.a.createElement(k.a,{span:4},r.a.createElement(x.a,{min:5,max:1024,style:{marginLeft:16},value:e.length,onChange:e.setLength}))),r.a.createElement("br",null),r.a.createElement(j.a,null,r.a.createElement(S.a,{onChange:function(t){return e.changeProp("uppercase",t.target.checked)},checked:e.uppercase},"Include uppercase")),r.a.createElement("br",null),r.a.createElement(j.a,null,r.a.createElement(S.a,{onChange:function(t){return e.changeProp("numbers",t.target.checked)},checked:e.numbers},"Include numbers")),r.a.createElement("br",null),r.a.createElement(j.a,null,r.a.createElement(S.a,{onChange:function(t){return e.changeProp("symbols",t.target.checked)},checked:e.symbols},"Include symbols")),r.a.createElement("br",null),r.a.createElement(j.a,null,r.a.createElement(S.a,{onChange:function(t){return e.changeProp("similar",t.target.checked)},checked:e.similar},"Include similar ( e.g. i, l, 1, L, o, 0, O )")),r.a.createElement("br",null),r.a.createElement(j.a,null,r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.generate},"Generate password"))))}),N=function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(P.Route,{exact:!0,path:"/",component:L})))},A=(n(359),n(360),n(361),document.querySelector("#root"));Object(c.render)(r.a.createElement(l.Provider,{store:C},r.a.createElement(o.ConnectedRouter,{history:w},r.a.createElement("div",null,r.a.createElement(N,null)))),A)}},[[187,1,2]]]);
//# sourceMappingURL=main.d9ec8fdf.chunk.js.map