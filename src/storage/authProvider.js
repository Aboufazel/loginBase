import React from "react";
import Storage from "./storage";
import {Navigate} from "react-router-dom";


const AuthProvider = ({children}) => {


    const storage = Storage()

    if (!storage.accessToken) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            {children}
        </>
    )

};

export default AuthProvider;