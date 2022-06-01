const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Server is up to date')
})

app.post('/api/product', (req, res) => {
    const data = {
        products: [
            {
              _id: '1',
              name: 'Slim Shirt',
              category: 'Shirts',
              image: '/images/d1.jpg',
              price: 60,
              brand: ' Nike',
              rating: 4.5,
              numReviews: 10
            },
            {
              _id: '2',
              name: 'Fit Shirt',
              category: 'Shirts',
              image: '/images/d1.jpg',
              price: 50,
              brand: ' Nike',
              rating: 4.2,
              numReviews: 5
            },
            {
              _id: '3',
              name: 'Best Pants',
              category: 'Pants',
              image: '/images/d1.jpg',
              price: 70,
              brand: ' Nike',
              rating: 4.5,
              numReviews: 8
            }, {
              _id: '4',
              name: 'Best Pants',
              category: 'Pants',
              image: '/images/d1.jpg',
              price: 70,
              brand: ' Nike',
              rating: 4.5,
              numReviews: 8
            },
          ]
    }
    res.send(data.products)
})

app.listen(port, ()=>{
    console.log('Server listening in:', port)
})