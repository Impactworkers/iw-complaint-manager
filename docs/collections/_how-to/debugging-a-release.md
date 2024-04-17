---
layout: default
title: Debugging a Particular Release
parent: How To Guides
permalink: /how-to/debug-a-release
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Debugging a Particular Release

Finding the Right police-data-manager Commit

The commit for a release will be in a release branch (it should be in
the branch release_v<version # of the release>) but if the release
was created manually it could vary (check the version in package.json to
see if it matches your tag). For pipeline created releases the commit
will have the name "cut release version <version #>" but if it was
created manually that will probably not be the case and you'll want to
try the last commit on the release branch.

Finding the Right instance-files-noipm Commit

On a pipeline generated release, the commit hash will be saved in the
built image in the file instance-files/git.revision. You should be able
to run **sh** on the police-data-manager image and cat
/app/src/instance-files/git.revision to get the git commit and checkout
that commit via the hash.

If the release was created manually this file will not be created.
