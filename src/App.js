import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomSliderLight from './DomSlider.jsx';

function App() {

  const [value, setValue] = React.useState(30);

  const initialStates = () => {
    var is = [];
    for (var i = 0; i < 10; i++) {
      is[i] = { name: "checked" + i, state: (i % 2 == 0) }
    }
    return is;
  };

  const [states, setStates] = React.useState(initialStates());

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggleSwitch = (event) => {
    debugger
    const newStates = states.map(s => ((s.name==event.target.name) ? {...s, state : event.target.checked} :s));
    setStates(newStates);
  };

  function createList() {
    console.log(initialStates())
    return states.map(s => (<DomSwitch name={s.name} label={s.name} on={s.state} onChange={handleToggleSwitch} />));
  }

  return (
    <div>
      {createList()}
      <DomSliderLight name="TODO" label="Zithoek" disabled={!states[9].state} value={value} onChange={handleChangeSlider} />
    </div>
  );
}

export default App;
