import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { NavigationBar } from "./NavigationBar";
import { act } from "react";
describe("NavigationBar", () => {
    test("should render NavigationBar", async () => {
        await act(async () => {
            render(
                <NavigationBar
                    text={["Cases", "Admin Portal"]}
                    muiIcons={["Cases", "Edit"]}
                />
            );
        });
        expect(screen.getByText("Cases")).toBeInTheDocument();
        expect(screen.getByText("Admin Settings")).toBeInTheDocument();
        expect(screen.getByText("Admin Portal")).toBeInTheDocument();
    });
});
