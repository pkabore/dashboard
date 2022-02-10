"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[611,251],{8516:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'.family-mono{font-family:"ui-monospace",Ubuntu Mono,monospace}',""]);const l=o},7086:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(821),o=["id"],l={class:"relative z-0"},a={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},s={class:"absolute z-10 w-full py-1 mt-[3px] text-sm bg-white border rounded shadow-lg shadow-slate-500/50 max-h-60 focus:outline-none overflow-auto transform transition duration-300 ease-in"},c=["onClick"];var i={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},d=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"},null,-1)];var u=n(3744);const m={},p={components:{SelectorIcon:(0,u.Z)(m,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",i,d)}]])},props:{items:Array,default:Object,id:String},setup:function(e){var t=(0,r.ref)(!1),n=(0,r.ref)(e.default),o=(0,r.ref)(e.default.name);return(0,r.onMounted)((function(){window.addEventListener("click",(function(n){!(n.target.id==e.id||n.target.parentElement&&n.target.parentElement.id==e.id||n.target.parentElement.parentElement&&n.target.parentElement.parentElement.id==e.id)&&(t.value=!1)})),window.addEventListener("keydown",(function(e){t.value&&27===e.keyCode&&(t.value=!1)}))})),{open:t,selected:n,keyword:o}}},f=(0,u.Z)(p,[["render",function(e,t,n,i,d,u){var m=(0,r.resolveComponent)("SelectorIcon");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"max-w-full relative",id:n.id},[(0,r.createElementVNode)("div",l,[(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"pl-3 pr-10 py-2 focus:outline-none sm:text-sm input",onFocus:t[0]||(t[0]=function(t){e.$emit("search",i.keyword),i.open=!0}),onInput:t[1]||(t[1]=function(t){e.$emit("search",i.keyword),i.open=!0}),onClick:t[2]||(t[2]=function(e){return i.open=!0}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.keyword=e}),placeholder:"Rechercher . . ."},null,544),[[r.vModelText,i.keyword]]),(0,r.createElementVNode)("span",a,[(0,r.createVNode)(m,{class:"w-5 h-5 text-gray-400","aria-hidden":"true"})])]),(0,r.withDirectives)((0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("ul",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.items,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{key:n,onClick:function(n){i.selected=t,i.open=!1,i.keyword=i.selected.name?i.selected.name:i.selected.fname+" "+i.selected.lname,e.$emit("choice",i.selected)},class:"hover:text-blue-900 hover:bg-blue-100 text-gray-900 cursor-default select-none relative py-2 pl-2"},(0,r.toDisplayString)(t.name?t.name:"".concat(t.fname," ").concat(t.lname)),9,c)})),128))])],512),[[r.vShow,i.open&&n.items.length]])],8,o)}]])},5986:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},l=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},8960:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},l=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},5611:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var r=n(821),o={class:"flex justify-center max-w-3xl mx-auto px-2"},l={class:"w-full"},a=(0,r.createElementVNode)("h2",{class:"my-4 text-center text-gray-600 font-bold text-2xl"}," Enregistrer dépense ",-1),s={key:0,class:"mb-1 font-medium text-sm text-green-700 flex items-center justify-end"},c={class:"mx-auto"},i=(0,r.createElementVNode)("label",{for:"description",class:"text-sm font-bold text-gray-800"},"Motif:",-1),d={key:0,class:"text-red-700 text-xs mt-1"},u={class:"mt-1 relative"},m=(0,r.createElementVNode)("label",{for:"category",class:"text-sm family-mono uppercase font-bold text-gray-800"},"Rayon:",-1),p={key:0,class:"text-red-700 text-xs mt-1"},f={class:"mx-auto"},h=(0,r.createElementVNode)("label",{for:"fee",class:"text-sm font-bold text-gray-800"},"Frais:",-1),v={key:0,class:"text-red-700 text-xs mt-1"},w={class:"flex items-center justify-end mx-auto mt-4"},g=["disabled"];var x=n(8251),k=n(8960),V=n(7086),E=n(5986),b=n(9038),C=n(9669),y=n.n(C);const N={layout:x.default,components:{CheckIcon:E.Z,Autocomplete:V.Z,SearchIcon:k.Z},props:{message:String},setup:function(){var e=(0,b.cI)({category_id:{id:0,name:""},description:"",fee:""}),t=(0,r.ref)({search:""}),n=(0,r.ref)([]);return{submit:function(){e.post(route("expenses.store"),{onSuccess:function(){return e.reset()}})},searchCategory:function(){y().post(route("categories.search"),t.value).then((function(e){n.value=e.data.data})).catch((function(e){}))},escapeSpace:function(e){32===e.keyCode&&(e.stopImmediatePropagation(),t.value.client=t.value.client+" ")},form:e,search:t,categories:n}}};const B=(0,n(3744).Z)(N,[["render",function(e,t,n,x,k,V){var E=(0,r.resolveComponent)("CheckIcon"),b=(0,r.resolveComponent)("Autocomplete");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[a,(0,r.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,r.withModifiers)((function(){return x.submit&&x.submit.apply(x,arguments)}),["prevent"])),method:"post",class:"mx-auto max-w-sm"},[n.message?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(n.message),1),(0,r.createVNode)(E,{class:"h-5 w-5 ml-1"})])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",c,[i,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"description",type:"text",maxlength:"256",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":x.form.errors.description}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return x.form.description=e}),placeholder:"Motif"},null,2),[[r.vModelText,x.form.description]]),x.form.errors.description?((0,r.openBlock)(),(0,r.createElementBlock)("div",d,(0,r.toDisplayString)(x.form.errors.description),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",u,[m,(0,r.createVNode)(b,{onChoice:t[1]||(t[1]=function(e){return x.form.category_id=e}),id:"category",items:x.categories,onSearch:t[2]||(t[2]=function(e){x.search.search=e,x.searchCategory()}),default:{name:"Aucun",id:1}},null,8,["items"]),x.form.errors["category_id.id"]?((0,r.openBlock)(),(0,r.createElementBlock)("div",p,(0,r.toDisplayString)(x.form.errors["category_id.id"]),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",f,[h,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"fee",type:"text",maxlength:"16",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":x.form.errors.fee}]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return x.form.fee=e}),placeholder:"Frais"},null,2),[[r.vModelText,x.form.fee]]),x.form.errors.fee?((0,r.openBlock)(),(0,r.createElementBlock)("div",v,(0,r.toDisplayString)(x.form.errors.fee),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("button",{type:"submit",class:(0,r.normalizeClass)(["bg-blue-600 text-white py-2 px-4 text-sm shadow-md shadow-blue-500/50 rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none",{"opacity-25":x.form.processing}]),disabled:x.form.processing}," Enregistrer ",10,g)])],32)])])}]])},8251:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(821),o={class:"min-h-screen relative"},l=(0,r.createElementVNode)("span",null,"Analytics",-1),a=(0,r.createElementVNode)("span",null,"Ventes",-1),s=(0,r.createElementVNode)("span",null,"Articles",-1),c=(0,r.createElementVNode)("span",null,"Rayons",-1),i=(0,r.createElementVNode)("span",null,"Factures",-1),d=(0,r.createElementVNode)("span",null,"Devis",-1),u=(0,r.createElementVNode)("span",null,"Clients",-1),m=(0,r.createElementVNode)("span",null,"Dépenses",-1),p=(0,r.createElementVNode)("span",null,"Logout",-1),f={class:"min-h-full absolute top-0 inset-x-0 md:left-[180px]"},h={class:"md:hidden p-2 text-gray-800 flex items-center justify-between"},v=(0,r.createElementVNode)("span",{class:"text-xl font-medium"},"Market Admin",-1);var w=n(9038),g={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},x=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"},null,-1)];var k=n(3744);const V={},E=(0,k.Z)(V,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",g,x)}]]);var b={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},C=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const y={},N=(0,k.Z)(y,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",b,C)}]]),B={};var M={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},z=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1)];const I={},H=(0,k.Z)(I,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",M,z)}]]);var Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},S=[(0,r.createElementVNode)("g",null,[(0,r.createElementVNode)("path",{d:"M0,0v24h24V0H0z M1,13V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4C2.34,16,1,14.66,1,13z M23,18c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1s1,0.45,1,1V18z",fill:"none"}),(0,r.createElementVNode)("path",{d:"M23,8v10c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1S23,7.45,23,8z M4,16 c-1.66,0-3-1.34-3-3V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4z M7,10c0,1.66,1.34,3,3,3s3-1.34,3-3 s-1.34-3-3-3S7,8.34,7,10z"})],-1)];const L={},j=(0,k.Z)(L,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",Z,S)}]]);var A={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},_=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1)];const $={},D=(0,k.Z)($,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",A,_)}]]);var F={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},W=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},null,-1)];const P={},U=(0,k.Z)(P,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",F,W)}]]);var R={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},T=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)];const G={},q=(0,k.Z)(G,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",R,T)}]]);var O={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Q=[(0,r.createElementVNode)("rect",{fill:"none",height:"24",width:"24"},null,-1),(0,r.createElementVNode)("path",{d:"M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"},null,-1)];const J={},K=(0,k.Z)(J,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",O,Q)}]]);var X={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},Y=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const ee={},te=(0,k.Z)(ee,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",X,Y)}]]);var ne={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},re=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"},null,-1)];const oe={},le=(0,k.Z)(oe,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",ne,re)}]]);var ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},se=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"},null,-1)];const ce={},ie=(0,k.Z)(ce,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",ae,se)}]]),de={components:{Link:w.rU,Head:w.Fb,LogoutIcon:E,GroupIcon:N,ArticleIcon:H,InvoiceIcon:B,MenuIcon:q,CheckListIcon:K,PrintIcon:D,PaymentIcon:j,ChartIcon:U,ShoppingIcon:te,FolderIcon:le,FormatedListIcon:ie},setup:function(){return{sidebar:(0,r.ref)(!0)}}};var ue=n(3379),me=n.n(ue),pe=n(8516),fe={insert:"head",singleton:!1};me()(pe.Z,fe);pe.Z.locals;const he=(0,k.Z)(de,[["render",function(e,t,n,w,g,x){var k=(0,r.resolveComponent)("Head"),V=(0,r.resolveComponent)("ChartIcon"),E=(0,r.resolveComponent)("Link"),b=(0,r.resolveComponent)("ShoppingIcon"),C=(0,r.resolveComponent)("ArticleIcon"),y=(0,r.resolveComponent)("FolderIcon"),N=(0,r.resolveComponent)("PrintIcon"),B=(0,r.resolveComponent)("FormatedListIcon"),M=(0,r.resolveComponent)("GroupIcon"),z=(0,r.resolveComponent)("PaymentIcon"),I=(0,r.resolveComponent)("LogoutIcon"),H=(0,r.resolveComponent)("MenuIcon");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(k,{title:"Admin"}),(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["w-[180px] transform fixed inset-y-0 left-0 transition ease-in-out duration-300 shadow-xl shadow-sky-700 z-10 md:visible bg-slate-700 text-white text-base py-4 px-2 space-y-2 md:transform-none",{"invisible -translate-x-full":w.sidebar,"translate-x-0":!w.sidebar}])},[(0,r.createVNode)(E,{onClick:t[0]||(t[0]=function(e){return w.sidebar=!w.sidebar}),href:"/",class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 hover:bg-slate-800 rounded-md transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Stats")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(V,{class:"h-5 w-5 mr-4 text-gray-200"}),l]})),_:1},8,["class"]),(0,r.createVNode)(E,{onClick:t[1]||(t[1]=function(e){return w.sidebar=!w.sidebar}),href:e.route("sales.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Sale")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(b,{class:"h-5 w-5 mr-4 text-gray-200"}),a]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[2]||(t[2]=function(e){return w.sidebar=!w.sidebar}),href:e.route("articles.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Article")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(C,{class:"h-5 w-5 mr-4 text-gray-200"}),s]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[3]||(t[3]=function(e){return w.sidebar=!w.sidebar}),href:e.route("categories.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Category")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(y,{class:"h-5 w-5 mr-4 text-gray-200"}),c]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[4]||(t[4]=function(e){return w.sidebar=!w.sidebar}),href:e.route("bills.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Bill")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(N,{class:"h-5 w-5 mr-4 text-gray-200"}),i]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[5]||(t[5]=function(e){return w.sidebar=!w.sidebar}),href:e.route("quotes.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Quote")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(B,{class:"h-5 w-5 mr-4 text-gray-200"}),d]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[6]||(t[6]=function(e){return w.sidebar=!w.sidebar}),href:e.route("clients.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Client")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(M,{class:"h-5 w-5 mr-4 text-gray-200"}),u]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[7]||(t[7]=function(e){return w.sidebar=!w.sidebar}),href:e.route("expenses.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Expense")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(z,{class:"h-5 w-5 mr-4 text-gray-200"}),m]})),_:1},8,["href","class"]),(0,r.createVNode)(E,{onClick:t[8]||(t[8]=function(e){return w.sidebar=!w.sidebar}),href:e.route("logout"),method:"post",as:"button",class:"w-full flex items-center pl-3 py-2 rounded-md hover:bg-slate-800 transition ease-out duration-200"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(I,{class:"h-5 w-5 mr-4 text-gray-200"}),p]})),_:1},8,["href"])],2),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",h,[v,(0,r.createVNode)(H,{onClick:t[9]||(t[9]=function(e){return w.sidebar=!w.sidebar}),class:"w-5 h-5 text-gray-600"})]),(0,r.renderSlot)(e.$slots,"default")])])],64)}]])}}]);