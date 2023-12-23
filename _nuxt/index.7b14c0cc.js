import{_ as $,a as I}from"./component-preview.b9c28f46.js";import{g,o as n,c as r,l as c,v as u,a as t,m as f,F as h,r as _,h as p,b as s,w as e,d as a,j as b,n as S,k as N,t as v}from"./entry.34dfefe9.js";import{_ as m}from"./avatar.77716be7.js";import{c as w,A}from"./index.7ecbdec5.js";const O={key:0,class:"chat-image avatar"},B={key:1,class:"chat-header"},D={key:2,class:"chat-footer"},T=g({__name:"chat",props:{color:{},alignment:{default:"start"}},setup(y){return(o,C)=>(n(),r("div",{class:f(["chat",{[`chat-${o.alignment}`]:o.alignment}])},[o.$slots.avatar?(n(),r("div",O,[c(o.$slots,"avatar")])):u("",!0),o.$slots.header?(n(),r("div",B,[c(o.$slots,"header")])):u("",!0),t("div",{class:f(["chat-bubble",{[`chat-bubble-${o.color}`]:o.color}])},[c(o.$slots,"default")],2),o.$slots.footer?(n(),r("div",D,[c(o.$slots,"footer")])):u("",!0)],2))}}),W=[{name:"chat",props:[{name:"color",type:"string",values:w},{name:"alignment",type:"string",default:"start",values:A}],slots:[{name:"default",description:"Content of chat bubble"},{name:"avatar",description:"Avatar image of chat bubble"},{name:"header",description:"Header of chat bubble"},{name:"footer",description:"Footer of chat bubble"}]}],F=t("h1",{class:"text-4xl font-bold mb-8"},"Chat bubble",-1),P=t("p",null," Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc. ",-1),V={class:"w-full"},Y=t("br",null,null,-1),E={class:"w-full"},K=t("div",{class:"w-10 rounded-full"},[t("img",{src:m})],-1),L={class:"w-full"},R=t("div",{class:"w-10 rounded-full"},[t("img",{src:m})],-1),j=t("time",{class:"text-xs opacity-50"},"12:45",-1),z=t("span",{class:"opacity-50"},"Delivered",-1),H=t("div",{class:"w-10 rounded-full"},[t("img",{src:m})],-1),M=t("time",{class:"text-xs opacity-50"},"12:46",-1),G=t("span",{class:"opacity-50"},"Seen at 12:46",-1),J={class:"w-full"},q=t("time",{class:"text-xs opacity-50"},"2 hours ago",-1),Q=t("span",{class:"opacity-50"},"Seen",-1),U=t("time",{class:"text-xs opacity-50"},"2 hours ago",-1),X=t("span",{class:"opacity-50"},"Delivered",-1),Z={class:"w-full"},ne=g({__name:"index",setup(y){const o=[{text:"Hey!"},{text:"What kind of nonsense is this"},{text:"Put me on the Council and not make me a Master!??"},{text:"That's never been done in the history of the Jedi. It's insulting!"},{text:"Calm down, Anakin.",end:!0},{text:"You have been given a great honor.",end:!0},{text:"To be on the Council at your age.",end:!0},{text:"It's never happened before.",end:!0}];return(C,ee)=>{const x=I,l=T,d=$;return n(),r("div",null,[F,P,(n(!0),r(h,null,_(p(W),i=>(n(),b(x,S(N(i)),null,16))),256)),s(d,null,{title:e(()=>[a("chat-start and chat-end")]),default:e(()=>[t("div",V,[s(l,null,{default:e(()=>[a(" It's over Anakin, "),Y,a("I have the high ground. ")]),_:1}),s(l,{alignment:"end"},{default:e(()=>[a(" You underestimate my power! ")]),_:1})])]),_:1}),s(d,null,{title:e(()=>[a("Chat with image")]),default:e(()=>[t("div",E,[(n(!0),r(h,null,_(["It was said that you would, destroy the Sith, not join them.","It was you who would bring balance to the Force","Not leave it in Darkness"],i=>(n(),b(l,null,{avatar:e(()=>[K]),default:e(()=>[a(" "+v(i),1)]),_:2},1024))),256))])]),_:1}),s(d,null,{title:e(()=>[a("Chat with image, header and footer")]),default:e(()=>[t("div",L,[s(l,null,{avatar:e(()=>[R]),header:e(()=>[a(" Obi-Wan Kenobi "),j]),footer:e(()=>[z]),default:e(()=>[a(" You were the Chosen One! ")]),_:1}),s(l,{alignment:"end"},{avatar:e(()=>[H]),header:e(()=>[a(" Anakin "),M]),footer:e(()=>[G]),default:e(()=>[a(" I hate you! ")]),_:1})])]),_:1}),s(d,null,{title:e(()=>[a("Chat with header and footer")]),default:e(()=>[t("div",J,[s(l,null,{header:e(()=>[a(" Obi-Wan Kenobi "),q]),footer:e(()=>[Q]),default:e(()=>[a(" You were my brother, Anakin. ")]),_:1}),s(l,null,{header:e(()=>[a(" Obi-Wan Kenobi "),U]),footer:e(()=>[X]),default:e(()=>[a(" I loved you. ")]),_:1})])]),_:1}),s(d,null,{title:e(()=>[a("Chat Bubble with colors")]),default:e(()=>[t("div",Z,[(n(),r(h,null,_(o,(i,k)=>s(l,{color:p(w)[k],alignment:i!=null&&i.end?"end":"start"},{default:e(()=>[a(v(i.text),1)]),_:2},1032,["color","alignment"])),64))])]),_:1})])}}});export{ne as default};
