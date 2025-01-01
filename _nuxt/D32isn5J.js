import{_ as I,a as N}from"./TtN-NLOd.js";import{g as w,o as s,c as p,v as h,a as l,l as y,m as E,j as f,d as o,t as i,s as O,F as u,r as m,h as k,b as t,w as e,n as B,k as F}from"./DI_P1wf-.js";import{_ as L}from"./CX99sT0a.js";const x=["name","checked"],W=["checked"],A={class:"collapse-title text-xl font-medium"},D={class:"collapse-content"},R=w({__name:"collapse",props:{title:{},icon:{},name:{},open:{type:Boolean},toggle:{type:Boolean},indicator:{}},setup(v){return(n,S)=>{const g=O;return s(),p("div",{tabindex:"0",class:E(["collapse bg-base-200",{"collapse-open":n.open&&!n.toggle&&!n.name,[`collapse-${n.indicator}`]:n.indicator}])},[n.name?(s(),p("input",{key:0,type:"radio",name:n.name,checked:n.open},null,8,x)):n.toggle?(s(),p("input",{key:1,type:"checkbox",checked:n.open},null,8,W)):h("",!0),l("div",A,[y(n.$slots,"title",{},()=>[n.icon?(s(),f(g,{key:0,name:n.icon,class:"mr-2"},null,8,["name"])):h("",!0),o(" "+i(n.title),1)])]),l("div",D,[y(n.$slots,"default")])],2)}}}),C=["arrow","plus"],V=[{name:"collapse",props:[{name:"title",type:"string",description:"Title of the collapse"},{name:"icon",type:"string",description:"Icon at start of collapse title"},{name:"name",type:"string",description:"Group name of accordion"},{name:"indicator",type:"string",values:C},{name:"open",type:"boolean",description:"Force open"},{name:"toggle",type:"boolean",description:"Toggle by clicking instead of focus"}],slots:[{name:"default",description:"Content for the collapse"},{name:"title",description:"Title for the collapse"}]}],G=l("h1",{class:"text-4xl font-bold mb-8"},"Collapse",-1),P=l("p",null,"Collapse is used for showing and hiding content.",-1),U={class:"space-y-2"},_="Focus me to see content",T="Click me to toggle content",b="Click to open this one and close others",r="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",M=w({__name:"index",setup(v){return(n,S)=>{const g=N,a=R,c=I,$=L;return s(),p("div",null,[G,P,(s(!0),p(u,null,m(k(V),d=>(s(),f(g,B(F(d)),null,16))),256)),t(c,null,{title:e(()=>[o("With focus (default)")]),description:e(()=>[o(" This collapse works with focus. When div loses focus, it gets closed ")]),default:e(()=>[t(a,{title:_},{default:e(()=>[l("p",null,i(r))]),_:1})]),_:1}),t(c,null,{title:e(()=>[o("With toggle")]),description:e(()=>[o(" This collapse works with checkbox instead of focus. It needs to get clicked again to get closed. ")]),default:e(()=>[t(a,{title:T,toggle:""},{default:e(()=>[l("p",null,i(r))]),_:1})]),_:1}),t(c,null,{title:e(()=>[o("With icon")]),description:e(()=>[o(" This collapse contains and icon at start of the title. ")]),default:e(()=>[t(a,{icon:"exclamation-circle",title:_},{default:e(()=>[l("p",null,i(r))]),_:1})]),_:1}),t(c,null,{title:e(()=>[o("With indicators")]),default:e(()=>[(s(!0),p(u,null,m(k(C),d=>(s(),f(a,{title:`${_} with ${d} indicator`,indicator:d},{default:e(()=>[l("p",null,i(r))]),_:2},1032,["title","indicator"]))),256))]),_:1}),t(c,null,{title:e(()=>[o("Force open")]),default:e(()=>[t(a,{title:"I always stay open",open:""},{default:e(()=>[l("p",null,i(r))]),_:1})]),_:1}),t(c,null,{title:e(()=>[o("Accordion")]),description:e(()=>[o(" Toggle content but only one item can stay open at a time by setting `name` prop. ")]),default:e(()=>[l("div",U,[(s(),p(u,null,m(2,d=>t(a,{name:"my-accordion-1",title:b},{default:e(()=>[l("p",null,i(r))]),_:1})),64))])]),_:1}),t(c,null,{title:e(()=>[o("Accordion with Join wrapper")]),description:e(()=>[o(" Join the items together and handle border radius automatically ")]),default:e(()=>[t($,{class:"w-full",vertical:""},{default:e(()=>[(s(),p(u,null,m(2,d=>t(a,{title:b},{default:e(()=>[l("p",null,i(r))]),_:1})),64))]),_:1})]),_:1}),t(c,null,{title:e(()=>[o("Custom colors with focus")]),description:e(()=>[o(" Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused ")]),default:e(()=>[t(a,{class:"bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content",title:_},{default:e(()=>[l("p",null,i(r))]),_:1})]),_:1}),t(c,null,{title:e(()=>[o("Custom colors with toggle")]),description:e(()=>[o(" Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked ")]),default:e(()=>[t(a,{class:"bg-primary text-primary-content toggle-checked:bg-secondary toggle-checked:text-secondary-content",title:T,toggle:""},{default:e(()=>[l("p",null,i(r))]),_:1})]),_:1})])}}});export{M as default};
