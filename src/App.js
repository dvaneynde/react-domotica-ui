import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomDimmedLamp from './DomDimmedLamp';
import DomSliderLight from './DomSlider.jsx';
import { initialStates } from './Initialisation.js';

function App() {
  // State
  const [controls, setControls] = React.useState(initialStates);
  const [groups, setGroups] = React.useState(() => createGroups(controls));


  // Event Handlers
  const handleToggleSwitch = (event) => {
    const newStates = controls.map(c => ((c.name === event.target.name) ? { ...c, on: event.target.checked } : c));
    setControls(newStates);
  };

  const handleOnLevel = name => (event, newValue) => {
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

  const controlByName = (name) => controls.filter(c => c.name === name)[0];

  function viewControls() {
    //debugger
    return groups.map(group =>
      <div>{group.groupName}
        <div>{
          group.controlNames.map(cn => <span>{viewControl(controlByName(cn))}</span>)
        }</div>
      </div>
    );
  }

  return (
    <div>
      {viewControls()}
    </div>
  );
}


// Groups
/*
[
  {
    groupName: "NutsRuimtes",
    display: true,
    controlNames: ["VentilatorWC", ...]
  }
]
*/
function groupComparer(a, b) {
  var compGc = 0;
  if (a < b) compGc = -1; else if (a > b) compGc = 1;
  return a.groupName.localeCompare(b.groupName) * 10 + compGc;
}

function createGroups(controls) {
  function groupComparer(a, b) {
    var compGc = 0;
    if (a < b) compGc = -1; else if (a > b) compGc = 1;
    return a.groupName.localeCompare(b.groupName) * 10 + compGc;
  }

  const l0 = controls.map(c => { var obj = { groupName: c.groupName, groupSeq: c.groupSeq, name: c.name }; return obj; });
  const l1 = l0.sort(groupComparer);
  // l1 is sorted by group-name, and then by group-seq; so now group them
  var groupNames = l1.map(c => c.groupName);
  groupNames.unshift("");
  var l2 = groupNames.map(function (prevGroupName, i) { return [prevGroupName, l1[i]]; });
  l2.pop();
  // now whenever prevGroupName != groupName, a new group starts
  const l3 = l2.reduce((acc, item) => {
    if (item[0] != item[1].groupName) {
      const newGroup = { groupName: item[1].groupName, display: true, controlNames: [] };
      acc.push(newGroup);
    }
    const last = acc[acc.length - 1];
    last.controlNames.push(item[1].name);
    return acc;
  }, []);
  return l3;
}

export default App;
