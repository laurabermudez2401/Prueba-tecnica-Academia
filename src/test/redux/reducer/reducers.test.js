import { IngredientReducer, loginReducer } from "../../../redux/reducers/reducers"
import { types } from "../../../redux/types/types"


describe('Probar Login Reducer', () => {
    test('debe retornar el usuario', () => { 
        const inicialState = {}
        const user = {
            id: "laura",
            displayname: "lau9205",
            logged: true,
        }
        const action ={
            type: types.login,
            payload: user
        }
        const state = loginReducer(inicialState, action)
        console.log(state)
        expect(state).toEqual(user)
    })
    test('verificar ingrediente agregado',() => {
        const inicialState = []
        const ingredient= {
            product: "Zanahoria",
            brand: "campo",
            items: "1",
            price: "2.55",
            quantity: "2 k"
         }
         const action = {
             type: types.newIngredient,
             payload: ingredient
         }
         const state = IngredientReducer(inicialState, action)
        //  console.log(state);
         expect(state.ingredient).toEqual([ingredient])
     })
    
     test('debe mostrar el usuario en false',()=>{
        const action={
          type:types.logout,
        }
        const state = loginReducer({logged:false, email:"lizdelga001@gmail.com"}, action)
        expect(state).toEqual({logged:false})
    })
    test('probar estado por defecto de login', () => { 
        const inicialState = {
           id: "laura",
           displayname: "laura9205"      
        }
        const action = {type:types.prueba}
        const state = loginReducer(inicialState, action)
        expect(state).toEqual(inicialState)

     }) 
     test('probar estado por defecto del ingrediente', () => { 
        const inicialState = {
            product: "Zanahoria",
            brand: "campo",
            items: "1",
            price: "2.55",
            quantity: "2 k"
        }
        const action = {type:types.prueba2}
        const state = IngredientReducer(inicialState, action)
        expect(state).toEqual(inicialState)

     })        
    
})