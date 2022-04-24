import React, { useContext } from "react";
import { LoginContext } from "./login-context";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useLocation } from 'react-router-dom';
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

// ctrl k + ctrl shift s => to save without formatting

function App() {
  const loginCtx = useContext(LoginContext);
  console.log("Login " + loginCtx.isLoggedIn);
  console.log("Admin " + loginCtx.isAdmin);

  // const log = localStorage.getItem("login");
  // console.log("Login = " + log);

  // const log2 = JSON.parse(localStorage.getItem("UserInfo"));
  // console.log(log2.username);


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
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/notifications" component={AllNotificationsPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/mentionnotifications" component={MentionNotificationsPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/settings" component={Settings} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/userprofile/:userName" component={UserProfile} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/following/:userName" component={FollowingFollowersPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/followers/:userName" component={FollowingFollowersPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/crop" component={ImageCropper} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/explore" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/messages" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/i/bookmarks" component={UnderConstructionPage} />}
          {loginCtx.isLoggedIn && !loginCtx.isAdmin && <Route path="/profileName/lists" component={UnderConstructionPage} />}

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
