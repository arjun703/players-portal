'use client'
import Button from '@mui/material/Button';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link'
import Header from '../_components/_header/header';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import Post from '../_components/post';
import { useState, useEffect } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Dashboard() {

  const [isMobile, setIsMobile] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);

  useEffect(() => {
      // Function to check if the device is a mobile device
      const isMobileDevice = () => {
          return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
      }

      // Update state based on whether the device is mobile or not
      setIsMobile(isMobileDevice());
  }, []);

  // Apply or remove sticky behavior based on the device type
  useEffect(() => {
      const element = document.getElementById('sticky-left-sidebar-desktop');
      if (element && !isMobile) {
          element.classList.add('sticky');
          const top = element.getBoundingClientRect().top;
          setSidebarTop(Math.max(top, 0));
      } else if (element) {
          element.classList.remove('sticky');
      }
  }, [isMobile]);

  return (
    <>
      <Header  user={true} />
      <Container sx={{marginTop: '30px'}} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={4}>
            <Item id="sticky-left-sidebar-desktop" style={{ position: isMobile ? 'static' : 'sticky', top: sidebarTop }}>
              <div className="avatar-name justify-content-between d-flex align-items-center" >
                <div class="d-flex align-items-center" style={{gap: '15px'}}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/pp.jpg"
                    sx={{ width: 60, height: 60 }}
                  />
                  <div className="name">
                    <h4 style={{marginBottom: 0}}>Arjun Poudel</h4>
                  </div>
                </div>
                <div>
                  <Tooltip title="View Profile">
                    <Link href="/view-profile">
                      <IconButton><VisibilityIcon/></IconButton>
                    </Link>                  
                  </Tooltip>
                </div>
              </div>
              <Divider sx={{opacity: 1, margin: '15px 0'}}></Divider>
              <div class="d-flex justify-content-center">
                <Stack
                  direction="row"
                  divider={<Divider style={{opacity: 1}} variant="middle" orientation="vertical"  flexItem/>}
                  spacing={1}
                > 
                  <div class="count views-count"> <strong >0</strong> views</div>
                  <div class="count followers-count"><strong>0</strong> followers</div>
                  <div class="count following-count"> <strong>0</strong> following</div>
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Post title="Arjun Poudel" timeAgo="3h ago" id="1" />
            <Post title="Rakshya Panta" timeAgo="1h ago" id="2" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
