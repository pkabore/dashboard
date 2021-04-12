"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[335],{6139:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(821),s={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},n=[(0,r.createElementVNode)("g",{fill:"none"},[(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z"}),(0,r.createElementVNode)("path",{d:"M0 0h24v24H0V0z",opacity:".87"})],-1),(0,r.createElementVNode)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},null,-1)];const a={},l=(0,o(3744).Z)(a,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",s,n)}]])},8335:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var r=o(821),s={class:"min-h-screen max-w-sm mx-auto flex items-center justify-center px-2"},n={class:"w-full rounded-md border-2 py-4 px-2 sm:px-6"},a={style:{"max-width":"300px",margin:"0 auto"}},l=(0,r.createElementVNode)("h2",{class:"font-bold text-center text-gray-900 text-2xl mt-2 mb-4"}," Accès sécurisé ",-1),c=(0,r.createElementVNode)("div",{class:"text-gray-600"}," Veuillez confirmer votre mot de passe. ",-1),d={class:"mx-auto"},m={class:"relative"},i={class:"absolute pl-2 inset-y-0 flex items-center pointer-events-none"},u={key:0,class:"text-red-700 text-xs mt-1"},p={class:"flex justify-end mt-4"},f=["disabled"];var x=o(6139),v=o(9038);const w={components:{Head:v.Fb,LockIcon:x.Z},setup:function(){var e=(0,v.cI)({password:""});return{form:e,submit:function(){e.post(route("password.confirm"),{onFinish:function(){return e.reset()}})}}}};const V=(0,o(3744).Z)(w,[["render",function(e,t,o,x,v,w){var V=(0,r.resolveComponent)("Head"),h=(0,r.resolveComponent)("LockIcon");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(V,{title:"Confirmation"}),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",a,[l,(0,r.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(){return x.submit&&x.submit.apply(x,arguments)}),["prevent"])),class:"w-full mx-auto max-w-xs"},[c,(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("span",i,[(0,r.createVNode)(h,{class:"h-5 w-5 text-gray-600"})]),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password",class:(0,r.normalizeClass)(["input py-2 max-w-xs pl-8",{"border-red-500":x.form.errors.password}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return x.form.password=e}),placeholder:"Mot de passe"},null,2),[[r.vModelText,x.form.password]])]),x.form.errors.password?((0,r.openBlock)(),(0,r.createElementBlock)("div",u,(0,r.toDisplayString)(x.form.errors.password),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("button",{class:(0,r.normalizeClass)(["bg-blue-600 text-white py-2 px-4 text-sm shadow-md shadow-blue-500/50 flex items-center rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none",{"opacity-25":x.form.processing}]),disabled:x.form.processing}," Confirmer ",10,f)])],32)])])])],64)}]])}}]);