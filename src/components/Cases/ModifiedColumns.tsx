import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import { GridColDef } from "@mui/x-data-grid";
import "./CasesTable.css";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { getCustomStyles } from "../../../.storybook/theme";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
                    const DotIcon = () => (
                        <span
                            style={{
                                height: "10px",
                                width: "10px",
                                backgroundColor: customStyles.color,
                                borderRadius: "50%",
                                display: "inline-block"
                            }}
                        />
                    );
                    return (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Chip
                                icon={<DotIcon />}
                                label={params.value}
                                sx={customStyles}
                            />
                        </div>
                    );
                }
                if (column.field === "Assignee") {
                    const fullName = params.value;
                    const nameParts = fullName.split(" ");
                    const firstInitial = nameParts[0][0] || "";
                    const lastName =
                        nameParts.length > 1
                            ? nameParts[nameParts.length - 1]
                            : "";
                    const formattedName = `${firstInitial}. ${lastName}`;
                    return (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >
                            <Avatar>{formattedName}</Avatar>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                sx={{
                                    width: "30px",
                                    height: "25px",
                                    backgroundColor: "#1890FF",
                                    color: "#FFFFFF",
                                    "&:hover": {
                                        backgroundColor: "#1077cc"
                                    }
                                }}
                            >
                                <AddIcon />
                            </Fab>
                        </div>
                    );
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
