import { Paper, Stack, Container } from "@mui/material"
import Education from "./education";
import { useState } from "react";
import AcademicFiles from "./academic_files";

export default function Academics(){
    const [educations, setEducations] = useState([]);
    const handleAddEducation = (eduInfo) => {

    }

    const handleEditEducation = (id) => {

    }

    const handleDeleteEducation = (id) => {

    }

    return(
        <>
            <Stack spacing={2}>
                <Education 
                    educations={educations} 
                    handleAddEducation={handleAddEducation}
                    handleEditEducation={handleEditEducation}
                    handleDeleteEducation={handleDeleteEducation}
                />

                <AcademicFiles
                    
                    academicFiles={[]}
                    handleEditAcademicFile={()=>{}}
                    handleAddAcademicFile={()=>{}}
                    handleDeleteAcademicFile={()=>{}}
                />

            </Stack>        
        </>
    )
}