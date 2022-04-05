import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import MiniProfile from "./MiniProfile";

test("the component renders successfully", () => {
    const {getByTestId} = render(<Router><MiniProfile
        profilePic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
        name="Andrew"
        userName="andrew9991"
        profileDesciption="Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler"
        following={777}
        followers={1863}
      /></Router>);
    
    expect(getByTestId("namemp")).toHaveTextContent("Andrew");
    expect(getByTestId("userNamemp")).toHaveTextContent("@andrew9991");   
    expect(getByTestId("profileDesciption")).toHaveTextContent("Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler");
    expect(getByTestId("followingmp")).toHaveTextContent("777");
    expect(getByTestId("followersmp")).toHaveTextContent("1863");
});