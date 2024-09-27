const express = require('express')
const app = express()
const cors = require('cors') // Import the cors package
const port = 3000
const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'merncsegpedb';
var client = require('mongodb')
const MongoClient = client.MongoClient;
const { ObjectId } = require('mongodb');
app.use(cors())
app.use(express.json())

const connectdb = async () => {
    console.log("connecting to db....  ")
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
} 

app.post('/customer', async (req, res) => {
    const customer = req.body;
    const db = await connectdb();
    const result = await db.collection('customer').insertOne(customer);
    res.send('customer added successfully');
});

app.get('/customer', async (req, res) => {
    const db = await connectdb();
    const result = await db.collection('customer').find().toArray();
    res.send(result);
})

app.get('/customer/:id', async (req, res) => {
    const id = req.params.id;
    const objectId = new ObjectId(id);
    const db = await connectdb();
    const result = await db.collection('customer').findOne({ _id: objectId });
    if (result) {
        res.send(result);
    } else {
        res.status(404).send('Customer not found');
    }
})

app.put('/customer/:id', async (req, res) => {
    const id = req.params.id;
    const objectId = new ObjectId(id);
    const customer = req.body;
    const db = await connectdb();
    const result = await db.collection('customer').updateOne({ _id: objectId }, { $set: customer });
    if (result.modifiedCount) {
        res.send('customer updated successfully');
    } else {
        res.status(404).send('Customer not found');
    }
})

app.delete('/customer/:id', async (req, res) => {
    const id = req.params.id;
    const objectId = new ObjectId(id);
    const db = await connectdb();
    const result = await db.collection('customer').deleteOne({ _id: objectId });
    if (result.deletedCount) {
        res.send('customer deleted successfully');
    } else {
        res.status(404).send('Customer not found');
    }
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
    })
