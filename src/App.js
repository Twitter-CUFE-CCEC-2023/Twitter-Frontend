import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
import UnderConstructionPage from "./Components/ExtraPages/UnderConstructionPage";

import Admin from "./Components/AdminPage/Admin";
import UsersList from "./Components/AdminPage/SideBarTabs/UsersList";
import Likes from "./Components/AdminPage/SideBarTabs/Likes";
import Tweets from "./Components/AdminPage/SideBarTabs/Tweets";
import Retweets from "./Components/AdminPage/SideBarTabs/Retweets";

function App() {
  // const loginCtx = useContext(LoginContext);
  // console.log(loginCtx.isLoggedIn);

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
          <Route path="/home" component={Home} />
          <Route path="/notifications" component={AllNotificationsPage} />
          <Route
            path="/mentionnotifications"
            component={MentionNotificationsPage}
          />
          <Route path="/settings" component={Settings} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/explore" component={UnderConstructionPage} />
          <Route path="/messages" component={UnderConstructionPage} />
          <Route path="/i/bookmarks" component={UnderConstructionPage} />
          <Route path="/profileName/lists" component={UnderConstructionPage} />

          <Route path="/admin" component={Admin} />
          <Route path="/admin-userslist" component={UsersList} />
          <Route path="/admin-likes" component={Likes} />
          <Route path="/admin-tweets" component={Tweets} />
          <Route path="/admin-retweets" component={Retweets} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /*
    {loginCtx.isLoggedIn && (
      <Route path="/SelectModifications" component={Btn} />
    )}
    {loginCtx.isLoggedIn && <Route path="/Select" component={Select} />}
    {loginCtx.isLoggedIn && <Route path="/AddRow" component={AddRow} />}
    {loginCtx.isLoggedIn && (
      <Route path="/UpdateGenres" component={VodSearch} />
    )}
*/
}

// import React from "react";
// import { NavLink } from "react-router-dom";
// import classes from "./Components/Login/SignUp/Mail.module.css";
// import ClearIcon from "@material-ui/icons/Clear";
// import TrackOption from "./Components/Login/Buttons/EmailSignUpNext"
// import twitterBlueLogo from "./Assets/twitterBlueLogo.png";
// import SignUpBackground from "./Components/Login/SignUp/MailBack";
// import Day from "./Components/Login/SignUp/DayTest"

// const Mail = () => {
//   return (
//     <SignUpBackground>
//       <img
//         className={classes.twitterBluelogo}
//         src={twitterBlueLogo}
//         alt="TwitterLogo"
//       />
//       <NavLink to="/" className={classes.closeIcon}>
//         <ClearIcon />
//       </NavLink>

//       <div className={classes.container}>
//         <p>Create your account</p>
//         <input type="text" className={classes.input} />
//         <div className={classes.placeholder}>
//           Name
//         </div>
//         <input type="text" className={classes.input} />
//         <div className={classes.placeholder}>
//           Email address
//         </div>
//         <NavLink to="/Phone" className={classes.navLink}>
//           <div className={classes.Use}>
//             <p className={classes.content}>Use phone number instead</p>
//           </div>
//         </NavLink>
//         <div className={classes.DateOfBirth} style={{ fontWeight: "bold" }}>
//           Date of birth{" "}
//         </div>
//         <div className={classes.Minor3}>
//           This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
//         </div>
//         <Day />
//         <TrackOption />
//       </div>
//     </SignUpBackground>
//   );
// };

// export default Mail;
