import{_ as T,a as b}from"./component-preview.b9c28f46.js";import{g as h,o as s,j as f,w as t,l as S,m as w,L as P,c as i,F as _,r as d,h as u,b as e,d as l,a,i as $,n as B,k as N,t as m}from"./entry.34dfefe9.js";import{c as v,P as x}from"./index.7ecbdec5.js";const O=h({__name:"tooltip",props:{as:{default:"div"},text:{},open:{type:Boolean},color:{},position:{}},setup(y){return(o,g)=>(s(),f(P(o.as),{class:w(["tooltip",{[`tooltip-${o.color}`]:o.color,[`tooltip-${o.position}`]:o.position,"tooltip-open":o.open}]),"data-tip":o.text},{default:t(()=>[S(o.$slots,"default")]),_:3},8,["class","data-tip"]))}}),k=[{name:"tooltip",props:[{name:"as",type:"string",default:"div",description:"The element to render"},{name:"text",type:"string",description:"The text to show in the tooltip"},{name:"color",type:"string",values:v},{name:"position",type:"string",default:"top",values:x},{name:"open",type:"boolean",description:"Whether the tooltip should be open"}],slots:[{name:"default",description:"Content of the tooltip"}]}],F=a("h1",{class:"text-4xl font-bold mb-8"},"Tooltip",-1),I=a("p",null,"Tooltip can be used to show a message when hovering over an element.",-1),z={class:"my-6"},D={class:"m-6"},L=a("h3",{class:"text-2xl"},"Positions",-1),R={class:"capitalize"},V={class:"my-6"},E={class:"my-6"},q=h({__name:"index",setup(y){return(o,g)=>{const C=b,p=$,r=O,c=T;return s(),i("div",null,[F,I,(s(!0),i(_,null,d(u(k),n=>(s(),f(C,B(N(n)),null,16))),256)),e(c,null,{title:t(()=>[l("Tooltip")]),default:t(()=>[a("div",z,[e(r,{text:"hello"},{default:t(()=>[e(p,null,{default:t(()=>[l("Hover me")]),_:1})]),_:1})])]),_:1}),e(c,null,{title:t(()=>[l(" Colors ")]),default:t(()=>[(s(!0),i(_,null,d(u(v),n=>(s(),i("div",D,[e(r,{text:"hello",color:n,open:""},{default:t(()=>[e(p,{color:n},{default:t(()=>[l(m(n),1)]),_:2},1032,["color"])]),_:2},1032,["color"])]))),256))]),_:1}),L,(s(!0),i(_,null,d(u(x),n=>(s(),f(c,null,{title:t(()=>[a("span",R,m(n),1)]),default:t(()=>[a("div",V,[e(r,{text:"hello",position:n,open:""},{default:t(()=>[e(p,null,{default:t(()=>[l(m(n),1)]),_:2},1024)]),_:2},1032,["position"])])]),_:2},1024))),256)),e(c,null,{title:t(()=>[l("Force open")]),default:t(()=>[a("div",E,[e(r,{text:"hello",open:""},{default:t(()=>[e(p,null,{default:t(()=>[l("Force open")]),_:1})]),_:1})])]),_:1})])}}});export{q as default};
