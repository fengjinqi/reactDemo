//import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable'
import  {reducer as HeaderReducer} from '../components/header/store'
const reducer = combineReducers({
    header:HeaderReducer
})


export default reducer