import data from './data.js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

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
