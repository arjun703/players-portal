'use client'
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
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../_components/_header/header';
import About from './_basic-info/page';
import Videos from './_video/page';
import KeyStats from './_key-stats/page';
import Athletics  from './_athletics/page';
import Academics from './_acedemics/page';
import useMediaQuery from '@mui/material/useMediaQuery';
import MoreMenuViewProfile from './_components/more_menu_view_profile';
import MoreActions from './_components/more_menu_view_profile';

export default function ViewProfile({ children }){

    const [value, setValue] = useState('1');
    const  isLargerDevice = useMediaQuery('(min-width:900px)');
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };    
    
    return (
        <>
            <Header user={true}></Header>

            <Box id="parentBox">
                <TabContext id="parentTabContext" value={value}>  
                    <Box id="parentBox2" sx={{position:'sticky', padding: '10px 0 0 0', top: '0px', 
                        borderBottom: 1, borderTop: 1, borderColor: 'divider', backgroundColor: 'white' }}>
                        <Container 
                            id="parentContainer"
                            maxWidth={isLargerDevice && 'md'} 
                            sx={{paddingLeft: !isLargerDevice && '0px!important'}}
                        >
                            <Grid alignItems={'center'} container>
                                <Grid item xs={11}>    
                                    <TabList 
                                        variant={!isLargerDevice && 'scrollable'}
                                        scrollButtons="auto"
                                        allowScrollButtonsMobile = {!isLargerDevice}
                                        onChange={handleChange}  aria-label="lab API tabs example" 
                                    >
                                        <Tab label="About" value="1" />
                                        <Tab label="Video" value="2" />
                                        <Tab label="Athletics" value="3" />
                                        <Tab label="Key Stats" value="4" />
                                        <Tab label="Academics" value="5" />
                                    </TabList>
                                </Grid>
                                <Grid textAlign={isLargerDevice ? 'right' : 'center'} item xs={1}>
                                    <MoreActions />
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Container maxWidth='md' sx={{paddingLeft: 0, paddingRight: 0}} >
                        <TabPanels />
                    </Container>
                </TabContext>   
            </Box>
        </>
    );

}

function TabPanels(){
    return(
        <>
            <TabPanel value="1">
                <About />
            </TabPanel>
            <TabPanel sx={{padding: {xs: 0}}} value="2">
                <Videos />
            </TabPanel>
            <TabPanel value="3">
                <Athletics />
            </TabPanel>
            <TabPanel value="4">
                <KeyStats />
            </TabPanel>
            <TabPanel value="5">
                <Academics />
            </TabPanel>
        </>
    )
}