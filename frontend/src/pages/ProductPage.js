import React from 'react'
import data from '../data'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()
  const {product} = data.products.find((x) => x._id === (id))
  return (
    <div>
        <div className="row">
          <div className="col-2">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="col-1">

          </div>
          <div className="col-1">

          </div>
        </div>
    </div>
  )
}
