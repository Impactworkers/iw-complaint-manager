---
layout: default
title: Flakey Test Record
parent: Unfiled Pages
permalink: /unfiled/flakey-test-record
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Flakey Test Record

Welcome

**Please use this wiki page to post about flaky failing tests in the
pipeline or your local. Future spikes will use this page as reference to
deal with a flakey test. Just as well, if you are working on a flakey
test spike, include information about which specific test failed and
once the spike is completed, come back and update this page with
findings. **

Spike - Flakey worker test 3/8/2023

-   **ISSUE: & **

-   **FIX: Added 'cleanupDatabase()' in 'beforeEach' for all server
    side tests that utilize 'caseStatus' model.**

-   **FIX: Added 'cleanupDatabase()' in 'worker.test.js' in the hope
    that this aid in memory issues. Also, increased
    'max_old_space_size' in 'package.json' for the
    'test:server:worker' command. **

Flakey Test Reports:

-   **Link to pipeline failure/Screenshot of failing test**

-   **Description of where the test failed**

-   **Additional information on how to replicate/suspected causes**

-   **Date flakey test was found**

3/10/2023 - src/server/seeder_jobs/updateSeedOfficerDataFromS3.test.js

**Failed with a unique constraint violation for district id ()**

3/10/2023 - src/pact/consumer/case-details/remove-officers.pact.test.js

**Failed to find the Snackbar success message (officer has been
successfully removed, )**

3/13/2023 - case-tags.pact.test.js

3/13/2023 - src/server/sequelizeHooks/dataChangeAuditHooks.case.test.js

**Test Timeout ()**

4/3/2023 -
src/client/policeDataManager/cases/ReferralLetter/thunks/editOfficerHistory.test.js

**Cannot Read Properties of undefined (reading 'body') **

**5/3/2023 -
src/server/sequelizeHooks/dataChangeAuditHooks.case.test.js**

**Test Timeout ()**
