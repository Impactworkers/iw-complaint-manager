---
layout: default
title: How to Set Up a Stress Test
parent: How To Guides
permalink: /how-to/set-up-stress-test
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# How to Set Up a Stress Test

Considerations

-   Stress testing should take place in the Staging environment, as
    Loader.io (our load testing tool) is already a Heroku add-on for
    this environment.

-   Ensure that no one else is accessing Staging while performing stress
    tests, as this may skew results.

-   Review when defining test cases.

Steps

1.  Create a new target host with the name and then .

    -   With the verification, you should receive a .txt file with your
        loader.io token. Put this file within the server directory of
        our codebase.

    -   Now, in server.js, add the following:

app.get("/loaderio-{**token_name**}", function (req, res) {

return res.sendFile(

path.join(__dirname, "./loaderio-{**token_name**}.txt")

);

});

-   Then push these changes to staging on the desired branch.

1.  Then, with the test type that best fits your needs.

2.  Run test. Watch results.
