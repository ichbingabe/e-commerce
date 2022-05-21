const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Server is up to date')
})

app.post('/api/product', (req, res) => {
    res.send(data.products)
})

app.listen(port, ()=>{
    console.log('Server listening in:', port)
})