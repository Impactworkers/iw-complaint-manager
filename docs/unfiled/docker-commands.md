---
layout: default
title: Docker Commands
parent: Unfiled Pages
permalink: /unfiled/docker-commands
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Docker Commands

**Docker run [image name]**

Runs instance of image if on the host (exists), if not, pulls image from
hub (only done first time)

**Docker ps**

Lists all running containers

**Docker ps -a**

List all running and all stopped containers

**Docker start [name of container]**

Starts specific container

**Docker stop [name of container]**

Stops container

**Docker kill [name of container]**

Force stop container

**Docker volume prune**

Remove all local unused volumes

**Docker rm [name of container]**

Removes container, can name multiple at one time

**Docker rm -f $(docker ps -a -q)**

Force removes all containers

**Docker volume rm $(docker volume ls -q)**

Removes all volumes

**Docker image**

List of images and size

**Docker kill [image name]**

Kills image (hard stop)

**Docker rmi [image name]**

Removes image (make sure it's not being used or running)

**Docker pull [image name]**

Pulls image from docker hub & doesn't run

**Docker run [image name] sleep 5**

Runs container, sleeps for 5 seconds, then exits

**Docker exec [container name] [command]**

Execute specific command on running container

**Docker run -d [container name]**

runs container in background (detached)

**Docker attach [id of container - first few characters], **

Attaches detached containers

**Docker run -it [container name]:[version number] bin/bash**

Runs & bashes into container in interactive mode

**Docker system prune -a**

Clear up docker disk space

**Docker logs -f [container name/id]**

View logs of container

Police Data Manager Specific

**Docker-compose up app**

Runs application locally

**Docker-compose run app bash**

Bash into app container

**Docker-compose run e2e bash**

Bash into e2e container

**Docker-compose run worker bash**

Bash into worker container

**Docker-compose run security-checks**

Run security checks

**Docker-compose start worker**

Starts the worker container example

**Docker-compose kill worker**

Force stops the worker container example

**Docker-compose run app yarn test:client**

Run the client tests

**Docker-compose run app yarn test:server**

Run the server tests

**Docker-compose run app yarn test:worker**

Run the worker tests

[Building & Pushing Docker Images]{.underline}

**make sure Dockerfiles are up to date*

**NOIPM INSTANCE FILES:**

Docker build -t publicdataworks/instance-files-noipm:[version number]
.

Docker push publicdataworks/instance-files-noipm:[version number]

**NOIPM E2E:**

Docker build -f e2e/Dockerfile.e2e -t
publicdataworks/e2e-noipm:[version number] .

Docker push publicdataworks/e2e-noipm:[version number]

**DEMO INSTANCE FILES:**

Docker build -t publicdataworks/instance-files-demo:[version number] .

Docker push publicdataworks/instance-files-demo:[version number]

**DEMO E2E:**

Docker build -f e2e/Dockerfile.e2e -t publicdataworks/e2e-demo:[version
number] .

Docker push publicdataworks/e2e-demo:[version number]

**DOCKER-NODE-UBUNTU:**

Docker build -f docker-node-ubuntu/Dockerfile -t
publicdataworks/docker-node-ubuntu:[version number] .

Docker push publicdataworks/docker-node-ubuntu:[version number]

**DOCKER-HEROKU:**

docker build -f docker-heroku/Dockerfile -t
publicdataworks/docker-heroku:[version number] .

docker push publicdataworks/docker-heroku:[version number]

**DOCKER-SSH:**

docker build -f docker-ssh/Dockerfile -t
publicdataworks/docker-ssh:[version number] .

docker push publicdataworks/docker-ssh:1.0.0
