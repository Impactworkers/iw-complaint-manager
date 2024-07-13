import { DotIcon } from "./dotIcon";
import { getCustomStyles } from "../../../.storybook/theme";
import Chip from "@mui/material/Chip";
interface StatusCellRendererParams {
    value: string;
}

export const StatusCellRenderer = (params: StatusCellRendererParams) => {
    const chipColor = params.value === "Active" ? "success" : "grey";
    const customStyles = getCustomStyles(chipColor);
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Chip
                icon={<DotIcon color={customStyles.color} />}
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
};
