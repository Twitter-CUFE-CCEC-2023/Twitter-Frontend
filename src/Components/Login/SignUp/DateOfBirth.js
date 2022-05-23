import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 60,
    },
}));

let years = [];
for(let year = 2022; year >= 1902; year--)
{
    years.push((<option value= { year} > { year } </option>));
}
const GroupedSelect = (props) => {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Month</InputLabel>
                <Select onChange={props.MonthBack} native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Day</InputLabel>
                <Select onChange={props.DayBack} native defaultValue="" id="grouped-native-select" >
                    <option aria-label="None" value="" />
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Year</InputLabel>
                <Select onChange={props.YearBack} native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    { years }
                    </Select>
            </FormControl>
        </div>
    );
}

export default GroupedSelect;
