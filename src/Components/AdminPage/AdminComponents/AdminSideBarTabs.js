import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import LoopRoundedIcon from "@material-ui/icons/LoopRounded";

const Tabs = [
  {
    title: "Filters",
    icon: <EqualizerRoundedIcon />,
    url: "/admin",
  },
  {
    title: "Users List",
    icon: <PeopleAltRoundedIcon />,
    url: "/admin-userslist",
  },
  {
    title: "Likes",
    icon: <ThumbUpAltRoundedIcon />,
    url: "/admin-likes",
  },
  {
    title: "Tweets",
    icon: <TwitterIcon />,
    url: "/admin-tweets",
  },
  {
    title: "Retweets",
    icon: <LoopRoundedIcon />,
    url: "/admin-retweets",
  },
];

export default Tabs;
