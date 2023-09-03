import {Outlet} from "react-router-dom";

const IndexLayout = () =>{


    return(
        <div className={"flex items-center justify-center w-full text-black"}>
            <div className={"w-full max-w-[500px] text-center py-8 px-3 h-[85vh]"}>
                <Outlet/>
            </div>
        </div>
    )
}



export default IndexLayout;