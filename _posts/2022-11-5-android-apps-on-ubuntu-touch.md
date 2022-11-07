---
layout: blog
title: Android Apps on Ubuntu Touch
postdesc: Imagine daily driving Linux at your school every day
---

So yeah, my dad really wanted to get my phone and use it for daily driver... because... I said it's more secure... sure but like for what, real business stuff? It's like impossible to daily drive Linux! On a damn smartphone!!! With 3 gigs of RAM. What do you expect?

Okay yeah I tried running Android apps on my UT today and it... kinda works! Not just them, I actually wanted to daily drive it too, like, imagine running Linux at your school every day lmao.

First, I tried Waydroid cuz I thought Anbox wouldn't work since my phone wasn't mentioned as "supported" at "Run Android Apps" UBports's documentation page. It... doesn't work :D Or precisely... I did install that successfully but it kept throwing errors. And it's weird how people have tried that and made it work before cuz it's literally called "Waydroid"! It's meant to run on Wayland and UT uses Mir.

And second, I tried Anbox... with the fear of bricking my phone but I did that anyways. IT WORKED!! Easier than I thought. Apparently, the UT team (or like whoever ported UT to ZenFone Max Pro M1) already integrated Anbox to the Ubuntu Touch system nicely so it has tools preinstalled that you can use to run it directly. I ran `anbox-tool install` just like that and Anbox got installed on my phone.

I then installed Aurora Store cuz yeah I need to try PeduliLindungi (COVID tracking app for Indonesia) first. That was my priority cuz just having PeduliLindungi means I can daily drive my ZenFone at school. Oh and I probably need WhatsApp actually but like yeah. PeduliLindungi or you can't pass the stairs and go to your class. Or actually you can just pretend to scan something and not actually scan it on the app and go upstairs but nah.

So after poking around, including uninstalling default Android apps (cuz I already have native UT apps), I tried PeduliLindungi... until I found out that you can't use your host's camera on Anbox! Ugh.

