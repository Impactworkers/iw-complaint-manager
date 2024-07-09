"use client";
import { ComponentType } from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@mui/material";
import dynamic from "next/dynamic";

const iconPaths: { [key: string]: ComponentType } = {
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

interface NavigationBarProps {
    /**
     * The text labels for the navigation items.
     */
    text: string[];
    /**
     * The MUI icons to use for each navigation item.
     */
    muiIcons: string[];
    /**
     * Flag to control whether the drawer is open or closed.
     */
    isDrawerOpen: boolean;
}

/**
 * NavigationBar component renders a sliding drawer navigation menu.
 */
export const NavigationBar = ({
    text,
    muiIcons,
    isDrawerOpen
}: NavigationBarProps) => {
    const NavigationBarListItems = text.map((itemText, index) => {
        const Icon = iconPaths[muiIcons[index]] || iconPaths.default;
        return {
            heading: index === 1,
            headingText: index === 1 ? "Admin Settings" : "",
            divider: index === 1,
            text: itemText,
            Icon
        };
    });

    return (
        <Drawer variant="persistent" anchor="left" open={isDrawerOpen}>
            <Box role="presentation">
                <List>
                    {NavigationBarListItems.map(
                        ({ heading, headingText, divider, text, Icon }) => (
                            <Box key={text}>
                                {divider && <Divider />}
                                {heading && (
                                    <ListSubheader>{headingText}</ListSubheader>
                                )}
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ minWidth: "32px" }}>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            </Box>
                        )
                    )}
                </List>
            </Box>
        </Drawer>
    );
};
