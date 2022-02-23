"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[572],{6139:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(821),s={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},n=[(0,o.createElementVNode)("g",{fill:"none"},[(0,o.createElementVNode)("path",{d:"M0 0h24v24H0V0z"}),(0,o.createElementVNode)("path",{d:"M0 0h24v24H0V0z",opacity:".87"})],-1),(0,o.createElementVNode)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},null,-1)];const a={},l=(0,r(3744).Z)(a,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",s,n)}]])},572:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var o=r(821),s={class:"min-h-screen bg-gray-100 mx-auto flex items-center justify-center px-2"},n={class:"w-full rounded-2xl max-w-sm bg-white border py-4 px-2 sm:px-6"},a={style:{"max-width":"300px",margin:"0 auto"}},l=(0,o.createElementVNode)("h2",{class:"font-bold text-center text-gray-900 text-2xl mt-2 mb-4"}," Accès sécurisé ",-1),c=(0,o.createElementVNode)("div",{class:"text-gray-600"}," Veuillez confirmer votre mot de passe. ",-1),m={class:"mx-auto"},d={class:"relative"},i={class:"absolute pl-2 inset-y-0 flex items-center pointer-events-none"},p={key:0,class:"text-red-700 text-xs mt-1"},u={class:"flex justify-end mt-4"},f=["disabled"];var v=r(6139),x=r(9038);const V={components:{Head:x.Fb,LockIcon:v.Z},setup:function(){var e=(0,x.cI)({password:""});return{form:e,submit:function(){e.post(route("password.confirm"),{onFinish:function(){return e.reset()}})}}}};const w=(0,r(3744).Z)(V,[["render",function(e,t,r,v,x,V){var w=(0,o.resolveComponent)("Head"),h=(0,o.resolveComponent)("LockIcon");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(w,{title:"Confirmation"}),(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",a,[l,(0,o.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,o.withModifiers)((function(){return v.submit&&v.submit.apply(v,arguments)}),["prevent"])),class:"w-full mx-auto max-w-xs"},[c,(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("span",i,[(0,o.createVNode)(h,{class:"h-5 w-5 text-gray-400"})]),(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"password",class:(0,o.normalizeClass)(["input py-2 max-w-xs pl-8",{"border-red-500":v.form.errors.password}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return v.form.password=e}),placeholder:"Mot de passe"},null,2),[[o.vModelText,v.form.password]])]),v.form.errors.password?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,(0,o.toDisplayString)(v.form.errors.password),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(["bg-blue-600 hover:btn-blue-700 text-white text-sm btn",{"opacity-25":v.form.processing}]),disabled:v.form.processing}," Confirmer ",10,f)])],32)])])])],64)}]])}}]);