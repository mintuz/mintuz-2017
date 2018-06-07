webpackJsonp([0x9db0b36db0b4],{322:function(e,t){e.exports={data:{site:{siteMetadata:{siteTitle:"Mintuz",siteTitlePrefix:"CSS, Javascript and Web Performance",googleVerification:"RnXDiD3_kyC6xc4y2AbSsJoXcLZvza1W7rYVHBGA89M",locale:"en_GB",siteUrl:"https:/next.mintuz.com",author:"Adam Bulmer",keywords:["Web Performance","Web Developer","Web Developer Manchester","Software Engineer Manchester","ReactJS","React","React Components"],description:"Software Engineer from Manchester writing posts on CSS, React, JavaScript and Web Performance.",twitterHandle:"@mintuz"}},markdownRemark:{id:"/Users/bulmea01/Personal/mintuz-2017/src/posts/2013-04-14-why-wep-sucks/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/Untitled-8a989e855c9c826a95787bf179ac93bd-d9514.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABcSAAAXEgFnn9JSAAACjklEQVQ4y62TW08TURSFpzeg3FJoyrVQWqCFQAuYPqq/SYTadnrhkhi0FtsQUYwI8RaURBKCPPhmjInGN/WhV+SXTJdn7TBa9cnESXbWnH3OfHvtc85oD3f3cad4H7fv3kOusI1ccRs3c0VsPdjF0fEpdnafYO/pAV68eo3j07c4PDrB1s7eRTwWLWw/auw/e4nnB4eGlojHoScTSOlJpFI6OL4RW5ZYWrqOxcVrWF5eQkyNdbVGTyaRzaRVZLC6siKxvrbaSCbiODl5Y2jqwX+IBjWbzRpaV1cXOjo60Nvbi+7ubng8HoyOjsrY6XTKHKO9vf3nuzluaWmB3W5Ha2urAAuFgqGpATo7OwXERV6vF5FIRHRqakqUBcbGxjA8PIxgMIihoSHR8fFxWCwWWK1WAebzeUOz2x0C6unpQVtbG/x+P8LhMHw+nyg/mpmZwezsrICj0ajkpqenEQqFfgNubm4amsPhkBZM4MjIiAAIpNNAIIDJyUlxS+DCwoIU5ZjRDJSWCWx2yLZYmUC6opqOzO0gmDDToc1mE+DGxq2/HXIxHdKFqfxwYmJC5ubm5qQIc9zHZqCuZwyNMJ4ugTxVbv78/Lwo3dCd2bI5xyJ0/GfLeuoCaF4PXoO+vj5xwlMnYHBwULaBOZ4unQ4MDIhL5pqBST3NU7bDYrUIlDAeSn9/vzgmwO12y7vL5RLl/WQx5tkZgYohwFQ6++tPoTu65L0knIWo//KnxGIJQwtdCsIfDuDK5avSjle1R5dsx6uUrTG4b+a7XPSLHFXtcYPdra6tG9qnzx/x7sN7fPn6DaVyGZVKFWUV1LqKmopquYJqrY5avY5KtYb62ZnSKs6+n8s6NdeoqnypVDZ+APo/5fWTxVBJAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="WEP Security"\n        title=""\n        src="/static/Untitled-8a989e855c9c826a95787bf179ac93bd-fb8a0.png"\n        srcset="/static/Untitled-8a989e855c9c826a95787bf179ac93bd-1a291.png 148w,\n/static/Untitled-8a989e855c9c826a95787bf179ac93bd-2bc4a.png 295w,\n/static/Untitled-8a989e855c9c826a95787bf179ac93bd-fb8a0.png 590w,\n/static/Untitled-8a989e855c9c826a95787bf179ac93bd-d9514.png 600w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Recently I have noticed several WEP based wireless networks around my area with the majority of them using BT Home Hubs. This angers me, it has been known for several years WEP is insecure and allows young kids with basic knowledge of computing to hack your network. Here is why…</p>\n<p>Two main versions of WEP exist, a 64bit key version and a 128bit key version. There is also a 256bit key but not all vendors support this version. All versions use an Initialisation vector of 24bits leaving a 40bit key, a 104bit key or a 232bit key.</p>\n<p>WEP works by the wireless client sending an authentication request to the access point, the AP then responds with an authentication response including a challenge text in plain format. The wireless client then encrypts the challenge text with the WEP key and transmits the encrypted data to the AP, the AP then decrypts the encrypted message and if the transmitted message text matches the challenge text of the AP authentication is successful otherwise access is denied.</p>\n<p>WEP can be cracked, by using freely available tools such as <strong>aircrack-ng</strong>. One of the main weaknesses of WEP is that the key used for authentication is also used for encrypting data on the wireless network. The same encryption key is used for each frame sent across the wireless link. By sniffing packets on the wireless network, it is possible to work out the key, which encrypted the data, and once this is known, it will also be possible to be authorised on the wireless network since it uses the same key.</p>\n<p>WEP uses RC4 as its encryption algorithm. It is a stream cipher and is weak because of the initialization vector length. The initialization vector is used to randomize the key, which is then used to encrypt the data. With a stream cipher the key used to encrypt traffic should never be used twice but because the IV is short, there is a possibility that an IV collision will occur.  24bits are used for the IV which gives you a possible 16.7 million possibilities, on a network with large amounts of traffic, this value can be met very quickly therefore the IV values will have to be reused.</p>\n<p>The IV values are also sent in clear text making it much easier to determine the key if the IV is used multiple times.</p>',excerpt:"Recently I have noticed several WEP based wireless networks around my area with the majority of them using BT Home Hubs. This angers me, it…",frontmatter:{path:"/2013/04/14/why-wep-sucks",features:"cta-contact",title:"Why WEP Sucks",date:"April 14, 2013"}}},pathContext:{path:"/2013/04/14/why-wep-sucks"}}}});
//# sourceMappingURL=path---2013-04-14-why-wep-sucks-664e68260ccda1381c0b.js.map