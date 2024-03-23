'use client'
import Header from '@/app/_components/_header/header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import useLang from '../_components/uselang';
import { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import GoogleSignIn from '../_components/google-sign-in';

export default function LandingPage(){
    
    const lang = useLang();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <div>

            <Header user={false} />

            <Container maxWidth="lg" >
                <div className="form-wrapper-outer">
                    <Box
                        component="form"
                    >
                        <Grid container spacing={2} sx={{marginTop: '30px'}}>
                            
                            <Grid item lg={6} xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}} >
                                <div >
                                    <div>
                                        <div style={{textAlign:'center'}} >
                                            <img src="/logo.png" />
                                        </div>
                                        <h3>Create an  Account</h3>
                                        <p>Please fillup the necessary details.</p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item lg={6} xs={12}>
                                <Paper sx={{padding: '30px', borderRadius: '20px'}}  elevation={3}>
                                        
                                    <Stack spacing={2}>
                                        <GoogleSignIn />  
                                        <Divider>Or</Divider>
                                        <TextField onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined" fullWidth  />
                                        <TextField onChange={(e)=>setEmail(e.target.value)} label="Email" variant="outlined" fullWidth  />
                                        <TextField  onChange={(e)=>setPassword(e.target.value)}  type="password" label="Password" variant="outlined"  fullWidth  />
                                        <TextField  label="Confirm Password" variant="outlined"  fullWidth  />                                        
                                        <Button 
                                            variant="contained" 
                                            size="large"
                                            onClick={()=>console.log(name, email, password)}
                                        >
                                            {lang.sign_up_text}
                                        </Button> 
                                                                              
                                    </Stack>  
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container>
        </div>
    );
}