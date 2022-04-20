import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 450,
    },
}));

export default function GroupedSelect() {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Country Code</InputLabel>
                <Select native defaultValue="" id="grouped-native-select">
                    <option aria-label="None" value="" />
                    <option value="01">+20 Egypt</option>
                    <option value="02">+966 KSA</option>
                    <option value="03">+971 UAE</option>
                    <option value="04">+44 UK</option>
                    <option value="05">+1 USA</option>
                    <option value="06">+963 Syria</option>
                    <option value="07">+31 Netherlands</option>
                    <option value="08">+212 Morocco</option>
                    <option value="09">+33 France</option>
                    <option value="10">+49 Germany</option>
                    <option value="11">+86 China</option>
                    <option value="12">+1 Canada</option>
                </Select>
            </FormControl>
        </div>
    );
}