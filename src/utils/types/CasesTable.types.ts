import { GridColDef } from "@mui/x-data-grid";

export interface CasesTableProps {
    rows: {
        id: string;
        ID: string;
        Type: string;
        Date: string;
        Creator: string;
        Location: string;
        Status: string;
        Assignee: string;
    }[];
    columns: GridColDef[];
    // modifiedColumns: {
    //     field: string;
    //     headerName: string;
    // }[];
}
