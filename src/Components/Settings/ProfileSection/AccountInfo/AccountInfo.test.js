import { render, screen } from "@testing-library/react";
import AccountInfo from "./AccountInfo";

describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(<AccountInfo></AccountInfo>);
    const element = screen.getByText(/Account information/i);
    expect(element).toBeInTheDocument();
  });
});
