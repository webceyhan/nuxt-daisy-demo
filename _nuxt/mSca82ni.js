import{f as p,o,c as l,a as t,j as s,F as u,t as n,p as a,i as m,d as i,l as c}from"./COeYzf0i.js";const d=["open"],f=["href"],h={key:1,class:"menu-title"},$=p({__name:"menu-sub",props:{title:{},href:{},icon:{},open:{type:Boolean},collapsible:{type:Boolean}},setup(y){return(e,k)=>{const r=c;return o(),l("li",null,[e.collapsible?(o(),l("details",{key:0,open:e.open},[t("summary",null,[s(e.$slots,"icon",{},()=>[e.icon?(o(),m(r,{key:0,name:e.icon},null,8,["name"])):a("",!0)]),s(e.$slots,"title",{},()=>[i(n(e.title),1)])]),t("ul",null,[s(e.$slots,"default")])],8,d)):(o(),l(u,{key:1},[e.href?(o(),l("a",{key:0,href:e.href},n(e.title),9,f)):e.title?(o(),l("h2",h,[s(e.$slots,"title",{},()=>[i(n(e.title),1)])])):a("",!0),t("ul",null,[s(e.$slots,"default")])],64))])}}});export{$ as _};
