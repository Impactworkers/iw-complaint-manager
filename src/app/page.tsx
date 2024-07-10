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
        { field: "ID", headerName: "ID", width: 141.67 },
        { field: "Type", headerName: "Type", width: 141.67 },
        { field: "Creator", headerName: "Creator", width: 141.67 },
        { field: "Location", headerName: "Location", width: 141.67 },
        { field: "Date", headerName: "Date Created", width: 141.67 },
        { field: "Status", headerName: "Status", width: 141.67 },
        { field: "Assignee", headerName: "Assignee", width: 141.67 }
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

    return (
        <>
            {isHerokuEnv && authState?.isAuthenticated ? (
                <div className="page-container">
                    <Typography variant="h5" className="page-title">
                        Welcome to Complaint Manager 2.0
                    </Typography>
                    <Typography variant="h4" className="section-title">
                        Cases
                    </Typography>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        width: "1130px",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }}
                >
                    <h2 className="text-lg mt-4">All Casses</h2>
                </div>
            )}
            <div
                className="cases-container"
                style={{
                    display: "flex",
                    width: "1132px",
                    minHeight: "871px",
                    padding: "10px",
                    flexDirection: "row-reverse",
                    alignItems: "flex-start",
                    gap: "10px",
                    flexShrink: "0",
                    border: "1px solid #F0F0F0",
                    background: "#FFF",
                    overflow: "auto",
                    top: "134px"
                }}
            >
                <CasesTable columns={columns} rows={casesInfoData} />
            </div>
        </>
    );
}
