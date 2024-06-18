---
layout: default
title: Working with Figma Plugin for Designers
parent: How To Guides
permalink: how-to/working-with-figma
---

# Working with Figma Plugin for Designers

## Context
Tokens Studio for Figma is a plugin that allows designers to create design tokens using the Figma UI and upload them to Github, where they are converted to a format that can be used by developers. 

## Getting Started Guide

### How to request a Github Personal Access Token(PAT)

- Create a Github PAT
  - Navigate to [Github](https://github.com) and make sure you are signed in. In the upper right hand corner, click your profile icon and then click "Settings":
![account navigation bar]({{site.baseurl}}/assets/images/pat-github-2.png)   
- A new window will open. Click "Developer Settings":
![Developer Settings]({{site.baseurl}}/assets/images/pat-github-3.png)
- Navigate to Personal access tokens > Fine-grained tokens
- Click "Generate new token" in the upper right hand corner:
  ![generate new token button]({{site.baseurl}}/assets/images/pat-github-5.png)
- Give the token an appropriate name, for example, `figma_token`. Set expiration to 90 days. 
  ![generate new token button]({{site.baseurl}}/assets/images/pat-github-6.png)
- Ensure the following settings are also selected:
   ![generate new token button]({{site.baseurl}}/assets/images/pat-github-8.png)
   ![generate new token button]({{site.baseurl}}/assets/images/pat-github-9.png)
- Verify the correct permissions and repository are selected in the Overview section. Then click "Generate token and request access"
   ![generate new token button]({{site.baseurl}}/assets/images/pat-github-10.png)
- Your new personal access token will appear:
   ![generate new token button]({{site.baseurl}}/assets/images/pat-github-11.png)

{: .important }
Make sure to store your PAT in 1password in your employee vault!

{: .note }
Once you have submitted your request, the tech lead will have to approve it before you can use it in Figma. 

### How to Install and Use the Tokens Studio for Figma plugin

- Go to Figma UI
- In the upper left-hand corner of the screen, click the figma icon and select plugins > manage plugins:
![manage plugins]({{site.baseurl}}/assets/images/figma-plugin-1.png)
- Search for Tokens Studio for Figma in the search bar and select "Run"
![search plugins]({{site.baseurl}}/assets/images/figma-plugin-8.png)
- In the upper left-hand corner of the screen, click the figma icon and select plugins. Tokens Studio for Figma should appear in the recents section. Click it and a new window will open:
![tokens studio pop-up]({{site.baseurl}}/assets/images/figma-plugin-2.png)
- To add your token, go to settings > add new > Github
![tokens studio settings]({{site.baseurl}}/assets/images/figma-plugin-4.png) 
- Input your token in the Personal Access Token field:
![add new credentials]({{site.baseurl}}/assets/images/figma-plugin-5.png)
  - for Repository, input: `impactworkers/iw-complaint-manager`
  - for Branch, input: `main`
  - for File Path, input: `tokens.json`
  - click Save
- Once you are happy with your changes, upload them to Github. Click the upload icon (indicated by the red arrow in the screenshot below). Enter a commit message that describes the changes you made.
![push changes to github]({{site.baseurl}}/assets/images/figma-plugin-6.png)

 {: .note }
Once you have pushed your changes to github, you can view them in the Github UI. You should see a `tokens.json` file with a recent update. 
![github repo files]({{site.baseurl}}/assets/images/figma-plugin-7.png)
