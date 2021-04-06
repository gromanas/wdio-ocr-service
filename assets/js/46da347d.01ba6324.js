(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(87)),r={title:"Test execution time"},s={unversionedId:"more-test-optimization",id:"more-test-optimization",isDocsHomePage:!1,title:"Test execution time",description:"By default this module will check if you have a local installation of Tesseract on your machine/in your pipeline. If you",source:"@site/docs/more-test-optimization.md",slug:"/more-test-optimization",permalink:"/wdio-ocr-service/more-test-optimization",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/more-test-optimization.md",version:"current",sidebar:"docs",previous:{title:"Frequently asked questions",permalink:"/wdio-ocr-service/more-faq"}},c=[{value:"Re-using already processed images",id:"re-using-already-processed-images",children:[]},{value:"Cropping the search area of a screen",id:"cropping-the-search-area-of-a-screen",children:[]},{value:"Using a local installation of Tesseract",id:"using-a-local-installation-of-tesseract",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default this module will check if you have a local installation of Tesseract on your machine/in your pipeline. If you\ndon't have a local installation it will automatically use a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/naptha/tesseract.js"},"NodeJS")," version.\nThis might cause some slowness because the image processing will be done by Node.js. NodeJS is not the best system to do\nheavy processing."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"BUT...."),", there are ways to optimize the execution time. Let's take the following test script"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"describe('My first OCR test', () => {\n    it('should be able to login with the new selectors', () => {\n        // Wait for the initial screen to be shown\n        driver.ocrWaitForTextDisplayed('Username')\n\n        // Sign in\n        driver.ocrSetValue('Username', 'standard_user')\n        driver.ocrSetValue('Password', 'secret_sauce')\n        driver.ocrClickOnText('Login')\n\n        // Wait for the text to be displayed\n        driver.ocrWaitForTextDisplayed('PRODUCTS')\n\n        // Assert that the page is shown\n        expect(driver.ocrGetText()).toContain('PRODUCTS')\n    })\n})\n")),Object(o.b)("p",null,"When you execute this for the first time on a local Android emulator and a local iOS simulator you might see the\nfollowing results."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"[emulator-5554 Android 10 #0-0] Spec: /tests/e2e/specs/ocr.spec.ts\n[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk\n[emulator-5554 Android 10 #0-0] Session ID: fd1b629c-77bb-42f2-8dbf-006c8a18e0c3\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] My first OCR test\n[emulator-5554 Android 10 #0-0]    \u2713 should be able to login with the new selectors\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] 1 passing (2m 0.4s)\n------------------------------------------------------------------\n[iPhone 11 iOS 14.2 #1-0] Spec: /tests/e2e/specs/ocr.spec.ts\n[iPhone 11 iOS 14.2 #1-0] Running: iPhone 11 on iOS 14.2 executing /apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.zip\n[iPhone 11 iOS 14.2 #1-0] Session ID: 1df326fa-ae0a-41be-b4aa-6e0e76b69fef\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] My first OCR test\n[iPhone 11 iOS 14.2 #1-0]    \u2713 should be able to login with the new selectors\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] 1 passing (2m 34.7s)\n")),Object(o.b)("h2",{id:"re-using-already-processed-images"},"Re-using already processed images"),Object(o.b)("p",null,"You can optimize the execution time by re-using the already processed images by providing the option ",Object(o.b)("inlineCode",{parentName:"p"},"{reuseOcr: true}"),"\nfor the following commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-click-on-text"},Object(o.b)("inlineCode",{parentName:"a"},"ocrClickOnText"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-get-element-position-by-text"},Object(o.b)("inlineCode",{parentName:"a"},"ocrGetElementPositionByText"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-get-text"},Object(o.b)("inlineCode",{parentName:"a"},"ocrGetText"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-set-value"},Object(o.b)("inlineCode",{parentName:"a"},"ocrSetValue"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-set-value"},Object(o.b)("inlineCode",{parentName:"a"},"ocrSetValue")))),Object(o.b)("p",null,"If you would then change the script to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"describe('My OCR first test', () => {\n    it('should be able to login with new ocr selectors', () => {\n        // Wait for the initial screen to be shown\n        driver.ocrWaitForTextDisplayed('Username')\n\n        // Sign in\n        driver.ocrSetValue('Username', 'standard_user', {reuseOcr: true})\n        driver.ocrSetValue('Password', 'secret_sauce', {reuseOcr: true})\n        driver.ocrClickOnText('Login', {reuseOcr: true})\n\n        // Wait for the text to be displayed\n        driver.ocrWaitForTextDisplayed('PRODUCTS')\n\n        // Assert that the page is shown\n        expect(driver.ocrGetText({reuseOcr: true})).toContain('PRODUCTS')\n    })\n})\n")),Object(o.b)("p",null,"Then you will see a different execution time."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"[iPhone 11 iOS 14.2 #1-0] Spec: /tests/e2e/specs/ocr.spec.ts\n[iPhone 11 iOS 14.2 #1-0] Running: iPhone 11 on iOS 14.2 executing /apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.zip\n[iPhone 11 iOS 14.2 #1-0] Session ID: 7522423c-7b72-4c60-915f-eccd1caed11d\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] My first OCR test\n[iPhone 11 iOS 14.2 #1-0]    \u2713 should be able to login with the new selectors\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] 1 passing (1m 6.6s)\n------------------------------------------------------------------\n[emulator-5554 Android 10 #0-0] Spec: /tests/e2e/specs/ocr.spec.ts\n[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk\n[emulator-5554 Android 10 #0-0] Session ID: 9011c9ca-b617-423b-b55a-f3a64bfae9e5\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] My first OCR test\n[emulator-5554 Android 10 #0-0]    \u2713 should be able to login with the new selectors\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] 1 passing (1m 11.3s)\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Re-use images")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This reduced the local execution time from ",Object(o.b)("strong",{parentName:"p"},"2 minutes")," to ",Object(o.b)("strong",{parentName:"p"},"1 minute"),"."))),Object(o.b)("h2",{id:"cropping-the-search-area-of-a-screen"},"Cropping the search area of a screen"),Object(o.b)("p",null,"You can optimize the execution time by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AND")," re-using the already processed images by providing the option ",Object(o.b)("inlineCode",{parentName:"li"},"{reuseOcr: true}"),", see\n",Object(o.b)("a",{parentName:"li",href:"#re-using-already-processed-images"},"Re-using already processed images"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AND")," by providing a cropped area for Android and or iOS to execute the OCR on.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Be aware of the fact that each device has its own screen resolution. You need to understand that this could lead to\ndifferent text in that cropped area because a smaller screen will hold less information than a bigger screen."))),Object(o.b)("p",null,"You can provide ",Object(o.b)("strong",{parentName:"p"},"AND")," Android ",Object(o.b)("strong",{parentName:"p"},"AND")," iOS rectangles through the options for the following commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-click-on-text"},Object(o.b)("inlineCode",{parentName:"a"},"ocrClickOnText"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-get-element-position-by-text"},Object(o.b)("inlineCode",{parentName:"a"},"ocrGetElementPositionByText"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-get-text"},Object(o.b)("inlineCode",{parentName:"a"},"ocrGetText"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-set-value"},Object(o.b)("inlineCode",{parentName:"a"},"ocrSetValue"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-set-value"},Object(o.b)("inlineCode",{parentName:"a"},"ocrSetValue"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ocr-wait-for-text-displayed"},Object(o.b)("inlineCode",{parentName:"a"},"ocrWaitForTextDisplayed")))),Object(o.b)("p",null,"in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"{\n  androidRectangles: {\n    top: number;\n    left: number;\n    right: number;\n    bottom: number;\n  },\n  {\n    iOSRectangles: {\n      top: number;\n      left: number;\n      right: number;\n      bottom: number;\n    }\n  }\n}\n")),Object(o.b)("p",null,"If you would then change the script to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"describe('My OCR first test', () => {\n  it('should be able to login with new ocr selectors and cropped images', () => {\n    // Wait for the initial screen to be shown\n    driver.ocrWaitForTextDisplayed(\n      'Username',\n      {\n        iOSRectangles: {\n          top: 300,\n          left: 70,\n          right: 750,\n          bottom: 745,\n        },\n        androidRectangles: {\n          top: 400,\n          left: 100,\n          right: 1000,\n          bottom: 1100,\n        }\n      }\n    )\n\n    // Sign in\n    driver.ocrSetValue('Username', 'standard_user', {reuseOcr: true})\n    driver.ocrSetValue('Password', 'secret_sauce', {reuseOcr: true})\n    driver.ocrClickOnText('Login', {reuseOcr: true})\n\n    // Wait for the text to be displayed\n    driver.ocrWaitForTextDisplayed(\n      'PRODUCTS',\n      {\n        iOSRectangles: {\n          top: 200,\n          left: 0,\n          right: 800,\n          bottom: 400,\n        },\n        androidRectangles: {\n          top: 160,\n          left: 0,\n          right: 800,\n          bottom: 360,\n        }\n      }\n    )\n\n    // Assert that the page is shown\n    expect(driver.ocrGetText({reuseOcr: true})).toContain('PRODUCTS')\n  })\n})\n")),Object(o.b)("p",null,"Then you will see a different execution time."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"[iPhone 11 iOS 14.2 #1-0] Spec: tests/e2e/specs/ocr.spec.ts\n[iPhone 11 iOS 14.2 #1-0] Running: iPhone 11 on iOS 14.2 executing apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.zip\n[iPhone 11 iOS 14.2 #1-0] Session ID: a1e59b85-62c7-455c-8037-952dd03f1821\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] My OCR first test\n[iPhone 11 iOS 14.2 #1-0]    \u2713 should be able to login with new ocr selectors and cropped images\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] 1 passing (18.6s)\n------------------------------------------------------------------\n[emulator-5554 Android 10 #0-0] Spec: tests/e2e/specs/ocr.spec.ts\n[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk\n[emulator-5554 Android 10 #0-0] Session ID: b5b37a08-562e-412b-9efb-2dd6b87b9cf2\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] My OCR first test\n[emulator-5554 Android 10 #0-0]    \u2713 should be able to login with new ocr selectors and cropped images\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] 1 passing (25s)\n\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Cropping images")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This reduced the local execution time from ",Object(o.b)("strong",{parentName:"p"},"2 minutes")," to ",Object(o.b)("strong",{parentName:"p"},"20-25 seconds!"),"."))),Object(o.b)("h2",{id:"using-a-local-installation-of-tesseract"},"Using a local installation of Tesseract"),Object(o.b)("p",null,"You can speed up your execution time to even less than a minute if you would have a local installation of Tessarect on\nyour local machine and or in your pipeline (more information about installing Tesseract on your local system can be\nfound ",Object(o.b)("a",{parentName:"p",href:"https://tesseract-ocr.github.io/tessdoc/Installation.html"},"here"),"). You can find the execution time of the same\nscript using a local installation of Tesseract below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"[iPhone 11 iOS 14.2 #1-0] Spec: /tests/e2e/specs/ocr.spec.ts\n[iPhone 11 iOS 14.2 #1-0] Running: iPhone 11 on iOS 14.2 executing /apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.zip\n[iPhone 11 iOS 14.2 #1-0] Session ID: 27cf6492-c46f-40da-b88d-0cc7fe967234\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] My first OCR test\n[iPhone 11 iOS 14.2 #1-0]    \u2713 should be able to login with the new selectors\n[iPhone 11 iOS 14.2 #1-0]\n[iPhone 11 iOS 14.2 #1-0] 1 passing (12.3s)\n------------------------------------------------------------------\n[emulator-5554 Android 10 #0-0] Spec: /tests/e2e/specs/ocr.spec.ts\n[emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk\n[emulator-5554 Android 10 #0-0] Session ID: 2297f075-7991-4486-a161-5877be38955c\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] My first OCR test\n[emulator-5554 Android 10 #0-0]    \u2713 should be able to login with the new selectors\n[emulator-5554 Android 10 #0-0]\n[emulator-5554 Android 10 #0-0] 1 passing (17.2s)\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Local installation")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This reduced the local execution time from ",Object(o.b)("strong",{parentName:"p"},"2 minutes")," to ",Object(o.b)("strong",{parentName:"p"},"15-20 seconds!"),"."))))}p.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);