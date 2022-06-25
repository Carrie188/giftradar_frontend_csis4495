import React, { useEffect, useState } from 'react'
import AuthService from '../services/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory, Link} from 'react-router-dom'
const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);  
  

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if(user){
            setCurrentUser(user);
            setLoginStatus(true);
        }else{
            setLoginStatus(false);
        }
    }, [loginStatus])

    const logout = ()=>{
        AuthService.logout();
        setLoginStatus(false);
    }
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            GiftRadar
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logout}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                    Signup
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                    Login
                    </Link>
                </li>

              
            </div>
          )}

        </nav>
    </div>
  )
}

export default Header