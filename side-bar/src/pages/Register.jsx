import React, { useContext, useState } from 'react'
import { LogInContext } from '../contexts/LogInProvider';

function Register() {
    const {logInHandler}=useContext(LogInContext);
    const [email,setEmail]=useState('');
    const  [password,setPassword]=useState('');

    return (
    <form className='form' onSubmit={(e)=>{
        e.preventDefault();
        logInHandler(email,password);
    }}>
        <input type="email" name="email" className='input-field email' placeholder='email@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="password" className='input-field password'  onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" value="submit" className='submit-button'/>
    </form>
    )
}

export default Register