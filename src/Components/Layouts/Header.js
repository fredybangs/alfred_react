import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


 export default props =>
  <AppBar xs={12} position="static">
  <Toolbar variant="dense">
    <Typography variant="h3" color="inherit">
      Movie Centre
    </Typography>
  </Toolbar>
  </AppBar>