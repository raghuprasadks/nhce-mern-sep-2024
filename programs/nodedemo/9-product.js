const express = require('express')
const app = express()
//middleware 
app.use(express.json());
const port = 3000
products = []

app.post('/product',(req,res)=>{
    console.log("post ",req.body)
    let product = req.body
    products.push(product)
    res.send("product added successfully")
})
app.get('/product',(req,res)=>{
    res.send(products)
})
app.get('/product/:id',(req,res)=>{
    let id = req.params.id
    let product = products.filter(product => product.id == id)
    res.send(product)
})

app.delete('/product/:id',(req,res)=>{
    let id = req.params.id
    product = products.filter((product)=>product.id != id)
    let msg = {
        message : `product with id ${id} deleted successfully`
    }
    res.send(msg)
})

app.put('/product/:id',(req,res)=>{
    let id = req.params.id
    let product = req.body
    products = products.map((t)=>{
        if(t.id == id){
            return product
        }
        return t
    })
    res.send("product updated successfully")
})

app.get('/productprice',(req,res)=>{
    console.log("product price")
    console.log("query : ",req.query)
    let minprice = req.query.min
    let maxprice = req.query.max
    let productspricerange = products.filter(product => product.price >= minprice && product.price <= maxprice)
    res.send(productspricerange)
})

app.listen(port, () => {
    console.log('server started on port ',port)
})