// import { cleanup, render, screen, within, waitFor } from "@testing-library/react";
// import ProfileData from "./ProfileData";
// import { BrowserRouter as Router } from 'react-router-dom';
// import mockAxios from "axios";
// import {setupServer} from "msw/node";



// let usertweet = [
//     {
//       id: "amrzaki",
//       tweets: [
//         {
//           id: "626873e0c28380b5a04af1a4",
//           content: "final test",
//           user: {},
//           likes_count: 0,
//           retweets_count: 0,
//           replies_count: 0,
//           quotes_count: 0,
//           is_liked: false,
//           is_retweeted: false,
//           is_quoted: false,
//           is_reply: false,
//           quote_comment: null,
//           mentions: [],
//           media: [],
//           created_at: "2022-04-26T22:36:16.401Z",
//           replies: []
//         }
//       ]
//       }
//   ]
// const server = new setupServer();

// beforeEach(() => {
//     // IntersectionObserver isn't available in test environment
//     const mockIntersectionObserver = jest.fn();
//     mockIntersectionObserver.mockReturnValue({
//       observe: () => null,
//       unobserve: () => null,
//       disconnect: () => null
//     });
//     window.IntersectionObserver = mockIntersectionObserver;
//   });

// afterEach(cleanup);

// test ("the API works correctly", async() => {
//     mockAxios.get.mockResolvedValueOnce({
//         data: {
//           usertweet: usertweet
//         }
//     });
//     const url = "/status/tweets/list/amrzaki/1/1";
//     const {getByTestId} = render(<Router><ProfileData testUrl = {url}/></Router>);

//     const resolvedTweet = await waitFor(() => getByTestId('0'));
//     expect(resolvedTweet).toHaveTextContent(usertweet[0].tweets[0].content);
//     });