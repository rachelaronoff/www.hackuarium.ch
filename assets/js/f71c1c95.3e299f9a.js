"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[3641],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,g=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5417:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),l=["components"],r={},s="Assembling the bioreactor",c={unversionedId:"bioreactor/making/assembling/index",id:"bioreactor/making/assembling/index",isDocsHomePage:!1,title:"Assembling the bioreactor",description:"Introduction",source:"@site/docs/20_bioreactor/20_making/assembling/index.md",sourceDirName:"20_bioreactor/20_making/assembling",slug:"/bioreactor/making/assembling/index",permalink:"/docs/bioreactor/making/assembling/index",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/20_bioreactor/20_making/assembling/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parameters",permalink:"/docs/bioreactor/platformio/parameters"},next:{title:"index",permalink:"/docs/bioreactor/making/bom/index"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Material required for reactor assembly",id:"material-required-for-reactor-assembly",children:[{value:"General",id:"general",children:[]}]},{value:"Assembling the casing",id:"assembling-the-casing",children:[{value:"Heating plate base",id:"heating-plate-base",children:[]},{value:"Top",id:"top",children:[]}]},{value:"Base case",id:"base-case",children:[{value:"Right",id:"right",children:[]},{value:"Left",id:"left",children:[]},{value:"Front",id:"front",children:[]},{value:"Bottom",id:"bottom",children:[]}]},{value:"Inserting the peristaltic pumps",id:"inserting-the-peristaltic-pumps",children:[]},{value:"Adding the stepper",id:"adding-the-stepper",children:[]},{value:"Adding the loading cells",id:"adding-the-loading-cells",children:[]},{value:"Preparing the heating cell",id:"preparing-the-heating-cell",children:[]}],m={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assembling-the-bioreactor"},"Assembling the bioreactor"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This manual describes how to assemble a functionnal bioreactor once the PCB plate has been ready and the pieces for the casing have been laser cutted."),(0,o.kt)("p",null,"The bioreactor is composed of three distinct layers, as can be seen on the following image:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The base:")," It is the piece on which the bioreactor stands. It contains the main PCB, as well as the peristaltic pumps and the LCD screen."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The heating plate:")," Placed on top of the base, it heats the recipient in which are placed our materials of interest."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The recipient:")," It contains the solution in which will be placed our cultures and materials of interest.")),(0,o.kt)("h2",{id:"material-required-for-reactor-assembly"},"Material required for reactor assembly"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[To be completed]")),(0,o.kt)("p",null,"For heating plate case:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Part ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," of the cases"),(0,o.kt)("li",{parentName:"ol"},"Part ",(0,o.kt)("inlineCode",{parentName:"li"},"B")," of the cases"),(0,o.kt)("li",{parentName:"ol"},"Dichloromethane"),(0,o.kt)("li",{parentName:"ol"},"Heating plate"),(0,o.kt)("li",{parentName:"ol"},"Isolation for heating plate"),(0,o.kt)("li",{parentName:"ol"},"Black silicone"),(0,o.kt)("li",{parentName:"ol"},"2 pin connector")),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Solder station."),(0,o.kt)("li",{parentName:"ol"},"Tin."),(0,o.kt)("li",{parentName:"ol"},"Solder paste.")),(0,o.kt)("h2",{id:"assembling-the-casing"},"Assembling the casing"),(0,o.kt)("p",null,"The first step to assemble the bioreactor is to put the casing together. In this part, we will discuss the base only. Explanation on how to assemble the heating plate will come in a ",(0,o.kt)("a",{parentName:"p",href:"#readying-the-heating-cell"},"dedicated section"),"."),(0,o.kt)("p",null,"First, identify the parts you are dealing with. In the following image are shown all the parts required to build the base."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Sections ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," are the base for the heating plate."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Sections ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"D")," for the main board."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Base part",src:a(8406).Z})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"A"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Heating plate base")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"B"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Front")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Behind")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Left")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Right")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"C"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Top")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Bottom")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"D"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Right")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Left")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Front")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Behind")))),(0,o.kt)("p",null,"Tape all parts together ",(0,o.kt)("strong",{parentName:"p"},"except ",(0,o.kt)("inlineCode",{parentName:"strong"},"Top"))," and glue them with ",(0,o.kt)("em",{parentName:"p"},"dichloromethane"),". Wait about 10 minutes until the solvent has dried out. When assembling, please beware of the following details:"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"On the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bottom")," part, the 4 small holes designed for the screws that will support the PCB should be on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Front")," when looking from the front of the bioreactor."),(0,o.kt)("li",{parentName:"ul"},"The part containing only one big circular hole for the pump ",(0,o.kt)("inlineCode",{parentName:"li"},"Right")," should be on the right side when looking from the front and the holes should be in the back."),(0,o.kt)("li",{parentName:"ul"},"The part containing the two big circular holes for the pump and fan ",(0,o.kt)("inlineCode",{parentName:"li"},"Left")," should be on the left side when looking from the front and the holes should be in the back.")))),(0,o.kt)("h3",{id:"heating-plate-base"},"Heating plate base"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top view of heating plate base",src:a(4435).Z})),(0,o.kt)("p",null,"Components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Part ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," of the cases"),(0,o.kt)("li",{parentName:"ol"},"Part ",(0,o.kt)("inlineCode",{parentName:"li"},"B")," of the cases"),(0,o.kt)("li",{parentName:"ol"},"Dichloromethane"),(0,o.kt)("li",{parentName:"ol"},"Heating plate"),(0,o.kt)("li",{parentName:"ol"},"Isolation for heating plate"),(0,o.kt)("li",{parentName:"ol"},"Black silicone"),(0,o.kt)("li",{parentName:"ol"},"2 pin connector.")),(0,o.kt)("p",null,"Tape all parts together and glue with dochloromethane, in the top of this case you need to paste the isolation and heating plate both like the picture:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bottom view of heating plate base",src:a(8319).Z})),(0,o.kt)("p",null,"For the connector, you need to use a width cable that tolerate more than 4 A, and solder correctly:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Solder cable in the heating plate",src:a(6272).Z})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be sure that you use the correct connector for the heating plate."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Header of the connector for heating plate to bioreactor base",src:a(8254).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Try to avoid any contact between case and heating plate using the silicone."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Correct glue between heating plate and its base",src:a(5290).Z})),(0,o.kt)("h3",{id:"top"},"Top"),(0,o.kt)("p",null,"Components:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Part ",(0,o.kt)("inlineCode",{parentName:"li"},"C-1")),(0,o.kt)("li",{parentName:"ol"},"Stepper motor"),(0,o.kt)("li",{parentName:"ol"},"4 connectors stepper-screws"),(0,o.kt)("li",{parentName:"ol"},"4 screws"),(0,o.kt)("li",{parentName:"ol"},"4 packing rings"),(0,o.kt)("li",{parentName:"ol"},"4 loading cells"),(0,o.kt)("li",{parentName:"ol"},"8 screws for loading cell"),(0,o.kt)("li",{parentName:"ol"},"8 packing rings for loading cells"),(0,o.kt)("li",{parentName:"ol"},"1 PCB for connections between loading cells and bioreactor main PCB"),(0,o.kt)("li",{parentName:"ol"},"4 connectors PCB-screws."),(0,o.kt)("li",{parentName:"ol"},"4 screws for PCB"),(0,o.kt)("li",{parentName:"ol"},"4 packing rings")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Components for top",src:a(5570).Z})),(0,o.kt)("h4",{id:"loading-cells"},"Loading cells"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Components for loading cells",src:a(1778).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To avoid any pressure on load cells, you need to put the packing rings between loading cell and case."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Loading cells connection A",src:a(1215).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Loading cells connection B",src:a(9483).Z})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Take care! There is only one correct conection between the loading cells and case, if you connect for the incorrect side, you have problems with PCB connection."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Look the hole positions for every loading cell cable."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Final connection for Loading cells",src:a(4050).Z})),(0,o.kt)("h4",{id:"loading-cell-connection-board"},"Loading cell connection board"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Board connection for Loading cells",src:a(633).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Top view for loading cell board",src:a(6674).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Board connection for Loading cells",src:a(6258).Z})),(0,o.kt)("h4",{id:"stepper"},"Stepper"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Components for stepper",src:a(6301).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First connection for stepper A",src:a(372).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First connection for stepper B",src:a(7351).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connection for stepper in case",src:a(1642).Z})),(0,o.kt)("h4",{id:"agitation"},"Agitation"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Agitation for stepper",src:a(1962).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Agitation + stepper",src:a(474).Z})),(0,o.kt)("h2",{id:"base-case"},"Base case"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Case parts for principal base of the bioreactor",src:a(7773).Z})),(0,o.kt)("h3",{id:"right"},"Right"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Right components",src:a(5529).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Right connection A",src:a(6831).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Right connection B",src:a(5144).Z})),(0,o.kt)("h3",{id:"left"},"Left"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Left components",src:a(8459).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pump connection in left case",src:a(1719).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fan connection in left case",src:a(4868).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Left connections",src:a(7649).Z})),(0,o.kt)("h3",{id:"front"},"Front"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Front components",src:a(2136).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Front connections",src:a(6417).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Front - how to solder the cable connector",src:a(2195).Z})),(0,o.kt)("h3",{id:"bottom"},"Bottom"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bottom components",src:a(5796).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Components for PCB",src:a(1578).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Components for connections",src:a(2282).Z})),(0,o.kt)("h2",{id:"inserting-the-peristaltic-pumps"},"Inserting the peristaltic pumps"),(0,o.kt)("p",null,"After finishing the assembly of the base, it is time to start adding the important parts. Take two ",(0,o.kt)("em",{parentName:"p"},"peristaltic pumps")," and insert them in the holes made for them in the right wall of the base.\nScrew them with 2 ",(0,o.kt)("em",{parentName:"p"},"M3x14cm screws")," each as shown on the following picture."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/pumps1.jpg",src:a(9113).Z})),(0,o.kt)("p",null,"Take two ",(0,o.kt)("em",{parentName:"p"},"cables 2 pins KF2510-2P")," and solder them to the pumps as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/pumps2.jpg",src:a(4668).Z})),(0,o.kt)("p",null,"This completes the assembling of the bases body. We will now work on the bases lid (top part)."),(0,o.kt)("h2",{id:"adding-the-stepper"},"Adding the stepper"),(0,o.kt)("p",null,"First, we will fixate the stepper motor that will control the agitation."),(0,o.kt)("p",null,"Take the base top part and insert the ",(0,o.kt)("em",{parentName:"p"},"stepper motor")," in the middle. Fixate it with four ",(0,o.kt)("em",{parentName:"p"},"M3x14mm")," screws. Place four ",(0,o.kt)("em",{parentName:"p"},"M4 bolts")," between the lid and the motor to create some space between them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/stepper1.png",src:a(783).Z})),(0,o.kt)("p",null,"Take one ",(0,o.kt)("em",{parentName:"p"},"cable 6 pins KF2510-6P")," and solder it to the stepper motor as shown in the following pictures:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The stepper motor and the cable before soldering"),"\n",(0,o.kt)("img",{alt:"images/stepper2.jpg",src:a(3925).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The stepper motor and the cable after soldering"),"\n",(0,o.kt)("img",{alt:"images/stepper3.jpg",src:a(6804).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Detail of the connexions between the stepper motor and the cable"),"\n",(0,o.kt)("img",{alt:"images/stepper4.jpg",src:a(448).Z})),(0,o.kt)("p",null,"When the cable is properly soldered, place the magnets on the stepper motor as follows:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[To be completed]")),(0,o.kt)("h2",{id:"adding-the-loading-cells"},"Adding the loading cells"),(0,o.kt)("p",null,"Once the stepper motor is properly in place, you will have to place the loading cells."),(0,o.kt)("p",null,"Take three ",(0,o.kt)("em",{parentName:"p"},"loading cells")," and one ",(0,o.kt)("em",{parentName:"p"},"cable 5 pins KF2510-5P"),"."),(0,o.kt)("p",null,"images/loading-cells1.jpg"),(0,o.kt)("p",null,"Solder the wires of the loading cells to the 5 pins cable as shown in the following picture. The length of the wires from the loading cells to the cable head should be approximately 20cm."),(0,o.kt)("p",null,"images/loading-cells2.jpg\nimages/loading-cells2.jpg"),(0,o.kt)("p",null,"Do not solder the black cable from the ",(0,o.kt)("em",{parentName:"p"},"KF2510-5P"),". Bare it for a couple of centimeters. You should now have all three loading cells attached to each other as follows:"),(0,o.kt)("p",null,"images/loading-cells3.jpg\nimages/loading-cells3.jpg"),(0,o.kt)("p",null,"On the top part of the base, you will find three big rectangular holes each followed by two small circular ones. In each big hole, pass one loading cell from the bottom of the plate (the magnets from the stepper motor are on the top of the plate)."),(0,o.kt)("p",null,"Screw each loading cell from below the plate with two ",(0,o.kt)("em",{parentName:"p"},"M4x14mm")," screws (through the small holes), and on the extremity of the loading cell located above the hole, insert two ",(0,o.kt)("em",{parentName:"p"},"M5x14")," screws."),(0,o.kt)("p",null,"The following drawing sums this up:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/loading-cells4.jpg",src:a(4627).Z})),(0,o.kt)("p",null,"It should now look like this (one screw still missing on the picture):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/loading-cells5.jpg",src:a(3968).Z})),(0,o.kt)("p",null,"Insert a ",(0,o.kt)("em",{parentName:"p"},"plastic screw cover")," on the outest ",(0,o.kt)("em",{parentName:"p"},"M5")," screw of each loading cell."),(0,o.kt)("p",null,"You will now need to connect all loading cells to each other. To do so, cut ",(0,o.kt)("em",{parentName:"p"},"two pieces of wire")," of a length of approximately 20cm each and bare both of their ends. Connect the two loading cells on the sides to the central loading cell by wrapping the end of the wires around the central ",(0,o.kt)("em",{parentName:"p"},"M5")," screw as shown below. In a similar way, connect the remaining black wire from the ",(0,o.kt)("em",{parentName:"p"},"KF2510-5P")," to one of the loading cells on the sides."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/loading-cells6.jpg",src:a(5962).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The following drawing shows how the loading cells should be connected to each other:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/loading-cells7.jpg",src:a(6649).Z})),(0,o.kt)("p",null,"Add a bolt on the end of each ",(0,o.kt)("em",{parentName:"p"},"M5")," screw to tighten the connexions and keep the cables in place."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/loading-cells8.jpg",src:a(7392).Z})),(0,o.kt)("p",null,"This final step completes the assembly of the loading cells. The top part of your bioreactors base should now look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images/loading-cells9.jpg",src:a(7845).Z})),(0,o.kt)("h2",{id:"preparing-the-heating-cell"},"Preparing the heating cell"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[To be completed]")))}d.isMDXComponent=!0},7773:function(e,t,a){t.Z=a.p+"assets/images/base_case-b6d9c4b711c9e516248a35f1588006b9.JPG"},1578:function(e,t,a){t.Z=a.p+"assets/images/bottom_PCB_components-6d5a44cd118e0fa3251e0b85493f0a66.JPG"},5796:function(e,t,a){t.Z=a.p+"assets/images/bottom_and_components-ad78dac7ffdc4cdc0e56ef16fadb29c3.JPG"},2282:function(e,t,a){t.Z=a.p+"assets/images/bottom_connections-1c33984a8f1ea75d4f2d09c429fdabb4.JPG"},2136:function(e,t,a){t.Z=a.p+"assets/images/front_components-13b1da501c0a60c4c1d41417ea95fcf4.JPG"},6417:function(e,t,a){t.Z=a.p+"assets/images/front_connections-23683354a717eb87b9532bc071ca27b9.JPG"},2195:function(e,t,a){t.Z=a.p+"assets/images/front_solder_cable-f3d9f85c5aeffa71005e1fd323dd457a.JPG"},4435:function(e,t,a){t.Z=a.p+"assets/images/heating_plate-cc2d02f357ad5a4cf073c81dda15b4dc.JPG"},8319:function(e,t,a){t.Z=a.p+"assets/images/heating_plate_and_cable-89436cab3c44f6f1cc615af748b909c9.JPG"},8254:function(e,t,a){t.Z=a.p+"assets/images/heating_plate_cable_connector-4128f81fbaed92631d382526bb5128ea.JPG"},5290:function(e,t,a){t.Z=a.p+"assets/images/heating_plate_silicone-190ca49710c956ef27d56ec3cf09a286.JPG"},6272:function(e,t,a){t.Z=a.p+"assets/images/heating_plate_solder-a752b168ad671946bedd6cf545227af2.JPG"},4868:function(e,t,a){t.Z=a.p+"assets/images/fan_connection-09f6717773f97b6155cc143ed730fbe8.JPG"},7649:function(e,t,a){t.Z=a.p+"assets/images/left_all_connections-3be0a9d322ed7e1e6c2290b51b9f9fdf.JPG"},8459:function(e,t,a){t.Z=a.p+"assets/images/left_components-3afc59d0f0c87007b8a85dc17370391e.JPG"},1719:function(e,t,a){t.Z=a.p+"assets/images/pump_connection-df245f0d1096e44eb471ff63e1f1ac2d.JPG"},4627:function(e,t,a){t.Z=a.p+"assets/images/loading-cells4-7cd02db3c1b56c1015452337ab1b5326.jpg"},3968:function(e,t,a){t.Z=a.p+"assets/images/loading-cells5-6f8fb1a3d20e8936e2d89998371c91b8.jpg"},5962:function(e,t,a){t.Z=a.p+"assets/images/loading-cells6-03d47fe5d085b1077e939dee0284ef4e.jpg"},6649:function(e,t,a){t.Z=a.p+"assets/images/loading-cells7-3eaf0f0939e2b5b9cde0a19404b23549.jpg"},7392:function(e,t,a){t.Z=a.p+"assets/images/loading-cells8-9435b936462d7391a659be9c1350e938.jpg"},7845:function(e,t,a){t.Z=a.p+"assets/images/loading-cells9-bb0e3685838657f28f6bf941f5e6fe89.jpg"},8406:function(e,t,a){t.Z=a.p+"assets/images/main_case-fd99971788bc77439f12dae6dda296ec.png"},9113:function(e,t,a){t.Z=a.p+"assets/images/pumps1-c55969d8945a9d905f638bba324cd25b.jpg"},4668:function(e,t,a){t.Z=a.p+"assets/images/pumps2-c1e0c4cf9db48aa24709ed3bcb10b3c2.jpg"},5529:function(e,t,a){t.Z=a.p+"assets/images/right_components-a3d1871c807bce2affc3c8f905ec170f.JPG"},6831:function(e,t,a){t.Z=a.p+"assets/images/right_connection_A-23b7055495b23bbfbd43def67b62641b.JPG"},5144:function(e,t,a){t.Z=a.p+"assets/images/right_connection_B-2b54722ea60ded177abd7350288111e6.JPG"},783:function(e,t,a){t.Z=a.p+"assets/images/stepper1-e16ac7d58b674814bb6ac05204732774.png"},3925:function(e,t,a){t.Z=a.p+"assets/images/stepper2-a7021b24813e34280b5e2ec117b22b36.jpg"},6804:function(e,t,a){t.Z=a.p+"assets/images/stepper3-72428c8952cef94a00dd7675b81c29d5.jpg"},448:function(e,t,a){t.Z=a.p+"assets/images/stepper4-1eff45140716d224c5d6ee2003f1c86b.jpg"},1962:function(e,t,a){t.Z=a.p+"assets/images/agitator-381c73c49b0c1d969fab8e626d1478a9.JPG"},474:function(e,t,a){t.Z=a.p+"assets/images/agitator_and_stepper-4cebeab0736d874d8096ccfbf8220a2c.JPG"},633:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_PCB_components-fbc0c5a06585fb71370f50dc4785a512.JPG"},6258:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_PCB_connection-df5b11257e726d9a22e8e0be51ecdb2f.JPG"},6674:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_PCB_top_view-43442af99f62a331410bd7234de259ef.JPG"},1778:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_components-65ac922a57867f5d12a7ad9e2a993ab0.JPG"},1215:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_connection_A-8beb906eec38ecbe5d1abdb289e254c6.JPG"},9483:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_connection_B-b9bd2ff85f5594e99d4e971afb909f76.JPG"},4050:function(e,t,a){t.Z=a.p+"assets/images/loading_cell_final_connection-4625489422a98f48d355e59e098204be.JPG"},6301:function(e,t,a){t.Z=a.p+"assets/images/stepper_components-90e2146248e0bd986c922074c35987a0.JPG"},1642:function(e,t,a){t.Z=a.p+"assets/images/stepper_connection-b077bd324f49ce9d445db1f086afa239.JPG"},372:function(e,t,a){t.Z=a.p+"assets/images/stepper_connection_A-5acc643605d176df80fdfd9aa3d84404.JPG"},7351:function(e,t,a){t.Z=a.p+"assets/images/stepper_connection_B-1ba3100f5bda36a44f07511eefb72eaa.JPG"},5570:function(e,t,a){t.Z=a.p+"assets/images/top_components-9507bf6e50ac2b9d68959127e4cbefcc.JPG"}}]);