"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[1509],{92018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=n(11527),r=n(11683);const s={},d="Frequently asked question (FAQ)",l={id:"phmeter/using/faq",title:"Frequently asked question (FAQ)",description:"\xa1UPDATE 18042022!",source:"@site/docs/05-phmeter/03-using/04-faq.md",sourceDirName:"05-phmeter/03-using",slug:"/phmeter/using/faq",permalink:"/docs/phmeter/using/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/05-phmeter/03-using/04-faq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"List of qualifiers",permalink:"/docs/phmeter/using/qualifiers"},next:{title:"Testing the pHMeter",permalink:"/docs/category/testing-the-phmeter"}},h={},o=[{value:"Is the pHMeter rebooting?",id:"is-the-phmeter-rebooting",level:2},{value:"What is the state of the pHMeter?",id:"what-is-the-state-of-the-phmeter",level:2},{value:"What is a cycle ?",id:"what-is-a-cycle-",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"frequently-asked-question-faq",children:"Frequently asked question (FAQ)"}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"\xa1UPDATE 18042022!"})}),"\n",(0,i.jsx)(t.h2,{id:"is-the-phmeter-rebooting",children:"Is the pHMeter rebooting?"}),"\n",(0,i.jsx)(t.p,{children:"In case the lower priority process can not be reached during 8s, the bioreactor will restart automatically. This lower priority process is the one that takes care of blinking the led."}),"\n",(0,i.jsxs)(t.p,{children:["Using the command ",(0,i.jsx)(t.code,{children:"p"})," you will get the uptime in milliseconds."]}),"\n",(0,i.jsx)(t.p,{children:"In the case of reboot there is also an entry in the log."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-the-state-of-the-phmeter",children:"What is the state of the pHMeter?"}),"\n",(0,i.jsxs)(t.p,{children:["The command ",(0,i.jsx)(t.code,{children:"t"})," will give you a good overview about the current state of the bioreactor"]}),"\n",(0,i.jsx)(t.p,{children:"Status: 519 - What is the current status"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"0: 1 - agitation control"}),"\n",(0,i.jsx)(t.li,{children:"1: 1 - food control"}),"\n",(0,i.jsx)(t.li,{children:"2: 1 - heating"}),"\n",(0,i.jsx)(t.li,{children:"7: 0 - sedimentation"}),"\n",(0,i.jsx)(t.li,{children:"8: 0 - filling pump"}),"\n",(0,i.jsx)(t.li,{children:"9: 1 - emptying pump"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Enabled: 7 - What is currently enabled"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"0: 1 - agitation control"}),"\n",(0,i.jsx)(t.li,{children:"1: 1 - food control"}),"\n",(0,i.jsx)(t.li,{children:"2: 1 - heating"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Error: 0 - What are the current errors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"0: 0 - pcb probe failed (one wire not answering)"}),"\n",(0,i.jsx)(t.li,{children:"1: 0 - liquid probe failed (one wire not answering)"}),"\n",(0,i.jsx)(t.li,{children:"2: 0 - temperature of pcb is outside range"}),"\n",(0,i.jsx)(t.li,{children:"3: 0 - temperature of liquid is outside range"}),"\n",(0,i.jsx)(t.li,{children:"4: 0 - target temperature is outside range"}),"\n",(0,i.jsx)(t.li,{children:"5: 0 - weight is outside range"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-is-a-cycle-",children:"What is a cycle ?"}),"\n",(0,i.jsx)(t.p,{children:"The bioreactor has 4 different phases :"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Mode"}),(0,i.jsx)(t.th,{children:"Heating"}),(0,i.jsx)(t.th,{children:"Stepper"}),(0,i.jsx)(t.th,{children:"Till when it last"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Normal mode"}),(0,i.jsx)(t.td,{children:"On"}),(0,i.jsx)(t.td,{children:"On"}),(0,i.jsxs)(t.td,{children:["Last ",(0,i.jsx)(t.code,{children:"PARAM_FILLED_TIME"})," minutes"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sedimentation mode"}),(0,i.jsx)(t.td,{children:"Off"}),(0,i.jsx)(t.td,{children:"Off"}),(0,i.jsxs)(t.td,{children:["Last ",(0,i.jsx)(t.code,{children:"PARAM_SEDIMENTATION_TIME"})," minutes"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pumping out"}),(0,i.jsx)(t.td,{children:"Off"}),(0,i.jsx)(t.td,{children:"Off"}),(0,i.jsxs)(t.td,{children:["Last till ",(0,i.jsx)(t.code,{children:"PARAM_WEIGHT_MIN"})," is reached"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pumping in"}),(0,i.jsx)(t.td,{children:"On"}),(0,i.jsx)(t.td,{children:"On"}),(0,i.jsxs)(t.td,{children:["Last till ",(0,i.jsx)(t.code,{children:"PARAM_WEIGHT_MAX"})," is reached"]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11683:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var i=n(50959);const r={},s=i.createContext(r);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);