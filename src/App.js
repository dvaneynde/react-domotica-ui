import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import DomSwitch from './DomSwitch.jsx';
import DomSliderLight from './DomSlider.jsx';

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
          <DomSwitch name="checkedA" label="A" on={state.checkedA} onChange={handleChangeSwitch} />
          <DomSwitch name="checkedB" label="B" on={state.checkedB} onChange={handleChangeSwitch} />
        </FormGroup>
        <DomSliderLight name="TODO" label="Zithoek" disabled={!state.checkedB} value={value} onChange={handleChangeSlider} />
      </div>
    </React.Fragment>
  );
}

export default App;
