import { useApi } from "./useApi"
import endpoints from "../../../endpoints"
import AuthClientStore from "../AuthClientStore"
export const useAuthApi = () => {
    const {sendRequest, sendProtectedRequest} = useApi()
    const login = async (email:string, password:string) =>{
        const response = await sendRequest(endpoints.auth["token-obtain-pair"], {
            'email':email,
            'password':password,
        })
        AuthClientStore.setAccessToken(response.data.access_token)
        AuthClientStore.setRefreshToken(response.data.refresh_token)
        return response
    }

    const logout = () => {
        AuthClientStore.removeAccessToken();
        AuthClientStore.removeRefreshToken();
    }

    const refreshTokens = async () =>{
        const response = await sendProtectedRequest(endpoints.auth["token-refresh"], AuthClientStore.getRefreshToken())
        AuthClientStore.setRefreshToken(response.data.refresh_token)
        AuthClientStore.setAccessToken(response.data.access_token)

    }

}
