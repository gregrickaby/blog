# Verified commits on Github

![screenshot](https://dl.dropbox.com/s/tj0srqlijcbgcn0/Screen%20Shot%202021-06-08%20at%2012.32.14.png?dl=0)

1. (optional) Download [GPG Tools](https://gpgtools.org/) and install
2. (optional) [Use CLI ](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key)
3. Create a new key, must use RSA 4096 encryption. Be sure to use the same email you use for Github (which much be verified!)
4. Get the GPG key ID:

```bash
gpg --list-secret-keys --keyid-format=long
```

Will show you something similar to this:

```bash
$ gpg --list-secret-keys --keyid-format=long
/Users/gregrickaby/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2021-06-08 [expires: 2025-06-08]
uid                          Greg Rickaby
ssb   4096R/42B317FD4BA89E7A 2021-06-08
```

1. Tell Git [about your signing key](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key)

```bash
git config --global user.signingkey [3AA5C34371567BD2]
```

6. Add new GPG key [to your Github account](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)
7. [Enable Vigilant Mode on Github](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#enabling-vigilant-mode)