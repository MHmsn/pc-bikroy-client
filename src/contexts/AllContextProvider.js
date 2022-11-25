import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AllContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
      }
    
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      }
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        })
        return () => {
          unsubscribe();
        }
      }, [])
    const allInfo = {
        login,
    }
    return (
        <AllContext.Provider value={allInfo}>{children}</AllContext.Provider>
    );
};

export default ContextProvider;