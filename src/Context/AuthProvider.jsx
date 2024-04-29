import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const auth = getAuth(app);

    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password);
    }
   
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    } ,[])
    const AuthInfo = {createUser,user}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;