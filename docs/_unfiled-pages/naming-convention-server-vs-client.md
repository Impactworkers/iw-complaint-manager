---
layout: default
title: Naming Conventions for Server vs. Client
permalink: unfiled-pages/naming-conventions-server-vs-client
---

{: .label .label-yellow }
Under Construction

{: .label .label-red }
To be Updated

# Naming Conventions for Server vs. Client

## AGER > Add, Get, Edit, Remove

[ client side ]

**ADD:**

- appear on client and server

**GET:**

- *used on client and server

**EDIT:**

- appear on client and server

**REMOVE:**

- appear on client and server

### - worker is out of scope

## CRUD > Create, Retrieve, Update, Delete

[ server side ]

**CREATE:**

- appear on client and server

**RETRIEVE:**

- used mostly on the server side

**UPDATE:**

- appear on client and server

**DELETE:**

- only used on server

also..

- Models should be singular and camelCase

  - EX: db table is cases_inmates / model is caseInmate (see
        caseInmate.js)

- HTML values & test-ids should be kebab-case

  - EX. data-test-id="this-is-an-example"

- Functions start with a verb

- Booleans should start with "is", "has"; something is suggest a
    yes or no

some stuff:

- KISS: Keep It Simple Stupid

- DRY: Don't Repeat Yourself

- YAGNI: You Ain't Gonna Need It

resources:

- [Summary of 'Clean code' by Robert C. Martin](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29).
