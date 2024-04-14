import { Paper, Grid,FormControl,Tooltip,InputLabel, TextField , Select, MenuItem,  IconButton, Collapse,  Divider, Menu } from "@mui/material"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { TransitionGroup } from 'react-transition-group';
import KeyIcon from '@mui/icons-material/Key';import { useState, useEffect } from "react";
import {  LocalizationProvider ,DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Graduate } from "next/font/google";
import Button from '@mui/joy/Button';
import HorizontalLinearStepperAddKeyStats from "./add_key_stats";


export default function PreViewKeyStats({keyStat}){

    return(
        <>
            <Paper sx={{padding: {xs: 1, md: 2}}}>
                Preview
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>
                    <div>
                        <div>
                            <KeyIcon sx={{fontSize: '100px'}}/>
                        </div>
                        <div>
                            No key stat has been added
                        </div>
                        <Button variant="plain" onClick={()=>setIsAddingKeyState(true)}>
                            ADD NOW
                        </Button>
                    </div>
                </div>
        
            </Paper>
            
        </>
    )
}