import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';

function DomSwitch(props) {

    return (
        <ListItem>
            <FormControlLabel
                control={<Switch checked={props.checked} onChange={e => props.onChange(e)} name={props.name} />}
                label={props.label}
            />
        </ListItem>
    );
}

export default DomSwitch;