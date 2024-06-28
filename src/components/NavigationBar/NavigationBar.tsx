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
import { Cases, Edit } from "@mui/icons-material";

interface NavigationBarProps {
    text: string[];
}

export const NavigationBar = ({ text }: NavigationBarProps): JSX.Element => {
    const NavigationBarListItems = [
        {
            heading: false,
            headingText: "",
            divider: false,
            text: text[0],
            icon: <Cases />
        },
        {
            heading: true,
            headingText: "Admin Settings",
            divider: true,
            text: text[1],
            icon: <Edit />
        }
    ];
    const [open, setOpen] = useState(false);

    const toggleNavigationBar = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
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
                                <ListItemText primary={item.text} />
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
};
