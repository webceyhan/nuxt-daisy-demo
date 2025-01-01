import{_ as y,a as C}from"./TtN-NLOd.js";import{_ as j,o as s,c as n,l as w,g as b,m as k,F as o,r as c,h as p,b as l,w as e,d as u,a,j as h,n as B,k as S,t as g}from"./DI_P1wf-.js";import{A as x}from"./D5LaGP6z.js";const N={},T={class:"carousel-item"};function I(m,r){return s(),n("div",T,[w(m.$slots,"default")])}const V=j(N,[["render",I]]),E=b({__name:"carousel",props:{snap:{},vertical:{type:Boolean}},setup(m){return(r,f)=>(s(),n("div",{class:k(["carousel",{[`carousel-${r.snap}`]:r.snap,"carousel-vertical":r.vertical}])},[w(r.$slots,"default")],2))}}),F=[{name:"carousel",props:[{name:"snap",type:"string",default:"start",values:x},{name:"vertical",type:"boolean",description:"Snap vertically"}],slots:[{name:"default",description:"Content of carousel"}]},{name:"carousel-item",slots:[{name:"default",description:"Content of carousel item"}]}],P=a("h1",{class:"text-4xl font-bold mb-8"},"Carousel",-1),z=a("p",null,"Carousel show images or content in a scrollable area.",-1),A=["src"],D=["src"],L=["src"],R=["src"],G=["src"],M=["src"],O={class:"flex justify-center w-full py-2 gap-2"},q=["href"],H=["src"],J={class:"absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"},K=["href"],Q=["href"],ee=b({__name:"index",setup(m){const r=[1,2,3,4,5,6,7],f=[1,2,3,4];return(U,W)=>{const $=C,i=V,_=E,d=y;return s(),n("div",null,[P,z,(s(!0),n(o,null,c(p(F),t=>(s(),h($,B(S(t)),null,16))),256)),(s(!0),n(o,null,c(p(x),t=>(s(),h(d,null,{title:e(()=>[u("Snap to "+g(t),1)]),default:e(()=>[l(_,{snap:t,class:"rounded-box"},{default:e(()=>[(s(),n(o,null,c(r,v=>l(i,null,{default:e(()=>[a("img",{src:`/img/caro${v}.jpeg`,alt:"Burger"},null,8,A)]),_:2},1024)),64))]),_:2},1032,["snap"])]),_:2},1024))),256)),l(d,null,{title:e(()=>[u("Carousel with full width items")]),default:e(()=>[l(_,{class:"w-64 rounded-box"},{default:e(()=>[(s(),n(o,null,c(r,t=>l(i,{class:"w-full"},{default:e(()=>[a("img",{src:`/img/caro${t}.jpeg`,alt:"Burger",class:"w-full"},null,8,D)]),_:2},1024)),64))]),_:1})]),_:1}),l(d,null,{title:e(()=>[u("Vertical carousel")]),default:e(()=>[l(_,{class:"h-96 rounded-box",vertical:""},{default:e(()=>[(s(),n(o,null,c(r,t=>l(i,{class:"h-full"},{default:e(()=>[a("img",{src:`/img/caro${t}.jpeg`,alt:"Burger"},null,8,L)]),_:2},1024)),64))]),_:1})]),_:1}),l(d,null,{title:e(()=>[u("Carousel with half width items")]),default:e(()=>[l(_,{class:"w-96 rounded-box"},{default:e(()=>[(s(),n(o,null,c(r,t=>l(i,{class:"w-1/2"},{default:e(()=>[a("img",{src:`/img/caro${t}.jpeg`,alt:"Burger",class:"w-full"},null,8,R)]),_:2},1024)),64))]),_:1})]),_:1}),l(d,null,{title:e(()=>[u("Full-bleed carousel")]),default:e(()=>[l(_,{snap:"center",class:"max-w-md p-4 space-x-4 bg-neutral rounded-box"},{default:e(()=>[(s(),n(o,null,c(r,t=>l(i,null,{default:e(()=>[a("img",{src:`/img/caro${t}.jpeg`,alt:"Burger",class:"rounded-box"},null,8,G)]),_:2},1024)),64))]),_:1})]),_:1}),l(d,null,{title:e(()=>[u("Carousel with indicator buttons")]),description:e(()=>[u(" This slider works with anchor links so the browser will snap vertically to the image when you click buttons. ")]),default:e(()=>[l(_,{class:"w-full"},{default:e(()=>[(s(),n(o,null,c(f,t=>l(i,{id:`item${t}`},{default:e(()=>[a("img",{src:`/img/caro-wide${t}.jpeg`,class:"w-full"},null,8,M)]),_:2},1032,["id"])),64))]),_:1}),a("div",O,[(s(),n(o,null,c(f,t=>a("a",{href:`#item${t}`,class:"btn btn-xs"},g(t),9,q)),64))])]),_:1}),l(d,null,{title:e(()=>[u("Carousel with next/prev buttons")]),description:e(()=>[u(" This slider works with anchor links so the browser will snap vertically to the image when you click buttons. ")]),default:e(()=>[l(_,{class:"w-full"},{default:e(()=>[(s(),n(o,null,c(f,t=>l(i,{id:`slide${t}`,class:"relative w-full"},{default:e(()=>[a("img",{src:`/img/caro-wide${t}.jpeg`,class:"w-full"},null,8,H),a("div",J,[a("a",{href:`#slide${t-1}`,class:"btn btn-circle"},"❮",8,K),a("a",{href:`#slide${t+1}`,class:"btn btn-circle"},"❯",8,Q)])]),_:2},1032,["id"])),64))]),_:1})]),_:1})])}}});export{ee as default};
