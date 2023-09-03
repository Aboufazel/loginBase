import {useQuery} from "@tanstack/react-query";
import {Spinner} from "@material-tailwind/react";

const AfterLogin = () => {
    async function getData() {
        const {data} = await getData();

        return data;

    }

    const {data, error, isLoading, isError} = useQuery({
        queryKey:['userInfo'],
        queryFn:getData,
        refetchIntervalInBackground:true,
    });


    if (isLoading) {
        return (
            <Spinner className="h-10 w-10" />
        )
    }


    if (isError) {
        return 'An error has occurred: ' + error.message
    }


    console.log(data)


    return(
        <div className={"flex flex-col w-full"}>
            after login
        </div>
    )
}


export default AfterLogin;