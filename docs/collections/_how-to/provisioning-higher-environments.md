---
layout: default
title: Provisionining Higher Environments
parent: How To Guides
permalink: /how-to/provision-higher-environments
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Provisioning Higher Environments

NOIPM Notes

-   All NOIPM environments(Playground/CI/Staging/Production) have been
    added to Terraform

-   NOIPM AWS Keys are in 1Password

Uses

-   The expectation is that any infrastructure changes that need to be
    done in any of our higher environments be done using Terraform
    scripts.

-   This guide helps new core team members get setup with Terraform so
    they can make changes to application infrastructure if/when the need
    arises.

-   All NOIPM environments(Playground/CI/Staging/Production) have been
    added to Terraform. You can find their scripts under the
    infra/envs/<env name> directory.

Setting Up Local Env for Provisioning

-   Install Terraform

-   Install AWS-CLI

-   Navigate to project directory and cd into infra/envs/<env name>

-   Run aws configure --profile noipm-terraform to setup
    noipm-terraform profile

    -   Grab the key ID and Secret Access key from 1Password under
        aws:terraform

    -   Setup us-east-1 as the default region

    -   Leave the default format blank (hit enter)


-   Confirm profile has been created with aws configure list-profiles.
    For more information on named profiles, visit

-   Run terraform init

**Note:** Ensure that terraform is using remote state in s3, stored in
noipm-terraform bucket. If you are, you should see the following message
after executing the command:

**Initializing the backend...**

Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.

Manual Steps before Provisioning

-   Add Secrets to AWS Secrets Manager for respective environments (e.g.
    ci/Env/Config, staging/Env/Config)

Steps to Provision

-   Navigate to project directory and cd into infra/envs/<env name>

-   Run terraform init

-   Run terraform plan

-   Provide the Heroku API key for the NOIPM Infrastructure account:

    -   Go to

    -   Scroll to **"API Key" Section-> Click "Reveal"**

-   If everything looks right, then run terraform apply

-   Follow previously listed steps to provide the Heroku API key

-   Type "yes" to confirm provisioning the changes

Manual Steps after Provisioning

-   Create a scheduler job for restarting the Heroku Server Dynos

    -   Why? Heroku automatically . In an effort to avoid restarts
        during business hours, we have created a scheduled job to
        manually kick off server restarts. Having this job run daily
        resets the timer on Heroku's automated restarts (thus allowing
        us to control the restart times).

    -   How?

        -   Login to Heroku Dashboard

        -   Click on Heroku Scheduler under add-ons

        -   Click Create Job

        -   Under Schedule, select "Every Day at" and choose a time
            which will not conflict with business hours

        -   Under Command, paste the following API call:

            -   curl -n -X DELETE
                https://api.heroku.com/apps/noipm-$NODE_ENV/dynos -H
                "Content-Type: application/json" -H "Accept:
                application/vnd.heroku+json; version=3" -H
                "Authorization: Bearer $HEROKU_API_TOKEN"

        -   Click Save Job
