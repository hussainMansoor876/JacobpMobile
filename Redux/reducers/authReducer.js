const reducer = (state = {}, action) =>{
    switch(action.type){
        case "UPDATE_MODE": {
            return {...state, bool: action.bool}
        }
        case "UPDATE_SIDEBAR": {
            return {...state, main: action.main}
        }
        default: {
            return state;
        }
    }
}
export default reducer;