import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [auth,setAuth] = useState(false);
  const [admin,setAdmin] = useState(false);
  const [userName,setUserName] = useState(""); 
  const [password,setPassword] = useState(""); 
  const navigate = useNavigate();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(userName === "admin" && password === "admin123"){
        setAdmin(true);
    }
    else{
        setAuth(true);
    }
  }
  if(admin){
    navigate("/admin");
  }
  else if(auth){
    navigate("/chat");
  }
  else{
    return <div className="Login h-100">
        <div className="h4 p-3 bg-secondary text-white text-center">I Seek You</div>
        <div className="container-fluid d-flex justify-content-center align-items-center h-75">
            <div className="card bg-light w-50 h-75 shadow">
                <div className="card-header bg-secondary w-100">
                    <div className="h4 card-title text-center text-white">Login</div>
                </div>
                <div className="card-body w-100">
                    <div className='h5 text-secondary text-center'>Login to continue to ICQ</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating my-4 w-75 mx-auto">
                            <input type="text" name="username" id="username" placeholder='Username' className='form-control' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating my-4 w-75 mx-auto">
                            <input type="password" name="password" id="password" placeholder='Password' className='form-control border-0' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="w-25 mx-auto my-3">
                        <button type="submit" className='btn btn-outline-dark w-100 mx-auto'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  }
}

export default Login