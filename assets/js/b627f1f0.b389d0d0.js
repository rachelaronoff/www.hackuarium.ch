"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[9900],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},428:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"/beemos"},s="Beemos",p={unversionedId:"beemos/README",id:"beemos/README",isDocsHomePage:!1,title:"Beemos",description:"Bee monitoring system",source:"@site/docs/15_beemos/README.md",sourceDirName:"15_beemos",slug:"/beemos",permalink:"/docs/beemos",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/15_beemos/README.md",tags:[],version:"current",frontMatter:{slug:"/beemos"},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/simple-spectro/applications/protein/bradford/20190505/README"},next:{title:"BeeMos bee counter module (BCM) documentation",permalink:"/docs/beemos/bee-counter/README"}},c=[],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"beemos"},"Beemos"),(0,o.kt)("p",null,"Bee monitoring system"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"logoBeeMoS.png",src:n(7184).Z})),(0,o.kt)("h1",{id:"goal-of-the-project"},"Goal of the project"),(0,o.kt)("p",null,"This on-going project is hosted at the ",(0,o.kt)("a",{parentName:"p",href:"http://www.hackuarium.ch/en/"},"Hackuarium")," association, a DIY biology hacking-space and open laboratory located in Ecublens (Switzerland)."),(0,o.kt)("p",null,"The goal of the Bee Monitoring System (",(0,o.kt)("strong",{parentName:"p"},"BeeMoS"),") project is to provide ",(0,o.kt)("strong",{parentName:"p"},"an open-source hardware and software solution in order to monitor honeybee hives from a distance at a reasonable cost"),". Such a system would bring consistent and valuable non-biased data to assist beekeepers in their beekeeping tasks ",(0,o.kt)("em",{parentName:"p"},"e.g")," to follow how much honey is collected and when to add an extra honey supper or to harvest honey; and to receive personalized alarms ",(0,o.kt)("em",{parentName:"p"},"e.g.")," in case of swarming and theft. From the bees' perspective, this could allow to minimize the number of bee hive inspections and thereby cause less disturbance.",(0,o.kt)("br",{parentName:"p"}),"\n","In a second phase, data gathering from multiple hives and apiaries could be used to detect abnormalities at a large scale and to build useful models to detect or prevent queen loss, swarming or conditions favorable for bee diseases. "),(0,o.kt)("p",null,"Why should we care about bees? Western honeybees (",(0,o.kt)("em",{parentName:"p"},"Apis mellifera"),") are important insect pollinators that live in colonies of thousands individuals with a single queen. As bee foragers travel from plant to plant to collect nectar and pollen, plant cross\u2010pollination occurs, allowing plant reproduction and in particular fruit production. Honeybees are estimated to contribute to US$215 billion worth of crops annually worldwide (",(0,o.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s10393-013-0870-2#ref-CR28"},"Smith ",(0,o.kt)("em",{parentName:"a"},"et al.")," 2014"),") and to pollinate about one third of the Western world's crop species (",(0,o.kt)("a",{parentName:"p",href:"https://books.google.ch/books?hl=fr&lr=&id=nq7q9OrIj_wC&oi=fnd&pg=PA4&dq=McGregor+honeybees&ots=IJFoPpsrZ6&sig=bRym4QdT3gUyErIu9l41YSiKGpI&redir_esc=y#v=onepage&q=McGregor%20honeybees&f=false"},"McGregor, 1976"),").\nDespite their importance, honey bees have been facing important declines due to multiple causes including viral and bacterial pests, exposure to pesticides and poor diet due to large-scale monocultures. The automatized large scale monitoring of bees could allow to detect unexpected patterns and to provide data-based evidence on the long run rather than biased interpretations based on a few manual inspections."),(0,o.kt)("h1",{id:"electronics"},"Electronics"),(0,o.kt)("p",null,"Board: ",(0,o.kt)("a",{parentName:"p",href:"https://www.wemos.cc/en/latest/c3/c3_mini.html"},"ESP32-C3 Mini Lolin")),(0,o.kt)("p",null,"Current pin assignments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"GPIO PIN"),(0,o.kt)("th",{parentName:"tr",align:null},"PURPOSE"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Not assigned yet"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Not assigned yet"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"I2C SDA"),(0,o.kt)("td",{parentName:"tr",align:null},"I2C is used to control Si7021 temperature and humidity sensor as well as other devices (scale, light measurements...)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"I2C SCL"),(0,o.kt)("td",{parentName:"tr",align:null},"I2C can be set on any pair of GPIO pins, the code must explicitly specify those pins (with Wire.begin(SDA,SCL) ",(0,o.kt)("em",{parentName:"td"},"e.g.")," Wire.begin(3,4)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"Not assigned yet"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"1-Wire"),(0,o.kt)("td",{parentName:"tr",align:null},"The 1-Wire protocol allows to connect multiple ",(0,o.kt)("a",{parentName:"td",href:"https://datasheets.maximintegrated.com/en/ds/DS18B20.pdf"},"DS18B20")," temperature probes to the same pin.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"Builtin LED"),(0,o.kt)("td",{parentName:"tr",align:null},'This pin is used for the "Blink" task which is the lowest priority task blinking the LED. It allows to detect in case the board is in a frozen state or reboots frequently by observing the LED blink pattern (or absence of blinking).')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"Not assigned yet"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},"Pin not exposed, internally used for button switch"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"Not assigned yet"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},7184:function(e,t,n){t.Z=n.p+"assets/images/logoBeeMoS-a14d940837bb180f85f6e057a29df00d.png"}}]);