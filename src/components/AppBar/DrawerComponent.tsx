"use client";
import React, { FC } from "react";
import { Drawer, Divider, Typography } from "@mui/material";
import { DrawerMenuItem } from "./interfaces";
import { useRouter } from "next/navigation";
import {
    filterDrawerItemsByCategory,
    renderMenuItems
} from "@/utils/helperFunctions/appBarHelperFunctions";

const drawerWidth = 350;

interface DrawerComponentProps {
    open: boolean;
    closeHandler: () => void;
    drawerItems: DrawerMenuItem[];
}

const DrawerComponent: FC<DrawerComponentProps> = ({
    open,
    closeHandler,
    drawerItems
}) => {
    const router = useRouter();

    const mainDrawerItems = filterDrawerItemsByCategory(drawerItems, "Main");
    const adminDrawerItems = filterDrawerItemsByCategory(
        drawerItems,
        "Admin Settings"
    );

    const handleKeyDown = (event: React.KeyboardEvent, handler: () => void) => {
        if (event.key === "Enter" || event.key === "ArrowRight") {
            handler();
        }
        if (event.key === "Escape" || event.key === "ArrowLeft") {
            closeHandler();
        }
    };

    return (
        <Drawer
            role="presentation"
            sx={{
                width: drawerWidth,
                flexShrink: 0
            }}
            PaperProps={{
                sx: {
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    height: "calc(100svh - 64px)",
                    top: "64px",
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <>
                {mainDrawerItems.length > 0 && (
                    <>
                        {renderMenuItems({
                            items: mainDrawerItems,
                            router,
                            handleKeyDown,
                            closeHandler
                        })}
                    </>
                )}
                {adminDrawerItems.length > 0 && (
                    <>
                        <Divider />
                        <Typography variant="h6" sx={{ padding: "10px" }}>
                            Admin Settings
                        </Typography>
                        {renderMenuItems({
                            items: adminDrawerItems,
                            router,
                            handleKeyDown,
                            closeHandler
                        })}
                    </>
                )}
            </>
        </Drawer>
    );
};

export default DrawerComponent;
