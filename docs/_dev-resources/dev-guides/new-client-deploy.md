---
layout: default
title: New Client Deploy
parent: Development Guides
permalink: dev-guides/new-client-deploy
---

{: .warning-title }
> Check for Relevance
>
> This page may be about Complaint Manager 1.0. Should it be removed from this wiki?

{: .label .label-yellow }
Under Construction

{: .label .label-red }
To be Updated

# New Client Deploy

We will never be free of weighty burden of supporting this tool if oversight organizations cannot deploy an instance without our intervention. To that end we have investigated tools that will allow deployment via some form of wizard, so that an adopting org can click through the wizard, provide their own Heroku and AWS accounts and be setup.

To this end we are looking to use Pulumi to handle deployment of the various pieces of the app and to build an electron desktop app that can take a Pulumi script and walk a user through the options before deploying it. It is thought that this app could also handle upgrades. One problem we've run into is that only Python supports Pulumi integration with Heroku, so our [first run of the infrastructure](https://github.com/PublicDataWorks/cm-pulumi) was written in Python, which we hope to call using JS from the electron app, but it's possible that the app could be developed wholly in Python if the skills of the team warrant that.
