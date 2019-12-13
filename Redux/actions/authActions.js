const loginUser = (bool) => {
    return {
        type: "UPDATE_MODE",
        bool
    }
}

const mainSidebar = (main) => {
    return {
        type: "UPDATE_SIDEBAR",
        main
    }
}

const createAccount = (create) => {
    return {
        type: "CREATE_ACCOUNT",
        create
    }
}

export {
    loginUser,
    mainSidebar,
    createAccount
}