export default{
    sports: [
        {
            label: 'Soccor',
            id: 'soccor'
        },
        {
            label: 'Field Hockey',
            id: 'field_hockey'
        }
    ],
    sports_settings: [
        {
            label: "Soccor",
            id: "soccor",
            settings: [
                {
                    label: 'Primary Position',
                    id: 'primary-position',
                    type: 'select',
                    value: '',
                    options: [
                        {
                            label: 'Attacking Midfielder',
                            id: 'attacking-midfielder'
                        },
                        {
                            label: 'Center Back',
                            id: 'center-back'
                        },
                        {
                            label: 'Defensive Midfielder',
                            id: 'defensive-midfielder'
                        },
                        {
                            label: 'Forward',
                            id: 'forward'
                        },
                        {
                            label: 'Goalkeeper',
                            id: 'goalkeeper'
                        },
                        {
                            label: 'Outside Back',
                            id: 'outside-back'
                        },
                        {
                            label: 'Outside Midfielder',
                            id: 'outside-midfielder'
                        }
                    ]
                },{
                    label: 'Dominant Foot',
                    id: 'dominant-foot',
                    value: '',
                    type: 'select',
                    options: [
                        {
                            label: 'Right',
                            id: 'right'
                        },
                        {
                            label: 'Left',
                            id: 'left'
                        },
                        {
                            label: 'Switch',
                            id: 'switch'
                        }
                    ]
                },
                {
                    label: 'Mile Time',
                    id: 'mile_time',
                    type: 'text',
                    valueL: '',
                    placeholder: 'e.g., 5 minutes 10 seconds'
                },
                {
                    label: '2 Mile Time',
                    id: '2_mile_time',
                    value: '',
                    type: 'text',
                    placeholder: 'e.g., 11 minutes 33 seconds'
                },
                {
                    label: 'Weight in kg',
                    id: 'weight',
                    value: '',
                    placeholder: '',
                    type: 'number'
                },{
                    label: 'Height in cm',
                    id: 'height',
                    value: '',
                    placeholder: '',
                    type: 'number'
                }
            ]
        },
        {
            label: 'Field Hockey',
            id: 'field_hockey',
            settings: [
                {
                    label: 'Primary Position',
                    id: 'primary_position',
                    type: 'select',
                    value: '',
                    options: [
                        {
                            label: 'Defender',
                            id: 'defender'
                        },
                        {
                            label: 'Forwarder',
                            id: 'forwarder'
                        },
                        {
                            label: 'Goalkeeper',
                            id: 'goalkeeper'
                        },
                        {
                            label: 'Midfielder',
                            id: 'midfielder'
                        }
                    ]
                },
                {
                    label: 'Mile Time',
                    id: 'mile_time',
                    type: 'text',
                    placeholder: 'e.g., 5 minutes 10 seconds'
                },
                {
                    label: '2 Mile Time',
                    id: '2_mile_time',
                    value: '',
                    type: 'text',
                    placeholder: 'e.g., 11 minutes 33 seconds'
                },
                {
                    label: '40 Yard Dash',
                    id: '40_yard_dash',
                    value: '',
                    type: 'text',
                    placeholder: 'e.g., 4.9'
                },
                {
                    label: '40 Yard Dash Timing Method',
                    id: '40_yard_dash_timing_method',
                    value: '',
                    type: 'select',
                    options: [
                        {
                            label: 'Hand',
                            id: 'hand'
                        },
                        {
                            label: 'Laser',
                            id: 'laser'
                        },
                        {
                            label: 'FAT',
                            id: 'fat'
                        },
                        {
                            label: 'Digital',
                            id: 'digital'
                        }
                    ]
                },
                {
                    label: 'Dominant Hand',
                    id: 'dominant_hand',
                    value: '',
                    type: 'select',
                    options: [
                        {
                            label: 'Left',
                            id: 'left'
                        },
                        {
                            label: 'Right',
                            id: 'right'
                        },
                        {
                            label: 'Switch',
                            id: 'switch'
                        }
                    ]
                },                
                {
                    label: 'Weight in kg',
                    id: 'weight',
                    value: '',
                    placeholder: '',
                    type: 'number'
                },
                {
                    label: 'Height in cm',
                    id: 'height',
                    value: '',
                    placeholder: '',
                    type: 'number'
                },
            ]
        }
    ]
}