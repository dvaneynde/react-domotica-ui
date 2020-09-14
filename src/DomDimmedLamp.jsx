import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Brightness1 from '@material-ui/icons/WbSunny';
import Brightness3 from '@material-ui/icons/Brightness3';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// https://stackoverflow.com/questions/53611848/how-do-i-identify-a-material-ui-slider-in-react

function DomDimmedLamp(props) {

    return (<>
        <ListItem>
            <FormControlLabel
                control={<Switch checked={props.on} onChange={e => props.onSwitch(e)} name={props.name} />}
                label={props.label}
            />
        </ListItem>
        <ListItem>
            <Grid container spacing={2}>
                <Grid item>
                    <Brightness3 />
                </Grid>
                <Grid item xs>
                    <Slider name={props.name} disabled={!props.on} value={props.level} onChange={props.onLevel} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <Brightness1 />
                </Grid>
            </Grid>
        </ListItem>
    </>
    );

}

export default DomDimmedLamp;