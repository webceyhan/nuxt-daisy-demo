import{g as l,o,c as s,l as a,v as t,a as c,m as r}from"./entry.34dfefe9.js";const d={key:0},i={key:0,class:"card-title"},n={key:1,class:"card-actions justify-end"},m={key:1},u=l({__name:"card",props:{bodyClass:{},compact:{type:Boolean},coverOverlay:{type:Boolean},coverAside:{type:Boolean}},setup(p){return(e,v)=>(o(),s("div",{class:r(["card",{"image-full":e.coverOverlay,"card-compact":e.compact,"card-side":e.coverAside}])},[e.$slots.cover?(o(),s("figure",d,[a(e.$slots,"cover")])):t("",!0),c("div",{class:r(["card-body",e.bodyClass])},[e.$slots.title?(o(),s("h2",i,[a(e.$slots,"title")])):t("",!0),a(e.$slots,"default"),e.$slots.actions?(o(),s("div",n,[a(e.$slots,"actions")])):t("",!0)],2),e.$slots["cover-bottom"]?(o(),s("figure",m,[a(e.$slots,"cover-bottom")])):t("",!0)],2))}});export{u as _};
