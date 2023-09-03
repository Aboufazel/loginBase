import React from "react"
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";


const BeforeLogin = () => {

    const navigate = useNavigate();
    return(
        <div className={"flex flex-col items-center justify-center gap-6 h-full"}>
            <h1 className={"font-bold text-blue-800"}>
                welcome to the user view application
            </h1>

            <p className={"font-thin"}>
                if you want use better you must be login in to the app
            </p>

            <Button  onClick={()=>navigate("/login")}>
                Login
            </Button>
        </div>
    )
}


export default BeforeLogin;