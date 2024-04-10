
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function FloatingActionButton() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" variant="extended" aria-label="edit">
          <EditIcon style={{marginRight: '20px'}} />
          Edit Basic Info
        </Fab>
      </Box>
    );
  }