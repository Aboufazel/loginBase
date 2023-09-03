import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/indexLayout";
import Login from "../layout/login";
import AfterLogin from "../layout/afterLogin";
import BeforLogin from "../layout/beforLogin";
import AuthProvider from "../storage/authProvider";
import Chat from "../layout/chat";

const Root = () => {

    const router = createBrowserRouter([
            {
                path:'/',
                element:<IndexLayout/>,
                children:[
                    {
                        path : '/' ,
                        element:<BeforLogin/>
                    },{
                        path:'/login',
                        element:(
                            <Login/>
                        )
                    },
                    {
                        path: "/after",
                        element: (
                            <AuthProvider>
                                <AfterLogin/>
                            </AuthProvider>
                        )
                    },
                    {
                        path: "/chat",
                        element: (
                            <AuthProvider>
                                <Chat/>
                            </AuthProvider>
                        )
                    }
                ]
            }
    ])
    
    return(
        <RouterProvider router={router}/>
    )
}



export default Root;