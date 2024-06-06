---
layout: default
title: Selector
parent: Development Guides
permalink: /dev-guides/selector
---

{: .warning-title }
> Complaint Manager 1.0
>
> This page references code from Complaint Manager 1.0. It should be updated with Complaint Manager 2.0.

{: .label .label-red }
To be Updated

# Selector

A selector is a tool that is used occasionally when doing a complicated mapping from the redux store to props of a component. The selector determines what pieces of the redux store are necessary for the mapping and then if subsequent calls have the same value for all of those pieces of state, it returns the previous result instead of re-running the mapping, which can save a lot of processing power since the mapStateToProps function runs every time the component re-renders.

[More about Selectors](https://github.com/reduxjs/reselect#basic-usage)

## Example

From `letter-types-selectors.js`

```js
import { createSelector } from "reselect";

export const separateTemplateHeadFromBody = createSelector(
    state => state.ui.editLetterType.template?.replaceAll("\n", ""),
    template => {
        const match = template?.match(
            /<head>(.*)<\/head>\s*<body>\s*<div[^>]*>(.*)<\/div>\s*<div[^>]*>(.*)<\/div>\s*<div[^>]*>\s/i
        );
        return {
            head: match ? match[1] : undefined,
            firstPageHeader: match ? match[2] : undefined,
            subsequentPageHeader: match ? match[3] : undefined,
            footerImage: match ? match[4] : undefined,
            footerText: match ? match[5] : undefined,
            body: match ? match[6] : undefined
        };
    }
);

```

In this example we are running a complex regular expression against a very long string (the [template](https://github.com/PublicDataWorks/instance_files_noipm/blob/master/instance-files/complainantLetterPdf.tpl)) and depositing the various important parts of the template into appropriately named fields (taking out the header, the various absolutely positioned divs and then the body to be edited separately). We want to avoid running the regex every time that the component re-renders so we use a selector. The first function determines the part of the state required to do the calculation, and if that first function returns the same value as it did on the previous run, we know that we don't need to re-run the regex computation. It was a judgement call whether to do replaceAll in the input function or not. This adds an extra operation but means we don't have to run the whole thing if the only difference is a newline character.

## How Do I Know I'm Looking at a Selector?

We tend to keep our selectors in separate files that end with `-selectors.js`. You will also note the use of the `createSelector` function
imported from the `reselect` library.

## Where can I find Selectors?

We tend to put the selector files next to the components that use them.

## What are some Do's and Don't's for Creating a Selector?

- DON'T use selectors for everything. You should only use them if complicated calculations are in order

- DO make sure to use only the simplest functions for the inputs, since those are the functions that will always run