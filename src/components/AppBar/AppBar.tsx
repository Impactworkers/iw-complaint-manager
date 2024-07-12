"use client";
import React, { useState, FC } from "react";
import { ReactNode } from "react";
import {
    Box,
    Toolbar,
    IconButton,
    AppBar,
    Backdrop,
    Avatar,
    Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { DrawerMenuItem } from "./interfaces";
import DrawerComponent from "./DrawerComponent";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import { getFirstAndLastInitials } from "@/utils/helperFunctions/appBarHelperFunctions";
import AppBarSkeleton from "./AppBarSkeleton";
import { useGetOktaUserName } from "@/hooks/useGetOktaUserName";
import { lightTheme } from "../../../.storybook/theme";

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
    const open = openProp ?? openState;
    const setOpen = setOpenProp ?? setOpenState;
    const { userName, error, isLoading } = useGetOktaUserName();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {isLoading && <AppBarSkeleton />}
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    visibility: isLoading ? "hidden" : "visible"
                }}
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
                        {error ? (
                            <Typography color={lightTheme.palette.error.main}>
                                {error}
                            </Typography>
                        ) : userName ? (
                            <Avatar role="menu" data-testid="user-avatar-menu">
                                {getFirstAndLastInitials(userName)}
                            </Avatar>
                        ) : (
                            <Avatar
                                role="menu"
                                data-testid="default-avatar-menu"
                            />
                        )}
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
