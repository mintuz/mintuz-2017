---
title: Hybrid iOS development isn't over yet
date: "2015-03-15T22:40:32.169Z"
path: "/2015/03/15/hybrid-ios-development-isnt-over-yet"
features: "cta-contact"
---

To give you a bit of background, I have been working on an iOS application for a while now and I've got the majority of it written using Node.js for the backend and Swift for the actual app.

Now onto the problem that I encountered, originally I was going to create the UI using the native API but if you have done any iOS development you will know how much of a pain this can be, and how much it can slow you down. So I looked for alternatives.

I know Cordova exists but I didn't want to cut out the ability to write native code and the plugin system used in Cordova just wasn't up to scratch. It can also suffer from performance issues which I will discuss below.

I then watched the conference Facebook hosted about [React Native](https://code.facebook.com/videos/786462671439502/react-js-conf-2015-keynote-introducing-react-native-/) and I was/still am excited for this to be released but after a month of waiting I couldn't wait any longer. I will probably port over to using React Native once it is released, being a massive JavaScript developer and a fan of React.JS, the ability to render native UI components seems to good of an opportunity to miss.

So I looked to create my own Hybrid iOS application using swift for the bulk of my application and render any views with a cheeky UIWebView and pass data through. The problem with this is, a UIWebView has performance limitations because it does not have access to the Nitro JIT JavaScript engine present in the stock Safari app. Not having access to certain features meant my app would not feel like a native application and that just wasn't acceptable. I wanted to provide a high quality app to all my users.

I then remembered the WWDC2014 talk that introduced the WKWebView component. This little gem changes everything about how we should build hybrid applications. It has performance equivalent to Safari and hybrid apps will receive a notable performance increase just by switching to the new API.

WKWebView has a refined API making it easier to bridge data between native code and JavaScript. Their are a few bugs worth noting though. First of all, you have to programmatically implement it, It is not supported using the StoryBoard. Secondly it cannot load a HTML file using .**loadRequest(url) **you have to load a HTML String, these issues have both been raised with Apple and hopefully they will get fixed in a later release.
