<h1 align="center">Website for "elsantogaato.com" domain</h1>

<h3 align="center">
This repository contains the code of the website "elsantogato.com" managed in CPanel
</h3>

## Stack

- HTML
- CSS
- JavaScript

## Media

![image](https://github.com/user-attachments/assets/ad807d33-98fd-4d92-b43c-8720c9c28555)

## Deployment
Using of action for CPanel server with File Transfer Protocol (FTP)

```
name: Deploy GitHub repository to cPanel on commit.
#Contributor Insta @SuperiorStar, also thanks to SamKirkland
on:
  push:
    branches:
      - main
jobs:
  FTP-Deploy-Action:
    name: 🎉 Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Set up environment
        run: |
          echo "DATE_TIME=$(date +'%Y-%m-%d %H:%M:%S')" >> $GITHUB_ENV
          echo "REPO_NAME=$(basename $GITHUB_REPOSITORY)" >> $GITHUB_ENV
          
      - name: 🚚 Get latest code
        uses: actions/checkout@v3
        with:
          fetch-depth: 2
      - name: 📂 Sync folders and files to the server
        uses: SamKirkland/FTP-Deploy-Action@4.3.3
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: /public_html/
```
