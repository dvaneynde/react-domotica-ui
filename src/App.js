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


function App() {

  const [value, setValue] = React.useState(30);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <div>
        <FormGroup row={false}>
          <FormControlLabel
            control={<Switch checked={state.checkedA} onChange={handleChangeSwitch} name="checkedA" />}
            label="Primary"
          />
          <FormControlLabel
            control={<Switch disabled={false} checked={state.checkedB} onChange={handleChangeSwitch} name="checkedB" />}
            label="Secondary"
          />
        </FormGroup>
      </div>
      <div>
        <Typography id="continuous-slider" gutterBottom>
          Volume
      </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Brightness3 />
          </Grid>
          <Grid item xs>
            <Slider disabled={!state.checkedB} value={value} onChange={handleChangeSlider} aria-labelledby="continuous-slider"/>
          </Grid>
          <Grid item>
            <Brightness1 />
          </Grid>
        </Grid>
        <Typography id="disabled-slider" gutterBottom>
          Disabled slider
      </Typography>
        <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
      </div>
    </React.Fragment>
  );
}

export default App;
