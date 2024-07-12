import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { act } from "react";
import CasesTable from "./CasesTable";

describe("Cases table", () => {
    const columns = [
        { field: "ID", headerName: "ID" },
        { field: "Type", headerName: "Type" },
        { field: "Date", headerName: "Date" },
        { field: "Creator", headerName: "Creator" },
        { field: "Location", headerName: "Location" },
        { field: "Status", headerName: "Status" },
        { field: "Assignee", headerName: "Assignee" }
    ];

    const rows = [
        {
            id: 1,
            ID: "#111",
            Type: "Bug",
            Date: "2024-01-01",
            Creator: "User1",
            Location: "New York",
            Status: "Open",
            Assignee: "UserA"
        },
        {
            id: 2,
            ID: "#112",
            Type: "Feature",
            Date: "2024-01-02",
            Creator: "User2",
            Location: "Los Angeles",
            Status: "Closed",
            Assignee: "UserB"
        }
    ];

    test("should render CaseRow", async () => {
        await act(async () => {
            render(
                <CasesTable
                    columns={columns}
                    rows={rows}
                    modifiedColumns={[]}
                />
            );
        });
        expect(screen.getByText("#111")).toBeInTheDocument();
    });
});
