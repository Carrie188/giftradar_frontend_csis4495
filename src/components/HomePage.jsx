import React from 'react'
import Header from './Header'
import GiftRecList from './GiftRecList'
import FriendInfo from './FriendInfo'
import { useState, useEffect } from "react"
import {useHistory, Link} from 'react-router-dom'
import UserService from '../services/UserService'

const HomePage = () => {
    const [newFriend, setNewFriend] = useState({name:"", age:0, gender:""})

    const { push } = useHistory();


    const handleAddFriend = () =>{
        const userId = localStorage.getItem('userId')
        console.log("userId "+userId)
        if(newFriend.name =="" || newFriend.gender =="" || newFriend <=0){
            alert("the information can not be empty!")
        }else if(userId == null){
            
            alert("Please login first")
            push('/login')
        }else{
            // console.log("userId: "+userId)
            UserService.addNewFriend(userId, newFriend).then((response)=>{
               
                alert("add new friend successfully!!")
            }).catch((e)=>{
                console.log("add new friend faild!");
            })
        }
        

    }

    const handleChange = (e)=>{
        console.log(e.target);
        // get the target
        const fieldName = e.target.getAttribute('name');
        var fieldValue = e.target.value;
        if(fieldName == "age"){
            fieldValue = parseInt(fieldValue);
        }
        // set value to the property of the object
        newFriend[fieldName] = fieldValue;
        // print the newPerson data
        console.log(newFriend);
    }





    
  return (
    <div>      
        <Header/>
        <div className='home_layout'>
            <FriendInfo handleChange={handleChange} handleAddFriend={handleAddFriend}/>
            <GiftRecList/>
        </div>
    </div>
  )
}

export default HomePage