import React from 'react'
import data from '../data'
import Product from '../components/Product'

export default function HomePage() {
  const produto = [
    {
      _id: '1',
      name: 'Slim Shirt',
      category: 'Shirts',
      image: './images/p1.jpg',
      price: 60,
      brand: ' Nike',
      rating: 4.5,
      numReviews: 10
    },
    {
      _id: '2',
      name: 'Fit Shirt',
      category: 'Shirts',
      image: './images/p1.jpg',
      price: 50,
      brand: ' Nike',
      rating: 4.2,
      numReviews: 5
    }
  ]

  return (
    <div>
        <div className="row center">
            {produto.map((product) => (
            <Product key={product._id}/>
            ))}
        </div>
</div>
  )
}
