import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
export default function GuardianInfo(){

    const genders = {
        male: 'Male',
        female: 'Female',
        rather_not_say: 'Rather not Say'
    }

    const guardianInfo = {
        relation: 'Father',
        firstName: 'Yam',
        lastName: 'Sharma',
        primaryPhone: "9841743132",
        primaryEmail: 'SDFSDFSDF@ABSF.com',
        secondaryPhone: '423423234',
        highestLevelOfEducation: 'Bachelor\'s Degree'
    }
    
    return(
        <Paper sx={{ p: '0 20px 20px 20px' }}>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>Guardian Info</h3>
            <Box>
                
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Relationship:</span>
                    <span className="general-info-value">{guardianInfo.relation}</span>
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>First Name:</span>
                    <span className="general-info-value">{guardianInfo.firstName}</span>
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Last Name:</span>
                    <span className="general-info-value">{guardianInfo.lastName}</span>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Primary Phone:</span>
                    <span className="general-info-value">{guardianInfo.primaryPhone}</span>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Primary Email:</span>
                    <span className="general-info-value">{guardianInfo.primaryEmail}</span>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Secondary Phone:</span>
                    <span className="general-info-value">{guardianInfo.secondaryPhone}</span>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Highest Education Level:</span>
                    <span className="general-info-value">{guardianInfo.highestLevelOfEducation}</span>
                </div>

            </Box>
        </Paper>
    )
}