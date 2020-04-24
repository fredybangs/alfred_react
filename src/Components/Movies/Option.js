import React from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Option({onSelectEdit, onDelete, id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
          <MenuItem onClick={() => onSelectEdit(id)}>
            Edit
          </MenuItem>
          <MenuItem  onClick={() => onDelete(id)}>
            Delete
          </MenuItem>
      </Menu>
    </div>
  );
}
