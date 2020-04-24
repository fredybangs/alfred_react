import React, {Component, Fragment} from 'react'
import Form from './Form'
import { Fab, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
export default class extends Component {
        state = {
            open: false,
        }

    handleToggle= () => {
        this.setState({
            open: !this.state.open
        })
    }
    
    handleFormSubmit = movie => {
        this.handleToggle()
        this.props.onCreate(movie)
    }

    render(){
    const {open} = this.state,
        {genres} = this.props
        return(
            <Fragment>
                <Fab
                    size="small"
                    color="secondary"
                    onClick={this.handleToggle} 
                    aria-label="add"
                    >
                    <AddIcon />
                </Fab>
                <Dialog 
                    open={open} 
                    onClose={this.handleToggle}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle >Create Movie</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Create a New Movie here!
                        </DialogContentText>
                        <Form 
                            genres={genres} 
                            onSubmit= {this.handleFormSubmit}
                        />
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}