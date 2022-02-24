"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[7893],{3905:function(t,n,a){a.d(n,{Zo:function(){return m},kt:function(){return N}});var r=a(7294);function e(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){e(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function u(t,n){if(null==t)return{};var a,r,e=function(t,n){if(null==t)return{};var a,r,e={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(e[a]=t[a]);return e}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var p=r.createContext({}),k=function(t){var n=r.useContext(p),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},m=function(t){var n=k(t.components);return r.createElement(p.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},o=r.forwardRef((function(t,n){var a=t.components,e=t.mdxType,l=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),o=k(a),N=e,g=o["".concat(p,".").concat(N)]||o[N]||d[N]||l;return a?r.createElement(g,i(i({ref:n},m),{},{components:a})):r.createElement(g,i({ref:n},m))}));function N(t,n){var a=arguments,e=n&&n.mdxType;if("string"==typeof t||e){var l=a.length,i=new Array(l);i[0]=o;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=t,u.mdxType="string"==typeof t?t:e,i[1]=u;for(var k=2;k<l;k++)i[k]=a[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},9083:function(t,n,a){a.r(n),a.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return k},toc:function(){return m},default:function(){return o}});var r=a(7462),e=a(3366),l=(a(7294),a(3905)),i=["components"],u={},p="Pin mapping",k={unversionedId:"bioreactor/making/pinMapping",id:"bioreactor/making/pinMapping",isDocsHomePage:!1,title:"Pin mapping",description:"| Port | Pin | Arduino Mask        | Alternative functions                         | Bertha V6.1.0                               |",source:"@site/docs/20_bioreactor/20_making/pinMapping.md",sourceDirName:"20_bioreactor/20_making",slug:"/bioreactor/making/pinMapping",permalink:"/docs/bioreactor/making/pinMapping",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/20_bioreactor/20_making/pinMapping.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting the plate",permalink:"/docs/bioreactor/making/pid/index"},next:{title:"README",permalink:"/docs/bioreactor/making/stepper/README"}},m=[],d={toc:m};function o(t){var n=t.components,a=(0,e.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pin-mapping"},"Pin mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Pin"),(0,l.kt)("th",{parentName:"tr",align:null},"Arduino Mask"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternative functions"),(0,l.kt)("th",{parentName:"tr",align:null},"Bertha V6.1.0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"D11 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"OC0A ",(0,l.kt)("br",null)," OC1C ",(0,l.kt)("br",null)," PCINT7 ",(0,l.kt)("br",null)," /RTS"),(0,l.kt)("td",{parentName:"tr",align:null},"Fan control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D10 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"OC1B ",(0,l.kt)("br",null)," PCINT6 ",(0,l.kt)("br",null)," OC.4B ",(0,l.kt)("br",null)," ADC13"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for Input/Ouput 1 (PWM food in)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"D9 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"OC1A ",(0,l.kt)("br",null)," PCINT5 ",(0,l.kt)("br",null)," /OC.4B ",(0,l.kt)("br",null)," ADC12"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for stepper steps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"D8"),(0,l.kt)("td",{parentName:"tr",align:null},"PCINT4 ",(0,l.kt)("br",null)," ADC11"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for stepper direction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"MISO"),(0,l.kt)("td",{parentName:"tr",align:null},"PDO ",(0,l.kt)("br",null)," MISO ",(0,l.kt)("br",null)," PCINT3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"MOSI"),(0,l.kt)("td",{parentName:"tr",align:null},"PDI ",(0,l.kt)("br",null)," MOSI ",(0,l.kt)("br",null)," PCINT2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"SCK"),(0,l.kt)("td",{parentName:"tr",align:null},"SCK ",(0,l.kt)("br",null)," PCINT1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"/SS"),(0,l.kt)("td",{parentName:"tr",align:null},"/SS ",(0,l.kt)("br",null)," PCINT0"),(0,l.kt)("td",{parentName:"tr",align:null},"Serial communication reception LED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"D13 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"ICP3 ",(0,l.kt)("br",null)," CLK0 ",(0,l.kt)("br",null)," OC4A"),(0,l.kt)("td",{parentName:"tr",align:null},"LED for check bioreactor code run correctly")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D5 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"OC.3A ",(0,l.kt)("br",null)," /OC4A"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for Input/Ouput 2 (PWM food out)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"D6 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"T0 ",(0,l.kt)("br",null)," OC.4D ",(0,l.kt)("br",null)," ADC10"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for PID control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D12"),(0,l.kt)("td",{parentName:"tr",align:null},"T1 ",(0,l.kt)("br",null)," /OC.4D ",(0,l.kt)("br",null)," ADC9"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for Input/Ouput 4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"XCK1 ",(0,l.kt)("br",null)," /CTS"),(0,l.kt)("td",{parentName:"tr",align:null},"Serial communication transmission LED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"D4"),(0,l.kt)("td",{parentName:"tr",align:null},"ICP1 ",(0,l.kt)("br",null)," ADC8"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin for Input/Ouput 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"D3"),(0,l.kt)("td",{parentName:"tr",align:null},"/INT3 ",(0,l.kt)("br",null)," TXD1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"D0"),(0,l.kt)("td",{parentName:"tr",align:null},"/INT2 ",(0,l.kt)("br",null)," RXD1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"D2 ",(0,l.kt)("br",null)," SDA"),(0,l.kt)("td",{parentName:"tr",align:null},"/INT1 ",(0,l.kt)("br",null)," SDA"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"D3 (PWM) ",(0,l.kt)("br",null)," SCL"),(0,l.kt)("td",{parentName:"tr",align:null},"/INT0 ",(0,l.kt)("br",null)," SCL ",(0,l.kt)("br",null)," OC0B"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"A3 / D21"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC4/TCK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D7"),(0,l.kt)("td",{parentName:"tr",align:null},"INT6 ",(0,l.kt)("br",null)," /AIN0"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext. OneWire 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"/HWB"),(0,l.kt)("td",{parentName:"tr",align:null},"/HWB"),(0,l.kt)("td",{parentName:"tr",align:null},"/HWB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"A0"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC7 ",(0,l.kt)("br",null)," TDI"),(0,l.kt)("td",{parentName:"tr",align:null},"Clock for HX711")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"A1"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC6 ",(0,l.kt)("br",null)," TDO"),(0,l.kt)("td",{parentName:"tr",align:null},"Data for HX711")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"A2"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC5 ",(0,l.kt)("br",null)," TMS"),(0,l.kt)("td",{parentName:"tr",align:null},"PCB temp. OneWire")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"A3"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC4 ",(0,l.kt)("br",null)," TCK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"A4"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC0"),(0,l.kt)("td",{parentName:"tr",align:null},"ON/OFF error LED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A5"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC0"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext. OneWire 2")))))}o.isMDXComponent=!0}}]);