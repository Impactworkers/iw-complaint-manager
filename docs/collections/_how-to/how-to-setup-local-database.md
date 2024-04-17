---
layout: default
title: How to Set Up Your Local Database
parent: How To Guides
permalink: /how-to/set-up-local-database
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# How to Set Up Your Local Database

Start the local db

docker-compose up app will start the db (along with other things). If
you still get messages that noipm-db doesn't exist, try stopping the
process, running docker-compose down, and then restarting.

Connecting to the db directly

-   First, make sure that you've added db to your hosts file as
    outlined in .

-   Then use the credentials in the development section of
    sequelize_config.js (src/server/config/sequelize_config.js) to
    create a Postgres connection using DBeaver or any other db tool and
    test the connection (see screenshot)

Connect to the CI Database

-   Log in to Heroku & navigate to the noipm dashboard by clicking on
    the dropdown in the top left that says "Personal". Select
    "noipm".

-   Click "Heroku Postgres" in the bottom left of the Overview tab.


-   Navigate to Settings / Database Credentials / View Credentials.


-   In DBeaver, create a new database connection by clicking the icon in
    the top left that shows a plug with a green plus sign.

-   Select PostgreSQL as your database driver.

-   In the connection settings, fill out the fields with the
    corresponding credentials we pulled up earlier in the Heroku
    settings.

-   Click "Finish" to connect.

Pulling Data from the CI database (No need to do this for onboarding)

-   First you'll need to to facilitate the import/export.

-   Then you'll need to connect to the ci database via DBeaver.

    -   To do that you can find the credentials at data.heroku.com (use
        the 1Password credentials to login, then click noipm-ci ->
        Settings -> View Credentials...)


-   Next you right click on the entry for the ci database that has the
    db icon, then choose tools, then Backup (see screenshot)

-   On the popup screen you want to click the Local Client button at the
    bottom left to setup the postgres client

    -   The path should be
        /Applications/Postgres.app/Contents/Versions/13 (or maybe a
        higher version if you're reading this in the future)


-   After you've set that up, check the box in the top section of the
    popup and click start (this will create a file with the data in the
    ci db on your computer)

    -   This step takes a while, so if you can start it right before
        breaking for lunch or something, you'll be happier


-   Once the file is saved, right-click the local database entry with
    the db icon, then choose tools, then Restore and select the file you
    just saved (this will load the data into the local db)
