import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { act } from "react";
import Header from "./Header";
import oktaAuth from "../../auth/auth";

jest.mock("../../auth/auth", () => ({
    signOut: jest.fn().mockResolvedValue(undefined)
}));

describe("Header component", () => {
    test("should call logout function when clicking 'Logout' button", async () => {
        render(<Header />);

        await act(async () => {
            fireEvent.click(
                screen.getByRole("button", { name: /account of current user/i })
            );

            fireEvent.click(screen.getByText(/logout/i));
        });
        expect(oktaAuth.signOut).toHaveBeenCalledTimes(1);
    });
});
