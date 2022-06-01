import React from 'react'
import Rating from './Rating'

export default function Product(props) {
  const product = props
  return (
    <div key={props._id} className="card">
        <a href={`/product/${props._id}`}>
            <img className="medium" src={props.image} alt={props.name} />
        </a>
        <div className="card-body">
            <a href={`/product/${props._id}`}>
                <h2>{props.name}</h2>
            </a>
            <Rating rating={ props.rating } numReviews={ props.numReviews }/>
            <div className="desccription">{props.description}</div>
            <div className="price">{props.price}</div>
            <div className="quatity"></div>
        </div>
    </div>
  )
}