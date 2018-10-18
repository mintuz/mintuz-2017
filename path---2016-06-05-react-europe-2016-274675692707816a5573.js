webpackJsonp([0xe9512bb05629],{327:function(e,A){e.exports={data:{site:{siteMetadata:{siteTitle:"Mintuz",siteTitlePrefix:"CSS, Javascript and Web Performance",googleVerification:"RnXDiD3_kyC6xc4y2AbSsJoXcLZvza1W7rYVHBGA89M",locale:"en_GB",siteUrl:"https://mintuz.com",author:"Adam Bulmer",keywords:["Web Performance","Web Developer","Web Developer Manchester","Software Engineer Manchester","ReactJS","React","React Components"],description:"Software Engineer from Manchester writing posts on CSS, React, JavaScript and Web Performance.",twitterHandle:"@mintuz"}},markdownRemark:{id:"/Users/adambulmer/Projects/mintuz-blog/src/posts/2016-06-05-react-europe/index.md absPath of file >>> MarkdownRemark",html:'<p>I had a great time at React Europe Conf 2016 and thought I would share some of my opinions and things that stood out from the conference.</p>\n<h2>GraphQL <del>vs</del> and Falcor</h2>\n<p>I’ve heard of both these frameworks for retrieving data from the server but I’ve never really understood the benefits by just viewing the documentation. After seeing both these frameworks I can honestly see the advantages of using both. Having the ability to retrieve data from the server without specifying a REST endpoint is amazing, it allows you to scale your data model easily.</p>\n<p>The talk by Jafar Husain “Falcor: One Model Everywhere” demonstrated the way Falcor does it really well. He also gives credit to GraphQL saying both frameworks have a place in the ecosystem and picking the best one is subjective to your requirements. My take from his talk is that Falcor is better for smaller applications where the data model is known and that you should use GraphQL where the model may change and need to scale.</p>\n<p>Falcor is less prescriptive, has fewer concepts and a smaller file size &#x3C; 50%. It takes a segment of the model you defined and returns it from the data source. I have a few questions around how this works with a real database because the demo was using a JSON file but it’s something I am going to investigate, now I’ve seen it in action.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/CkBxU1nVEAAP8Ld-fdabd9f2720d29a1fb88cf778da27a18-9b0e7.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 133.33333333333331%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBBAYC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/9oADAMBAAIQAxAAAAGl0wuM5sYBU2s6YYiwp//EABwQAQACAgMBAAAAAAAAAAAAAAIBAwAEEBEjM//aAAgBAQABBQKuibDOvZGTCidePPNr6a93ZV4E3WFMpHE0+P/EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwFZk//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhD/2gAIAQIBAT8B1Sf/xAAdEAACAQUBAQAAAAAAAAAAAAAAARECECEiMYGR/9oACAEBAAY/ApTOfDKPbeEKh46bYJTNW0TU5t//xAAbEAADAQEBAQEAAAAAAAAAAAAAAREhMXEQYf/aAAgBAQABPyF4QUc049eiWk/1EvYRx8G1vbJrBaTulVlJ8tQqanYyAyyxfP/aAAwDAQACAAMAAAAQgAi//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxBBjps7Yc5f/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxDmXJSFNv/EAB8QAQADAAIBBQAAAAAAAAAAAAEAESExYUFRcYGhsf/aAAgBAQABPxBtVktuXNNh0v1L16eK2WCWKuewS1GvdnM11fsyz8fABedSJuvECfEX1zBpIqlcWCzv1j5Q2PgirrP/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CkBxU1nVEAAP8Ld"\n        title=""\n        src="/static/CkBxU1nVEAAP8Ld-fdabd9f2720d29a1fb88cf778da27a18-f8fb9.jpg"\n        srcset="/static/CkBxU1nVEAAP8Ld-fdabd9f2720d29a1fb88cf778da27a18-e8976.jpg 148w,\n/static/CkBxU1nVEAAP8Ld-fdabd9f2720d29a1fb88cf778da27a18-63df2.jpg 295w,\n/static/CkBxU1nVEAAP8Ld-fdabd9f2720d29a1fb88cf778da27a18-f8fb9.jpg 590w,\n/static/CkBxU1nVEAAP8Ld-fdabd9f2720d29a1fb88cf778da27a18-9b0e7.jpg 600w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The talk by Laney Kuenzel and Lee Byron named “GraphQL Future” was a nice insight into the ways Facebook use GraphQL and what they have planned for it in the future. They talk a little bit about the different experiments they are running with GraphQL and working on the BBC LIVE product I can really see how the directive @live in GraphQL will change the future of real time updates in applications. For their demo’s they also used <a href="https://github.com/graphql/graphiql">graphiql</a> which looks really cool for testing out your graphQL queries.</p>\n<p>Both talks were really well executed and two of the best talks at React Europe Conf 2016.</p>\n<h2>Carte Blanche</h2>\n<p>The Evolution of React UI Development by Max Stoiber and Nik Graf stole the show for me. With the announcement of <a href="https://github.com/carteb/carte-blanche">carte-blanche</a> , a tool to help you see components individually, explore them in different states, and quickly develop them confidently will really change my development workflow. Honestly check this out, having a dependency tree with loads of components is a pain when you want to quickly develop, it may mean you have to npm link your dependency tree but with carte-blanche that’s no longer necessary.</p>\n<h2>A Deep dive into things…</h2>\n<p>Oh my god, these talks! The subjects were around the inner workings of React Native and Flow and how they’ve been optimised. Most developers probably don’t care about this and to be honest shouldn’t care.  It may have been just me but this much information at a conference can be overwhelming. I think the picture below demonstrates how intense it got. Talks should be composed of quick and snappy bit’s of information which can easily be digested. Then again I may be just stupid because people on Twitter seemed to have enjoy the talks.</p>\n<p>I am however going to re-watch these talks to make sure it wasn’t just the long day that caused me to feel overwhelmed. I’m sure there’s some value in these talks I just couldn’t see it on the day.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/CkAejpiUYAEvOOg-334987faa4b8cf05cdc0fe0f37a13dde-9b0e7.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 133.33333333333331%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAFOPLzPODkmqWfS0ReZf//EAB0QAAEEAwEBAAAAAAAAAAAAAAIAAQMEESEzEBL/2gAIAQEAAQUCx5tRclMOSaT4BrAuinFWCdwi52Nyf//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwFnC//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAICAgMAAAAAAAAAAAAAAAABAhAhgQMRMf/aAAgBAQAGPwK41oXcWYTPDJxmj//EABoQAAMBAQEBAAAAAAAAAAAAAAABESFxUTH/2gAIAQEAAT8hvxkfrOjPAvBKHEFqLzK8GGrjKtddZBtlHyi+edGdGP/aAAwDAQACAAMAAAAQ7BhN/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EHLGrBbF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxAqGspEf//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExQVFhcZHB/9oACAEBAAE/ECsSjupW6Iid/sdY28vbAqWIfEodYaDtgqg8A/ZT6HOBSJN2GgGHLFLVB3L6zSyEdctsELaj9n//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CkAejpiUYAEvOOg"\n        title=""\n        src="/static/CkAejpiUYAEvOOg-334987faa4b8cf05cdc0fe0f37a13dde-f8fb9.jpg"\n        srcset="/static/CkAejpiUYAEvOOg-334987faa4b8cf05cdc0fe0f37a13dde-e8976.jpg 148w,\n/static/CkAejpiUYAEvOOg-334987faa4b8cf05cdc0fe0f37a13dde-63df2.jpg 295w,\n/static/CkAejpiUYAEvOOg-334987faa4b8cf05cdc0fe0f37a13dde-f8fb9.jpg 590w,\n/static/CkAejpiUYAEvOOg-334987faa4b8cf05cdc0fe0f37a13dde-9b0e7.jpg 600w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Redux Analytics</h2>\n<p>Before this talk I didn’t really think about how much of a pain it is to set up analytics in an application but my general approach was to hook into some sort of event such as a click event and then send some data from the client to the server. Bertrand Karerangabo and Evan Schultz demonstrated a neat way of using redux middleware to track analytics without much configuration. Because Redux uses a single store and provides a single location for state changes, their middleware hooks into the redux event loop and its from there we can learn a lot about a user and what current state the application is in. So simple but so powerful that until this point I had overlooked the possibilities of using Redux for analytics.</p>\n<h2>Lightning Talks</h2>\n<p>Phil Holden, you were a beast. demonstrating <a href="https://github.com/philholden/redux-swarmlog">redux-swarmlog</a>. A super simple way of writing distributed Redux applications. The <a href="https://github.com/reactjs/redux">Redux</a> action log is persisted in an IndexDB and synced with other peers via a <a href="https://github.com/mafintosh/webrtc-swarm">WebRTC Swarm</a> using <a href="https://github.com/substack/swarmlog">Swarmlog</a>. (honestly didn’t just copy and paste that from the README file :P)</p>\n<p>Ken Wheeler demonstrated <a href="https://github.com/FormidableLabs/victory">Victory</a>, a cross platform charting library. I’ve been looking for a charting library for a while and this will definitely be used in my new application I am writing in React Native.</p>\n<h2>Conclusion</h2>\n<p>I had an amazing time at React Europe 2016 and certainly recommend going next year if you can. Lots of insight, Lots of swag and great atmosphere. Now it’s time to play with all these new toys. I’m looking at you <a href="https://github.com/carteb/carte-blanche">carte-blanche</a></p>',excerpt:"I had a great time at React Europe Conf 2016 and thought I would share some of my opinions and things that stood out from the conference…",frontmatter:{path:"/2016/06/05/react-europe-2016",features:"cta-contact",title:"React Europe Conf 2016",date:"June 05, 2016"}}},pathContext:{path:"/2016/06/05/react-europe-2016"}}}});
//# sourceMappingURL=path---2016-06-05-react-europe-2016-274675692707816a5573.js.map