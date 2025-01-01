import{_ as B,a as C}from"./HloofZ6N.js";import{a as w,_ as W}from"./CP7G1O1m.js";import{f as h,o as l,c as s,_ as I,j as N,a as f,F as i,r as d,g as m,b as a,w as e,d as o,i as v,m as z,t as _}from"./COeYzf0i.js";import{a as x}from"./D5LaGP6z.js";const E=["aria-label"],L=h({__name:"tab-radio",props:{label:{}},setup(p){return(r,y)=>(l(),s("input",{role:"tab",type:"radio",class:"tab","aria-label":r.label},null,8,E))}}),V={},D={role:"tabpanel",class:"tab-content p-10"};function F(p,r){return l(),s("div",D,[N(p.$slots,"default")])}const P=I(V,[["render",F]]),R=[{name:"tab-nav",props:[{name:"size",type:"Size",default:"md",values:x},{name:"boxed",type:"boolean",description:"Whether the tabs should be boxed"},{name:"bordered",type:"boolean",description:"Whether the tabs should be bordered"},{name:"lifted",type:"boolean",description:"Whether the tabs should be lifted"}],slots:[{name:"default",description:"Content of the tabs"}]},{name:"tab",props:[{name:"active",type:"boolean",description:"Whether the tab is active"},{name:"disabled",type:"boolean",description:"Whether the tab is disabled"}],slots:[{name:"default",description:"Content of the tab"},{name:"indicator",description:"Indicator of the tab"}]},{name:"tab-radio",props:[{name:"label",type:"string",description:"Label text"}]},{name:"tab-content",slots:[{name:"default",description:"Content of the tab"}]}],j={class:"flex flex-col items-center gap-3"},A=h({__name:"index",setup(p){const r=[{label:"Tab 1",active:!1},{label:"Tab 2",active:!0},{label:"Tab 3",active:!1}];return(y,n)=>{const S=C,c=W,u=w,b=B,T=L,$=P;return l(),s("div",null,[n[6]||(n[6]=f("h1",{class:"text-4xl font-bold mb-8"},"Tabs",-1)),n[7]||(n[7]=f("p",null,"Tabs can be used to show a list of links in a tabbed format.",-1)),(l(!0),s(i,null,d(m(R),t=>(l(),v(S,z({ref_for:!0},t),null,16))),256)),a(b,null,{title:e(()=>n[0]||(n[0]=[o("Tabs")])),default:e(()=>[a(u,null,{default:e(()=>[(l(),s(i,null,d(r,t=>a(c,{active:t.active},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["active"])),64))]),_:1})]),_:1}),a(b,null,{title:e(()=>n[1]||(n[1]=[o("Sizes")])),default:e(()=>[f("div",j,[(l(!0),s(i,null,d(m(x),t=>(l(),v(u,{size:t,lifted:""},{default:e(()=>[(l(),s(i,null,d(r,g=>a(c,{active:g.active},{default:e(()=>[o(_(t),1)]),_:2},1032,["active"])),64))]),_:2},1032,["size"]))),256))])]),_:1}),a(b,null,{title:e(()=>n[2]||(n[2]=[o("Bordered")])),default:e(()=>[a(u,{bordered:""},{default:e(()=>[(l(),s(i,null,d(r,t=>a(c,{active:t.active},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["active"])),64))]),_:1})]),_:1}),a(b,null,{title:e(()=>n[3]||(n[3]=[o("Lifted")])),default:e(()=>[a(u,{lifted:""},{default:e(()=>[(l(),s(i,null,d(r,t=>a(c,{active:t.active},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["active"])),64))]),_:1})]),_:1}),a(b,null,{title:e(()=>n[4]||(n[4]=[o("Boxed")])),default:e(()=>[a(u,{boxed:""},{default:e(()=>[(l(),s(i,null,d(r,t=>a(c,{active:t.active},{default:e(()=>[o(_(t.label),1)]),_:2},1032,["active"])),64))]),_:1})]),_:1}),a(b,null,{title:e(()=>n[5]||(n[5]=[o("Radio with content")])),default:e(()=>[a(u,{bordered:""},{default:e(()=>[(l(),s(i,null,d(r,t=>(l(),s(i,null,[a(T,{name:"my-radio-tabs",label:t.label,checked:t.active},null,8,["label","checked"]),a($,null,{default:e(()=>[o(_(t.label)+" content",1)]),_:2},1024)],64))),64))]),_:1})]),_:1})])}}});export{A as default};
