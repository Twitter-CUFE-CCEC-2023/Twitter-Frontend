import { render, screen } from "@testing-library/react";
import ProfileSectionChoice from "./ProfileSectionChoice";
import brkoen from "../../../Assets/settings-profile/broken-heart.png";
describe("testing choice component", () => {
  test("the component renders successfully", () => {
    render(
      <ProfileSectionChoice
        data={{
          name: "Deactivate your account",
          description: "Find out how you can deactivate your account",
          image: brkoen,
        }}
      ></ProfileSectionChoice>
    );
    const element = screen.getByText("Deactivate your account");
    expect(element).toBeInTheDocument();
  });
});
