(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9305:function(e,t,a){Promise.resolve().then(a.bind(a,5857))},5857:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var s=a(7437),n=a(6691),r=a.n(n),l=a(2265);function o(){var[e,t]=(0,l.useState)((0,s.jsx)("span",{className:"text-white",children:"Loading... Please Wait..."}));return(0,l.useEffect)(()=>{fetch("https://corsproxy.io/?".concat(encodeURIComponent("https://overlayer.c3nb.net/api/customTags"))).then(e=>{e.json().then(e=>{t(e.map(e=>(0,s.jsxs)("div",{className:"bg-white w-72 h-52 rounded-3xl drop-shadow-2xl bg-opacity-50 p-5",children:[(0,s.jsx)("span",{className:"text-2xl text-white",children:e.name+" ("+e.scriptLanguage+")"}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"text-white",children:["By ",e.author]}),(0,s.jsx)("div",{className:"overflow-y-auto break-all h-14 bg-gray-400 p-1 scrollBar",children:(0,s.jsx)("span",{className:"text-white",children:e.description})}),(0,s.jsx)("button",{onClick:()=>{var t,a,s,n;t=e.source,a=e.name+".".concat(e.scriptLanguage.toLowerCase()),(s=document.createElement("a")).download=a,n=new Blob([t],{type:"text/plain"}),s.href=window.URL.createObjectURL(n),s.click()},className:"rounded-full bg-blue-500 p-2 top-36 text-white drop-shadow-2xl hover:scale-110 transition ease-in-out absolute",children:"Download"})]},e.name+e.author+e.scriptLanguage+e.description)))})})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:"flex p-5 bg-gradient-to-r from-blue-950 to-blue-700 drop-shadow-2xl fixed w-full z-50",children:[(0,s.jsx)(r(),{src:"https://bit.ly/Overlayer",alt:"Overlayer Logo",width:36,height:36,className:"scale-150"}),(0,s.jsx)("span",{className:"ml-5 text-3xl text-white",children:"Overlayer Custom Tag Store"})]}),(0,s.jsx)("main",{className:"grid w-screen h-screen top-0 pt-32 pl-10 pr-10 gap-5",style:{gridTemplateColumns:"repeat(auto-fit, minmax(288px, 208px))"},children:e})]})}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=9305)}),_N_E=e.O()}]);