import { combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import movieReducer from './movieReducer'

export default combineReducers({
        routing: routerReducer,
        movie: movieReducer
    });