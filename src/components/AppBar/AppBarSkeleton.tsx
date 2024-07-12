import {
    Box,
    Toolbar,
    IconButton,
    AppBar as MuiAppBar,
    Skeleton
} from "@mui/material";

const AppBarSkeleton: React.FC = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <MuiAppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar>
                    <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
                        <Skeleton
                            variant="rectangular"
                            width={30}
                            height={30}
                            animation="wave"
                            sx={{ borderRadius: "4px" }}
                        />
                    </IconButton>
                    <Skeleton
                        variant="rectangular"
                        width={100}
                        height={50}
                        animation="wave"
                        sx={{ flexShrink: 0, borderRadius: "4px" }}
                    />
                    <Box flexGrow={1} />
                    <IconButton size="large" disabled>
                        <Skeleton
                            data-testid="account-skeleton"
                            variant="circular"
                            width={40}
                            height={40}
                            animation="wave"
                        />
                    </IconButton>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};

export default AppBarSkeleton;
