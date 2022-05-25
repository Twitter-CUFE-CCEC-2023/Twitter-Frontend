import { render, screen } from '@testing-library/react'
import TrackOption from "./TrackOption"
import { BrowserRouter } from "react-router-dom";

describe(
    "Sign Up", () => {
        test("Track option Form", () => {
            render(
                <BrowserRouter>
                    <TrackOption />
                </BrowserRouter>
            );
            const TextElement1 = screen.getByText("Step 2 of 5");
            expect(TextElement1).toBeInTheDocument();
            const TextElement2 = screen.getByText("Track where you see Twitter content across the web");
            expect(TextElement2).toBeInTheDocument();
            const TextElement3 = screen.getByText("Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.");
            expect(TextElement3).toBeInTheDocument();
        })
    }
)