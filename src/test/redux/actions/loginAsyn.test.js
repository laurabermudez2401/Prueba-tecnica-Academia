import { loginSyncrono, logoutSync } from "../../../redux/actions/loginAsynSyn"
import { types } from "../../../redux/types/types"


describe('prueba al action del login sincrono', ()=>{
 test('validar login sincrono', () => {
    const id = "laura"
    const displayName = "laura9205"
    const loginAction = loginSyncrono(
        id, displayName
    ) 
    expect(loginAction).toEqual({
        type:types.login,
        payload:{
            id,
            displayName
        }
    }) 
  })
  test('validar logout', () => { 
      const logoutAction = logoutSync()
      expect(logoutAction).toEqual({type: types.logout})
   })
   
})