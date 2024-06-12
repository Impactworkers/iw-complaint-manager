---
layout: default
title: Creating a Release
parent: How To Guides
permalink: /how-to/create-a-release
---

{: .label .label-yellow }
Under Construction

# Creating a Release

## How to create PR

Our repo is using the [release-please](https://github.com/googleapis/release-please) library as a utilitity for release versioning. Commit messages must be made using conventional commit messages. The most important prefixes are:

-   `fix:` which represents bug fixes, and correlates to a SemVer patch.
-   `feat:` which represents a new feature, and correlates to a SemVer minor.
-   `feat!:` represents a breaking change (indicated by the !) and will result in a SemVer major.

See the [commit format page](../dev-guides/commit-format.md) for more detailed information. 

Release-please automatically parses the git commit history and adds commits that have this prefix to the pull request.

## How to Create a Release

Once you have tested your changes in the dev environment, if you'd like to create a release, review the PR in Github and verify that `CHANGELOG.md` file contains the proper commits/information that you are expecting. If satisfied with the `CHANGELOG.md`, squash and merge the PR request in Github.

Release-please will:

-   Bump the version in `package.json`
-   Trigger the CircleCI pipeline

## How to Release an Artifact to a Higher Environment

Once you merge the PR, the `CHANGELOG.md` and `package.json` files will be merged to the main branch, triggering the CICD pipeline.

To deploy the release artifact to the `staging` environment, go to CircleCI and make the approval in the pipeline that has the release version you are expecting in the title.

Once testing has been completed in the `staging` environment, go back to the same workflow run in CircleCI to release the same artifact to the `production` environment.

## Clean-up

To ensure the best practices, please delete the branch that was created after you have merged the PR.
