---
title: '[Safely] Update an Ubuntu EC2 instance on Amazon AWS'
date: '2013-05-19'
excerpt: ''
category:
  - 'code'
tags:
  - 'server'
  - 'ubuntu'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

[Ubuntu 12.04.1 LTS](http://www.ubuntu.com/download/server) was released and that meant it was time to upgrade my Ubuntu EC2 instances from 11.10 to 12.04.1 LTS.

When I logged in via SSH I saw the nag to upgrade and thought, "crap...the last time I did this, I destroyed my EC2 instance". The upgrade went flawlessly this time because I created an AMI first, and after a few days I will delete that AMI and associated EBS volumes.

## 1) Create a backup

Create an Amazon Image (AMI) of your existing EC2 instance. If anything fails, you can simply launch the newly created AMI and re-associate your Elastic IP. _(You're using an Elastic IP right?)_

## 2) Upgrade

When it's finished, go ahead with the upgrade:

$ sudo apt-get update -y && do-release-upgrade