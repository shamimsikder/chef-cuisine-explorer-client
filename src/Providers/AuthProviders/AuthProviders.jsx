import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const signInWithGithub = () => {

        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)

        })

        return () => {
            return unsubscribe()
        }

    }, [])

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    
    }

    const authInfo = {

        user,
        loading,
        createUser,
        logInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;