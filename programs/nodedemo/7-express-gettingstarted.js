const express = require('express');
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')    
})

app.delete('/:id', (req, res) => {
    res.send('Got a DELETE request ')
})

app.put('/:id', (req, res) => {
    res.send('Got a put request ')
})


app.listen(port, () => {
    console.log("server started on port ",port)
})