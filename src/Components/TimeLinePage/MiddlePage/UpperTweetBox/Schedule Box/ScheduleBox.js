import React, { useState } from "react";
import x from "../../../../../Assets/icons/close.png";
import event from "../../../../../Assets/icons/event.png";
import classes from "./ScheduleBox.module.css";
import PrettySelect from "../PollBox/PrettySelect";
import { datePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";

export default function ScheduleBox(props) {
  const [c_month, set_c_month] = useState(9);
  const [c_day, set_c_day] = useState(1);
  const [c_year, set_c_year] = useState(2022);
  const [c_hour, set_c_hour] = useState(12);
  const [c_min, set_c_min] = useState(0);
  const [c_tz, set_c_tz] = useState("a");

  const days = {
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
    21: "21",
    22: "22",
    23: "23",
    24: "24",
    25: "25",
    26: "26",
    27: "27",
    28: "28",
    29: "29",
    30: "30",
  };
  const months = {
    0: "jan",
    1: "feb",
    2: "mar",
    3: "apr",
    4: "may",
    5: "jun",
    6: "jul",
    7: "aug",
    8: "sep",
    9: "oct",
    10: "nov",
    11: "dec",
  };
  const years = { 2022: 2022, 2023: 2023, 2024: 2024 };

  const hours = {
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
  };
  const zone = { a: "am", p: "pm" };
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
  const [eventContent, seteventContent] = useState(
    new Date(2022, 9, 1, 0, 0, 0)
  );
  const [old, setOld] = useState(false);
  let eventContentComp = new Date(2022, 9, 1, 0, 0, 0);
  function dateCompare() {
    if (eventContentComp < Date.now()) {
      setOld(true);
    } else {
      setOld(false);
    }
  }
  function changeDate() {
    const hour = c_hour + c_tz == "p" ? 12 : 0;

    seteventContent(new Date(c_year, c_month, c_day, hour, c_min, 0));
  }
  function changeMonth(val) {
    set_c_month(val);
    seteventContent(new Date(c_year, val, c_day, c_hour, c_min, 0));
    eventContentComp = new Date(c_year, val, c_day, c_hour, c_min, 0);
    dateCompare();
  }

  function changeDay(val) {
    set_c_day(val);
    seteventContent(new Date(c_year, c_month, val, c_hour, c_min, 0));
    eventContentComp = new Date(c_year, c_day, val, c_hour, c_min, 0);
    dateCompare();
  }

  function changeYear(val) {
    set_c_year(val);
    seteventContent(new Date(val, c_month, c_day, c_hour, c_min, 0));
    eventContentComp = new Date(val, c_month, c_day, c_hour, c_min, 0);
    dateCompare();
  }

  function changeHour(val) {
    set_c_hour(val);
    let hour = val;
    if (c_tz === "p") hour = 12 - -hour;
    seteventContent(new Date(c_year, c_month, c_day, hour, c_min, 0));
    eventContentComp = new Date(c_year, c_month, c_day, hour, c_min, 0);
    dateCompare();
  }

  function changeMin(val) {
    set_c_min(val);
    seteventContent(new Date(c_year, c_month, c_day, c_hour, val, 0));
    eventContentComp = new Date(c_year, c_month, c_day, c_hour, val, 0);
    dateCompare();
  }
  function changeTZ(val) {
    set_c_tz(val);
    let hour = c_hour;
    if (val === "p") hour = 12 - -hour;
    seteventContent(new Date(c_year, c_month, c_day, hour, c_min, 0));
    eventContentComp = new Date(c_year, c_month, c_day, hour, c_min, 0);
    dateCompare();
  }
  return (
    <React.Fragment>
      <div className={classes.background} onClick={props.onHide}></div>
      <div className={classes.body}>
        <div className={classes.header}>
          <img
            className={classes["header-x"]}
            src={x}
            onClick={props.onHide}
          ></img>
          <div className={classes["header-div"]}>Schedule</div>
          <button
            className={classes["header-button"]}
            onClick={(e) => {
              e.preventDefault();
              props.onHide();
            }}
          >
            confirm
          </button>
        </div>
        <div className={classes.message}>
          <div className={classes["message-event"]}>
            <img className={classes["message-event-image"]} src={event}></img>
            will send on {eventContent.toString()}
          </div>

          <div className={classes["message-header"]}>Date</div>
          <div className={classes["choices"]}>
            <div className={classes["length-choice-3"]}>
              <PrettySelect
                option="months"
                data={months}
                noDefault={true}
                chosen={c_month}
                onChange={changeMonth}
                red={old}
              ></PrettySelect>
            </div>
            <div className={classes["length-choice-2"]}>
              <PrettySelect
                option="Days"
                data={days}
                noDefault={true}
                chosen={c_day}
                onChange={changeDay}
                red={old}
              ></PrettySelect>
            </div>
            <div className={classes["length-choice-2"]}>
              <PrettySelect
                option="years"
                data={years}
                noDefault={true}
                chosen={c_year}
                onChange={changeYear}
                red={old}
              ></PrettySelect>
            </div>
          </div>
          {old && (
            <div className={classes.red}>
              You can’t schedule a Tweet to send in the past.
            </div>
          )}
          <div className={classes["message-header"]}>time</div>
          <div className={classes["choices"]}>
            <div className={classes["length-choice-1"]}>
              <PrettySelect
                option="hours"
                data={hours}
                noDefault={true}
                chosen={c_hour}
                onChange={changeHour}
              ></PrettySelect>
            </div>
            <div className={classes["length-choice-1"]}>
              <PrettySelect
                option="minutes"
                data={minutes}
                noDefault={true}
                chosen={c_min}
                onChange={changeMin}
              ></PrettySelect>
            </div>
            <div className={classes["length-choice-1"]}>
              <PrettySelect
                option="Am/PM"
                data={zone}
                noDefault={true}
                chosen={c_tz}
                onChange={changeTZ}
              ></PrettySelect>
            </div>
          </div>
          <div className={classes["message-header"]}>time zone</div>
          <div className={classes["message-time-zone"]}>
            Eastern European Standard Time
          </div>
          <div className={classes["message-scheduled-tweets"]}>
            <div className={classes["message-scheduled-tweets-span"]}>
              scheduled tweets
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
