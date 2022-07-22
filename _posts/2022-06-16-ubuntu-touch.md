---
layout: blog
title: Ubuntu Touch
postdesc: Got Ubuntu Touch Running on my Asus Phone!
---

I've always wanted to try out Ubuntu Touch since a long ago. I didn't have a compatible device to try it out though. Recently, I've got [that same Asus phone I used to install LineageOS](/blog/2022/05/finally-custom-android-rom) which is apparently compatible with Ubuntu Touch! I've been trying to install it for a while now, but just figured out how today.  I have tried using my main IdeaPad Gaming 3 laptop but it couldn't flash the firmware. I couldn't even get to the recovery mode.

Today, I used my old laptop to try to install it again. It failed like 3 times, but I eventually installed it succesfully. The first till third error messages was saying that the installer failed to make a directory at /cache/recovery. Have no idea why. I then rebooted to my other up-to-date Artix install and enabled the "wipe userdata" option and it finally worked smoothly.

![UBports installation options](/blog/image/ubports-installation-options.png)

And yeah, Pretty cool! Kudos! I'm still learning it, but I can tell that it's amazing. Not too usable actually, but that's expected—it doesn't even have a nice global dark mode! It has a good amount of apps at their app store, though not too many. You can also [install a Libertine container](https://docs.ubports.com/en/latest/userguide/dailyuse/libertine.html) to run desktop Linux apps which integrates nicely with the actual operating system, but has terrible UI because those apps are made for desktop. You can tweak the sizing and other stuff, but it still won't look very great. And for advanced users, you can also [install Anbox](https://docs.ubports.com/en/latest/userguide/dailyuse/anbox.html) to run Android apps, but only some devices are supported.

Here are some nice images of mine:

![UBports 1](/blog/image/ubports-1.png)
![UBports 2](/blog/image/ubports-2.png)
![UBports 3](/blog/image/ubports-3.png)

EDIT: I found a way to get a global dark theme.. (I used UT Tweak Tool)
