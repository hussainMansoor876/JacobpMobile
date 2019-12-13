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
        default: {
            return state;
        }
    }
}
export default reducer;