import{_ as C,a as $}from"./HloofZ6N.js";import{f as _,o as s,c as u,n as B,v as S,a as m,F as c,r as f,g as a,b as n,w as l,d as r,x as k,i as g,m as R}from"./COeYzf0i.js";import{_ as T}from"./DMVfA8OQ.js";import{a as h,c as v}from"./D5LaGP6z.js";const w=["checked","disabled"],I=_({__name:"toggle",props:{size:{},color:{},checked:{type:Boolean},disabled:{type:Boolean}},emits:["update:checked"],setup(x){return(t,p)=>(s(),u("input",{type:"checkbox",class:B(["toggle",{[`toggle-${t.size}`]:t.size,[`toggle-${t.color}`]:t.color}]),onChange:p[0]||(p[0]=e=>t.$emit("update:checked",e.target.checked)),checked:t.checked,disabled:t.disabled},null,42,w))}}),N=[{name:"toggle",props:[{name:"size",type:"string",default:"md",values:h},{name:"color",type:"string",values:v},{name:"checked",type:"boolean",description:"Whether the input is checked or not"},{name:"disabled",type:"boolean",description:"Whether the input is disabled or not"}]}],D={class:"flex flex-col items-center gap-2"},E={class:"flex flex-col items-center gap-2"},F=_({__name:"index",setup(x){const t=S(!0);return(p,e)=>{const y=$,d=I,i=C,b=T;return s(),u("div",null,[e[10]||(e[10]=m("h1",{class:"text-4xl font-bold mb-8"},"Toggle",-1)),e[11]||(e[11]=m("p",null,"Toggle is a checkbox that is styled to look like a switch button.",-1)),(s(!0),u(c,null,f(a(N),o=>(s(),g(y,R({ref_for:!0},o),null,16))),256)),n(i,null,{title:l(()=>e[3]||(e[3]=[r("Toggle")])),default:l(()=>[n(d,{checked:a(t),"onUpdate:checked":e[0]||(e[0]=o=>k(t)?t.value=o:null)},null,8,["checked"])]),_:1}),n(i,null,{title:l(()=>e[4]||(e[4]=[r("With form-control")])),default:l(()=>[n(b,{label:"Remember me",inline:""},{default:l(()=>[n(d,{checked:a(t),"onUpdate:checked":e[1]||(e[1]=o=>k(t)?t.value=o:null)},null,8,["checked"])]),_:1})]),_:1}),n(i,null,{title:l(()=>e[5]||(e[5]=[r(" Sizes")])),default:l(()=>[m("div",D,[(s(!0),u(c,null,f(a(h),o=>(s(),g(d,{size:o,checked:""},null,8,["size"]))),256))])]),_:1}),n(i,null,{title:l(()=>e[6]||(e[6]=[r("Colors ")])),default:l(()=>[m("div",E,[(s(!0),u(c,null,f(a(v),o=>(s(),g(b,{label:"Remember me",inline:""},{default:l(()=>[n(d,{color:o,checked:a(t),"onUpdate:checked":e[2]||(e[2]=z=>k(t)?t.value=z:null)},null,8,["color","checked"])]),_:2},1024))),256))])]),_:1}),n(i,null,{title:l(()=>e[7]||(e[7]=[r("Disabled")])),default:l(()=>[n(d,{disabled:""})]),_:1}),n(i,null,{title:l(()=>e[8]||(e[8]=[r("Disabled and checked")])),default:l(()=>[n(d,{disabled:"",checked:""})]),_:1}),n(i,null,{title:l(()=>e[9]||(e[9]=[r("Indeterminate")])),default:l(()=>[n(d,{indeterminate:""})]),_:1})])}}});export{F as default};
