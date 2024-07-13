import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import { GridColDef } from "@mui/x-data-grid";
import "./CasesTable.css";
import IconButton from "@mui/material/IconButton";
import { StatusCellRenderer } from "./StatusCellRenderer";
import { AssigneeAvatar } from "./AssigneeAvatar";

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
                    return StatusCellRenderer(params);
                }
                if (column.field === "Assignee") {
                    return AssigneeAvatar(params.value);
                }
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
