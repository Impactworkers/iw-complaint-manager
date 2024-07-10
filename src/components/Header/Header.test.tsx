import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { act } from "react";
import Header from "./Header";
import oktaAuth from "../../auth/auth";

jest.mock("../../auth/auth", () => ({
    signOut: jest.fn().mockResolvedValue(undefined)
}));

describe("Header", () => {
    test("should call handleLogout function when clicking 'Log Out' button", async () => {
        render(<Header />);

        await act(async () => {
            fireEvent.click(
                screen.getByRole("button", { name: /account of current user/i })
            );

            fireEvent.click(screen.getByText(/log out/i));
        });
        expect(oktaAuth.signOut).toHaveBeenCalledTimes(1);
    });
});
