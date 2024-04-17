---
layout: default
title: Auth0 Add User Roles and Permissions
parent: How To Guides
permalink: /how-to/auth0-add-user-roles-permissions
---

{: .highlight-title }
> Under Construction
>
> This page is under construction.

{: .warning-title }
> To be Updated
>
> This page's content needs to be updated.

# Auth0 Add User Roles and Permissions

*(last modified: 6/9/22)*

To add new role/permission:

-   Go to the Auth0 Authorization Extension

-   Go to Permissions page. Add new permission

-   Go to Roles page. Add new role if needed, or add permission to
    existing role.

-   Go to Users page in this extension. Pick user and add the role for
    the person (don't assign permissions directly, just use roles)

*reminder to repeat for each environment

To add a new permission in code:

-   In constants.js add value of permission name in the PERMISSIONS
    variable and create a property in USER_PERMISSIONS with that value.


-   Client side implementation:

    -   Import USER_PERMISSIONS into the component.

    -   Add the permissions property to mapStateToProps to access the
        permissions inside the component.

permissions: state?.users?.current?.userInfo?.permissions

-   Now you can use permissions to conditionally render.

{props.isArchived ||
!props.permissions?.includes(USER_PERMISSIONS.EDIT_CASE) ? null : (

<div

style={{ marginTop: "48px" }}

data-testid="file-upload-container"

>

<div style={{ marginBottom: "8px" }}>

<Typography style={styles.section}>UPLOAD A FILE</Typography>

</div>

<div style={{ marginBottom: "4px" }}>

<Typography variant="body2">Maximum file size: 5GB</Typography>

</div>

<DropzoneContainer />

</div>

)}

-   Server side implementation:

    -   In apiRoutes.js add a requiredPermissions property to the
        endpoint (for most scenarios). Now you have access to that
        permission in the handler. (see addToRouter function)
        *permissions can also be passed through the request param:
        request.permissions

    -   Any handler will have the permissions array in the request param
