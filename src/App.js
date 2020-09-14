import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomDimmedLamp from './DomDimmedLamp';
import { initialStates } from './Initialisation.js';
import { makeStyles } from '@material-ui/core/styles';

import { Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
}));

function App() {
  const classes = useStyles();

  // State
  const [controls, setControls] = React.useState(initialStates);
  const [groups] = React.useState(() => createGroups(controls));

  // Temp
  const [open, setOpen] = React.useState(true);
  const handleCollapse = () => {
    setOpen(!open);
  };

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
    return <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      {groups.map(group =>
        <>
          <ListItem button disableGutters onClick={handleCollapse}>
            <ListItemText primary={group.groupName} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {group.controlNames.map(cn => <span disableGutters className={classes.nested}>{viewControl(controlByName(cn))}</span>)}
            </List>
          </Collapse>
        </>
      )}
    </List>
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
