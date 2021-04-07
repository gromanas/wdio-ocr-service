(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{131:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/processing-steps-384ca0dab806a16bd6c9e7972d9e3774.png"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(87)),i={title:"What is wdio-ocr-service",slug:"/"},c={unversionedId:"what-is-wdio-ocr-service",id:"what-is-wdio-ocr-service",isDocsHomePage:!1,title:"What is wdio-ocr-service",description:"Background",source:"@site/docs/what-is-wdio-ocr-service.md",slug:"/",permalink:"/wdio-ocr-service/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/what-is-wdio-ocr-service.md",version:"current",sidebar:"docs",next:{title:"Getting Started",permalink:"/wdio-ocr-service/getting-started"}},s=[{value:"Background",id:"background",children:[{value:"How does it work",id:"how-does-it-work",children:[]}]}],l={toc:s};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"background"},"Background"),Object(o.b)("p",null,"Sometimes it can be hard to find an element in a native app with the default\n",Object(o.b)("a",{parentName:"p",href:"https://webdriver.io/docs/selectors#mobile-selectors"},"WebdriverIO Mobile selectors"),". In that case it would be nice if\nyou would be able to use something like OCR\n(",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Optical_character_recognition"},"Optical Character Recognition"),") to interact with elements\non your screen."),Object(o.b)("p",null,"This service provides you ",Object(o.b)("strong",{parentName:"p"},"that")," option to interact with elements on your mobile screen based on ",Object(o.b)("strong",{parentName:"p"},"visible text"),". It\nwill provide ",Object(o.b)("a",{parentName:"p",href:"./ocr-click-on-text"},"multiple commands")," to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wait"),Object(o.b)("li",{parentName:"ul"},"search"),Object(o.b)("li",{parentName:"ul"},"and interact")),Object(o.b)("p",null,"with an element, all based on text."),Object(o.b)("h3",{id:"how-does-it-work"},"How does it work"),Object(o.b)("p",null,"This service will"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"create a screenshot of your screen"),Object(o.b)("li",{parentName:"ol"},"optimize the result for OCR by turning the screenshot into a black/white with a high contrast screenshot (the high\ncontrast is needed to prevent a lot of image background noise)."),Object(o.b)("li",{parentName:"ol"},"uses ",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Optical_character_recognition"},"Optical Character Recognition")," from\n",Object(o.b)("a",{parentName:"li",href:"https://github.com/tesseract-ocr/tesseract"},"Tesseract")," to get all text from the screen and highlight all found text\non an image"),Object(o.b)("li",{parentName:"ol"},"uses Fuzzy Logic from ",Object(o.b)("a",{parentName:"li",href:"https://fusejs.io/"},"Fuse.js")," to find strings that are ",Object(o.b)("em",{parentName:"li"},"approximately equal")," to a given pattern\n(rather than exactly). This means for example that the search value ",Object(o.b)("inlineCode",{parentName:"li"},"Username")," can also find the text ",Object(o.b)("inlineCode",{parentName:"li"},"Usename")," or\nvisa versa.")),Object(o.b)("p",null,"An example of step 1, 2 and 3 can be found in this image"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Process steps",src:n(131).default})),Object(o.b)("p",null,"It works with ",Object(o.b)("strong",{parentName:"p"},"ZERO")," system dependencies (besides from what WebdriverIO uses), but if needed it can also work with a\nlocal installation from ",Object(o.b)("a",{parentName:"p",href:"https://tesseract-ocr.github.io/tessdoc/"},"Tesseract")," which will reduce the execution time\ndrastically! (See also the ",Object(o.b)("a",{parentName:"p",href:"#test-execution-optimization"},"Test Execution Optimization")," on how to speed up your tests.)"),Object(o.b)("p",null,"Enthusiastic? Start using it today by following the ",Object(o.b)("a",{parentName:"p",href:"./getting-started"},"installation")," instructions below."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"There are a variety of reasons you might not get good quality output from Tesseract. One of the biggest reasons that\ncould be related to your app and this module could be the fact that there is no proper color distinguish between the\ntext that needs to be found, and the background. For example, a white text on a dark background can ",Object(o.b)("em",{parentName:"p"},"easily")," be found,\nbut a light text on a white background or a dark text on a dark background can hardly be found."),Object(o.b)("p",{parentName:"div"},"See also ",Object(o.b)("a",{parentName:"p",href:"https://tesseract-ocr.github.io/tessdoc/ImproveQuality"},"this page")," for more information from Tesseract."),Object(o.b)("p",{parentName:"div"},"Also don't forget to read the ",Object(o.b)("a",{parentName:"p",href:"./more-faq"},"FAQ"),"."))))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);