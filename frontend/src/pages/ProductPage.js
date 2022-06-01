import React from 'react'
import data from '../data'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'


export default function ProductPage() {
  const { id } = useParams()
  const product = data.products.find(x => x._id === (id))
  if(!product){
    return (
      <div className='notFound'>
        Page not Found
      </div>
    )
  }
  return (
    <div>
        <div className="row">
          <div className="col-2">
            <img className="large"src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating rating={product.rating} numReviews={product.numReviews} />
              </li>
              <li>
                Price : ${product.price}
              </li>
              <li>
                {product.description}
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className='card card-body'>
              <ul>  
                <li>
                  <div className='row'>
                    <div>Price</div>
                    <div className='price'>${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <div>Stock:</div>
                    <div>
                      {product.quantity > 0 ? (
                      <span className='success'>{product.quantity}</span>
                      ) : (
                      <span className='error'> Unavaileble </span>
                      )
                    }
                    </div>
                  </div>
                </li>
                <li>
                  {product.quantity > 0 ? (
                    <button className='primary block'>Add to Cart</button>
                  ) : (
                    <button className='primary block'>Tell me when is available</button>
                  )
                }
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
