"use client";
import { FC, useCallback, useMemo } from "react";
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

    const mainDrawerItems = useMemo(
        () => filterDrawerItemsByCategory(drawerItems, "Main"),
        [drawerItems]
    );
    const adminDrawerItems = useMemo(
        () => filterDrawerItemsByCategory(drawerItems, "Admin Settings"),
        [drawerItems]
    );

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent, handler: () => void) => {
            if (event.key === "Enter" || event.key === "ArrowRight") {
                handler();
            }
            if (event.key === "Escape" || event.key === "ArrowLeft") {
                closeHandler();
            }
        },
        [closeHandler]
    );

    return (
        <Drawer
            role="complementary"
            aria-label="Application Navigation"
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
