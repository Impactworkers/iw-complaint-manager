---
layout: default
title: ADR 005 - Remove function for removing duplicated officers in UI NOIPM
parent: Architecture Decision Records
permalink: /adrs/adr-005
---

# 005 - Remove function for removing duplicated officers in UI NOIPM

### Date

04/10/2024

### Status

Accepted
{: .label .label-green }

### Context

[Issue #328](https://github.com/PublicDataWorks/complaint-manager/issues/328) – Do not display duplicated officers in the UI.

[ADR-001](https://impactworkers.github.io/iw-complaint-manager/adrs/adr-001) - Pevent duplicate officers in the UI.

### Decision

- The development made when this card was played is no longer necessary.
- [Issue #477](https://github.com/orgs/PublicDataWorks/projects/1/views/3?pane=issue&itemId=52702677) - Run officer table script to fix roster issues. Fixes duplicated officers in the UI moving forward.
- Therefore, we need to search the codebase and remove the changes that were added.

### Consequences

No longer needed feature has to be removed in order to maintain clean and readable code.
