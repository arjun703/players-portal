import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  ListItemIcon  from '@mui/material/ListItemIcon';
import  ListItemText from '@mui/material/ListItemText';
import FlagIcon from '@mui/icons-material/Flag';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MoreActions() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const  isLargerDevice = useMediaQuery('(min-width:900px)');

  return (
    <div>
      <IconButton
        id="basic-button"
        sx={{backgroundColor: isLargerDevice && 'rgba(0, 0, 0, 0.06)' }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy Link to Profile</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <FlagIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Report Profile</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}