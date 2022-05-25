import { render, screen } from "@testing-library/react";
import AccountInfo from "./AccountInfo";
import AccountInfoItem from "./AccountInfoItem";

describe("testing profile section component", () => {
  test("the component renders successfully", () => {
    render(
      <AccountInfoItem
        data={{ id: 0, name: "username", value: "mena" }}
      ></AccountInfoItem>
    );
    const element = screen.getByText(/username/i);
    expect(element).toBeInTheDocument();
  });
});
