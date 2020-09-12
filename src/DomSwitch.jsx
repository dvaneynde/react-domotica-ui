import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function DomSwitch(props) {

    return (
        <div>
            <FormControlLabel
                control={<Switch checked={props.checked} onChange={e => props.onChange(e)} name={props.name} />}
                label={props.label}
            />
        </div>
    );
}

export default DomSwitch;