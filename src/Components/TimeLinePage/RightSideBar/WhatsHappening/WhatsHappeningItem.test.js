import { render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import WhatsHappeningItem from "./WhatsHappeningItem";

test("the component renders successfully", () => {
    const {getByTestId} = render(<Router><WhatsHappeningItem isTrending = {true} genre = "Music" topic = "Doja" tweets = {830000}/></Router>);
    expect(getByTestId("genre")).toHaveTextContent("Music . Trending");
    expect(getByTestId("topic")).toHaveTextContent("Doja");
    expect(getByTestId("tweets")).toHaveTextContent("830k Tweets");
    });
test("the component renders successfully", () => {
    const {getByTestId} = render(<Router><WhatsHappeningItem isLive = {true} genre = "Football" topic = "Ghana vs Nigeria" tag = "GhanaVsNaija" img ="https://pbs.twimg.com/semantic_core_img/1507063081976799237/Yz9jlEoe?format=jpg&name=240x240"/></Router>);
    expect(getByTestId("genre")).toHaveTextContent("Football");
    expect(getByTestId("topic")).toHaveTextContent("Ghana vs Nigeria");
    expect(getByTestId("tag")).toHaveTextContent("GhanaVsNaija");
    });