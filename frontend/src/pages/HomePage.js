import React from 'react'
import data from '../data'
import Product from '../components/Product'
import Rating from '../components/Rating'

export default function HomePage() {
  return (
    <div>
      <div className="row center">
        <React.Fragment>
          {data.products.map((product) =>
              <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt={product.name} />
              </a>
              <div className="card-body">
                  <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                  </a>
                  <Rating rating={ product.rating } numReviews={ product.numReviews }/>
                  <div className="desccription">{product.description}</div>
                  <div className="price">$ {product.price}</div>
                  <div className="quatity"></div>
              </div>
          </div>
          )}
        </React.Fragment>  
      </div>
    </div>
  )
}
