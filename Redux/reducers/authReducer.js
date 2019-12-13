const reducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_MODE": {
            return { ...state, bool: action.bool }
        }
        case "UPDATE_SIDEBAR": {
            return { ...state, main: action.main }
        }
        case "CREATE_ACCOUNT": {
            return { ...state, create: action.create }
        }
        case "SIDE_VIEW": {
            return {...state, side: action.side}
        }
        default: {
            return state;
        }
    }
}
export default reducer;