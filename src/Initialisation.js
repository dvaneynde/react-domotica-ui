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

  const initialStatesStringFull = `
[    {
      "name": "Windmeter",
      "type": "WindSensor",
      "description": "",
      "groupName": "ScreensZ",
      "groupSeq": -2,
      "status": "SAFE",
      "level": 0,
      "min": 0,
      "low": 200,
      "high": 1500,
      "max": 2500
    },
    {
      "name": "LichtZonZuid",
      "type": "LightSensor",
      "description": "",
      "groupName": "ScreensZ",
      "groupSeq": -1,
      "status": "LOW",
      "level": 0,
      "min": 0,
      "low": 3540,
      "high": 3540,
      "max": 4000
    },
    {
      "name": "LichtZonWest",
      "type": "LightSensor",
      "description": "",
      "groupName": "ScreensW",
      "groupSeq": -1,
      "status": "LOW",
      "level": 0,
      "min": 0,
      "low": 3450,
      "high": 3450,
      "max": 4000
    },
    {
      "name": "LichtmeterSchemering",
      "type": "LightSensor",
      "description": "",
      "groupName": "SPECIAAL",
      "groupSeq": 4,
      "status": "LOW",
      "level": 0,
      "min": 0,
      "low": 2000,
      "high": 2000,
      "max": 4000
    },
    {
      "name": "ZonAutoZuid",
      "type": "SunWindController",
      "description": "Zon/Wind Automaat Tuin",
      "groupName": "ScreensZ",
      "groupSeq": 0,
      "status": "",
      "on": false
    },
    {
      "name": "ZonAutoWest",
      "type": "SunWindController",
      "description": "Zon/Wind Automaat Opzij",
      "groupName": "ScreensW",
      "groupSeq": 0,
      "status": "",
      "on": false
    },
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
      "on": false
    },

    
    {
      "name": "VentilatorWC0",
      "type": "Fan",
      "description": "Ventilator WC",
      "groupName": "",
      "groupSeq": 0,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtGarageTuin",
      "type": "Lamp",
      "description": "Garage (Tuin)",
      "groupName": "Nutsruimtes",
      "groupSeq": 3,
      "status": "OFF",
      "on": false,
      "eco": true
    },
    {
      "name": "LichtGaragePoort",
      "type": "Lamp",
      "description": "Garage (Poort)",
      "groupName": "Nutsruimtes",
      "groupSeq": 2,
      "status": "OFF",
      "on": false,
      "eco": true
    },
    {
      "name": "LichtKeuken",
      "type": "Lamp",
      "description": "Keuken",
      "groupName": "Beneden",
      "groupSeq": 0,
      "status": "ON",
      "on": true
    },
    {
      "name": "LichtBadk0",
      "type": "Lamp",
      "description": "Badkamer +0",
      "groupName": "Nutsruimtes",
      "groupSeq": 4,
      "status": "OFF",
      "on": false
    },
    {
      "name": "VentilatorBadk0",
      "type": "Fan",
      "description": "Ventilator Badkamer",
      "groupName": "",
      "groupSeq": 0,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtVeranda",
      "type": "DimmedLamp",
      "description": "Veranda",
      "groupName": "Beneden",
      "groupSeq": 1,
      "status": "OFF",
      "on": false,
      "level": 100
    },
    {
      "name": "LichtCircanteRondom",
      "type": "DimmedLamp",
      "description": "Eetkamer",
      "groupName": "Beneden",
      "groupSeq": 2,
      "status": "OFF",
      "on": false,
      "level": 100
    },
    {
      "name": "LichtCircante",
      "type": "Lamp",
      "description": "Circante Tafel",
      "groupName": "Beneden",
      "groupSeq": 3,
      "status": "OFF",
      "on": false
    }
  ]
`;
const initialStatesStringFullOrg = `
[    {
      "name": "Windmeter",
      "type": "WindSensor",
      "description": "",
      "groupName": "ScreensZ",
      "groupSeq": -2,
      "status": "SAFE",
      "level": 0,
      "min": 0,
      "low": 200,
      "high": 1500,
      "max": 2500
    },
    {
      "name": "LichtZonZuid",
      "type": "LightSensor",
      "description": "",
      "groupName": "ScreensZ",
      "groupSeq": -1,
      "status": "LOW",
      "level": 0,
      "min": 0,
      "low": 3540,
      "high": 3540,
      "max": 4000
    },
    {
      "name": "LichtZonWest",
      "type": "LightSensor",
      "description": "",
      "groupName": "ScreensW",
      "groupSeq": -1,
      "status": "LOW",
      "level": 0,
      "min": 0,
      "low": 3450,
      "high": 3450,
      "max": 4000
    },
    {
      "name": "LichtmeterSchemering",
      "type": "LightSensor",
      "description": "",
      "groupName": "SPECIAAL",
      "groupSeq": 4,
      "status": "LOW",
      "level": 0,
      "min": 0,
      "low": 2000,
      "high": 2000,
      "max": 4000
    },
    {
      "name": "ZonAutoZuid",
      "type": "SunWindController",
      "description": "Zon/Wind Automaat Tuin",
      "groupName": "ScreensZ",
      "groupSeq": 0,
      "status": "",
      "on": false
    },
    {
      "name": "ZonAutoWest",
      "type": "SunWindController",
      "description": "Zon/Wind Automaat Opzij",
      "groupName": "ScreensW",
      "groupSeq": 0,
      "status": "",
      "on": false
    },
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
      "on": false
    },
    {
      "name": "VentilatorWC0",
      "type": "Fan",
      "description": "Ventilator WC",
      "groupName": "",
      "groupSeq": 0,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtGarageTuin",
      "type": "Lamp",
      "description": "Garage (Tuin)",
      "groupName": "Nutsruimtes",
      "groupSeq": 3,
      "status": "OFF",
      "on": false,
      "eco": true
    },
    {
      "name": "LichtGaragePoort",
      "type": "Lamp",
      "description": "Garage (Poort)",
      "groupName": "Nutsruimtes",
      "groupSeq": 2,
      "status": "OFF",
      "on": false,
      "eco": true
    },
    {
      "name": "LichtKeuken",
      "type": "Lamp",
      "description": "Keuken",
      "groupName": "Beneden",
      "groupSeq": 0,
      "status": "ON",
      "on": true
    },
    {
      "name": "LichtBadk0",
      "type": "Lamp",
      "description": "Badkamer +0",
      "groupName": "Nutsruimtes",
      "groupSeq": 4,
      "status": "OFF",
      "on": false
    },
    {
      "name": "VentilatorBadk0",
      "type": "Fan",
      "description": "Ventilator Badkamer",
      "groupName": "",
      "groupSeq": 0,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtVeranda",
      "type": "DimmedLamp",
      "description": "Veranda",
      "groupName": "Beneden",
      "groupSeq": 1,
      "status": "OFF",
      "on": false,
      "level": 100
    },
    {
      "name": "LichtCircanteRondom",
      "type": "DimmedLamp",
      "description": "Eetkamer",
      "groupName": "Beneden",
      "groupSeq": 2,
      "status": "OFF",
      "on": false,
      "level": 100
    },
    {
      "name": "LichtCircante",
      "type": "Lamp",
      "description": "Circante Tafel",
      "groupName": "Beneden",
      "groupSeq": 3,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtZithoek",
      "type": "DimmedLamp",
      "description": "Zithoek",
      "groupName": "Beneden",
      "groupSeq": 4,
      "status": "ON",
      "on": true,
      "level": 49
    },
    {
      "name": "LichtBureau",
      "type": "Lamp",
      "description": "Bureau",
      "groupName": "Beneden",
      "groupSeq": 5,
      "status": "ON",
      "on": true
    },
    {
      "name": "LichtGangBoven",
      "type": "Lamp",
      "description": "Gang Boven",
      "groupName": "Kinderen",
      "groupSeq": 0,
      "status": "ON",
      "on": true,
      "eco": true
    },
    {
      "name": "LichtBadk1",
      "type": "Lamp",
      "description": "Badkamer +1",
      "groupName": "Kinderen",
      "groupSeq": 1,
      "status": "ON",
      "on": true
    },
    {
      "name": "LichtSlaapZuidwestWand",
      "type": "Lamp",
      "description": "Tomas Wand",
      "groupName": "Kinderen",
      "groupSeq": 2,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtSlaapZuidwestSpots",
      "type": "Lamp",
      "description": "Tomas Spots",
      "groupName": "Kinderen",
      "groupSeq": 3,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtSlaapZuidWand",
      "type": "Lamp",
      "description": "Dries Wand",
      "groupName": "Kinderen",
      "groupSeq": 4,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtSlaapZuidSpots",
      "type": "Lamp",
      "description": "Dries Spots",
      "groupName": "Kinderen",
      "groupSeq": 5,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtSlaapNoordWand",
      "type": "Lamp",
      "description": "Roos Wand",
      "groupName": "Kinderen",
      "groupSeq": 6,
      "status": "OFF",
      "on": false
    },
    {
      "name": "LichtSlaapNoordSpots",
      "type": "Lamp",
      "description": "Roos Spots",
      "groupName": "Kinderen",
      "groupSeq": 7,
      "status": "OFF",
      "on": false
    },
    {
      "name": "ScreenZuid",
      "type": "Screen",
      "description": "Dries",
      "groupName": "ScreensZ",
      "groupSeq": 4,
      "status": "0% OPEN"
    },
    {
      "name": "ScreenZuidwestTuin",
      "type": "Screen",
      "description": "Tomas (Tuin)",
      "groupName": "ScreensZ",
      "groupSeq": 5,
      "status": "0% OPEN"
    },
    {
      "name": "ScreenZuidwestOpzij",
      "type": "Screen",
      "description": "Tomas (Zijkant)",
      "groupName": "ScreensW",
      "groupSeq": 1,
      "status": "0% OPEN"
    },
    {
      "name": "ScreenSlaapNoord",
      "type": "Screen",
      "description": "Roos",
      "groupName": "ScreensW",
      "groupSeq": 2,
      "status": "0% OPEN"
    },
    {
      "name": "ScreenBreed",
      "type": "Screen",
      "description": "Breed",
      "groupName": "ScreensZ",
      "groupSeq": 2,
      "status": "0% OPEN"
    },
    {
      "name": "ScreenLang",
      "type": "Screen",
      "description": "Smal",
      "groupName": "ScreensZ",
      "groupSeq": 3,
      "status": "0% OPEN"
    },
    {
      "name": "ScreenKeuken",
      "type": "Screen",
      "description": "Keuken",
      "groupName": "ScreensZ",
      "groupSeq": 6,
      "status": "0% OPEN"
    },
    {
      "name": "StopkBuiten",
      "type": "Lamp",
      "description": "Stopcontact buiten",
      "groupName": "Buiten",
      "groupSeq": 1,
      "status": "ON",
      "on": true
    },
    {
      "name": "LichtTerras",
      "type": "Lamp",
      "description": "Licht terras en zijkant",
      "groupName": "Buiten",
      "groupSeq": 0,
      "status": "ON",
      "on": true
    },
    {
      "name": "LichtNacht",
      "type": "Lamp",
      "description": "Nachtlichten",
      "groupName": "",
      "groupSeq": 0,
      "status": "ON",
      "on": true
    }
  ]
`;

export const initialStates = JSON.parse(initialStatesString);
export const initialStatesFull = JSON.parse(initialStatesStringFull);
