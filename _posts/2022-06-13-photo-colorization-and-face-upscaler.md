---
layout: blog
title: Photo Colorization and Face Upscaler
postdesc: Some cool tools for image restoration!
---

I got a task to restore some old images. I tried doing it manually, but I think I somehow just made those worse.. So I turned to machine learning tools for some help.

I tried looking around the internet using search engine and found some sites that offer recolorization and image upscaling. None of them actually does good work though, or maybe I just haven't found one that actually makes good result. I then stumbled across [a YouTube™ video](https://youtu.be/oQQ0M8km47k) that shows a pretty promising result face upscaling using [DFDNet](https://github.com/csxmli2016/DFDNet). It's a research thingy, obviously, but why not use it for a legitimate purpose? There weren't any tutorials for Linux, but hey, I'm not scared. What's gonna go wrong?

A dependency hell.. Kind of. But I did fix it and managed to run the script with everything satisfied. The problem is, I encountered out-of-memory issues with my NVIDIA GPU (it's a GeForce RTX 3050 mobile), same as others based on the comments I read at [this tutorial](https://youtu.be/OTqGYMSKGF4). It works with my CPU however, but creates creepy (and funny) results. Like.. very creepy. Here's an example:

![Creepy DFDNet result](/blog/image/creepy-dfdnet-result.png)

Something is totally wrong. I almost gave up at that point, I mean, what can I possibly do? I can't figure out what's wrong and I'm not smart enough to fix the code.


Well.. I can try to use Google Colab! Yeah, Google, but who cares if it gets **this** job done. I spent the next morning writing a [Colab notebook](https://colab.research.google.com/drive/1O0e0mE1EPp0ZsVYhAAqBdqSfBLvivIYu?usp=sharing) to setup the software and try to make it work and yes, it worked! Perfectly! The results were astonishing. If you want to look at the example, the DFDNet GitHub repository already includes some.


Okay, and for colorization. I had no idea where to look for a good one, so I just blindly searched for "colorization" at GitHub. There was a [repository with that exact name ](https://github.com/richzhang/colorization) which is EXACTLY WHAT I'M LOOKING FOR.

I, again used Colab ([here's my notebook](https://colab.research.google.com/drive/1bj3XnuPHrrqmXdikwWZ7lvQtAvXG0f6d?usp=sharing)), because I'm sure the models used by the software are huge and I don't have the patience to wait for it to download. This time, it's easier. And it worked—also very astonishingly! It outputs really natural results. Here's an example I did with a cow:

![Cow recolorization](/blog/image/colorization-example.png)

So yeah! Very fun, frustrating, and amazing.
