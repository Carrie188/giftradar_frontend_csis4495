import React from 'react'
import CardComponent from './CardComponent'

const GiftRecList = () => {
  return (
      <div className='list_style'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
       </div>
    </div>
  )
}

export default GiftRecList