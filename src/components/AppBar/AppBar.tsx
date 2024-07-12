"use client";
import React, { useState, FC, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { ReactNode } from "react";
import {
    Box,
    Toolbar,
    IconButton,
    AppBar,
    Backdrop,
    Avatar
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { DrawerMenuItem } from "./interfaces";
import DrawerComponent from "./DrawerComponent";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import { getFirstAndLastInitials } from "@/utils/helperFunctions/appBarHelperFunctions";

interface AppBarWithSideNavProps {
    headerIcon?: ReactNode;
    drawerItems: DrawerMenuItem[];
    open?: boolean;
    // eslint-disable-next-line no-unused-vars
    setOpen?: (value: boolean) => void;
    children?: JSX.Element;
}

const AppBarWithSideNav: FC<AppBarWithSideNavProps> = ({
    drawerItems,
    open: openProp,
    setOpen: setOpenProp
}) => {
    const [openState, setOpenState] = useState(false);
    const [userName, setUserName] = useState("");
    const open = openProp ?? openState;
    const setOpen = setOpenProp ?? setOpenState;
    const { authState, oktaAuth } = useOktaAuth();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const getUserName = async () => {
            try {
                await oktaAuth?.getUser().then((user) => {
                    setUserName(user.name as string);
                });
            } catch (error) {
                console.error(error);
            }

            return "";
        };
        if (authState?.isAuthenticated) {
            getUserName();
        }
    }, [authState, oktaAuth, userName]);

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{ mr: 2 }}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                toggleDrawer();
                            }
                        }}
                        tabIndex={0}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Image
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={50}
                        priority
                    />
                    <Box flexGrow={1} />
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenu}
                    >
                        <Avatar>
                            {authState?.isAuthenticated
                                ? getFirstAndLastInitials(userName)
                                : "?"}
                        </Avatar>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DrawerComponent
                open={open}
                closeHandler={() => setOpen(false)}
                drawerItems={drawerItems}
            />
            <Backdrop
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    opacity: 0.7,
                    position: "fixed",
                    top: "64px",
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
                open={open}
                onClick={() => setOpen(false)}
            />
        </Box>
    );
};

export default AppBarWithSideNav;
