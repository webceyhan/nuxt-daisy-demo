import{_ as b,a as B}from"./HloofZ6N.js";import{f as c,o as a,c as r,j as S,n as C,s as v,a as l,F as u,r as d,g as _,b as n,w as e,d as m,i as h,m as x,t as D}from"./COeYzf0i.js";import{M as k}from"./D5LaGP6z.js";const H=c({__name:"mask",props:{shape:{default:"squircle"},firstHalf:{type:Boolean},lastHalf:{type:Boolean}},setup(g){return(s,t)=>(a(),r("div",{class:C(["mask",{[`mask-${s.shape}`]:s.shape,"mask-half-1":s.firstHalf,"mask-half-2":s.lastHalf}])},[S(s.$slots,"default")],2))}}),f=v("/img/heart.jpg"),M=[{name:"mask",props:[{name:"shape",type:"string",default:"squircle",values:k},{name:"first-half",type:"boolean",description:"Display only the first half of the mask"},{name:"last-half",type:"boolean",description:"Display only the last half of the mask"}],slots:[{name:"default",description:"Content of the mask"}]}],F=c({__name:"index",setup(g){return(s,t)=>{const y=B,i=H,p=b;return a(),r("div",null,[t[5]||(t[5]=l("h1",{class:"text-4xl font-bold mb-8"},"Mask",-1)),t[6]||(t[6]=l("p",null,"Mask crops the content of the element to common shapes.",-1)),(a(!0),r(u,null,d(_(M),o=>(a(),h(y,x({ref_for:!0},o),null,16))),256)),(a(!0),r(u,null,d(_(k),o=>(a(),h(p,null,{title:e(()=>[m(D(o),1)]),default:e(()=>[n(i,{shape:o},{default:e(()=>t[0]||(t[0]=[l("img",{src:f,alt:"heart"},null,-1)])),_:2},1032,["shape"])]),_:2},1024))),256)),n(p,null,{title:e(()=>t[1]||(t[1]=[m("First half")])),default:e(()=>[n(i,{shape:"circle","first-half":""},{default:e(()=>t[2]||(t[2]=[l("img",{src:f,alt:"heart"},null,-1)])),_:1})]),_:1}),n(p,null,{title:e(()=>t[3]||(t[3]=[m("Last half")])),default:e(()=>[n(i,{shape:"circle","last-half":""},{default:e(()=>t[4]||(t[4]=[l("img",{src:f,alt:"heart"},null,-1)])),_:1})]),_:1})])}}});export{F as default};
