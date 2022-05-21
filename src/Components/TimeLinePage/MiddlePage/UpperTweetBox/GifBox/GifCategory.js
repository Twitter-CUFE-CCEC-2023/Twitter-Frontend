import classes from "./GifCategory.module.css";
export default function GifCategory(props) {
  return (
    <div className={classes["Gif-wrapper"]} onClick={props.onClick}>
      <img className={classes.image} src={props.image} />
      <div className={classes.name}>{props.name}</div>
    </div>
  );
}
