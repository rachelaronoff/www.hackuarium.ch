"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[3406],{44298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(11527),r=t(11683);const i={},s="Using the RJ12 for luminosity, temperature and power supply",c={id:"beemos/bee-counter/rj12-hacking/README",title:"Using the RJ12 for luminosity, temperature and power supply",description:"The default connector as the following pin out",source:"@site/docs/02-beemos/bee-counter/rj12-hacking/README.md",sourceDirName:"02-beemos/bee-counter/rj12-hacking",slug:"/beemos/bee-counter/rj12-hacking/",permalink:"/docs/beemos/bee-counter/rj12-hacking/",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/www.hackuarium.ch/edit/main/docs/02-beemos/bee-counter/rj12-hacking/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BeeMos bee counter module (BCM)",permalink:"/docs/beemos/bee-counter/"},next:{title:"Smart Slaves",permalink:"/docs/beemos/slaves"}},a={},l=[];function u(e){const n={h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"using-the-rj12-for-luminosity-temperature-and-power-supply",children:"Using the RJ12 for luminosity, temperature and power supply"}),"\n",(0,o.jsx)(n.p,{children:"The default connector as the following pin out"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"+12V (not connected)"}),"\n",(0,o.jsx)(n.li,{children:"SCL (PWM)"}),"\n",(0,o.jsx)(n.li,{children:"SDA (I/O)"}),"\n",(0,o.jsx)(n.li,{children:"A6 (GND)"}),"\n",(0,o.jsx)(n.li,{children:"+5V"}),"\n",(0,o.jsx)(n.li,{children:"GND"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"There is the possiblity to have an internal pullup so that if we connect a LDR between the ground and A6 it should be possible to measure the light intensity."}),"\n",(0,o.jsx)(n.p,{children:"We can also connect a one-wire temperature probe DS18B20 connected to SCL. We will also have to connect a 4.7k\u2126 between +5V and SCL."}),"\n",(0,o.jsx)(n.p,{children:"Finally we can connect the power supply between the +5V and the GND. The power supply may be anything between 3.7 and 6V."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11683:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(50959);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);