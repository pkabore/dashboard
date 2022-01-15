"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[487,954],{3528:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".family-mono{font-family:Ubuntu Mono,monospace}",""]);const l=r},5986:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(821),r={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},l=[(0,o.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,o.createElementVNode)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",r,l)}]])},8487:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var o=n(821),r={class:"flex justify-center max-w-3xl mx-auto px-2"},l={class:"w-full"},a=(0,o.createElementVNode)("h2",{class:"my-4 border-b text-center text-gray-600 font-bold text-2xl"}," Éditer rayon ",-1),s={key:0,class:"mb-1 font-medium text-sm text-green-700 flex items-center justify-end"},c={class:"mx-auto"},i=(0,o.createElementVNode)("label",{for:"name",class:"text-sm font-bold text-gray-800"},"Rayon:",-1),d={key:0,class:"text-red-700 text-xs mt-1"},u={class:"flex items-center justify-end mx-auto mt-4"},m={class:"flex items-center justify-center"},p=["disabled"],h={class:"mx-auto overflow-y-auto"},f={class:"px-4 text-center"},v=(0,o.createElementVNode)("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," ​ ",-1),w={class:"inline-block w-full mx-auto max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-md rounded-2xl"},x=(0,o.createTextVNode)(" Confirmer la suppression ? "),g=(0,o.createElementVNode)("div",{class:"mt-2"},[(0,o.createElementVNode)("p",{class:"text-sm text-red-700 font-bold"}," Attention , cette opération supprimera aussi les articles associés! ")],-1),V={class:"mt-4 flex items-center"};var N=n(5986),k=n(7954),b=n(9038),C=n(8342);const y={layout:k.default,components:{CheckIcon:N.Z,Dialog:C.Vq,DialogOverlay:C.t9,DialogTitle:C.$N},props:{category:Object,message:String},setup:function(e){var t=(0,b.cI)({name:e.category.name}),n=(0,b.cI)({id:e.category.id}),r=(0,o.ref)(!1);return{form:t,submit:function(){t.put(route("categories.update",e.category.id),{onSuccess:function(){}})},isOpen:r,closeModal:function(){r.value=!1},openModal:function(){r.value=!0},deleteCategory:function(){r.value=!1,n.delete(route("categories.destroy",e.category.id))}}}};const E=(0,n(3744).Z)(y,[["render",function(e,t,n,N,k,b){var C=(0,o.resolveComponent)("CheckIcon"),y=(0,o.resolveComponent)("DialogTitle"),E=(0,o.resolveComponent)("Dialog");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[a,(0,o.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return N.submit&&N.submit.apply(N,arguments)}),["prevent"])),method:"post",class:"mx-auto max-w-sm"},[n.message?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(n.message),1),(0,o.createVNode)(C,{class:"h-5 w-5 ml-1"})])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",c,[i,(0,o.withDirectives)((0,o.createElementVNode)("input",{id:"name",type:"text",class:(0,o.normalizeClass)(["input rounded p-2 text-base",{"border-blue-700":N.form.errors.name}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return N.form.name=e}),placeholder:"Nom du rayon"},null,2),[[o.vModelText,N.form.name]]),N.form.errors.name?((0,o.openBlock)(),(0,o.createElementBlock)("div",d,(0,o.toDisplayString)(N.form.errors.name),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",m,[1!=n.category.id?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,type:"button",onClick:t[1]||(t[1]=function(){return N.openModal&&N.openModal.apply(N,arguments)}),class:"bg-red-600 text-white py-2 px-4 mr-4 text-sm shadow-md shadow-red-700/50 rounded-md hover:bg-red-700 transition ease-in-out duration-300 focus:outline-none"}," Supprimer ")):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("button",{type:"submit",class:(0,o.normalizeClass)(["bg-blue-600 text-white py-2 px-4 text-sm shadow-md shadow-blue-500/50 rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none",{"opacity-25":N.form.processing}]),disabled:N.form.processing}," Modifier ",10,p)]),(0,o.createVNode)(E,{as:"div",onClose:N.closeModal,class:"max-w-sm mx-auto relative z-30",open:N.isOpen},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,[v,(0,o.createElementVNode)("div",w,[(0,o.createVNode)(y,{as:"h3",class:"text-lg leading-6 text-gray-900"},{default:(0,o.withCtx)((function(){return[x]})),_:1}),g,(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("button",{type:"button",class:"bg-red-600 mr-2 text-white py-2 px-4 mr-4 text-sm shadow-md shadow-red-700/50 rounded-md hover:bg-red-700 transition ease-in-out duration-300 focus:outline-none",onClick:t[2]||(t[2]=function(){return N.deleteCategory&&N.deleteCategory.apply(N,arguments)})}," Oui, supprimer "),(0,o.createElementVNode)("button",{type:"button",class:"bg-blue-600 text-white py-2 px-4 text-sm shadow-md shadow-blue-500/50 rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none",onClick:t[3]||(t[3]=function(e){return N.isOpen=!1})}," Annuler ")])])])])]})),_:1},8,["onClose","open"])],32)])])}]])},7954:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var o=n(821),r={class:"min-h-screen relative"},l=(0,o.createElementVNode)("span",null,"Analytics",-1),a=(0,o.createElementVNode)("span",null,"Ventes",-1),s=(0,o.createElementVNode)("span",null,"Articles",-1),c=(0,o.createElementVNode)("span",null,"Rayons",-1),i=(0,o.createElementVNode)("span",null,"Factures",-1),d=(0,o.createElementVNode)("span",null,"Devis",-1),u=(0,o.createElementVNode)("span",null,"Clients",-1),m=(0,o.createElementVNode)("span",null,"Dépenses",-1),p=(0,o.createElementVNode)("span",null,"Logout",-1),h={class:"min-h-full mx-auto absolute inset-x-0 top-0 md:left-44",style:{}},f={class:"md:hidden p-3 text-slate-800 flex items-center justify-between"},v=(0,o.createElementVNode)("span",{class:"text-xl font-medium"},"Market Admin",-1);var w=n(9038),x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},g=[(0,o.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,o.createElementVNode)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"},null,-1)];var V=n(3744);const N={},k=(0,V.Z)(N,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",x,g)}]]);var b={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},C=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const y={},E=(0,V.Z)(y,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",b,C)}]]),M={};var B={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},z=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1)];const H={},I=(0,V.Z)(H,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",B,z)}]]);var Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},L=[(0,o.createElementVNode)("g",null,[(0,o.createElementVNode)("path",{d:"M0,0v24h24V0H0z M1,13V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4C2.34,16,1,14.66,1,13z M23,18c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1s1,0.45,1,1V18z",fill:"none"}),(0,o.createElementVNode)("path",{d:"M23,8v10c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1S23,7.45,23,8z M4,16 c-1.66,0-3-1.34-3-3V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4z M7,10c0,1.66,1.34,3,3,3s3-1.34,3-3 s-1.34-3-3-3S7,8.34,7,10z"})],-1)];const S={},j=(0,V.Z)(S,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",Z,L)}]]);var A={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},_=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1)];const D={},$=(0,V.Z)(D,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",A,_)}]]);var W={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},F=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},null,-1),(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},null,-1)];const O={},P=(0,V.Z)(O,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",W,F)}]]);var T={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},U=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)];const q={},G=(0,V.Z)(q,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",T,U)}]]);var R={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Q=[(0,o.createElementVNode)("rect",{fill:"none",height:"24",width:"24"},null,-1),(0,o.createElementVNode)("path",{d:"M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"},null,-1)];const J={},K=(0,V.Z)(J,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",R,Q)}]]);var X={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},Y=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const ee={},te=(0,V.Z)(ee,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",X,Y)}]]);var ne={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},oe=[(0,o.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,o.createElementVNode)("path",{d:"M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"},null,-1)];const re={},le=(0,V.Z)(re,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",ne,oe)}]]);var ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},se=[(0,o.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,o.createElementVNode)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"},null,-1)];const ce={},ie=(0,V.Z)(ce,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",ae,se)}]]),de={components:{Link:w.rU,Head:w.Fb,LogoutIcon:k,GroupIcon:E,ArticleIcon:I,InvoiceIcon:M,MenuIcon:G,CheckListIcon:K,PrintIcon:$,PaymentIcon:j,ChartIcon:P,ShoppingIcon:te,FolderIcon:le,FormatedListIcon:ie},setup:function(){return{sidebar:(0,o.ref)(!0)}}};var ue=n(3379),me=n.n(ue),pe=n(3528),he={insert:"head",singleton:!1};me()(pe.Z,he);pe.Z.locals;const fe=(0,V.Z)(de,[["render",function(e,t,n,w,x,g){var V=(0,o.resolveComponent)("Head"),N=(0,o.resolveComponent)("ChartIcon"),k=(0,o.resolveComponent)("Link"),b=(0,o.resolveComponent)("ShoppingIcon"),C=(0,o.resolveComponent)("ArticleIcon"),y=(0,o.resolveComponent)("FolderIcon"),E=(0,o.resolveComponent)("PrintIcon"),M=(0,o.resolveComponent)("FormatedListIcon"),B=(0,o.resolveComponent)("GroupIcon"),z=(0,o.resolveComponent)("PaymentIcon"),H=(0,o.resolveComponent)("LogoutIcon"),I=(0,o.resolveComponent)("MenuIcon");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(V,{title:"Admin"}),(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["w-44 transform fixed inset-y-0 left-0 transition ease-in-out duration-3000 shadow-md shadow-blue-500/50 z-10 md:visible bg-slate-800 text-white text-base py-4 px-2 space-y-2 md:transform-none",{"invisible -translate-x-full":w.sidebar,"translate-x-0":!w.sidebar}])},[(0,o.createVNode)(k,{href:"/",class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Stats")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(N,{class:"h-5 w-5 mr-4 text-gray-200"}),l]})),_:1},8,["class"]),(0,o.createVNode)(k,{href:e.route("sales.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Sale")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,{class:"h-5 w-5 mr-4 text-gray-200"}),a]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("articles.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Article")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(C,{class:"h-5 w-5 mr-4 text-gray-200"}),s]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("categories.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Category")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(y,{class:"h-5 w-5 mr-4 text-gray-200"}),c]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("bills.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Bill")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(E,{class:"h-5 w-5 mr-4 text-gray-200"}),i]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("quotes.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Quote")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(M,{class:"h-5 w-5 mr-4 text-gray-200"}),d]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("clients.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Client")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(B,{class:"h-5 w-5 mr-4 text-gray-200"}),u]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("expenses.index"),class:(0,o.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"bg-slate-900":e.$page.component.startsWith("Expense")}])},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(z,{class:"h-5 w-5 mr-4 text-gray-200"}),m]})),_:1},8,["href","class"]),(0,o.createVNode)(k,{href:e.route("logout"),method:"post",as:"button",class:"w-full flex items-center pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(H,{class:"h-5 w-5 mr-4 text-gray-200"}),p]})),_:1},8,["href"])],2),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,[v,(0,o.createVNode)(I,{onClick:t[0]||(t[0]=function(e){return w.sidebar=!w.sidebar}),class:"w-5 h-5 text-gray-600"})]),(0,o.renderSlot)(e.$slots,"default")])])],64)}]])}}]);