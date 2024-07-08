// components/CasesTable.tsx
import * as React from "react";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";

interface CasesTableProps {
    columns: { field: string; headerName: string }[]; // Array of column objects with field and headerName
    rows: any[]; // Array of row data, adjust type as per your database structure
}

const CasesTable: React.FC<CasesTableProps> = ({ columns, rows }) => {
    const [selectionModel, setSelectionModel] =
        React.useState<GridRowSelectionModel>([]);

    const handleSelectionModelChange = (
        newSelection: GridRowSelectionModel
    ) => {
        setSelectionModel(newSelection);
    };

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
                checkboxSelection
                rows={rows}
                columns={columns}
                rowSelectionModel={selectionModel}
                onRowSelectionModelChange={handleSelectionModelChange}
            />
        </div>
    );
};

export default CasesTable;
