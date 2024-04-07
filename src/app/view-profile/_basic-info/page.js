import { useState } from "react"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import GeneralInfo from "./general_info";
import ContactInfo from "./contact_info";
import PersonalStatement from "./personal_statement";
import SocialLinks from "./social_links";

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

    return(
        <>
            <Grid container spacing={2}>
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

                </Grid>   
            </Grid>
        </>
    )
}