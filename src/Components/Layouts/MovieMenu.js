import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';


 export default ({genres, category, onSelect}) => {
     
     const index = category ? genres.findIndex(genre => genre === category) + 1 : 0

     const onIndexSelect = (event, index) => onSelect(index === 0 ? '' : genres[index -1])
    return(
        <Paper style={{marginTop: 70}}>
            <Tabs
                value={index}
                textColor="secondary"
                variant="scrollable"
                onChange={onIndexSelect}
            >
                <Tab label = "ALL" />
                {genres.map(genre => 
                <Tab key={genre} label={genre}/>)}
                
            </Tabs>
        </Paper>
    )
}