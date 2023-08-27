const INIT_STATE = {
    carts: []
}
export const cardtreducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "ADD_CART":
                return {
                    ...state, carts: ["carts"]
                }
        default:
            return state
    }
}