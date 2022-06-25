import React from 'react'
import Header from './Header'
import GiftRecList from './GiftRecList'
import FriendInfo from './FriendInfo'

const HomePage = () => {
  return (
    <div>      
        <Header/>
        <div className='home_layout'>
            <FriendInfo/>
            <GiftRecList/>
        </div>
    </div>
  )
}

export default HomePage