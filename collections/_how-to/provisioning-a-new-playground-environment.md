---
layout: default
title: Provisioning a New Playground Environment
parent: How To Guides
permalink: /how-to/provision-playground-environment
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Provisioning a New Playground Environment

Warning [Read this First!]

-   Provisioning scripts were first used to provision playground
    environment (for prototyping/testing).

-   Scripts have also been used to provision parts of other higher
    environments (CI/Staging/Production). Working with tools like
    terraform for infra provisioning should always be approached with
    caution.

-   The Playground environment should only be provisioned for
    testing/prototyping and destroyed when done. (for cost minimization
    purposes)

Setting Up Local Env for Provisioning

-   Refer to the instructions on guide.

Steps to Provision

-   Refer to the instructions on guide.

Changes already done to support the Playground Environment

-   Circle CI Pipeline

    -   Workflow **build_and_deploy_playground** added to
        .circleci/config.yml, see .

    -   **Note**: Double-check that the workflow in the
        .circleci/config.yml is setup with the jobs you need.


-   Codebase config files changed

    -   instance-files/clientConfig.js, see .

    -   instance-files/serverConfig.js, see .

    -   src/server/config/sequelize_config.js, see .


-   Created a private Docker repository called
    police-data-manager-playground under the NOIPM organization

-   Added Heroku app config variables to AWS Secrets Manager

-   Added Playgound url to Google Maps API permitted list

Manual steps required to complete environment setup

-   Do this before pipeline runs

    -   We need to copy over the officerSeedData.csv file into the
        **nopd-officers-playground **bucket manually (you can get it
        from the CI bucket)

        -   Note: Remember to use the correct encryption when uploading
            to any S3 bucket. It can be selected from "Additional
            Upload Options" in the console.

  
    -   Update Playground Database credentials listed below in CircleCi
        (Project Settings -> Environment Variables -> Add Variables).
        You can get these secrets from the Heroku Data Dashboard for
        Playground (Settings -> Database Credentials -> View
        Credentials)

        -   PLAYGROUND_DATABASE_HOST

        -   PLAYGROUND_DATABASE_NAME

        -   PLAYGROUND_DATABASE_PASS

        -   PLAYGROUND_DATABASE_USERNAME

    
    -   Update the application configs to point to the newly provisioned
        API Gateway

        -   Update the connectSrc of the contentSecurityPolicy in the
            Playgound section of the server config.js

        -   Update the hostname in the Playground section of the client
            config.js


-   Do this after the pipeline runs (and you can see the web and worker
    dynos on the Heroku dashboard)

    -   Under the "Configure Dynos" section of the Heroku dashboard,
        turn on the worker dyno

Kick-Off the Pipeline

-   Update the config.yml CircleCI pipeline to which needs to be tested
    in the Playground environment. See example below:

build_and_deploy_playground:

jobs:

- security-check:

filters:

branches:

only:

- **aws-api-gateway**

Destroying the Environment

-   Navigate to project directory and cd into infra/envs/playground

-   Run terraform destroy

    -   **Note: **Non-empty S3 Buckets cannot be destroyed, so make sure
        to delete any existing files within playground associated
        buckets


-   See "Steps to Provision" for how to provide the Heroku API key

-   Type "yes" to confirm the destroy

Troubleshooting the Environment

-   Officer Search is not working

    -   Check the pipeline to see if the officer data was seeded from S3

== 20200624160649-create-officers-from-s3-after-district-seed: migrating
=======

[winston] Attempt to write logs with no transports
{"level":"info","message":"File name"}

[winston] Attempt to write logs with no transports
{"message":"Received 5797 rows of officer data.","level":"info"}

[winston] Attempt to write logs with no transports
{"message":"Officer Update Error:
SequelizeConnectionAcquireTimeoutError: Operation
timeout","level":"error"}

{ SequelizeConnectionAcquireTimeoutError: Operation timeout

at pool.acquire.catch.error
(/app/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:289:52)

name: 'SequelizeConnectionAcquireTimeoutError',

parent:

Error: Operation timeout

at Timeout._timeout.setTimeout
(/app/node_modules/sequelize-pool/lib/Deferred.js:19:19)

at ontimeout (timers.js:436:11)

at tryOnTimeout (timers.js:300:5)

at listOnTimeout (timers.js:263:5)

at Timer.processTimers (timers.js:223:10),

original:

Error: Operation timeout

at Timeout._timeout.setTimeout
(/app/node_modules/sequelize-pool/lib/Deferred.js:19:19)

at ontimeout (timers.js:436:11)

at tryOnTimeout (timers.js:300:5)

at listOnTimeout (timers.js:263:5)

at Timer.processTimers (timers.js:223:10) }

== 20200624160649-create-officers-from-s3-after-district-seed: migrated
(26.345s)

-   Above is an example of a failing seeder for officer data

-   To fix this you will need to SSH into the env and re-run the seed
    script

    -   In Heroku under the noipm-playground environment: click More ->
        Run Console

    -   Once you see the prompt you can enter the command to revert/undo
        the migration: yarn run sequelize db:seed:undo --seed
        20200624160649-create-officers-from-s3-after-district-seed

    -   Then you can re-run all the seeders using yarn run sequelize
        db:seed:all (this will only run seed scripts that have not been
        run already)
