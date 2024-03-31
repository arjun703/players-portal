import { Paper, Grid,FormControl,Tooltip,InputLabel, TextField , Select, MenuItem,  IconButton, Collapse,  Divider, Menu } from "@mui/material"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { TransitionGroup } from 'react-transition-group';
import SchoolIcon from '@mui/icons-material/School';
import { useState, useEffect } from "react";
import {  LocalizationProvider ,DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Graduate } from "next/font/google";
import Button from '@mui/joy/Button';


function AddNewEducationForm({handleCancel, handleAddEducation}){
    
    const [level, setLevel] = useState('')
    const [fieldOfStudy, setFieldOfStudy] = useState('')
    const [institution, setInstitution] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    
    const educationLevels = [
        {label: 'Intermediate', value: 'intermediate'}, 
        {label: 'Bachelor\'s Degree', value:'bachelor'},
        {label: 'Master\'s Degree', value:'master'},
        {label: 'MPhil Degree', value:'mphil'},
        {label: 'PhD Degree', value:'phd'}
    ]

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault(); // Prevent default browser back button behavior
            handleCancel(); // Call handleCancel function
        };

        // Add event listener for the browser back button
        window.addEventListener('popstate', handleBackButton);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [handleCancel]);


    
    return(
        <>
            <Grid container sx={{alignItems: 'center'}}>
                <Grid item auto onClick={handleCancel}>
                    <Button  variant="plain"  startDecorator={<ArrowBackIosIcon />}>Cancel</Button>
                </Grid>
                <Grid item xs>
                    <Divider></Divider>
                </Grid>
            </Grid>
            <Grid container sx={{marginTop: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid item xs={12} md={6} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Level</InputLabel>
                            <Select
                                id="demo-simple-select"
                                labelId="demo-simple-select-label"
                                label="Level"
                                onChange={(e)=> {setLevel(e.target.value)}}
                            >   
                                {educationLevels.map(({label, value},i) => (<MenuItem key={i} value={value}>{label}</MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <TextField onChange={(e)=> {setFieldOfStudy(e.target.value)}} label="Field of Study" variant="outlined" />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <TextField onChange={(e)=> {setInstitution(e.target.value)}} label="Institution" variant="outlined" />
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} md={6} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <DatePicker  onChange={(e)=> {setStartDate(e.target.value)}} label="Start Date" variant="outlined" />
                        </FormControl>
                    </Grid>

                    
                    <Grid item xs={12} md={6} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <DatePicker  onChange={(e)=> {setEndDate(e.target.value)}} label="End Date" variant="outlined" />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <TextField onChange={(e)=> {setExtraInfo(e.target.value)}} label="Extra Info ( e.g. Grades, scholarships, ... )" variant="outlined" />
                        </FormControl>
                    </Grid>

                </LocalizationProvider>
            </Grid>
            <div style={{display:'flex', marginTop: '20px',  justifyContent: 'center'}}>
                <Button variant="solid"  startDecorator={<SchoolIcon />}>Add Education</Button>
            </div>
        </>

    );
}

function EditEducation({edu}){
    return(
        <>

        </>
    )
}

export default function Education({educations, handleEditEducation, handleAddEducation, handleDeleteEducation}){
    
    const [addingNewEducation, setAddingNewEducation] = useState(false)
    const [editingEducation, setEditingEducation] = useState({isEditing: false, id: false})

    const handleInitiateAddNewEducation =() => {setAddingNewEducation(true)}
    const closeAddNewEducation = () => {setAddingNewEducation(false)}
    const closeEditEducation = () => {setEditingEducation({isEditing:false, id: false})}
    const handleAddEducationInner = () => {}

    return(
        <>
            <Paper sx={{padding: {xs: 1, md: 2}}}>
                {
                    addingNewEducation
                        ? <AddNewEducationForm handleCancel={closeAddNewEducation} handleAddEducation={handleAddEducationInner} />
                        : editingEducation.isEditing
                            ? <EditEducation />
                            :  <div>
                                    <>
                                        { educations.length ?
                                        <Grid container sx={{alignItems: 'center'}}>
                                            <Grid item xs>
                                                <Divider color="blue" sx={{opacity: 0.4}}></Divider>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip onClick={handleInitiateAddNewEducation} title="Add New Education">
                                                    <IconButton 
                                                        sx={{':hover': { color: 'blue'}, backgroundColor: 'blue', 
                                                            color: 'white', border: '1px solid blue'}}
                                                    >
                                                        <LibraryAddIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        : ''
                                        }
                                    </>
                                    {
                                        educations.length > 0
                                            ?   <TransitionGroup>
                                                    {
                                                        educations.map((e, index) => (
                                                            <Collapse key={index}>
                                                                
                                                            </Collapse>
                                                        ))
                                                    }
                                                </TransitionGroup>
                                            
                                            :   <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
                                                    <div>
                                                        <div>
                                                            <SchoolIcon sx={{fontSize: '100px'}}/>
                                                        </div>
                                                        <div>
                                                            No any education has been added
                                                        </div>
                                                        <Button variant="plain" onClick={handleInitiateAddNewEducation}>
                                                            ADD NEW
                                                        </Button>
                                                    </div>
                                                </div>
                
                                    }
                                </div>
                }

            </Paper>
        </>
    )
}