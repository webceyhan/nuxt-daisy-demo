import{_ as W,a as z}from"./HloofZ6N.js";import{f as y,o as r,c as p,j as L,n as N,v as _,a as o,F as g,r as v,g as m,b as n,w as t,d as i,x as k,t as f,i as V,m as R}from"./COeYzf0i.js";import{_ as D}from"./DMVfA8OQ.js";import{a as B,c as C}from"./D5LaGP6z.js";const T=["value","disabled"],E=y({__name:"select",props:{modelValue:{},size:{},color:{},ghost:{type:Boolean},bordered:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue"],setup(P){return(s,a)=>(r(),p("select",{class:N(["select w-full",{[`select-${s.size}`]:s.size,[`select-${s.color}`]:s.color,"select-ghost":s.ghost,"select-bordered":s.bordered}]),onChange:a[0]||(a[0]=b=>s.$emit("update:modelValue",b.target.value)),value:s.modelValue,disabled:s.disabled},[L(s.$slots,"default")],42,T))}}),F=[{name:"select",props:[{name:"modelValue",type:"string",description:"Value of the input"},{name:"size",type:"string",default:"md",values:B},{name:"color",type:"string",values:C},{name:"ghost",type:"boolean",description:"No background"},{name:"bordered",type:"boolean",description:"Whether the input has a border or not"},{name:"disabled",type:"boolean",description:"Whether the input is disabled or not"}],slots:[{name:"default",description:"Content for options"}]}],G=["value"],H={class:"flex flex-col w-full items-center gap-2"},I={disabled:"",selected:""},O=["value"],x={disabled:"",selected:""},Y=y({__name:"index",setup(P){const s=["Homer","Marge","Bart","Lisa","Maggie"],a=_(void 0),b=_(void 0);return(A,e)=>{const $=z,d=E,u=W,w=D;return r(),p("div",null,[e[18]||(e[18]=o("h1",{class:"text-4xl font-bold mb-8"},"Select",-1)),e[19]||(e[19]=o("p",null,"Select is used to pick a value from a list of options.",-1)),(r(!0),p(g,null,v(m(F),l=>(r(),V($,R({ref_for:!0},l),null,16))),256)),n(u,null,{title:t(()=>e[2]||(e[2]=[i("Select")])),default:t(()=>[n(d,{modelValue:m(a),"onUpdate:modelValue":e[0]||(e[0]=l=>k(a)?a.value=l:null)},{default:t(()=>[e[3]||(e[3]=o("option",{disabled:"",selected:""},"Pick your favorite Simpson",-1)),(r(),p(g,null,v(s,l=>o("option",{value:l},f(l),9,G)),64))]),_:1},8,["modelValue"]),i(" "+f(m(a)),1)]),_:1}),n(u,null,{title:t(()=>e[4]||(e[4]=[i("With form-control")])),default:t(()=>[n(w,{class:"w-full",label:"Pick the best fantasy franchise",alt:"Alt label"},{default:t(()=>[n(d,{bordered:""},{default:t(()=>e[5]||(e[5]=[o("option",{disabled:"",selected:""},"Pick one",-1),o("option",null,"Star Wars",-1),o("option",null,"Harry Potter",-1),o("option",null,"Lord of the Rings",-1),o("option",null,"Planet of the Apes",-1),o("option",null,"Star Trek",-1)])),_:1})]),_:1})]),_:1}),n(u,null,{title:t(()=>e[6]||(e[6]=[i(" Sizes")])),default:t(()=>[o("div",H,[(r(!0),p(g,null,v(m(B),l=>(r(),V(d,{size:l,bordered:"",modelValue:m(b),"onUpdate:modelValue":e[1]||(e[1]=S=>k(b)?b.value=S:null)},{default:t(()=>[o("option",I,f(l),1),(r(),p(g,null,v(["apple","orange","tomato"],S=>o("option",{value:S},f(l)+" "+f(S),9,O)),64))]),_:2},1032,["size","modelValue"]))),256))])]),_:1}),n(u,null,{title:t(()=>e[7]||(e[7]=[i(" Colors ")])),default:t(()=>[(r(!0),p(g,null,v(m(C),l=>(r(),V(d,{color:l,class:"my-2"},{default:t(()=>[o("option",x,f(l),1),e[8]||(e[8]=o("option",null,"Game of Thrones",-1)),e[9]||(e[9]=o("option",null,"Lost",-1)),e[10]||(e[10]=o("option",null,"Breaking Bad",-1)),e[11]||(e[11]=o("option",null,"Walking Dead",-1))]),_:2},1032,["color"]))),256))]),_:1}),n(u,null,{title:t(()=>e[12]||(e[12]=[i("Ghost (no background)")])),default:t(()=>[n(d,{ghost:""},{default:t(()=>e[13]||(e[13]=[o("option",{disabled:"",selected:""},"Pick the best JS framework",-1),o("option",null,"Svelte",-1),o("option",null,"Vue",-1),o("option",null,"React",-1)])),_:1})]),_:1}),n(u,null,{title:t(()=>e[14]||(e[14]=[i("Bordered")])),default:t(()=>[n(d,{bordered:""},{default:t(()=>e[15]||(e[15]=[o("option",{disabled:"",selected:""},"Who shot first?",-1),o("option",null,"Han Solo",-1),o("option",null,"Greedo",-1)])),_:1})]),_:1}),n(u,null,{title:t(()=>e[16]||(e[16]=[i("Disabled")])),default:t(()=>[n(d,{disabled:""},{default:t(()=>e[17]||(e[17]=[o("option",null,"You can't touch this",-1)])),_:1})]),_:1})])}}});export{Y as default};
