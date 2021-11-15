"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[6401],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=r,g=u["".concat(p,".").concat(s)]||u[s]||c[s]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6273:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Communication and settings",m={unversionedId:"programming/communication/README",id:"programming/communication/README",isDocsHomePage:!1,title:"Communication and settings",description:"Introduction",source:"@site/docs/60_programming/communication/README.md",sourceDirName:"60_programming/communication",slug:"/programming/communication/README",permalink:"/docs/programming/communication/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/60_programming/communication/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing documentation",permalink:"/docs/writing-documentation/index"},next:{title:"Set environment",permalink:"/docs/programming/esp32/README"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Parameters",id:"parameters",children:[]},{value:"List of parameters and their meaning",id:"list-of-parameters-and-their-meaning",children:[]},{value:"Checking a parameter",id:"checking-a-parameter",children:[]},{value:"Changing a parameter",id:"changing-a-parameter",children:[]},{value:"Changing muultiple parameters at once",id:"changing-muultiple-parameters-at-once",children:[]}]},{value:"Connecting to the device from the browser",id:"connecting-to-the-device-from-the-browser",children:[]},{value:"Connecting to the device using the Arduino program",id:"connecting-to-the-device-using-the-arduino-program",children:[{value:"Accessing data from the Arduino program",id:"accessing-data-from-the-arduino-program",children:[]},{value:"Select the right port",id:"select-the-right-port",children:[]},{value:"Open the serial monitor",id:"open-the-serial-monitor",children:[]},{value:"Select Newline as line ending",id:"select-newline-as-line-ending",children:[]}]},{value:"Controlling the device",id:"controlling-the-device",children:[]}],c={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"communication-and-settings"},"Communication and settings"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"All our devices accept the Serial communication over USB as well as a common set of commands. The syntax of those commands are always the same:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lowercases to access menu and commands"),(0,i.kt)("li",{parentName:"ul"},"uppercase to check or change parameters"),(0,i.kt)("li",{parentName:"ul"},"number + uppercase to change I2C connected devices")),(0,i.kt)("p",null,"All the devices include the following commands: ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," for help, ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," for settings and ",(0,i.kt)("inlineCode",{parentName:"p"},"u")," for utilities. Please note that the command has to be followed by either carriage return (CR), line feed (LF) or CR+LF."),(0,i.kt)("p",null,"For example with the ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-spectro")," and entering ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," you will obtain the following menu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(h)elp\n(i)2c\n(s)ettings\n(u)tilities\n(d)ata\n(k)inetic\n(r)un experiment\n(t)est\ns(l)eep\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"All the devices share an array of parameters and those parameters may either be only readable or writable. All the parameters are numbers between -32768 and 32767 (internally they are stored as an array of int16). The parameters can be checked and changed using the corresponding uppercase letters that corresponds to the index in the array. For instance ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," for the index ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," for index ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," etc."),(0,i.kt)("p",null,"Depending the device you may have have only 4 parameters or more than 78 parameters. After using the 26 letters of the alphabet we are using 2 letter codes like AA, AB, ..."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Letter"),(0,i.kt)("th",{parentName:"tr",align:null},"Corresponding index"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"B"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AA"),(0,i.kt)("td",{parentName:"tr",align:null},"26")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AB"),(0,i.kt)("td",{parentName:"tr",align:null},"27")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BA"),(0,i.kt)("td",{parentName:"tr",align:null},"52")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")))),(0,i.kt)("p",null,"Looking to ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),"ettings for the simple-spectro you will get a list like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0- A: 1441`\n1- B: 21367\n2- C: 14744\n3- D: 49\n4- E: 1\n5- F: 20674\n6- G: 23417\n...\n18- S: 4260\n19- T: 2340\n20- U: 1023\n21- V: 15\n...\n")),(0,i.kt)("p",null,"And for example ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," is the current temperature multiplied by 100."),(0,i.kt)("h3",{id:"list-of-parameters-and-their-meaning"},"List of parameters and their meaning"),(0,i.kt)("p",null,"All the information about the parameters are available at:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Hackuarium/legoino-device-information"},"https://github.com/Hackuarium/legoino-device-information")),(0,i.kt)("h3",{id:"checking-a-parameter"},"Checking a parameter"),(0,i.kt)("p",null,"To check a specific parameter just enter the corresponding uppercase letter followed by enter."),(0,i.kt)("h3",{id:"changing-a-parameter"},"Changing a parameter"),(0,i.kt)("p",null,"To change a parameter simple enter the uppercase letter followed by the new value. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"AB123")," will set the value of the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"AB")," (parameter 27) to ",(0,i.kt)("inlineCode",{parentName:"p"},"123"),"."),(0,i.kt)("h3",{id:"changing-muultiple-parameters-at-once"},"Changing muultiple parameters at once"),(0,i.kt)("p",null,"An uppercase letter followed by comma separated value wills change consecutively the parameters. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"B1,2,3")," will set ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please take care than there is a limit in the string that can be sent. For simple devices using an 8-bit ATMEGA microcontroller it 32 bytes"))),(0,i.kt)("h2",{id:"connecting-to-the-device-from-the-browser"},"Connecting to the device from the browser"),(0,i.kt)("p",null,"Since March 2021 it is possible to communicate to external devices using Serial over USB using Google Chrome, Chromium or Edge browsers. All our devices accept this kind of connection and you may test this experimental feature in:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hackuarium.github.io/bioreactor-ui/preferences/local-devices"},"https://hackuarium.github.io/bioreactor-ui/preferences/local-devices")),(0,i.kt)("h2",{id:"connecting-to-the-device-using-the-arduino-program"},"Connecting to the device using the Arduino program"),(0,i.kt)("p",null,"It is possible to control the device from the Serial over USB. You could use for example\nthe command ",(0,i.kt)("inlineCode",{parentName:"p"},"screen"),' in a bash if you\'re used to it, but the easiest is probably to use the "Serial Monitor" of the Arduino program.'),(0,i.kt)("p",null,'Indeed the spectrophotometer appears as a "Lilipad Arduino USB" and you can just select it and access the data.'),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'When using the Arduino program, it is critical to choose the right board ("Lilipad Arduino USB") when programming it. Indeed the spectro contains an Atmega 32U4 at 8MHz. If it is programmed at a different frequency, the firmware will be corrupted and you will not be able to program the spectrophotometer again.'))),(0,i.kt)("h3",{id:"accessing-data-from-the-arduino-program"},"Accessing data from the Arduino program"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the Arduino IDE software"),(0,i.kt)("li",{parentName:"ol"},"Select 'Tools -> Board -> Lilypad Arduino USB'"),(0,i.kt)("li",{parentName:"ol"},"Select 'Tools -> Port -> xxx Lilypad Arduino USB'"),(0,i.kt)("li",{parentName:"ol"},"Click on Serial monitor icon (top right)"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"linefeed")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"9600")," in the bottom of the screen")),(0,i.kt)("h3",{id:"select-the-right-port"},"Select the right port"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"port.png",src:n(4182).Z})),(0,i.kt)("h3",{id:"open-the-serial-monitor"},"Open the serial monitor"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"serial.png",src:n(7636).Z})),(0,i.kt)("h3",{id:"select-newline-as-line-ending"},"Select Newline as line ending"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"newline.png",src:n(4248).Z})),(0,i.kt)("h2",{id:"controlling-the-device"},"Controlling the device"),(0,i.kt)("p",null,"You may now control the spectrophotometer from the keyboard. To see the available commands just enter ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," + Enter."),(0,i.kt)("p",null,"The instruction ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," will show you the current settings."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Desciption"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission sample color 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"B"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission sample color 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission sample color 3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission sample color 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"E"),(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission sample color 5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission blank color 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G"),(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission blank color 2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission blank color 3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission blank color 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"J"),(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"Transmission blank color 5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"K"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"Delay before acquisition of the blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"L"),(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:null},"Delay before the acquisition of the sample")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"12"),(0,i.kt)("td",{parentName:"tr",align:null},"Delay between each acquisition of a kinetic (after blank and first)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"13"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of experiments for kinetic (max 240 / (number colors + 1))")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"O"),(0,i.kt)("td",{parentName:"tr",align:null},"14"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of the next experiment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"15"),(0,i.kt)("td",{parentName:"tr",align:null},"Current time waiting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Q"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of acquisitions of 100ms that will be taken (default 10). This value could be reduced for fast kinetic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R"),(0,i.kt)("td",{parentName:"tr",align:null},"17"),(0,i.kt)("td",{parentName:"tr",align:null},"Invert the rotary button direction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"S"),(0,i.kt)("td",{parentName:"tr",align:null},"18"),(0,i.kt)("td",{parentName:"tr",align:null},"Battery voltage (hundredth of volt)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"T"),(0,i.kt)("td",{parentName:"tr",align:null},"19"),(0,i.kt)("td",{parentName:"tr",align:null},"Temperature (hundredth of degree)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"V"),(0,i.kt)("td",{parentName:"tr",align:null},"21"),(0,i.kt)("td",{parentName:"tr",align:null},"Active leds and other. A number between 0 and 63. Each bit represents a function (Red, Green, Blue, UV, Voltage, Temperature). 5 would correspond to Red and Blue (binary combination).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"W"),(0,i.kt)("td",{parentName:"tr",align:null},"22"),(0,i.kt)("td",{parentName:"tr",align:null},"Error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null},"23"),(0,i.kt)("td",{parentName:"tr",align:null},"Value of the channel that will be displayed in the result")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"24"),(0,i.kt)("td",{parentName:"tr",align:null},"Status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Z"),(0,i.kt)("td",{parentName:"tr",align:null},"25"),(0,i.kt)("td",{parentName:"tr",align:null},"Current menu")))),(0,i.kt)("p",null,"You may change the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"L"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Q"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," from the command line. To check a value just enter the corresponding uppercase letter (ie ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),") followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),". To set a value, enter the new value just after the uppercase letter (ie ",(0,i.kt)("inlineCode",{parentName:"p"},"N20")," to set 20 experiments for kinetic)."),(0,i.kt)("p",null,"To retrieve all the data acquired in a kinetic, the easiest is use the ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," command. This will dump all the acquired data. Please beware that the data is stored in the RAM and it therefore lost when the device is not powered."),(0,i.kt)("p",null,"The dumped data will contain many columns. The first column corresponds to the time (in ms) since the device was turned on, the next columns correspond to all the acquired colors.\nThe first line corresponds to the blank and the next lines to the kinetic. The values for each column are directly proportional to the quantity of light that reaches the detector. If you want to calculate the corresponding absorbance you need to subtract to each value the corresponding value of the first row."),(0,i.kt)("p",null,"There is a utility that will allows to directly ",(0,i.kt)("a",{parentName:"p",href:"http://www.cheminfo.org/?viewURL=https%3A%2F%2Fcouch.cheminfo.org%2Fcheminfo-public%2F7b6eb01da45510275179c4b587bb63f0%2Fview.json&loadversion=true&fillsearch=Analyse+spectro+log"},"convert and plot the results on-line")," (using Google Chrome)."),(0,i.kt)("p",null,"This device is also compatible with the project ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduimon"),", which can be used by programmers. The default qualifier is expected to be 21569. You may check the current qualifier of your device using the instruction ",(0,i.kt)("inlineCode",{parentName:"p"},"uq"),". You may set the qualifier using ",(0,i.kt)("inlineCode",{parentName:"p"},"uq21569"),"."))}u.isMDXComponent=!0},4248:function(e,t,n){t.Z=n.p+"assets/images/newline-c95c59481b4bf205384672c9daec6b9c.png"},4182:function(e,t,n){t.Z=n.p+"assets/images/port-7b0138c092370259abf51858069fa668.png"},7636:function(e,t){t.Z="data:image/png;base64,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"}}]);