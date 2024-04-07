'use client'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
export default function HeaderNotLoggedIn(){
    const router = useRouter()
    return(
        <>

            <Grid container>
                <Grid item>

                </Grid>
                <Grid item>

                </Grid>
            </Grid>

            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo-wrapper">
                        <Link href="/">
                            <img style={{height: '80px', width: 'auto'}} src="/logo.png" />
                        </Link>
                    </div>
                    <div className="menu-items-between d-flex" style={{gap: '25px'}}>
                        <div>Our Services</div>
                        <div>Sports</div>
                        <div>Contact Us</div>
                        <div>About Us</div>
                    </div>
                    <div className="menu-items-right">
                        <Button  onClick= {()=>{router.push('/login')}}>
                            Login
                        </Button>
                        <Button 
                            onClick= {()=>{router.push('/register')}} 
                            style={{
                                fontWeight: 700, 
                                minWidth: '200px', 
                                padding: '10px 20px 10px 20px', 
                                marginLeft: '20px'
                            }} 
                            variant='contained'
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}