import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';
import {useStyles} from './Initialisation';

function DomSwitch(props) {
    const classes = useStyles();

    return (
        <ListItem className={classes.nested}>
            <FormControlLabel
                control={<Switch checked={props.checked} onChange={e => props.onChange(e)} name={props.name} />}
                label={props.label}
            />
        </ListItem>
    );
}

export default DomSwitch;