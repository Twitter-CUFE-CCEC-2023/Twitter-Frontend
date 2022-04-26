import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProfileData from "./ProfileData";

describe("Profile Data component", () => {
  test("renders profile name", () => {
    render(
      <BrowserRouter>
        <ProfileData />
      </BrowserRouter>
    );
    const profileName = screen.getByText("عمرو أكا زيكا", { exact: true });
    expect(profileName).toBeInTheDocument();
  });
  test("renders profile Bio", () => {
    render(
      <BrowserRouter>
        <ProfileData />
      </BrowserRouter>
    );
    const profileBio = screen.getByText("Al Ahly", { exact: false });
    expect(profileBio).toBeInTheDocument();
  });
  test("renders profile email", () => {
    render(
      <BrowserRouter>
        <ProfileData />
      </BrowserRouter>
    );
    const profileEmail = screen.getByText("@Amr_Zaki2000", { exact: false });
    expect(profileEmail).toBeInTheDocument();
  });
  test("renders profile Date", () => {
    render(
      <BrowserRouter>
        <ProfileData />
      </BrowserRouter>
    );
    const profileDate = screen.getByText("October", { exact: false });
    expect(profileDate).toBeInTheDocument();
  });
  test("renders edit profile button", () => {
    render(
      <BrowserRouter>
        <ProfileData />
      </BrowserRouter>
    );
    const profileEditButton = screen.getByText("Edit Profile");
    expect(profileEditButton).toBeInTheDocument();
  });
});
