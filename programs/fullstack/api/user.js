const express = require('express')
const app = express()
const port = 3000

const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'merncsegpedb';
var client = require('mongodb')
const cors = require('cors') // Import the cors package
const MongoClient = client.MongoClient;
//const { ObjectId } = require('mongodb');
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('welcome to user api')
}
)

const connectdb = async () => {
    console.log("connecting to db....  ")
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
}

app.post('/user',async (req,res)=>{
    const user = req.body;
    const db = await connectdb();
    const result = await db.collection('users').insertOne(user);    
    res.send("user created successfully")
})

app.listen(port,()=>{
console.log('server is running on port ',port)
})