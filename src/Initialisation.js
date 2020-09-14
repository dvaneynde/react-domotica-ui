import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
  }));
  
const initialStatesString = `
[
     {
        "name": "LichtInkom",
        "type": "Lamp",
        "description": "Inkom",
        "groupName": "Nutsruimtes",
        "groupSeq": 0,
        "status": "OFF",
        "on": false,
        "eco": true
    },
    {
        "name": "LichtWC0",
        "type": "Lamp",
        "description": "WC",
        "groupName": "Nutsruimtes",
        "groupSeq": 6,
        "status": "OFF",
        "on": true
    },
    {
        "name": "LichtZithoek",
        "type": "DimmedLamp",
        "description": "Zithoek",
        "groupName": "Beneden",
        "groupSeq": 4,
        "status": "ON",
        "on": true,
        "level": 75
    },
    {
        "name": "VentilatorWC0",
        "type": "Fan",
        "description": "Ventilator WC",
        "groupName": "Nutsruimtes",
        "groupSeq": 0,
        "status": "OFF",
        "on": false
    }
]`;

export const initialStates = JSON.parse(initialStatesString);
