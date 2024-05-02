---
layout: default
title: Monitoring Worker Jobs
parent: How To Guides
permalink: /how-to/monitor-worker-jobs
---

{: .warning-title }
> Check for Relevance
>
> This page may be about Complaint Manager 1.0. Should it be removed from this wiki?

{: .label .label-yellow }
Under Construction

{: .label .label-red }
To be Updated

# Monitoring of Worker Jobs

## Connecting to the queue

### Local

- `yarn run bull-repl`

- `connect -h redis -p 6379 --prefix noipm_q NOIPMQueue`

### CI/Staging/Prod

- Log into Heroku

- Get the `REDISCLOUD_URL` for the appropriate environment from
`Settings>Reveal Config Vars`

  - The format of the url should be:
    `redis://rediscloud:[password]@[host]:[port]`

  - use these details to use the connect command on the bull-repl
    shell

- Use the `Run Console` option under the M`ore menu to open a terminal
into the server

- Type bash into the Heroku run section in order to run the console

- Once in the console, run `yarn run bull-repl`

- Please refer to local connect command section and use the
    REDISCLOUD_URL to replace host and port and to add password (using
    the command line option `--password`)

## Basic Monitoring Commands

- `stats` - if want a summary of how many jobs have run on this queue

- `help` - if need to know more functions and their summaries

- `get<jobId...>` - if want to grab the job specific stats

- `completed` - if want to dump all completed job stats
