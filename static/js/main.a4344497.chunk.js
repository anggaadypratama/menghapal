(this["webpackJsonprandom-generator"]=this["webpackJsonprandom-generator"]||[]).push([[0],{12:function(e,a,t){},24:function(e,a,t){e.exports=t(38)},29:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=(t(29),t(30),t(12),t(31),t(23)),s=t(2),m=Object(n.createContext)(),u=m.Provider,i=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1],m=Object(n.useState)(""),i=Object(s.a)(m,2),d=i[0],b=i[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),v=E[0],p=E[1],h=Object(n.useState)(null),g=Object(s.a)(h,2),N=g[0],j=g[1],x=Object(n.useState)(!0),y=Object(s.a)(x,2),k=y[0],w=y[1],O=Object(n.useState)({}),S=Object(s.a)(O,2),C=S[0],D=S[1];return l.a.createElement(u,{value:{setRandom:c,textSatu:d,setTextSatu:b,textDua:v,setTextDua:p,angka:N,setAngka:j,submit:function(e){e.preventDefault();var a=Math.floor(100*Math.random()+1);c([].concat(Object(o.a)(r),[{id:a,textSatu:d,textDua:v}]))},hapusData:function(e){c(r.filter((function(a){return a.id!==e})))},acak:k,setAcak:w,random:r,hapusAll:function(){c(r.splice(0,r.length-r.length))},searchResults:C,setSearchResults:D}},e.children)},d=(t(32),"#044756"),b="#02C9A8",f="#F63340",E="#ffffff",v=t(9),p=t(6),h=function(e){var a=e.setText,t=e.judul;return l.a.createElement("div",{className:"mt-4 form-group"},l.a.createElement("input",{type:"text",id:"name",className:"form-control",required:!0,onChange:function(e){return a(e.target.value.toLowerCase())}}),l.a.createElement("label",{className:"form-control-placeholder",htmlFor:"name"},t))},g=function(e){var a=e.style,t=e.judul,n=e.color,r=e.disabled,c=void 0!==r&&r,o=e.click,s=void 0===o?"":o,m=e.type,u=void 0===m?"submit":m,i=e.margin,d=void 0===i?"mt-0":i;return l.a.createElement("div",null,l.a.createElement("input",{type:u,id:"submit",style:{backgroundColor:a,color:n},className:"".concat(d," btn rounded-pill btn-block"),defaultValue:t,disabled:c,onClick:s}))},N=t(7),j=t.n(N),x=t(11),y=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useContext)(m).random,o=c.length<1,u=function(){var e=Object(x.a)(j.a.mark((function e(){var a,n,l,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,n=JSON.stringify(c),l=new Blob([n],{type:"application/json"}),e.next=5,URL.createObjectURL(l);case 5:r=e.sent,(o=document.createElement("a")).href=r,o.download=a+".json",document.body.appendChild(o),o.click(),document.body.removeChild(o);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn  btn-block",style:{backgroundColor:d,color:E,fontFamily:"arial",fontWeight:"bold"},"data-toggle":"modal","data-target":"#exampleModal","data-whatever":"@mdo",disabled:o},"Download"),l.a.createElement("div",{className:"modal fade ",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Download"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"recipient-name",className:"col-form-label"},"Nama File:"),l.a.createElement("input",{type:"text",className:"form-control",id:"recipient-name",onChange:function(e){return r(e.target.value)},required:!0})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-block upload",onClick:u},"Download"))))))},k=function(){var e=Object(n.useContext)(m),a=e.random,t=e.setRandom,r=Object(n.useState)(""),c=Object(s.a)(r,2),o=c[0],u=c[1],i=function(){var e=Object(x.a)(j.a.mark((function e(a){var n,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n=a.target.files[0],u(n.name),(l=new FileReader).onload=function(){var e=Object(x.a)(j.a.mark((function e(a){var n,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.target.result,l=JSON.parse(n),t(l);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l.readAsText(n);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:""},l.a.createElement("label",{htmlFor:"files",className:"btn upload btn-block"},!o||a.length<1?"Pilih file":o.length<12?"".concat(o):"".concat(o.substring(0,12),"...")),l.a.createElement("input",{type:"file",accept:".json",title:"",id:"files",onChange:function(e){return i(e)},style:{visibility:"hidden"}}))},w=function(){var e=Object(n.useContext)(m),a=e.random,t=e.setTextSatu,r=e.setTextDua,c=e.submit,o="ada ".concat(a.length," data");return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:c},l.a.createElement("h1",null,l.a.createElement("div",{style:{color:d},className:"mt-5 d-flex justify-content-center"},o.toLocaleUpperCase())),l.a.createElement("div",{className:"mt-5"},l.a.createElement(h,{setText:t,judul:"Pertanyaan"}),l.a.createElement(h,{setText:r,judul:"Jawaban"})),l.a.createElement("br",null),l.a.createElement(g,{style:b}),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-6"},l.a.createElement(k,null)),l.a.createElement("div",{className:"col-6"},l.a.createElement(y,null)))))},O=function(){var e=Object(n.useContext)(m),a=e.hapusAll,t=e.random;return l.a.createElement(g,{type:"button",judul:"Hapus Semua",style:f,color:E,click:a,disabled:t<1})},S=function(e){var a=e.kunci,t=e.pernyataanSatu,n=e.pernyataanDua,r=e.hapusData;return l.a.createElement("tr",{className:"tabel",keys:a,onClick:function(){return r(a)}},l.a.createElement("td",{className:"filterable-cell"},t),l.a.createElement("td",{className:"filterable-cell"},n))},C=function(){var e=Object(n.useContext)(m),a=e.random,t=e.hapusData;return a.map((function(e){return l.a.createElement(S,{kunci:e.id,pernyataanSatu:e.textSatu,pernyataanDua:e.textDua,hapusData:t})}))},D=function(){var e=Object(n.useContext)(m).random;return l.a.createElement("div",null,l.a.createElement("table",{className:"mt-5 table-fixed table table-hover table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Pertanyaan"),l.a.createElement("th",{scope:"col"},"Jawaban"))),l.a.createElement("tbody",null,l.a.createElement(C,null))),e.length<1?"":l.a.createElement(O,null))},A=function(){return l.a.createElement("div",{className:"container margin-bottom"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-sm-12 offset-lg-1"},l.a.createElement(w,null)),l.a.createElement("div",{className:"col-lg-6 col-sm-12 offset-lg-1"},l.a.createElement(D,null))))},T=function(e){var a=e.pertama;return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement("h1",{style:{color:d}},a))},M=function(e){var a=e.satu,t=Object(n.useState)(""),r=Object(s.a)(t,2),c=r[0],o=r[1],u=Object(n.useContext)(m).setAcak;return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=c===a?"benar":"salah";alert(t),u("benar"!==t)}},l.a.createElement(h,{setText:o,judul:"Jawab"}),l.a.createElement(g,{style:d,margin:"mt-4",color:E,judul:"Jawab"}))},F=function(e){var a=e.pertanyaan,t=e.jawabanSatu;return l.a.createElement("div",null,l.a.createElement(T,{pertama:a}),l.a.createElement(M,{satu:t}))},J=function(e){var a=e.acak,t=e.angka;console.log(a);var n=a[null==t?0:t];return console.log(n),console.log(t),l.a.createElement(F,{pertanyaan:n.textSatu,jawabanSatu:n.textDua})},L=function(){var e=Object(n.useContext)(m),a=e.random,t=e.setAngka,r=e.angka,c=e.acak,o=void 0===c||c;return l.a.createElement("div",null,l.a.createElement(J,{acak:a,angka:r}),l.a.createElement(g,{type:"button",style:b,click:function(){if(a.length>1){var e=Math.floor(Math.random()*a.length);t(e)}else alert("nilai harus lebih dari 1")},judul:"Acak",disabled:o,color:d,margin:"mt-2"}))},R=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(L,null))},P=function(){return l.a.createElement("div",{className:"container d-flex mt-5 justify-content-center"},l.a.createElement("h1",{className:"text-center ",style:{color:d,fontFamily:"arial"}},"404 ",l.a.createElement("br",null),"NOT FOUND"))},B=function(e){var a=Object(n.useContext)(m).random;return l.a.createElement(v.a,null,e.children,l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",component:A}),a.length<1?l.a.createElement(p.a,{from:"/tebak",to:"/"}):l.a.createElement(p.b,{path:"/tebak",component:R}),l.a.createElement(p.b,{path:"/404",component:P}),l.a.createElement(p.a,{from:"*",to:"/404"})))},U=function(){var e=Object(n.useContext)(m).random,a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1];function o(e){0===window.scrollY&&!0===r?c(!1):0!==window.scrollY&&!0!==r&&c(!0)}return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}})),l.a.createElement(B,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light  bg-white sticky-top",style:{transition:".2s",boxShadow:r?"0px 5px 10px #888888":"none"}},l.a.createElement("div",{className:"container"},l.a.createElement(v.b,{className:"navbar-brand",style:{color:d},to:"/"}),l.a.createElement("button",{className:"navbar-toggler border-0",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav m-auto"},l.a.createElement("li",{className:"nav-item "},l.a.createElement(v.b,{className:"nav-link ",to:"/"},"Input")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link",to:e.length<1?"/":"/tebak"},"Mulai")))))))},I=function(){return l.a.createElement("div",null,l.a.createElement(U,null))},W=(t(18),function(){return l.a.createElement("div",{class:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"d-flex text justify-content-center"},"Made with \u2665 in Bandung \xa9 2020 Angga Ady Pratama. All rights reserved.")))}),q=function(){return document.title="Ngapalkeun",l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement(i,null,l.a.createElement(I,null),l.a.createElement(W,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a4344497.chunk.js.map