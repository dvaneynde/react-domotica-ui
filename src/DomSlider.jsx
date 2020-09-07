import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Brightness1 from '@material-ui/icons/WbSunny';
import Brightness3 from '@material-ui/icons/Brightness3';

function DomSliderLight(props) {

    return (
        <div>
            <Typography id="continuous-slider" gutterBottom>
                {props.label}
        </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Brightness3 />
                </Grid>
                <Grid item xs>
                    <Slider disabled={props.disabled} value={props.value} onChange={props.onChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <Brightness1 />
                </Grid>
            </Grid>
        </div>
    );
}

export default DomSliderLight;