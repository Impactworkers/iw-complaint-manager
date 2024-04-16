---
layout: default
title: How to Switch Between Instances
parent: How To Guides
permalink: how-to/instances
---

# How to Switch Between Instances

> Now that we're actively developing for multiple instances (NOIPM and HAWAII) we need to be able to flip our environments between them, so here's how.                                                

**Switch environment variables**                                         

-   In your .zshrc file in your home directory (vim ~/.zshrc) you will need to switch the REACT_APP_INSTANCE_FILES_DIR variable value to point at the instance-files project for the desired instance.                                                        

-   In docker-compose.yml (in the project) in the services.app.environment section, find the ORG variable and set the value to the right one for your desired instance (NOIPM or HAWAII).                                                         

**Rerun startup**                                                        

> You will need to stop Docker so that you can restart so that the new variables will take effect                                           


- hit Ctrl-C in the terminal running Docker

- (after switching the env variables) run source ~/.zshrc in the terminal where you are gonna run Docker or else just plan to run Docker in a terminal that was opened after changing the env variables (since .zshrc is only run against the terminal when it starts up or if you specifically run it using the source command)

- There are two ways you can go from here:

- Do a docker compose down and then a docker compose up app (this will wipe out your local database and start over so don't use this plan if you have data on your local that you want to keep)

- Do a docker compose up app and once that has gotten past the database setup phase open another terminal (or run source ~/.zshrc in an already open terminal) then reseed the database using docker compose run --rm app yarn reseed:db, which will undo all the seeders and re-run them with the new env variables (this will preserve case data though some stuff will be stripped off of them like status and intake source, but it should all work... -ish)