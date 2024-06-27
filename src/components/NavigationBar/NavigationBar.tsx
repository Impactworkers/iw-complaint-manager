"use client";
import { useState } from "react";
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@mui/material";
import CasesIcon from "@mui/icons-material/Cases";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function NavigationBar() {
    const [open, setOpen] = useState(false);

    const toggleNavigationBar = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const NavigationBarListItems = [
        {
            ariaLabel: "cases",
            heading: false,
            headingText: "",
            divider: false,
            text: "Cases",
            icon: <CasesIcon />
        },
        {
            ariaLabel: "admin-settings",
            heading: true,
            headingText: "Admin Settings",
            divider: true,
            text: "Admin Portal",
            icon: <ModeEditIcon />
        }
    ];

    const NavigationBarList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleNavigationBar(false)}
        >
            <List>
                {NavigationBarListItems.map((item) => (
                    <Box key={item.text}>
                        {item.divider == true ? <Divider /> : <></>}
                        {item.heading === true ? (
                            <ListSubheader>{item.headingText}</ListSubheader>
                        ) : (
                            <></>
                        )}

                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    aria-labelledby={item.ariaLabel}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleNavigationBar(true)}>Navigation Bar</Button>
            <Drawer open={open} onClose={toggleNavigationBar(false)}>
                {NavigationBarList}
            </Drawer>
        </div>
    );
}
