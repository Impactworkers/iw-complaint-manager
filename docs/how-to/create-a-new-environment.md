---
layout: default
title: Creating a New Environment
parent: How To Guides
permalink: /how-to/create-a-new-environment
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Creating a New Environment

Setting Up a New Heroku App

-   Under the NOIPM team space in Heroku, click the "New"button in the
    top right corner and select "Create new app"

-   Current naming convention is noipm-[environment name]

-   Under "Configure add-ons"you will add the Heroku Postgres and
    Papertrail add-ons

    -   Officer and allegation data currently account for ~9,000 rows,
        so non-production environments use the Hobby Basic plan for the
        Postgres add-on

    -   Non-production environments use the free version of the
        Papertrail add-on


-   Under the Settings tab, ensure you have added the necessary
    environment variables

-   Set the maintenance window for postgres We have been setting to
    Sunday 5:00 UTC. This is probably only necessary in production.

Setting Up a New Auth0 Tenant

-   While signed into the Auth0 dashboard, open the menu that is
    accessed by clicking the current tenant name (top right corner) and
    select "Create new tenant"

-   Current naming convention is noipm-[environment name]

-   For the tenant you will add an app of type Single Page App (Police
    Data Manager) and an API (Police Data Manager API)

    -   App Configurations:

        -   ensure the necessary allowed callback URLs are added
            (generally [new heroku app address]/callback)

   
    -   API Configurations:

        -   ensure token expiration is set to 28800 seconds

        -   ensure Identifier is set to the new heroku app address


-   Copy in all rules from one of the other tenants, updating app URLs
    to match the newly created app. As of this writing, we have rules
    for the authorization extension, adding permissions to token, and
    adding nickname to token.

-   Add the Authorization extension

    -   Setup the same permissions and roles present in other tenants

    -   Go to the configuration page (click prompt at top of screen for
        first time configuration, or click tenant name in top right
        corner and select configuration)

        -   Under "Token Contents"header, turn on "Permissions" Click
            "Publish Rule"

        -   Note: make sure that if you go back to the Rule section of
            the application that this new, auto-generated rule
            ("auth0-authorization-extension" is the first one listed.
            Reorder if necessary.


-   Customize the login page via the hosted pages menu option. Compare
    to other environments, but as of this writing, you'd need to add the
    logo url, color hex value, and set allowSignUp to false.

-   Create a user for yourself

-   Create a test user and make sure credentials are accessible in the
    team 1Password

-   Invite all team members as administrators to the tenant, from there
    they will be able to create users for themselves

Setting Up New S3 Buckets for an Environment

-   While logged in as the root user, you'll want to add two new buckets
    to S3

    -   noipm-[new environment name]

    -   nopd-officers-[new environment name]

        -   Note: officerSeedData.csv should be copied into this bucket
            to enable successful seeding of officer data

    
    -   noipm-complaint-letters-[new environment name]

    -   noipm-referral-letters-[new environment name]

    -   noipm-exports-[new environment name]


-   Each bucket should have a bucket policy like all other buckets in
    our S3 instance

    -   the policy is designed to ensure encryption of bucket contents


-   The access policy for the development user group (or production user
    group, depending on the planned environment usage) should be updated
    to grant access to the new buckets.

    -   The access policy is found in services -> IAM -> policies

    -   controls local, test, CI, and Staging (non-production
        environments)

    -   controls production only

    -   Both policies must be edited to ensure functionality in
        production

Configuring the Code Base for a New Environment

-   Add a section titled with your new environment's identifier (and
    populate the necessary keys) in the following config files :

    -   in (instance-files)

    -   in (instance-files)

Google Maps API Key

-   We have two api keys --one for preprod and one for prod. if you have
    a new preprod env, you can use the existing key, but need to update
    the restrictions.

-   Log into the noipm infrastructure google account and go to

-   Update the restrictions to allow the new referrer url.

Deploying the New Environment

-   Create a private Docker repository under the NOIPM organization

    -   Current naming convention is police-data-manager-[environment
        name]


-   Ensure all necessary environment variables are populated in CircleCI

    -   (Environment variables can be found by clicking the gear icon
        next to the project in CircleCI and clicking "Environment
        Variables"under "Build Settings"


-   Update the appropriate CircleCI workflow by adding to the config.yml
    file under the .circleci directory in our codebase

    -   You should need to add or alter an existing build-and-publish
        job to build your docker image and publish to your new
        repository

    -   Then you will need a job to deploy the image and another to
        ensure deploy succeeded

        -   make sure your deploy job is setting the app to maintenance
            mode before deploying, if necessary

            -   Note: it is useful to run your new circle jobs locally
                using the circleci CLI to debug before pushing them up

  
    -   Add your new jobs to the desired workflow, ensuring you have
        updated the "requires"field of your downstream job
