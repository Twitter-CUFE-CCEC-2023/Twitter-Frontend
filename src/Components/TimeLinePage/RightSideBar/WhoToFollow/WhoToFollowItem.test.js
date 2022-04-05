import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import WhoToFollowItem from "./WhoToFollowItem";

test("the component renders successfully", () => {
    const {getByTestId} = render(<Router>
        <WhoToFollowItem profilePic = "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
        name = "Iris"
        userName = "ItsIris"/>
    </Router>);
    expect(getByTestId("profilePic")).toHaveAttribute("src", "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1");
    expect(getByTestId("name")).toHaveTextContent("Iris");
    expect(getByTestId("userName")).toHaveTextContent("ItsIris");
});