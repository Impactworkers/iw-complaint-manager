"use client";
import React, { useState, FC } from "react";
import { ReactNode } from "react";
import {
    Box,
    Toolbar,
    IconButton,
    AppBar,
    Backdrop,
    Typography,
    Skeleton
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { DrawerMenuItem } from "./interfaces";
import DrawerComponent from "./DrawerComponent";
import AvatarAccountMenu from "./AvatarAccountMenu";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
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
    const { userName, error, isLoading, isAuthenticated, oktaAuth } =
        useGetOktaUserName();

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

                    <Image src={Logo} alt="Logo" objectFit="contain" priority />
                    <Box flexGrow={1} />
                    {error ? (
                        <Typography color={lightTheme.palette.error.main}>
                            {error}
                        </Typography>
                    ) : isLoading ? (
                        <Skeleton
                            data-testid="account-skeleton"
                            variant="circular"
                            width={32}
                            height={32}
                            animation="wave"
                        />
                    ) : (
                        <AvatarAccountMenu
                            userName={userName}
                            isLoading={isLoading}
                            isAuthenticated={isAuthenticated}
                            oktaAuth={oktaAuth}
                        />
                    )}
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
