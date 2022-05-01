import { getAuth, signInWithPopup, FacebookAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { google } from '../../firebase/firebaseConfig'
import { types } from '../types/types'

export const loginEmailPass = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSyncrono(user.uid, user.displayName))
            })
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSyncrono(user.uid, user.displayName))
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(loginSyncrono(user.uid, user.displayName))
            })
    }
}

export const loginSyncrono = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

export const logoutSync = () => {
    return {
      type: types.logout
    }
  }
  
  export const logoutAsync = () => {
    return (dispatch) => {
      const auth = getAuth()
      signOut(auth)
        .then(({ user }) => {
          dispatch(logoutSync)
          console.log(user, 'Adios')
        })
        .catch(error => {
          console.log(error)
        })
    }
}