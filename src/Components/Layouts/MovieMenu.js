import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

 export default ({genres, category, onSelect}) => {
     
     const index = category ? genres.findIndex(genre => genre === category) + 1 : 0

     const onIndexSelect = (event, index) => onSelect(index === 0 ? '' : genres[index -1])
    return(
        <Paper style={{marginTop: 10}}>
            <Tabs
                value={index}
                textColor="primary"
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