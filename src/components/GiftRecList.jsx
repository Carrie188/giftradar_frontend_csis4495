import React, { useState, useEffect } from 'react'
import CardComponent from './CardComponent'
import stockData from '../data/recommend_products.json'

const GiftRecList = () => {

  const [products, setProducts] = useState(stockData);
 useEffect(() => {
   
 }, [products])
 

 const handleClick = ()=>{

}

  

  return (
      <div className='list_style'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products.map(
                (product, key) => <CardComponent key = {key} product = {product} handleClick={handleClick}/>
              )}
            

       </div>
    </div>
  )
}

export default GiftRecList