import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomDimmedLamp from './DomDimmedLamp';
import DomSliderLight from './DomSlider.jsx';
import { initialStates } from './Initialisation.js';

function App() {
  // State
  const [controls, setControls] = React.useState(initialStates);


  // Event Handlers
  const handleToggleSwitch = (event) => {
    const newStates = controls.map(c => ((c.name === event.target.name) ? { ...c, on: event.target.checked } : c));
    setControls(newStates);
  };

  const handleOnLevel = name => (event, newValue) => {
    debugger
    const newStates = controls.map(c => ((c.name === name) ? { ...c, level: newValue } : c));
    setControls(newStates);
  }


  // View
  function viewControl(control) {
    switch (control.type) {
      case "Lamp":
      case "Fan":
        return <DomSwitch name={control.name} checked={control.on} onChange={handleToggleSwitch} label={control.description} />;

      case "DimmedLamp":
        return <DomDimmedLamp name={control.name} on={control.on} level={control.level} onSwitch={handleToggleSwitch} onLevel={handleOnLevel(control.name)} label={control.description} />;

      default:
        return <div>{control.type} is not implemented yet</div>
    }
  }

  function viewControls() {
    //debugger
    return controls.map(control => viewControl(control));
  }

  return (
    <div>
      {viewControls()}
    </div>
  );
}

export default App;
