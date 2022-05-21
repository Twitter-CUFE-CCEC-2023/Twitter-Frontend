import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    borderRadius: "100px",
    width: "127px",
    lineHeight: 1.5,
    backgroundColor: "var(--twitterBlue)",
    borderColor: "var(--twitterBlue)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "var(--twitterBlueHighlighted)",
      borderColor: "var(--twitterBlueHighlighted)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "var(--twitterBlue)",
      borderColor: "var(--twitterBlue)",
    },
    "@media (max-width: 400px)": {
      width: "120px",
    },
  },
})(Button);

export default BootstrapButton;
