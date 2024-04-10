import { useState, useEffect } from "react"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import GeneralInfo from "./general_info";
import ContactInfo from "./contact_info";
import PersonalStatement from "./personal_statement";
import SocialLinks from "./social_links";
import GuardianInfo from "./guardian_info";
import FloatingActionButton from "@/app/_components/floating_action_btn";

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

    useEffect(() => {
        const floatingButton = document.querySelector('.floatingButton');
        if (floatingButton) {
          const rect = floatingButton.getBoundingClientRect();
          const top = rect.top - window.scrollY
          const left = rect.left 
          floatingButton.style.position = 'fixed';
          floatingButton.style.bottom = `20px`;
          floatingButton.style.left = `${left}px`;
          console.log(top, left)
        }
      }, []);

    return(
        <div style={{ position: 'relative' }}>
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
            <div class="floatingButton" style={{ position: 'absolute', bottom: '20px', right: 0 }}>
                <FloatingActionButton />
            </div>
        </div>
    )
}