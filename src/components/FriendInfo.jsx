import React from 'react'

const FriendInfo = ({handleAddFriend, handleChange}) => {
    

  return (
        <div className='form-style-5'>
            <form>
                <fieldset>
                    <legend><span className="number">1</span> Friend Info</legend>
                    <input type="text" name="name" placeholder="Friend Name *" onChange={handleChange}/>
                    <input type="number" name="age" placeholder="Friend Age *" onChange={handleChange}/>
                    <label htmlFor="job">Gender:</label>
                    <select id="gender" name="gender" onChange={handleChange}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    <label htmlFor="job">Friend Interests:</label>
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
                    <legend><span className="number">2</span> Additional Info</legend>
                    <textarea name="field3" placeholder="About Your friend"></textarea>
                </fieldset>
                <input type="button" value="Apply" onClick={()=>handleAddFriend()}/>
            </form>
        </div>

  )
}

export default FriendInfo