import { Paper, Grid,FormControl,Tooltip,InputLabel, TextField , Select, MenuItem,  IconButton, Collapse,  Divider, Menu } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import sportsSettings from './settings'

const steps = ['Select an Sport', 'Fillup Details', 'Preview and Save'];

const data = {selectedSport: '', step2: {
  soccer: {},
  hockey: {},
  badminton: {},
  archery: {}
}}

import DisplayFieldsBasedOnSport from './display_fields_based_on_sports'
import PreViewKeyStats from "./preview_key_stats";

export default function HorizontalLinearStepper() {

  const [selectedSport, setSelectedSport] = React.useState(data.selectedSport)

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

  const sports = sportsSettings.sports

  return (
    <Box sx={{ width: '100%'}} >
      <Stepper activeStep={activeStep}>

        {steps.map((label, index) => {

          const stepProps = { completed: index < activeStep};
          const labelProps = {};

          return (
            <Step sx={{display: 'flex!important'}} key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}


      </Stepper>
      
      <div style={{paddingTop: '30px'}}>
        {
          activeStep === 0 ?
          (
            <FormControl fullWidth >
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
          ):
            activeStep === 1 ?
            (
              <>
                <DisplayFieldsBasedOnSport selectedSport = {selectedSport} />
              </>
            )
            : (
              <>
                <PreViewKeyStats />
              </>
            )
        }
      </div>

      <>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
          <Button
            variant="plain"
            onClick={activeStep > 0 ? handleBack: ()=>{}}
            sx={{ mr: 1 }}
          >
            {activeStep > 0 ?  'Back': 'Cancel'}
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button variant="solid" disabled={activeStep === 0 ? selectedSport === '' ? true:false : false}  onClick={handleNext} >
            {activeStep === 2 ? 'Save Key Stat' : 'Next'}            
          </Button>
        </Box>
      </>

    </Box>
  );
}