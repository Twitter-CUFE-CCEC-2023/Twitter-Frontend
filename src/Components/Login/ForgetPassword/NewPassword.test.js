import { render, screen } from '@testing-library/react'
import NewPassword from "./NewPassword"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign In", () => {
        test("Setting New Password", () => {
            render(
                <BrowserRouter>
                    <NewPassword />
                </BrowserRouter>
            );
            const TextElement = screen.getByText("Reset your password");
            expect(TextElement).toBeInTheDocument();
            const TextElement4 = screen.getByText("Confirm");
            expect(TextElement4).toBeInTheDocument();
            const Box1Element = screen.getByRole("button");
            expect(Box1Element).toBeInTheDocument();
        })
    }
)