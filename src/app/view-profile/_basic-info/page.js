import { useState, useEffect } from "react"

import {Grid, FormControl,Tooltip,InputLabel, TextField , Select, MenuItem}  from '@mui/material/';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import GeneralInfo from "./general_info";
import ContactInfo from "./contact_info";
import PersonalStatement from "./personal_statement";
import SocialLinks from "./social_links";
import GuardianInfo from "./guardian_info";
import FloatingActionButton from "@/app/_components/floating_action_btn";
import EditIcon from '@mui/icons-material/Edit';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';


export default function BasicInfo(){
    
    const [generalInfo, setGeneralInfo] = useState({
        firstName: 'Arjun',
        lastName: 'Poudel',
        dateOfBirth: '',
        gender: 'male'
    })

    const [contactInfo, setContactInfo] = useState({
        primaryPhone: 9840030080,
        secondaryPhone: 9841743132,
        primaryEmail: "arjunpoudel703@gmail.com",
        secondaryEmail: "abc@gmail.com",
        address: "Dahachowk, Kathmandu, Nepal"
    })

    const [guardianInfo, setGuardianInfo] = useState({
        relation: "Father",
        firstName: "Yam",
        lastName: "Sharma",
        primaryPhone: "93423424",
        primaryEmail: "arjun@arjun.com",
        secondaryPhone: "432324234",
        secondaryEmail: "abc@abc.com"
    })

    const [isEditing, setIsEditing] = useState(false)
    const initiateEditBasicInfo = ()=>{
        setIsEditing(true)
    }

    const handleChange = (value, proop) => {

    }

    return(
        <div style={{ position: 'relative' }}>
            <>

                {!isEditing && (
                    <Grid container spacing={2} style={{ paddingBottom: '30px' }}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={2}>
                                <GeneralInfo generalInfo={generalInfo} />
                                <ContactInfo contactInfo={contactInfo} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={2}>
                                <PersonalStatement personalStatement="Cristiano Ronaldo, one of the most iconic and accomplished footballers of his generation, has left an indelible mark on the sport with his unparalleled athleticism, skill, and dedication. Hailing from Madeira, Portugal, Ronaldo rose to global prominence through his prolific goal-scoring abilities, lightning-fast pace, and mesmerizing dribbling skills. With numerous records to his name, including multiple Ballon d'Or awards, Ronaldo has showcased his dominance on the pitch while representing esteemed clubs such as Manchester United, Real Madrid, and Juventus. Beyond his on-field achievements, Ronaldo's charitable endeavors, work ethic, and relentless pursuit of excellence have solidified his status as a footballing legend and an inspiration to millions worldwide." />
                                <SocialLinks />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={2}>
                                <GuardianInfo />
                            </Stack>
                        </Grid>
                    </Grid>
                )}

                {isEditing && (

                    <Paper> 
                        <Grid container>
                            <FormControl fullWidth>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Name"
                                        value={generalInfo.firstName +' '+generalInfo.lastName} 
                                        onChange={(e)=>handleChange(e.target.value, 'name')}
                                        variant="outlined" 
                                    />
                                </Grid>
                            </FormControl>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <input type="date" 
                                        id="outlined-basic" 
                                        label="Name"
                                        value={generalInfo.dateOfBirth} 
                                        onChange={(e)=>handleChange(e.target.value, 'dateOfBirth')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="add-new-coach-interested">Gender</InputLabel>
                                    <Select
                                        labelId="add-new-coach-interested"
                                        value={generalInfo.gender}   
                                        onChange={(e)=>handleChange(e.target.value, 'gender')} 
                                        label="Gender?"
                                    >   
                                        {[{label: 'Male', id: 'male'},{label: 'Female', id: 'female'}].map(({label, id},i) => (<MenuItem key={i} value={id}  >{label}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Primary Phone"
                                        value={contactInfo.primaryPhone} 
                                        onChange={(e)=>handleChange(e.target.value, 'name')}
                                        variant="outlined" 
                                    />

                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Primary Email"
                                        value={contactInfo.primaryEmail} 
                                        onChange={(e)=>handleChange(e.target.value, 'primaryEmail')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Secondary  Phone"
                                        value={contactInfo.secondaryPhone} 
                                        onChange={(e)=>handleChange(e.target.value, 'secondaryPhone')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Secondary  Email"
                                        value={contactInfo.secondaryEmail} 
                                        onChange={(e)=>handleChange(e.target.value, 'secondaryEmail')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>

                        <Grid container>

                            <Grid item xs={12} >
                                <FormControl fullWidth>
                                <TextareaAutosize
                                    label="Personal Statement"
                                    onChange={(e)=>handleChange(e.target.value, 'personalStatement')} 
                                    placeholder="Personal Statement..."
                                    sx={{width : '100%'}}
                                    minRows={3} // Specify the minimum number of rows
                                    maxRows={5} // Specify the maximum number of rows
                                />    
                                </FormControl>
                            </Grid>

                        </Grid>


                        <Grid container>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Youtube Channel Link"
                                    onChange={(e)=>handleChange(e.target.value, 'youtube')}
                                    variant="outlined" 
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Instagram Profile Link"
                                    onChange={(e)=>handleChange(e.target.value, 'instagram')}
                                    variant="outlined" 
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Facebook Profile Link"
                                    onChange={(e)=>handleChange(e.target.value, 'facebook')}
                                    variant="outlined" 
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="X Profile Link"
                                    onChange={(e)=>handleChange(e.target.value, 'twitter')}
                                    variant="outlined" 
                                />
                            </Grid>

                        </Grid>



                        <Grid container>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Youtube Channel Link"
                                    onChange={(e)=>handleChange(e.target.value, 'youtube')}
                                    variant="outlined" 
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Instagram Profile Link"
                                    onChange={(e)=>handleChange(e.target.value, 'instagram')}
                                    variant="outlined" 
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Facebook Profile Link"
                                    onChange={(e)=>handleChange(e.target.value, 'facebook')}
                                    variant="outlined" 
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField 
                                    id="outlined-basic" 
                                    label="X Profile Link"
                                    onChange={(e)=>handleChange(e.target.value, 'twitter')}
                                    variant="outlined" 
                                />
                            </Grid>

                        </Grid>

                        <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Guardian Name"
                                        onChange={(e)=>handleChange(e.target.value, 'name')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>                            
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Primary Phone"
                                        onChange={(e)=>handleChange(e.target.value, 'name')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Primary Email"
                                        value={contactInfo.primaryEmail} 
                                        onChange={(e)=>handleChange(e.target.value, 'primaryEmail')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Secondary  Phone"
                                        value={contactInfo.secondaryPhone} 
                                        onChange={(e)=>handleChange(e.target.value, 'secondaryPhone')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Secondary  Email"
                                        value={contactInfo.secondaryEmail} 
                                        onChange={(e)=>handleChange(e.target.value, 'secondaryEmail')}
                                        variant="outlined" 
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>


                    </Paper>

                )}

            </>

            <FloatingActionButton btnIcon={<EditIcon />} btnTitle='Edit Basic Info' handler={initiateEditBasicInfo} />
        </div>
    )
}





const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );