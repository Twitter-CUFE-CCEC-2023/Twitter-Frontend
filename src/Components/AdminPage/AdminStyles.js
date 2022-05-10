import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 165;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: 175,
//     "@media (max-width: 850px)": {
//       width: 55,
//     },
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: 175,
//     "@media (max-width: 850px)": {
//       width: 55,
//     },
//   },
//   drawerContainer: {
//     overflow: "auto",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   sideBarMargin: {
//     paddingLeft: "1px",
//     minWidth: 0,
//     marginRight: "15px",
//   },
// }));

export default useStyles;
