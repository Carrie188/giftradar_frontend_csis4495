import React from 'react'

const FriendsList = () => {
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
                <tr>
                    <td>Friend No.</td>
                    <td>Friend Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>
                        <button>remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default FriendsList