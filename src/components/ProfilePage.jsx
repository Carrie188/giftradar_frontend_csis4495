import React , { useState, useEffect} from 'react'
import AuthService from '../services/AuthService';
import Header from './Header';
import FriendsList from './FriendsList'
// 

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const user = AuthService.getCurrentUser();

      if(user){
        setCurrentUser(user)
      }
      console.log(localStorage.getItem('user'))
    
     
    }, [])
    

  return (
    <div>
        <Header/>
        <div className="info_layout">
            <div className="form-style-5">
            <label>
            <h3>
            Welcome back!  <strong>{currentUser.username}</strong> 
            </h3>
            </label>
            <p>
            <strong>Id:</strong>{" "}
            {currentUser.id}
            </p>
            <p>
            <strong>Email:</strong>{" "}
            {currentUser.email}
            </p>
            <p>
            <strong>Token:</strong>{" "}
            {/* {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 10)} */}
            </p>
            </div>
            <FriendsList/>
        </div>
            
        
    </div>
  )
}

export default ProfilePage