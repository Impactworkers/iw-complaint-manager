---
layout: default
title: Provisioning a New Playground Environment
parent: How To Guides
permalink: /how-to/provision-playground-environment
---

{: .warning-title }
> Complaint Manager 1.0
>
> This page references processes used for Complaint Manager 1.0. It should be updated with the processes for Complaint Manager 2.0 as we establish them.

{: .label .label-red }
To be Updated

# Provisioning a New Playground Environment

{: .warning }
Read this section first!

- Provisioning scripts were first used to provision playground environment (for prototyping/testing).
- Scripts have also been used to provision parts of other higher environments (CI/Staging/Production). Working with tools like terraform for infra provisioning should always be approached with caution.
- The Playground environment should only be provisioned for testing/prototyping and destroyed when done (for cost minimization purposes).

## Setting Up Local Env for Provisioning

- Refer to the instructions on the guide to [provisioning higher environments](./provisioning-higher-environments).

## Steps to Provision

- Refer to the instructions on the guide to [provisioning higher environments](./provisioning-higher-environments).

## Changes already done to support the Playground Environment

- Circle CI Pipeline
  - Workflow `build_and_deploy_playground` added to `.circleci/config.yml`, see [here](https://github.com/NOIPM/complaint_manager/blob/master/.circleci/config.yml#L371).

  {: .note }
  > Double-check that the workflow in `.circleci/config.yml` is set up with the jobs you need.

- Codebase config files changed
  - `instance-files/clientConfig.js`, see [here](https://github.com/PublicDataWorks/instance_files_noipm/blob/master/instance-files/clientConfig.js).
  - `instance-files/serverConfig.js`, see [here](https://github.com/PublicDataWorks/instance_files_noipm/blob/master/instance-files/serverConfig.js).
  - `src/server/config/sequelize_config.js`, see [here](https://github.com/NOIPM/complaint_manager/blob/aa5944ec9fb3588aa1884eb423c04ff59058554f/src/server/config/sequelize_config.js#L58).

- Created a private Docker repository called `police-data-manager-playground` under the NOIPM organization: [https://hub.docker.com/u/publicdataworks](https://hub.docker.com/u/publicdataworks)
- Added Heroku app config variables to AWS Secrets Manager: [https://console.aws.amazon.com/secretsmanager/home?region=us-east-1#/secret?name=playground%2FEnv%2FConfig](https://console.aws.amazon.com/secretsmanager/home?region=us-east-1#/secret?name=playground%2FEnv%2FConfig)
- Added Playgound url to Google Maps API permitted list

## Manual steps required to complete environment setup

- Do this before pipeline runs
  - We need to copy over the officerSeedData.csv file into the `nopd-officers-playground` bucket manually (you can get it from the CI bucket)

  {: .note }
  > Remember to use the correct encryption when uploading to any S3 bucket. It can be selected from "Additional Upload Options" in the console.

  - Update Playground Database credentials listed below in CircleCi (Project Settings -> Environment Variables -> Add Variables). You can get these secrets from the Heroku Data Dashboard for Playground (Settings -> Database Credentials -> View Credentials)
    - `PLAYGROUND_DATABASE_HOST`
    - `PLAYGROUND_DATABASE_NAME`
    - `PLAYGROUND_DATABASE_PASS`
    - `PLAYGROUND_DATABASE_USERNAME`
  - Update the application configs to point to the newly provisioned API Gateway
    - Update the `connectSrc` of the `contentSecurityPolicy` in the Playgound section of the server `config.js`
    - Update the `hostname` in the Playground section of the client `config.js`
- Do this after the pipeline runs (and you can see the web and worker dynos on the Heroku dashboard)
  - Under the "Configure Dynos" section of the Heroku dashboard, turn on the worker dyno

## Kick Off the Pipeline

- Update the `config.yml` CircleCI pipeline to [filter on the feature branch](https://github.com/PublicDataWorks/instance_files_noipm/blob/master/instance-files/clientConfig.js) which needs to be tested in the Playground environment. See example below:

    ```yaml
    build_and_deploy_playground:
      jobs:
        - security-check:
          filters:
            branches:
              only:
                - aws-api-gateway
    ```

## Destroying the Environment

- Navigate to project directory and `cd` into `infra/envs/playground`
- Run `terraform destroy`

    {: .note }
    > Non-empty S3 buckets cannot be destroyed, so make sure to delete any existing files within playground-associated buckets.

- See "Steps to Provision" for how to provide the Heroku API key
- Type `yes` to confirm the destroy

## Troubleshooting the Environment

- Officer Search is not working
  - Check the pipeline to see if the officer data was seeded from S3
  - Example of a failing seeder for officer data:

    ```bash
    == 20200624160649-create-officers-from-s3-after-district-seed: migrating =======
    [winston] Attempt to write logs with no transports {"level":"info","message":"File name"}
    [winston] Attempt to write logs with no transports {"message":"Received 5797 rows of officer data.","level":"info"}
    [winston] Attempt to write logs with no transports {"message":"Officer Update Error: SequelizeConnectionAcquireTimeoutError: Operation timeout","level":"error"}
    { SequelizeConnectionAcquireTimeoutError: Operation timeout
        at pool.acquire.catch.error (/app/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:289:52)
    name: 'SequelizeConnectionAcquireTimeoutError',
    parent:
        Error: Operation timeout
        at Timeout._timeout.setTimeout (/app/node_modules/sequelize-pool/lib/Deferred.js:19:19)
        at ontimeout (timers.js:436:11)
        at tryOnTimeout (timers.js:300:5)
        at listOnTimeout (timers.js:263:5)
        at Timer.processTimers (timers.js:223:10),
    original:
    Error: Operation timeout
        at Timeout._timeout.setTimeout (/app/node_modules/sequelize-pool/lib/Deferred.js:19:19)
        at ontimeout (timers.js:436:11)
        at tryOnTimeout (timers.js:300:5)
        at listOnTimeout (timers.js:263:5)
        at Timer.processTimers (timers.js:223:10) }
    == 20200624160649-create-officers-from-s3-after-district-seed: migrated (26.345s)
    ```

  - To fix this you will need to SSH into the env and re-run the seed script
    - In Heroku under the `noipm-playground` environment: click More -> Run Console
    - Once you see the prompt, enter this command to revert/undo the migration:

        ```bash
        yarn run sequelize db:seed:undo --seed 20200624160649-create-officers-from-s3-after-district-seed
        ```

    - Then re-run all the seeders using this command (this will only run seed scripts that have not been run already):

        ```bash
        yarn run sequelize db:seed:all
        ```
