import React from 'react';

import DomSwitch from './DomSwitch.jsx';
import DomDimmedLamp from './DomDimmedLamp';
// import { initialStates, initialStatesFull } from './Initialisation.js';
import { useStyles } from './Initialisation';

import { Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/*
TODO in GET komen ook LichtNacht en 2 Ventilators mee, in WebSocket niet? Dat geeft problemen blijkbaar in websocket, maar begrijp niet waarom.
Waarschijnlijk:
1. Controls worden via GET geladen, inclusief LichtNacht en Ventilator. Groups worden daarop gebouwed.
2. Websocket laadt nieuwe statusen, maar zonder LichtNacht en Ventilator. View wordt gerenderd, maar Groups zijn nog niet aangepast!
3. Groups wordt dan uitgevoerd.
4. Weer Websocket, maar nu geen problemen meer want Groups is nu zonder LichtNacht en Ventilator
Oplossingen:
- Groups berekenen samen met GET of WebSocket update (maar dat werkte niet, Promise gedoe waarschijnlijk?). Is ook niet goed voor volgende probleem, Groups moet maar 1 keer bepaald.
- Server side aanpassen.
- Uitfilteren.
Noot: VentilatorWC en LichtNacht hebben geen groupName !!! (lege string)

TODO groepen moeten behouden blijven na 1e fetch, of toch de open/closed status.
Oplossingen:
- Groups enkel bij GET bepalen, en dan niet meer?
*/

/*
Alternatief:
- groups en controls zijn null initieel; er wordt niets getoond op pagina
- websocket wordt opgestart, controls wordt ingevuld; nog geen groups dus niks tonen
- groups zijn gemaakt, nu wel tonen
Noot: groups mag niet afhankelijk zijn van controls! Of toch niet de status open/dicht (want als controls geladen worden groups geregenereerd vrees ik).
*/


function App() {

  const urlHost = "192.168.0.10";
  const classes = useStyles();

  // State

  const webSocket = React.useRef(null);
  const [controls, setControls] = React.useState([]);
  const [groups, setGroups] = React.useState(() => createGroups(controls));

  React.useEffect(() => {
    async function fetchStatusesAndSetControl() {
      const statuses = await fetchControls();
      setControls(statuses);
    }
    fetchStatusesAndSetControl();
  }, []);

  // creates groups if groups changed
  React.useEffect(() => {
    setGroups(createGroups(controls));
  }, [controls]);

  React.useEffect(() => {
    webSocket.current = new WebSocket("ws://" + urlHost + "/status/");
    webSocket.current.onmessage = (message) => {
      //console.log("websocket data type=" + typeof message.data + "\nwebsocket data message=" + message.data);
      const newControls = JSON.parse(message.data);
      //console.log("websocket newControls type=" + typeof newControls + "\nwebsocket newControls message=" + JSON.stringify(newControls));
      setControls(newControls);
    };
    return () => webSocket.current.close();
  }, []);

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
    setGroups(newGroups);
  }



  // View

  function viewControlsAndGroupsAsTextForDebug() {
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

  function viewControlSpan(name, index) {
    let control = controlByName(name);
    if (control === undefined) {
      console.log("Problem: control with name " + name + " not found.")
      return <span key={index}><p>Problem control not found.</p></span>
    } else {
      let controlName = control.name;
      if (controlName === undefined) {
        console.log("Problem: control with name " + name + " is found, but its name is " + control.name);
        return <span key={index}><p>Problem control.name not found.</p></span>
      } else
        return <span key={control.name}>{viewControl(control)}</span>
    }
  }


  function viewControls(group) {
    return <List component="div" >
      {group.controlNames.map((cn, index) => viewControlSpan(cn, index))}
    </List>
  }

  function viewControlsInGroups() {
    //debugger
    return <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      {groups.map(group =>
        <span key={group.groupName}>
          <ListItem button onClick={handleCollapse(group.groupName)}>
            <ListItemIcon><FormatListBulleted /></ListItemIcon>
            <ListItemText primary={group.groupName} />
            {group.display ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={group.display} timeout="auto" unmountOnExit>
            {viewControls(group)}
            {/*
              <List component="div" >
                {group.controlNames.map(cn => <span key={controlByName(cn).name}>{viewControl(controlByName(cn))}</span>)}
              </List>
            */}
          </Collapse>
        </span>
      )}
    </List>
  }

  return (
    <div>
      <h2>dlvm home automation</h2>
      {/*viewControlsAndGroupsAsTextForDebug()*/}
      {viewControlsInGroups()}
      <h4>That's it!</h4>
      <hr />
    </div>
  );



  // other

  async function fetchControls() {
    const response =
      await fetch("http://" + urlHost + "/rest/statuses",
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
      let compGc = 0;
      compGc = a.groupName.localeCompare(b.groupName);
      if (compGc === 0) {
        let aSeq = a.groupSeq;
        let bSeq = b.groupSeq;
        if (aSeq < bSeq) compGc = -1; else if (aSeq > bSeq) compGc = +1;
      }
      return compGc;
    }

    // l1 is controls projection + sorted by group-name, and then by group-seq
    const l0 = controls.map(c => { let obj = { groupName: c.groupName, groupSeq: c.groupSeq, name: c.name }; return obj; });
    const l1 = l0.sort(groupComparer);
    // now group them; first l2 contains [previousGroupname, {group.name, ...}]
    let groupNames = l1.map(c => c.groupName);
    groupNames.unshift("DummyToForceNewGroupAtFirstIteration");
    let l2 = groupNames.map(function (prevGroupName, i) { return [prevGroupName, l1[i]]; });
    l2.pop(); // last one has item[1]==undefined, so ok
    // now whenever item[0].previousGroupname != item[1].groupName, a new group starts
    const l3 = l2.reduce((acc, item) => {
      if (item[0] !== item[1].groupName) {
        const newGroup = { groupName: item[1].groupName, display: true, controlNames: [] };
        acc.push(newGroup);
      }
      const last = acc[acc.length - 1];
      last.controlNames.push(item[1].name);
      return acc;
    }, []);
    return l3;
  }
}


export default App;
