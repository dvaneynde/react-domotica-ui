import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomSliderLight from './DomSlider.jsx';
import {initialStates } from './Initialisation.js';

function App() {

  const [value, setValue] = React.useState(30);

  const [states, setStates] = React.useState(initialStates);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggleSwitch = (event) => {
    //debugger
    const newStates = states.map(s => ((s.name === event.target.name) ? {...s, on : event.target.checked} :s));
    setStates(newStates);
  };

  function viewControl(control) {
    switch (control.type) {
      case "Lamp":
        debugger
        return <DomSwitch name={control.name} checked={control.on} onChange={handleToggleSwitch} label={control.description}/>;
      default:
        return <div>{control.type} is not implemented yet</div>
    }
  }

  function viewControls() {
    //debugger
    return states.map(s => viewControl(s));
  }

  //  <DomSliderLight name="TODO" label="Zithoek" disabled={!states[9].state} value={value} onChange={handleChangeSlider} />

  return (
    <div>
      {viewControls()}
    </div>
  );
}

export default App;
