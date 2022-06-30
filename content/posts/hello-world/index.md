---
title: "hello world"
date: 2022-06-30T15:31:08-04:00
draft: false
---

hi! so this website is pretty new. it's been pretty fun to make! i'm still not sure what exactly i'm gonna put here, but so far i have some projects.

<!--more-->

i've built this website with [hugo](https://gohugo.io) and a custom theme i made using [tailwind css](https://tailwindcss.com). the theme has support for light and dark mode too and is mobile compatible. both have quite a bit of purple. most things i would've used white for are actually a very light purple. i've also used tailwind transitions a lot here. cards will rotate a bit and have a larger shadow when hovered. hovering the profile picture on the homepage makes it grow a bit larger. at build time, hugo image processing converts images into webp and they're resized to be double the height of what they will be displayed at. something that took me a while to implement is a "glitch" effect on the [404 page](/404.html). most of the time on that was spent trying to figure out why my css mask wasn't working. i never figured out how to get it how i originally wanted it, but the way i went with instead looks better i think. 

so far, the only content on my website is this post and some details about some projects i've worked on, an avatar editor, script assets, and some work i've done for metauni. for the future, i think i want to add some stuff i've drawn and write some more posts. 

something i have looked a lot into for this website, and am still trying to figure out, is [indieweb](https://indieweb.org) things. i saw some stuff about the indieweb a while back and it's kinda interested me. i've implemented some microformats i saw mentioned, added `rel="me"` to some social links for relmeauth, and added stuff for receiving and displaying webmentions on each post. i wanna figure out how i can send out webmentions with hugo, but i haven't found much for that yet. 

currently i host this on github pages and each push to github triggers a build. builds usually take around 10 to 20 seconds to complete, with only ~3 seconds of that being spent actually building the site. in the future i might move to netlify or digitalocean app platform to host this so i can have some dynamic content.