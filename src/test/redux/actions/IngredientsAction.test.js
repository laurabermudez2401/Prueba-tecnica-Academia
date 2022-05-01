import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import { AddIngredientAsyn, deleteIngredientAsyn, listIngredientAsyn } from "../../../redux/actions/IngredientsActions";
import { async } from "@firebase/util";
import { registerEmailPass } from "../../../redux/actions/RecordEmailPass";
import { loginFacebook, loginGoogle } from "../../../redux/actions/loginAsynSyn";

const middlewares = [thunk]
const mockstore = configureStore(middlewares)
const inicialState = {}
let store = mockstore(inicialState)

describe('Prueba de Agregar producto', ()=> {
    beforeEach(()=>{
        store = mockstore(inicialState)
    })    
    const ingredients = {
        product: "Zanahoria",
            brand: "campo",
            items: "1",
            price: "2.55",
            quantity: "2 k"
    }
    test('Agregar ingrediente Async', async()=>{
        await store.dispatch(AddIngredientAsyn(ingredients))
    })
    test('validar registro', async () => { 
       const userName = "laura"
       const email = "laura@gmail.com"
       const password = "lau123"
       await store.dispatch(registerEmailPass(userName, email, password))
    })
    
})