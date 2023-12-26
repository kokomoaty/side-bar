import { createContext, useState } from "react";
import axios from 'axios';
export const LogInContext=createContext();
export default function LogInProvider({children}){
    const [token,setToken]=useState(null);
    const [err,setErr]=useState(null);
    const logInHandler=(email,password)=>{
        let config = {
            method: 'post',
            url: 'https://clinic-api.appssquare.com/api/admin/login',
            data : {email,password}
          };
          axios.request(config).then((response)=>{
            console.log(response);
            setToken(response.data.token);
            setErr(null);
          }).catch((response)=>{
            console.log(response);
            setErr(response.message);
          });
    }
    const myValue={token,logInHandler,err}
    return(
        <LogInContext.Provider value={myValue}>
            {children}
        </LogInContext.Provider>
    )
}