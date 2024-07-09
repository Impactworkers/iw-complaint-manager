import React, { FC } from "react";
import {
    Drawer,
    Divider,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { Menu } from "./interfaces";
import { useRouter } from "next/router";

const drawerWidth = 350;

interface DrawerComponentProps {
    open: boolean;
    closeHandler: () => void;
    drawerItems: Menu[];
}

const DrawerComponent: FC<DrawerComponentProps> = ({
    open,
    closeHandler,
    drawerItems
}) => {
    const handleKeyDown = (event: React.KeyboardEvent, handler: () => void) => {
        if (event.key === "Enter" || event.key === "ArrowRight") {
            handler();
        }
        if (event.key === "Escape" || event.key === "ArrowLeft") {
            closeHandler();
        }
    };

    const router = useRouter();

    const mainItems = drawerItems.filter((item) => item.category === "Main");
    const adminItems = drawerItems.filter(
        (item) => item.category === "Admin Settings"
    );

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0
            }}
            PaperProps={{
                sx: {
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    height: "calc(100svh - 64px)",
                    paddingTop: "30px",
                    top: "64px",
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            {mainItems.length > 0 && (
                <>
                    {mainItems.map((menu) => (
                        <MenuItem
                            key={`mainMenu${menu.key}`}
                            tabIndex={0}
                            onKeyDown={(e) =>
                                handleKeyDown(e, () => router.push(menu.route))
                            }
                            onClick={() => {
                                router.push(menu.route);
                                closeHandler();
                            }}
                            sx={{
                                borderRadius: "15px",
                                margin: "10px"
                            }}
                        >
                            {menu.icon && (
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                            )}
                            <ListItemText inset={!menu.icon}>
                                <Typography>{menu.menuText}</Typography>
                            </ListItemText>
                            <ChevronRight sx={{ color: "transparent" }} />
                        </MenuItem>
                    ))}
                </>
            )}
            {adminItems.length > 0 && (
                <>
                    <Divider />
                    <Typography variant="h6" sx={{ padding: "10px" }}>
                        Admin Settings
                    </Typography>
                    {adminItems.map((menu) => (
                        <MenuItem
                            key={`adminMenu${menu.key}`}
                            tabIndex={0}
                            onKeyDown={(e) =>
                                handleKeyDown(e, () => router.push(menu.route))
                            }
                            onClick={() => {
                                router.push(menu.route);
                                closeHandler();
                            }}
                            sx={{
                                borderRadius: "15px",
                                margin: "10px"
                            }}
                        >
                            {menu.icon && (
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                            )}
                            <ListItemText inset={!menu.icon}>
                                <Typography>{menu.menuText}</Typography>
                            </ListItemText>
                            <ChevronRight sx={{ color: "transparent" }} />
                        </MenuItem>
                    ))}
                </>
            )}
        </Drawer>
    );
};

export default DrawerComponent;
