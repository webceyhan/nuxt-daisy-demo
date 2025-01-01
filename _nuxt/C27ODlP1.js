import{_ as z,a as S}from"./TtN-NLOd.js";import{_ as x,o as l,c as o,l as m,v as f,a as u,g as w,m as C,F as p,r as h,h as B,b as s,w as t,d as e,s as N,i as V,j as D,n as T,k as P,t as i}from"./DI_P1wf-.js";import{_ as A}from"./Pn48RxQF.js";import{_ as F}from"./DztQRwA3.js";const R={},E={class:"stat"},I={key:0,class:"stat-figure"},K={key:1,class:"stat-title"},L={class:"stat-value"},W={key:2,class:"stat-title"},j={key:3,class:"stat-desc"},J={key:4,class:"stat-actions"};function M(n,r){return l(),o("div",E,[n.$slots.figure?(l(),o("div",I,[m(n.$slots,"figure")])):f("",!0),n.$slots.title?(l(),o("div",K,[m(n.$slots,"title")])):f("",!0),u("div",L,[m(n.$slots,"default")]),n.$slots.subtitle?(l(),o("div",W,[m(n.$slots,"subtitle")])):f("",!0),n.$slots.desc?(l(),o("div",j,[m(n.$slots,"desc")])):f("",!0),n.$slots.actions?(l(),o("div",J,[m(n.$slots,"actions")])):f("",!0)])}const O=x(R,[["render",M]]),U=w({__name:"stat-group",props:{vertical:{type:Boolean}},setup(n){return(r,y)=>(l(),o("div",{class:C(["stats",{"stats-vertical":r.vertical}])},[m(r.$slots,"default")],2))}}),q=[{name:"stat-group",props:[{name:"vertical",type:"boolean",description:"Display stats vertically"}],slots:[{name:"default",description:"Content of the stats"}]},{name:"stat",slots:[{name:"figure",description:"Figure of the stat"},{name:"title",description:"Title of the stat"},{name:"subtitle",description:"Subtitle of the stat"},{name:"desc",description:"Description of the stat"},{name:"actions",description:"Actions of the stat"}]}],G=u("h1",{class:"text-4xl font-bold mb-8"},"Stat",-1),H=u("p",null,"Stat is used to show numbers and data in a box.",-1),Q=u("span",{class:"text-primary"},"25.6K",-1),X=u("span",{class:"text-secondary"},"2.6M",-1),Y=u("div",{class:"w-16 rounded-full"},[u("img",{src:F})],-1),Z=u("span",{class:"text-secondary"}," 31 tasks remaining ",-1),nt=w({__name:"index",setup(n){const r=[{title:"Downlods",value:"310K",desc:"Jan 1st - Feb 1st",icon:"info-circle"},{title:"New Users",value:"4,200",desc:"↗︎ 400 (22%)",icon:"sliders2-vertical"},{title:"New Registers",value:"1,200",desc:"↘ 90 (14%)",icon:"archive"}];return(y,tt)=>{const b=S,c=O,d=U,_=z,g=N,k=A,v=V;return l(),o("div",null,[G,H,(l(!0),o(p,null,h(B(q),a=>(l(),D(b,T(P(a)),null,16))),256)),s(_,null,{title:t(()=>[e(" Stat ")]),default:t(()=>[s(d,{class:"shadow"},{default:t(()=>[s(c,null,{title:t(()=>[e("Total Page Views")]),desc:t(()=>[e("21% more than last month")]),default:t(()=>[e(" 89,400 ")]),_:1})]),_:1})]),_:1}),s(_,null,{title:t(()=>[e(" Stat with icons or image")]),default:t(()=>[s(d,{class:"shadow"},{default:t(()=>[s(c,null,{figure:t(()=>[s(g,{name:"heart",class:"text-primary",size:"lg"})]),title:t(()=>[e("Total Likes")]),desc:t(()=>[e("21% more than last month")]),default:t(()=>[Q]),_:1}),s(c,null,{figure:t(()=>[s(g,{name:"lightning-charge",class:"text-secondary",size:"lg"})]),title:t(()=>[e("Page Views")]),desc:t(()=>[e("21% more than last month")]),default:t(()=>[X]),_:1}),s(c,null,{figure:t(()=>[s(k,{online:""},{default:t(()=>[Y]),_:1})]),subtitle:t(()=>[e("Tasks done")]),desc:t(()=>[Z]),default:t(()=>[e(" 86% ")]),_:1})]),_:1})]),_:1}),s(_,null,{title:t(()=>[e(" Aligned to start")]),default:t(()=>[s(d,{class:"shadow"},{default:t(()=>[(l(),o(p,null,h(r,(a,$)=>s(c,null,{figure:t(()=>[s(g,{name:a.icon,class:"text-secondary",size:"lg"},null,8,["name"])]),title:t(()=>[e(i(a.title),1)]),desc:t(()=>[e(i(a.desc),1)]),default:t(()=>[e(" "+i(a.value)+" ",1)]),_:2},1024)),64))]),_:1})]),_:1}),s(_,null,{title:t(()=>[e(" Centered items")]),default:t(()=>[s(d,{class:"shadow"},{default:t(()=>[(l(),o(p,null,h(r,(a,$)=>s(c,{class:"place-items-center"},{figure:t(()=>[s(g,{name:a.icon,class:"text-secondary",size:"lg"},null,8,["name"])]),title:t(()=>[e(i(a.title),1)]),desc:t(()=>[e(i(a.desc),1)]),default:t(()=>[e(" "+i(a.value)+" ",1)]),_:2},1024)),64))]),_:1})]),_:1}),s(_,null,{title:t(()=>[e(" Vertical")]),default:t(()=>[s(d,{class:"shadow",vertical:""},{default:t(()=>[(l(),o(p,null,h(r,(a,$)=>s(c,null,{title:t(()=>[e(i(a.title),1)]),desc:t(()=>[e(i(a.desc),1)]),default:t(()=>[e(" "+i(a.value)+" ",1)]),_:2},1024)),64))]),_:1})]),_:1}),s(_,null,{title:t(()=>[e(" Responsive (vertical on small screen, horizontal on large screen)")]),default:t(()=>[s(d,{class:"shadow lg:stats-horizontal",vertical:""},{default:t(()=>[(l(),o(p,null,h(r,(a,$)=>s(c,null,{title:t(()=>[e(i(a.title),1)]),desc:t(()=>[e(i(a.desc),1)]),default:t(()=>[e(" "+i(a.value)+" ",1)]),_:2},1024)),64))]),_:1})]),_:1}),s(_,null,{title:t(()=>[e(" With custom colors and button")]),default:t(()=>[s(d,{class:"shadow bg-primary text-primary-content"},{default:t(()=>[s(c,null,{title:t(()=>[e(" Account Balance ")]),actions:t(()=>[s(v,{size:"sm",color:"success"},{default:t(()=>[e(" Add funds ")]),_:1})]),default:t(()=>[e(" $89,400 ")]),_:1}),s(c,null,{title:t(()=>[e(" Current Balance ")]),actions:t(()=>[s(v,{size:"sm",class:"me-1"},{default:t(()=>[e(" Withdraw ")]),_:1}),s(v,{size:"sm"},{default:t(()=>[e(" Deposit ")]),_:1})]),default:t(()=>[e(" $89,400 ")]),_:1})]),_:1})]),_:1})])}}});export{nt as default};
