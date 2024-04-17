---
layout: default
title: Project Infrastructure
parent: Unfiled Pages
permalink: /unfiled/project-infrastructure
---

# Project Infrastructure

*(last modified on 07/19/19)*

Tech notes and decisions

-   **Failover of App Servers**

    -   We run two next to each other (one for web, one for worker) per
        environment. All Heroku environments are on the Hobby plan. If
        this goes down for some reason, it will take a little bit of
        time for us to bring up a new server. This shouldn't happen, but
        it's possible.

-   **Failover of Database Servers**

    -   We only run one instance of the db now, so we do not get
        automatic failover of the db.

    -   We do have db backups (continuous over last 4 days, daily
        snapshots for 4 weeks)

-   **Isolation of Dynos**

    -   The hobby dynos run on a shared Amazon instance, but is
        isolated.


-   **Environments**

    -   We currently have CI, staging, and production.

    -   CI gets automatically deployed from each push to the master
        branch. Staging gets automatically deployed from each push to
        the configured release branch. Production is a manually
        triggered deployment.


-   **Automatic Logout**

    -   Tokens expire after 8 hours. This is configurable.

    -   The time limit does not have anything to do with inactivity,
        it's just 8 hours from when you log in. Ursula asked for the
        time limit to be this long to last the work day.


-   **Permissions of Access to Services (**Heroku, AWS, etc)

    -   We currently store username and password of our admin accounts
        in 1password, which core team members have access to.

    -   As of September 25, 2019, we have moved Auth0 secret key to IAM
        on AWS. This gives core members and contributors access without
        storing any secrets on local machines.


-   **Logging/Alerting**:

    -   We currently log all request/responses/errors for staging, and
        all errors for production.

    -   Logs are automatically sent to Papertrail and Sumo Logic at the
        moment. We will either use Papertrail for both log storage and
        alerting, or new relic for error alerting.

    -   Papertrail:


-   **Papertrail**

    -   Papertrail stores our logs with a 7 day search history.

    -   We currently have alerts on staging and production for
        **app/web-1 error -"Invalid token"**

    -   Alerts go to Slack and the noipm email

    -   To access Papertrail logs, go to the , select your environment,
        and under Add Ons, click "Papertrail".

-   **Domain Name:**

    -   We are using Heroku's name ( and ).


-   **Maintenance Page:**

    -   We do not have a custom maintenance page if the app is down. We
        put the app in maintenance mode when we do a deploy so no one
        hits it during migrations.


-   **Deployments:**

    -   Our deployments are very quick, we just switch out the docker
        container, though there could be a small downtime.

    -   We put the app in maintenance mode, then run migrations/seeds
        from CircleCI, then deploy, then take it out of maintenance
        mode.

    -   We have told IPM we will deploy Tuesdays at 9:00. Any other time
        we need to deploy we should let them know so we don't interrupt
        their work.


-   **Validation of Data Input**:

    -   We are only doing data validations on the frontend/client of the
        application. We do have some database constraints like not null
        and restricted values on some fields, but we do not replicate
        all validations on the server/api.


-   **Search within the App**:

    -   We use elasticsearch for searching cases.

    -   We are currently doing officer and allegation search as Postgres
        queries.

    -   We don't handle relevancy or anything fancy.

-   **Google Maps API**

    -   We use an API key for Google Maps that is associated with the
        noipm.infrastructure Google account.

For Concerns and Considerations Regarding Current Project Infrastructure
