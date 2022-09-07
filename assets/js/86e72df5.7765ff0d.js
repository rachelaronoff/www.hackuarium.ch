"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[1595],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83498:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={},c="EC",s={unversionedId:"phmeter/tests/ec/README",id:"phmeter/tests/ec/README",isDocsHomePage:!1,title:"EC",description:"For the EC reading, we are checking all the hardware steps to be sure that the signal pass correctly.",source:"@site/docs/40_phmeter/40_tests/40_ec/README.md",sourceDirName:"40_phmeter/40_tests/40_ec",slug:"/phmeter/tests/ec/README",permalink:"/docs/phmeter/tests/ec/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/40_phmeter/40_tests/40_ec/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pH",permalink:"/docs/phmeter/tests/ph/README"},next:{title:"Tutorial Intro",permalink:"/docs/writing-documentation/intro"}},u=[{value:"Signal generator",id:"signal-generator",children:[]}],p={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ec"},"EC"),(0,o.kt)("p",null,"For the EC reading, we are checking all the hardware steps to be sure that the signal pass correctly."),(0,o.kt)("h2",{id:"signal-generator"},"Signal generator"),(0,o.kt)("p",null,"This first test is in the outoput pin for the signal generator, you must to put the oscilloscope probe in the pin 7 for U8 IC like the next picture:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EC test signal generator",src:r(10138).Z})),(0,o.kt)("p",null,"If everything runs well, you have to obtain a signal plot like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EC signal generator",src:r(518).Z})),(0,o.kt)("p",null,"The ideal values for this part of the circuit need to be:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Measurement"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Voltage Max"),(0,o.kt)("td",{parentName:"tr",align:null},"3.3 V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Voltage Min"),(0,o.kt)("td",{parentName:"tr",align:null},"-3.3 V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Frequency"),(0,o.kt)("td",{parentName:"tr",align:null},"1.76 kHz")))),(0,o.kt)("p",null,"The experimental results are very similiar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EC signal generator",src:r(10483).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EC raw values",src:r(21642).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EC raw values",src:r(21642).Z})))}m.isMDXComponent=!0},10138:function(e,t,r){t.Z=r.p+"assets/images/ec_hw_test_signal_generator-a7fd9975bf6710f11066c4f392a9668a.png"},21642:function(e,t,r){t.Z=r.p+"assets/images/ec_raw-18d48c30136417c489f7944764064d67.svg"},518:function(e,t,r){t.Z=r.p+"assets/images/signal_generator-85014fa2578bc4fae0e1294b82258d10.bmp"},10483:function(e,t,r){t.Z=r.p+"assets/images/signal_generator_pp-3a0fc2d53392355d2deebd05e757e3e4.bmp"}}]);