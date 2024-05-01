---
layout: default
title: Concerns and Considerations
parent: Unfiled Pages
permalink: /unfiled/concerns-and-considerations
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Concerns and Considerations

*(last modified on 07/19/19)*

## Pricing of external services being used
https://docs.google.com/spreadsheets/d/1_kxAjv9vRIImJXxjdSj87_Gm0lBT6eMYf_v60OLA_po/edit#gid=0

- **Failover of App Servers**
  - If we use the Standard or Performance tier, we can run multiple
    instances and get scalability and failover. It also provides application metrics and threshold alerting.
  - Standard-1x is $25/mo. Hobby is $7/mo.
  - You can specify the region where the dyno is created if we
    wanted to run them in multiple regions.
  - https://devcenter.heroku.com/articles/dyno-types
  - https://devcenter.heroku.com/articles/usage-and-billing
  - https://stackoverflow.com/questions/38959503/what-exactly-is-a-heroku-compute-on-a-dyno
  - Considerations - very low traffic, easy to redeploy a new
    instance. How important is having failover vs cost?

- **Failover of Database Servers**
  
  - https://devcenter.heroku.com/articles/heroku-postgres-ha#after-failover
  - *All Premium, Private and Shield tierplans come with the High Availability
    (HA) feature, which involves a database cluster and management system designed to increase database availability in the face of hardware or software failure that would otherwise lead to longer downtime. When a primary database with this feature fails, it is automatically replaced with another replica database called a standby.*
  - Premium starts at $200/month: https://elements.heroku.com/addons/heroku-postgresql

- **Performance Testing / Throughput**

  - We haven't done performance testing, but we only expect 2-3
    users.
  - We use a dynos that run on a shared AWS instance. Performance
    could be variable based on that.
  - https://devcenter.heroku.com/articles/dynos

- **AWS S3**

  - We could move this over to Azure to take advantage of the
    complimentary service for not-for-profit companies.
  - Consider this before adding more functionality in AWS. (This
    would come up if we do work to download attachments directly
    from S3)

- **Multifactor Authentication**

  - Auth0 offers MFA and enhanced password protection for with the
    Developer Pro Plan. Would be a good idea.
  - Previously the pricing for MFA plan was $600-750/month, which
    is why we didn't do it. They recently changed their pricing to
    adjust by how many users you have.
  - Current pricing is $14/mo for 100 active users. https://auth0.com/pricing
  - They offer free service for open source, non-profit projects.
  - How important is MFA?
  - MFA for other services, like AWS?

- **Automatic Logout**

  - The timeout doesn't automatically redirect you from a page
    that you leave sitting open. You'd get logged out when you try
    to take an action though.
  - There may be a way of handling these cases, but initial
    decision was that it was not needed considering the effort.

- **Papertrail**

  - Current plan as of 2018/07/06, allows 50MB logs per day. Next
    plan allows 100MB/day.

- **Domain Name**

  - We could register a custom domain name if that was
    important.

- **SSL Certificates:**

  - Heroku automatically manages and renews SSL certs for us for
    free. It does not support wildcard domains if we ever needed
    that.
    https://devcenter.heroku.com/articles/understanding-tls-on-heroku

- **Maintenance Page**

  - If we want to customize it, we can. https://devcenter.heroku.com/articles/error-pages

- **Validation of Data Input**

  - There was a decision made early on in the project for faster
    development/delivery to forgo server side validations since
    users are known and trusted.
  - This is something that would take time/effort to implement if
    we decide it's important in the future, like if we opened up
    case creation to other users.

- **Search within the App**

  - Future requirements may warrant something like Elasticsearch
    or Solr. There are several search add-ons available in Heroku,
    for varying costs.

- **Google Maps API**

  - It restricts access by referrer url. If it stops working, it
    could be due to the restrictions or the billing info. The first
    year is free, though we have a credit card set up for future.
