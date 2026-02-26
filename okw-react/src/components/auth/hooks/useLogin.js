import axios from "axios"
import { useState, useEffect } from "react";
import endpoints from "../../../endpoints";
import apic from "../../../axiosAPI/apic";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router";
const cookies = new Cookies()

const useLogin = () => {
  const endpoint = endpoints['auth']['login'];
  const csrftoken = cookies.get('csrftoken')
  let navigate = useNavigate('')
  const login = (email, password) => {
    axios.post(
      endpoint,
      { email, password },
      {
        withCredentials:true,
        headers:{
          'X-CSRF-TOKEN':csrftoken
        }
      }
    ).then((data)=>{
      if (data.status === 200){
        navigate('/')
      }
    });
    
  };

  return { login };
};


export default useLogin;