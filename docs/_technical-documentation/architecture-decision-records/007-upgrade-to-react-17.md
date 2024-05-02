---
layout: default
title: ADR 007 - Upgrade to React 17
parent: Architecture Decision Records
permalink: adrs/adr-007
---

{: .warning-title }
> Check for Relevance
>
> This page may be about Complaint Manager 1.0. Should it be removed from this wiki?

# 007 - Upgrade to React 17

### Date

04/30/24

### Status

Accepted
{: .label .label-green }

### Context

We to use MUI X Data Grid to display database info & realized it was only compatible with React 17 or 18. We're using React 16, which is 2 major versions and several years behind.

After a spike, we learned that upgrading to React 18 would require us to refactor about 80 tests that use the Enzyme testing library, which is not supported by React 18. Other than that, there are few major differences between React 17 and 18.

### Decision

We're upgrading to React 17 so we can quickly implement the MUI X Data Grid Component. We'll also create a card to refactor the Enzyme tests and upgrade to React 18 later.

### Consequences

There will be a handful of failing tests that result from breaking changes/incompatibilities, and we'll have to fix those.
We still aren't be completely up-to-date with the latest React version, but have a plan to get there eventually.
This upgrade will also allow us to upgrade MUI and use MUI X Data Grid.
