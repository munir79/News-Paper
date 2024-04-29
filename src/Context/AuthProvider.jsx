import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const auth = getAuth(app);

    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password);
    }

    const SignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
   
    const logOut=()=>{
      return  signOut(auth);
    }

  useEffect(()=>{
   const Unssubscribe= onAuthStateChanged(auth,currntUSer=>{
        setUser(currntUSer);
    });
 return ()=>{
    Unssubscribe();
 }
  } ,[])
    const AuthInfo = {createUser,user,logOut,SignIn}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;