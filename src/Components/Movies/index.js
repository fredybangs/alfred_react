import React, { Fragment }  from 'react';
import Form from './Form'
import { Grid, Paper, Typography, List, CardMedia, ListItemSecondaryAction, ListItemText, ListItem, withStyles } from "@material-ui/core";
import Pic from './img-13.jpg'
import Option from "./Option"

const styles = theme => ({
    paper: {
        padding: 20,
        marginTop: 1,
        height: 600,
        overflowY: 'auto'
    },
    item:{
        [theme.breakpoints.down("xs")] : {
            height: '35 %'
        }
    }
    
})

export default withStyles(styles)(
({movies,
    classes,
    category,
    onSelect,
    genres,
    onDelete,
    editMode,
    onSelectEdit,
    onEdit,
    movie,
    movie:{
        title = "Welcome El Rey!",
        id,
        // imgUrl,
        imgUrl = <img src={Pic} border="5%" height="50%" width="40%" alt=""/>,
        date,
        price,
        description = "Please select a from the left pane to view it details..."
    }
}) =>
     <Grid container >
         <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper} >
                {movies.map(([genres, movies]) => 
                !category || category === genres
                ?
                <Fragment key={genres}>
                    <Typography variant="h5" color="secondary" style={{textTransform: "capitalize"}} >
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
                            <ListItemSecondaryAction>
                                <Option onSelectEdit={onSelectEdit} onDelete={onDelete} id={id}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        )}
                    </List>
                </Fragment>
                : null
                )}
            </Paper>
         </Grid>
         <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                {editMode
                    ?
                    <Form
                        genres={genres}
                        onSubmit={onEdit}
                        movie={movie}
                    />
                    :
                    <Fragment>
                        <Paper style={{margin:1}}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" style={{padding:20}} spacing={2}>
                                    <Grid item xs>
                                        <Typography color="secondary" gutterBottom variant="h2">
                                            {title}
                                        </Typography>
                                        {/* <Typography style={{paddingBottom:10}}>
                                            PICTURE HERE
                                        </Typography> */}
                                        <CardMedia>
                                            {imgUrl}
                                        </CardMedia>
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
                    </Fragment>
                }
            </Paper>
         </Grid>
     </Grid>
)