import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);

    const createUser=(email,password)=>{
        setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password);
         
    }

    const SignIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
   
    const logOut=()=>{
        setLoading(true);
      return  signOut(auth);
    }

  useEffect(()=>{
   const Unssubscribe= onAuthStateChanged(auth,currntUSer=>{
        setUser(currntUSer);
        setLoading(false);
    });
 return ()=>{
    Unssubscribe();
 }
  } ,[])
    const AuthInfo = {createUser,user,logOut,SignIn,loading}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;