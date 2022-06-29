---
title: "metauni"
summary: "math community in the metaverse on roblox"
---

[{{< img src="cover.png" size="x768" class="max-h-96 mx-auto rounded-lg" alt="metauni banner" >}}](https://metauni.org/)

at metauni i've integrated [the avatar editor]({{< ref "/projects/avatar-editor" >}}), a new what's on board used in [the metauni hub](https://www.roblox.com/games/8165000775/metauni-Hub), and various other small improvements. 

## avatar editor

i originally started working on the avatar editor as a personal project of mine to act as a drop-in module for any places of mine. around same time as starting the avatar editor, i learned about metauni through a friend. the avatar editor is now integrated into multiple metauni places with significant features in the avatar editor being developed with metauni in mind. 

## new what's on board

in june 2022 i worked with [ethan](https://ecurtiss.dev) to automate schedules for each week. i worked on a [python script](https://github.com/metauni/metauni.github.io/blob/main/schedule/update-data-store.py) to handle some formatting things to make the data easier to work with from luau and a roact application in roblox to display the schedule in [the metauni hub](https://www.roblox.com/games/8165000775/metauni-Hub). i implemented a hover feature aswell for schedule to display additional information such as description, notes, and times. 

<div class="flex flex-wrap gap-4 not-prose">
{{< img src="board.png" size="x512" alt="schedule board in roblox" class="rounded-lg max-h-64" >}}
{{< img src="hover.png" size="x512" alt="hovering over an event title" class="rounded-lg max-h-64" >}}
</div>