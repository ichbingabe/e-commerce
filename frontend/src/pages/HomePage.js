import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Rating from '../components/Rating'
import axios from 'axios'

export default function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const fetchData = async() =>{
      const { data } = await axios.get('http://127.0.0.1:8080/api/products')
      console.log(data)
      setProducts(data) 
    }
    fetchData()
    console.log(products)
  }, [])

  return (
    <div>
      <div className="row center">
        <React.Fragment>
          {products.map((product) =>
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
