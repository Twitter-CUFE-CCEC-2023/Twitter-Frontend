import classes from "./PollChoice.module.css";
import PrettyInputOnly from "./PrettyInputOnly";
export default function PollChoice(props) {
  return (
    <div className={classes.choice}>
      <div className={classes.formWidth}>
        <PrettyInputOnly {...props}></PrettyInputOnly>
      </div>
    </div>
  );
}
