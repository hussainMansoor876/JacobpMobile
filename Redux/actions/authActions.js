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

const SideView = (side) => {
    return {
        type: "SIDE_VIEW",
        side
    }
}

export {
    loginUser,
    mainSidebar,
    createAccount,
    SideView
}