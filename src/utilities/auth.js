import {auth} from './firebase'
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from 'firebase/auth'

export const SignInWithFirebase = async(onSuccessfulLogin)=>{
    const googleProvider = new GoogleAuthProvider()

    await signInWithPopup(auth, googleProvider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
}


// sign out

export const logOut = (callback) => {
    const auth = getAuth()

    signOut(auth)
        .then(() => {
            console.log("Signed out")
            callback()
        })
        .catch(err => console.log(err))
}