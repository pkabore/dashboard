"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[457,370],{2338:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".family-mono{font-family:Ubuntu Mono,monospace}",""]);const l=o},5986:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},l=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},8960:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},l=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},9371:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},l=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},9457:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(821),o={class:"flex justify-center max-w-3xl mx-auto px-2"},l={class:"w-full"},a=(0,r.createElementVNode)("h2",{class:"my-4 text-center text-gray-600 font-bold text-2xl"}," Enregistrer dépense ",-1),s={key:0,class:"mb-1 font-medium text-sm text-green-700 flex items-center justify-end"},c={class:"mx-auto"},i=(0,r.createElementVNode)("label",{for:"description",class:"text-sm font-bold text-gray-800"},"Motif:",-1),d={key:0,class:"text-red-700 text-xs mt-1"},u={class:"mt-1 relative"},m=(0,r.createElementVNode)("label",{for:"category",class:"text-sm family-mono uppercase font-bold text-gray-800"},"Rayon:",-1),p={class:"mt-1"},f={class:"block truncate"},h={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},v={class:"relative w-10/12 mb-1 mx-auto"},g={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},x={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text- emerald-700"},w={key:0,class:"text-red-700 text-xs mt-1"},V={class:"mx-auto"},k=(0,r.createElementVNode)("label",{for:"fee",class:"text-sm font-bold text-gray-800"},"Frais:",-1),b={key:0,class:"text-red-700 text-xs mt-1"},y={class:"flex items-center justify-end mx-auto mt-4"},C=["disabled"];var N=n(9370),E=n(8960),B=n(9371),M=n(5986),z=n(9038),I=n(9669),H=n.n(I),L=n(9246);const S={layout:N.default,components:{Listbox:L.Ri,ListboxButton:L.Y4,ListboxOptions:L.O_,ListboxOption:L.wt,CheckIcon:M.Z,SelectorIcon:B.Z,SearchIcon:E.Z},props:{message:String},setup:function(){var e=(0,z.cI)({category_id:{id:0,name:""},description:"",fee:""}),t=(0,r.ref)({search:""}),n=(0,r.ref)([]);return{submit:function(){e.post(route("expenses.store"),{onSuccess:function(){return e.reset()}})},searchCategory:function(){H().post(route("categories.search"),t.value).then((function(e){n.value=e.data.data})).catch((function(e){console.log(e)}))},escapeSpace:function(e){32===e.keyCode&&(e.stopImmediatePropagation(),t.value.client=t.value.client+" ")},form:e,search:t,categories:n}}};const Z=(0,n(3744).Z)(S,[["render",function(e,t,n,N,E,B){var M=(0,r.resolveComponent)("CheckIcon"),z=(0,r.resolveComponent)("SelectorIcon"),I=(0,r.resolveComponent)("ListboxButton"),H=(0,r.resolveComponent)("SearchIcon"),L=(0,r.resolveComponent)("ListboxOption"),S=(0,r.resolveComponent)("ListboxOptions"),Z=(0,r.resolveComponent)("Listbox");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[a,(0,r.createElementVNode)("form",{onSubmit:t[6]||(t[6]=(0,r.withModifiers)((function(){return N.submit&&N.submit.apply(N,arguments)}),["prevent"])),method:"post",class:"mx-auto max-w-sm"},[n.message?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(n.message),1),(0,r.createVNode)(M,{class:"h-5 w-5 ml-1"})])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",c,[i,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"description",type:"text",maxlength:"256",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":N.form.errors.description}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return N.form.description=e}),placeholder:"Motif"},null,2),[[r.vModelText,N.form.description]]),N.form.errors.description?((0,r.openBlock)(),(0,r.createElementBlock)("div",d,(0,r.toDisplayString)(N.form.errors.description),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",u,[m,(0,r.createVNode)(Z,{id:"category",modelValue:N.form.category_id,"onUpdate:modelValue":t[4]||(t[4]=function(e){return N.form.category_id=e})},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",p,[(0,r.createVNode)(I,{class:"relative w-full py-[11px] pl-3 pr-10 text-sm text-left bg-white border border-slate-300 focus:outline-none focus:border-slate-400 rounded-md cursor-default"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("span",f,(0,r.toDisplayString)(N.form.category_id.name||"Sélectionner"),1),(0,r.createElementVNode)("span",h,[(0,r.createVNode)(z,{class:"w-5 h-5 text-gray-400","aria-hidden":"true"})])]})),_:1}),(0,r.createVNode)(S,{class:"w-full py-1 mt-1 z-10 overflow-y-scroll bg-slate-50 rounded-md shadow-md shadow-slate-500/50 max-h-60 max-w-full focus:outline-none"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(L,{disabled:""},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",v,[(0,r.withDirectives)((0,r.createElementVNode)("input",{onInput:t[1]||(t[1]=function(){return N.searchCategory&&N.searchCategory.apply(N,arguments)}),type:"text",maxlength:"32",onKeydown:t[2]||(t[2]=function(){return N.escapeSpace&&N.escapeSpace.apply(N,arguments)}),class:"input text-sm py-[7px] pl-3 text-sm pr-10","onUpdate:modelValue":t[3]||(t[3]=function(e){return N.search.search=e}),placeholder:"Rechercher rayon"},null,544),[[r.vModelText,N.search.search]]),(0,r.createElementVNode)("span",g,[(0,r.createVNode)(H,{class:"w-5 h-5 text-gray-400","aria-hidden":"true"})])])]})),_:1}),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(N.categories,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(L,{key:t,value:e,as:"template"},{default:(0,r.withCtx)((function(t){var n=t.active,o=t.selected;return[(0,r.createElementVNode)("li",{class:(0,r.normalizeClass)([n?"text-blue-700 bg-blue-200":"text-gray-900","list-none cursor-default text-sm select-none relative py-2 pl-10 pr-4"])},[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)([o?"font-medium":"font-normal","block truncate"])},(0,r.toDisplayString)(e.name),3),o?((0,r.openBlock)(),(0,r.createElementBlock)("span",x,[(0,r.createVNode)(M,{class:"w-5 h-5","aria-hidden":"true"})])):(0,r.createCommentVNode)("",!0)],2)]})),_:2},1032,["value"])})),128))]})),_:1})])]})),_:1},8,["modelValue"]),N.form.errors["category_id.id"]?((0,r.openBlock)(),(0,r.createElementBlock)("div",w,(0,r.toDisplayString)(N.form.errors["category_id.id"]),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",V,[k,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"fee",type:"text",maxlength:"16",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":N.form.errors.fee}]),"onUpdate:modelValue":t[5]||(t[5]=function(e){return N.form.fee=e}),placeholder:"Frais"},null,2),[[r.vModelText,N.form.fee]]),N.form.errors.fee?((0,r.openBlock)(),(0,r.createElementBlock)("div",b,(0,r.toDisplayString)(N.form.errors.fee),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("button",{type:"submit",class:(0,r.normalizeClass)(["bg-blue-600 text-white py-2 px-4 text-sm shadow-md shadow-blue-500/50 rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none",{"opacity-25":N.form.processing}]),disabled:N.form.processing}," Enregistrer ",10,C)])],32)])])}]])},9370:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(821),o={class:"min-h-screen relative"},l=(0,r.createElementVNode)("span",null,"Analytics",-1),a=(0,r.createElementVNode)("span",null,"Ventes",-1),s=(0,r.createElementVNode)("span",null,"Articles",-1),c=(0,r.createElementVNode)("span",null,"Rayons",-1),i=(0,r.createElementVNode)("span",null,"Factures",-1),d=(0,r.createElementVNode)("span",null,"Devis",-1),u=(0,r.createElementVNode)("span",null,"Clients",-1),m=(0,r.createElementVNode)("span",null,"Dépenses",-1),p=(0,r.createElementVNode)("span",null,"Logout",-1),f={class:"min-h-full absolute top-0 right-0 md:left-[180px]"},h={class:"md:hidden p-2 text-gray-800 flex items-center justify-between"},v=(0,r.createElementVNode)("span",{class:"text-xl font-medium"},"Market Admin",-1);var g=n(9038),x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},w=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"},null,-1)];var V=n(3744);const k={},b=(0,V.Z)(k,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",x,w)}]]);var y={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},C=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const N={},E=(0,V.Z)(N,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",y,C)}]]),B={};var M={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},z=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1)];const I={},H=(0,V.Z)(I,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",M,z)}]]);var L={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},S=[(0,r.createElementVNode)("g",null,[(0,r.createElementVNode)("path",{d:"M0,0v24h24V0H0z M1,13V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4C2.34,16,1,14.66,1,13z M23,18c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1s1,0.45,1,1V18z",fill:"none"}),(0,r.createElementVNode)("path",{d:"M23,8v10c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1S23,7.45,23,8z M4,16 c-1.66,0-3-1.34-3-3V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4z M7,10c0,1.66,1.34,3,3,3s3-1.34,3-3 s-1.34-3-3-3S7,8.34,7,10z"})],-1)];const Z={},_=(0,V.Z)(Z,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",L,S)}]]);var j={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},D=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1)];const F={},A=(0,V.Z)(F,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",j,D)}]]);var $={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},W=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},null,-1)];const U={},O=(0,V.Z)(U,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",$,W)}]]);var P={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)];const T={},G=(0,V.Z)(T,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",P,R)}]]);var q={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},K=[(0,r.createElementVNode)("rect",{fill:"none",height:"24",width:"24"},null,-1),(0,r.createElementVNode)("path",{d:"M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"},null,-1)];const Q={},Y=(0,V.Z)(Q,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",q,K)}]]);var J={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},X=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const ee={},te=(0,V.Z)(ee,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",J,X)}]]);var ne={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},re=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"},null,-1)];const oe={},le=(0,V.Z)(oe,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",ne,re)}]]);var ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},se=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"},null,-1)];const ce={},ie=(0,V.Z)(ce,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",ae,se)}]]),de={components:{Link:g.rU,Head:g.Fb,LogoutIcon:b,GroupIcon:E,ArticleIcon:H,InvoiceIcon:B,MenuIcon:G,CheckListIcon:Y,PrintIcon:A,PaymentIcon:_,ChartIcon:O,ShoppingIcon:te,FolderIcon:le,FormatedListIcon:ie},setup:function(){return{sidebar:(0,r.ref)(!0)}}};var ue=n(3379),me=n.n(ue),pe=n(2338),fe={insert:"head",singleton:!1};me()(pe.Z,fe);pe.Z.locals;const he=(0,V.Z)(de,[["render",function(e,t,n,g,x,w){var V=(0,r.resolveComponent)("Head"),k=(0,r.resolveComponent)("ChartIcon"),b=(0,r.resolveComponent)("Link"),y=(0,r.resolveComponent)("ShoppingIcon"),C=(0,r.resolveComponent)("ArticleIcon"),N=(0,r.resolveComponent)("FolderIcon"),E=(0,r.resolveComponent)("PrintIcon"),B=(0,r.resolveComponent)("FormatedListIcon"),M=(0,r.resolveComponent)("GroupIcon"),z=(0,r.resolveComponent)("PaymentIcon"),I=(0,r.resolveComponent)("LogoutIcon"),H=(0,r.resolveComponent)("MenuIcon");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(V,{title:"Admin"}),(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["w-[180px] transform fixed inset-y-0 left-0 transition ease-in-out duration-3000 shadow-md shadow-blue-500/50 z-10 md:visible bg-slate-800 text-white text-base py-4 px-2 space-y-2 md:transform-none",{"invisible -translate-x-full":g.sidebar,"translate-x-0":!g.sidebar}])},[(0,r.createVNode)(b,{onClick:t[0]||(t[0]=function(e){return g.sidebar=!g.sidebar}),href:"/",class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Stats")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(k,{class:"h-5 w-5 mr-4 text-gray-200"}),l]})),_:1},8,["class"]),(0,r.createVNode)(b,{onClick:t[1]||(t[1]=function(e){return g.sidebar=!g.sidebar}),href:e.route("sales.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Sale")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(y,{class:"h-5 w-5 mr-4 text-gray-200"}),a]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[2]||(t[2]=function(e){return g.sidebar=!g.sidebar}),href:e.route("articles.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Article")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(C,{class:"h-5 w-5 mr-4 text-gray-200"}),s]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[3]||(t[3]=function(e){return g.sidebar=!g.sidebar}),href:e.route("categories.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Category")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(N,{class:"h-5 w-5 mr-4 text-gray-200"}),c]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[4]||(t[4]=function(e){return g.sidebar=!g.sidebar}),href:e.route("bills.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Bill")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(E,{class:"h-5 w-5 mr-4 text-gray-200"}),i]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[5]||(t[5]=function(e){return g.sidebar=!g.sidebar}),href:e.route("quotes.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Quote")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(B,{class:"h-5 w-5 mr-4 text-gray-200"}),d]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[6]||(t[6]=function(e){return g.sidebar=!g.sidebar}),href:e.route("clients.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Client")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(M,{class:"h-5 w-5 mr-4 text-gray-200"}),u]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[7]||(t[7]=function(e){return g.sidebar=!g.sidebar}),href:e.route("expenses.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Expense")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(z,{class:"h-5 w-5 mr-4 text-gray-200"}),m]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[8]||(t[8]=function(e){return g.sidebar=!g.sidebar}),href:e.route("logout"),method:"post",as:"button",class:"w-full flex items-center pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(I,{class:"h-5 w-5 mr-4 text-gray-200"}),p]})),_:1},8,["href"])],2),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",h,[v,(0,r.createVNode)(H,{onClick:t[9]||(t[9]=function(e){return g.sidebar=!g.sidebar}),class:"w-5 h-5 text-gray-600"})]),(0,r.renderSlot)(e.$slots,"default")])])],64)}]])}}]);