---
title: Composable React Components
date: "2016-05-19T22:40:32.169Z"
path: "/2016/05/19/composable-react-components"
type: "post"
features: "cta-contact"
---

Hello in this blog post I want to talk about a problem I have recently had within the BBC Live team and how we solved it. To begin with I should probably give you a little bit of context to the problem.

I joined the BBC Homepage team at the end of 2014, at the same time ReactJS was really gaining traction within the web development community and people were releasing reusable components through npm. Awesome I thought... All these free components to use for my own use, I wonder if I could do something similar within the BBC because we have a [Promo](http://www.bbc.co.uk/gel/guidelines/promos) design pattern which is used all over the BBC implemented by different teams in different languages.

![promo](promo.png)

This obviously leads to loads of code duplication and the same bugs/challenges will occur.

## Old Approach

The first iteration of the promo component I worked on was tightly coupled to the homepage codebase. The homepage codebase is comprised of several different modules, for example we have a top stories module and a tv radio module. Both modules make use of the promo design pattern. However the data for each module is passed down and it's the modules responsibility to build the DOM for the Promo.

https://gist.github.com/mintuz/5f756c3e63767a5d8ab69ee36ec6ef63#file-top-down-approach-jsx The problem with this approach is that it's not very configurable and if the UX guys fancy changing the visual look of one of the promos, maybe for an important event or if it's a breaking news item then it means passing more data into the module and having a bunch of conditionals to add custom CSS classes and we might need to change the markup slightly as well.

This approach works well for the homepage because it's not got many promo variants so it doesn't need granular control over a promos DOM structure and CSS classes. This isn't to say the homepage isn't complicated but there wasn't a need to over engineer a solution that would work for multiple use cases.

## Problem

So fast forward to 2016 and I am now apart of the BBC Live team which is responsible for Live Pages, Live Guide and Live Promo products. Each product makes use of the promo design pattern but the use cases are slightly different. The Live Page is mainly concerned with the 4th promo variant in the mock up above and the Live Promo uses the same variant but at smaller screen sizes, the content overlays the image and gains a transparent gradient. There are loads of similarities between both promo styles so we needed a way to share code so we didn't end up duplicating code.

## Solution - How to make composable React components

By the time we reached this problem, I had been playing around with React Native and had gotten used to the idea of using [this.props.children](https://facebook.github.io/react/tips/children-props-type.html) to make components composable. It allows you to nest components as you would with DOM elements and allows each component to handle it's own use cases, preventing one component doing everything.

Another benefit of building components like this is that we can make each element within the promo a separate npm package making it reusable and useful by itself. If we use the this.props.children property correctly it also allows us to cut down on our dependency tree bringing in all our dependencies at the same point and not having components requiring components.

Variant 4 may look a little something like this in the code using this approach.

https://gist.github.com/mintuz/5f756c3e63767a5d8ab69ee36ec6ef63#file-composable-approach-1-jsx The same promo may look a little something like this if we want the content to overlay the image at a certain breakpoint. The great thing about this.props.children is it allows us to nest DOM elements and custom components, so you can add bits of code which are specific to your use case.

https://gist.github.com/mintuz/5f756c3e63767a5d8ab69ee36ec6ef63#file-composable-approach-2-jsx So these two examples use a lot of the promo elements available to us but what about when we have no image or we don't care about tags. Suddenly we've created variant 1 (No image)

https://gist.github.com/mintuz/5f756c3e63767a5d8ab69ee36ec6ef63#file-composable-approach-basic-jsx I hope this has demonstrated how powerful this.props.children can be and how it can help you build UI elements that are reusable and flexible enough to allow you to compose components and different variants of a component.
