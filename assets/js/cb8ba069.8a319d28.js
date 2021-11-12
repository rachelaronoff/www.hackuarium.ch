"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[8521],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3228:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Uploading the software",p={unversionedId:"simple-spectro/tutorial/software/README",id:"simple-spectro/tutorial/software/README",isDocsHomePage:!1,title:"Uploading the software",description:"This step is generally optional, because we have already uploaded the software on the PCBs in the kits. If it's the case, just skip this section.",source:"@site/docs/10_simple-spectro/20_tutorial/30_software/README.md",sourceDirName:"10_simple-spectro/20_tutorial/30_software",slug:"/simple-spectro/tutorial/software/README",permalink:"/docs/simple-spectro/tutorial/software/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/10_simple-spectro/20_tutorial/30_software/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assembling the case",permalink:"/docs/simple-spectro/tutorial/case/README"},next:{title:"The end",permalink:"/docs/simple-spectro/tutorial/end/README"}},c=[{value:"Power consumption",id:"power-consumption",children:[{value:"Sleep mode: 1.10mA",id:"sleep-mode-110ma",children:[]},{value:"Sleep mode, no ADC: 1.03mA",id:"sleep-mode-no-adc-103ma",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uploading-the-software"},"Uploading the software"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This step is generally optional, because we have already uploaded the software on the PCBs in the kits. If it's the case, just skip this section."))),(0,a.kt)("p",null,"Once you finished soldering the PCB you need to burn the bootloader. This step enables the control of the device over USB."),(0,a.kt)("p",null,"To burn the bootloader, first install the Arduino program and select 'Tools -> Board -> Lilypad Arduino USB'. You may then either use a 'tag-connector' connected to a USBTinyISP or a normal cable for ICSP (you will have to solder the IDC 6 pins socket in this case) to burn the bootloader. Click 'Tools -> Burn Bootloader'."),(0,a.kt)("p",null,"Once the bootloader has been burned you should be able to select the device from the Arduino program when it is connected with a USB cable. It should appear in 'Tools -> Port -> xxx Lilypad Arduino USB'. You can now open the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hackuarium/simple-spectro/tree/master/arduino"},"Arduino project")," and program the spectrophotometer."),(0,a.kt)("p",null,"In order to set reasonable parameters you should make a reset either from the Serial menu or from the LCD ('Utilities -> Reset'). The spectrophotometer is now ready to be used."),(0,a.kt)("h2",{id:"power-consumption"},"Power consumption"),(0,a.kt)("p",null,"In order to reduce the power consumption the device is put in sleep mode after 100 s of inactivity."),(0,a.kt)("p",null,"Here are some tests using v1.6.1."),(0,a.kt)("p",null,"Board consumption awake: 10mA"),(0,a.kt)("h3",{id:"sleep-mode-110ma"},"Sleep mode: 1.10mA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cli();\nsleep_enable();\nsei();\nsleep_cpu();\nsleep_disable();\n")),(0,a.kt)("h3",{id:"sleep-mode-no-adc-103ma"},"Sleep mode, no ADC: 1.03mA"),(0,a.kt)("p",null,"Turning off ADC allows to win around 0.07A"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADCSRA &= ~(1 << ADEN); // Disable ADC\n\ncli();\nsleep_enable();\nsei();\nsleep_cpu();\nsleep_disable();\n\nADCSRA |= (1 << ADEN); // enable A/D\n")))}d.isMDXComponent=!0}}]);