(this.webpackJsonptake_notes=this.webpackJsonptake_notes||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(8),s=a.n(i),r=(a(15),a(2)),d=(a(16),a(3));function l(e){for(var t=e[0].noteId,a=e[0].date_created,n=e[0].title,c=e.slice(1),i=[],s=[],r=[],d=[],l=[],o=[],u=[],j=[],b=[],x=0;x<c.length;x++)switch(c[x].type){case 0:b.push({id:c[x].id,data:c[x].data});break;case 1:s.push({id:c[x].id,data:c[x].data});break;case 2:r.push({id:c[x].id,data:c[x].data});break;case 3:o.push({id:c[x].id,data:c[x].data});break;case 4:d.push({id:c[x].id,data:c[x].data});break;case 5:i.push({id:c[x].id,data:c[x].data});break;case 6:j.push({id:c[x].id,data:c[x].data});break;case 7:l.push({id:c[x].id,data:c[x].data});break;case 8:u.push({id:c[x].id,data:c[x].data});break;default:console.log("invalid type")}return{id:t,date_created:a,title:n,locations:i,texts:l,links:s,events:o,checklists:j,transactions:d,images:r,contacts:b,lists:u}}function o(e){var t=[{type:-1,date_created:e.date_created,title:e.title||"",noteId:e.id}];for(var a in e)"checklists"===a?e[a].map((function(e){return t.push({type:6,id:e.id,data:{list_items:e.data.list_items,title:e.data.title}}),null})):"lists"===a?e[a].map((function(e){return t.push({type:8,id:e.id,data:{list_items:e.data.list_items,title:e.data.title}}),null})):"texts"===a?e[a].map((function(e){return t.push({type:7,id:e.id,data:{text:e.data.text}}),null})):"images"===a?e[a].map((function(e){return t.push({type:2,id:e.id,data:{image_caption:e.data.image_caption,image_url:e.data.image_url,title:e.data.title}}),null})):"links"===a?e[a].map((function(e){return t.push({type:1,id:e.id,data:{title:e.data.title,link_address:e.data.link_address}}),null})):"locations"===a?e[a].map((function(e){return t.push({type:5,id:e.id,data:{title:e.data.title,location_address:e.data.location_address}}),null})):"events"===a?e[a].map((function(e){return t.push({type:3,id:e.id,data:{title:e.data.title,day:e.data.day,hours:e.data.hours,minutes:e.data.minutes,month:e.data.month,year:e.data.year}}),null})):"contacts"===a?e[a].map((function(e){return t.push({type:0,id:e.id,data:{title:e.data.title,contact_value:e.data.contact_value}}),null})):"transactions"===a&&e[a].map((function(e){return t.push({type:4,id:e.id,data:{transaction_amt:e.data.transaction_amt,transaction_end:e.data.transaction_end,transaction_type:e.data.transaction_type}}),null}));return t}function u(e,t){var a=JSON.parse(localStorage.getItem("User".concat(t))),n=a.notes.map((function(t,a){return t[0].noteId===e[0].noteId?e:t}));a.notes=n,localStorage.setItem("User".concat(t),JSON.stringify(a))}var j=a(19),b=a.p+"static/media/image_default.1b46f609.png",x=c.a.createContext(),h=c.a.createContext(),O=c.a.createContext(),m=c.a.createContext(),p=c.a.createContext(),f=a(0);function v(e,t){return t.filter((function(t,a){return t===e})).length}function _(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(f.jsx)("input",{type:"text",className:"wide-input",placeholder:e.field_name,value:c[e.index].data[e.type]||"",onChange:function(t){var a=c.map((function(a,n){return a.id===e.id_value&&(a.data[e.type]=t.target.value),a}));i(a)}})}function g(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(f.jsx)("input",{type:"text",className:"wider-input",value:c[e.index].data[e.type]||"",placeholder:e.field_name,onChange:function(t){var a=c.map((function(a,n){return a.id===e.id_value&&(a.data[e.type]=t.target.value),a}));i(a)}})}function y(e){var t=Object(n.useContext)(z)[0],a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.innerText=t[e.index].data[e.type]||""}),[t,e.index,e.type]),Object(f.jsx)("div",{className:"textarea image",ref:a,contentEditable:"true",onBlur:function(t){e.add_url_to_context("image_caption",t.target.innerText)}})}function N(e){var t=Object(n.useState)(b),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(z),d=Object(r.a)(s,2),l=d[0],o=d[1],u=Object(n.useContext)(x)[1],j=Object(n.useRef)(null),h=Object(n.useState)(0),O=Object(r.a)(h,2),m=O[0],p=O[1],_=Object(n.useRef)(null);function g(){var e=j.current.value;""!==e?fetch(e,{mode:"cors"}).then((function(t){t.blob().then((function(t){i(e),p(0),N("image_url",e),N("title","Image")}))})).catch((function(e){console.log(e),p(1)})):i(b)}function N(t,a){o(l.map((function(n,c){return n.id===e.id_value&&(n.data[t]=a),n})))}return Object(n.useEffect)((function(){g()}),[]),Object(f.jsxs)("div",{className:"image-input",children:[Object(f.jsx)("input",{type:"text",className:"inline-input",ref:j,placeholder:e.field_name,value:l[e.index].data.image_url||"",onChange:function(){g()}}),Object(f.jsx)("button",{className:"choose-image",onClick:function(){u([1,"Currently Not Supported"])}}),Object(f.jsx)("span",{className:"in-error",style:{opacity:m},children:"Invalid File / Link"}),Object(f.jsx)("img",{src:c,className:"image-preview",alt:"could not load"}),Object(f.jsx)("input",{type:"file",ref:_,onChange:function(e){var t=e.target.files[0];v(t.type,["image/svg+xml","image/png","image/jpg","image/jpeg"])?(i(URL.createObjectURL(t)),j.current.value=t.name,p(0),N("image_url",c),N("title",t.name)):p(1)}}),Object(f.jsx)(y,{type:"image_caption",index:e.index,add_url_to_context:N})]})}function k(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(J),d=Object(r.a)(s,2),l=d[0],o=d[1];return Object(f.jsxs)("div",{className:"note-segment",children:[Object(f.jsxs)("div",{className:"segment-header",children:[Object(f.jsx)("span",{icon:e.icon}),Object(f.jsx)("span",{children:e.label}),Object(f.jsx)("span",{onClick:function(){var t=l,a=c.filter((function(t,a){return t.id!==e.id_value}));t.unshift(c),o(t),i(a)}})]}),e.children,Object(f.jsx)("footer",{})]})}function C(e,t){return v(e,[1,3,5,7,8,10,12])?31:v(e,[4,6,9,11])?30:t%4===0?29:28}function S(e){for(var t=Object(r.a)(e,3),a=(t[0],t[1]),n=t[2],c=[],i=0,s=new Date(n,a-1,1).getDay(),d=0;d<42;d++)d>=s&&i<C(a,n)?c.push(++i):c.push(" ");return c}function w(e){var t=Object(n.useState)(S([1,1,2e3])),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(z),d=Object(r.a)(s,2),l=d[0],o=d[1];function u(t){o(l.map((function(a){return a.id===e.id_value&&(a.data.year+=t),a}))),i(S([1,l[e.index].data.month,l[e.index].data.year]))}function j(t){o(l.map((function(a){return a.id===e.id_value&&(-1===t&&(1===a.data.month?a.data.month=12:a.data.month+=t),1===t&&(12===a.data.month?a.data.month=1:a.data.month+=t)),a}))),i(S([1,l[e.index].data.month,l[e.index].data.year]))}Object(n.useEffect)((function(){i(S([l[e.index].data.day,l[e.index].data.month,l[e.index].data.year]))}),[l,e.index]);var b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(f.jsxs)("div",{className:"calendar",children:[Object(f.jsxs)("div",{className:"top-btn-group",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{onClick:function(){u(1)},children:"+"}),Object(f.jsx)("span",{children:l[e.index].data.year}),Object(f.jsx)("span",{onClick:function(){u(-1)},children:"-"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{onClick:function(){j(1)},children:"+"}),Object(f.jsx)("span",{children:b[l[e.index].data.month-1]}),Object(f.jsx)("span",{onClick:function(){j(-1)},children:"-"})]})]}),Object(f.jsxs)("div",{className:"week-column",children:[Object(f.jsx)("span",{children:"Sun"}),Object(f.jsx)("span",{children:"Mon"}),Object(f.jsx)("span",{children:"Tue"}),Object(f.jsx)("span",{children:"Wed"}),Object(f.jsx)("span",{children:"Thu"}),Object(f.jsx)("span",{children:"Fri"}),Object(f.jsx)("span",{children:"Sat"})]}),Object(f.jsx)("div",{className:"days",children:c.map((function(t,a){return" "!==t?t==l[e.index].data.day?Object(f.jsx)("span",{valid_date:"1",chosen:"1",children:t},a):Object(f.jsx)("span",{valid_date:"1",onClick:function(){var a;a=t,o(l.map((function(t){return t.id===e.id_value&&(t.data.day=a),t})))},children:t},a):Object(f.jsx)("span",{valid_date:"0"},a)}))}),Object(f.jsxs)("div",{className:"date-selected",children:[Object(f.jsx)("span",{children:"Selected Date"}),Object(f.jsxs)("span",{children:[l[e.index].data.day," ",b[l[e.index].data.month-1]," ",l[e.index].data.year]})]})]})}function A(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1];function s(t,a,n){i(c.map((function(c){return c.id===e.id_value&&(a>0?c.data[t]===n?c.data[t]=0:c.data[t]=Number(c.data[t])+1:0===a&&(0===c.data[t]?c.data[t]=n:c.data[t]=Number(c.data[t])-1)),c})))}return Object(f.jsxs)("div",{className:"time-input",children:[Object(f.jsxs)("div",{className:"time-block",children:[Object(f.jsx)("span",{onClick:function(){s("hours",0,23)},children:"-"}),Object(f.jsx)("span",{children:c[e.index].data.hours}),Object(f.jsx)("span",{onClick:function(){s("hours",1,23)},children:"+"})]}),Object(f.jsxs)("div",{className:"time-block",children:[Object(f.jsx)("span",{onClick:function(){s("minutes",0,59)},children:"-"}),Object(f.jsx)("span",{children:c[e.index].data.minutes}),Object(f.jsx)("span",{onClick:function(){s("minutes",1,59)},children:"+"})]})]})}function I(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1];function s(t){i(c.map((function(a){return a.id===e.id_value&&(a.data.transaction_type=t),a})))}return Object(f.jsxs)("div",{className:"transaction-input",children:[Object(f.jsx)("div",{select:0===c[e.index].data.transaction_type?1:0,onClick:function(){s(0)},children:"Paid/Lent To"}),Object(f.jsx)("div",{select:1===c[e.index].data.transaction_type?1:0,onClick:function(){s(1)},children:"Received By"})]})}function T(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),i=a[0],s=a[1];var l=Object(n.useRef)(null);return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)("ul",{className:"checklist",check_toggle:e.check_list_toggle,ref:l,children:(i[e.index].data.list_items||[]).map((function(t,a){return Object(f.jsxs)("li",{check:t.checked,children:[Object(f.jsx)("span",{onClick:function(){var a;a=t,s(i.map((function(t){return e.id_value===t.id&&(t.data.list_items=t.data.list_items.map((function(e){return e.id===a.id&&(e.checked=Number(!a.checked)),e}))),t})))}}),Object(f.jsx)("input",{placeholder:"Enter Item Info ...",value:t.item,type:"text",onChange:function(a){var n;n={checked:t.checked,id:t.id,item:a.target.value},s(i.map((function(t){return e.id_value===t.id&&(t.data.list_items=t.data.list_items.map((function(e){return e.id===n.id&&(e.item=n.item),e}))),t})))}}),Object(f.jsx)("span",{onClick:function(){var a;a=t,s(i.map((function(t){return e.id_value===t.id&&(t.data.list_items=t.data.list_items.filter((function(e){return e.id!==a.id}))),t})))}})]},t.id)}))}),Object(f.jsxs)("button",{onClick:function(){var t;t={checked:"0",item:"",id:Object(j.a)()},s(i.map((function(a){return e.id_value===a.id&&(a.data.list_items=[].concat(Object(d.a)(a.data.list_items||[]),[t])),a})))},children:[Object(f.jsx)("i",{}),"Add Item"]})]})}function L(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){i(c.map((function(t){return t.id===e.id_value&&(t.data.title="Text"),t}))),s.current.innerText=c[e.index].data.text||""}),[]),Object(f.jsx)("div",{className:"input-body",ref:s,contentEditable:"true",tabIndex:"0",onBlur:function(t){i(c.map((function(a){return a.id===e.id_value&&(a.data.text=t.target.innerText),a})))}})}function E(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.current.innerText=c[0].title||""}),[e.title,c]),Object(f.jsx)("div",{className:"note-title",ref:s,onBlur:function(){i(c.map((function(e,t){return-1===e.type&&(e.title=s.current.innerText),e})))},contentEditable:"true"})}function D(e){var t=Object(n.useContext)(z)[1],a=Object(n.useContext)(J),c=Object(r.a)(a,2),i=c[0],s=c[1];return Object(f.jsxs)("div",{className:"edit-options",children:[Object(f.jsx)("span",{onClick:function(){var e=i;e.length>0&&(s(e),t(e.shift()))}}),Object(f.jsx)("span",{onClick:function(){t([{type:-1,noteId:Object(j.a)(),date_created:(new Date).toDateString().substr(4),title:""},{type:7,data:{},id:Object(j.a)(),index:0}])}})]})}var z=c.a.createContext(),J=c.a.createContext(),U=c.a.createContext();function R(e){var t=Object(n.useState)(e.data||[{type:-1,noteId:Object(j.a)(),title:"",date_created:(new Date).toDateString().substr(4)},{type:7,data:{},id:Object(j.a)(),index:0}]),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)([]),d=Object(r.a)(s,2),l=d[0],o=d[1],u=Object(n.useState)(0),b=Object(r.a)(u,2),x=b[0],h=b[1],O=Object(n.useRef)(null);return Object(n.useEffect)((function(){O.current.children[O.current.children.length-1]&&O.current.children[O.current.children.length-1].scrollIntoView(1)}),[x]),Object(n.useEffect)((function(){i(e.data)}),[e.data]),Object(f.jsx)(z.Provider,{value:[c,i],children:Object(f.jsx)(J.Provider,{value:[l,o],children:Object(f.jsxs)(U.Provider,{value:[x,h],children:[Object(f.jsx)("div",{className:"input-container-inner",ref:O,children:c.map((function(e,t){switch(e.type){case 7:return Object(f.jsx)(k,{label:"Text",icon:"8",id_value:e.id,children:Object(f.jsx)(L,{id_value:e.id,index:t})},e.id);case 0:return Object(f.jsxs)(k,{label:"Contact",icon:"0",id_value:e.id,children:[Object(f.jsx)(_,{field_name:"Name goes here ...",type:"title",id_value:e.id,index:t}),Object(f.jsx)(_,{field_name:"Contact goes here ...",type:"contact_value",id_value:e.id,index:t})]},e.id);case 5:return Object(f.jsxs)(k,{label:"Location",icon:"1",id_value:e.id,children:[Object(f.jsx)(_,{field_name:"Location Name goes here ...",type:"title",id_value:e.id,index:t}),Object(f.jsx)(g,{field_name:"Exact Address goes here ...",type:"location_address",id_value:e.id,index:t})]},e.id);case 1:return Object(f.jsxs)(k,{label:"Link",icon:"2",id_value:e.id,children:[Object(f.jsx)(_,{field_name:"Link Name goes here ...",type:"title",id_value:e.id,index:t}),Object(f.jsx)(g,{field_name:"Link Address goes here ...",type:"link_address",id_value:e.id,index:t})]},e.id);case 2:return Object(f.jsx)(k,{label:"Image",icon:"3",id_value:e.id,children:Object(f.jsx)(N,{field_name:"Select Image or paste link ...",id_value:e.id,index:t})},e.id);case 3:return Object(f.jsxs)(k,{label:"Event",icon:"4",id_value:e.id,children:[Object(f.jsx)(g,{field_name:"Event Name goes here ...",id_value:e.id,type:"title",index:t}),Object(f.jsx)(w,{id_value:e.id,index:t}),Object(f.jsx)(A,{id_value:e.id,index:t})]},e.id);case 4:return Object(f.jsxs)(k,{label:"Transaction",icon:"5",id_value:e.id,children:[Object(f.jsx)(I,{id_value:e.id,index:t}),Object(f.jsx)(_,{field_name:"Name of Person / Store",type:"transaction_end",id_value:e.id,index:t}),Object(f.jsx)(_,{field_name:"Enter the Amount ...",type:"transaction_amt",id_value:e.id,index:t})]},e.id);case 6:return Object(f.jsxs)(k,{label:"CheckList",icon:"6",id_value:e.id,children:[Object(f.jsx)(_,{field_name:"Enter the list title ...",type:"title",id_value:e.id,index:t}),Object(f.jsx)(T,{check_list_toggle:1,id_value:e.id,index:t})]},e.id);case 8:return Object(f.jsxs)(k,{label:"List",icon:"7",id_value:e.id,index:t,children:[Object(f.jsx)(_,{field_name:"Enter the list title ...",type:"title",id_value:e.id,index:t}),Object(f.jsx)(T,{check_list_toggle:0,id_value:e.id,index:t})]},e.id);case-1:return Object(f.jsx)(E,{title:e.title},"note-title");default:return null}}))}),e.children]})})})}function M(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(m),o=Object(r.a)(s,2),u=o[0],b=o[1],O=Object(n.useContext)(x)[1],p=Object(n.useContext)(h)[0];return Object(f.jsxs)("div",{onClick:function(){!function(e,t){var a=JSON.parse(localStorage.getItem("User".concat(e.username)));a.notes||(a.notes=[]),a.notes.push(t);var n=JSON.stringify(a);localStorage.setItem("User".concat(e.username),n)}(p,c),b([l(c)].concat(Object(d.a)(u))),i([{type:-1,noteId:Object(j.a)(),date_created:(new Date).toDateString().substr(4),title:""},{type:7,data:{},id:Object(j.a)(),index:0}]),O([2,"Note Added Succesfully"])},children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{children:"Save Note"})]})}function P(e){var t=Object(n.useContext)(z),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(J),l=Object(r.a)(s,2),o=l[0],u=l[1],b=Object(n.useContext)(U),x=Object(r.a)(b,2),h=x[0],O=x[1],m=["Add Contact","Add Link","Add Location","Add Event","Add Payment","Add Location","Add Checklist","Add Text","Add List"];function p(e){switch(e){case"Jan":return 1;case"Feb":return 2;case"Mar":return 3;case"Apr":return 4;case"May":return 5;case"Jun":return 6;case"Jul":return 7;case"Aug":return 8;case"Sep":return 9;case"Oct":return 10;case"Nov":return 11;case"Dec":return 12;default:return-1}}return Object(f.jsxs)("div",{className:"options",children:[[0,1,2,3,4,5,6,7,8].map((function(e,t){return Object(f.jsxs)("div",{onClick:function(e){var a={};if(a.type=t,a.id=Object(j.a)(),0===c.length?a.index=0:a.index=c[c.length-1].index+1,a.data={},3===a.type){var n=c[0].date_created.split(" ");a.data={year:Number(n[2]),month:p(n[0]),day:Number(n[1]),hours:9,minutes:30}}var s=o;s.unshift(c),u(s),i([].concat(Object(d.a)(c),[a])),O(!h)},children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{children:m[t]})]},t)})),e.children]})}function W(e){return Object(f.jsx)("div",{className:"input-container",children:Object(f.jsxs)(R,{data:[{type:-1,noteId:Object(j.a)(),date_created:(new Date).toDateString().substr(4)},{type:7,data:{},id:Object(j.a)(),index:0}],children:[Object(f.jsx)(P,{children:Object(f.jsx)(M,{})}),Object(f.jsx)(D,{})]})})}function H(e){var t=Object(n.useContext)(h)[0];return Object(f.jsxs)("div",{className:"quick-peek",children:[Object(f.jsxs)("h1",{children:[Object(f.jsx)("i",{children:"Hey"})," ",t.username,","]}),Object(f.jsxs)("p",{children:["Welcome to Take ",Object(f.jsx)("i",{children:"Notes"}),", The Modern Note Taking App"]}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("h4",{children:"Key Features"}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Note Contexts"}),Object(f.jsx)("p",{children:"Create Note Contexts, with variety of field types each with a different kind of information."})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Healthy Note Making"}),Object(f.jsx)("p",{children:"Learn and Adapt to a healthy note-making practice, by segregating information into useful categories."})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Fast And Safe"}),Object(f.jsx)("p",{children:"Don't worry on space, focus on usefulness. The data is stored on your machine, so loading time is almost 0 while viewing notes."})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"Easy To Use"}),Object(f.jsx)("p",{children:"Easy, clutterless UI lets you focus on the notes, use UNDO button to restore note sections. Notes are easy to Delete, Edit and Share."})]})]})]})}function F(e){var t=Object(n.useContext)(z)[0],a=Object(n.useContext)(m),c=Object(r.a)(a,2),i=c[0],s=c[1],d=Object(n.useContext)(p)[1],o=Object(n.useContext)(O)[1],b=Object(n.useContext)(J)[1],v=Object(n.useContext)(h)[0],_=Object(n.useContext)(x)[1];return Object(f.jsxs)("div",{onClick:function(){u(t,v.username),s(i.map((function(e){return e.id===t[0].noteId?l(t):e}))),o(0),b([]),d([{type:-1,noteId:Object(j.a)(),title:"",date_created:(new Date).toDateString().substr(4)}]),_([2,"Note Edited Succesfully"])},children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{children:"Save Note"})]})}function B(){var e=Object(n.useContext)(O)[1],t=Object(n.useContext)(p)[1],a=Object(n.useContext)(z)[1],c=Object(n.useContext)(J),i=Object(r.a)(c,2),s=i[0],d=i[1];return Object(f.jsxs)("div",{className:"edit-options",children:[Object(f.jsx)("span",{onClick:function(){var e=s;e.length>0&&(d(e),a(e.shift()))}}),Object(f.jsx)("span",{onClick:function(){e(0),d([]),t([{type:-1,noteId:Object(j.a)(),title:"",date_created:(new Date).toDateString().substr(4)}])}})]})}var q=function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(p)[0],a=Object(n.useContext)(O)[0];return Object(f.jsx)("div",{className:"edit-note-bg",visible:a,ref:e,children:Object(f.jsx)("div",{className:"edit-note-container",children:Object(f.jsxs)(R,{data:t,children:[Object(f.jsx)(P,{children:Object(f.jsx)(F,{})}),Object(f.jsx)(B,{})]})})})},G=a(9),V=a(10);function Y(e,t){return t.filter((function(t){return t===e})).length>0}var K=function(){function e(t){Object(G.a)(this,e),this.main_className=t.main_className,this.size=t.size,this.element_base_height=t.element_base_height,this.element_base_span=t.element_base_span,this.main_array=[],this.parent_className=t.parent_className;for(var a=0;a<t.count;a++)this.main_array.push([a])}return Object(V.a)(e,[{key:"changeSizeAndMainArray",value:function(e){var t=this,a=document.querySelectorAll("div.".concat(this.main_className));a.length>this.main_array.length&&(this.main_array.unshift([0]),this.main_array=this.main_array.map((function(e,t){return 0===t?e:e.map((function(e){return e+1}))}))),this.size=e;for(var n=[],c=[],i=[],s=function(s){if(0===s)t.main_array[s]=t.main_array[s].map((function(a,n){return t.main_array[s][0]+n*e})),n.push.apply(n,Object(d.a)(t.main_array[s])),c.push(t.main_array[s][0]);else{for(var r=1;;){if(!Y(t.main_array[s-1][0]+r,n)){t.main_array[s][0]=t.main_array[s-1][0]+r,t.main_array[s]=t.main_array[s].map((function(a,n){return t.main_array[s][0]+n*e})),n.push.apply(n,Object(d.a)(t.main_array[s]));break}r++}c.push(t.main_array[s][0])}for(var l=0,o=t.main_array[s][0]-t.size;o>=0;o-=t.size)if(Y(o,c)){var u=c.indexOf(o);l=l+a[u].offsetHeight+70}i.push(l+a[s].offsetHeight),a[s].style.transform="translate(".concat(t.main_array[s][0]%t.size*t.element_base_span,"px, ").concat(l,"px)")},r=0;r<a.length;r++)s(r);var l=i.sort((function(e,t){return t-e}))[0];document.querySelector("div.".concat(this.parent_className)).style.height="".concat(l+50,"px")}},{key:"SetLayout",value:function(e,t){var a=this,n=document.querySelectorAll("div.".concat(this.main_className));n[e].children[0].style.height="initial";for(var c=[],i=[],s=[],r=function(r){if(r<e)c.push.apply(c,Object(d.a)(a.main_array[r])),i.push(a.main_array[r][0]);else if(r>e)for(var l=1;;){if(!Y(a.main_array[r-1][0]+l,c)){a.main_array[r][0]=a.main_array[r-1][0]+l,a.main_array[r]=a.main_array[r].map((function(e,t){return a.main_array[r][0]+t*a.size})),c.push.apply(c,Object(d.a)(a.main_array[r])),i.push(a.main_array[r][0]);break}l++}else if(r===e)if(!0===t){for(var o=1;o<Math.ceil(n[r].offsetHeight/420);)a.main_array[r].push(a.main_array[r][0]+a.size*o),c.push(a.main_array[r][0]+a.size*o),o++;i.push(a.main_array[r][0])}else a.main_array[r]=[a.main_array[r][0]],c.push(r),i.push(a.main_array[r][0]);for(var u=0,j=a.main_array[r][0]-a.size;j>=0;j-=a.size)if(Y(j,i)){var b=i.indexOf(j);u=u+n[b].offsetHeight+70}s.push(u+n[r].offsetHeight),n[r].style.transform="translate(".concat(a.main_array[r][0]%a.size*a.element_base_span,"px, ").concat(u,"px)")},l=0;l<n.length;l++)r(l);var o=s.sort((function(e,t){return t-e}))[0];document.querySelector("div.".concat(this.parent_className)).style.height="".concat(o+50,"px")}}]),e}();function Q(e){return Object(f.jsx)("h3",{className:"note-drawer-heading",children:"Notes At A Glance"})}function X(e){return e.data_array.length?Object(f.jsxs)("div",{className:"transaction note-sub-block",children:[Object(f.jsx)("span",{children:"Transaction"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(f.jsxs)("div",{type:e.data.transaction_type,children:[Object(f.jsx)("span",{children:e.data.transaction_end}),Object(f.jsxs)("span",{children:[e.data.transaction_type?"-":"+"," Rs ",e.data.transaction_amt]})]},t)}))})]}):null}function Z(e){return e.data_array.length?Object(f.jsxs)("div",{className:"note-sub-block text",children:[Object(f.jsx)("span",{children:"Text"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(f.jsx)("p",{children:e.data.text},t)}))})]}):null}function $(e){return e.data_array.length?Object(f.jsxs)("div",{className:"contact note-sub-block",children:[Object(f.jsx)("span",{children:"Contact"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{children:e.data.title}),Object(f.jsx)("span",{children:e.data.contact_value})]})},t)}))})]}):null}function ee(e){return e.data_array.length?Object(f.jsxs)("div",{className:"note-sub-block link",children:[Object(f.jsx)("span",{children:"Link"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)"),gridGap:"0px 2em"},children:e.data_array.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{children:e.data.title}),Object(f.jsx)("span",{children:e.data.link_address.length>30?"".concat(e.data.link_address.substr(0,30),"..."):e.data.link_address})]},t)}))})]}):null}function te(e){return e.data_array.length?Object(f.jsxs)("div",{className:"note-sub-block location",children:[Object(f.jsx)("span",{children:"Location"}),Object(f.jsx)("div",{className:"working-grid",style:{gridGap:"0px 2em",gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:e.data.title}),Object(f.jsx)("p",{children:e.data.location_address})]})]},t)}))})]}):null}function ae(e){var t=Object(n.useContext)(m),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(h)[0];return e.data_array.length?Object(f.jsxs)("div",{className:"note-sub-block list",children:[Object(f.jsx)("span",{children:e.is_checked?"CheckList":"List"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(t,a){return Object(f.jsxs)("ul",{is_checked:e.is_checked,children:[Object(f.jsx)("span",{children:t.data.title}),t.data.list_items.map((function(t,n){return Object(f.jsxs)("li",{check:t.checked,onClick:function(){if(0!==e.is_checked){var t=e.data_array[a].id,r=e.index;i(c.map((function(e,a){return a===r&&e.checklists.map((function(e){return e.id===t&&(e.data.list_items[n].checked=(Number(e.data.list_items[n].checked)+1)%2),e})),e}))),u(o(c[e.index]),s.username)}},children:[Object(f.jsx)("i",{}),Object(f.jsx)("span",{children:t.item})]},n)}))]},a)}))})]}):null}function ne(e){return e.data_array.length?Object(f.jsxs)("div",{className:"note-sub-block image",children:[Object(f.jsx)("span",{children:"Image"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.data.image_url,alt:"could not load"}),Object(f.jsx)("p",{children:e.data.image_caption})]},t)}))})]}):null}function ce(e){return e.data_array.length?Object(f.jsxs)("div",{className:"note-sub-block event",children:[Object(f.jsx)("span",{children:"Events"}),Object(f.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:e.data.title.split(" ").map((function(e,t){return Object(f.jsxs)("b",{children:[e," "]},t)}))}),Object(f.jsxs)("span",{children:[Object(f.jsx)("small",{children:"on"})," ",new Date(e.data.year,e.data.month-1,e.data.day).toDateString()," ",Object(f.jsx)("small",{children:"at"})," ",e.data.hours,":",e.data.minutes," HRS"]})]},t)}))})]}):null}function ie(e){var t=Object(n.useContext)(m),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useContext)(h)[0].username,l=Object(n.useContext)(x)[1],u=Object(n.useContext)(p)[1],j=Object(n.useContext)(O)[1];return Object(f.jsxs)("div",{className:"title-block",children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsxs)("div",{className:"btn-group",children:[Object(f.jsx)("span",{onClick:function(t){t.target.parentNode.parentNode.parentNode.parentNode.style.transform+=" scale(0)",setTimeout((function(){i(c.filter((function(t,a){return t.id!==c[e.index].id}))),function(e,t){var a=JSON.parse(localStorage.getItem("User".concat(t))),n=a.notes.filter((function(t){return t[0].noteId!==e}));a.notes=n,localStorage.setItem("User".concat(t),JSON.stringify(a))}(c[e.index].id,s),l([3,"Note Deleted Succesfully"])}),400)}})," ",Object(f.jsx)("span",{onClick:function(){return l([3,"Coming Soon..."])}})," ",Object(f.jsx)("span",{onClick:function(){u(Object(d.a)(o(c[e.index]))),j(1)}})," "]}),Object(f.jsxs)("span",{children:["Added on ",e.date_created]})]})}function se(e){return Object(f.jsxs)("div",{className:"note-block",children:[Object(f.jsx)(ie,{index:e.index,title:e.title,date_created:e.date_created}),Object(f.jsx)(Z,{data_array:e.texts}),Object(f.jsx)($,{data_array:e.contacts}),Object(f.jsx)(X,{data_array:e.transactions}),Object(f.jsx)(ae,{data_array:e.checklists,is_checked:1,id:e.id,index:e.index}),Object(f.jsx)(ae,{data_array:e.lists,is_checked:0,id:e.id,index:e.index}),Object(f.jsx)(ne,{data_array:e.images}),Object(f.jsx)(ee,{data_array:e.links}),Object(f.jsx)(ce,{data_array:e.events}),Object(f.jsx)(te,{data_array:e.locations})]})}var re=c.a.createContext();function de(e){var t=Object(n.useContext)(m)[0],a=Object(n.useState)(0),c=Object(r.a)(a,2),i=c[0],s=c[1],d=Object(n.useRef)(null),l=Object(n.useRef)(window.innerWidth>1270?3:window.innerWidth<700?1:2),o=Object(n.useRef)(new K({main_className:"note-block-collapse-btn-wrapper",parent_className:"note-collection",size:l.current,count:t.length,element_base_height:500,element_base_span:440}));Object(n.useEffect)((function(){window.innerWidth<800?(o.current.changeSizeAndMainArray(1),d.current.style.marginLeft="calc(50% - 220px)"):window.innerWidth<1270?(o.current.changeSizeAndMainArray(2),d.current.style.marginLeft="calc(50% - 440px)"):window.innerWidth>1270&&(o.current.changeSizeAndMainArray(3),d.current.style.marginLeft="calc(50% - 660px)")}),[t]);var u=-1;return window.onresize=function(){clearTimeout(u),u=setTimeout((function(){window.innerWidth<800?(o.current.changeSizeAndMainArray(1),d.current.style.marginLeft="calc(50% - 220px)"):window.innerWidth<1270?(o.current.changeSizeAndMainArray(2),d.current.style.marginLeft="calc(50% - 440px)"):window.innerWidth>1270&&(o.current.changeSizeAndMainArray(3),d.current.style.marginLeft="calc(50% - 660px)")}))},Object(f.jsx)("div",{className:"note-collection",ref:d,children:Object(f.jsx)(re.Provider,{value:[i,s],children:t.map((function(e,t){return Object(f.jsxs)("div",{className:"note-block-collapse-btn-wrapper",children:[" ",Object(f.jsx)(se,{index:t,id:e.id,title:e.title||"Note Title Here",date_created:e.date_created,texts:e.texts||[],events:e.events||[],images:e.images||[],locations:e.locations||[],transactions:e.transactions||[],checklists:e.checklists||[],lists:e.lists||[],links:e.links||[],contacts:e.contacts||[]}),Object(f.jsx)("span",{onClick:function(e){e.target.parentNode.classList.toggle("expand"),o.current.SetLayout(t,e.target.parentNode.classList.contains("expand"))},children:"Toggle View"})]},e.id)}))})})}var le=function(e){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(Q,{}),Object(f.jsx)(de,{})]})};var oe=function(e){return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)("span",{children:["Take ",Object(f.jsx)("i",{children:"Notes"})]})]})};function ue(e){var t=Object(n.useState)(0),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(f.jsxs)("div",{className:"search-category",children:[Object(f.jsx)("span",{children:"Sort By"}),Object(f.jsx)("span",{onClick:function(e){i((c+1)%3)},children:["Date Created","Only Images","Content Size"][c]})]})}var je=function(e){var t=Object(n.useContext)(x)[1];return Object(f.jsxs)("div",{className:"search-bar-wrapper",children:[Object(f.jsxs)("h1",{children:["Your Past ",Object(f.jsx)("i",{children:"Notes"})]}),Object(f.jsxs)("div",{className:"search-bar",children:[Object(f.jsx)("input",{type:"text",placeholder:"Type in to Search ..."}),Object(f.jsx)("span",{onClick:function(){return t([1,"Not Implemented Yet"])}})]}),Object(f.jsx)(ue,{})]})};function be(e){var t=Object(n.useState)({username:"",userId:"",logged_in:!1}),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(function(e){var t=[];for(var a in localStorage)"User"===a.substr(0,4)&&t.push(a.substr(4));return t}())[0],d=Object(n.useState)(function(){var e=[];for(var t in localStorage)if("User"===t.substr(0,4)){var a=JSON.parse(localStorage.getItem(t));if(!a.notes)return;for(var n=a.notes.length,c=a.notes,i=0;i<n;i++)e.unshift(l(c[i]))}return e}(c.username)||[]),o=Object(r.a)(d,2),u=o[0],j=o[1];return Object(n.useEffect)((function(){var e;""!==c.username&&(e=c,localStorage.getItem("User".concat(e.username))||localStorage.setItem("User".concat(e.username),JSON.stringify(e)),function(e){for(var t in sessionStorage)"User"===t.substr(0,4)&&sessionStorage.removeItem(t);sessionStorage.setItem("User".concat(e.username),JSON.stringify(e))}(c))}),[c]),Object(f.jsx)(h.Provider,{value:[c,i],children:Object(f.jsxs)(m.Provider,{value:[u,j],children:[Object(f.jsx)(me,{user_list:s,visible:Number(c.logged_in)}),Object(f.jsx)(xe,{logged_in:Number(c.logged_in),children:e.children})]})})}function xe(e){return Object(f.jsx)("div",{className:"main",children:e.logged_in?e.children:null})}function he(e){var t=Object(n.useState)([0,"Are you sure you want to delete ??"]),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(0),d=Object(r.a)(s,2),l=d[0],o=d[1],u=Object(n.useState)([]),j=Object(r.a)(u,2),b=j[0],h=j[1];return Object(f.jsx)(x.Provider,{value:[c,i],children:Object(f.jsx)(p.Provider,{value:[b,h],children:Object(f.jsx)(O.Provider,{value:[l,o],children:e.children})})})}function Oe(e){var t=Object(n.useContext)(x),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(f.jsx)("div",{className:"alert-window",type:c[0],children:Object(f.jsxs)("div",{className:"alert-box",children:[Object(f.jsx)("span",{children:c[1]}),Object(f.jsx)("span",{className:"close",onClick:function(){i([0,"no-alert"])}})]})})}function me(e){var t=Object(n.useContext)(h)[1],a=Object(n.useRef)(null),c=Object(n.useState)(0),i=Object(r.a)(c,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){var e=function(){for(var e in sessionStorage)if("User"===e.substr(0,4))return sessionStorage.getItem(e);return null}();null!==e&&(t(JSON.parse(e)),console.log(JSON.parse(e)))}),[t]),e.visible?null:Object(f.jsxs)("div",{className:"login-window",children:[Object(f.jsx)("span",{className:"login-error",visible:s,children:"Please enter a valid name to continue."}),Object(f.jsx)("div",{className:"main-logo"}),Object(f.jsxs)("h1",{children:["Take ",Object(f.jsx)("i",{children:"Notes"})]}),Object(f.jsx)("input",{type:"text",ref:a,placeholder:"Enter A Name"}),Object(f.jsxs)("button",{onClick:function(e){""===a.current.value?(d(1),setTimeout((function(){return d(0)}),3e3)):t({username:a.current.value,userId:Object(j.a)(),logged_in:!0})},children:["Start Taking Notes ",Object(f.jsx)("i",{})]}),e.user_list.length>0?Object(f.jsx)("h3",{className:"note-drawer-heading",style:{marginTop:"4em",marginBottom:"0px"},children:"Previous Logins"}):null,Object(f.jsx)("ul",{className:"user-list-past",children:e.user_list.map((function(e,a){return Object(f.jsx)("li",{onClick:function(){var a;t({username:e,userId:(a=e,JSON.parse(localStorage.getItem("User".concat(a))).userId),logged_in:!0})},children:e},a)}))})]})}var pe=function(){return Object(f.jsx)(be,{children:Object(f.jsxs)(he,{children:[Object(f.jsx)(oe,{}),Object(f.jsx)(Oe,{}),Object(f.jsxs)("div",{className:"first-view",children:[Object(f.jsx)(H,{}),Object(f.jsxs)("div",{className:"right",children:[Object(f.jsxs)("h1",{children:["Create A New Note ",Object(f.jsx)("i",{})]}),Object(f.jsx)(W,{})]})]}),Object(f.jsx)(je,{}),Object(f.jsx)(le,{}),Object(f.jsx)(q,{})]})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(pe,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b8a8fbfa.chunk.js.map