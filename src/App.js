import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomDimmedLamp from './DomDimmedLamp';
import { initialStates, initialStatesFull } from './Initialisation.js';
import { useStyles } from './Initialisation';

import { Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


function App() {

  const classes = useStyles();


  // State
  
  const [controls, setControls] = React.useState([]);
  const [groups, setGroups] = React.useState(() => createGroups(controls));

  React.useEffect(() => {
    async function fetchStatusesAndSetControl() {
      const statuses = await fetchControls();
      setControls(statuses);
    }
    fetchStatusesAndSetControl();
  }, []);

  React.useEffect(() => {
    setGroups(createGroups(controls));
  }, [controls]);



  // Event Handlers

  const handleToggleSwitch = (event) => {
    const newStates = controls.map(c => ((c.name === event.target.name) ? { ...c, on: event.target.checked } : c));
    // TODO function to set state
    setControls(newStates);
  }

  const handleOnLevel = name => (event, newValue) => {
    const newStates = controls.map(c => ((c.name === name) ? { ...c, level: newValue } : c));
    // TODO function to set state
    setControls(newStates);
  }

  const handleCollapse = groupName => () => {
    const newGroups = groups.map(c => ((c.groupName === groupName) ? { ...c, display: !c.display } : c));
    // TODO function to set state
    setGroups(newGroups);
  }



  // View

  function viewControlsAsTextForDebug() {
    const txtControls = JSON.stringify(controls, null, 2);
    const txtGroups = JSON.stringify(groups, null, 2);
    return <div><h2>Controls</h2><p>{txtControls}</p><h2>Groups</h2><p>{txtGroups}</p></div>;
  }

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
    return <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      {groups.map(group =>
        <>
          <ListItem button onClick={handleCollapse(group.groupName)}>
            <ListItemIcon><FormatListBulleted /></ListItemIcon>
            <ListItemText primary={group.groupName} />
            {group.display ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={group.display} timeout="auto" unmountOnExit>
            <List component="div" >
              {group.controlNames.map(cn => <span>{viewControl(controlByName(cn))}</span>)}
            </List>
          </Collapse>
        </>
      )}
    </List>
  }

  return (
    <div>
      <h2>dlvm home automation</h2>
      {/* viewControlsAsTextForDebug() */}
      {viewControls()}
      <h4>That's it!</h4>
      <hr />
    </div>
  );



  // other

  async function fetchControls() {
    const response =
      await fetch("http://192.168.0.10:8080/rest/statuses",
        { headers: { 'Content-Type': 'application/json' } }
      );

    const result = await response.json()
    // console.log("Result: " + JSON.stringify(result, null, 2));
    return result;
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
  function createGroups(controls) {

    function groupComparer(a, b) {
      var compGc = 0;
      compGc = a.groupName.localeCompare(b.groupName);
      if (compGc == 0) {
        var aSeq = a.groupSeq;
        var bSeq = b.groupSeq;
        if (aSeq < bSeq) compGc = -1; else if (aSeq > bSeq) compGc = +1;
      }
      return compGc;
    }

    // l1 is controls projection + sorted by group-name, and then by group-seq
    const l0 = controls.map(c => { var obj = { groupName: c.groupName, groupSeq: c.groupSeq, name: c.name }; return obj; });
    const l1 = l0.sort(groupComparer);
    // now group them; first l2 contains [previousGroupname, {group.name, ...}]
    var groupNames = l1.map(c => c.groupName);
    groupNames.unshift("DummyToForceNewGroupAtFirstIteration");
    var l2 = groupNames.map(function (prevGroupName, i) { return [prevGroupName, l1[i]]; });
    l2.pop(); // last one has item[1]==undefined, so ok
    // now whenever item[0].previousGroupname != item[1].groupName, a new group starts
    const l3 = l2.reduce((acc, item) => {
      if (item[0] !== item[1].groupName) {
        const newGroup = { groupName: item[1].groupName, display: true, controlNames: [] };
        acc.push(newGroup);
      }
      const last = acc[acc.length - 1];
      console.log("last=" + last + ", item[1]=" + item[1]);
      last.controlNames.push(item[1].name);
      return acc;
    }, []);
    return l3;
  }
}


export default App;
