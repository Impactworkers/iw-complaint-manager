---
layout: default
title: ADR 006 - Choose Vitest or Jest as testing library for Complaint Manager v2.0
parent: Architecture Decision Records
permalink: /adrs/adr-006
---

# 006 - Choose Vitest or Jest as testing library for Complaint Manager v2.0

### Date

04/11/2024

### Status

Proposed
{: .label .label-yellow }

### Context

Our current testing framework is Jest. This ADR explores switching to [Vitest](https://saucelabs.com/resources/blog/vitest-vs-jest-comparison) for CM 2.0, a faster and more modern testing framework.

### Decision

We propose adopting Vitest for our testing suite. Vitest offers:

* **Speed:** Faster test execution compared to Jest.
* **Compatibility:** Built to use with Vite

**Consequences**

* **Positives:** Faster testing improves development efficiency and addresses pain point from CM v1.0.
* **Negatives:** Vitest only works with the Vite framework, so if we ever switch to let's say Next.js, we'd have to convert our tests to Jest.
