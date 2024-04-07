import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
export default function ContactInfo({contactInfo}){

    const genders = {
        male: 'Male',
        female: 'Female',
        rather_not_say: 'Rather not Say'
    }

    return(
        <Paper sx={{ p: '0 20px 20px 20px' }}>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>Contact Info</h3>
            <Box>
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Primary Phone:</span>
                    <span className="general-info-value">{contactInfo.primaryPhone}</span>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Primary Email:</span>
                    <span className="general-info-value">{contactInfo.primaryEmail}</span>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Secondary Phone:</span>
                    <span className="general-info-value">{contactInfo.secondaryPhone}</span>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>Secondary Email:</span>
                    <span className="general-info-value">{contactInfo.secondaryEmail}</span>
                </div>
                <div>
                    <span className="general-info-label" style={{ fontWeight: 'bold', marginRight: '10px' }}>From:</span>
                    <span className="general-info-value">{contactInfo.address}</span>
                </div>
            </Box>
        </Paper>
    )
}