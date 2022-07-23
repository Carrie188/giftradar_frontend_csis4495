import React, {useEffect} from 'react'
import RatingStars from './RatingStars'




const CardComponent = ({product,handleClick}) => {
    
 useEffect(() => {
  console.log(product.ASIN)
 }, [])



  return (
    <div className="col" >
            <div className="card">
            <img src={product.Image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text" onClick={()=>handleClick()}>{product.Title}</h5>
                    <p className="card-text"><span className='price'>Price: </span>{product.Price}</p>
                    <p className="card-text "><RatingStars ratingData={product.Ratings}/></p>
                </div>
            </div>
    </div>
  )
}

export default CardComponent