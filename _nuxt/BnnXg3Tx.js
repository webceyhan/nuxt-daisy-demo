import{_ as x,a as B}from"./HloofZ6N.js";import{f as g,o as n,c as d,n as z,v as S,a as p,F as f,r as b,g as u,b as o,w as t,d as a,x as $,t as C,i as _,m as I}from"./COeYzf0i.js";import{_ as F}from"./DMVfA8OQ.js";import{a as c,c as y}from"./D5LaGP6z.js";const N=["value","disabled"],w=g({__name:"file-input",props:{modelValue:{},size:{},color:{},ghost:{type:Boolean},bordered:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue"],setup(V){return(l,m)=>(n(),d("input",{type:"file",class:z(["file-input w-full",{[`file-input-${l.size}`]:l.size,[`file-input-${l.color}`]:l.color,"file-input-ghost":l.ghost,"file-input-bordered":l.bordered}]),value:l.modelValue,disabled:l.disabled,onInput:m[0]||(m[0]=e=>l.$emit("update:modelValue",e.target.value))},null,42,N))}}),D=[{name:"file-input",props:[{name:"modelValue",type:"string",description:"Value of the input"},{name:"size",type:"string",default:"md",values:c},{name:"color",type:"string",values:y},{name:"ghost",type:"boolean",description:"No background"},{name:"bordered",type:"boolean",description:"Whether the checkbox has a border or not"},{name:"disabled",type:"boolean",description:"Whether the checkbox is disabled or not"}]}],E={class:"text-xs text-base-content/50"},O={class:"flex flex-col items-center gap-2"},L=g({__name:"index",setup(V){const l=S("");return(m,e)=>{const v=B,s=w,r=x,k=F;return n(),d("div",null,[e[8]||(e[8]=p("h1",{class:"text-4xl font-bold mb-8"},"File Input",-1)),e[9]||(e[9]=p("p",null,"File Input is a an input field for uploading files.",-1)),(n(!0),d(f,null,b(u(D),i=>(n(),_(v,I({ref_for:!0},i),null,16))),256)),o(r,null,{title:t(()=>e[1]||(e[1]=[a("File input")])),default:t(()=>[o(s,{modelValue:u(l),"onUpdate:modelValue":e[0]||(e[0]=i=>$(l)?l.value=i:null)},null,8,["modelValue"]),p("p",E,C(u(l)),1)]),_:1}),o(r,null,{title:t(()=>e[2]||(e[2]=[a("With form-control")])),default:t(()=>[o(k,{label:"Pick a file",alt:"alt label"},{default:t(()=>[o(s,{bordered:""})]),_:1})]),_:1}),o(r,null,{title:t(()=>e[3]||(e[3]=[a(" Sizes")])),default:t(()=>[p("div",O,[(n(!0),d(f,null,b(u(c),i=>(n(),_(s,{size:i,bordered:""},null,8,["size"]))),256))])]),_:1}),o(r,null,{title:t(()=>e[4]||(e[4]=[a(" Colors ")])),default:t(()=>[(n(!0),d(f,null,b(u(y),i=>(n(),_(s,{color:i,class:"my-2",bordered:""},null,8,["color"]))),256))]),_:1}),o(r,null,{title:t(()=>e[5]||(e[5]=[a("Ghost (no background)")])),default:t(()=>[o(s,{ghost:""})]),_:1}),o(r,null,{title:t(()=>e[6]||(e[6]=[a("Bordered")])),default:t(()=>[o(s,{bordered:""})]),_:1}),o(r,null,{title:t(()=>e[7]||(e[7]=[a("Disabled")])),default:t(()=>[o(s,{disabled:""})]),_:1})])}}});export{L as default};
