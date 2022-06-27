import { useEffect } from "react";
import React from 'react'

const FriendsList = ({friends, handleDelete}) => {



    useEffect(() => {
      console.log(friends);

    }, [])
    

  return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Friend No.</td>
                    <td>Friend Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {friends.map((friend, key)=>
                    (<tr key={key}>
                        <td>{friend.id}</td>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.gender}</td>
                        <td>
                            <button type="button" onClick={()=>handleDelete(friend.id)}>remove</button>
                        </td>
                    </tr>)
                )}
            </tbody>
        </table>

    </div>
  )
}

export default FriendsList