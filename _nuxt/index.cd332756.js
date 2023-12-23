import{_ as x,a as v}from"./component-preview.b9c28f46.js";import{g as u,o as r,c as i,m as d,v as b,a as e,l as g,A as y,F as w,r as C,h as q,b as a,w as t,d as s,i as k,j as H,n as P,k as I}from"./entry.34dfefe9.js";import{_ as m}from"./spiderman.f5ffdaa2.js";const S=u({__name:"hero",props:{overlayUrl:{},overlayClass:{},contentClass:{}},setup(p){return(l,_)=>(r(),i("div",{class:"hero",style:y({backgroundImage:l.overlayUrl?`url(${l.overlayUrl})`:void 0})},[l.overlayUrl?(r(),i("div",{key:0,class:d(["hero-overlay",l.overlayClass])},null,2)):b("",!0),e("div",{class:d(["hero-content",l.contentClass])},[g(l.$slots,"default")],2)],4))}}),N=[{name:"hero",props:[{name:"overlay-url",type:"string",description:"URL of the overlay image"},{name:"overlay-class",type:"string",description:"Class of the overlay image"},{name:"content-class",type:"string",description:"Class of the content"}],slots:[{name:"default",description:"Content of hero"}]}],B=e("h1",{class:"text-4xl font-bold mb-8"},"Hero",-1),Q=e("p",null," Hero is a component for displaying a large box or image with a title and description. ",-1),U={class:"max-w-md"},$=e("h1",{class:"text-5xl font-bold"},"Hello there",-1),G=e("p",{class:"py-6"}," Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. ",-1),L=e("img",{src:m,class:"max-w-sm rounded-lg shadow-2xl"},null,-1),V=e("h1",{class:"text-5xl font-bold"},"Box Office News!",-1),z=e("p",{class:"py-6"}," Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. ",-1),E=e("img",{src:m,class:"max-w-sm rounded-lg shadow-2xl"},null,-1),F=e("h1",{class:"text-5xl font-bold"},"Box Office News!",-1),O=e("p",{class:"py-6"}," Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. ",-1),R=e("div",{class:"text-center lg:text-left"},[e("h1",{class:"text-5xl font-bold"},"Login now!"),e("p",{class:"py-6"}," Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. ")],-1),j=e("div",{class:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"},[e("form",{class:"card-body"},[e("div",{class:"form-control"},[e("label",{class:"label"},[e("span",{class:"label-text"},"Email")]),e("input",{type:"email",placeholder:"email",class:"input input-bordered",required:""})]),e("div",{class:"form-control"},[e("label",{class:"label"},[e("span",{class:"label-text"},"Password")]),e("input",{type:"password",placeholder:"password",class:"input input-bordered",required:""}),e("label",{class:"label"},[e("a",{href:"#",class:"label-text-alt link link-hover"},"Forgot password?")])]),e("div",{class:"form-control mt-6"},[e("button",{class:"btn btn-primary"},"Login")])])],-1),T=e("div",{class:"max-w-md"},[e("h1",{class:"mb-5 text-5xl font-bold"},"Hello there"),e("p",{class:"mb-5"}," Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. "),e("button",{class:"btn btn-primary"},"Get Started")],-1),K=u({__name:"index",setup(p){return(l,_)=>{const f=v,c=k,o=S,n=x;return r(),i("div",null,[B,Q,(r(!0),i(w,null,C(q(N),h=>(r(),H(f,P(I(h)),null,16))),256)),a(n,null,{title:t(()=>[s("Centered hero")]),default:t(()=>[a(o,{class:"min-h-[30rem] rounded bg-base-200 text-center"},{default:t(()=>[e("div",U,[$,G,a(c,{color:"primary"},{default:t(()=>[s("Get Started")]),_:1})])]),_:1})]),_:1}),a(n,null,{title:t(()=>[s("Hero with figure")]),default:t(()=>[a(o,{class:"min-h-[30rem] rounded bg-base-200","content-class":"flex-col lg:flex-row"},{default:t(()=>[L,e("div",null,[V,z,a(c,{color:"primary"},{default:t(()=>[s("Get Started")]),_:1})])]),_:1})]),_:1}),a(n,null,{title:t(()=>[s("Hero with figure but reverse order")]),default:t(()=>[a(o,{class:"min-h-[30rem] rounded bg-base-200","content-class":"flex-col lg:flex-row-reverse"},{default:t(()=>[E,e("div",null,[F,O,a(c,{color:"primary"},{default:t(()=>[s("Get Started")]),_:1})])]),_:1})]),_:1}),a(n,null,{title:t(()=>[s("HHero with form")]),default:t(()=>[a(o,{class:"min-h-[30rem] bg-base-200","content-class":"flex-col lg:flex-row-reverse"},{default:t(()=>[R,j]),_:1})]),_:1}),a(n,null,{title:t(()=>[s("Hero with overlay image")]),default:t(()=>[a(o,{class:"min-h-[30rem] rounded","overlay-url":"/img/caro-wide1.jpeg","overlay-class":"bg-opacity-60","content-class":"text-center text-neutral-content"},{default:t(()=>[T]),_:1})]),_:1})])}}});export{K as default};
