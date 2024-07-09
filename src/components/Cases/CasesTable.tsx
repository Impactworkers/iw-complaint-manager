import * as React from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CasesTableProps {
    columns: GridColDef[];
    rows: any[];
}

const CasesTable: React.FC<CasesTableProps> = ({ columns, rows }) => {
    const [selectionModel, setSelectionModel] =
        React.useState<GridRowSelectionModel>([]);
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
        null
    );
    const [menuRowIndex, setMenuRowIndex] = React.useState<number | null>(null);
    const [switchStates, setSwitchStates] = React.useState<{
        [key: string]: boolean;
    }>({});

    // const menuItems = [
    //     { label: "ID", key: "id" },
    //     { label: "Type", key: "type" },
    //     { label: "Date Created", key: "dateCreated" },
    //     { label: "Creator", key: "creator" },
    //     { label: "Location", key: "location" },
    //     { label: "Status", key: "status" },
    //     { label: "Assignees", key: "assignees" }
    // ];

    const handleMenuOpen = (
        event: React.MouseEvent<HTMLButtonElement>,
        rowIndex: number
    ) => {
        setMenuAnchorEl(event.currentTarget);
        setMenuRowIndex(rowIndex);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
        setMenuRowIndex(null);
    };

    const handleSwitchChange =
        (itemKey: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setSwitchStates({
                ...switchStates,
                [itemKey]: event.target.checked
            });
        };

    const modifiedColumns: GridColDef[] = [
        ...columns,
        {
            field: "actions",
            headerName: " ",
            sortable: false,
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="more"
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
                        {columns.map((item) => (
                            <MenuItem
                                key={item.field}
                                onClick={handleMenuClose}
                            >
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={!!switchStates[item.field]}
                                            onChange={handleSwitchChange(
                                                item.field
                                            )}
                                            name={item.field}
                                        />
                                    }
                                    label={item.headerName}
                                />
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            )
        }
    ];

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
                checkboxSelection
                rows={rows}
                columns={modifiedColumns}
                rowSelectionModel={selectionModel}
                onRowSelectionModelChange={setSelectionModel}
            />
        </div>
    );
};

export default CasesTable;
