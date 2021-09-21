"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[4333],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5853:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="The software",c={unversionedId:"simple-spectro/software/README",id:"simple-spectro/software/README",isDocsHomePage:!1,title:"The software",description:"Once you finished soldering the PCB you need to burn the bootloader. This step enables the control of the device over USB.",source:"@site/docs/10_simple-spectro/30_software/README.md",sourceDirName:"10_simple-spectro/30_software",slug:"/simple-spectro/software/README",permalink:"/docs/simple-spectro/software/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/website/docs/10_simple-spectro/30_software/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The case",permalink:"/docs/simple-spectro/case/README"},next:{title:"Battery",permalink:"/docs/simple-spectro/tests/battery/README"}},p=[{value:"Power consumption",id:"power-consumption",children:[{value:"Sleep mode: 1.10mA",id:"sleep-mode-110ma",children:[]},{value:"Sleep mode, no ADC: 1.03mA",id:"sleep-mode-no-adc-103ma",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-software"},"The software"),(0,a.kt)("p",null,"Once you finished soldering the PCB you need to burn the bootloader. This step enables the control of the device over USB."),(0,a.kt)("p",null,"To burn the bootloader, first install the Arduino program and select 'Tools -> Board -> Lilypad Arduino USB'. You may then either use a 'tag-connector' connected to a USBTinyISP or a normal cable for ICSP (you will have to solder the IDC 6 pins socket in this case) to burn the bootloader. Click 'Tools -> Burn Bootloader'."),(0,a.kt)("p",null,"Once the bootloader has been burned you should be able to select the device from the Arduino program when it is connected with a USB cable. It should appear in 'Tools -> Port -> xxx Lilypad Arduino USB'. You can now open the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hackuarium/simple-spectro/tree/master/arduino"},"Arduino project")," and program the spectrophotometer."),(0,a.kt)("p",null,"In order to set reasonable parameters you should make a reset either from the Serial menu or from the LCD ('Utilities -> Reset'). The spectrophotometer is now ready to be used."),(0,a.kt)("h2",{id:"power-consumption"},"Power consumption"),(0,a.kt)("p",null,"In order to reduce the power consumption the device is put in sleep mode after 100 s of inactivity."),(0,a.kt)("p",null,"Here are some tests using v1.6.1."),(0,a.kt)("p",null,"Board consumption awake: 10mA"),(0,a.kt)("h3",{id:"sleep-mode-110ma"},"Sleep mode: 1.10mA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cli();\nsleep_enable();\nsei();\nsleep_cpu();\nsleep_disable();\n")),(0,a.kt)("h3",{id:"sleep-mode-no-adc-103ma"},"Sleep mode, no ADC: 1.03mA"),(0,a.kt)("p",null,"Turning off ADC allows to win around 0.07A"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADCSRA &= ~(1 << ADEN); // Disable ADC\n\ncli();\nsleep_enable();\nsei();\nsleep_cpu();\nsleep_disable();\n\nADCSRA |= (1 << ADEN); // enable A/D\n")))}d.isMDXComponent=!0}}]);