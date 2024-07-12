"use client";

import * as React from "react";
import { DataGrid, GridRowSelectionModel, GridColDef } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CasesTableProps } from "@/utils/types/CasesTable.types";
import { Button, ThemeProvider } from "@mui/material";
import { CasesTableMenuActions } from "./CasesTableMenuActions";
import { ModifiedColumns } from "./ModifiedColumns";
import "./CasesTable.css";
import { lightTheme } from "../../../.storybook/theme";

const CasesTable: React.FC<CasesTableProps> = ({ columns, rows }) => {
    const [selectionModel, setSelectionModel] =
        React.useState<GridRowSelectionModel>([]);
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 10
    });

    const {
        menuAnchorEl,
        menuRowIndex,
        switchStates,
        handleMenuOpen,
        handleMenuClose,
        handleSwitchChange
    } = CasesTableMenuActions();

    const renderMenuItems = React.useCallback(
        () =>
            columns.map((item) => (
                <MenuItem key={item.field} onClick={handleMenuClose}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={!!switchStates[item.field]}
                                onChange={handleSwitchChange(item.field)}
                                name={item.field}
                                aria-label={`Toggle ${item.headerName}`}
                            />
                        }
                        label={item.field}
                    />
                </MenuItem>
            )),
        [columns, handleMenuClose, handleSwitchChange, switchStates]
    );

    const modifiedColumns: GridColDef[] = React.useMemo(
        () =>
            ModifiedColumns(
                columns,
                menuAnchorEl,
                menuRowIndex,
                handleMenuOpen,
                handleMenuClose,
                renderMenuItems
            ),
        [
            columns,
            menuAnchorEl,
            menuRowIndex,
            handleMenuOpen,
            handleMenuClose,
            renderMenuItems
        ]
    );

    return (
        <div className="table-container">
            <ThemeProvider theme={lightTheme}>
                <div className="table-header">
                    <Button variant="contained" onClick={() => {}}>
                        + Add Case
                    </Button>
                </div>

                <DataGrid
                    style={{ height: 660, width: "100%" }}
                    rows={rows}
                    columns={modifiedColumns}
                    rowSelectionModel={selectionModel}
                    onRowSelectionModelChange={setSelectionModel}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    disableColumnMenu
                    checkboxSelection
                />
            </ThemeProvider>
        </div>
    );
};

export default CasesTable;
