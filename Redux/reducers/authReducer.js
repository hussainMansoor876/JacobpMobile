const reducer = (state = {}, action) =>{
    switch(action.type){
        case "UPDATE_MODE": {
            return {...state, bool: action.bool}
        }
        default: {
            return state;
        }
    }
}
export default reducer;