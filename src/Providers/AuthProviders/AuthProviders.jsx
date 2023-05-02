import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = () => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }

    const signInWithGithub = () => {

        return signInWithPopup(auth, githubProvider)

    }

    const authInfo = {
        createUser,
        loginUser,
        signInWithGoogle,
        signInWithGithub

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;