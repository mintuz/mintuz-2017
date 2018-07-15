webpackJsonp([65705116096434],{323:function(e,t){e.exports={data:{site:{siteMetadata:{siteTitle:"Mintuz",siteTitlePrefix:"CSS, Javascript and Web Performance",googleVerification:"RnXDiD3_kyC6xc4y2AbSsJoXcLZvza1W7rYVHBGA89M",locale:"en_GB",siteUrl:"https://mintuz.com",author:"Adam Bulmer",keywords:["Web Performance","Web Developer","Web Developer Manchester","Software Engineer Manchester","ReactJS","React","React Components"],description:"Software Engineer from Manchester writing posts on CSS, React, JavaScript and Web Performance.",twitterHandle:"@mintuz"}},markdownRemark:{id:"/Users/adambulmer/Projects/mintuz-blog/src/posts/2015-03-15-hybrid-ios-development-isnt-over-yet/index.md absPath of file >>> MarkdownRemark",html:'<p>To give you a bit of background, I have been working on an iOS application for a while now and I’ve got the majority of it written using Node.js for the backend and Swift for the actual app.</p>\n<p>Now onto the problem that I encountered, originally I was going to create the UI using the native API but if you have done any iOS development you will know how much of a pain this can be, and how much it can slow you down. So I looked for alternatives.</p>\n<p>I know Cordova exists but I didn’t want to cut out the ability to write native code and the plugin system used in Cordova just wasn’t up to scratch. It can also suffer from performance issues which I will discuss below.</p>\n<p>I then watched the conference Facebook hosted about <a href="https://code.facebook.com/videos/786462671439502/react-js-conf-2015-keynote-introducing-react-native-/">React Native</a> and I was/still am excited for this to be released but after a month of waiting I couldn’t wait any longer. I will probably port over to using React Native once it is released, being a massive JavaScript developer and a fan of React.JS, the ability to render native UI components seems to good of an opportunity to miss.</p>\n<p>So I looked to create my own Hybrid iOS application using swift for the bulk of my application and render any views with a cheeky UIWebView and pass data through. The problem with this is, a UIWebView has performance limitations because it does not have access to the Nitro JIT JavaScript engine present in the stock Safari app. Not having access to certain features meant my app would not feel like a native application and that just wasn’t acceptable. I wanted to provide a high quality app to all my users.</p>\n<p>I then remembered the WWDC2014 talk that introduced the WKWebView component. This little gem changes everything about how we should build hybrid applications. It has performance equivalent to Safari and hybrid apps will receive a notable performance increase just by switching to the new API.</p>\n<p>WKWebView has a refined API making it easier to bridge data between native code and JavaScript. Their are a few bugs worth noting though. First of all, you have to programmatically implement it, It is not supported using the StoryBoard. Secondly it cannot load a HTML file using .**loadRequest(url) **you have to load a HTML String, these issues have both been raised with Apple and hopefully they will get fixed in a later release.</p>',excerpt:"To give you a bit of background, I have been working on an iOS application for a while now and I’ve got the majority of it written using…",frontmatter:{path:"/2015/03/15/hybrid-ios-development-isnt-over-yet",features:"cta-contact",title:"Hybrid iOS development isn't over yet",date:"March 15, 2015"}}},pathContext:{path:"/2015/03/15/hybrid-ios-development-isnt-over-yet"}}}});
//# sourceMappingURL=path---2015-03-15-hybrid-ios-development-isnt-over-yet-6460ed5e9c773203dc3d.js.map