import { Button as MuiButton } from "@mui/material";
import "./button.css";

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    size = "large",
    backgroundColor,
    label,
    ...rest
}: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <MuiButton
            type="button"
            className={[
                "storybook-button",
                `storybook-button--${size}`,
                mode
            ].join(" ")}
            style={{ backgroundColor }}
            {...rest}
        >
            {label}
        </MuiButton>
    );
};