import { render, fireEvent, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import NavigationBar from "./NavigationBar";

describe("NavigationBar", () => {
    test("should render open button", () => {
        render(<NavigationBar />);
        expect(screen.getByText("Navigation Bar")).toBeInTheDocument();
    });

    test("should render NavigationBar", async () => {
        render(<NavigationBar />);
        fireEvent.click(screen.getByText("Navigation Bar"));
        expect(screen.getByText("Cases")).toBeInTheDocument();
        expect(screen.getByText("Admin Settings")).toBeInTheDocument();
        expect(screen.getByText("Admin Portal")).toBeInTheDocument();
    });
});
