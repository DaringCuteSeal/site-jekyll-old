---
layout: blog
title: My Bluetooth Kills My USB!
---

One of my USB port doesn't work often times. Why? My Bluetooth!

I've owned the laptop I use to type this post for quite a while now. Oh, and it's a Lenovo IdeaPad Gaming 3 (15ACH6). Since my first time using it, both of my networking card (`lspci` says "MEDIATEK Corp. MT7921 802.11ax") and Bluetooth card (not sure what the model is but it's Foxconn's card) has had a little problem. 

My network card has a power management issue (I think), it prints this (on the kErnEl rINg BuFfEr™) every time it wakes up:

```text
mt7921e 0000:03:00.0: Message 00020007 (seq 8) timeout
PM: dpm_run_callback(): pci_pm_resume+0x0/0xe0 returns -110
mt7921e 0000:03:00.0: PM: failed to resume async: error -110
mt7921e 0000:03:00.0: chip reset
```

..meanwhile my Bluetooth:


```text
xhci_hcd 0000:05:00.3: USBSTS: 0x00000000
xhci_hcd 0000:05:00.3: xHCI host controller not responding, assume dead
xhci_hcd 0000:05:00.3: HC died; cleaning up
usb 1-2: USB disconnect, device number 6
...
usb 1-3: USB disconnect, device number 2
usb 1-4: USB disconnect, device number 3
Bluetooth: hci0: Execution of wmt command timed out
Bluetooth: hci0: Failed to send wmt func ctrl (-110)
```

My networking card works fine, but my Bluetooth sometimes disappears. I don't have much clues about these but they're not a big problem, plus, I don't use Bluetooth as much (cables FTW!). 

However.. I soon discovered that my Bluetooth causes one of my USB port (the first one, at the right side to be exact) to not work. Any data transfer does not work (for example, on a USB drive or a phone), and only stuff like reverse charging works. Not sure why, I haven't dived into this deeply yet. Solution? Well, ~~blacklist the module for it! (it's `btusb`, and if you don't know how, read the [ArchWiki](https://wiki.archlinux.org/title/Kernel_module#Blacklisting)!).~~

An edit later, on July 10: Adding `enable_autosuspend=0` to the option for the `btusb` module seems to have fix that, or maybe it fixed itself.

An edit way later, on July 29: Nope, that didn't fix anything, but it does happen less often now. A temporary fix is to reload the `xhci_pci` module.
