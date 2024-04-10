import { Paper, Stack, Container } from "@mui/material"
import { useState } from "react";
import ViewKeyStats from "./view-key-stats";

export default function keyStats(){

    return(
        <>
            <Stack spacing={2}>
                <ViewKeyStats />
            </Stack>        
        </>
    )
}