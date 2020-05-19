import React, { Component, Fragment } from 'react';
import {Header, MovieMenu} from './Layouts'
import Movies from './Movies'
import { movies, genres } from '../movieData';
import AppFooter from '../MainPage/modules/views/AppFooter'


export default class MovieRender extends Component {

  state = {
    movies,
    movie: {}
  }

  //Finds every movie in the movie data and return them as grouped by genre array
  getMoviesByGenre(){
    const initialMovies = genres.reduce((movies, genres) => ({
      ...movies, [genres] : []
    }), {})

     return (
      Object.entries(
        this.state.movies.reduce((movies, movie) => {
          const {genres} = movie

          movies[genres] = movies[genres] ? [...movies[genres], movie] : [movie]

          return movies
        }, initialMovies)
      )
    )
  }

  //set the state of the movie category or genre
  getCategory = category =>
    this.setState ({
      category
    })

  getMovieDetails = id =>
    this.setState(({movies}) => ({
      movie: movies.find(mov => mov.id === id),
      editMode: false
    }))

  handleMovieCreate = movie =>
    this.setState(({movies}) => ({
      movies: [
        ...movies, movie
      ]
    }))

  handleMovieDelete = id =>
    this.setState(({movies, movie, editMode}) => ({
      movies: movies.filter(mov => mov.id !== id),
      editMode: movie.id === id ? false : editMode,
      movie: movie.id === id ? {} : movie,
    }))
  
  handleMovieSelectEdit = id => 
    this.setState(({movies}) => ({
      movie: movies.find(mov => mov.id === id),
      editMode: true
    }))

  handleMovieEdit = movie => 
    this.setState(({movies}) => ({
      movies: [
      ...movies.filter(mov => mov.id !== movie.id),
      movie
      ],
      movie
    }))
  
  render(){
    const movies = this.getMoviesByGenre(),
    {category, movie, editMode} = this.state

    return(
      <Fragment>
        <Header 
          genres={genres}
          onMovieCreate={this.handleMovieCreate}
        />

        <MovieMenu
          genres={genres}
          category={category}
          onSelect={this.getCategory}
        />

        <Movies 
          movies={movies}
          category={category}
          genres={genres}
          onDelete={this.handleMovieDelete}
          onSelect={this.getMovieDetails}
          onSelectEdit={this.handleMovieSelectEdit}
          editMode={editMode}
          onEdit={this.handleMovieEdit}
          movie={movie}
        />
        <AppFooter/>
      </Fragment>
    )
  }
}