import AuthClientStore from "../AuthClientStore";
import { ApiMethod } from "../../../features/types";
import endpoints from "../../../endpoints";
import axios from "axios";


const sendRequest = async (
    path: string,

    body?: any,
    authToken?: string | null,

) => {

    const response = await axios.post(
        path,
        ...(body && {body: JSON.stringify(body)}),
        {
            headers:{
                'Content-Type':'application/json',
                ...(authToken && {Authorization: `JWT ${authToken}`})
            }
        }
    )
    if (response.status == 400){
        throw response
    }
    return response
    
}

const sendProtectedRequest = (
    path:string,
    body?: any,
    useRefreshToken = false,
) => {
    const authToken = useRefreshToken
    ? AuthClientStore.getRefreshToken()
    : AuthClientStore.getAccessToken()
    if (!authToken){
        throw new Error('No auth token found')
    }
    return sendRequest(path, body, authToken)
}

export const useApi = () => {
    return {sendRequest, sendProtectedRequest};
}