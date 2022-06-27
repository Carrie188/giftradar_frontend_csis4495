import React , { useState, useEffect} from 'react'
import AuthService from '../services/AuthService';
import Header from './Header';
import FriendsList from './FriendsList'

import UserService from '../services/UserService'
// 

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [friends, setFriends] = useState([
        {
            id:"22",
            name:"cade",
            gender:"male",
            age:22
        },{
            id:"24",
            name:"fff",
            gender:"female",
            age:33
        }
    ]);
    const [testList, setTestList] = useState({})

    const getFriendsList = ()=>{
        const userId = localStorage.getItem('userId');
        UserService.getUserInfo(userId).then((res)=>{
            setTestList(res.data.friends);
            console.log("array: "+res.data.friends)
        });
        // setTestList(data.friends);
        
        console.log("the first "+JSON.stringify(testList[0]));
        
    }

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("user")));
        getFriendsList();


    }, [])
    

    const handleDelete = (fId)=>{
        UserService.removeFriend(fId).then(()=>{
            const newFriends = friends.filter(f=>f._id !== fId);
  
            console.log("delete id "+ fId);
            setFriends([...newFriends]);
            alert("delete friend id "+fId )

        }).catch((err)=>{
            console("delete faild!")
        });
        
    }

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
            <strong>Username:</strong>{" "}
            {currentUser.username}
            </p>
            <p>
            <strong>Email:</strong>{" "}
            {currentUser.email}
            </p>
            
            </div>
            <FriendsList handleDelete={handleDelete} friends={friends} />
        </div>
            
        
    </div>
  )
}

export default ProfilePage