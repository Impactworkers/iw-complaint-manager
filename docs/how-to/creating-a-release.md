---
layout: default
title: Creating a Release
parent: How To Guides
permalink: /how-to/create-a-release
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Creating a Release

Pick a Pipeline

Any master pipeline can now be promoted to a release (with a few
exceptions noted below), so the first step to creating a release is to
choose a master pipeline in .

Manual Jobs

On the master pipeline you choose you might need to deploy it to CI for
New Orleans if you haven't already. This control is intended to make it
so that we don't promote a pipeline to release unless it can be
deployed to and passes e2e tests for both orgs.

Once you've deployed NO to CI, you'll need to then approve the
"create-release" manual job, which will trigger a process that creates
a new release tag based on the .

For more information on semantic versioning, see .

Build and Release

Picking the version will trigger jobs to update the version and build.
After the build is finished, another pipeline will kick off that deploys
the code to the staging environment, runs e2e tests on the staging
environment, then awaits approval for release. This will allow for
regression testing and demos to stakeholders before triggering the
manual approval step to release to production.

Re-Releasing a Previously Built Version

To re-release a version that was previously built, you simply need to
restart the release pipeline (not the master pipeline, but the one that
is triggered after it), which will take the images that were already
built and deploy to stage, then await approval to deploy to production.

This will not roll back any migrations/seeders, so you may need to
manually roll some back if there are significant migrations/seeders that
will break the previous release.

Pipelines that can't be Released

This setup is designed to allow any master pipeline to be promoted to a
release, but there are a couple of exceptions to that rule

-   Pipelines that are more than 14 days old will fail to release
    because the pipeline's workspace will have expired

-   When releasing, we create a commit that we push to a release branch
    and then merge into master, triggering another pipeline. Any
    pipelines that ran between the released pipeline and the new
    pipeline triggered by that merge cannot be released because the
    version history would be off

if we need to release on commits that don't have a pipeline or only
have pipelines that can't be released, we can manually build the images
and push to a release branch

Manually Releasing

Disclaimer: this should only be necessary in one of the scenarios
mentioned in the previous section. Also this represents the process for
manually releasing for new orleans, you'll need to choose the
hawaii-csoc instance files and add hawaii to all the image names for a
hawaii release.

-   In order to manually create a release you will need to identify the
    appropriate commit on both police-data-manager and
    instance-files-noipm (try to verify these by checking out the
    commits and running tests locally)

-   Choose a version #. It must be unique and it should be a bump of the
    major, minor, or patch version (see above) from the previous release
    if possible. We'll use this same version number for both instance
    files and police-data-manager

-   Create a branch in police-data-manager off of the commit that
    you're releasing. The branch should be named release_v<version
    #>. Do not push to this branch until after you've done the build
    steps.

-   Update package.json in police-data-manager to reflect the new
    version number

-   In instance-files-noipm (having checked out the appropriate commit)
    run the following commands to push a tagged version of instance
    files to Docker Hub

    -   docker build -t publicdataworks/instance-files-noipm:<version
        #> .

    -   docker push publicdataworks/instance-files-noipm:<version #>


-   in police-data-manager (having checked out the appropriate commit)
    run the following commands to build and push tagged versions of
    police-data-manager

    -   docker build -f Dockerfile.web --build-arg
        REACT_APP_ENV=staging --build-arg
        REACT_APP_GOOGLE_API_KEY=$REACT_APP_GOOGLE_API_KEY_PREPROD
        --build-arg INSTANCE_VERSION=<version #> -t
        publicdataworks/police-data-manager-staging:<version #> .

    -   docker build -f Dockerfile.web --build-arg
        REACT_APP_ENV=production --build-arg
        REACT_APP_GOOGLE_API_KEY=$REACT_APP_GOOGLE_API_KEY_PRODUCTION
        --build-arg INSTANCE_VERSION=<version #> -t
        publicdataworks/police-data-manager-production:<version #> .

    -   docker build -f Dockerfile.worker --build-arg
        INSTANCE_VERSION=<version #> -t
        publicdataworks/police-data-manager-worker:<version #> .

    -   run: docker push
        publicdataworks/police-data-manager-staging:<version #>

    -   run: docker push
        publicdataworks/police-data-manager-production:<version #>

    -   run: docker push
        publicdataworks/police-data-manager-worker:<version #>


-   If the version in package.json in master is lower than your new
    version number, update the version in master and push it.
