"use client";
import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import Typography from "@mui/material/Typography";
import CasesTable from "@/components/Cases/CasesTable";
import { casesInfoData } from "../../data/dummyData";

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
        { field: "Date Created", headerName: "Date" },
        { field: "Creator", headerName: "Creator" },
        { field: "Location", headerName: "Location" },
        { field: "Status", headerName: "Status" },
        { field: "Assignee", headerName: "Assignee" }
    ];

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
            <Typography variant="h5" className="page-title">
                Welcome to Complaint Manager 2.0
            </Typography>
            <Typography variant="h4" className="section-title">
                Cases
            </Typography>
            <CasesTable columns={columns} rows={casesInfoData} />
        </div>
    ) : (
        <p className="text-lg mt-4">Local Environment: No SSO</p>
    );
}
