import React from 'react'
import giftImage from '../common/image.jpeg'

const CardComponent = () => {
    
  return (
    <div className="col">
            <div className="card">
            <img src={giftImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Gift title</h5>
                    <p className="card-text">This is a description.</p>
                </div>
            </div>
    </div>
  )
}

export default CardComponent