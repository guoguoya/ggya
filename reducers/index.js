import { combineReducers } from 'redux'
import { leftToggleActive } from './leftToggle'

import { fetch_post , receive_post, request_post} from '../actions/actions'

function fetchState(state = { data: {} , status: 0 } , action){
    switch(action.type) {
        case request_post:
            return Object.assign({}, state, { status: action.status })
        case receive_post: 
            return Object.assign({}, state, { status: action.status , data: action.data })
        default:
            return state;
    }
}

const App = combineReducers({
    leftToggleActive,
    fetchState
});

export default App;