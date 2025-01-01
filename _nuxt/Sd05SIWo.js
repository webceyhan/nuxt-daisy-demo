import{_ as $,a as N}from"./HloofZ6N.js";import{f as S,o as i,c as u,p as k,a as s,j as T,n as E,i as _,d as n,t as a,l as O,F as m,r as f,g as b,b as o,w as t,m as B}from"./COeYzf0i.js";import{_ as F}from"./D_p7VHpZ.js";const L=["name","checked"],x=["checked"],W={class:"collapse-title text-xl font-medium"},A={class:"collapse-content"},D=S({__name:"collapse",props:{title:{},icon:{},name:{},open:{type:Boolean},toggle:{type:Boolean},indicator:{}},setup(v){return(l,e)=>{const y=O;return i(),u("div",{tabindex:"0",class:E(["collapse bg-base-200",{"collapse-open":l.open&&!l.toggle&&!l.name,[`collapse-${l.indicator}`]:l.indicator}])},[l.name?(i(),u("input",{key:0,type:"radio",name:l.name,checked:l.open},null,8,L)):l.toggle?(i(),u("input",{key:1,type:"checkbox",checked:l.open},null,8,x)):k("",!0),s("div",W,[T(l.$slots,"title",{},()=>[l.icon?(i(),_(y,{key:0,name:l.icon,class:"mr-2"},null,8,["name"])):k("",!0),n(" "+a(l.title),1)])]),s("div",A,[T(l.$slots,"default")])],2)}}}),h=["arrow","plus"],V=[{name:"collapse",props:[{name:"title",type:"string",description:"Title of the collapse"},{name:"icon",type:"string",description:"Icon at start of collapse title"},{name:"name",type:"string",description:"Group name of accordion"},{name:"indicator",type:"string",values:h},{name:"open",type:"boolean",description:"Force open"},{name:"toggle",type:"boolean",description:"Toggle by clicking instead of focus"}],slots:[{name:"default",description:"Content for the collapse"},{name:"title",description:"Title for the collapse"}]}],G={class:"space-y-2"},g="Focus me to see content",w="Click me to toggle content",C="Click to open this one and close others",d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",J=S({__name:"index",setup(v){return(l,e)=>{const y=N,r=D,p=$,I=F;return i(),u("div",null,[e[16]||(e[16]=s("h1",{class:"text-4xl font-bold mb-8"},"Collapse",-1)),e[17]||(e[17]=s("p",null,"Collapse is used for showing and hiding content.",-1)),(i(!0),u(m,null,f(b(V),c=>(i(),_(y,B({ref_for:!0},c),null,16))),256)),o(p,null,{title:t(()=>e[0]||(e[0]=[n("With focus (default)")])),description:t(()=>e[1]||(e[1]=[n(" This collapse works with focus. When div loses focus, it gets closed ")])),default:t(()=>[o(r,{title:g},{default:t(()=>[s("p",null,a(d))]),_:1})]),_:1}),o(p,null,{title:t(()=>e[2]||(e[2]=[n("With toggle")])),description:t(()=>e[3]||(e[3]=[n(" This collapse works with checkbox instead of focus. It needs to get clicked again to get closed. ")])),default:t(()=>[o(r,{title:w,toggle:""},{default:t(()=>[s("p",null,a(d))]),_:1})]),_:1}),o(p,null,{title:t(()=>e[4]||(e[4]=[n("With icon")])),description:t(()=>e[5]||(e[5]=[n(" This collapse contains and icon at start of the title. ")])),default:t(()=>[o(r,{icon:"exclamation-circle",title:g},{default:t(()=>[s("p",null,a(d))]),_:1})]),_:1}),o(p,null,{title:t(()=>e[6]||(e[6]=[n("With indicators")])),default:t(()=>[(i(!0),u(m,null,f(b(h),c=>(i(),_(r,{title:`${g} with ${c} indicator`,indicator:c},{default:t(()=>[s("p",null,a(d))]),_:2},1032,["title","indicator"]))),256))]),_:1}),o(p,null,{title:t(()=>e[7]||(e[7]=[n("Force open")])),default:t(()=>[o(r,{title:"I always stay open",open:""},{default:t(()=>[s("p",null,a(d))]),_:1})]),_:1}),o(p,null,{title:t(()=>e[8]||(e[8]=[n("Accordion")])),description:t(()=>e[9]||(e[9]=[n(" Toggle content but only one item can stay open at a time by setting `name` prop. ")])),default:t(()=>[s("div",G,[(i(),u(m,null,f(2,c=>o(r,{name:"my-accordion-1",title:C},{default:t(()=>[s("p",null,a(d))]),_:1})),64))])]),_:1}),o(p,null,{title:t(()=>e[10]||(e[10]=[n("Accordion with Join wrapper")])),description:t(()=>e[11]||(e[11]=[n(" Join the items together and handle border radius automatically ")])),default:t(()=>[o(I,{class:"w-full",vertical:""},{default:t(()=>[(i(),u(m,null,f(2,c=>o(r,{title:C},{default:t(()=>[s("p",null,a(d))]),_:1})),64))]),_:1})]),_:1}),o(p,null,{title:t(()=>e[12]||(e[12]=[n("Custom colors with focus")])),description:t(()=>e[13]||(e[13]=[n(" Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused ")])),default:t(()=>[o(r,{class:"bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content",title:g},{default:t(()=>[s("p",null,a(d))]),_:1})]),_:1}),o(p,null,{title:t(()=>e[14]||(e[14]=[n("Custom colors with toggle")])),description:t(()=>e[15]||(e[15]=[n(" Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked ")])),default:t(()=>[o(r,{class:"bg-primary text-primary-content toggle-checked:bg-secondary toggle-checked:text-secondary-content",title:w,toggle:""},{default:t(()=>[s("p",null,a(d))]),_:1})]),_:1})])}}});export{J as default};
