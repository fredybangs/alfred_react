import React, { Component } from 'react'
import { TextField, Button, MenuItem } from "@material-ui/core";

export default class extends Component {
        state = this.getInitialState()

    getInitialState() {
        const {movie} = this.props
        return (
            movie ? movie : {
                                imgUrl: "",
                                title: "",
                                date: "",
                                genres: "",
                                price: "",
                                description: ""
                            }

        )
    }

    componentWillReceiveProps({movie}) {
        this.setState({
            ...movie
        })
    }

    handleChange = name => ({target : { value }}) => 
        this.setState({
                [name] : value
        })
    

    handleSubmit = () => {

        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state
        })
        this.setState(this.getInitialState())
    }

    render(){
        const {title, date, genres, price, description, imgUrl} = this.state,
                {genres: categories, movie} = this.props
        return(
            <form>
                <TextField
                    label="Title"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <br/>
                <TextField
                    fullWidth
                    select
                    label="Genre"
                    value={genres}
                    onChange={this.handleChange('genres')}
                    helperText="Please select the Genre"
                    >
                    {categories.map(category => 
                        <MenuItem key={category} value={category}> {category}</MenuItem>
                    )}
                </TextField>
                <br/>
                <TextField
                    label="Price"
                    value={price}
                    onChange={this.handleChange('price')}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <TextField
                    label="Release Year"
                    value={date}
                    onChange={this.handleChange('date')}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <TextField
                    label="Image Url"
                    value={imgUrl}
                    onChange={this.handleChange('imgUrl')}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <TextField
                    label="Description"
                    value={description}
                    multiline
                    rows="4"
                    onChange={this.handleChange('description')}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.handleSubmit}
                    disabled={ !title || !genres}
                >
                    {movie ? 'Done' : 'Create'}
                </Button>
            </form>
        )
    }
}
