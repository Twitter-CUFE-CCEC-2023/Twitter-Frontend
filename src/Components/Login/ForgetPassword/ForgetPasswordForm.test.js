import { render, screen } from '@testing-library/react'
import ForgetPasswordForm from "./ForgetPasswordForm"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign In", () => {
        test("Forgot Password", () => {
            render(
                <BrowserRouter>
                    <ForgetPasswordForm />
                </BrowserRouter>
            );
            const TextElement = screen.getByText("Find your Twitter account");
            expect(TextElement).toBeInTheDocument();
            const TextElement4 = screen.getByText("Search");
            expect(TextElement4).toBeInTheDocument();
            const Box1Element = screen.getByRole("button");
            expect(Box1Element).toBeInTheDocument();
        })
    }
)