"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[440,370],{2338:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".family-mono{font-family:Ubuntu Mono,monospace}",""]);const l=o},5986:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},l=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},351:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821),o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},l=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"},null,-1)];const a={},s=(0,n(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},2489:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(821),o={class:"fixed inset-0 w-screen h-screen flex items-center justify-center z-20 transition duration-300 ease-in-out",style:{"background-color":"rgba(0, 0, 0, .9)"}},l={class:"bg-white rounded-md w-full max-w-sm p-4 z-30 drop-shadow-lg"},a={class:"my-3 text-lg text-center"},s={class:"border-t py-3 flex items-center justify-end space-x-2"};var c=n(351),i=n(5986);const d={components:{DeleteIcon:c.Z,CheckIcon:i.Z},props:{open:Boolean,type:String,message:String}};const m=(0,n(3744).Z)(d,[["render",function(e,t,n,c,i,d){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("h2",a,(0,r.toDisplayString)(n.message),1),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("button",{class:"bg-white py-2 px-4 border border-slate-300 hover:border-gray-600 transition ease-in-out duration-300 text-gray-700 focus:outline-none rounded-md focus:ring-0 text-sm",onClick:t[0]||(t[0]=function(t){return e.$emit("cancel")})}," Annuler "),(0,r.createElementVNode)("button",{class:(0,r.normalizeClass)(["py-2 px-4 transition ease-in-out duration-300 focus:outline-none rounded-md focus:ring-0 text-sm",{"text-red-600 bg-white border border-slate-300 hover:border-red-600":"Supprimer"==n.type,"bg-green-600 hover:bg-green-700 text-white":"Supprimer"!=n.type}]),onClick:t[1]||(t[1]=function(t){return e.$emit("confirm")})},(0,r.toDisplayString)(n.type),3)])])])}]])},440:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(821),o={class:"flex justify-center max-w-3xl mx-auto px-2"},l={class:"w-screen h-screen fixed inset-0 bg-black opacity-50 z-20"},a={class:"w-full"},s=(0,r.createElementVNode)("h2",{class:"my-4 text-center text-gray-600 font-bold text-2xl"}," Éditer client ",-1),c={key:0,class:"mb-1 font-medium text-sm text-green-700 flex items-center justify-end"},i={class:"mx-auto"},d=(0,r.createElementVNode)("label",{for:"lname",class:"text-sm font-bold text-gray-800"},"Nom:",-1),m={key:0,class:"text-red-700 text-xs mt-1"},u={class:"mt-[8px] mx-auto"},p=(0,r.createElementVNode)("label",{for:"fname",class:"text-sm font-bold text-gray-800"},"Prénom:",-1),f={key:0,class:"text-red-700 text-xs mt-1"},h={class:"mt-[8px] mx-auto"},v=(0,r.createElementVNode)("label",{for:"email",class:"text-sm font-bold text-gray-800"},"Email:",-1),x={key:0,class:"text-red-700 text-xs mt-1"},g={class:"mt-[8px] mx-auto"},w=(0,r.createElementVNode)("label",{for:"phone",class:"text-sm font-bold text-gray-800"},"Tel:",-1),V={key:0,class:"text-red-700 text-xs mt-1"},k={class:"mt-[8px] mx-auto"},b=(0,r.createElementVNode)("label",{for:"address",class:"text-sm font-bold text-gray-800"},"Addresse:",-1),N={key:0,class:"text-red-700 text-xs mt-1"},y={class:"flex items-center justify-end mx-auto mt-4"},C={class:"flex items-center justify-center"},E=["disabled"];var B=n(9370),z=n(5986),M=n(2489),H=n(9038);const I={layout:B.default,components:{CheckIcon:z.Z,Dialog:M.Z},props:{message:String,client:Object},setup:function(e){var t=(0,r.ref)(!1),n=(0,H.cI)({fname:e.client.fname,lname:e.client.lname,email:e.client.email,phone:e.client.phone,address:e.client.address}),o=(0,H.cI)({id:e.client.id});return{form:n,submit:function(){n.put(route("clients.update",e.client.id))},isOpen:t,closeModal:function(){t.value=!1},openModal:function(){t.value=!0},deleteClient:function(){t.value=!1,o.delete(route("clients.destroy",e.client.id))}}}};const Z=(0,n(3744).Z)(I,[["render",function(e,t,n,B,z,M){var H=(0,r.resolveComponent)("CheckIcon"),I=(0,r.resolveComponent)("Dialog");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("div",o,[(0,r.withDirectives)((0,r.createElementVNode)("div",l,null,512),[[r.vShow,B.isOpen]]),(0,r.createElementVNode)("div",a,[s,(0,r.createElementVNode)("form",{onSubmit:t[6]||(t[6]=(0,r.withModifiers)((function(){return B.submit&&B.submit.apply(B,arguments)}),["prevent"])),method:"post",class:"mx-auto relative max-w-sm"},[n.message?((0,r.openBlock)(),(0,r.createElementBlock)("div",c,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(n.message),1),(0,r.createVNode)(H,{class:"h-5 w-5 ml-1"})])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",i,[d,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"lname",type:"text",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":B.form.errors.lname}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return B.form.lname=e}),placeholder:"Nom"},null,2),[[r.vModelText,B.form.lname]]),B.form.errors.lname?((0,r.openBlock)(),(0,r.createElementBlock)("div",m,(0,r.toDisplayString)(B.form.errors.lname),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",u,[p,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"fname",type:"text",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":B.form.errors.fname}]),"onUpdate:modelValue":t[1]||(t[1]=function(e){return B.form.fname=e}),placeholder:"Prénom"},null,2),[[r.vModelText,B.form.fname]]),B.form.errors.fname?((0,r.openBlock)(),(0,r.createElementBlock)("div",f,(0,r.toDisplayString)(B.form.errors.fname),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",h,[v,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"email",type:"text",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":B.form.errors.email}]),"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.form.email=e}),placeholder:"Email"},null,2),[[r.vModelText,B.form.email]]),B.form.errors.email?((0,r.openBlock)(),(0,r.createElementBlock)("div",x,(0,r.toDisplayString)(B.form.errors.email),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",g,[w,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"phone",type:"text",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":B.form.errors.phone}]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return B.form.phone=e}),placeholder:"Numéro de téléphone"},null,2),[[r.vModelText,B.form.phone]]),B.form.errors.phone?((0,r.openBlock)(),(0,r.createElementBlock)("div",V,(0,r.toDisplayString)(B.form.errors.phone),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",k,[b,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"address",type:"text",class:(0,r.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":B.form.errors.address}]),"onUpdate:modelValue":t[4]||(t[4]=function(e){return B.form.address=e}),placeholder:"Addresse"},null,2),[[r.vModelText,B.form.address]]),B.form.errors.address?((0,r.openBlock)(),(0,r.createElementBlock)("div",N,(0,r.toDisplayString)(B.form.errors.address),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("button",{type:"button",onClick:t[5]||(t[5]=function(){return B.openModal&&B.openModal.apply(B,arguments)}),class:"delete-btn"}," Supprimer ")]),(0,r.createElementVNode)("button",{type:"submit",class:(0,r.normalizeClass)(["update-btn",{"opacity-25":B.form.processing}]),disabled:B.form.processing}," Modifier ",10,E)])],32)])]),(0,r.createVNode)(I,{onCancel:t[7]||(t[7]=function(e){return B.isOpen=!1}),onConfirm:t[8]||(t[8]=function(e){return B.deleteClient()}),class:(0,r.normalizeClass)({hidden:!B.isOpen}),type:"Supprimer",message:"Confirmez-vous cette suppression?"},null,8,["class"])],64)}]])},9370:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(821),o={class:"min-h-screen relative"},l=(0,r.createElementVNode)("span",null,"Analytics",-1),a=(0,r.createElementVNode)("span",null,"Ventes",-1),s=(0,r.createElementVNode)("span",null,"Articles",-1),c=(0,r.createElementVNode)("span",null,"Rayons",-1),i=(0,r.createElementVNode)("span",null,"Factures",-1),d=(0,r.createElementVNode)("span",null,"Devis",-1),m=(0,r.createElementVNode)("span",null,"Clients",-1),u=(0,r.createElementVNode)("span",null,"Dépenses",-1),p=(0,r.createElementVNode)("span",null,"Logout",-1),f={class:"min-h-full absolute top-0 right-0 md:left-[180px]"},h={class:"md:hidden p-2 text-gray-800 flex items-center justify-between"},v=(0,r.createElementVNode)("span",{class:"text-xl font-medium"},"Market Admin",-1);var x=n(9038),g={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},w=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"},null,-1)];var V=n(3744);const k={},b=(0,V.Z)(k,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",g,w)}]]);var N={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},y=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const C={},E=(0,V.Z)(C,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",N,y)}]]),B={};var z={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},M=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1)];const H={},I=(0,V.Z)(H,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",z,M)}]]);var Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},S=[(0,r.createElementVNode)("g",null,[(0,r.createElementVNode)("path",{d:"M0,0v24h24V0H0z M1,13V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4C2.34,16,1,14.66,1,13z M23,18c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1s1,0.45,1,1V18z",fill:"none"}),(0,r.createElementVNode)("path",{d:"M23,8v10c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1S23,7.45,23,8z M4,16 c-1.66,0-3-1.34-3-3V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4z M7,10c0,1.66,1.34,3,3,3s3-1.34,3-3 s-1.34-3-3-3S7,8.34,7,10z"})],-1)];const D={},L=(0,V.Z)(D,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",Z,S)}]]);var j={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},A=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1)];const $={},_=(0,V.Z)($,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",j,A)}]]);var F={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},W=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},null,-1)];const U={},P=(0,V.Z)(U,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",F,W)}]]);var T={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},O=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)];const G={},q=(0,V.Z)(G,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",T,O)}]]);var Q={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},R=[(0,r.createElementVNode)("rect",{fill:"none",height:"24",width:"24"},null,-1),(0,r.createElementVNode)("path",{d:"M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"},null,-1)];const J={},K=(0,V.Z)(J,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",Q,R)}]]);var X={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},Y=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const ee={},te=(0,V.Z)(ee,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",X,Y)}]]);var ne={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},re=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"},null,-1)];const oe={},le=(0,V.Z)(oe,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",ne,re)}]]);var ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},se=[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,r.createElementVNode)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"},null,-1)];const ce={},ie=(0,V.Z)(ce,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",ae,se)}]]),de={components:{Link:x.rU,Head:x.Fb,LogoutIcon:b,GroupIcon:E,ArticleIcon:I,InvoiceIcon:B,MenuIcon:q,CheckListIcon:K,PrintIcon:_,PaymentIcon:L,ChartIcon:P,ShoppingIcon:te,FolderIcon:le,FormatedListIcon:ie},setup:function(){return{sidebar:(0,r.ref)(!0)}}};var me=n(3379),ue=n.n(me),pe=n(2338),fe={insert:"head",singleton:!1};ue()(pe.Z,fe);pe.Z.locals;const he=(0,V.Z)(de,[["render",function(e,t,n,x,g,w){var V=(0,r.resolveComponent)("Head"),k=(0,r.resolveComponent)("ChartIcon"),b=(0,r.resolveComponent)("Link"),N=(0,r.resolveComponent)("ShoppingIcon"),y=(0,r.resolveComponent)("ArticleIcon"),C=(0,r.resolveComponent)("FolderIcon"),E=(0,r.resolveComponent)("PrintIcon"),B=(0,r.resolveComponent)("FormatedListIcon"),z=(0,r.resolveComponent)("GroupIcon"),M=(0,r.resolveComponent)("PaymentIcon"),H=(0,r.resolveComponent)("LogoutIcon"),I=(0,r.resolveComponent)("MenuIcon");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(V,{title:"Admin"}),(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["w-[180px] transform fixed inset-y-0 left-0 transition ease-in-out duration-3000 shadow-md shadow-blue-500/50 z-10 md:visible bg-slate-800 text-white text-base py-4 px-2 space-y-2 md:transform-none",{"invisible -translate-x-full":x.sidebar,"translate-x-0":!x.sidebar}])},[(0,r.createVNode)(b,{onClick:t[0]||(t[0]=function(e){return x.sidebar=!x.sidebar}),href:"/",class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Stats")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(k,{class:"h-5 w-5 mr-4 text-gray-200"}),l]})),_:1},8,["class"]),(0,r.createVNode)(b,{onClick:t[1]||(t[1]=function(e){return x.sidebar=!x.sidebar}),href:e.route("sales.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Sale")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(N,{class:"h-5 w-5 mr-4 text-gray-200"}),a]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[2]||(t[2]=function(e){return x.sidebar=!x.sidebar}),href:e.route("articles.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Article")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(y,{class:"h-5 w-5 mr-4 text-gray-200"}),s]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[3]||(t[3]=function(e){return x.sidebar=!x.sidebar}),href:e.route("categories.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Category")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(C,{class:"h-5 w-5 mr-4 text-gray-200"}),c]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[4]||(t[4]=function(e){return x.sidebar=!x.sidebar}),href:e.route("bills.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Bill")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(E,{class:"h-5 w-5 mr-4 text-gray-200"}),i]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[5]||(t[5]=function(e){return x.sidebar=!x.sidebar}),href:e.route("quotes.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Quote")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(B,{class:"h-5 w-5 mr-4 text-gray-200"}),d]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[6]||(t[6]=function(e){return x.sidebar=!x.sidebar}),href:e.route("clients.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Client")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(z,{class:"h-5 w-5 mr-4 text-gray-200"}),m]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[7]||(t[7]=function(e){return x.sidebar=!x.sidebar}),href:e.route("expenses.index"),class:(0,r.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200",{"ring ring-sky-500/50 bg-slate-900":e.$page.component.startsWith("Expense")}])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(M,{class:"h-5 w-5 mr-4 text-gray-200"}),u]})),_:1},8,["href","class"]),(0,r.createVNode)(b,{onClick:t[8]||(t[8]=function(e){return x.sidebar=!x.sidebar}),href:e.route("logout"),method:"post",as:"button",class:"w-full flex items-center pl-3 py-2 rounded-md hover:bg-slate-900 transition ease-out duration-200"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(H,{class:"h-5 w-5 mr-4 text-gray-200"}),p]})),_:1},8,["href"])],2),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",h,[v,(0,r.createVNode)(I,{onClick:t[9]||(t[9]=function(e){return x.sidebar=!x.sidebar}),class:"w-5 h-5 text-gray-600"})]),(0,r.renderSlot)(e.$slots,"default")])])],64)}]])}}]);