import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { getFirstAndLastInitials } from "@/utils/helperFunctions/appBarHelperFunctions";
import { FC } from "react";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import oktaAuth from "@/auth/auth";

interface AvatarAccountMenuProps {
    userName: string;
    isLoading: boolean;
    isAuthenticated: boolean;
    oktaAuth: typeof oktaAuth;
}

const AvatarAccountMenu: FC<AvatarAccountMenuProps> = ({
    userName,
    isLoading,
    isAuthenticated,
    oktaAuth
}: AvatarAccountMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const router = useRouter();

    const handleLogout = () => {
        setAnchorEl(null);
        oktaAuth.signOut();
        router.push("/");
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        // sx={{ ml: 2 }}
                        aria-label="account of current user"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        {isLoading ? (
                            <Skeleton
                                data-testid="account-skeleton"
                                variant="circular"
                                width={32}
                                height={32}
                                animation="wave"
                            />
                        ) : isAuthenticated && userName ? (
                            <Avatar>{getFirstAndLastInitials(userName)}</Avatar>
                        ) : (
                            <Avatar data-testid="default-avatar-menu">
                                IW
                            </Avatar>
                        )}
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1
                            },
                            "&::before": {
                                content: "''",
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0
                            }
                        }
                    }
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={handleClose} disabled={!isAuthenticated}>
                    <Avatar>{getFirstAndLastInitials(userName)}</Avatar> My
                    Account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disabled={!isAuthenticated}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose} disabled={!isAuthenticated}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default AvatarAccountMenu;
