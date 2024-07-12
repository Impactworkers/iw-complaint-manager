import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import { GridColDef } from "@mui/x-data-grid";
import "./CasesTable.css";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { getCustomStyles } from "../../../.storybook/theme";
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
                                height: "6px",
                                width: "6px",
                                backgroundColor: customStyles.color,
                                borderRadius: "50%",
                                display: "inline-block",
                                marginRight: "-6px",
                                marginLeft: "6px"
                            }}
                        />
                    );
                    return (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Chip
                                icon={<DotIcon />}
                                label={params.value}
                                sx={{
                                    ...customStyles,
                                    padding: "0 8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
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
                                position: "relative",
                                display: "inline-block"
                            }}
                        >
                            <Avatar
                                style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    top: "-3px",
                                    transform: "translateX(-80%)",
                                    width: "30px",
                                    height: "30px"
                                }}
                            >
                                {formattedName}
                            </Avatar>

                            <AddIcon
                                sx={{
                                    color: "#ffffff",
                                    backgroundColor: "#1890ff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50%",
                                    position: "relative"
                                }}
                            />
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
