import { render, screen } from '@testing-library/react'
import Validation from "./Validation"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign In", () => {
        test("Verification Step Form", () => {
            render(
                <BrowserRouter>
                    <Validation />
                </BrowserRouter>
            );
            const TextElement = screen.getByText("Check your email");
            expect(TextElement).toBeInTheDocument();
            const TextElement2 = screen.getByText("You'll receive a code to verify here so you can reset your account password.");
            expect(TextElement2).toBeInTheDocument();
            const TextElement4 = screen.getByText("Didn't receive code?");
            expect(TextElement4).toBeInTheDocument();
            const Box1Element = screen.getByRole("button");
            expect(Box1Element).toBeInTheDocument();
        })
    }
)