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

export {
    loginUser,
    mainSidebar
}