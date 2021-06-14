# Github Actions - Deploy with RSYNC <!-- omit in toc -->

![hero](https://dl.dropbox.com/s/w8qt52rymfop45a/Screen%20Shot%202021-06-11%20at%2015.44.12.png?dl=0)

This blog post will focus on configuring Rsync to deploy files from Github to your web server with Github Actions.

## Table of Contents <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Generate a new key pair](#generate-a-new-key-pair)
- [Create Github Secrets](#create-github-secrets)
  - [Add private key to Github repo](#add-private-key-to-github-repo)

## Prerequisites

Before you get started, here's what you'll need:

- [ ] The URL or IP and the username of your server
- [ ] SSH access to your server via terminal
- [ ] A code/text editor
- [ ] An account on Github

## Generate a new key pair

In order to for Rsync to deploy files to your web server, it'll need to authenticate with SSH keys. Let's set that up now.

SSH into your server:

```bash
ssh username@yourwebserver.com
```

Create a RSA 4096 PEM formatted key pair:

```bash
cd ~/.ssh && ssh-keygen -t rsa -b 4096 -m PEM -f github_id_rsa
```

Copy the newly generated public key to `authorized_keys` with:

```bash
cat github_id_rsa.pub >> authorized_keys
```

Open the contents of the private key in your terminal:

```bash
cat github_id_rsa
```

You should see something like this:

![screenshot](https://dl.dropbox.com/s/e12twc3a5p9bwww/Screen-Shot-2021-06-11-at-15.31.13.png?dl=0)

Copy everything, including the `------BEGIN / END ------` comments, into your code/text editor. You'll need this in a minute...

## Create Github Secrets

![screenshot](https://dl.dropbox.com/s/kcskccxui8shqwe/Screen%20Shot%202021-06-11%20at%2015.52.32.png?dl=0)

Up next, we need to create a few Github Actions Secrets...

### Add private key to Github repo

1. Open your Github repo in a web browser.
2. Navigate to `Settings --> Secrets`
3. Click the "New repository secret" button
4. Name: `SERVER_SSH_KEY`
5. Value: paste the entire private key
6. Click the "Add secret" button

![screenshot](https://dl.dropbox.com/s/d0py7tu2js3ohpc/Screen%20Shot%202021-06-11%20at%2010.59.00.png?dl=0)