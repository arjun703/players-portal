import HeaderLoggedIn from "./header_logged_in";
import HeaderNotLoggedIn from "./header_not_logged_in";
import Paper from '@mui/material/Paper';

export default function Header({user}){
    return (
        <Paper elevation={0} sx={{borderRadius: '0px', position: 'sticky', top: '0px', zIndex: 999}}>
          {
            user 
              ? <HeaderLoggedIn user = {user} /> 
              : <HeaderNotLoggedIn />
          }
        </Paper>
    );
}