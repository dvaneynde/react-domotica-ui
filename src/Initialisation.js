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
        "name": "VentilatorWC0",
        "type": "Fan",
        "description": "Ventilator WC",
        "groupName": "",
        "groupSeq": 0,
        "status": "OFF",
        "on": false
    }
]`;

export const initialStates = JSON.parse(initialStatesString);
