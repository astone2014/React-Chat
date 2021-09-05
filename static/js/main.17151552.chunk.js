(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n.n(a),i=n(35),s=n.n(i),r=(n(44),n(15)),o=(n(45),n(22)),d=n(36);n(47),n(55);o.a.initializeApp({apiKey:"AIzaSyBq__aBYuqn7QJKNJCFlp9ljHbkfrhzyrY",authDomain:"react-chat-c2718.firebaseapp.com",projectId:"react-chat-c2718",storageBucket:"react-chat-c2718.appspot.com",messagingSenderId:"582876886291",appId:"1:582876886291:web:3ccbdf4a11e845376c16e6",measurementId:"G-LF0SC3KMPF"});var l=o.a.auth(),u=o.a.firestore(),A=(n(50),n(11));function j(){return Object(A.jsxs)("header",{children:[Object(A.jsxs)("a",{className:"logo",href:"/",children:[Object(A.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"",height:"20"}),Object(A.jsx)("span",{className:"css-184keb2",children:"React Chat"})]}),Object(A.jsx)("span",{className:"flexer"}),Object(A.jsx)("div",{className:"actions",children:Object(A.jsx)(b,{})})]})}function b(){return l.currentUser&&Object(A.jsx)("button",{onClick:function(){return l.signOut()},children:"Sign out"})}var m=n(0),g=n.n(m),v=n(1),p=(n(52),n(53),n(37)),h=n(38);function f(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=u.collection("messages"),i=n.orderBy("createdAt").limitToLast(50),s=Object(p.a)(i,{idField:"id",snapshotListenOptions:{}}),d=Object(r.a)(s,1)[0],j=Object(a.useState)(""),b=Object(r.a)(j,2),m=b[0],f=b[1];i.onSnapshot({next:function(t){var n;0!==t.size&&(null===(n=e.current)||void 0===n||n.scrollIntoView({behavior:"smooth"}))}}),Object(a.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.focus()}),[]);var O=function(){var e=Object(v.a)(g.a.mark((function e(a){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(c=t.current)||void 0===c||c.focus(),a.preventDefault(),m){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,n.add({text:m,createdAt:o.a.firestore.FieldValue.serverTimestamp(),uid:l.currentUser.uid,photoURL:l.currentUser.photoURL,displayName:l.currentUser.displayName});case 6:f("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("div",{id:"chat",children:[Object(A.jsxs)("div",{id:"messages",children:[null===d||void 0===d?void 0:d.map((function(e,t){var n,a,i,s,r,o=d[t-1],l=(null===e||void 0===e||null===(n=e.createdAt)||void 0===n?void 0:n.seconds)-(null===o||void 0===o||null===(a=o.createdAt)||void 0===a?void 0:a.seconds);(0===t||l>60)&&(i=Object(A.jsx)("p",{className:"message-info message-date",children:Object(h.a)(1e3*(null===e||void 0===e||null===(r=e.createdAt)||void 0===r?void 0:r.seconds))}));return(null===e||void 0===e?void 0:e.displayName)!==(null===o||void 0===o?void 0:o.displayName)&&(s=Object(A.jsx)("p",{className:"message-info",children:null===e||void 0===e?void 0:e.displayName})),Object(A.jsxs)(c.a.Fragment,{children:[i,s,Object(A.jsx)(I,{message:e},e.id)]},e.id)})),Object(A.jsx)("div",{ref:e})]}),Object(A.jsxs)("form",{onSubmit:O,children:[Object(A.jsx)("input",{ref:t,name:"message",placeholder:"Aa",autoComplete:"off",value:m,onChange:function(e){return f(e.target.value)}}),Object(A.jsx)("button",{type:"submit",children:"Send"})]})]})}function I(e){var t=l.currentUser.uid===e.message.uid,n="message ".concat(t?"sent":"received"," animate__animated animate__fadeIn");return Object(A.jsxs)("div",{className:n,children:[Object(A.jsx)("img",{className:"avatar",alt:"avatar",src:t?l.currentUser.photoURL:e.message.photoURL?e.message.photoURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXg4OC9vb3f39/Kysrc3Ny+vr7Q0NDHx8fNzc3ExMTU1NTV1dXY2NjBwcG6urrLy8vXjdnDAAAEKElEQVR4nO3d63KrIBQF4IAIBgXf/22P5GpbEwGVzfasb6bTv6zhoiCQywUAAAAAAAAAAAAAAAAAAAAAAABgiVTW6k5bqyR1UQ6gbOP8RAgR/rnGKuoi7ao3bcg251vTUxdrN/31d7xHyOs5Miq3nO+W0Z2grXaf890ydtQF3Eh+aKDzpsp6YFXtSr6gZdxSh4h8wUBd0FwqMqAQTGtRxjTRR0Pl2Rev0QGFuFIXNsfKY+Injg+N2FHmid9ok9JGA3bt1Ka00cBb6iIncokBhXDURU7Tp1bhVIm8JhqpvTBg1RPj32bmOL3Z6PRGymysMVl1aKiLHU+mj6SB4/N2qnIa6dRM+XTEITMhnze3rIFmSqipCx6tywooBJ8JxvkTNpkJG+qCRzt/HZ4/oc5MyGcszZg7BYzmT+d/p0lYKZ3jtGqaMwHmNQXOmx/yGWj+hzn++ddp0pdLmS1iTDLqkLrIiZLHGlbjTJC8VMNokeYhsScyemN7SVtRZLSS+JLUTvm10SDlsc/qYf8WPYni2AnvbGRCZs/6uT4qINsaDIb1mWLLZ6V7kTQrexMNy1H0B/tne/AsX8u4C77J7kNG33b8K/BO6oV9wt7ps+S7Ud30ivOMOf13HdOH/DdqsF1jjGk6O5wwHgAAAAAAAMBFymn2a3U3Nk1jpr8xXDswKHmGVYwwrzeu9Y/LBmarNEHrDOf5vhy0ccKvnnT2whk9sKvOYUz+BjzyWftW+iqydgyJq2bQYnPjcQlpt8R7hax2pV91m+M9Q1a5XDysfGRKDGlqG3f2zVdfRpW3n3TNtZa2Kse96+/Jj1W8CHz7Aro5YgVfUNe+Ym/OSP0VPGInwla0OxmS7r7IRXlnxsEt9BWRalufPOYZsYTmLqnMYyN5WoqA5WowINieWTYgwVmFpswg8+YLHzDNOE+xOWLR1xtZPF9QsivmHmXepmA7zTu4tV252RRNFRasxKLP+rlih0wzDzJvV2xPf+5x++1KzTLybhDaQ6lJRt4NQnsodafb+evw/GNp5FGY/RU8XFN8ZhGUnV1QDDZlr46keDMtvMZfvisWP+GWeWNZLorD7Id9j1kMOJYPWGw9+BaQaE244IowTcByEQlvPSkTkfRal9Wfr9jOE99bc/hwQ/bh6eXgT4g1XLife8FenCpurTnwS3ctZ/XVQeONr2ZDzVGrbxV0wbdh/wmjq6SFPsmdp/2+qWI71A/Dl18fS85XWwU+6L0G1baKZ8QStc9HqaaeIfQvtbk7+qrzBRvrsfp8gfp0W8tq9fG5DkRak7yp3Qtj63tAfKG0Wz0QNIvnXeXnLBYpa+IeH63h+8Oyt9NdX+pyqjuOp7p+kaq/H2Lzs98D9vcja/2pfvtYDb21WndaW9vzPXQIAAAAAAAAAAAAAAAAAAAAAAAAh/oHOVI0YSQb7ewAAAAASUVORK5CYII="}),Object(A.jsx)("div",{className:"content",children:e.message.text})]})}function O(){return Object(A.jsxs)("div",{className:"sign-in",children:[Object(A.jsx)("button",{className:"sign-in-google",onClick:function(){var e=new o.a.auth.GoogleAuthProvider;l.signInWithPopup(e)},children:"Sign in with Google"}),Object(A.jsx)("button",{className:"sign-in-google",onClick:function(){var e=new o.a.auth.FacebookAuthProvider;l.signInWithPopup(e)},children:"Sign in with Facebook"})]})}var x=function(){var e=Object(d.a)(l),t=Object(r.a)(e,1)[0];return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(j,{}),t?Object(A.jsx)(f,{}):Object(A.jsx)(O,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(x,{})}),document.getElementById("root")),N()}},[[54,1,2]]]);
//# sourceMappingURL=main.17151552.chunk.js.map