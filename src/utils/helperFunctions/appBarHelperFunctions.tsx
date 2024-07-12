import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { DrawerMenuItem } from "@/components/AppBar/interfaces";

interface MenuItems {
    items: DrawerMenuItem[];
    router: any;
    // eslint-disable-next-line no-unused-vars
    handleKeyDown: (event: React.KeyboardEvent, handler: () => void) => void;
    closeHandler: () => void;
}

export const renderMenuItems = ({
    items,
    router,
    handleKeyDown,
    closeHandler
}: MenuItems) => {
    return items.map((menu) => (
        <ListItem
            key={`menu${menu.key}`}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, () => router.push(menu.route))}
            onClick={() => {
                router.push(menu.route);
                closeHandler();
            }}
        >
            {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
            <ListItemText inset={!menu.icon}>
                <Typography>{menu.menuText}</Typography>
            </ListItemText>
            <ChevronRight sx={{ color: "transparent" }} />
        </ListItem>
    ));
};

export const filterDrawerItemsByCategory = (
    items: MenuItems["items"],
    category: DrawerMenuItem["category"]
) => {
    return items.filter((item) => item.category === category);
};

export const getFirstAndLastInitials = (name: string) => {
    const nameArray = name.split(" ");
    return `${nameArray[0].charAt(0)}${nameArray[nameArray.length - 1].charAt(
        0
    )}`;
};
