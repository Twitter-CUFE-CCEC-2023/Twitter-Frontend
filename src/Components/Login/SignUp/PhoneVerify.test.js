import { render, screen } from '@testing-library/react'
import PhoneVerify from "./PhoneVerify"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign Up", () => {
        test("Phone Verify Form", () => {
            render(
                <BrowserRouter>
                    <PhoneVerify />
                </BrowserRouter>
            );
            const TextElement = screen.getByText("We sent you a code");
            expect(TextElement).toBeInTheDocument();
            const TextElement2 = screen.getByText("Enter it below to verify your email.");
            expect(TextElement2).toBeInTheDocument();
            const TextElement3 = screen.getByText("Didn't receive email?");
            expect(TextElement3).toBeInTheDocument();
            const TextElement4 = screen.getByText("Next");
            expect(TextElement4).toBeInTheDocument();
            const Box1Element = screen.getByRole("button");
            expect(Box1Element).toBeInTheDocument();
        })
    }
)