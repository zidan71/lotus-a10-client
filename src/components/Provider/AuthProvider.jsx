import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { toast } from 'react-toastify';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut= () => {
        setLoading(true)
        toast.warn('log out success')
        return signOut(auth)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser , updatedData)
    }

    useEffect(()=> {

        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            console.log(currentUser)
            setUsers(currentUser);
            setLoading(false)
        })
        return()=> {
            unsubscribe()
        }

    },[])

    const authInfo = {
        users,
        setUsers,
        loading,
        setLoading,
        createUser,
        loginUser,
        updateUser,
        logOut,

    }

    return (

        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;