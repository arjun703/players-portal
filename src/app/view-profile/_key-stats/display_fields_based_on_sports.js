import  sportsSettings from './settings'
import { Paper, Grid,FormControl,Tooltip,InputLabel, TextField , Select, MenuItem,  IconButton, Collapse,  Divider, Menu } from "@mui/material"


function returnSportsSettingsByID(idd){
    const matchingSport =  sportsSettings.sports_settings.filter(({id}) => idd === id)
    if(matchingSport.length) return matchingSport[0]
    else return false
}

export default function DisplayFieldsBasedOnSport({selectedSport}){

    const sportSettings = returnSportsSettingsByID(selectedSport);
    if(!sportSettings) return(<>Not found</>)
    return(
        <>                        
            <Grid container spacing={2}>
                {
                    sportSettings.settings.map(setting => {
                        switch(setting.type){
                            case 'select':
                                return(
                                    <Grid item xs={12}  sm={6}>
                                        <FormControl fullWidth >
                                            <InputLabel id={"label-"+setting.id}>{setting.label}</InputLabel>
                                            <Select
                                                id={setting.id}
                                                labelId={"label-"+setting.id}
                                                label={setting.label}
                                            >   
                                                {
                                                    setting.options.map(({label, id},i) => {
                                                        return (
                                                            <MenuItem key={i} value={id}  >{label}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                )
                            break;

                            case 'text':
                            case 'number':
                                return(
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth >
                                            <TextField 
                                                label={setting.label}
                                                placeholder={setting.placeholder}
                                                variant="outlined" 
                                            />
                                        </FormControl>
                                    </Grid>
                                );
                            break;
                        }
                    })
                }
            </Grid>
        </>
    )
}