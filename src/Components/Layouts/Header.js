import React from 'react';
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core';
import Dialog from '../Movies/Dialog'


export default ({genres, onMovieCreate}) =>

<Container component="main" fullWidth maxHeight="xs">
  <AppBar >
    <Toolbar variant="dense">

      <Typography variant="h3" color="inherit" style={{flex: 1}}>
        Movie Centre
      </Typography>

      <Dialog 
        genres={genres}
        onCreate={onMovieCreate}
      />
    </Toolbar>
  </AppBar>
</Container>
  