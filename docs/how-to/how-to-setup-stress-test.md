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

## Considerations

- Stress testing should take place in the Staging environment, as Loader.io (our load testing tool) is already a Heroku add-on for this environment.
- Ensure that no one else is accessing Staging while performing stress tests, as this may skew results.
- Review [Heroku's run time limits](https://devcenter.heroku.com/articles/load-testing-guidelines#common-runtime-limits) when defining test cases.

## Steps

1. Create a new target host with the name https://noipm-staging.herokuapp.com and then [follow steps to verify by http](https://support.loader.io/article/20-verifying-an-app#http).

  1. With the verification, you should receive a `.txt` file with your loader.io token. Put this file within the server directory of our codebase.
  2. Now, in `server.js`, add the following:

```javascript
app.get("/loaderio-{**token_name**}", function (req, res) {
  return res.sendFile(
    path.join(__dirname, "./loaderio-{**token_name**}.txt")
  );
});
```

  3. Then push these changes to staging on the desired branch.

2. Then, [create your stress test](https://support.loader.io/article/15-creating-a-test) with the test type that best fits your needs.
3. Run test. Watch results.
