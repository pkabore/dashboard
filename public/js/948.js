"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[948,311],{4861:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'.family-mono{font-family:Ubuntu Mono,"ui-monospace",monospace}',""]);const l=o},5986:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},l=[(0,n.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,n.createElementVNode)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"},null,-1)];const a={},s=(0,r(3744).Z)(a,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",o,l)}]])},6948:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var n=r(821),o={class:"flex justify-center max-w-3xl mx-auto px-2"},l={class:"w-full"},a=(0,n.createElementVNode)("h2",{class:"my-4 text-center text-gray-600 font-bold text-2xl"}," Ajouter client ",-1),s={key:0,class:"mb-1 font-medium text-sm text-green-700 flex items-center justify-end"},c={class:"mx-auto"},i=(0,n.createElementVNode)("label",{for:"lname",class:"text-sm font-bold text-gray-800"},"Nom:",-1),d={key:0,class:"text-red-700 text-xs mt-1"},m={class:"mt-[8px] mx-auto"},u=(0,n.createElementVNode)("label",{for:"fname",class:"text-sm font-bold text-gray-800"},"Prénom:",-1),p={key:0,class:"text-red-700 text-xs mt-1"},f={class:"mt-[8px] mx-auto"},h=(0,n.createElementVNode)("label",{for:"email",class:"text-sm font-bold text-gray-800"},"Email:",-1),v={key:0,class:"text-red-700 text-xs mt-1"},x={class:"mt-[8px] mx-auto"},w=(0,n.createElementVNode)("label",{for:"phone",class:"text-sm font-bold text-gray-800"},"Tel:",-1),V={key:0,class:"text-red-700 text-xs mt-1"},g={class:"mt-[8px] mx-auto"},b=(0,n.createElementVNode)("label",{for:"address",class:"text-sm font-bold text-gray-800"},"Addresse:",-1),k={key:0,class:"text-red-700 text-xs mt-1"},N={class:"flex items-center justify-end mx-auto mt-4"},E=["disabled"];var C=r(9038),y=r(2311),z=r(5986);const B={layout:y.default,components:{CheckIcon:z.Z},props:{message:String},setup:function(){var e=(0,C.cI)({fname:"",lname:"",phone:"",email:"",address:""});return{form:e,submit:function(){e.post(route("clients.store"),{onSuccess:function(){return e.reset()}})}}}};const M=(0,r(3744).Z)(B,[["render",function(e,t,r,C,y,z){var B=(0,n.resolveComponent)("CheckIcon");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",l,[a,(0,n.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,n.withModifiers)((function(){return C.submit&&C.submit.apply(C,arguments)}),["prevent"])),method:"post",class:"mx-auto p-4 bg-white rounded-3xl max-w-sm"},[r.message?((0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(r.message),1),(0,n.createVNode)(B,{class:"h-5 w-5 ml-1"})])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",c,[i,(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"lname",type:"text",class:(0,n.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":C.form.errors.lname}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return C.form.lname=e}),placeholder:"Nom"},null,2),[[n.vModelText,C.form.lname]]),C.form.errors.lname?((0,n.openBlock)(),(0,n.createElementBlock)("div",d,(0,n.toDisplayString)(C.form.errors.lname),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",m,[u,(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"fname",type:"text",class:(0,n.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":C.form.errors.fname}]),"onUpdate:modelValue":t[1]||(t[1]=function(e){return C.form.fname=e}),placeholder:"Prénom"},null,2),[[n.vModelText,C.form.fname]]),C.form.errors.fname?((0,n.openBlock)(),(0,n.createElementBlock)("div",p,(0,n.toDisplayString)(C.form.errors.fname),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",f,[h,(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"email",type:"text",class:(0,n.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":C.form.errors.email}]),"onUpdate:modelValue":t[2]||(t[2]=function(e){return C.form.email=e}),placeholder:"Email"},null,2),[[n.vModelText,C.form.email]]),C.form.errors.email?((0,n.openBlock)(),(0,n.createElementBlock)("div",v,(0,n.toDisplayString)(C.form.errors.email),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",x,[w,(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"phone",type:"text",class:(0,n.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":C.form.errors.phone}]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return C.form.phone=e}),placeholder:"Numéro de téléphone"},null,2),[[n.vModelText,C.form.phone]]),C.form.errors.phone?((0,n.openBlock)(),(0,n.createElementBlock)("div",V,(0,n.toDisplayString)(C.form.errors.phone),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",g,[b,(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"address",type:"text",class:(0,n.normalizeClass)(["input rounded p-2 text-base",{"border-red-500":C.form.errors.address}]),"onUpdate:modelValue":t[4]||(t[4]=function(e){return C.form.address=e}),placeholder:"Addresse"},null,2),[[n.vModelText,C.form.address]]),C.form.errors.address?((0,n.openBlock)(),(0,n.createElementBlock)("div",k,(0,n.toDisplayString)(C.form.errors.address),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",N,[(0,n.createElementVNode)("button",{type:"submit",class:(0,n.normalizeClass)(["bg-blue-600 text-white btn hover:bg-blue-700",{"opacity-25":C.form.processing}]),disabled:C.form.processing}," Ajouter ",10,E)])],32)])])}]])},2311:(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});var n=r(821),o={class:"min-h-screen relative"},l=(0,n.createElementVNode)("span",null,"Analytics",-1),a=(0,n.createElementVNode)("span",null,"Ventes",-1),s=(0,n.createElementVNode)("span",null,"Articles",-1),c=(0,n.createElementVNode)("span",null,"Rayons",-1),i=(0,n.createElementVNode)("span",null,"Factures",-1),d=(0,n.createElementVNode)("span",null,"Devis",-1),m=(0,n.createElementVNode)("span",null,"Clients",-1),u=(0,n.createElementVNode)("span",null,"Dépenses",-1),p=(0,n.createElementVNode)("span",null,"Logout",-1),f={class:"min-h-full absolute top-0 inset-x-0 md:left-[180px]"},h={class:"md:hidden print:hidden p-2 text-gray-800 flex items-center justify-between"},v=(0,n.createElementVNode)("span",{class:"text-xl font-medium"},"Market Admin",-1);var x=r(9038),w={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},V=[(0,n.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,n.createElementVNode)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"},null,-1)];var g=r(3744);const b={},k=(0,g.Z)(b,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",w,V)}]]);var N={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},E=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const C={},y=(0,g.Z)(C,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",N,E)}]]),z={};var B={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},M=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},null,-1)];const H={},I=(0,g.Z)(H,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",B,M)}]]);var Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},L=[(0,n.createElementVNode)("g",null,[(0,n.createElementVNode)("path",{d:"M0,0v24h24V0H0z M1,13V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4C2.34,16,1,14.66,1,13z M23,18c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1s1,0.45,1,1V18z",fill:"none"}),(0,n.createElementVNode)("path",{d:"M23,8v10c0,1.1-0.9,2-2,2H5c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h16V8c0-0.55,0.45-1,1-1S23,7.45,23,8z M4,16 c-1.66,0-3-1.34-3-3V7c0-1.66,1.34-3,3-3h12c1.66,0,3,1.34,3,3v7c0,1.1-0.9,2-2,2H4z M7,10c0,1.66,1.34,3,3,3s3-1.34,3-3 s-1.34-3-3-3S7,8.34,7,10z"})],-1)];const S={},A=(0,g.Z)(S,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",Z,L)}]]);var D={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},j=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},null,-1)];const $={},_=(0,g.Z)($,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",D,j)}]]);var W={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},F=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},null,-1),(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},null,-1)];const U={},P=(0,g.Z)(U,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",W,F)}]]);var T={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},G=[(0,n.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,n.createElementVNode)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"},null,-1)];const q={},Q=(0,g.Z)(q,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",T,G)}]]);var R={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},J=[(0,n.createElementVNode)("rect",{fill:"none",height:"24",width:"24"},null,-1),(0,n.createElementVNode)("path",{d:"M22,7h-9v2h9V7z M22,15h-9v2h9V15z M5.54,11L2,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,11z M5.54,19L2,15.46 l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L5.54,19z"},null,-1)];const K={},O=(0,g.Z)(K,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",R,J)}]]);var X={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},Y=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},null,-1)];const ee={},te=(0,g.Z)(ee,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",X,Y)}]]);var re={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},ne=[(0,n.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,n.createElementVNode)("path",{d:"M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"},null,-1)];const oe={},le=(0,g.Z)(oe,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",re,ne)}]]);var ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},se=[(0,n.createElementVNode)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),(0,n.createElementVNode)("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"},null,-1)];const ce={},ie=(0,g.Z)(ce,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",ae,se)}]]),de={components:{Link:x.rU,Head:x.Fb,LogoutIcon:k,GroupIcon:y,ArticleIcon:I,InvoiceIcon:z,MenuIcon:Q,CheckListIcon:O,PrintIcon:_,PaymentIcon:A,ChartIcon:P,ShoppingIcon:te,FolderIcon:le,FormatedListIcon:ie},setup:function(){return{sidebar:(0,n.ref)(!0)}}};var me=r(3379),ue=r.n(me),pe=r(4861),fe={insert:"head",singleton:!1};ue()(pe.Z,fe);pe.Z.locals;const he=(0,g.Z)(de,[["render",function(e,t,r,x,w,V){var g=(0,n.resolveComponent)("Head"),b=(0,n.resolveComponent)("ChartIcon"),k=(0,n.resolveComponent)("Link"),N=(0,n.resolveComponent)("ShoppingIcon"),E=(0,n.resolveComponent)("ArticleIcon"),C=(0,n.resolveComponent)("FolderIcon"),y=(0,n.resolveComponent)("PrintIcon"),z=(0,n.resolveComponent)("FormatedListIcon"),B=(0,n.resolveComponent)("GroupIcon"),M=(0,n.resolveComponent)("PaymentIcon"),H=(0,n.resolveComponent)("LogoutIcon"),I=(0,n.resolveComponent)("MenuIcon");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(g,{title:"Admin"}),(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["w-[180px] transform fixed inset-y-0 left-0 transition ease-in-out duration-300 shadow-xl shadow-sky-700 z-10 md:visible bg-slate-700 text-white text-base py-4 px-2 space-y-2 print:hidden md:transform-none",{"invisible -translate-x-full":x.sidebar,"translate-x-0":!x.sidebar}])},[(0,n.createVNode)(k,{onClick:t[0]||(t[0]=function(e){return x.sidebar=!x.sidebar}),href:"/",class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 hover:bg-slate-800 rounded-full transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Stats")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(b,{class:"h-5 w-5 mr-4 text-gray-200"}),l]})),_:1},8,["class"]),(0,n.createVNode)(k,{onClick:t[1]||(t[1]=function(e){return x.sidebar=!x.sidebar}),href:e.route("sales.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Sale")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(N,{class:"h-5 w-5 mr-4 text-gray-200"}),a]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[2]||(t[2]=function(e){return x.sidebar=!x.sidebar}),href:e.route("articles.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Article")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(E,{class:"h-5 w-5 mr-4 text-gray-200"}),s]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[3]||(t[3]=function(e){return x.sidebar=!x.sidebar}),href:e.route("categories.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Category")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(C,{class:"h-5 w-5 mr-4 text-gray-200"}),c]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[4]||(t[4]=function(e){return x.sidebar=!x.sidebar}),href:e.route("bills.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Bill")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(y,{class:"h-5 w-5 mr-4 text-gray-200"}),i]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[5]||(t[5]=function(e){return x.sidebar=!x.sidebar}),href:e.route("quotes.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Quote")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(z,{class:"h-5 w-5 mr-4 text-gray-200"}),d]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[6]||(t[6]=function(e){return x.sidebar=!x.sidebar}),href:e.route("clients.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Client")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(B,{class:"h-5 w-5 mr-4 text-gray-200"}),m]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[7]||(t[7]=function(e){return x.sidebar=!x.sidebar}),href:e.route("expenses.index"),class:(0,n.normalizeClass)(["flex items-center w-full pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200",{"bg-slate-800":e.$page.component.startsWith("Expense")}])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(M,{class:"h-5 w-5 mr-4 text-gray-200"}),u]})),_:1},8,["href","class"]),(0,n.createVNode)(k,{onClick:t[8]||(t[8]=function(e){return x.sidebar=!x.sidebar}),href:e.route("logout"),method:"post",as:"button",class:"w-full flex items-center pl-3 py-2 rounded-full hover:bg-slate-800 transition ease-out duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(H,{class:"h-5 w-5 mr-4 text-gray-200"}),p]})),_:1},8,["href"])],2),(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("div",h,[v,(0,n.createElementVNode)("button",{onClick:t[9]||(t[9]=function(e){return x.sidebar=!x.sidebar}),class:"group rounded-full bg-white hover:bg-slate-50 focus:bg-slate-100 p-3"},[(0,n.createVNode)(I,{class:"h-6 w-6 text-gray-700 group-hover:text-black"})])]),(0,n.renderSlot)(e.$slots,"default")])])],64)}]])}}]);