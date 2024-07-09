import dynamic from "next/dynamic";
import { ComponentType } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import CasesIcon from "@mui/icons-material/Cases";
import EditIcon from "@mui/icons-material/Edit";
import GroupsIcon from "@mui/icons-material/Groups";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SettingsIcon from "@mui/icons-material/Settings";

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
        icon: <DashboardIcon />,
        key: "dashboard",
        route: "/dashboard",
        category: "Main"
    },
    {
        menuText: "Description",
        icon: <DescriptionIcon />,
        key: "description",
        route: "/description",
        category: "Main"
    },
    {
        menuText: "Cases",
        icon: <CasesIcon />,
        key: "cases",
        route: "/cases",
        category: "Main"
    },
    {
        menuText: "Groups",
        icon: <GroupsIcon />,
        key: "groups",
        route: "/groups",
        category: "Main"
    },
    {
        menuText: "Analytics",
        icon: <AnalyticsIcon />,
        key: "analytics",
        route: "/analytics",
        category: "Main"
    },
    {
        menuText: "LibraryAdd",
        icon: <LibraryAddIcon />,
        key: "library-add",
        route: "/library-add",
        category: "Main"
    },
    {
        menuText: "Settings",
        icon: <SettingsIcon />,
        key: "settings",
        route: "/settings",
        category: "Main"
    },
    {
        menuText: "Admin Portal",
        icon: <EditIcon />,
        key: "admin-portal",
        route: "/admin-portal",
        category: "Admin Settings"
    }
];
