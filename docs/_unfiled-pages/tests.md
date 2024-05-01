---
layout: default
title: Tests
parent: Unfiled Pages
permalink: /unfiled/tests
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Tests

## Unit Tests

Unit tests are meant to test individual units of the code (definitions
of units may vary) and are not meant to cover all integration points.
They live next to the code that they test. There are separate scripts to
run client tests (which don't need to run on docker) and server and
worker tests (which do need to run on docker).

### Client Unit Tests

Run client unit tests: `yarn test:client`

Run client unit tests with coverage metrics like it's run in the
pipeline: `yarn test:client:ci`

### Backend Unit Tests

Run server unit tests: `docker compose run --rm app yarn test:server`

Run worker unit tests: `docker compose run --rm app yarn test:worker`

Run server, worker, and sharedUtilities tests: `docker compose run
--rm app yarn test:server:worker`

**Run server, worker, and sharedUtilities tests with coverage metrics
like it's run in the pipeline: docker compose run --rm app yarn
test:server:worker:ci**

### Tools

- Jest - test and assertion engine

- React Testing Library - UI manipulation (preferred)

- Enzyme - UI manipulation (older)

- *Nock - service mocking

- MSW - service mocking

- Supertest - service request mocking

- Compare-pdf - visual comparison of generated PDFs

## Pact Tests

Pact tests are integration tests meant to create a service contract on
the client side by using the contract for a service mock. When the
client tests pass, they create a json file that defines the contract,
which can then be run against the server. Pact tests live in the
`/src/pact` folder (`/src/pact/consumer` has client tests and
`/src/pact/provider` has the server tests). The pact contract lives in
`/pact/pacts` and may need to be deleted if you change the state or
uponReceiving field in a client pact test.

Run client pact tests (do this first): `yarn test:pact:client`

Run server pact tests: `docker compose run --rm app yarn
test:pact:server`

### Tools

- Jest - test and assertion engine

- React Testing Library - UI manipulation

- Pact - contract testing, service mocking

[More on Pact Testing](https://impactworkers.github.io/iw-complaint-manager/unfiled/pact-tests)

## Postman Tests

Postman tests send requests to real running servers and run in the
pipeline against CI and Staging. Our Postman tests test the letter
generation flow specifically.

### Tools

- Postman - Server integration tests

- Newman - Test Runner

## E2E Tests

Nightwatch runs a headless browser to test the application from end to
end. Unfortunately it is super-flaky, so we are phasing it out in favor
of pact tests.

### Tools

- Nightwatch - browser automation testing tool
