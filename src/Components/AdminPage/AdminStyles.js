import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 175,
    "@media (max-width: 850px)": {
      width: 55,
    },
    flexShrink: 0,
  },
  drawerPaper: {
    width: 175,
    "@media (max-width: 850px)": {
      width: 55,
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sideBarMargin: {
    paddingLeft: "1px",
    minWidth: 0,
    marginRight: "15px",
  },
}));

export default useStyles;
