import React from 'react';
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


export default function GroupedSelect() {
    const classes = useStyles();
    const Monthchanged = (value) => {
        console.log(value.target.value);
    }
    const Daychanged = (value) => {
        console.log(value.target.value);
    }
    const Yearchanged = (value) => {
        console.log(value.target.value);
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Month</InputLabel>
                <Select onChange={Monthchanged} native defaultValue="03" id="grouped-native-select">
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
                <Select onChange={Daychanged} native defaultValue="" id="grouped-native-select">
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
                <Select onChange={Yearchanged} native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <option value="01">1980</option>
                    <option value="02">1981</option>
                    <option value="03">1982</option>
                    <option value="04">1983</option>
                    <option value="05">1984</option>
                    <option value="06">1985</option>
                    <option value="07">1986</option>
                    <option value="08">1987</option>
                    <option value="09">1988</option>
                    <option value="10">1989</option>
                    <option value="11">1990</option>
                    <option value="12">1991</option>
                    <option value="13">1992</option>
                    <option value="14">1993</option>
                    <option value="15">1994</option>
                    <option value="16">1995</option>
                    <option value="17">1996</option>
                    <option value="18">1997</option>
                    <option value="19">1998</option>
                    <option value="20">1999</option>
                    <option value="21">2000</option>
                    <option value="22">2001</option>
                    <option value="23">2002</option>
                    <option value="24">2003</option>
                    <option value="25">2004</option>
                    <option value="26">2005</option>
                    <option value="27">2006</option>
                    <option value="28">2007</option>
                    <option value="29">2008</option>
                    <option value="30">2009</option>
                    <option value="31">2010</option>
                    <option value="32">2011</option>
                </Select>
            </FormControl>
        </div>
    );
}