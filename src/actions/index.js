import {
    GET_MOVIES,
    FILTER_MOVIES
}
from './types'


export const getMovies = () => dispatch => 
    dispatch({
        type: GET_MOVIES
})

export const filterMovies = (movies) => {
    return{
        type: FILTER_MOVIES,
        payload: movies
    }
}