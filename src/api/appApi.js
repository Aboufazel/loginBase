import axios from "axios";

const BaseUrl = axios.create({
    baseURL: 'http://shserver.top:8080'
})
export const LoginApi = (uname , pass) =>{

    return BaseUrl.post(`/test/users/login` , {
        "uname":uname , "pass":pass
    })
}


export const NewKey = "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"