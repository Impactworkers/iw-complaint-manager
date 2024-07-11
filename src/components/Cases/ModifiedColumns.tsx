import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import { GridColDef } from "@mui/x-data-grid";
import "./CasesTable.css";
import { Chip, Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { getCustomStyles } from "../../../.storybook/theme";

export const ModifiedColumns = (
    columns: GridColDef[],
    menuAnchorEl: HTMLElement | null,
    menuRowIndex: number | null,
    handleMenuOpen: any,
    handleMenuClose: any,
    renderMenuItems: any
): GridColDef[] => {
    return [
        ...columns.map((column) => ({
            ...column,
            headerClassName: "dataGridHeader",
            cellClassName:
                column.field === "Status" ? "statusCell" : "dataGridCell",
            renderCell: (params: any) => {
                if (column.field === "Status") {
                    const chipColor =
                        params.value === "Active" ? "success" : "grey";
                    const customStyles = getCustomStyles(chipColor);

                    return <Chip label={params.value} sx={customStyles} />;
                }
                if (column.field === "Assignee") {
                    return (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >
                            <Avatar>{params.value}</Avatar>
                            <IconButton
                                size="small"
                                onClick={() => {
                                    /* Handle adding more assignees */
                                }}
                            >
                                <AddIcon />
                            </IconButton>
                        </div>
                    );
                }
                // For other cells not matching the condition, return the cell value
                return params.value;
            }
        })),
        {
            field: "actions",
            headerName: " ",
            sortable: false,
            width: 100,
            headerClassName: "dataGridHeader",
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="more options"
                        aria-controls="actions-menu"
                        aria-haspopup="true"
                        onClick={(event) =>
                            handleMenuOpen(event, params.row.id)
                        }
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="actions-menu"
                        anchorEl={menuAnchorEl}
                        keepMounted
                        open={Boolean(menuRowIndex === params.row.id)}
                        onClose={handleMenuClose}
                    >
                        {renderMenuItems(params.row)}
                    </Menu>
                </>
            )
        }
    ];
};
