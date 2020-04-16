import React, { Component, Fragment } from 'react';
import {Header, Footer} from './Layouts'
import Movies from './Movies'
import { movies, genres } from '../movieData';


export default class App extends Component {

  state = {
    movies,
    movie: {}
  }

  //Finds every movie in the movie data and return them as grouped by genre array
  getMoviesByGenre(){
    return (
      Object.entries(
        this.state.movies.reduce((movies, movie) => {
          const {genres} = movie

          movies[genres] = movies[genres] ? [...movies[genres], movie] : [movie]

          return movies
        }, {})
      )
    )
  }

  //set the state of the movie category or genre
  getCategory = category => {
    this.setState ({
      category
    })

  }

  getMovieDetails =id => {
    this.setState(({movies}) => ({
      movie: movies.find(mov => mov.id ===id)
    }))
  }


  render(){
    const movies = this.getMoviesByGenre(),
    {category, movie} = this.state

    return(
      <Fragment>
        <Header/>

        <Footer 
          genres={genres}
          category={category}
          onSelect={this.getCategory}
        />

        <Movies 
          movies={movies}
          category={category}
          onSelect={this.getMovieDetails}
          movie={movie}
        />
      </Fragment>
    )
  }
}