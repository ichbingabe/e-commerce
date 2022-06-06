import data from './data.js'
import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Server is up to date')
    
})

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.listen(port, ()=>{
    console.log('Server listening in:', port)
})