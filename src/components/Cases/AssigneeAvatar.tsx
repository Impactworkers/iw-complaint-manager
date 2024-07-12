import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";

const formatName = (fullName: string | undefined) => {
    if (typeof fullName !== "string") {
        return "";
    }

    const nameParts = fullName.split(" ");
    const firstInitial = nameParts[0][0] || "";
    const lastName =
        nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
    return `${firstInitial}. ${lastName}`;
};

export const AssigneeAvatar = ({ fullName }: { fullName: string }) => {
    // eslint-disable-next-line no-unused-vars
    const formattedName = formatName(fullName);
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
                    transform: "translateX(-75%)",
                    width: "30px",
                    height: "30px",
                    border: "2px solid #ffffff"
                }}
                src={`https://source.unsplash.com/random/200x200?sig=${Math.floor(Math.random() * 1000)}`}
            >
                {/* {formattedName} */}
            </Avatar>

            <AddIcon
                sx={{
                    color: "#ffffff",
                    backgroundColor: "#1890ff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    position: "relative"
                }}
            />
        </div>
    );
};
