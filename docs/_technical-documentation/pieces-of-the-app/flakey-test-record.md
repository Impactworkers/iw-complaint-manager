---
layout: default
title: Flakey Test Record
parent: Tests
grand_parent: Pieces of the App
permalink: /pieces-of-the-app/tests/flakey-test-record
---

{: .warning-title }
> Check for Relevance
>
> This page may be about Complaint Manager 1.0. Should it be removed from this wiki?

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Flakey Test Record

## Welcome

Please use this wiki page to post about flaky failing tests in the pipeline or your local. Future spikes will use this page as reference to deal with a flakey test. Just as well, if you are working on a flakey test spike, include information about which specific test failed and once the spike is completed, come back and update this page with findings. 

### Spike - Flakey worker test 3/8/2023

- ISSUE: https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FPublicDataWorks%2Fcomplaint-manager%2F1276%2Fworkflows%2F69de4989-ea8a-44b2-b68c-62350fc209e8%2Fjobs%2F9591%3Finvite%3Dtrue%23step-104-4947

- FIX: Added 'cleanupDatabase()' in 'beforeEach' for all server side tests that utilize 'caseStatus' model.

- FIX: Added 'cleanupDatabase()' in 'worker.test.js' in the hope that this aid in memory issues. Also, increased 'max_old_space_size' in 'package.json' for the 'test:server:worker' command.

Flakey Test Reports:

- Link to pipeline failure/Screenshot of failing test
- Description of where the test failed
- Additional information on how to replicate/suspected causes
- Date flakey test was found

### 3/10/2023 - `src/server/seeder_jobs/updateSeedOfficerDataFromS3.test.js`

Failed with a unique constraint violation for district id ([Pipeline link](https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FPublicDataWorks%2Fcomplaint-manager%2F1624%2Fworkflows%2Feb950cf2-cb85-46d3-bd5d-9113260d8b97%2Fjobs%2F11166%3Finvite%3Dtrue%23step-104-2233))

### 3/10/2023 - `src/pact/consumer/case-details/remove-officers.pact.test.js`

Failed to find the Snackbar success message (officer has been successfully removed, [link](https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FPublicDataWorks%2Fcomplaint-manager%2F1625%2Fworkflows%2F7b536d76-0819-4ac0-902c-f7879a91d585%2Fjobs%2F11174%3Finvite%3Dtrue%23step-104-4697))

### 3/13/2023 - `case-tags.pact.test.js`
[Failed to find the caseTagChip](https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FPublicDataWorks%2Fcomplaint-manager%2F1637%2Fworkflows%2Fd8478d15-ad7b-4780-aacf-499ea58b631c%2Fjobs%2F11228%3Finvite%3Dtrue%23step-104-4862)

### 3/13/2023 - `src/server/sequelizeHooks/dataChangeAuditHooks.case.test.js`

Test Timeout ([Pipeline link](https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FPublicDataWorks%2Fcomplaint-manager%2F1642%2Fworkflows%2F4433055b-2774-4fd4-b8ac-6517261443e5%2Fjobs%2F11300%3Finvite%3Dtrue%23step-104-3555))

### 4/3/2023 - `src/client/policeDataManager/cases/ReferralLetter/thunks/editOfficerHistory.test.js`

Cannot Read Properties of undefined (reading 'body') [Pipeline link](https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FPublicDataWorks%2Fcomplaint-manager%2F1766%2Fworkflows%2F6bcc56f5-4112-4564-9180-69a4390b7109%2Fjobs%2F12007%3Finvite%3Dtrue%23step-104-4191)

### 5/3/2023 - `src/server/sequelizeHooks/dataChangeAuditHooks.case.test.js`

Test Timeout ([Pipeline link](https://app.circleci.com/pipelines/github/PublicDataWorks/complaint-manager/1941/workflows/9ea9aae2-30cb-4761-a419-a93147b5574e/jobs/13163/parallel-runs/0/steps/0-104))
