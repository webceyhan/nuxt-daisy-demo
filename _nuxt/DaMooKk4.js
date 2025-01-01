import{_ as m,a as f}from"./TtN-NLOd.js";import{g as p,o as d,c as u,F as h,r as b,h as w,b as l,w as t,d as n,a as e,D as g,E as x,G as v,H as I,j as S,n as C,k as N}from"./DI_P1wf-.js";const y=[{name:"drawer",props:[{name:"id",type:"string",description:"ID of drawer"},{name:"open",type:"boolean",description:"Force drawer to stay open"},{name:"align-end",type:"boolean",description:"Align drawer to right side of page"}],slots:[{name:"default",description:"Content of drawer"}]},{name:"drawer-side",slots:[{name:"default",description:"Content of drawer sidebar"}]},{name:"drawer-content",slots:[{name:"default",description:"Content of drawer content"}]},{name:"drawer-button",slots:[{name:"default",description:"Content of drawer toggle button"}]}],D=e("h1",{class:"text-4xl font-bold mb-8"},"Drawer",-1),k=e("p",null," Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page. ",-1),$=e("ul",{class:"menu p-4 w-80 min-h-full bg-base-200 text-base-content"},[e("li",null,[e("a",null,"Sidebar Item 1")]),e("li",null,[e("a",null,"Sidebar Item 2")])],-1),B=e("ul",{class:"menu p-4 w-80 min-h-full bg-base-200 text-base-content"},[e("li",null,[e("a",null,"Sidebar Item 1")]),e("li",null,[e("a",null,"Sidebar Item 2")])],-1),z={class:"w-full navbar bg-base-300"},E={class:"flex-none"},F=e("div",{class:"flex-1 px-2 mx-2"},"Navbar Title",-1),P=e("div",{class:"flex-none hidden lg:block"},[e("ul",{class:"menu menu-horizontal"},[e("li",null,[e("a",null,"Navbar Item 1")]),e("li",null,[e("a",null,"Navbar Item 2")])])],-1),R=e("div",{class:"flex justify-center items-center flex-grow py-10"},"Content",-1),T=e("ul",{class:"menu p-4 w-80 min-h-full bg-base-200"},[e("li",null,[e("a",null,"Sidebar Item 1")]),e("li",null,[e("a",null,"Sidebar Item 2")])],-1),V=e("ul",{class:"menu p-4 w-80 min-h-full bg-base-200 text-base-content"},[e("li",null,[e("a",null,"Sidebar Item 1")]),e("li",null,[e("a",null,"Sidebar Item 2")])],-1),O=p({__name:"index",setup(j){return(A,G)=>{const c=f,a=g,s=x,o=v,r=I,i=m;return d(),u("div",null,[D,k,(d(!0),u(h,null,b(w(y),_=>(d(),S(c,C(N(_)),null,16))),256)),l(i,null,{title:t(()=>[n("Drawer ")]),default:t(()=>[l(r,{class:"h-56"},{default:t(()=>[l(a,{class:"absolute h-full"},{default:t(()=>[$]),_:1}),l(o,null,{default:t(()=>[l(s)]),_:1})]),_:1})]),_:1}),l(i,null,{title:t(()=>[n("Responsive ")]),default:t(()=>[l(r,{class:"h-56 lg:drawer-open"},{default:t(()=>[l(a,{class:"absolute h-full"},{default:t(()=>[B]),_:1}),l(o,null,{default:t(()=>[l(s,{class:"lg:hidden"})]),_:1})]),_:1})]),_:1}),l(i,null,{title:t(()=>[n("Navbar menu for desktop + sidebar drawer for mobile ")]),description:t(()=>[n(" Change screen size to show/hide menu ")]),default:t(()=>[l(r,{class:"h-56"},{default:t(()=>[l(o,null,{default:t(()=>[e("div",z,[e("div",E,[l(s,{ghost:""})]),F,P]),R]),_:1}),l(a,{class:"absolute h-full"},{default:t(()=>[T]),_:1})]),_:1})]),_:1}),l(i,null,{title:t(()=>[n("Drawer that opens from right side of page ")]),default:t(()=>[l(r,{class:"h-56","align-end":""},{default:t(()=>[l(a,{class:"absolute h-full ml-[-54rem] w-[stretch]"},{default:t(()=>[V]),_:1}),l(o,null,{default:t(()=>[l(s)]),_:1})]),_:1})]),_:1})])}}});export{O as default};
