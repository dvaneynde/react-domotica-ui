import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Brightness1 from '@material-ui/icons/WbSunny';
import Brightness3 from '@material-ui/icons/Brightness3';

// https://stackoverflow.com/questions/53611848/how-do-i-identify-a-material-ui-slider-in-react

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