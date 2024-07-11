"use client";
import * as React from "react";
import { DataGrid, GridRowSelectionModel, GridColDef } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CasesTableProps } from "@/utils/types/CasesTable.types";
import { Button } from "@mui/material";
import { CasesTableMenuActions } from "./CasesTableMenuActions";
import { ModifiedColumns } from "./ModifiedColumns";
import "./CasesTable.css";

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
            <div className="table-header">
                <Button
                    variant="contained"
                    color="primary"
                    className="add-case-button"
                    onClick={() => {}}
                >
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
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        width: "100%"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "1px solid #f0f0f0"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#f5f5f5",
                        borderBottom: "1px solid #e0e0e0",
                        fontSize: "14px",
                        fontWeight: "bold"
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                        justifyContent: "center",
                        textAlign: "center"
                    },
                    "& .MuiDataGrid-columnSeparator": {
                        display: "none"
                    },
                    "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
                        {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                    "& .MuiDataGrid-cellCheckbox": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    "& .MuiDataGrid-row": {
                        minHeight: "50px !important",
                        maxHeight: "50px !important",
                        "& .MuiDataGrid-cell": {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        marginTop: "5px"
                    }
                }}
            />
        </div>
    );
};

export default CasesTable;
