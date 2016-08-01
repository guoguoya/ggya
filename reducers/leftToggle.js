import { left_toggle_active } from '../actions/actions'



export  function leftToggleActive (state = 0 , action) {
    switch (action.type) {
        case left_toggle_active:
            return action.index;
        default:
            return state;
    }
}