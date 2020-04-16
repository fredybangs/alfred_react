import React, { Fragment }  from 'react';
import { Grid, Paper, Typography, List } from "@material-ui/core";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';



const styles = {
    Paper: {
        padding: 20,
        margin: 10,
        height: 600,
        overflowY: 'auto'
    }
    
}
    
export default ({movies,
    category,
    onSelect,
    movie:{
        title = "Welcome El Rey!",
        id,
        imgUrl,
        // imgUrl = <img src={Pic} className="center" border="10" height="400" width="300" alt=""/>,
        date,
        price,
        description = "Please select a from the left pane to view it details..."
    }
}) =>
     <Grid container>
         <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper} >
                {movies.map(([genres, movies]) => 
                !category || category === genres
                ?
                <Fragment key={genres}>
                    <Typography variant="h5" style={{textTransform: "capitalize"}} >
                        {genres}
                    </Typography>
                    <List component="ul">
                        {movies.map(({id, title}) =>
                        <ListItem 
                            button  
                            onClick={() => onSelect(id)}
                            key={id}
                        >
                            <ListItemText primary={title} />
                        </ListItem>
                        )}
                    </List>
                </Fragment>
                : null
                )}
            </Paper>
         </Grid>
         <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}>
                <Paper style={{margin:10}}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" style={{padding:10}} spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h2">
                                    {title}
                                </Typography>
                                <Typography style={{paddingBottom:10}}>
                                    PICTURE HERE
                                </Typography>
                                <Typography variant="hr" color="textSecondary">
                                    {date}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    More
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography style={{padding: 30}} variant="h5">{price}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper>
         </Grid>
     </Grid>