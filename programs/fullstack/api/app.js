const express = require('express')
const app = express()
const port = 3000
customers=[]
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
    })

app.post('/customer',(req,res)=>{
    console.log("request body" ,req.body)
    customers.push(req.body)
    res.send('Customer is added')
    })

app.get('/customer',(req,res)=>{
    res.send(customers)
    })

app.get('/customer/:id',(req,res)=>{
    const id=req.params.id
    const customer=customers.find(c=>c.id==id)
    if(customer){
    res.send(customer)
    }else{
    res.status(404).send('Customer not found')
    }
    })

app.put('/customer/:id',(req,res)=>{
    const id=req.params.id
    const customer=customers.find(c=>c.id==id)
    if(customer){
    customer.name=req.body.name
    customer.location=req.body.location
    customer.email= req.body.email
    customer.mobile = req.body.mobile
    res.send('Customer is updated')
    }else{
    res.status(404).send('Customer not found')
    }
    })

app.delete('/customer/:id',(req,res)=>{
    const id=req.params.id
    const customer=customers.find(c=>c.id==id)
    if(customer){
    const index=customers.indexOf(customer)
    customers.splice(index,1)
    res.send('Customer is deleted')
    }else{
    res.status(404).send('Customer not found')
    }
    })

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
    })
