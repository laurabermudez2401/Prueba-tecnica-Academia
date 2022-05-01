import { types } from "../types/types";

const inicialState = {

    ingredient:[]
}

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                displayname: action.payload.displayname,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state
    }
}

export const IngredientReducer = (state = inicialState, action) => {
    switch (action.type) {
        case types.newIngredient:
            return {
                ingredient: [action.payload]
            }

        case types.listIngredient:
            return {
                ingredient: [...action.payload]
            }
        default:
            return state
    }
}