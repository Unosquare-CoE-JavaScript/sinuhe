(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5142c739"],{"4df4":function(e,t,n){"use strict";var r=n("0366"),a=n("7b0b"),o=n("9bdd"),i=n("e95a"),s=n("50c4"),c=n("8418"),d=n("35a1");e.exports=function(e){var t,n,u,l,f,b,p=a(e),g="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,h=void 0!==m,O=d(p),y=0;if(h&&(m=r(m,v>2?arguments[2]:void 0,2)),void 0==O||g==Array&&i(O))for(t=s(p.length),n=new g(t);t>y;y++)b=h?m(p[y],y):p[y],c(n,y,b);else for(l=O.call(p),f=l.next,n=new g;!(u=f.call(l)).done;y++)b=h?o(l,m,[u.value,y],!0):u.value,c(n,y,b);return n.length=y,n}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("577e"),o=n("5899"),i="["+o+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),d=function(e){return function(t){var n=a(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(e,i),e}},"9bdd":function(e,t,n){var r=n("825a"),a=n("2a62");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(i){throw a(e),i}}},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),o=n("a691"),i=n("50c4"),s=n("7b0b"),c=n("65f0"),d=n("8418"),u=n("1dde"),l=u("splice"),f=Math.max,b=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l},{splice:function(e,t){var n,r,u,l,v,m,h=s(this),O=i(h.length),y=a(e,O),j=arguments.length;if(0===j?n=r=0:1===j?(n=0,r=O-y):(n=j-2,r=b(f(o(t),0),O-y)),O+n-r>p)throw TypeError(g);for(u=c(h,r),l=0;l<r;l++)v=y+l,v in h&&d(u,l,h[v]);if(u.length=r,n<r){for(l=y;l<O-r;l++)v=l+r,m=l+n,v in h?h[m]=h[v]:delete h[m];for(l=O;l>O-r+n;l--)delete h[l-1]}else if(n>r)for(l=O-r;l>y;l--)v=l+r-1,m=l+n-1,v in h?h[m]=h[v]:delete h[m];for(l=0;l<n;l++)h[l+y]=arguments[l+2];return h.length=O-r+n,u}})},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:a})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("6eeb"),s=n("5135"),c=n("c6b6"),d=n("7156"),u=n("d9b5"),l=n("c04e"),f=n("d039"),b=n("7c73"),p=n("241c").f,g=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,h="Number",O=a[h],y=O.prototype,j=c(b(y))==h,x=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,a,o,i,s,c,d=l(e,"number");if("string"==typeof d&&d.length>2)if(d=m(d),t=d.charCodeAt(0),43===t||45===t){if(n=d.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+d}for(o=d.slice(2),i=o.length,s=0;s<i;s++)if(c=o.charCodeAt(s),c<48||c>a)return NaN;return parseInt(o,r)}return+d};if(o(h,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var w,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(j?f((function(){y.valueOf.call(n)})):c(n)!=h)?d(new O(x(t)),n,_):x(t)},S=r?p(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;S.length>A;A++)s(O,w=S[A])&&!s(_,w)&&v(_,w,g(O,w));_.prototype=y,y.constructor=_,i(a,h,_)}},d28b:function(e,t,n){var r=n("746f");r("iterator")},e01a:function(e,t,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),s=n("861d"),c=n("9bf2").f,d=n("e893"),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(l[t]=!0),t};d(f,u);var b=f.prototype=u.prototype;b.constructor=f;var p=b.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(i(l,e))return"";var n=g?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},f74b:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"container mx-auto mt-6"},o={class:"md:grid md:grid-cols-3 md:gap-4"},i={class:"col-span-2"},s={class:"bg-white rounded border border-gray-200 relative flex flex-col"},c=Object(r["i"])("div",{class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},[Object(r["i"])("span",{class:"card-title"},"My Songs"),Object(r["i"])("i",{class:"fa fa-compact-disc float-right text-green-400 text-2xl"})],-1),d={class:"p-6"};function u(e,t,n,u,l,f){var b=Object(r["A"])("AppUpload"),p=Object(r["A"])("AppCompositionItem");return Object(r["v"])(),Object(r["f"])("section",a,[Object(r["i"])("div",o,[Object(r["i"])(b,{ref:"upload",addSong:f.addSong},null,8,["addSong"]),Object(r["i"])("div",i,[Object(r["i"])("div",s,[c,Object(r["i"])("div",d,[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(l.songs,(function(e,t){return Object(r["v"])(),Object(r["f"])(p,{key:e.docId,song:e,updateSong:f.updateSong,index:t,removeSong:f.removeSong,updateUnsavedFlag:f.updateUnsavedFlag},null,8,["song","updateSong","index","removeSong","updateUnsavedFlag"])})),128))])])])])])}var l=n("1da1"),f=n("5530"),b=(n("96cf"),n("a434"),n("159b"),n("b0c0"),{class:"col-span-1"}),p={class:"bg-white rounded border border-gray-200 relative flex flex-col"},g=Object(r["i"])("div",{class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},[Object(r["i"])("span",{class:"card-title"},"Upload"),Object(r["i"])("i",{class:"fas fa-upload float-right text-green-400 text-2xl"})],-1),v={class:"p-6"},m=Object(r["i"])("h5",null,"Drop your files here",-1),h=Object(r["i"])("hr",{class:"my-6"},null,-1),O={class:"flex h-4 overflow-hidden bg-gray-200 rounded"};function y(e,t,n,a,o,i){return Object(r["v"])(),Object(r["f"])("div",b,[Object(r["i"])("div",p,[g,Object(r["i"])("div",v,[Object(r["i"])("div",{class:["w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed\n                border-gray-400 text-gray-400 transition duration-500 hover:text-white\n                hover:bg-green-400 hover:border-green-400 hover:border-solid",{"bg-green-400 border-green-400 border-solid":o.is_dragover}],onDrag:t[1]||(t[1]=Object(r["N"])((function(){}),["prevent","stop"])),onDragstart:t[2]||(t[2]=Object(r["N"])((function(){}),["prevent","stop"])),onDragend:t[3]||(t[3]=Object(r["N"])((function(e){return o.is_dragover=!1}),["prevent","stop"])),onDragover:t[4]||(t[4]=Object(r["N"])((function(e){return o.is_dragover=!0}),["prevent","stop"])),onDragenter:t[5]||(t[5]=Object(r["N"])((function(e){return o.is_dragover=!0}),["prevent","stop"])),onDragleave:t[6]||(t[6]=Object(r["N"])((function(e){return o.is_dragover=!1}),["prevent","stop"])),onDrop:t[7]||(t[7]=Object(r["N"])((function(){return i.upload&&i.upload.apply(i,arguments)}),["prevent","stop"]))},[m],34),Object(r["i"])("input",{type:"file",onChange:t[8]||(t[8]=function(e){return i.upload(e)}),multiple:""},null,32),h,(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.uploads,(function(e){return Object(r["v"])(),Object(r["f"])("div",{class:"mb-4",key:e.name},[Object(r["i"])("div",{class:["font-bold text-sm",e.text_class]},[Object(r["i"])("i",{class:e.icon},null,2),Object(r["h"])(Object(r["E"])(e.name),1)],2),Object(r["i"])("div",O,[Object(r["i"])("div",{class:["transition-all progress-bar",e.variant],style:{width:e.current_progress+"%"}},null,6)])])})),128))])])])}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e){if(Array.isArray(e))return j(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function w(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a");function _(e,t){if(e){if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e){return x(e)||w(e)||_(e)||S()}var I=n("b79f"),N={name:"Upload",props:{addSong:{type:Function,required:!0}},data:function(){return{is_dragover:!1,uploads:[]}},methods:{upload:function(e){var t=this;this.is_dragover=!1;var n=e.dataTransfer?A(e.dataTransfer.files):A(e.target.files);n.forEach((function(e){if("audio/mpeg"===e.type)if(navigator.onLine){var n=I["d"].ref(),r=n.child("songs/".concat(e.name)),a=r.put(e),o=t.uploads.push({task:a,current_progress:0,name:e.name,variant:"bg-blue-400",icon:"fas fa-spinner fa-spin",text_class:""})-1;a.on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;t.uploads[o].current_progress=n}),(function(e){t.uploads[o].variant="bg-red-400",t.uploads[o].icon="fas fa-times",t.uploads[o].text="text-red-400",console.log(e)}),Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={uid:I["a"].currentUser.uid,display_name:I["a"].currentUser.displayName,original_name:a.snapshot.ref.name,modified_name:a.snapshot.ref.name,genre:"",comment_count:0},e.next=3,a.snapshot.ref.getDownloadURL();case 3:return n.url=e.sent,e.next=6,I["c"].add(n);case 6:return r=e.sent,e.next=9,r.get();case 9:i=e.sent,t.addSong(i),t.uploads[o].variant="bg-green-400",t.uploads[o].icon="fas fa-check",t.uploads[o].text="text-green-400";case 14:case"end":return e.stop()}}),e)}))))}else t.uploads.push({task:{},current_progress:100,name:e.name,variant:"bg-red-400",icon:"fas fa-times",text_class:"text-red-400"})}))},cancelUploads:function(){this.uploads.forEach((function(e){e.task.cancel()}))}},beforeUnmount:function(){this.uploads.forEach((function(e){e.task.cancel()}))}};N.render=y;var k=N,E={class:"border border-gray-200 p-3 mb-4 rounded"},F={class:"inline-block text-2xl font-bold"},U=Object(r["i"])("i",{class:"fa fa-times"},null,-1),T=Object(r["i"])("i",{class:"fa fa-pencil-alt"},null,-1),R={class:"mb-3"},C=Object(r["i"])("label",{class:"inline-block mb-2"},"Song Title",-1),M={class:"mb-3"},D=Object(r["i"])("label",{class:"inline-block mb-2"},"Genre",-1);function q(e,t,n,a,o,i){var s=Object(r["A"])("vee-field"),c=Object(r["A"])("ErrorMessage"),d=Object(r["A"])("vee-form");return Object(r["v"])(),Object(r["f"])("div",E,[Object(r["M"])(Object(r["i"])("div",null,[Object(r["i"])("h4",F,Object(r["E"])(n.song.modified_name),1),Object(r["i"])("button",{class:"ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right",onClick:t[1]||(t[1]=Object(r["N"])((function(){return i.deleteSong&&i.deleteSong.apply(i,arguments)}),["prevent"]))},[U]),Object(r["i"])("button",{class:"ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right",onClick:t[2]||(t[2]=Object(r["N"])((function(e){return o.showForm=!o.showForm}),["prevent"]))},[T])],512),[[r["I"],!o.showForm]]),Object(r["M"])(Object(r["i"])("div",null,[o.show_alert?(Object(r["v"])(),Object(r["f"])("div",{key:0,class:["text-whit text-center font-bold p-4 mb-4",o.alert_variant]},Object(r["E"])(o.alert_message),3)):Object(r["g"])("",!0),Object(r["i"])(d,{"validation-schema":o.schema,"initial-values":n.song,onSubmit:i.edit},{default:Object(r["L"])((function(){return[Object(r["i"])("div",R,[C,Object(r["i"])(s,{type:"text",name:"modified_name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n                        transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Song Title",onInput:t[3]||(t[3]=function(e){return n.updateUnsavedFlag(!0)})}),Object(r["i"])(c,{class:"text-red-600",name:"modified_name"})]),Object(r["i"])("div",M,[D,Object(r["i"])(s,{type:"text",name:"genre",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300\n                        transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Genre",onInput:t[4]||(t[4]=function(e){return n.updateUnsavedFlag(!0)})}),Object(r["i"])(c,{class:"text-red-600",name:"genre"})]),Object(r["i"])("button",{type:"submit",disabled:o.in_submission,class:"py-1.5 px-3 rounded text-white bg-green-600"}," Submit ",8,["disabled"]),Object(r["i"])("button",{type:"button",disabled:o.in_submission,class:"py-1.5 px-3 rounded text-white bg-gray-600",onClick:t[5]||(t[5]=Object(r["N"])((function(e){return o.showForm=!1}),["prevent"]))}," Go Back ",8,["disabled"])]})),_:1},8,["validation-schema","initial-values","onSubmit"])],512),[[r["I"],o.showForm]])])}n("a9e3");var L={name:"CompositionItem",props:{song:{type:Object,required:!0},updateSong:{type:Function,required:!0},index:{type:Number,required:!0},removeSong:{type:Function,required:!0},updateUnsavedFlag:{type:Function,required:!1}},data:function(){return{showForm:!1,schema:{modified_name:"required",genre:"alpha_spaces"},in_submission:!1,show_alert:!1,alert_variant:"bg-blue-500",alert_message:"Updating song..."}},methods:{edit:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.in_submission=!0,t.show_alert=!0,t.alert_variant="bg-blue-500",t.alert_message="Updating song",n.prev=4,n.next=7,I["c"].doc(t.song.docId).update(e);case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n["catch"](4),t.in_submission=!1,t.alert_variant="bg-red-500",t.alert_message="Something went wrong 😔 Try again later",n.abrupt("return");case 15:t.in_submission=!1,t.alert_variant="bg-green-500",t.alert_message="Success! 😄",t.updateSong(t.index,e),t.updateUnsavedFlag(!1);case 20:case"end":return n.stop()}}),n,null,[[4,9]])})))()},deleteSong:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=I["d"].ref(),r=n.child("songs/".concat(e.song.original_name)),t.next=4,r.delete();case 4:return t.next=6,I["c"].doc(e.song.docId).delete();case 6:e.removeSong(e.index);case 7:case"end":return t.stop()}}),t)})))()}}};L.render=q;var G=L,V={name:"manage",data:function(){return{songs:[],unsavedFlag:!1}},components:{AppUpload:k,AppCompositionItem:G},beforeRouteLeave:function(e,t,n){if(this.unsavedFlag){var r=confirm("You have unsaved changes. Are you sure you wanna leave");n(r)}else n()},methods:{updateUnsavedFlag:function(e){this.unsavedFlag=e},updateSong:function(e,t){this.songs[e].modified_name=t.modified_name,this.songs[e].genre=t.genre},removeSong:function(e){this.songs.splice(e,1)},addSong:function(e){var t=Object(f["a"])(Object(f["a"])({},e.data()),{},{docId:e.id});this.songs.push(t)}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I["c"].where("uid","==",I["a"].currentUser.uid).get();case 2:n=t.sent,n.forEach(e.addSong);case 4:case"end":return t.stop()}}),t)})))()}};V.render=u;t["default"]=V},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),i=n("23cb"),s=n("50c4"),c=n("fc6a"),d=n("8418"),u=n("b622"),l=n("1dde"),f=l("slice"),b=u("species"),p=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var n,r,u,l=c(this),f=s(l.length),v=i(e,f),m=i(void 0===t?f:t,f);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(l,v,m);for(r=new(void 0===n?Array:n)(g(m-v,0)),u=0;v<m;v++,u++)v in l&&d(r,u,l[v]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-5142c739.78985467.js.map