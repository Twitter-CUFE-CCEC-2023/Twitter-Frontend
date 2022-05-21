import React, { useContext } from "react";
import { LoginContext } from "./login-context";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "./App.css";

import MainPage from "./Components/Login/FirstPage/MainPage";
import SignInPage from "./Components/Login/SignInPage/SignInPage";

import Mail from "./Components/Login/SignUp/SignUpPage";
import PhoneVerify from "./Components/Login/SignUp/PhoneVerify";
import TrackOption from "./Components/Login/SignUp/TrackOption";
import AddPhone from "./Components/Login/SignUp/AddPhone";
import Password from "./Components/Login/SignUp/Password";

import Home from "./Components/TimeLinePage/Home";
import AllNotificationsPage from "./Components/Notifications/AllNotificationsPage";
import MentionNotificationsPage from "./Components/Notifications/MentionNotificationsPage";
import DeletedTweet from "./Components/Notifications/All/DeletedTweet";
import Settings from "./Components/Settings/Settings";
import UserProfile from "./Components/UserProfilePage/UserProfile";
import ImageCropper from "./Components/UserProfilePage/ProfileActions/ImageCropper";
import FollowingFollowersPage from "./Components/UserProfilePage/FollowingFollowersPage/FollowingFollowersPage";
import UnderConstructionPage from "./Components/ExtraPages/UnderConstructionPage";
import SignUpPagePhone from "./Components/Login/SignUp/SignUpPagePhone";
import GoogleRedirect from "./Components/Login/Google/GoogleBlankPage";

import Admin from "./Components/AdminPage/Admin";
import UsersList from "./Components/AdminPage/SideBarTabs/UsersList";
import Likes from "./Components/AdminPage/SideBarTabs/Likes";
import Tweets from "./Components/AdminPage/SideBarTabs/Tweets";
import Retweets from "./Components/AdminPage/SideBarTabs/Retweets";
import Statistics from "./Components/AdminPage/SideBarTabs/Statistics";
import MainTweetPage from "./Components/TimeLinePage/TweetPage/MainTweetPage";
import PhotosPage from "./Components/TimeLinePage/ViewPhotosPage/PhotosPage";
import forgotPW from "./Components/Login/ForgetPassword/Process";

// ctrl k + ctrl shift s => to save without formatting

function App() {
  const loginCtx = useContext(LoginContext);

  // console.log("Admin ", loginCtx.isAdmin);
  // console.log("!!!Admin ", !!!loginCtx.isAdmin);
  console.log("Login ", loginCtx.isLoggedIn);
  // const ans = loginCtx.isLoggedIn && !loginCtx.isAdmin;
  // const ans2 = loginCtx.isLoggedIn && loginCtx.isAdmin;
  // console.log("User Can Login " + ans);
  // console.log("Admin Can Login " + ans2);

  localStorage.setItem("isMock", "false");

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route path="/SignIn" component={SignInPage} />
          <Route path="/auth/google" />

          <Route path="/Mail" component={Mail} />
          <Route path="/Phone" component={SignUpPagePhone} />
          <Route path="/phoneVerify" component={PhoneVerify} />
          <Route path="/TrackOption" component={TrackOption} />
          <Route path="/AddPhone" component={AddPhone} />
          <Route path="/Password" component={Password} />
          <Route path="/ForgetPW" component={forgotPW} />
          <Route path="/GoogleRedirect" component={GoogleRedirect} />

          {loginCtx.isLoggedIn && <Route path="/home" component={Home} />}
          {loginCtx.isLoggedIn && <Route path="/:userId/status/:id" component={MainTweetPage} />}
          {loginCtx.isLoggedIn && <Route path="/photos/status/:id/photo/:photoNum" component={PhotosPage} />}
          {loginCtx.isLoggedIn && <Route path="/explore" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/notifications" component={AllNotificationsPage} />}
          {loginCtx.isLoggedIn && <Route path="/mentionnotifications" component={MentionNotificationsPage} />}
          {loginCtx.isLoggedIn && <Route path="/deletedtweet" component={DeletedTweet} />}
          {loginCtx.isLoggedIn && <Route path="/messages" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/i/bookmarks" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/profileName/lists" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/userprofile/:userName" component={UserProfile} />}
          {loginCtx.isLoggedIn && <Route path="/following/:userName" component={FollowingFollowersPage} />}
          {loginCtx.isLoggedIn && <Route path="/followers/:userName" component={FollowingFollowersPage} />}
          {loginCtx.isLoggedIn && <Route path="/crop" component={ImageCropper} />}

          {loginCtx.isLoggedIn && <Route path="/:userName/topics" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/i/moment_maker" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/i/newsletters" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/i/flow/convert_to_professional" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/twitter-ads" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/analytics" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/settings" component={Settings} />}
          {loginCtx.isLoggedIn && <Route path="/help-center" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/i/display" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && <Route path="/i/keyboard-shortcuts" component={UnderConstructionPage} />}

          {loginCtx.isLoggedIn && <Route path="/admin" component={Admin} />}
          {loginCtx.isLoggedIn && <Route path="/admin-userslist" component={UsersList} />}
          {loginCtx.isLoggedIn && <Route path="/admin-likes" component={Likes} />}
          {loginCtx.isLoggedIn && <Route path="/admin-tweets" component={Tweets} />}
          {loginCtx.isLoggedIn && <Route path="/admin-retweets" component={Retweets} />}
          {loginCtx.isLoggedIn && <Route path="/admin-statistics" component={Statistics} />}

          {!loginCtx.isLoggedIn && <Route path="*"><Redirect to="/" /></Route>}
          {loginCtx.isLoggedIn && <Route path="*"><Redirect to="/home" /></Route>}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
