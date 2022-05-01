import { IngredientReducer } from "../../../redux/reducers/reducers"
import { types } from "../../../redux/types/types"


describe('prueba a los types.js', ()=>{
    test('comparar objetos de types', () => { 
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            newIngredient: "Nuevo Ingrediente",
            listIngredient: "Listar Ingredientes",
            register: "registerNewUser"
        })
     })
    

})