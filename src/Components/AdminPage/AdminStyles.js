import { makeStyles } from "@material-ui/core/styles";

let drawerWidth = 200;
const screenSize = window.innerWidth;

if (screenSize < 800) {
  drawerWidth = 60;
} else {
  drawerWidth = 175;
}

// console.log(screenSize);
// console.log(drawerWidth);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default useStyles;
