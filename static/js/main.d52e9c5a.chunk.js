(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(87)},85:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a,i=n(0),s=n.n(i),r=n(30),c=n(8),l=n(11),o=n(9),u=n(24),d=n(90),p=n(89),m=n(26),f=[{id:+m.uniqueId(),name:"ToDo"},{id:+m.uniqueId(),name:"Doing"},{id:+m.uniqueId(),name:"Done"}],h={lists:f,notes:[{id:1,discription:"Fix bug whith player",listId:+f[0].id},{id:2,discription:"Add feature with D3",listId:+f[0].id},{id:3,discription:"Learn EmberJS",listId:+f[1].id}]},E=n(23),b=n.n(E),O=n(33),v=n(26),N=Object(d.a)("ADD_LIST"),j=Object(d.a)("ADD_NOTE"),y=Object(d.a)("DELETE_LIST"),S=Object(d.a)("EDIT_LIST"),L=Object(d.a)("EDIT_NOTE"),g=Object(d.a)("DELETE_NOTE"),I=Object(d.a)("TRANSFER_NOTE"),D=Object(p.a)((a={},Object(o.a)(a,N,function(e,t){var n=e.lists,a=e.notes,i=t.payload;return{lists:Object(u.a)(n).concat([{id:+v.uniqueId(),name:i}]),notes:a}}),Object(o.a)(a,j,function(e,t){var n=e.lists,a=e.notes,i=t.payload,s=i.discription,r=i.listId;return{lists:n,notes:Object(u.a)(a).concat([{id:+v.uniqueId(),discription:s,listId:+r}])}}),Object(o.a)(a,y,function(e,t){var n=e.lists,a=e.notes,i=t.payload;return{lists:n.filter(function(e){return e.id!==i}),notes:a.filter(function(e){return e.listId!==i})}}),Object(o.a)(a,S,function(e,t){var n=e.lists,a=e.notes,i=t.payload,s=i.id,r=i.name;return{lists:n.map(function(e){return e.id===s?(e.name=r,e):e}),notes:a}}),Object(o.a)(a,L,function(e,t){var n=e.lists,a=e.notes,i=t.payload,s=i.id,r=i.discription;return{lists:n,notes:a.map(function(e){return e.id===s?(e.discription=r,e):e})}}),Object(o.a)(a,g,function(e,t){var n=e.lists,a=e.notes,i=t.payload;return{lists:n,notes:a.filter(function(e){return e.id!==i})}}),Object(o.a)(a,I,function(e,t){var n=e.lists,a=e.notes,i=t.payload,s=i.id,r=i.listId;return{lists:n,notes:a.map(function(e){return e.id===s?(e.listId=+r,e):e})}}),a),h),k=function(e){return b()(e,"cardList")},C=Object(O.a)(k,function(e){return b()(e,"lists")}),T=Object(l.b)({cardList:D}),V=Object(l.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=n(1),_=n(2),A=n(4),x=n(3),q=n(5),K=function(e){var t=e.listId,n=e.listName,a=e.editList,i=e.changeState,r=n;return s.a.createElement("div",{className:"openHeader"},s.a.createElement("input",{defaultValue:n,className:"inputHeader",onKeyDown:function(e){r=e.currentTarget.value,13===e.keyCode&&(a(t,r),i())}}),s.a.createElement("button",{className:"buttonHeader",onClick:function(){a(t,r),i()}},"\u2714"))},R=function(e){var t=e.listName;return s.a.createElement("span",null,t)},X=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.listId,n=e.listName,a=e.isOpen,i=e.changeState;return a?s.a.createElement(K,{listId:t,listName:n,editList:this.props.onEditList,changeState:i}):s.a.createElement(R,{listName:n})}}]),t}(i.Component),H=Object(c.b)(function(e){return{store:e.cardList}},{onEditList:function(e,t){return S({id:e,name:t})}})(X),J=function(e){return e.lists.map(function(e){return s.a.createElement("option",{key:e.id,value:e.id},e.name)})},F=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(A.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(i)))).state={selectValue:n.props.note.listId,inputValue:n.props.note.discription},n}return Object(q.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.note,a=t.changeState,i=t.lists,r=t.editNote,c=t.transferNote;return s.a.createElement("div",{className:"openList"},s.a.createElement("input",{id:n.id+"input",type:"text",defaultValue:n.discription,onKeyDown:function(t){e.setState({inputValue:t.currentTarget.value}),27===t.keyCode?a():13===t.keyCode&&(r(n.id,e.state.inputValue),a())}}),s.a.createElement("div",{className:"openList select"},s.a.createElement("select",{defaultValue:n.listId,onChange:function(t){e.setState({selectValue:t.currentTarget.value})}},s.a.createElement("option",{disabled:!0},"---select list---"),s.a.createElement(J,{lists:i})),s.a.createElement("button",{onClick:function(){c(n.id,e.state.selectValue),r(n.id,e.state.inputValue),a()}},"Done")))}}]),t}(i.Component),P=function(e){var t=e.note,n=e.changeState,a=e.deleteNote;return s.a.createElement("div",{className:"closeList"},s.a.createElement("div",{className:"closeList note"},t.discription),s.a.createElement("a",{className:"hand",href:"public/index.html",onClick:function(e){return e.preventDefault()}},s.a.createElement("div",{className:"hand edit",onClick:function(){n()}})),s.a.createElement("a",{className:"hand",href:"public/index.html",onClick:function(e){return e.preventDefault()}},s.a.createElement("div",{className:"hand delete",onClick:function(){return a(t.id)}})))},U=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(A.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1},n.changeState=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(q.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.note,n=e.lists;return s.a.createElement("div",null,this.state.isOpen?s.a.createElement(F,{note:t,changeState:this.changeState,lists:n,editNote:this.props.onEditNote,transferNote:this.props.onTransferNote}):s.a.createElement(P,{note:t,changeState:this.changeState,deleteNote:this.props.onDeleteNote}))}}]),t}(i.Component),B=Object(c.b)(function(e){return{store:e.cardList}},{onEditNote:function(e,t){return L({id:e,discription:t})},onDeleteNote:g,onTransferNote:function(e,t){return I({id:e,listId:t})}})(U),z=function(e){var t=e.notes,n=e.lists,a=e.list;return t.filter(function(e){return e.listId===a.id}).map(function(e){return s.a.createElement("section",{key:e.id},s.a.createElement(B,{note:e,lists:n}))})},G=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(A.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1,inputValue:""},n.changeState=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(q.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"card"},s.a.createElement("h1",null,s.a.createElement("a",{className:"hand",href:"public/index.html",onClick:function(e){return e.preventDefault()}},s.a.createElement("div",{id:"penId",className:"hand editList",onClick:function(){e.changeState()}})),s.a.createElement("a",{className:"hand",href:"public/index.html",onClick:function(e){return e.preventDefault()}},s.a.createElement("div",{className:"hand deleteList",onClick:function(){return e.props.onDeleteList(e.props.list.id)}})),s.a.createElement(H,{listId:this.props.list.id,listName:this.props.list.name,isOpen:this.state.isOpen,changeState:this.changeState})),s.a.createElement("div",{className:"card body"},s.a.createElement(z,{notes:this.props.store.notes,lists:this.props.store.lists,list:this.props.list})),s.a.createElement("div",{className:"card input"},s.a.createElement("a",{className:"hand",href:"public/index.html",onClick:function(e){e.preventDefault()}},s.a.createElement("div",{className:"hand addList",onClick:function(){e.props.onAddNote(e.props.list.id,e.state.inputValue),e.setState({inputValue:""})}})),s.a.createElement("input",{value:this.state.inputValue,onChange:function(t){e.setState({inputValue:t.currentTarget.value})},onKeyPress:function(t){13===t.charCode&&(e.props.onAddNote(e.props.list.id,e.state.inputValue),e.setState({inputValue:""}))}})))}}]),t}(i.Component),M=Object(c.b)(function(e){return{store:e.cardList}},function(e){return{onAddNote:function(t,n){return e(j({listId:t,discription:n}))},onDeleteList:function(t){return e(y(t))}}})(G),Q=function(e){return e.lists.map(function(e){return s.a.createElement("section",{key:e.id},s.a.createElement(M,{list:e}))})},W=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(A.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(i)))).state={inputValue:""},n}return Object(q.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;this.state.inputTarget;return s.a.createElement("div",null,s.a.createElement(Q,{lists:this.props.lists}),s.a.createElement("section",{className:"card newList"},s.a.createElement("div",{className:"card input"},s.a.createElement("a",{href:"public/index.html",className:"hand",onClick:function(e){e.preventDefault()}},s.a.createElement("div",{className:"hand addList",onClick:function(){e.props.onAddList(e.state.inputValue),e.setState({inputValue:""})}})),s.a.createElement("input",{value:this.state.inputValue,className:"inputNewList",type:"text",onChange:function(t){e.setState({inputValue:t.currentTarget.value})},onKeyPress:function(t){13===t.charCode&&(console.log("pressEnter"),e.props.onAddList(e.state.inputValue),e.setState({inputValue:""}))}}))))}}]),t}(i.Component),Y=Object(c.b)(function(e){return{store:k(e),lists:C(e)}},{onAddList:N})(W),Z=function(e){function t(){return Object(w.a)(this,t),Object(A.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("div",{className:"header"},"ToDo")),s.a.createElement("section",null,s.a.createElement(Y,null)))}}]),t}(i.Component);n(85);Object(r.render)(s.a.createElement(c.a,{store:V},s.a.createElement(Z,null)),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.d52e9c5a.chunk.js.map