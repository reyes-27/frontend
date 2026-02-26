import React, { useEffect } from 'react'
import endpoints from '../../../endpoints'
import axios from 'axios'
const useCSRF = () => {
    const endpoint = endpoints['auth']['get_csrf']
        const fetchCSRFToken = async () => {
            await axios.get(endpoint, { withCredentials: true })
        }
        fetchCSRFToken()

}

export default useCSRF
