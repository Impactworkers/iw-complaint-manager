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
interface NavigationBarProps {
    /**
     * What do you want the text to be?
     */
    text: string[];
    /**
     * What MUI icons do you want to use?
     *
     * Other available icons:
     *
     * ["Dashboard", "Description", "Groups", "Analytics", "LibraryAdd", "Settings"]
     */
    muiIcons: string[];
}

export const NavigationBar = ({
    text = ["Cases", "Admin Portal"],
    muiIcons = ["Cases", "Edit"]
}: NavigationBarProps) => {
    const IconComponents = () => {
        const iconPaths: { [key: string]: ComponentType } = {
            Dashboard: dynamic(() => import("@mui/icons-material/Dashboard")),
            Description: dynamic(
                () => import("@mui/icons-material/Description")
            ),
            Cases: dynamic(() => import("@mui/icons-material/Cases")),
            Edit: dynamic(() => import("@mui/icons-material/Edit")),
            Groups: dynamic(() => import("@mui/icons-material/Groups")),
            Analytics: dynamic(() => import("@mui/icons-material/Analytics")),
            LibraryAdd: dynamic(() => import("@mui/icons-material/LibraryAdd")),
            Settings: dynamic(() => import("@mui/icons-material/Settings")),
            default: dynamic(() => import("@mui/icons-material/Cases"))
        };
        return iconPaths;
    };
    const NavigationBarListItems = [
        {
            heading: false,
            headingText: "",
            divider: false,
            text: text[0],
            Icon: IconComponents()[muiIcons[0]]
                ? IconComponents()[muiIcons[0]]
                : IconComponents()["default"]
        },
        {
            heading: true,
            headingText: "Admin Settings",
            divider: true,
            text: text[1],
            Icon: IconComponents()[muiIcons[1]]
                ? IconComponents()[muiIcons[1]]
                : IconComponents()["default"]
        }
    ];

    const NavigationBarList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {NavigationBarListItems.map((item) => {
                    const { heading, headingText, divider, text, Icon } = item;
                    return (
                        <Box key={text}>
                            {divider === true ? <Divider /> : <></>}
                            {heading === true ? (
                                <ListSubheader>{headingText}</ListSubheader>
                            ) : (
                                <></>
                            )}

                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: "32px" }}>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        </Box>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open
            sx={{
                "& .MuiPaper-root": { top: "5%", width: "250px" }
            }}
        >
            {NavigationBarList}
        </Drawer>
    );
};
