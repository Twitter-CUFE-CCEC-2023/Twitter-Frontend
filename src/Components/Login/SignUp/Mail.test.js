import { render, screen } from '@testing-library/react'
import Mail from "./Mail"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign Up", () => {
        test("Mail Form" , () => {
            render(
                <BrowserRouter>
                    <Mail/>
                </BrowserRouter>
            );
            const TextElement = screen.getByText("Create your account");
            expect(TextElement).toBeInTheDocument(); 
            const TextElement2 = screen.getByText("Use phone instead");
            expect(TextElement2).toBeInTheDocument(); 
            const TextElement3 = screen.getByText("Date of birth");
            expect(TextElement3).toBeInTheDocument(); 
            const TextElement4 = screen.getByText("Next");
            expect(TextElement4).toBeInTheDocument(); 
            const Box1Element =  screen.getByRole("button");
            expect(Box1Element).toBeInTheDocument();
        })
    }
)