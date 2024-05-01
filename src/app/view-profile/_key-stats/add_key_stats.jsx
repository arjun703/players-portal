import { Paper, Grid,FormControl,Tooltip,InputLabel, TextField , Select, MenuItem,  IconButton, Collapse,  Divider, Menu } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import sportsSettings from './settings'

const steps = ['Select an Sport', 'Fillup Details', 'Preview and Save'];


import DisplayFieldsBasedOnSport from './display_fields_based_on_sports'

export default function HorizontalLinearStepper() {

  const [selectedSport, setSelectedSport] = React.useState('')

  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (step) => {
    return false;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>  Math.min(prevActiveStep + 1, 2));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [dataToBeExported, setDataToBeExported] = React.useState({
    sport: selectedSport
  })

  const handleSportSpecificDataChange = (data) => {
    setDataToBeExported({sport: selectedSport, info: data})
  }

  const sports = sportsSettings.sports

  return (
    <Box sx={{ width: '100%'}} >
      <div style={{paddingTop: '10px'}}>
        <FormControl fullWidth style={{paddingBottom: '15px'}}>
          <InputLabel id="demo-simple-select-label">Select an Sport</InputLabel>
          <Select
              id="demo-simple-select"
              labelId="demo-simple-select-label"
              label="Select an Sport"
              value={selectedSport}
              onChange={(e)=> { setSelectedSport(e.target.value) }}
          >   
              {sports.map(({label, id},i) => (<MenuItem key={i} value={id}  >{label}</MenuItem>))}
          </Select>
        </FormControl>
        {
          selectedSport !== '' && 
          (
            <>
              <DisplayFieldsBasedOnSport handleChange={handleSportSpecificDataChange} selectedSport = {selectedSport} />
              <div style={{textAlign: 'center', marginTop: '20px'}}>
                <Button style={{minWidth: '250px'}} loadingPosition="start" variant="solid">Save</Button>
              </div>
            </>
          )
        }
      </div>
    </Box>
  );
}