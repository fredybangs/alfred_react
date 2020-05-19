import {
    GET_MOVIES,
    FILTER_MOVIES
}
from '../actions/types'

import {movies, genres} from '../movieData'
const initialState = {
    film: movies,
    genre: genres,
    movie: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            console.log('rexy');
            return {
                ...state
            }
        case FILTER_MOVIES:
            return {
                film: action.payload
            }
        default: 
            return state
    } 
}