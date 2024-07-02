---
layout: default
title: ADR 008 - Remix or Vite
parent: Architecture Decision Records
permalink: adrs/adr-008
---

# 008 - Remix or Vite

### Date

05/15/24

### Status

Accepted
{: .label .label-green }

### Context

At the moment, Vite has no official backend integration. Configuration and 3rd party packages are required to use Vite with any sort of traditional backend. Remix is a framework that uses Vite as a compiler and allows deployment to any JavaScript runtime.

### Decision

We are choosing the Remix framework over just using Vite by itself. Remix is a full-stack framework while Vite is essentialy a static file server with enhancements. Remix uses Vite as the default compiler, so we get the benefits of Vite in a full-stack framework.

### Consequences

Initial setup of a full-stack application will be easier and more manageable. We will need to learn the Remix framework. We will be locked into the Remix framework. Setting up some packages may require some workarounds. Workarounds are required for **Material UI** and **Storybook**. However, I have already found and tested workarounds for both **Material UI** and **Storybook**.
