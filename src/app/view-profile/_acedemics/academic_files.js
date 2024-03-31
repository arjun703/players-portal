import { Paper, Grid,Container, FormControl,Tooltip,InputLabel, Button as Btn, TextField , Select, MenuItem,  IconButton, Collapse,  Divider, Menu } from "@mui/material"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { TransitionGroup } from 'react-transition-group';
import SchoolIcon from '@mui/icons-material/School';
import { useState, useEffect } from "react";
import {  LocalizationProvider ,DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Graduate } from "next/font/google";
import Button from '@mui/joy/Button';
import TableChartIcon from '@mui/icons-material/TableChart';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

function AddNewAcademicFileForm({handleCancel, handleAddAcademicFile}){
    
    const [level, setLevel] = useState('')
    const [fieldOfStudy, setFieldOfStudy] = useState('')
    const [institution, setInstitution] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    
    const educationLevels = [
        {label: 'Transcript', value: 'transcript'}, 
        {label: 'Report Card', value:'report_card'},
        {label: 'SAT', value:'sat'},
        {label: 'ACT', value:'act'},
        {label: 'PSAT', value:'psat'},
        {label: 'SAT II', value:'satii'}
    ]

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
            <Container maxWidth={'sm'}>
                <Grid container sx={{marginTop: 1, maxWidth: 'xs'}}>
                    <Grid item xs={12}  sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
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

                    <Grid item xs={12} sx={{padding: '0 10px', marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <TextField onChange={(e)=> {setFieldOfStudy(e.target.value)}} label="Description" variant="outlined" />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}  sx={{padding: '0 10px',marginTop: {xs: 2}}}>
                        <FormControl fullWidth>
                            <Button                       
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startDecorator={<TableChartIcon />}
                            >
                                Choose File
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>

            <div style={{display:'flex', marginTop: '20px', alignItems: 'center',  justifyContent: 'center'}}>
                <Button variant="solid"  startDecorator={<TableChartIcon />}>
                    Add Academic File
                </Button>
            </div>
        </>

    );
}

function EditAcademicFile({edu}){
    return(
        <>

        </>
    )
}

export default function AcademicFiles({academicFiles, handleEditAcademicFile, handleAddAcademicFile, handleDeleteAcademicFile}){
    
    const [addingNewEducation, setAddingNewEducation] = useState(false)
    const [editingEducation, setEditingEducation] = useState({isEditing: false, id: false})

    const handleInitiateAddNewAcademicFile =() => {setAddingNewEducation(true)}
    const closeAddNewAcademicFile = () => {setAddingNewEducation(false)}
    const closeEditAcademicFile = () => {setEditingEducation({isEditing:false, id: false})}
    const handleAddAcademicFileInner = () => {}

    return(
        <>
            <Paper sx={{padding: {xs: 1, md: 2}}}>
                {
                    addingNewEducation
                        ? <AddNewAcademicFileForm handleCancel={closeAddNewAcademicFile} handleAddAcademicFile={handleAddAcademicFileInner} />
                        : editingEducation.isEditing
                            ? <EditAcademicFile />
                            :  <div>
                                    <>
                                        {academicFiles.length ?
                                            <Grid container sx={{alignItems: 'center'}}>
                                                <Grid item xs>
                                                    <Divider color="blue" sx={{opacity: 0.4}}></Divider>
                                                </Grid>
                                                <Grid item>
                                                    <Tooltip onClick={handleInitiateAddNewAcademicFile} title="Add New Academic File">
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
                                        academicFiles.length > 0
                                            ?   <TransitionGroup>
                                                    {
                                                        academicFiles.map((e, index) => (
                                                            <Collapse key={index}>
                                                                
                                                            </Collapse>
                                                        ))
                                                    }
                                                </TransitionGroup>
                                            
                                            :   <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
                                                    <div>
                                                        <div>
                                                            <TableChartIcon sx={{fontSize: '100px'}}/>
                                                        </div>
                                                        <div>
                                                            No any academic file has been added
                                                        </div>
                                                        <Button variant="plain" onClick={handleInitiateAddNewAcademicFile}>
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