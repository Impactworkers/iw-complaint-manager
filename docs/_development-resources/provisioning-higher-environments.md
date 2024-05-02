---
layout: default
title: Provisioning Higher Environments
parent: How To Guides
permalink: /how-to/provision-higher-environments
---

{: .warning-title }
> Check for Relevance
>
> This page may be about Complaint Manager 1.0. Should it be removed from this wiki?

{: .label .label-yellow }
Under Construction

{: .label .label-red }
To be Updated

# Provisioning Higher Environments

## NOIPM Notes

- All NOIPM environments (Playground, CI, Staging, Production) have been added to Terraform
- NOIPM AWS Keys are in 1Password

## Uses

- The expectation is that any infrastructure changes that need to be done in any of our higher environments be done using Terraform scripts.
- This guide helps new core team members get setup with Terraform so they can make changes to application infrastructure if/when the need arises.
- All NOIPM environments (Playground, CI, Staging, Production) have been added to Terraform. You can find their scripts under the `infra/envs/<env name>` directory.

## Setting Up Local Env for Provisioning

- Install Terraform [here](https://learn.hashicorp.com/terraform/getting-started/install.html#install-terraform)
- Install AWS-CLI [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html)
- Navigate to project directory and `cd` into `infra/envs/<env name>`
- Run the following command to set up `noipm-terraform` profile:

    ```bash
    aws configure --profile noipm-terraform
    ```

  - Grab the key ID and Secret Access key from 1Password under `aws:terraform`
  - Select `us-east-1` as the default region
  - Leave the default format blank

- Confirm profile has been created with the following command:

    ```bash
    aws configure list-profiles
    ```

  - For more information on named profiles, see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

- Run `terraform init`

{: .note }
> Ensure that terraform is using remote state in s3, stored in `noipm-terraform` bucket. If you are, you should see the following message after executing the command:
> ```Initializing the backend...
> Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.
> ```

## Manual Steps before Provisioning

- Add Secrets to AWS Secrets Manager for respective environments (_e.g._ `ci/Env/Config`, `staging/Env/Config`)

## Steps to Provision

- Navigate to project directory and `cd` into `infra/envs/<env name>`
- Run `terraform init`
- Run `terraform plan`
- Provide the Heroku API key for the NOIPM Infrastructure account:
    - Go to https://dashboard.heroku.com/account
    - Scroll to **"API Key" Section-> Click "Reveal"**
- If everything looks right, then run `terraform apply`
- Follow previously listed steps to provide the Heroku API key
- Type `yes` to confirm provisioning the changes

## Manual Steps after Provisioning

- Create a scheduler job for restarting the Heroku Server Dynos
  - Why? Heroku automatically [restarts all Dynos daily](https://devcenter.heroku.com/articles/dynos#restarting). In an effort to avoid restarts during business hours, we have created a scheduled job to manually kick off server restarts. Having this job run daily resets the timer on Heroku's automated restarts (thus allowing us to control the restart times).
  - How?
    - Login to Heroku Dashboard
    - Click on Heroku Scheduler under add-ons
    - Click Create Job
    - Under Schedule, select "Every Day at" and choose a time which will not conflict with business hours
    - Under Command, paste the following API call:

        ```bash
        curl -n -X DELETE https://api.heroku.com/apps/noipm-$NODE_ENV/dynos -H
        "Content-Type: application/json" -H
        "Accept: application/vnd.heroku+json; version=3" -H
        "Authorization: Bearer $HEROKU_API_TOKEN"
        ```

    - Save the job
