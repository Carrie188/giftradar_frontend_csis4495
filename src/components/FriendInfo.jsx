import { useState, useEffect } from "react"
import React from 'react'
import AuthService from "../services/AuthService"
import UserService from "../services/UserService"

const FriendInfo = () => {
    const [newFriend, setNewFriend] = useState({name:"", age:0, gender:""})
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        setCurrentUser(AuthService.getCurrentUser());
        console.log("currentUser: "+currentUser.id)
    
    }, [])
    

    const addFriend = () =>{
        const userId = currentUser.id
        if(userId == null){
            alert("catch user Id FAILD")
        }else{
            console.log("userId: "+userId)
            UserService.addNewFriend(userId, newFriend).then((response)=>{

            }).catch((e)=>{
                console.log("add new friend faild!");
            })
        }
        

    }

    const handleChange = (e)=>{
        console.log(e.target);
        // get the target
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;
        if(fieldName == "age"){
            fieldValue = parseInt(fieldValue);
        }else{
            
        }
        // set value to the property of the object
        newFriend[fieldName] = fieldValue;
        // print the newPerson data
        console.log(newFriend);
    }



  return (
        <div className='form-style-5'>
            <form>
                <fieldset>
                    <legend><span class="number">1</span> Friend Info</legend>
                    <input type="text" name="name" placeholder="Friend Name *" onChange={handleChange}/>
                    <input type="number" name="age" placeholder="Friend Age *" onChange={handleChange}/>
                    <label for="job">Gender:</label>
                    <select id="gender" name="gender" onChange={handleChange}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    <label for="job">Friend Interests:</label>
                    <select id="job" name="field4">
                    <optgroup label="Indoors">
                    <option value="fishkeeping">Fishkeeping</option>
                    <option value="reading">Reading</option>
                    <option value="boxing">Boxing</option>
                    <option value="debate">Debate</option>
                    <option value="gaming">Gaming</option>
                    <option value="snooker">Snooker</option>
                    <option value="other_indoor">Other</option>
                    </optgroup>
                    <optgroup label="Outdoors">
                    <option value="football">Football</option>
                    <option value="swimming">Swimming</option>
                    <option value="fishing">Fishing</option>
                    <option value="climbing">Climbing</option>
                    <option value="cycling">Cycling</option>
                    <option value="other_outdoor">Other</option>
                    </optgroup>
                    </select>      
                </fieldset>
                <fieldset>
                    <legend><span class="number">2</span> Additional Info</legend>
                    <textarea name="field3" placeholder="About Your friend"></textarea>
                </fieldset>
                <input type="button" value="Apply" onClick={addFriend}/>
            </form>
        </div>

  )
}

export default FriendInfo