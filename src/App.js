import React, { useContext } from "react";
import { LoginContext } from "./login-context";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "./App.css";

import MainPage from "./Components/Login/FirstPage/MainPage";
import SignInPage from "./Components/Login/SignInPage/SignInPage";

import Mail from "./Components/Login/SignUp/Mail";
import Phone from "./Components/Login/SignUp/Phone";
import PhoneVerify from "./Components/Login/SignUp/PhoneVerify";
import TrackOption from "./Components/Login/SignUp/TrackOption";
import AddPhone from "./Components/Login/SignUp/AddPhone";

import Home from "./Components/TimeLinePage/Home";
import AllNotificationsPage from "./Components/Notifications/AllNotificationsPage";
import MentionNotificationsPage from "./Components/Notifications/MentionNotificationsPage";
import Settings from "./Components/Settings/Settings";
import UserProfile from "./Components/UserProfilePage/UserProfile";
import ImageCropper from "./Components/UserProfilePage/ProfileActions/ImageCropper";
import FollowingFollowersPage from "./Components/UserProfilePage/FollowingFollowersPage/FollowingFollowersPage";
import UnderConstructionPage from "./Components/ExtraPages/UnderConstructionPage";

import Admin from "./Components/AdminPage/Admin";
import UsersList from "./Components/AdminPage/SideBarTabs/UsersList";
import Likes from "./Components/AdminPage/SideBarTabs/Likes";
import Tweets from "./Components/AdminPage/SideBarTabs/Tweets";
import Retweets from "./Components/AdminPage/SideBarTabs/Retweets";
import Statistics from "./Components/AdminPage/SideBarTabs/Statistics";
import MainTweetPage from "./Components/TimeLinePage/TweetPage/MainTweetPage";
import PhotosPage from "./Components/TimeLinePage/ViewPhotosPage/PhotosPage";

// ctrl k + ctrl shift s => to save without formatting

function App() {
  const loginCtx = useContext(LoginContext);

  // console.log("Admin " + loginCtx.isAdmin);
  // console.log("Login " + loginCtx.isLoggedIn);
  // const ans = loginCtx.isLoggedIn && !loginCtx.isAdmin;
  // const ans2 = loginCtx.isLoggedIn && loginCtx.isAdmin;
  // console.log("User Can Login " + ans);
  // console.log("Admin Can Login " + ans2);

  localStorage.setItem("isMock", "true");

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route path="/SignIn" component={SignInPage} />

          <Route path="/Mail" component={Mail} />
          <Route path="/Phone" component={Phone} />
          <Route path="/phoneVerify" component={PhoneVerify} />
          <Route path="/TrackOption" component={TrackOption} />
          <Route path="/AddPhone" component={AddPhone} />

          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/home" component={Home} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/:userId/status/:id" component={MainTweetPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/photos/status/:id/photo/:photoNum" component={PhotosPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/explore" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/notifications" component={AllNotificationsPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/mentionnotifications" component={MentionNotificationsPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/messages" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/bookmarks" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/profileName/lists" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/userprofile/:userName" component={UserProfile} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/following/:userName" component={FollowingFollowersPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/followers/:userName" component={FollowingFollowersPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/crop" component={ImageCropper} />}

          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/:userName/topics" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/moment_maker" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/newsletters" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/flow/convert_to_professional" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/twitter-ads" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/analytics" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/settings" component={Settings} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/help-center" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/display" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/keyboard-shortcuts" component={UnderConstructionPage} />}

          {loginCtx.isLoggedIn && loginCtx.isAdmin && <Route path="/admin" component={Admin} />}
          {loginCtx.isLoggedIn && loginCtx.isAdmin && <Route path="/admin-userslist" component={UsersList} />}
          {loginCtx.isLoggedIn && loginCtx.isAdmin && <Route path="/admin-likes" component={Likes} />}
          {loginCtx.isLoggedIn && loginCtx.isAdmin && <Route path="/admin-tweets" component={Tweets} />}
          {loginCtx.isLoggedIn && loginCtx.isAdmin && <Route path="/admin-retweets" component={Retweets} />}
          {loginCtx.isLoggedIn && loginCtx.isAdmin && <Route path="/admin-statistics" component={Statistics} />}

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
