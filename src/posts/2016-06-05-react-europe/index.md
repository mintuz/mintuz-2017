---
title: React Europe Conf 2016
date: "2016-06-05T22:40:32.169Z"
path: "/2016/06/05/react-europe-2016"
---

I had a great time at React Europe Conf 2016 and thought I would share some of my opinions and things that stood out from the conference.

## GraphQL <del>vs</del> and Falcor

I've heard of both these frameworks for retrieving data from the server but I've never really understood the benefits by just viewing the documentation. After seeing both these frameworks I can honestly see the advantages of using both. Having the ability to retrieve data from the server without specifying a REST endpoint is amazing, it allows you to scale your data model easily.

The talk by Jafar Husain "Falcor: One Model Everywhere" demonstrated the way Falcor does it really well. He also gives credit to GraphQL saying both frameworks have a place in the ecosystem and picking the best one is subjective to your requirements. My take from his talk is that Falcor is better for smaller applications where the data model is known and that you should use GraphQL where the model may change and need to scale.

Falcor is less prescriptive, has fewer concepts and a smaller file size < 50%. It takes a segment of the model you defined and returns it from the data source. I have a few questions around how this works with a real database because the demo was using a JSON file but it's something I am going to investigate, now I've seen it in action.

![CkBxU1nVEAAP8Ld](/wp-content/uploads/2016/06/CkBxU1nVEAAP8Ld.jpg)

The talk by Laney Kuenzel and Lee Byron named "GraphQL Future" was a nice insight into the ways Facebook use GraphQL and what they have planned for it in the future. They talk a little bit about the different experiments they are running with GraphQL and working on the BBC LIVE product I can really see how the directive @live in GraphQL will change the future of real time updates in applications. For their demo's they also used [graphiql](https://github.com/graphql/graphiql) which looks really cool for testing out your graphQL queries.

Both talks were really well executed and two of the best talks at React Europe Conf 2016.

## Carte Blanche

The Evolution of React UI Development by Max Stoiber and Nik Graf stole the show for me. With the announcement of [carte-blanche](https://github.com/carteb/carte-blanche) , a tool to help you see components individually, explore them in different states, and quickly develop them confidently will really change my development workflow. Honestly check this out, having a dependency tree with loads of components is a pain when you want to quickly develop, it may mean you have to npm link your dependency tree but with carte-blanche that's no longer necessary.

## A Deep dive into things...

Oh my god, these talks! The subjects were around the inner workings of React Native and Flow and how they've been optimised. Most developers probably don't care about this and to be honest shouldn't care.  It may have been just me but this much information at a conference can be overwhelming. I think the picture below demonstrates how intense it got. Talks should be composed of quick and snappy bit's of information which can easily be digested. Then again I may be just stupid because people on Twitter seemed to have enjoy the talks.

I am however going to re-watch these talks to make sure it wasn't just the long day that caused me to feel overwhelmed. I'm sure there's some value in these talks I just couldn't see it on the day.

![CkAejpiUYAEvOOg](/wp-content/uploads/2016/06/CkAejpiUYAEvOOg.jpg)

## Redux Analytics

Before this talk I didn't really think about how much of a pain it is to set up analytics in an application but my general approach was to hook into some sort of event such as a click event and then send some data from the client to the server. Bertrand Karerangabo and Evan Schultz demonstrated a neat way of using redux middleware to track analytics without much configuration. Because Redux uses a single store and provides a single location for state changes, their middleware hooks into the redux event loop and its from there we can learn a lot about a user and what current state the application is in. So simple but so powerful that until this point I had overlooked the possibilities of using Redux for analytics.

## Lightning Talks

Phil Holden, you were a beast. demonstrating [redux-swarmlog](https://github.com/philholden/redux-swarmlog). A super simple way of writing distributed Redux applications. The [Redux](https://github.com/reactjs/redux) action log is persisted in an IndexDB and synced with other peers via a [WebRTC Swarm](https://github.com/mafintosh/webrtc-swarm) using [Swarmlog](https://github.com/substack/swarmlog). (honestly didn't just copy and paste that from the README file :P)

Ken Wheeler demonstrated [Victory](https://github.com/FormidableLabs/victory), a cross platform charting library. I've been looking for a charting library for a while and this will definitely be used in my new application I am writing in React Native.

## Conclusion

I had an amazing time at React Europe 2016 and certainly recommend going next year if you can. Lots of insight, Lots of swag and great atmosphere. Now it's time to play with all these new toys. I'm looking at you [carte-blanche](https://github.com/carteb/carte-blanche)
