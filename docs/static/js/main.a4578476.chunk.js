(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(38),s=t.n(c),i=(t(101),t(10)),l=t(11),o=t(13),d=t(12),m=t(14),u=(t(102),t(95)),h=t(28),p=(t(103),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{className:"header__title"},"How was your day today?  ",r.a.createElement("span",{role:"img","aria-label":"blinking-eye emoji"},"\ud83d\ude09")," ")}}]),a}(r.a.Component)),f=t(30),b=(t(104),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("p",{className:"footer__copy"},"\xa9  ",r.a.createElement("a",{href:"https://www.linkedin.com/in/ana-mar%C3%ADa-romero-garcia/",target:"blank",className:"linkedin"},"SuperAnika"),"  2019")}}]),a}(r.a.Component)),v=t(32),g=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;var E={getFormatedDate:function(e){return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},reviver:function(e,a){if("string"===typeof a&&g.test(a))return new Date(a);return a}},_=(t(105),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.dateList,n=a.hideInfo,c=a.isChecked,s=t?t.filter(function(e){return"happy"===e.mood}):0,i=t?t.filter(function(e){return"sad"===e.mood}):0;return r.a.createElement("div",{className:"home__wrapper"},r.a.createElement(v.b,{to:"/edit"},r.a.createElement("button",{className:"add__buttom"},"+")),r.a.createElement("div",{className:"mood__container"},0===t.length?r.a.createElement("p",{className:"welcome__info"},"You can start adding your date status by clicking on + button"):t.map(function(a,t){return"happy"===a.mood?r.a.createElement("div",{className:"face__container",key:t},r.a.createElement("span",{className:"face",role:"img","aria-label":"happy face"},"\ud83d\ude01"),r.a.createElement("div",{className:c?"info__container hide":"info__container"},r.a.createElement("p",{className:"date"},E.getFormatedDate(a.newDate)),r.a.createElement("p",{className:"text"},a.message))):r.a.createElement("div",{className:"face__container",key:t,onClick:e.handleShow},r.a.createElement("span",{className:"face",role:"img","aria-label":"sad face"},"\ud83d\ude21"),r.a.createElement("div",{className:c?"info__container hide":"info__container"},r.a.createElement("p",{className:"date"},E.getFormatedDate(a.newDate))))})),r.a.createElement("div",{className:"options"},r.a.createElement("label",{className:"hide__info",htmlFor:"hideInfo"},r.a.createElement("input",{id:"hideInfo",type:"checkbox",value:"hideInfo",name:"hideInfo",onClick:n}),"Hide info"),r.a.createElement("p",{className:"number"},"Good days: ",s.length),r.a.createElement("p",{className:"number"},"Bad days: ",i.length)))}}]),a}(r.a.Component)),y=t(76),k=(t(113),t(114),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.handleChange,t=e.handleChecked,n=e.mood,c=e.handleInputMessage,s=e.message,i=e.reset,l=e.saveData,o=e.newDate,d=e.isDuplicated;return r.a.createElement("div",{className:"edit__wrapper"},r.a.createElement("div",{className:"fill_info"},r.a.createElement("h2",{className:"edit__title"},"Choose a date"),r.a.createElement(y.a,{selected:o,onChange:a,className:d?"calendar__input calendar__error":"calendar__input"}),r.a.createElement("h2",{className:"edit__title"},"Was it a good or a bad day?"),r.a.createElement("div",{className:"mood__options"},r.a.createElement("label",{htmlFor:"happy"},r.a.createElement("input",{id:"happy",type:"radio",value:"happy",name:"mood",onClick:t}),":)"),r.a.createElement("label",{htmlFor:"sad"},r.a.createElement("input",{id:"sad",type:"radio",value:"sad",name:"mood",onClick:t}),":(")),"happy"===n?r.a.createElement("div",{className:"message__container"},r.a.createElement("label",{className:"edit__title"},"Remember the good things!"),r.a.createElement("input",{type:"text",className:"input__msg",onChange:c,value:s})):""),r.a.createElement("p",{className:d?"error__msg error":"error__msg"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})," You already saved that date!"),r.a.createElement("div",{className:"buttons__container"},r.a.createElement("button",{onClick:l,className:"btn save"},"Save"),r.a.createElement(v.b,{to:"/",className:"btn cancel",onClick:i},"Cancel")))}}]),a}(r.a.Component)),N=(t(115),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).state={mood:"",message:"",newDate:new Date,dateList:t.getSavedState(),isDuplicated:!1,isChecked:!1},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleChecked=t.handleChecked.bind(Object(h.a)(t)),t.handleInputMessage=t.handleInputMessage.bind(Object(h.a)(t)),t.reset=t.reset.bind(Object(h.a)(t)),t.saveData=t.saveData.bind(Object(h.a)(t)),t.hideInfo=t.hideInfo.bind(Object(h.a)(t)),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"getSavedState",value:function(){var e=localStorage.getItem("savedInfo");return e=e?JSON.parse(e,E.reviver):[]}},{key:"hideInfo",value:function(e){var a=e.currentTarget.checked;this.setState({isChecked:a})}},{key:"handleChange",value:function(e){this.setState({newDate:e,isDuplicated:!1})}},{key:"handleChecked",value:function(e){var a=e.currentTarget.value;this.setState({mood:a})}},{key:"handleInputMessage",value:function(e){var a=e.currentTarget.value;this.setState({message:a})}},{key:"reset",value:function(){this.setState({mood:"",newDate:new Date,message:"",isDuplicated:!1})}},{key:"isNewDateInListDate",value:function(e,a){var t=!0,n=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){var i=c.value;if(E.getFormatedDate(i.newDate)===E.getFormatedDate(a))return!0}}catch(l){n=!0,r=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}return!1}},{key:"saveData",value:function(){var e={newDate:this.state.newDate,mood:this.state.mood,message:this.state.message};if(this.isNewDateInListDate(this.state.dateList,e.newDate))this.setState({isDuplicated:!0});else{var a=[].concat(Object(u.a)(this.state.dateList),[e]);this.setState({dateList:a}),localStorage.setItem("savedInfo",JSON.stringify(a)),this.reset(),this.props.history.push("/")}}},{key:"render",value:function(){var e=this,a=this.state,t=a.mood,n=a.message,c=a.newDate,s=a.dateList,i=a.isDuplicated,l=a.isChecked;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement(p,null)),r.a.createElement("main",{className:"main__wrapper"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(_,{dateList:s,isChecked:l,hideInfo:e.hideInfo})}}),r.a.createElement(f.a,{path:"/edit",render:function(){return r.a.createElement(k,{handleChange:e.handleChange,mood:t,handleChecked:e.handleChecked,handleInputMessage:e.handleInputMessage,message:n,newDate:c,reset:e.reset,saveData:e.saveData,isDuplicated:i})}}))),r.a.createElement("footer",{className:"footer"},r.a.createElement(b,null)))}}]),a}(r.a.Component)),O=Object(f.f)(N),j=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))}}]),a}(r.a.Component);s.a.render(r.a.createElement(v.a,null,r.a.createElement(j,null)),document.getElementById("root"))},96:function(e,a,t){e.exports=t(116)}},[[96,1,2]]]);
//# sourceMappingURL=main.a4578476.chunk.js.map