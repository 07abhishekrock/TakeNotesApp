(this.webpackJsonptake_notes=this.webpackJsonptake_notes||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(8),r=a.n(i),s=(a(15),a(2)),d=(a(16),a(3));function l(e){for(var t=e[0].noteId,a=e[0].date_created,n=e[0].title,c=e.slice(1),i=[],r=[],s=[],d=[],l=[],o=[],u=[],j=[],b=[],x=0;x<c.length;x++)switch(c[x].type){case 0:b.push({id:c[x].id,data:c[x].data});break;case 1:r.push({id:c[x].id,data:c[x].data});break;case 2:s.push({id:c[x].id,data:c[x].data});break;case 3:o.push({id:c[x].id,data:c[x].data});break;case 4:d.push({id:c[x].id,data:c[x].data});break;case 5:i.push({id:c[x].id,data:c[x].data});break;case 6:j.push({id:c[x].id,data:c[x].data});break;case 7:l.push({id:c[x].id,data:c[x].data});break;case 8:u.push({id:c[x].id,data:c[x].data});break;default:console.log("invalid type")}return{id:t,date_created:a,title:n,locations:i,texts:l,links:r,events:o,checklists:j,transactions:d,images:s,contacts:b,lists:u}}var o=a(19),u=a.p+"static/media/image_default.1b46f609.png",j=c.a.createContext(),b=c.a.createContext(),x=c.a.createContext(),O=c.a.createContext(),h=c.a.createContext(),m=a(0);function p(e,t){return t.filter((function(t,a){return t===e})).length}function f(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(m.jsx)("input",{type:"text",className:"wide-input",placeholder:e.field_name,value:c[e.index].data[e.type]||"",onChange:function(t){var a=c.map((function(a,n){return a.id===e.id_value&&(a.data[e.type]=t.target.value),a}));i(a)}})}function v(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(m.jsx)("input",{type:"text",className:"wider-input",value:c[e.index].data[e.type]||"",placeholder:e.field_name,onChange:function(t){var a=c.map((function(a,n){return a.id===e.id_value&&(a.data[e.type]=t.target.value),a}));i(a)}})}function _(e){var t=Object(n.useContext)(E)[0],a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.innerText=t[e.index].data[e.type]||""}),[t,e.index,e.type]),Object(m.jsx)("div",{className:"textarea image",ref:a,contentEditable:"true",onBlur:function(t){e.add_url_to_context("image_caption",t.target.innerText)}})}function g(e){var t=Object(n.useState)(u),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useContext)(E),d=Object(s.a)(r,2),l=d[0],o=d[1],b=Object(n.useContext)(j),x=Object(s.a)(b,2),O=(x[0],x[1]),h=Object(n.useRef)(null),f=Object(n.useState)(0),v=Object(s.a)(f,2),g=v[0],y=v[1],k=Object(n.useRef)(null);function N(){var e=h.current.value;""!==e?fetch(e,{mode:"cors"}).then((function(t){t.blob().then((function(t){i(e),y(0),C("image_url",e),C("title","Image")}))})).catch((function(e){console.log(e),y(1)})):i(u)}function C(t,a){o(l.map((function(n,c){return n.id===e.id_value&&(n.data[t]=a),n})))}return Object(n.useEffect)((function(){N()}),[]),Object(m.jsxs)("div",{className:"image-input",children:[Object(m.jsx)("input",{type:"text",className:"inline-input",ref:h,placeholder:e.field_name,value:l[e.index].data.image_url||"",onChange:function(){N()}}),Object(m.jsx)("button",{className:"choose-image",onClick:function(){O([1,"Currently Not Supported"])}}),Object(m.jsx)("span",{className:"in-error",style:{opacity:g},children:"Invalid File / Link"}),Object(m.jsx)("img",{src:c,className:"image-preview",alt:"could not load"}),Object(m.jsx)("input",{type:"file",ref:k,onChange:function(e){var t=e.target.files[0];p(t.type,["image/svg+xml","image/png","image/jpg","image/jpeg"])?(i(URL.createObjectURL(t)),h.current.value=t.name,y(0),C("image_url",c),C("title",t.name)):y(1)}}),Object(m.jsx)(_,{type:"image_caption",index:e.index,add_url_to_context:C})]})}function y(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useContext)(z),d=Object(s.a)(r,2),l=d[0],o=d[1];return Object(m.jsxs)("div",{className:"note-segment",children:[Object(m.jsxs)("div",{className:"segment-header",children:[Object(m.jsx)("span",{icon:e.icon}),Object(m.jsx)("span",{children:e.label}),Object(m.jsx)("span",{onClick:function(){var t=l,a=c.filter((function(t,a){return t.id!==e.id_value}));t.unshift(c),o(t),i(a)}})]}),e.children,Object(m.jsx)("footer",{})]})}function k(e,t){return p(e,[1,3,5,7,8,10,12])?31:p(e,[4,6,9,11])?30:t%4===0?29:28}function N(e){for(var t=Object(s.a)(e,3),a=(t[0],t[1]),n=t[2],c=[],i=0,r=new Date(n,a-1,1).getDay(),d=0;d<42;d++)d>=r&&i<k(a,n)?c.push(++i):c.push(" ");return c}function C(e){var t=Object(n.useState)(N([1,1,2e3])),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useContext)(E),d=Object(s.a)(r,2),l=d[0],o=d[1];function u(t){o(l.map((function(a){return a.id===e.id_value&&(a.data.year+=t),a}))),i(N([1,l[e.index].data.month,l[e.index].data.year]))}function j(t){o(l.map((function(a){return a.id===e.id_value&&(-1===t&&(1===a.data.month?a.data.month=12:a.data.month+=t),1===t&&(12===a.data.month?a.data.month=1:a.data.month+=t)),a}))),i(N([1,l[e.index].data.month,l[e.index].data.year]))}Object(n.useEffect)((function(){i(N([l[e.index].data.day,l[e.index].data.month,l[e.index].data.year]))}),[l,e.index]);var b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(m.jsxs)("div",{className:"calendar",children:[Object(m.jsxs)("div",{className:"top-btn-group",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{onClick:function(){u(1)},children:"+"}),Object(m.jsx)("span",{children:l[e.index].data.year}),Object(m.jsx)("span",{onClick:function(){u(-1)},children:"-"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{onClick:function(){j(1)},children:"+"}),Object(m.jsx)("span",{children:b[l[e.index].data.month-1]}),Object(m.jsx)("span",{onClick:function(){j(-1)},children:"-"})]})]}),Object(m.jsxs)("div",{className:"week-column",children:[Object(m.jsx)("span",{children:"Sun"}),Object(m.jsx)("span",{children:"Mon"}),Object(m.jsx)("span",{children:"Tue"}),Object(m.jsx)("span",{children:"Wed"}),Object(m.jsx)("span",{children:"Thu"}),Object(m.jsx)("span",{children:"Fri"}),Object(m.jsx)("span",{children:"Sat"})]}),Object(m.jsx)("div",{className:"days",children:c.map((function(t,a){return" "!==t?t==l[e.index].data.day?Object(m.jsx)("span",{valid_date:"1",chosen:"1",children:t},a):Object(m.jsx)("span",{valid_date:"1",onClick:function(){var a;a=t,o(l.map((function(t){return t.id===e.id_value&&(t.data.day=a),t})))},children:t},a):Object(m.jsx)("span",{valid_date:"0"},a)}))}),Object(m.jsxs)("div",{className:"date-selected",children:[Object(m.jsx)("span",{children:"Selected Date"}),Object(m.jsxs)("span",{children:[l[e.index].data.day," ",b[l[e.index].data.month-1]," ",l[e.index].data.year]})]})]})}function S(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1];function r(t,a,n){i(c.map((function(c){return c.id===e.id_value&&(a>0?c.data[t]===n?c.data[t]=0:c.data[t]=Number(c.data[t])+1:0===a&&(0===c.data[t]?c.data[t]=n:c.data[t]=Number(c.data[t])-1)),c})))}return Object(m.jsxs)("div",{className:"time-input",children:[Object(m.jsxs)("div",{className:"time-block",children:[Object(m.jsx)("span",{onClick:function(){r("hours",0,23)},children:"-"}),Object(m.jsx)("span",{children:c[e.index].data.hours}),Object(m.jsx)("span",{onClick:function(){r("hours",1,23)},children:"+"})]}),Object(m.jsxs)("div",{className:"time-block",children:[Object(m.jsx)("span",{onClick:function(){r("minutes",0,59)},children:"-"}),Object(m.jsx)("span",{children:c[e.index].data.minutes}),Object(m.jsx)("span",{onClick:function(){r("minutes",1,59)},children:"+"})]})]})}function w(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1];function r(t){i(c.map((function(a){return a.id===e.id_value&&(a.data.transaction_type=t),a})))}return Object(m.jsxs)("div",{className:"transaction-input",children:[Object(m.jsx)("div",{select:0===c[e.index].data.transaction_type?1:0,onClick:function(){r(0)},children:"Paid/Lent To"}),Object(m.jsx)("div",{select:1===c[e.index].data.transaction_type?1:0,onClick:function(){r(1)},children:"Received By"})]})}function I(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),i=a[0],r=a[1];var l=Object(n.useRef)(null);return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("ul",{className:"checklist",check_toggle:e.check_list_toggle,ref:l,children:(i[e.index].data.list_items||[]).map((function(t,a){return Object(m.jsxs)("li",{check:t.checked,children:[Object(m.jsx)("span",{onClick:function(){var a;a=t,r(i.map((function(t){return e.id_value===t.id&&(t.data.list_items=t.data.list_items.map((function(e){return e.id===a.id&&(e.checked=Number(!a.checked)),e}))),t})))}}),Object(m.jsx)("input",{placeholder:"Enter Item Info ...",value:t.item,type:"text",onChange:function(a){var n;n={checked:t.checked,id:t.id,item:a.target.value},r(i.map((function(t){return e.id_value===t.id&&(t.data.list_items=t.data.list_items.map((function(e){return e.id===n.id&&(e.item=n.item),e}))),t})))}}),Object(m.jsx)("span",{onClick:function(){var a;a=t,r(i.map((function(t){return e.id_value===t.id&&(t.data.list_items=t.data.list_items.filter((function(e){return e.id!==a.id}))),t})))}})]},t.id)}))}),Object(m.jsxs)("button",{onClick:function(){var t;t={checked:"0",item:"",id:Object(o.a)()},r(i.map((function(a){return e.id_value===a.id&&(a.data.list_items=[].concat(Object(d.a)(a.data.list_items||[]),[t])),a})))},children:[Object(m.jsx)("i",{}),"Add Item"]})]})}function A(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useRef)(null);return Object(n.useEffect)((function(){i(c.map((function(t){return t.id===e.id_value&&(t.data.title="Text"),t}))),r.current.innerText=c[e.index].data.text||""}),[]),Object(m.jsx)("div",{className:"input-body",ref:r,contentEditable:"true",tabIndex:"0",onBlur:function(t){i(c.map((function(a){return a.id===e.id_value&&(a.data.text=t.target.innerText),a})))}})}function T(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useRef)(null);return Object(n.useEffect)((function(){r.current.innerText=c[0].title||""}),[e.title,c]),Object(m.jsx)("div",{className:"note-title",ref:r,onBlur:function(){i(c.map((function(e,t){return-1===e.type&&(e.title=r.current.innerText),e})))},contentEditable:"true"})}function L(e){var t=Object(n.useContext)(E)[1],a=Object(n.useContext)(z),c=Object(s.a)(a,2),i=c[0],r=c[1];return Object(m.jsxs)("div",{className:"edit-options",children:[Object(m.jsx)("span",{onClick:function(){var e=i;e.length>0&&(r(e),t(e.shift()))}}),Object(m.jsx)("span",{onClick:function(){t([{type:-1,noteId:Object(o.a)(),date_created:(new Date).toDateString().substr(4),title:""},{type:7,data:{},id:Object(o.a)(),index:0}])}})]})}var E=c.a.createContext(),z=c.a.createContext(),D=c.a.createContext();function J(e){var t=Object(n.useState)(e.data||[{type:-1,noteId:Object(o.a)(),title:"",date_created:(new Date).toDateString().substr(4)},{type:7,data:{},id:Object(o.a)(),index:0}]),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)([]),d=Object(s.a)(r,2),l=d[0],u=d[1],j=Object(n.useState)(0),b=Object(s.a)(j,2),x=b[0],O=b[1],h=Object(n.useRef)(null);return Object(n.useEffect)((function(){h.current.children[h.current.children.length-1]&&h.current.children[h.current.children.length-1].scrollIntoView(1)}),[x]),Object(n.useEffect)((function(){i(e.data)}),[e.data]),Object(m.jsx)(E.Provider,{value:[c,i],children:Object(m.jsx)(z.Provider,{value:[l,u],children:Object(m.jsxs)(D.Provider,{value:[x,O],children:[Object(m.jsx)("div",{className:"input-container-inner",ref:h,children:c.map((function(e,t){switch(e.type){case 7:return Object(m.jsx)(y,{label:"Text",icon:"8",id_value:e.id,children:Object(m.jsx)(A,{id_value:e.id,index:t})},e.id);case 0:return Object(m.jsxs)(y,{label:"Contact",icon:"0",id_value:e.id,children:[Object(m.jsx)(f,{field_name:"Name goes here ...",type:"title",id_value:e.id,index:t}),Object(m.jsx)(f,{field_name:"Contact goes here ...",type:"contact_value",id_value:e.id,index:t})]},e.id);case 5:return Object(m.jsxs)(y,{label:"Location",icon:"1",id_value:e.id,children:[Object(m.jsx)(f,{field_name:"Location Name goes here ...",type:"title",id_value:e.id,index:t}),Object(m.jsx)(v,{field_name:"Exact Address goes here ...",type:"location_address",id_value:e.id,index:t})]},e.id);case 1:return Object(m.jsxs)(y,{label:"Link",icon:"2",id_value:e.id,children:[Object(m.jsx)(f,{field_name:"Link Name goes here ...",type:"title",id_value:e.id,index:t}),Object(m.jsx)(v,{field_name:"Link Address goes here ...",type:"link_address",id_value:e.id,index:t})]},e.id);case 2:return Object(m.jsx)(y,{label:"Image",icon:"3",id_value:e.id,children:Object(m.jsx)(g,{field_name:"Select Image or paste link ...",id_value:e.id,index:t})},e.id);case 3:return Object(m.jsxs)(y,{label:"Event",icon:"4",id_value:e.id,children:[Object(m.jsx)(v,{field_name:"Event Name goes here ...",id_value:e.id,type:"title",index:t}),Object(m.jsx)(C,{id_value:e.id,index:t}),Object(m.jsx)(S,{id_value:e.id,index:t})]},e.id);case 4:return Object(m.jsxs)(y,{label:"Transaction",icon:"5",id_value:e.id,children:[Object(m.jsx)(w,{id_value:e.id,index:t}),Object(m.jsx)(f,{field_name:"Name of Person / Store",type:"transaction_end",id_value:e.id,index:t}),Object(m.jsx)(f,{field_name:"Enter the Amount ...",type:"transaction_amt",id_value:e.id,index:t})]},e.id);case 6:return Object(m.jsxs)(y,{label:"CheckList",icon:"6",id_value:e.id,children:[Object(m.jsx)(f,{field_name:"Enter the list title ...",type:"title",id_value:e.id,index:t}),Object(m.jsx)(I,{check_list_toggle:1,id_value:e.id,index:t})]},e.id);case 8:return Object(m.jsxs)(y,{label:"List",icon:"7",id_value:e.id,index:t,children:[Object(m.jsx)(f,{field_name:"Enter the list title ...",type:"title",id_value:e.id,index:t}),Object(m.jsx)(I,{check_list_toggle:0,id_value:e.id,index:t})]},e.id);case-1:return Object(m.jsx)(T,{title:e.title});default:return null}}))}),e.children]})})})}function R(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useContext)(O),u=Object(s.a)(r,2),j=u[0],x=u[1],h=Object(n.useContext)(b)[0];return Object(m.jsxs)("div",{onClick:function(){!function(e,t){var a=JSON.parse(localStorage.getItem("User".concat(e.username)));a.notes||(a.notes=[]),a.notes.push(t);var n=JSON.stringify(a);localStorage.setItem("User".concat(e.username),n)}(h,c),x([l(c)].concat(Object(d.a)(j))),i([{type:-1,noteId:Object(o.a)(),date_created:(new Date).toDateString().substr(4),title:""},{type:7,data:{},id:Object(o.a)(),index:0}])},children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{children:"Save Note"})]})}function U(e){var t=Object(n.useContext)(E),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useContext)(z),l=Object(s.a)(r,2),u=l[0],j=l[1],b=Object(n.useContext)(D),x=Object(s.a)(b,2),O=x[0],h=x[1],p=["Add Contact","Add Link","Add Location","Add Text","Add Payment","Add Checklist","Add List","Add Image","Add Event"];function f(e){switch(e){case"Jan":return 1;case"Feb":return 2;case"Mar":return 3;case"Apr":return 4;case"May":return 5;case"Jun":return 6;case"Jul":return 7;case"Aug":return 8;case"Sep":return 9;case"Oct":return 10;case"Nov":return 11;case"Dec":return 12;default:return-1}}return Object(m.jsxs)("div",{className:"options",children:[[0,1,2,3,4,5,6,7,8].map((function(e,t){return Object(m.jsxs)("div",{onClick:function(e){var a={};if(a.type=t,a.id=Object(o.a)(),0===c.length?a.index=0:a.index=c[c.length-1].index+1,a.data={},3===a.type){var n=c[0].date_created.split(" ");a.data={year:Number(n[2]),month:f(n[0]),day:Number(n[1]),hours:9,minutes:30}}var r=u;r.unshift(c),j(r),i([].concat(Object(d.a)(c),[a])),h(!O)},children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{children:p[t]})]},t)})),e.children]})}function P(e){return Object(m.jsx)("div",{className:"input-container",children:Object(m.jsxs)(J,{data:[{type:-1,noteId:Object(o.a)(),date_created:(new Date).toDateString().substr(4)},{type:7,data:{},id:Object(o.a)(),index:0}],children:[Object(m.jsx)(U,{children:Object(m.jsx)(R,{})}),Object(m.jsx)(L,{})]})})}function M(e){var t=Object(n.useContext)(E)[0],a=Object(n.useContext)(O),c=Object(s.a)(a,2),i=c[0],r=c[1],d=Object(n.useContext)(h)[1],u=Object(n.useContext)(x)[1],j=Object(n.useContext)(z)[1],p=Object(n.useContext)(b)[0];return Object(m.jsxs)("div",{onClick:function(){!function(e,t){var a=JSON.parse(localStorage.getItem("User".concat(t))),n=a.notes.map((function(t,a){return t[0].noteId===e[0].noteId?e:t}));a.notes=n,localStorage.setItem("User".concat(t),JSON.stringify(a))}(t,p.username),r(i.map((function(e){return e.id===t[0].noteId?l(t):e}))),u(0),j([]),d([{type:-1,noteId:Object(o.a)(),title:"",date_created:(new Date).toDateString().substr(4)}])},children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{children:"Save Note"})]})}function W(){var e=Object(n.useContext)(x)[1],t=Object(n.useContext)(h)[1],a=Object(n.useContext)(E)[1],c=Object(n.useContext)(z),i=Object(s.a)(c,2),r=i[0],d=i[1];return Object(m.jsxs)("div",{className:"edit-options",children:[Object(m.jsx)("span",{onClick:function(){var e=r;e.length>0&&(d(e),a(e.shift()))}}),Object(m.jsx)("span",{onClick:function(){e(0),d([]),t([{type:-1,noteId:Object(o.a)(),title:"",date_created:(new Date).toDateString().substr(4)}])}})]})}var B=function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(h)[0],a=Object(n.useContext)(x)[0];return Object(m.jsx)("div",{className:"edit-note-bg",visible:a,ref:e,children:Object(m.jsx)("div",{className:"edit-note-container",children:Object(m.jsxs)(J,{data:t,children:[Object(m.jsx)(U,{children:Object(m.jsx)(M,{})}),Object(m.jsx)(W,{})]})})})},H=a(9),F=a(10);function q(e,t){return t.filter((function(t){return t===e})).length>0}var G=function(){function e(t){Object(H.a)(this,e),this.main_className=t.main_className,this.size=t.size,this.element_base_height=t.element_base_height,this.element_base_span=t.element_base_span,this.main_array=[],this.parent_className=t.parent_className;for(var a=0;a<t.count;a++)this.main_array.push([a])}return Object(F.a)(e,[{key:"changeSizeAndMainArray",value:function(e){var t=this,a=document.querySelectorAll("div.".concat(this.main_className));a.length>this.main_array.length&&(this.main_array.unshift([0]),this.main_array=this.main_array.map((function(e,t){return 0===t?e:e.map((function(e){return e+1}))}))),this.size=e;for(var n=[],c=[],i=[],r=function(r){if(0===r)t.main_array[r]=t.main_array[r].map((function(a,n){return t.main_array[r][0]+n*e})),n.push.apply(n,Object(d.a)(t.main_array[r])),c.push(t.main_array[r][0]);else{for(var s=1;;){if(!q(t.main_array[r-1][0]+s,n)){t.main_array[r][0]=t.main_array[r-1][0]+s,t.main_array[r]=t.main_array[r].map((function(a,n){return t.main_array[r][0]+n*e})),n.push.apply(n,Object(d.a)(t.main_array[r]));break}s++}c.push(t.main_array[r][0])}for(var l=0,o=t.main_array[r][0]-t.size;o>=0;o-=t.size)if(q(o,c)){var u=c.indexOf(o);l=l+a[u].offsetHeight+50}i.push(l+a[r].offsetHeight),a[r].style.transform="translate(".concat(t.main_array[r][0]%t.size*t.element_base_span,"px, ").concat(l,"px)")},s=0;s<a.length;s++)r(s);var l=i.sort((function(e,t){return t-e}))[0];document.querySelector("div.".concat(this.parent_className)).style.height="".concat(l+50,"px")}},{key:"SetLayout",value:function(e,t){var a=this,n=document.querySelectorAll("div.".concat(this.main_className));n[e].children[0].style.height="initial";for(var c=[],i=[],r=[],s=function(s){if(s<e)c.push.apply(c,Object(d.a)(a.main_array[s])),i.push(a.main_array[s][0]);else if(s>e)for(var l=1;;){if(!q(a.main_array[s-1][0]+l,c)){a.main_array[s][0]=a.main_array[s-1][0]+l,a.main_array[s]=a.main_array[s].map((function(e,t){return a.main_array[s][0]+t*a.size})),c.push.apply(c,Object(d.a)(a.main_array[s])),i.push(a.main_array[s][0]);break}l++}else if(s===e)if(!0===t){for(var o=1;o<Math.ceil(n[s].offsetHeight/420);)a.main_array[s].push(a.main_array[s][0]+a.size*o),c.push(a.main_array[s][0]+a.size*o),o++;i.push(a.main_array[s][0])}else a.main_array[s]=[a.main_array[s][0]],c.push(s),i.push(a.main_array[s][0]);for(var u=0,j=a.main_array[s][0]-a.size;j>=0;j-=a.size)if(q(j,i)){var b=i.indexOf(j);u=u+n[b].offsetHeight+50}r.push(u+n[s].offsetHeight),n[s].style.transform="translate(".concat(a.main_array[s][0]%a.size*a.element_base_span,"px, ").concat(u,"px)")},l=0;l<n.length;l++)s(l);var o=r.sort((function(e,t){return t-e}))[0];document.querySelector("div.".concat(this.parent_className)).style.height="".concat(o+50,"px")}}]),e}();function V(e){return Object(m.jsx)("h3",{className:"note-drawer-heading",children:"Notes At A Glance"})}function Y(e){return e.data_array.length?Object(m.jsxs)("div",{className:"transaction note-sub-block",children:[Object(m.jsx)("span",{children:"Transaction"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(m.jsxs)("div",{type:e.data.transaction_type,children:[Object(m.jsx)("span",{children:e.data.transaction_end}),Object(m.jsxs)("span",{children:[e.data.transaction_type?"-":"+"," Rs ",e.data.transaction_amt]})]},t)}))})]}):null}function K(e){return e.data_array.length?Object(m.jsxs)("div",{className:"note-sub-block text",children:[Object(m.jsx)("span",{children:"Text"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(m.jsx)("p",{children:e.data.text},t)}))})]}):null}function Q(e){return e.data_array.length?Object(m.jsxs)("div",{className:"contact note-sub-block",children:[Object(m.jsx)("span",{children:"Contact"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{children:e.data.title}),Object(m.jsx)("span",{children:e.data.contact_value})]})},t)}))})]}):null}function X(e){return e.data_array.length?Object(m.jsxs)("div",{className:"note-sub-block link",children:[Object(m.jsx)("span",{children:"Link"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)"),gridGap:"0px 2em"},children:e.data_array.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{children:e.data.title}),Object(m.jsx)("span",{children:e.data.link_address.length>30?"".concat(e.data.link_address.substr(0,30),"..."):e.data.link_address})]},t)}))})]}):null}function Z(e){return e.data_array.length?Object(m.jsxs)("div",{className:"note-sub-block location",children:[Object(m.jsx)("span",{children:"Location"}),Object(m.jsx)("div",{className:"working-grid",style:{gridGap:"0px 2em",gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:e.data.title}),Object(m.jsx)("p",{children:e.data.location_address})]})]},t)}))})]}):null}function $(e){return e.data_array.length?Object(m.jsxs)("div",{className:"note-sub-block list",children:[Object(m.jsx)("span",{children:e.is_checked?"CheckList":"List"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(t,a){return Object(m.jsxs)("ul",{is_checked:e.is_checked,children:[Object(m.jsx)("span",{children:t.data.title}),t.data.list_items.map((function(e,t){return Object(m.jsxs)("li",{check:e.checked,children:[Object(m.jsx)("i",{}),Object(m.jsx)("span",{children:e.item})]},t)}))]},a)}))})]}):null}function ee(e){return e.data_array.length?Object(m.jsxs)("div",{className:"note-sub-block image",children:[Object(m.jsx)("span",{children:"Image"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:e.data.image_url,alt:"could not load"}),Object(m.jsx)("p",{children:e.data.image_caption})]},t)}))})]}):null}function te(e){return e.data_array.length?Object(m.jsxs)("div",{className:"note-sub-block event",children:[Object(m.jsx)("span",{children:"Events"}),Object(m.jsx)("div",{className:"working-grid",style:{gridTemplateColumns:"repeat(".concat(e.data_array.length,", 100%)")},children:e.data_array.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:e.data.title.split(" ").map((function(e,t){return Object(m.jsxs)("b",{children:[e," "]},t)}))}),Object(m.jsxs)("span",{children:[Object(m.jsx)("small",{children:"on"})," ",new Date(e.data.year,e.data.month-1,e.data.day).toDateString()," ",Object(m.jsx)("small",{children:"at"})," ",e.data.hours,":",e.data.minutes," HRS"]})]},t)}))})]}):null}function ae(e){var t=Object(n.useContext)(O),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useContext)(b)[0].username,l=Object(n.useContext)(h)[1],o=Object(n.useContext)(x)[1];return Object(m.jsxs)("div",{className:"title-block",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsxs)("div",{className:"btn-group",children:[Object(m.jsx)("span",{onClick:function(t){t.target.parentNode.parentNode.parentNode.parentNode.style.transform+=" scale(0)",setTimeout((function(){i(c.filter((function(t,a){return t.id!==c[e.index].id}))),function(e,t){var a=JSON.parse(localStorage.getItem("User".concat(t))),n=a.notes.filter((function(t){return t[0].noteId!==e}));a.notes=n,localStorage.setItem("User".concat(t),JSON.stringify(a))}(c[e.index].id,r)}),400)}})," ",Object(m.jsx)("span",{})," ",Object(m.jsx)("span",{onClick:function(){l(Object(d.a)(function(e){var t=[{type:-1,date_created:e.date_created,title:e.title||"",noteId:e.id}];for(var a in e)"checklists"===a?e[a].map((function(e){return t.push({type:6,id:e.id,data:{list_items:e.data.list_items,title:e.data.title}}),null})):"lists"===a?e[a].map((function(e){return t.push({type:8,id:e.id,data:{list_items:e.data.list_items,title:e.data.title}}),null})):"texts"===a?e[a].map((function(e){return t.push({type:7,id:e.id,data:{text:e.data.text}}),null})):"images"===a?e[a].map((function(e){return t.push({type:2,id:e.id,data:{image_caption:e.data.image_caption,image_url:e.data.image_url,title:e.data.title}}),null})):"links"===a?e[a].map((function(e){return t.push({type:1,id:e.id,data:{title:e.data.title,link_address:e.data.link_address}}),null})):"locations"===a?e[a].map((function(e){return t.push({type:5,id:e.id,data:{title:e.data.title,location_address:e.data.location_address}}),null})):"events"===a?e[a].map((function(e){return t.push({type:3,id:e.id,data:{title:e.data.title,day:e.data.day,hours:e.data.hours,minutes:e.data.minutes,month:e.data.month,year:e.data.year}}),null})):"contacts"===a?e[a].map((function(e){return t.push({type:0,id:e.id,data:{title:e.data.title,contact_value:e.data.contact_value}}),null})):"transactions"===a&&e[a].map((function(e){return t.push({type:4,id:e.id,data:{transaction_amt:e.data.transaction_amt,transaction_end:e.data.transaction_end,transaction_type:e.data.transaction_type}}),null}));return t}(c[e.index]))),o(1)}})," "]}),Object(m.jsxs)("span",{children:["Added on ",e.date_created]})]})}function ne(e){return Object(m.jsxs)("div",{className:"note-block",children:[Object(m.jsx)(ae,{index:e.index,title:e.title,date_created:e.date_created}),Object(m.jsx)(K,{data_array:e.texts}),Object(m.jsx)(Q,{data_array:e.contacts}),Object(m.jsx)(Y,{data_array:e.transactions}),Object(m.jsx)($,{data_array:e.checklists,is_checked:1}),Object(m.jsx)($,{data_array:e.lists,is_checked:0}),Object(m.jsx)(ee,{data_array:e.images}),Object(m.jsx)(X,{data_array:e.links}),Object(m.jsx)(te,{data_array:e.events}),Object(m.jsx)(Z,{data_array:e.locations})]})}var ce=c.a.createContext();function ie(e){var t=Object(n.useContext)(O)[0],a=Object(n.useState)(0),c=Object(s.a)(a,2),i=c[0],r=c[1],d=Object(n.useRef)(null),l=Object(n.useRef)(window.innerWidth>1270?3:window.innerWidth<700?1:2),o=Object(n.useRef)(new G({main_className:"note-block-collapse-btn-wrapper",parent_className:"note-collection",size:l.current,count:t.length,element_base_height:450,element_base_span:440}));Object(n.useEffect)((function(){window.innerWidth<800?(o.current.changeSizeAndMainArray(1),d.current.style.marginLeft="calc(50% - 220px)"):window.innerWidth<1270?(o.current.changeSizeAndMainArray(2),d.current.style.marginLeft="calc(50% - 440px)"):window.innerWidth>1270&&(o.current.changeSizeAndMainArray(3),d.current.style.marginLeft="calc(50% - 660px)")}),[t]);var u=-1;return window.onresize=function(){clearTimeout(u),u=setTimeout((function(){window.innerWidth<800?(o.current.changeSizeAndMainArray(1),d.current.style.marginLeft="calc(50% - 220px)"):window.innerWidth<1270?(o.current.changeSizeAndMainArray(2),d.current.style.marginLeft="calc(50% - 440px)"):window.innerWidth>1270&&(o.current.changeSizeAndMainArray(3),d.current.style.marginLeft="calc(50% - 660px)")}))},Object(m.jsx)("div",{className:"note-collection",ref:d,children:Object(m.jsx)(ce.Provider,{value:[i,r],children:t.map((function(e,t){return Object(m.jsxs)("div",{className:"note-block-collapse-btn-wrapper",children:[" ",Object(m.jsx)(ne,{index:t,title:e.title||"Note Title Here",date_created:e.date_created,texts:e.texts||[],events:e.events||[],images:e.images||[],locations:e.locations||[],transactions:e.transactions||[],checklists:e.checklists||[],lists:e.lists||[],links:e.links||[],contacts:e.contacts||[]}),Object(m.jsx)("span",{onClick:function(e){e.target.parentNode.classList.toggle("expand"),o.current.SetLayout(t,e.target.parentNode.classList.contains("expand"))},children:"Expand"})]},e.id)}))})})}var re=function(e){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(V,{}),Object(m.jsx)(ie,{})]})};var se=function(e){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"logo"}),Object(m.jsxs)("span",{children:["Take ",Object(m.jsx)("i",{children:"Notes"})]})]})};function de(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(m.jsxs)("div",{className:"search-category",children:[Object(m.jsx)("span",{children:"Sort By"}),Object(m.jsx)("span",{onClick:function(e){i((c+1)%3)},children:["Date Created","Only Images","Content Size"][c]})]})}var le=function(e){return Object(m.jsxs)("div",{className:"search-bar-wrapper",children:[Object(m.jsxs)("h1",{children:["Your Past ",Object(m.jsx)("i",{children:"Notes"})]}),Object(m.jsxs)("div",{className:"search-bar",children:[Object(m.jsx)("input",{type:"text",placeholder:"Type in to Search ..."}),Object(m.jsx)("span",{})]}),Object(m.jsx)(de,{})]})};function oe(e){var t=Object(n.useState)({username:"",userId:"",logged_in:!1}),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(function(e){var t=[];for(var a in localStorage)"User"===a.substr(0,4)&&t.push(a.substr(4));return t}())[0],d=Object(n.useState)(function(){var e=[];for(var t in localStorage)if("User"===t.substr(0,4)){var a=JSON.parse(localStorage.getItem(t));if(!a.notes)return;for(var n=a.notes.length,c=a.notes,i=0;i<n;i++)e.unshift(l(c[i]))}return e}(c.username)||[]),o=Object(s.a)(d,2),u=o[0],j=o[1];return Object(n.useEffect)((function(){var e;""!==c.username&&(e=c,localStorage.getItem("User".concat(e.username))||localStorage.setItem("User".concat(e.username),JSON.stringify(e)),function(e){for(var t in sessionStorage)"User"===t.substr(0,4)&&sessionStorage.removeItem(t);sessionStorage.setItem("User".concat(e.username),JSON.stringify(e))}(c))}),[c]),Object(m.jsx)(b.Provider,{value:[c,i],children:Object(m.jsxs)(O.Provider,{value:[u,j],children:[Object(m.jsx)(xe,{user_list:r,visible:Number(c.logged_in)}),Object(m.jsx)(ue,{logged_in:Number(c.logged_in),children:e.children})]})})}function ue(e){return Object(m.jsx)("div",{className:"main",children:e.logged_in?e.children:null})}function je(e){var t=Object(n.useState)([0,"Are you sure you want to delete ??"]),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(0),d=Object(s.a)(r,2),l=d[0],o=d[1],u=Object(n.useState)([]),b=Object(s.a)(u,2),O=b[0],p=b[1];return Object(m.jsx)(j.Provider,{value:[c,i],children:Object(m.jsx)(h.Provider,{value:[O,p],children:Object(m.jsx)(x.Provider,{value:[l,o],children:e.children})})})}function be(e){var t=Object(n.useContext)(j),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(m.jsx)("div",{className:"alert-window",type:c[0],children:Object(m.jsxs)("div",{className:"alert-box",children:[Object(m.jsx)("span",{children:c[1]}),Object(m.jsx)("span",{className:"close",onClick:function(){i([0,"no-alert"])}})]})})}function xe(e){var t=Object(n.useContext)(b)[1],a=Object(n.useRef)(null),c=Object(n.useState)(0),i=Object(s.a)(c,2),r=i[0],d=i[1];return Object(n.useEffect)((function(){var e=function(){for(var e in sessionStorage)if("User"===e.substr(0,4))return sessionStorage.getItem(e);return null}();null!==e&&(t(JSON.parse(e)),console.log(JSON.parse(e)))}),[t]),e.visible?null:Object(m.jsxs)("div",{className:"login-window",children:[Object(m.jsx)("span",{className:"login-error",visible:r,children:"Please enter a valid name to continue."}),Object(m.jsx)("div",{className:"main-logo"}),Object(m.jsxs)("h1",{children:["Take ",Object(m.jsx)("i",{children:"Notes"})]}),Object(m.jsx)("input",{type:"text",ref:a,placeholder:"Enter A Name"}),Object(m.jsxs)("button",{onClick:function(e){""===a.current.value?(d(1),setTimeout((function(){return d(0)}),3e3)):t({username:a.current.value,userId:Object(o.a)(),logged_in:!0})},children:["Start Taking Notes ",Object(m.jsx)("i",{})]}),e.user_list.length>0?Object(m.jsx)("h3",{className:"note-drawer-heading",style:{marginTop:"4em",marginBottom:"0px"},children:"Previous Logins"}):null,Object(m.jsx)("ul",{className:"user-list-past",children:e.user_list.map((function(e,a){return Object(m.jsx)("li",{onClick:function(){var a;t({username:e,userId:(a=e,JSON.parse(localStorage.getItem("User".concat(a))).userId),logged_in:!0})},children:e},a)}))})]})}var Oe=function(){return Object(m.jsx)(oe,{children:Object(m.jsxs)(je,{children:[Object(m.jsx)(se,{}),Object(m.jsx)(be,{}),Object(m.jsx)(P,{}),Object(m.jsx)(le,{}),Object(m.jsx)(re,{}),Object(m.jsx)(B,{})]})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Oe,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.de9b2928.chunk.js.map