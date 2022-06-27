import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {

  let navigate = useNavigate();

  const goHome = () => {
    navigate('/', { replace: true });
  };
  
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button onClick={goHome} className='btn btn-primary'>
        Login
      </button>
    </div>
  )
}
