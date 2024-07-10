import * as React from "react";

export const CasesTableMenuActions = () => {
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
        null
    );
    const [menuRowIndex, setMenuRowIndex] = React.useState<number | null>(null);
    const [switchStates, setSwitchStates] = React.useState<{
        [key: string]: boolean;
    }>({});

    const handleMenuOpen = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>, rowIndex: number) => {
            setMenuAnchorEl(event.currentTarget);
            setMenuRowIndex(rowIndex);
        },
        []
    );

    const handleMenuClose = React.useCallback(() => {
        setMenuAnchorEl(null);
        setMenuRowIndex(null);
    }, []);

    const handleSwitchChange = React.useCallback(
        (itemKey: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setSwitchStates((prevStates) => ({
                ...prevStates,
                [itemKey]: event.target.checked
            }));
        },
        []
    );

    return {
        menuAnchorEl,
        menuRowIndex,
        switchStates,
        handleMenuOpen,
        handleMenuClose,
        handleSwitchChange
    };
};
