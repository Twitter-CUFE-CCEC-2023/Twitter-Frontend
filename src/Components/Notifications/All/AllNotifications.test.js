import {
  cleanup,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import AllNotifications from "./AllNotifications";
import { BrowserRouter as Router } from "react-router-dom";
import mockAxios from "axios";
import { setupServer } from "msw/node";

let notifications = [
  {
    _id: "6266623a09989fe79ba6fe15",
    content: "Youssef Mokhtar has liked your tweet",
    notification_type: "Like",
    related_user: {
      id: "624a52d75ff69df002d25035",
      name: "Yousuf Mokhtar",
      username: "YoussMokh",
      email: "mekha2000@gmail.com",
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ.jpg",
      cover_image_url: "",
      bio: "",
      website: "",
      location: "",
      birth_date: "2000-05-09T21:00:00.000Z",
      created_at: "2022-04-24T00:29:24.967Z",
      followers_count: 2,
      following_count: 1,
      tweets_count: 12,
      likes_count: 0,
      isBanned: false,
      isVerified: true,
    },
    tweet: {
      id: "6265efab237cea3a3dbca16d",
      content: "What's happening\nMusic . Trending\n\nDoja\n\n830k Tweets",
      user: {},
      likes_count: 0,
      retweets_count: 0,
      replies_count: 0,
      quotes_count: 0,
      is_liked: false,
      is_retweeted: false,
      is_quoted: false,
      is_reply: false,
      quote_comment: null,
      mentions: [],
      media: [],
      created_at: "2022-04-25T00:47:39.735Z",
    },
    is_read: false,
  },
];
const server = new setupServer();

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(cleanup);

test("the API works correctly", async () => {
  mockAxios.get.mockResolvedValueOnce({
    data: {
      notifications: notifications,
    },
  });
  const url = "/notifications/1/1";
  const { getByTestId } = render(
    <Router>
      <AllNotifications testUrl={url} />
    </Router>
  );

  const resolvedNotification = await waitFor(() => getByTestId('0'));
  expect(resolvedNotification).toHaveTextContent(
    notifications[0].related_user.name
  );
});
