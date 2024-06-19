---
layout: default
title: Commit Format
parent: Development Guides
permalink: dev-guides/commit-format
---

{: .warning-title }

> Requires Review
>
> This page details the commit format we were using for Complaint Manager 1.0. We need to take a look at this as a team and determine whether we should update our practices.

# Commit Format

**<type>(<scope (optional)>){! if breaking}: <names of contributors> [#<issue number (optional)>]<brief description of the commit>**

**<commit body (optional)>**

**<commit footer (optional)>**

Due to our move to [the standard-version library](https://www.npmjs.com/package/standard-version) that determines the new version for a release and populates a changelog, we need to be deliberate about our commit messages, specifically using the template above (don't worry there will be examples).

## Type

The type prefix is the most important part of the commit because standard-version will use it to determine whether the commit should be included in the changelog and if the release should be major, minor, or patch. Here are the current supported types

### Feat

The feat type indicates a feature, i.e. new functionality not previously advertised as part of the application

Example commit message: **feat: Summer/Morty [#08240505] adds automatic release for de-pickling serum, so that Pickle Rick no longer has to fashion legs to get it**

A feat commit will be reflected in the list of features in the changelog for the release and will cause the release to be at least a minor release.

### Fix

The fix type indicates a bugfix, i.e. a fix to previously committed code that does not in itself introduce new functionality

Example commit message: **fix: Kaylee [#9809845] plugs the g-line straight into the port-pin-lock to bypass faulty reg couple**

A fix commit will be reflected in the list of bug fixes in the changelog for the release

### Chore

The chore type indicates work that has to be done from time to time but doesn't warrant a big deal being made about it.

Example commit message: **chore: Lex/Karan updates dependencies**

A chore commit will not appear on the changelog in the current
configuration

### Docs

The docs type indicates a change that only touches documentation like the README.

Example commit message: **docs: Abed [#97987987] left a map to secret buried treasure in the README**

A docs commit will not appear on the changelog in the current configuration

### Style

The style type indicates an insignificant change that purely affects the style of the application. Note that if the style change is considered a feature, it should be marked feat, or if the change fixes a bug, it should be marked fix.

Example commit message: **style: Isabel [#0980394] sets the top margin to 10px on the page header**

A style commit will not appear on the changelog in the current configuration

### Refactor

The refactor type indicates a change that improves the code without making any difference in functionality. (If you haven't read , I highly recommend it.)

Example commit message: **refactor: Karan [#09809339] extracts component for common modals**

A refactor commit will not appear on the changelog in the current configuration

### Perf

The perf type indicates a change that improves the performance of the application without changing its functionality

Example commit message: **perf: Sarge [#0984309] kicks this baby into slipspace**

A perf commit will not appear on the changelog in the current configuration

### Test

The test type indicates a change that only adds or fixes tests

Example commit message: **test: Andrew [#0948340] adds tests for edge cases relating to tag management**

A test commit will not appear on the changelog in the current configuration

## Scope

The scope is optional and can be added in parentheses after the type and before the colon. There is no set group of values; whatever you put down as the scope will be used as the prefix for the change in the changelog

Example commit message: **feat(tagmgmt): Lex/Andrew [#04840400] adds the ability to delete multiple tags at once**

## !

Add an exclamation point before the colon (but after the type and scope if present) if the change is breaking. This will cause the next release to be a major version release, which alerts consumers that a breaking change has occurred.
