import dynamic from "next/dynamic";
import { ComponentType } from "react";

export const iconPaths: { [key: string]: ComponentType } = {
    Dashboard: dynamic(() => import("@mui/icons-material/Dashboard")),
    Description: dynamic(() => import("@mui/icons-material/Description")),
    Cases: dynamic(() => import("@mui/icons-material/Cases")),
    Edit: dynamic(() => import("@mui/icons-material/Edit")),
    Groups: dynamic(() => import("@mui/icons-material/Groups")),
    Analytics: dynamic(() => import("@mui/icons-material/Analytics")),
    LibraryAdd: dynamic(() => import("@mui/icons-material/LibraryAdd")),
    Settings: dynamic(() => import("@mui/icons-material/Settings")),
    default: dynamic(() => import("@mui/icons-material/Cases"))
};

export const mockMenuItems = [
    {
        menuText: "Dashboard",
        icon: <iconPaths.Dashboard />,
        key: "dashboard",
        route: "/dashboard",
        category: "Main"
    },
    {
        menuText: "Description",
        icon: <iconPaths.Description />,
        key: "description",
        route: "/description",
        category: "Main"
    },
    {
        menuText: "Cases",
        icon: <iconPaths.Cases />,
        key: "cases",
        route: "/cases",
        category: "Main"
    },
    {
        menuText: "Groups",
        icon: <iconPaths.Groups />,
        key: "groups",
        route: "/groups",
        category: "Main"
    },
    {
        menuText: "Analytics",
        icon: <iconPaths.Analytics />,
        key: "analytics",
        route: "/analytics",
        category: "Main"
    },
    {
        menuText: "LibraryAdd",
        icon: <iconPaths.LibraryAdd />,
        key: "library-add",
        route: "/library-add",
        category: "Main"
    },
    {
        menuText: "Settings",
        icon: <iconPaths.Settings />,
        key: "settings",
        route: "/settings",
        category: "Main"
    },
    {
        menuText: "Admin Portal",
        icon: <iconPaths.default />,
        key: "admin-portal",
        route: "/admin-portal",
        category: "Admin Settings"
    }
];
