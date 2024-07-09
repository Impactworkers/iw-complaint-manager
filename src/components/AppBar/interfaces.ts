import { FC, ReactElement } from "react";

/**
 * Represents a navigation menu item.
 * @interface Menu
 * @property {string} key - The unique identifier for the menu item.
 * @property {string} icon - The display icon for the menu item.
 * @property {string} menuText - The text to display for the menu item.
 * @property {string} route - The navigation path for the menu item.
 * @property {string} category - The category of the menu item.
 * @property {ReactElement} menuElement - The component to render for the menu item.
 * @property {any} menuElementProps - The props to pass to the menu element.
 */

export interface Menu {
    key: string;
    icon?: ReactElement;
    menuText: string;
    route: string;
    category: string;
    menuElement?: FC<any>;
    menuElementProps?: any;
}
