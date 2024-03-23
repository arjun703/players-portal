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
import Link from 'next/link'
import Divider from '@mui/material/Divider';
import GoogleSignIn from '../_components/google-sign-in';
import { useRouter } from "next/navigation";


export default function LandingPage(){

    const lang = useLang();
    const router = useRouter();

    return (
        <div>

            <Header user={false} />

            <Container maxWidth="lg" >
                <div class="form-wrapper-outer">
                    <Box
                        component="form"
                    >
                        <Grid container spacing={2} sx={{marginTop: '30px'}}>
                            
                            <Grid item lg={6} xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems:'center'}} >
                                <div >
                                    <div>
                                        <h3>Log In</h3>
                                        <p>Please enter the email and password.</p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item lg={6} xs={12}>
                                <Paper sx={{padding: '30px', borderRadius: '20px'}}  elevation={3}>
                                    <Stack spacing={2}>
                                        <GoogleSignIn />  
                                        <Divider>Or</Divider>
                                        <TextField  label="Email" variant="outlined" fullWidth  />
                                        <TextField  label="Password" variant="outlined"  fullWidth  />
                                        <Button 
                                            variant="contained" 
                                            size="large"
                                            onClick={()=>router.push('/dashboard')}
                                        >
                                            Log In
                                        </Button>
                                        <Divider variant="middle" component="div"  />
                                        <Link style={{textAlign: 'center'}} href="/">Forgot Password?</Link>
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