'use client'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Search from '../search';
import { Container, Grid, Box, Menu, MenuItem, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';

function Img(){
  return(
    <img src="/logo.png" />
  )
}

export default function HeaderLoggedIn({user}){
  const router = useRouter()
  const isAtLeastMd = useMediaQuery('(min-width:900px)');
  const isAtLeastLg = useMediaQuery('(min-width:1200px)');
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false); // Destructuring the state value
  const handleBackClick = () => {
    setIsSearchBoxOpen(!isSearchBoxOpen)
  }
  const handleSearchIconClick = ()=> {setIsSearchBoxOpen(true)}

  return(
    <>
      <Container maxWidth = 'xl' sx={{padding: '10px 0'}}>
        {
          isSearchBoxOpen
            ? 
              <Search isAtLeastLg={isAtLeastLg} onBackClick = {handleBackClick} />
            : 
              <Grid container sx={{alignItems: 'center'}}>
                <Grid item xs={4} md={2}>
                  <Img sx={{maxHeight: '60px', width: 'auto'}} />
                </Grid>
                { isAtLeastMd && 
                  <Grid item xs={0} md={7} lg={4}>
                    <MenuItems isLoggedIn={true} />
                  </Grid>
                }
                { isAtLeastLg &&
                  <Grid item xs={0} lg={3}>
                    <Search isAtLeastLg  onBackClick = {handleBackClick}  />
                  </Grid>
                }
                
                <Grid item xs={8} md={3} lg={2} >
                  <HeaderRightIcons handleSearchIconClick={handleSearchIconClick} isAtLeastMd={isAtLeastMd} />
                </Grid>
              </Grid>
        }
      </Container>
    </>
  );
}

function MenuItems({isLoggedIn}){
  return (
    <>
      {isLoggedIn ? <HeaderCenterMenuItemsForLoggedIn /> : <HeaderCenterMenuItemsForNotLoggedIn /> }
    </>
  );
}

function HeaderCenterMenuItemsForLoggedIn(){

  const pages = ['DashBoard', 'Profile', 'Colleges']

  return(
    <>
      <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
        <div>Dashboard</div>
        <div>Profile</div>
        <div>Colleges</div>
      </div>
    </>
  );
}

function HeaderCenterMenuItemsForNotLoggedIn(){
  return(
    <>
    </>
  );
}

function HeaderRightIcons({isAtLeastMd, handleSearchIconClick}){
  return(
    <>
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Stack   
          direction="row"
          spacing={1}
        >
          <IconButton onClick={handleSearchIconClick} sx={{display: {xs: 'flex', lg: 'none'}}} size="large" aria-label="show 4 new mails" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Stack>
      </Box>

    </>
  );
}