import { render, screen } from '@testing-library/react'
import AddPhone from "./AddPhone"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign Up", () => {
        test("Mail Form", () => {
            render(
                <BrowserRouter>
                    <AddPhone />
                </BrowserRouter>
            );
            const TextElement = screen.getByText("Add a phone number");
            expect(TextElement).toBeInTheDocument();
            const TextElement2 = screen.getByText("Let people who have your phone number find and connect with you on Twitter");
            expect(TextElement2).toBeInTheDocument();
            const TextElement4 = screen.getByText("Next");
            expect(TextElement4).toBeInTheDocument();
        })
    }
)