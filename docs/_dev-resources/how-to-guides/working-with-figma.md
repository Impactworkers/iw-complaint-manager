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
- Run the plugin in figma
- Go to the settings tab and select options
- Input your PAT
- Push your changes to the github main branch
 
