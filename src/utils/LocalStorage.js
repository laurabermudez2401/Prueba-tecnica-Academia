export const obtenerLocalStorage = () => {
    const ingredientStorage = localStorage.getItem('citas')
    if (ingredientStorage === null) {
        return undefined
    }
    return JSON.parse(ingredientStorage)
}

export const guardarLocalStorage = (state) => {
    const ingredientState = JSON.stringify(state)
    localStorage.setItem('risoto', ingredientState)
}