import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, MouseEvent } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleMenu = (event: MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Photos
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <Avatar>JA</Avatar>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <NavigationBar
                text={["Cases", "Admin Portal"]}
                muiIcons={["Cases", "Edit"]}
                isDrawerOpen={isDrawerOpen}
            />
        </Box>
    );
};

export default Header;
