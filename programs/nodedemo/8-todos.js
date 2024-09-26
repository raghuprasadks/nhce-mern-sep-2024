const express = require('express')
const app = express()
//middleware 
app.use(express.json());
const port = 3000
todos = []

app.post('/todos',(req,res)=>{
    console.log("post ",req.body)
    let todo = req.body
    todos.push(todo)
    res.send("todo added successfully")
})
app.get('/todos',(req,res)=>{
    res.send(todos)
})
app.get('/todos/:id',(req,res)=>{
    let id = req.params.id
    let todo = todos.filter(todo => todo.id == id)
    res.send(todo)
})

app.delete('/todos/:id',(req,res)=>{
    let id = req.params.id
    todos = todos.filter((todo)=>todo.id != id)
    let msg = {
        message : `todo with id ${id} deleted successfully`
    }
    res.send(msg)
})

app.put('/todos/:id',(req,res)=>{
    let id = req.params.id
    let todo = req.body
    todos = todos.map((t)=>{
        if(t.id == id){
            return todo
        }
        return t
    })
    res.send("todo updated successfully")
})

app.listen(port, () => {
    console.log('server started on port ',port)
})