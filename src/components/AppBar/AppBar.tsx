import React, { useState, FC } from "react";
import {
    Box,
    Toolbar,
    IconButton,
    AppBar,
    CssBaseline,
    Backdrop
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Menu } from "./interfaces";
import DrawerComponent from "./DrawerComponent";

interface AppBarWithSideNavProps {
    headerIcon?: JSX.Element;
    drawerItems: Menu[];
    open?: boolean;
    setOpen?: (value: boolean) => void;
    children: JSX.Element;
}

const AppBarWithSideNav: FC<AppBarWithSideNavProps> = ({
    headerIcon,
    drawerItems,
    children,
    open: openProp,
    setOpen: setOpenProp
}) => {
    const [openState, setOpenState] = useState(false);
    const open = openProp ?? openState;
    const setOpen = setOpenProp ?? setOpenState;

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row"

                    // transition: (theme) =>
                    //     theme.transitions.create(["margin", "width"], {
                    //         easing: theme.transitions.easing.sharp,
                    //         duration: theme.transitions.duration.leavingScreen
                    //     })
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
                    {headerIcon}
                </Toolbar>
                {children}
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
