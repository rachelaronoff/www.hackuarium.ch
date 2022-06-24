"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[6813],{3905:function(t,a,e){e.d(a,{Zo:function(){return o},kt:function(){return k}});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),m=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},o=function(t){var a=m(t.components);return n.createElement(d.Provider,{value:a},t.children)},N={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(e),k=r,g=u["".concat(d,".").concat(k)]||u[k]||N[k]||l;return e?n.createElement(g,i(i({ref:a},o),{},{components:e})):n.createElement(g,i({ref:a},o))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=u;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=e[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},4325:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return o},default:function(){return u}});var n=e(7462),r=e(3366),l=(e(7294),e(3905)),i=["components"],p={},d="Parameters",m={unversionedId:"phmeter/platformio/parameters",id:"phmeter/platformio/parameters",isDocsHomePage:!1,title:"Parameters",description:"\xa1UPDATE 18042022!",source:"@site/docs/40_phmeter/10_platformio/20_parameters.md",sourceDirName:"40_phmeter/10_platformio",slug:"/phmeter/platformio/parameters",permalink:"/docs/phmeter/platformio/parameters",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/40_phmeter/10_platformio/20_parameters.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/phmeter/platformio/platformio"},next:{title:"Bill Of Material (BOM)",permalink:"/docs/phmeter/making/bom/index"}},o=[{value:"Other planned parameters",id:"other-planned-parameters",children:[]},{value:"PARAM_ENABLED",id:"param_enabled",children:[]},{value:"PARAM_STATUS",id:"param_status",children:[]},{value:"PARAM_ERROR",id:"param_error",children:[]}],N={toc:o};function u(t){var a=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parameters"},"Parameters"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\xa1UPDATE 18042022!"))),(0,l.kt)("p",null,"All the functionalities and the communication between processes are ensured by a common list of parameters."),(0,l.kt)("p",null,"The first 26 parameters (",(0,l.kt)("inlineCode",{parentName:"p"},"A")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Z"),") will be saved regularly in the log. These values will be recovered when the bioreactor reboots."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"P"),(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_EXT1"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of the solution (top)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_EXT2"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of the solution (bottom)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH"),(0,l.kt)("td",{parentName:"tr",align:null},"pH (raw values)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_SI"),(0,l.kt)("td",{parentName:"tr",align:null},"pH (International System of Units)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_SINCE_LAST_EVENT"),(0,l.kt)("td",{parentName:"tr",align:null},"Save the last pH to avoid problems when there are power outages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"I"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"W"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_CURRENT_STEP"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable protocol of bioreactor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"23"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_CURRENT_WAIT_TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"Waiting time before start protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Error in the system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"Z"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently active service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"AA"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STEPPER_SPEED"),(0,l.kt)("td",{parentName:"tr",align:null},"Motor speed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"27"),(0,l.kt)("td",{parentName:"tr",align:null},"AB"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STEPPER_STEPS"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of steps before changing the direction of the motor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"AC"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STEPPER_WAIT"),(0,l.kt)("td",{parentName:"tr",align:null},"Wait time in seconds between change direction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"29"),(0,l.kt)("td",{parentName:"tr",align:null},"AD"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_FACTOR"),(0,l.kt)("td",{parentName:"tr",align:null},"Weight calibration: conversion factor digital -> gr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"AE"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_EMPTY"),(0,l.kt)("td",{parentName:"tr",align:null},"Weight calibration: digital offset value when bioreactor is empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31"),(0,l.kt)("td",{parentName:"tr",align:null},"AF"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_SEDIMENTATION_TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of minutes to wait without rotation before emptying")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"AG"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FILLED_TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of minutes to stay in the filled state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null},"AZ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled service (set by user)")))),(0,l.kt)("h2",{id:"other-planned-parameters"},"Other planned parameters"),(0,l.kt)("p",null,"Others variables are consider with aditional modules that you can connect to the biorector via RJ12 port."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH"),(0,l.kt)("td",{parentName:"tr",align:null},"Current pH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_STATE"),(0,l.kt)("td",{parentName:"tr",align:null},"0: Pause 1 : normal acquisition, 2 : purge of pipes, 4: calibration pH=4, 7: calibration pH=7, 10: calibration pH=10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_CONDUCTIVITY"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"35"),(0,l.kt)("td",{parentName:"tr",align:null},"AJ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TARGET_PH"),(0,l.kt)("td",{parentName:"tr",align:null},"Desired pH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"AK"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_FACTOR_A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"37"),(0,l.kt)("td",{parentName:"tr",align:null},"AL"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_FACTOR_B"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"39"),(0,l.kt)("td",{parentName:"tr",align:null},"AN"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"AO"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"41"),(0,l.kt)("td",{parentName:"tr",align:null},"AP"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"AQ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"AR"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET1"),(0,l.kt)("td",{parentName:"tr",align:null},"Anemometer calibration: offset of the digital value (digital value when no gas is flowing)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"44"),(0,l.kt)("td",{parentName:"tr",align:null},"AS"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"45"),(0,l.kt)("td",{parentName:"tr",align:null},"AT"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"46"),(0,l.kt)("td",{parentName:"tr",align:null},"AU"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"AV"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR1"),(0,l.kt)("td",{parentName:"tr",align:null},"Anemometer calibration factor: conversion between gas flux (of air) and digital unit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"AW"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"49"),(0,l.kt)("td",{parentName:"tr",align:null},"AX"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"AY"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR4"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h1",{id:"state-machine"},"State machine"),(0,l.kt)("p",null,"There are 3 important variables that will manage the state of the bioreactor:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARAM_ENABLED"),": the functions that are currently enabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARAM_STATUS"),": the current status of the bioreactor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARAM_ERROR"),": if there is any error in one of the processes")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," ",(0,l.kt)("kbd",null,"Z")," will allow to activate or deactivate some function of the bioreactor. It is for example possible to disable heating while keeping all the other functionalities active."))),(0,l.kt)("h2",{id:"param_enabled"},"PARAM_ENABLED"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," ",(0,l.kt)("kbd",null,"Z")," allows to enable or disable some functionalities of the bioreactor. Currently, it can control heating, agitation and food control."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"BIT"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("th",{parentName:"tr",align:null},"COMMENT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PID_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable heating")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_STEPPER_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable agitation control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_1"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_2"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_3"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_4"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable food control")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you want to control everything the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," should be 63."))),(0,l.kt)("h2",{id:"param_status"},"PARAM_STATUS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_STATUS")," ",(0,l.kt)("kbd",null,"AZ")," will display the currently active functionalities. It is composed of different bits that can\nbe enabled or disabled using the method ",(0,l.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stop"),". You may also check the status of one of the functions using ",(0,l.kt)("inlineCode",{parentName:"p"},"getStatus"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"BIT"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("th",{parentName:"tr",align:null},"COMMENT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PID_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable heating")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_STEPPER_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable agitation control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_1"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_2"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_3"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_4"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PH_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable pH control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_GAS_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable gas control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_SEDIMENTATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable sedimentation (one of the phases of food control)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_FILLING"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable filling pump (one of the phases of food control)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_EMPTYING"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable emptying pump (one of the phases of food control)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PH_CALIBRATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable pH calibration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_ACID"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable acid addition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_BASE"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable base addition")))),(0,l.kt)("p",null,"The status is currently the ",(0,l.kt)("kbd",null,"AZ")," parameter. You can change the status by changing this value. For example, if you want to force the bioreactor to go in the emptying state you should ensure that the bits for the outputs, let's say ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_OUTPUT_1")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_OUTPUT_3")," are set. In other words, you may have to add ",(0,l.kt)("inlineCode",{parentName:"p"},"2^2 (4) + 2^4 (16) = 20")," to your value of the parameter ",(0,l.kt)("kbd",null,"AZ")," (in the case it was not yet enabled). Same procedure is to be implemented for filling and all commands."),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The param ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_STATUS")," is the main control when you are running the bioreactor protocol, be sure that those manual changes do not affect your actual test."))),(0,l.kt)("h2",{id:"param_error"},"PARAM_ERROR"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ERROR")," ",(0,l.kt)("kbd",null,"Y")," will display any error in the bioreactor, you can check the code of the error with this table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"BIT"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_ERROR"),(0,l.kt)("th",{parentName:"tr",align:null},"COMMENT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_PCB_PROBE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Pcb probe failed (one wire not answering)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_LIQ_PROBE1_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Liquid probe in the top failed (one wire not answering)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_LIQ_PROBE2_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Liquid probe in the bottom failed (one wire not answering)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_PCB_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of pcb is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_LIQ_RANGE1_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of liquid in the top is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_LIQ_RANGE2_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of liquid in the bottom is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_TARGET_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Target temperature is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_WEIGHT_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Weight is outside range")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Always have this information at hand, you never know when it can be very helpful."))))}u.isMDXComponent=!0}}]);