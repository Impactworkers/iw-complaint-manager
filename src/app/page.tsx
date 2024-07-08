"use client";
import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import Typography from "@mui/material/Typography";
import CasesTable from "@/components/Cases/CasesTable";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header/Header";

export default function Page() {
    const herokuEnv = process.env.NEXT_PUBLIC_APP_ENV;
    const isHerokuEnv =
        herokuEnv === "development" ||
        herokuEnv === "qa" ||
        herokuEnv === "staging";
    const { oktaAuth, authState } = useOktaAuth();
    const [redirectAttempted, setRedirectAttempted] = useState(false);

    //// DUMMY DATA ////
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
            Status: "Active",
            Assignee: "UserA"
        },
        {
            id: 2,
            ID: "#112",
            Type: "Feature",
            Date: "2024-01-02",
            Creator: "User2",
            Location: "Los Angeles",
            Status: "Inactive",
            Assignee: "UserB"
        },
        {
            id: 3,
            ID: "#113",
            Type: "Bug",
            Date: "2024-01-03",
            Creator: "User3",
            Location: "Chicago",
            Status: "Active",
            Assignee: "UserC"
        },
        {
            id: 4,
            ID: "#114",
            Type: "Feature",
            Date: "2024-01-04",
            Creator: "User4",
            Location: "Houston",
            Status: "Inactive",
            Assignee: "UserD"
        },
        {
            id: 5,
            ID: "#115",
            Type: "Bug",
            Date: "2024-01-05",
            Creator: "User5",
            Location: "Phoenix",
            Status: "Active",
            Assignee: "UserE"
        }
    ];
    /////////////////////////////

    useEffect(() => {
        if (isHerokuEnv && !redirectAttempted) {
            const handleRedirect = async () => {
                // Consider using authState.isAuthenticated if it's reliable
                const isAuthenticated =
                    authState?.isAuthenticated ||
                    (await oktaAuth.isAuthenticated());
                if (!isAuthenticated) {
                    setRedirectAttempted(true); // Prevent further attempts
                    await oktaAuth.signInWithRedirect();
                }
            };

            handleRedirect();
        }
    }, [isHerokuEnv, oktaAuth, authState, redirectAttempted]);

    return isHerokuEnv && authState?.isAuthenticated ? (
        <div>
            <Header />
            <Typography variant="h5" className="page-title">
                Welcome to Complaint Manager 2.0
            </Typography>
            <Typography variant="h4" className="section-title">
                Cases
            </Typography>
            <NavigationBar
                text={["Cases", "Admin Portal"]}
                muiIcons={["Cases", "Edit"]}
            />
            <CasesTable columns={columns} rows={rows} />
        </div>
    ) : (
        <p
            className="text-lg mt-4"
            style={{ marginLeft: "250px", marginTop: "100px" }}
        >
            Local Environment: No SSO
        </p>
    );
}
