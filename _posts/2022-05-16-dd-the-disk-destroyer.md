---
layout: blog
title: "DD: the Disk Destroyer, and How it Actually Didn't"
---

I've heard a lot of stories about people using `dd` and wiped their data. Well, that has already happened for me. I guess I can call myself an 'experienced CLI user' now. I'll tell you about it.

So, a day before my birthday (that's March 2nd, 2022), I heard my dad complaining about bunch of stuff when he was using his laptop. Yeah, as a Linux user, I would obviously.. recommend Linux. Anyways, my dad agreed to try out [Fedora](https://getfedora.org) so I used dd to write the ISO to a USB stick. I did that before I had my lunch so I won't waste any time ;). Oh well, I was talking to somebody when I wrote the command, and guess what, I wrote `of=/dev/sda` instead of `sdc`—and my OS and project files were at `sda`. And yes, I also typed my password for sudo prompt without thinking about it, and I instantly freaked out. I `^C`'ed instantly after about 3 second, while praying to the file system God hoping that `dd` hasn't destroyed anything important. I was at my another [Artix](https://artixlinux.org) install at that time which was at another disk so I didn't feel any effect. And unfortunately, my last backup were at November 2021 (remember to always backup your files!).

I then powered off my laptop properly—and by the way, it's pointless to power it off forcefully when you use `dd` (instead of deleting files, for example with `rm`) since `dd` has altered the disk data directly (without any file system crap like journaling, superblock, or whatever). After that, I booted to EndeavourOS live session from a USB stick.

![gparted](/blog/image/gparted-endeavour-sda.png)

My first instinct was to run [GParted](https://gparted.org/) and run the 'Attempt Data Rescue...' under the 'Device' menu. Well, I ran that, but I felt super anxious and tried bunch of random commands that I found on the internet (don't do this btw). I interrupted the data rescue but soon ran that again, and waited for around 2 hours. It worked—it found my missing partitions! Well, almost all, except for my ESP (EFI system partition, which is where my bootloader resides). But who cares, I can fix that easily. I mounted all the partitions and copied everything to my hard disk at `sdb`. Then, I remade all the partitions with [parted](https://www.gnu.org/software/parted/parted.html). I wanted the exact same partition setup and I still remember all the sizes of each partitions I had so I went with that. And the weird thing is.. every of my file is intact?

I then `chroot`-ed to my Artix system I had on `sda` and fixed the bootloader, and rebooted. Everything works.. well, almost. OpenRC halted before it could start any service because it couldn't open my ESP to check it with `fsck`. The UUID has changed so it's different than the one on my fstab file. I don't remember how I edited it but I think I booted with bash as my init and edited the fstab so I could save time. After yet another reboot, everything was back to how it was.

So apparently, this was what happened:
- I overwrote my GPT partition table and my protective MBR, and some part of my ESP. Nobody then could know where the boundaries between partitions are (because I overwrote the tables), but the data (after where dd stopped writing, which is around the middle of the ESP) are still there.
- I used GParted to recover all my files, which worked.
- I then recreated the matching partition table manually and every single UUID and the partition type, including all the data in each partitions got restored, because I used the layout and all the partition size matches the one before.

When you delete a partition, you're just writing the partition table. You're not actually deleting the data at the partition unless you chose to write zeroes/random data to it. Any lost data can be recovered by recreating/adding the correct partition table. I believe that the recreated partition table has to start at the same place as before, but the size can be smaller than the amount of data contained inside (though I highly recommend you make it the exact same or bigger size than before so you won't lost any data, as some file system spread all your files across the partition so your data is actually all over the partition).

Thanks for reading my first ever real blog! And if you found any mistake here, please let me know.
