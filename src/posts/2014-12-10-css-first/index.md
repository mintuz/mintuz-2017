---
title: CSS First
date: "2014-12-10T22:40:32.169Z"
path: "/2014/12/10/css-first"
---

Let me start by saying not every codebase I have worked on have had the issues I'm about to talk about and some projects were executed extremely well. This blog post is more of a general rant to the web community as a whole.

Why is it that CSS is not treated as a first class citizen in projects? We spend hours optimising backend code and javascript frontend code but CSS is put to the side if it works and left for the next developer to pick up and fight with.

CSS should be planned from the very start of development, from architecture planning to the naming of classes. However this is not the case and is left until the end, with no thought of the implications when doing X. I've seen comments like "if it works why does it matter" and "it's just CSS" and "ugh CSS is hard".

Hopefully I am going to give a counter argument for each one of those points and actually change peoples attitudes towards CSS.

## if it works why does it matter

I have worked on a project in the past that “just worked” but a major bit of development needed to happen which meant some of the CSS needed refactoring. It had a bunch of hacks in it that worked fine for that specific scenario but as soon as we started altering properties, the code fell on its arse. It probably wasn’t the developers fault these hacks were put in place. He or she had a deadline to meet and I am assuming these hacks were for a quick fix.

The problem however is that they did not think about the implications for future developers, our deadline was met but we had to cut out certain features because we spent a lot of the time fixing code that was previously written. If time was spent planning the CSS those hacks probably wouldn’t have existed, their code would have been cleaner and our time wouldn’t have been wasted refactoring the code. So if the code isn’t as great as it could be but works, it matters because it saves the next developer losing their hair over a crappy hack.

## CSS is hard

Now onto the other point that “CSS is hard”. CSS isn’t hard at all, we as developers make it harder by over complicating things and introducing things which at first seem like a good idea but actually turn out to be a massive pain to fix. If you find it hard, thats fine ask for help but don’t make it harder for yourself by over complicating it. keep things simple.

## It’s just CSS

The last issue i’d like to raise is the “It’s just CSS”, this to me is screaming you are a arrogant b***ard and you don’t think its important. Yea great your backend code wizardry can process an excel spreadsheet in a millisecond and cook me a pop tart but if the browser is dancing round drunkenly trying to render the page you decided to hack together then your hard work is gone to waste right? If you don’t like CSS because “Its just CSS” then don’t do it, let someone else do it because they will do a better job of it than you. There are things I don’t like about development and I try to avoid those tasks, not because I can’t do it but because I don’t like doing them so I feel as if my effort would not be as high causing my quality of work to decrease.

Hopefully I’ve not pissed anyone of with this rant but I thought this needed to be said. CSS is a first class citizen so start treating it like one.
