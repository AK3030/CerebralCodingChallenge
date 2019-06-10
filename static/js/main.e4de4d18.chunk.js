(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,e,t){},16:function(n){n.exports=[{id:-1,question:"Sorry, we can't help you at this time. Have a nice day!",validation:!1},{id:0,question:"Do you live in California?",validation:["yes","no"],paths:{yes:1,no:-1}},{id:1,question:"Are you suffering from insomnia?",validation:["yes","no"],paths:{yes:2,no:-1}},{id:2,question:"What's your email?",validation:"(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])",paths:3,"//comment":"regex from https://emailregex.com"},{id:3,question:"What's your full name? (This information must match your photo ID.)",validation:!0,paths:4},{id:4,question:"Please input a password.",style:"password",validation:".{6,}",paths:5},{id:5,question:"When were you born? (mm/dd/yyyy)",validation:"^\\d{1,2}/\\d{1,2}/\\d{4}$",paths:6},{id:6,question:"How long have you had trouble sleeping? Past week, past month, or longer?",validation:["past week","past month","longer"],paths:7},{id:7,question:"Is there anything else we should know?",validation:!0,paths:8},{id:8,question:"Thank you so much! You will be connected to a physician shortly",validation:!1}]},27:function(n,e,t){n.exports=t.p+"static/media/brainicon.7c36420b.png"},28:function(n,e,t){n.exports=t.p+"static/media/paperairplane.ce33edf7.png"},33:function(n,e,t){n.exports=t(44)},38:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),u=(t(38),t(3)),c=t(4),s=t(6),l=t(5),d=t(7),f=t(2),p=(t(13),t(9)),h=t(1),g=function(n){return{type:"SET_QUESTION",questionId:n}},b=function(n,e){var t=e;-1===t?t=9:0===t&&(t=10);var r="https://jsonplaceholder.typicode.com/posts/".concat(t);return fetch(r,{method:"PUT",body:JSON.stringify(n)})};function m(){var n=Object(f.a)(["\n  color: #CBD3DC;\n  font-size: 15px;\n"]);return m=function(){return n},n}function x(){var n=Object(f.a)(["\n  margin-bottom: 5px;\n  margin-top: 5px;\n  color: #709DE6;\n"]);return x=function(){return n},n}function v(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  flex-shrink: 0;\n"]);return v=function(){return n},n}var y=h.default.div(v()),O=h.default.div(x()),w=h.default.div(m()),j=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n="Cerebral"===this.props.username?{color:"#5D6979"}:null;return a.a.createElement(y,null,a.a.createElement(O,{style:n},this.props.username+":"),a.a.createElement(w,null,this.props.message))}}]),e}(r.Component),E=t(27),k=t.n(E),C=t(16),D=function(n,e){var t=e.validation,r=e.paths,a=(e.id,t.find(function(e){return e===n}));return!!a&&(r[a]?r[a]:r)},z=function(n,e){var t=e.validation,r=RegExp(t),a=e.paths;return!!r.test(n)&&a},I=function(n,e){return Array.isArray(e.validation)?D(n,e):"string"===typeof e.validation?z(n,e):e.validation?e.paths:void 0},S=t(28),A=t.n(S),M=t(22);function T(){var n=Object(f.a)(["\n    width: 28%;\n    filter: invert(100%);\n"]);return T=function(){return n},n}function q(){var n=Object(f.a)(["\n    background-color: #5294FC;\n    height: 55%;\n    width: 90px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    &:hover {\n        cursor: pointer;\n    }\n    margin-left: 12px;\n\n"]);return q=function(){return n},n}function Q(){var n=Object(f.a)(["\n    height: 55%;\n    width: 70%;\n    resize: none;\n    border-radius: 3px;\n    border: 1px solid #DDE4ED;\n    color: #CBD3DC;\n    font-size: 15px;\n    font-weight: 600;\n    padding-left: 10px;\n    box-sizing: border-box;\n    flex-grow: 1;\n    padding-top: 8px;\n    &::placeholder {\n        color: #CBD3DC;\n        font-size: 15px;\n        font-weight: 600;\n    }\n"]);return Q=function(){return n},n}function B(){var n=Object(f.a)(["\n    width: 100%;\n    background-color: #ECF5F6;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    font-weight: 600;\n    color: #5D6979;\n    height: 27%;\n    justify-content: center;\n    padding-left: 10px;\n    padding-right: 10px;\n"]);return B=function(){return n},n}var _=h.default.div(B()),N=h.default.textarea(Q()),F=h.default.div(q()),P=h.default.img(T()),U=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).sendMessage=function(){t.props.addMessage({user:"Me",body:t.state.message});var n=C.find(function(n){return n.id===t.props.currentQuestion}),e=t.state.message,r=I(e,n);if(r)t.props.putAnswerAction(r,n.id,r);else{var a="Invalid Answer, try again.";if(Array.isArray(n.validation)){var o=n.validation.join(", ");a+=" Options: ".concat(o)}t.props.addMessage({user:"Cerebral",body:a})}t.clearInput()},t.clearInput=function(n){t.setState(function(n){return{message:""}})},t.updateMessage=function(n){var e=n.target.value;t.setState(function(n,t){return{message:e}})},t.handleKeyPress=function(n){"Enter"===n.key&&(n.preventDefault(),t.sendMessage())},t.state={},t}return Object(d.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement(_,null,a.a.createElement(N,{ref:function(e){n.messageInput=e},placeholder:"Type here...",onKeyPress:this.handleKeyPress,value:this.state.message,onChange:this.updateMessage}),a.a.createElement(F,{onClick:this.sendMessage},a.a.createElement(P,{src:A.a})))}}]),e}(r.Component),W=Object(p.b)(function(n){return{currentQuestion:n.currentQuestion}},function(n){return{addMessage:function(e){return n(function(n){return{type:"ADD_MESSAGE",message:n}}(e))},putAnswerAction:function(e,t,r){return n(function(n,e,t){return function(r){return b(n,e).then(function(n){return n.json()},function(n){return console.log("An error occurred.",n)}).then(function(n){r(g(t))})}}(e,t,r))}}})(U);function $(){var n=Object(f.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-right: 5px;\n  border: 1px solid green;\n  filter: invert(100%);\n"]);return $=function(){return n},n}function G(){var n=Object(f.a)(["\n\n"]);return G=function(){return n},n}function J(){var n=Object(f.a)(["\n  height: 55%;\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-right: 20px;\n  padding-left: 20px;\n  background-color: white;\n  padding-bottom: 4px;\n"]);return J=function(){return n},n}function K(){var n=Object(f.a)(["\n  width: 100%;\n  flex-grow: 1;\n  background-color: #ECF5F6;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding-left: 20px;\n  font-weight: 600;\n  color: #5D6979;\n"]);return K=function(){return n},n}function H(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  height: 45%;\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.25);\n  min-width: 300px;\n  min-height: 250px;\n"]);return H=function(){return n},n}var R=h.default.div(H()),V=h.default.div(K()),Y=h.default.div(J()),L=h.default.div(G()),X=h.default.img($()),Z=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).scrollToBottom=function(){t.bottomOfMessages.scrollIntoView()},t.state={},t}return Object(d.a)(e,n),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.scrollToBottom(),this.props.setQuestion(0)}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var n=this;return a.a.createElement(R,null,a.a.createElement(V,null,a.a.createElement(X,{src:k.a}),"Cerebral"),a.a.createElement(Y,null,this.props.messages.map(function(n,e){return a.a.createElement(j,{message:n.body,username:n.user,key:e})}),a.a.createElement(L,{ref:function(e){n.bottomOfMessages=e}})),a.a.createElement(W,null))}}]),e}(r.Component),nn=Object(p.b)(function(n){return{messages:n.messages}},function(n){return{setQuestion:function(e){return n(g(e))}}})(Z),en=t(29),tn=t.n(en);function rn(){var n=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #C5EEF0;\n"]);return rn=function(){return n},n}function an(){var n=Object(f.a)(["\n    ",";\n"]);return an=function(){return n},n}Object(h.createGlobalStyle)(an(),tn.a);var on=h.default.div(rn()),un=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement(on,null,a.a.createElement(nn,null))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var cn=t(10),sn=t(30),ln=Object(cn.c)({messages:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_MESSAGE":return[].concat(Object(M.a)(n),[e.message]);case"SET_QUESTION":var t={user:"Cerebral",body:C.find(function(n){return n.id===e.questionId}).question};return[].concat(Object(M.a)(n),[t]);default:return n}},currentQuestion:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT_QUESTION":return n+1;case"SET_QUESTION":return e.questionId;default:return n}}}),dn=t(31),fn=t.n(dn);i.a.render(a.a.createElement(p.a,{store:Object(cn.d)(ln,Object(cn.a)(sn.a,fn.a))},a.a.createElement(un,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.e4de4d18.chunk.js.map