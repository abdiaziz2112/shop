import React from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';



function ProductList(props) {
  // console.log(props.products);
  return (
    <div className='items-list-wrapper'>
      {
        props.products.map((product)=>
          <div className='item-card' key={product.id}>
            <Link to={`/products/${product.id}`} >
            <img className='item-list-image'
              
              src={product.image}
              alt={product.title}
            />
            </Link>

            <p> {product.title}</p>

          </div>
          )
      }

    </div>
  )
}

export default ProductList