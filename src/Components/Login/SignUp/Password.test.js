import { render, screen } from '@testing-library/react'
import Password from "./Password"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign Up", () => {
        test("Mail Form", () => {
            render(
                <BrowserRouter>
                    <Password />
                </BrowserRouter>
            );
            const TextElement = screen.getByText("You'll need a password");
            expect(TextElement).toBeInTheDocument();
            const TextElement4 = screen.getByText("Sign Up");
            expect(TextElement4).toBeInTheDocument();

        })
    }
)