import classes from "./PollBox.module.css";
import add from "../../../../../Assets/icons/plus.png";
import PollChoice from "./PollChoice";
import { useState } from "react";
import PrettySelect from "./PrettySelect";
export default function PollBox(props) {
  const [choicesNum, setChoicesNum] = useState(2);
  const [choiceNums, setChoiceNums] = useState([1, 2]);
  function addChoice() {
    setChoicesNum((prev) => {
      return prev + 1;
    });
    setChoiceNums((prev) => {
      return [...prev, choicesNum + 1];
    });
  }
  const days = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" };
  const hours = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
    22: "22",
    23: "23",
  };
  const minutes = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
    22: "22",
    23: "23",
    24: "24",
    25: "25",
    26: "26",
    27: "27",
    28: "28",
    29: "29",
    30: "30",
    31: "31",
    32: "32",
    33: "33",
    34: "34",
    35: "35",
    36: "36",
    37: "37",
    38: "38",
    39: "39",
    40: "40",
    41: "41",
    42: "42",
    43: "43",
    44: "44",
    45: "45",
    46: "46",
    47: "47",
    48: "48",
    49: "49",
    50: "50",
    51: "51",
    52: "52",
    53: "53",
    54: "54",
    55: "55",
    56: "56",
    57: "57",
    58: "58",
    59: "59",
  };

  return (
    <div className={classes.poll}>
      <div className={classes["choices-container"]}>
        <div className={classes["choices"]}>
          {choiceNums.map((choice) => {
            return (
              <PollChoice
                naming={`choice${choice}`}
                placeHolder={`choice${choice}`}
                optional={choice > 2}
              ></PollChoice>
            );
          })}
        </div>
        <div className={classes["add-container"]}>
          <img src={add} onClick={addChoice} className={classes.add}></img>
        </div>
      </div>
      <div className={classes["poll-length"]}>
        <div className={classes["poll-length-header"]}>poll length</div>
        <div className={classes["poll-length-choices"]}>
          <div className={classes["poll-length-choice"]}>
            <PrettySelect option="Days" data={days}></PrettySelect>
          </div>
          <div className={classes["poll-length-choice"]}>
            <PrettySelect option="hours" data={hours}></PrettySelect>
          </div>
          <div className={classes["poll-length-choice"]}>
            <PrettySelect option="Minutes" data={minutes}></PrettySelect>
          </div>
        </div>
      </div>
      <div className={classes["poll-remove"]} onClick={props.onRemove}>
        Remove Pull
      </div>
    </div>
  );
}
