import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AllContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("isDark")));
  const [user, setUser] = useState(null);
  const [userFromDB, setUserFromDB] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(localStorage.getItem('accessToken') && currentUser){
        setLoading(true);
        fetch(`https://pcbikroy-server.vercel.app/user?email=${currentUser.email}`,{
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setUserFromDB(data);
      setLoading(false);
    })
      }
      else{
        setLoading(false);
      }
    
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const allInfo = {
    login,
    user,
    setUser,
    userFromDB,
    setUserFromDB,
    loading,
    providerLogin,
    createUser,
    logOut,
    dark,
    setDark
  };
  return <AllContext.Provider value={allInfo}>{children}</AllContext.Provider>;
};

export default ContextProvider;
