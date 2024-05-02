---
layout: default
title: Pact Tests
parent: Tests
grand_parent: Pieces of the App
permalink: /pieces-of-the-app/tests/pact-tests
---

{: .warning-title }
> Check for Relevance
>
> This page may be about Complaint Manager 1.0. Should it be removed from this wiki?

{: .label .label-yellow }
Under Construction

{: .label .label-red }
To be Updated

# Pact Tests

Pact tests essentially draw a line down the middle of a client/server application (like ours) and has separate tests from end to middle for both client and server, thus replicating the assurance of end to end tests without as much fragility. The client tests inform the server tests, but they don't not run end to end, but just end to middle. This page is not meant to be an exhaustive document on Pact testing (for that see [pact.io](https://pact.io/)) but instead just a look at the specifics of how *we* implement Pact tests and the problems we've seen with them.

# Client Testing

## How to set them up

### Granularity

We try to write Pact client side tests at the granularity of a page (a page that corresponds to a route on `policeDataManagerRoutes.js`, `publicDataDashboardRoutes.js`, or `sharedRoutes.js`)

We have not been able to expand the scope beyond individual routes because we haven't been able to successfully render the entire app in the pact test, which is essentially what we'd need to test transitions between pages. This has led to some odd/small tests when a flow requires redirection (see the test "Search officers by name and select one" in `officer-search.pact.test.js`, which ends with an assertion that an officer selection thunk is called rather than completing the add process which spans multiple pages).

We do not want to scope the tests any smaller as Pact tests are meant to be integration tests that create a realistic view of the service requests the app will make in its normal functioning. We test lower level components in unit tests, but for Pact tests we want to test all the interactions of the page as though we were actually clicking through the app.

Because of a quirk in our current version of Pact we sometimes need to split up the tests for a page into multiple test files (see more on that at multiple points below), but the tests should still ultimately render the whole page, not just the component with which the tests in that file interact.

### Organization

Client Pact tests live in `src/pact/consumer`, and if there are multiple test files we create a folder within `src/pact/consumer` with the name of the page.

- If there are multiple files for a page, we include a helper file that has a function that sets up interactions that happen when the page loads, sets up any redux state that needs to be setup, and renders the page (example `src/pact/consumer/case-details/case-details-helper.js`).
- The helper function will then be called in the `beforeEach` of the individual test files.

### Test Structure

The main body of a test is just like a unit test using React Testing Library, but you should in general use more "findBy" calls and fewer "getBy" calls because the processes tend to be slower in a pact test than a unit test, so anything that wasn't necessarily visible before you took the previous action should by `await screen.findBy`...'ed instead of `screen.getBy`...'ed

The only difference from the structure of a unit test is that all `axios` calls made by the client need to have an "interaction" added in pact.

On the client side the interaction is simply a mock of the service call (whatever we setup the interaction to respond with is the response the axios call will get in our test). The interactions also serve to build up the server tests that will be run (more on that in the "Server Testing" section)

We tend to put service calls that are made when the page loads in the beforeEach of the test file (or in the helper function if the page is tested in multiple files), while the interactions triggered by the typing and button-pushing triggered with React Testing Library in the test go in the test itself.

Interactions don't need to be put in the right order, but they need to be registered *before* they're triggered (so API calls made on page load need interactions added before calling `render` and API calls made as the result of React Testing Library screen manipulation need to be added before doing those manipulations.)

The best way to find all of the API calls that are made in the process that you're testing is to run through that process in the app (local, CI, Staging it doesn't really matter) and watch the Network tab in the browser (filtering for XHR/fetch requests) to see what calls are made and what their payload are.

### Anatomy of an interaction

- Start with `await provider.addInteraction({`
- The interaction can have the following attributes:
  - **state**: just a string on the client side, which should accurately describe the state of the database that is needed for the service request to behave as expected. On the server side you will be able to write a state handler function to setup that desired state (see below) but **messing up the state string can only cause failures in the server test not the client test.**
  - **uponReceiving**: just a string on both sides, but it's important to give a string that describes the action you're taking (e.g. "get case" if you are calling a GET on cases/:caseId)
    - If you have multiple client interactions (in the same client test file or different ones) with the same combination of "state" and "uponReceiving" that have different response payloads then you will get an error
    - So if you expect a different response payload for the same call, either change the "state" (if the payload is different because of a different state) OR change the "uponReceiving" (if the payload is different because of a different input parameter)
- **withRequest**: an object with the following (possible) fields
    - **method**: the HTTP verb (GET, PUT, POST, DELETE, etc.)
    - **path**: the path (starting with /api) that points to the service handler (e.g. "/api/cases/1")
    - **headers**: (optional) an object with each request header (the key is the header name and the value is the header value)
      - the most common request header is `"Content-Type": "application/json"` but it is only needed if there's a request body (see the next bullet)
    - **body**: (optional) an array or object (or the result of a call to `like` or `eachLike`) representing the request body, if no request body is needed, you can leave this out altogether.
      - For request bodies you don't always need to use `like` or `eachLike`. Not using them (and just giving it an object or array) will add an assertion that the data requested during the client test is exactly what you expected, and using or not using like/eachLike won't affect the server tests
      - If you don't include a Content-Type header or you use the GET or DELETE method, Pact won't pass the request body along
  - **willRespondWith**: an object with the following (possible) fields
    - **status**: the expected response status (usually 200 if there's a response body and 204 if not)
    - **headers**: (optional) an object with each response header (the key is the header name and the value is the header value)
      - the most common response header is `"Content-Type": "application/json charset=utf-8"` but it is only needed if there's a response body (see the next bullet)
    - **body**: (optional) the result of a `like` or `eachLike` call with the expected response body
      - You should always use `like` and/or `eachLike` in the response body because you can't guarantee the exact values that will be returned during the server tests
      - Any fields that are optional can be left out, the matching on the server side will fail if there is a type mismatch or if something you expected isn't there, but if there's an attribute there that you didn't expect it will be fine
      - Do not include any fields with a null value as it will likely cause a failure on the server side

## Common Issues

### Missing Requests

This message (will be in red) means that the API calls listed beneath had interactions setup, but those API calls were not made in the process of the test.

- These errors can be important, but they can also be caused if you have an error in the test before the interaction is triggered, so you would expect the API call not to be made and that's not the problem
- So if you see a "Missing" API request, the first thing you need to do is scroll up to see if there are any RTL errors like you couldn't find an element with the given text. If that error stopped the execution of the test before it would have triggered the "Missing" API call, then the "Missing Request" isn't your problem.

### Unexpected Requests

This message (will be in red) means that the API calls listed beneath were made in the process of the test, but they don't have an interaction setup for them

- So either you missed adding an interaction for an API call that's supposed to happen
- OR you have an API call happening that shouldn't be happening.
- it's usually the former since there are always more calls happening than you think when you load a whole page.

### Can't Find DOM Element

You expect something to be visible but get an error that it can't be found. Obviously this is a broad problem that could have many causes, but here are some pact related possibilities:

- Nothing (or very little) rendered at all
- RTL will show you that this is the case, because when a getBy/findBy fails to find what it's looking for, RTL will log what *was* rendered (mostly in blue, green, yellow, and white) for you to compare.
  - If the page *did* render, this won't be very helpful because the log will cut off before any useful info is given (see below about changing that)
  - but it is very useful if it shows just `<body></body>` or `<body><div><div /></div></body>` or something like that, because that means basically nothing rendered.
    - If this is the case, look above and below for error messages because presumably an error caused the lack of render.
    - If there are no error messages, try tracing the execution of the render method to see if there are any scenarios where null or "" is returned.
- The Pact interaction that is supposed to return data necessary for rendering what you're looking for isn't working correctly.
  - This can be caused by many things (we recently found that if you accidentally set the status code to 204 then pact will not return a response body, even if you specify one, since 204 is meant for scenarios where there is no response body)
  - You can confirm this is the problem by console logging the output of the `axios` call.
- There is a timing issue:
  - we often expect everything happening in a test to happen immediately, but in pact tests we are setting up services to respond to API requests, which then feed that data into either local state or redux state, either of which takes time to fully reflect on the screen.
  - This is not usually a problem when we are clicking through the app, because we move much slower than the computer, but the lines of our test are executed within single or low double-digit milliseconds, so they can easily outrun the re-render.
    - That is why (as mentioned above) it's prudent to use more findBy calls so you can wait for the render to catch up, but sometimes that wait can be too long or the situation doesn't lend itself to just waiting for something to appear.
      - You can add more waits either conditional or unconditional by creating promises and awaiting them (see `case-tags.pact.test.js` for an example)
      - Alternatively you could add extra steps before trying to find whatever is dependent on the API call (like asserting that various static elements of the page are there)

### Timeouts

Timeouts happen on tests, and it may (or may not) be solvable by calling `jest.setTimeout` with a larger number, but the `pactWith` function that we use to enable the client tests has a bug that keeps you from changing the timeout from 30 seconds to anything else, so you may need to break up the tests into separate `pactWith`s.

- This can be done one of two ways: you can either split up the tests into multiple files, creating a sub-folder in `src/pact/consumer` and a helper file for your setup function
- OR you can follow the pattern in `case-tags.pact.test.js` and put the tests in an array and use a `forEach` to setup a separate `pactWith` for each test (see the large comment at the top of the file for more explanation)

### Things that **WON'T** affect the functioning of the Client Tests

I hope this will save you some time when debugging

- Anything in the `src/pact/provider` folder: the code in that folder only affects the server tests, so yes you might have some mismatching expectations in there, but it's not causing *client* tests to fail, and you can and should fix the client tests before moving on to those server tests**
- The "state" attribute on your interactions: as far as the client tests are concerned, the state is just a string. The state is essential in most server tests, so you want to set it appropriately, but not matter what you put in there, it's not breaking your *client* tests.
  - The one exception is if you have multiple interactions for an API endpoint across all your client tests that have the same "state" and "uponReceiving" attributes but different responses, which will cause a very specific pact error that you would see in the logs.

## Diagram
[Source](https://dzone.com/articles/improve-microservice-testing-with-contract-testing)

![](../assets/images/consumer-driven-contract-testing-1.png)

## Server Testing

### How to set them up

#### You Don't Write Pact Server Tests

The interactions in the client tests are used to create a contract file (`pact/pacts/complaint-manager.client-complaint-manager.server.json`), which is then read by the server test file and each interaction that we mocked on the client side is run against the server code.

The server tests then ensure that with the given request, the response that we mocked on the client side is actually returned, which is what links the two sides together, **so if you create or change any interactions on the client Pact tests, you are changing the server tests and need to re-run them**

#### What We *Do* Set Up for Server Tests

What we *do* change in the src/pact/provider folder are the `beforeEach` function and state handlers, which we use to populate the database with whatever we need for the tests to function properly.

`beforeEach` runs before each interaction is tested so some things that need to be in the database for most or all tests are setup there. As of this writing we setup the following in `beforeEach`:

- case statuses
- complaint types
- Referral and Complainant letter types with a default sender
- Resetting the letter type id sequence

State handlers are functions that we attach to the strings that describe a desired state. That function will be run if the interaction was declared with the corresponding string, so if we defined the interaction in the client test with the state "Case exists" then before running the server test for that interaction, it will run the state handler function attached to "Case exists" if there is one (and do nothing if there isn't one)

State handlers handle failures really badly. If an error gets thrown you'll just get the message that the state handler failed, like this `Error setting up provider state 'Case exists' for consumer 'complaint-manager.client' at http://localhost:33143/_pactSetup. response status=500 response body={}`. Because of this, be liberal with using try/catch in the state handlers and use console.logs in the catch so that when a failure occurs, you can see what happened. 

{: .note }
`response status=500` here does not indicate that the service call from the interaction returned a 500, confusingly (the setup is making internal service calls, and *that* is what returns a 500)

Another hard-to-notice message (it'll be near the top in blue) is `No state handler found for "case statuses exist", ignoring`, which means that there's not a handler defined for that state

- This may be fine: some interactions pass with just the stuff in the database that's setup in `beforeEach` which is fine
- But if you expected that state string to have a handler, then you may have forgotten to set it up, or have a typo on one side or the other (the strings need to be exactly the same)

### Test Structure

All the tests are really one test (running the "Verifier" against the contract file). The logs separate the tests into separate interactions, but they're all one test and have to all run through one test file (`provider.pact.test.js`). We can separate stuff out into functions in other files, so far we have two helper files named `case-helpers.js` and `letter-helpers.js`, but it's hard to keep the two concepts totally separate.

There are also a lot of helper functions at the top of the `provider.pact.test.js` file, which were extracted there so that they could be reused. As far as we know, we can't give multiple states to an interaction, so we often concatenate with colons, but have to manually run each helper function indicated for the state string. These functions could be extracted to other files if `provider.pact.test.js` gets too big and we can logically group enough of them for it to be worth it.

## Common Issues

### Error Setting up Provider State

`Error setting up provider state 'Case exists' for consumer 'complaint-manager.client' at http://localhost:33143/_pactSetup. response status=500 response body={}` See above (there's an error in your state handler and need to fix it). The problem is usually a database error like:

- foreign key constraint error: it's trying to add a row in the db with a foreign key reference to another table but the id in that other table doesn't exist, so the foreign key isn't referring to anything
- primary key constraint error: the primary key has to be unique, so another row already exists with that id (which means we added that one earlier, since we cleanup the database before and after every test, if this is a new table, make sure that it is truncated in the `cleanupDatabase` function)
  - This can happen even if you aren't manually setting the id and just letting it auto-increment if you manually set an earlier id and the sequence happened to auto-set that id
- Uniqueness error: similar to primary key constraint error, since other columns can also be marked unique
- NotNull error: you're leaving a column as null when it isn't allowed to be null. The risk of this should be minimal if you are using a test helper, since that should set all notNull fields in it's default function (unless it's a foreign key, which is harder to setup in that function)

### Response Payload Mismatch

This will look a lot like mismatches in jest expectations (with the + and - comparing Expected to Actual)

- Is the actual output just an error message AND/OR do the response statuses mismatch? If so then your server request is failing and you need to debug that (and the output was bound to mismatch becuase you're expecting a success response but are getting a failure one)
- Otherwise: What do the differences in output tell you, whether it's expected things missing or type mismatches?
  - Are the missing/mismatching things unessential/optional, like maybe you included those things in the client interaction because they were in the network tab but didn't really need them and now it turns out they're only sometimes returned from the service?
    - If so, you can remove them from the client interaction (and re-run the client tests, remember if you change the client interactions that won't affect the server tests until you re-run the client tests)
  - Are the missing/mismatching things stuff that the server really should be returning? In that case you need to debug the server side code and see if you maybe need to add more to the database in your state handler (**remember when each interaction starts, the test database is empty**, so if you need data to be in the db, it needs to be added in `beforeEach` or in the state handler)
  - Are you getting a type mismatch where the expected type is NilClass? If so, then your client interaction includes a "null" in the response body and so it's expecting that field to be null, but on the server side it is just as likely not to be returned, causing the mismatch.**
    - You'll need to go back to your client test and remove any "null" attributes (the whole attribute, key and value) from the response body, that way, whatever is returned in that field will be accepted
    - and re-run the client tests, remember if you change the client interactions that won't affect the server tests until you re-run the client tests.
  - Are you getting mismatches in the response body on specific values (rather than just types)? If so, then you forgot to use `like` or `eachLike` when defining the body in the client interaction. There are too many values we can't predict precisely in a service response to match on specific values here, so we need `like` and/or `eachLike`

### Request Body Comes Through as undefined on the server

The most likely cause of this (assuming that you provided a request body in the interaction) is another instance of Pact overthinking things. If you forgot to add a Content-Type request header (`headers: { "Content-Type": "application/json" }`), then Pact will still run the interaction but won't pass in your request body, which is an annoying way to handle it, but that's what we're dealing with.

### There's too much output and I can't see the error messages

Your console only shows a fixed number lines before it starts losing earlier lines. There are a couple solutions to this; perhaps the simplest solution is to redirect your output to a file, which doesn't have the same size restrictions.

    ```bash
    docker compose run --rm app yarn test:pact:server > output.txt
    ```

This will create a file called `output.txt` with the output of the tests (you will see less output on the terminal, don't be alarmed, you'll still see the pass/fail stuff at the end). You can look through `output.txt` for the logs you're missing. Remember to delete `output.txt` before committing tho.

## Diagram

[Source](https://dzone.com/articles/improve-microservice-testing-with-contract-testing)

![](../assets/images/consumer-driven-contract-testing-2.png)
