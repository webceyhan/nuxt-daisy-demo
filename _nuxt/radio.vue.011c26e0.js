import{g as t,I as c,o as u,c as i,J as p,h as m}from"./entry.34dfefe9.js";const k=t({__name:"radio",props:{name:{},value:{},modelValue:{},size:{},color:{},checked:{type:Boolean},disabled:{type:Boolean}},emits:["update:checked","update:modelValue"],setup(l,{emit:n}){const o=n,d=l,s=c(()=>d.modelValue===d.value);function r(e){const a=e.target;o("update:modelValue",a.value),o("update:checked",a.checked)}return(e,a)=>(u(),i("input",p({type:"radio",class:["radio",{[`radio-${e.size}`]:e.size,[`radio-${e.color}`]:e.color}]},{name:e.name,value:e.value,checked:m(s),disabled:e.disabled},{onChange:r}),null,16))}});export{k as _};
