const express = require('express');
//const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'merncsegpedb';

/**
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    db = client.db(dbName);
    console.log('Connected to MongoDB');
});
 */

/**
app.post('/product', (req, res) => {
    const product = req.body;
    db.collection('products').insertOne(product, (err, result) => {
        if (err) throw err;
        res.send('Product added successfully');
    });
});
 */

const connectdb = async () => {
    console.log("connecting to db....  ")
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
} 

app.post('/product', async (req, res) => {
    const product = req.body;
    const db = await connectdb();
    const result = await db.collection('products').insertOne(product);
    res.send('Product added successfully');
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    db.collection('products').findOne({ _id: new ObjectId(id) }, (err, product) => {
        if (err) throw err;
        res.send(product);
    });
});

app.put('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = req.body;
    db.collection('products').updateOne({ _id: new ObjectId(id) }, { $set: product }, (err, result) => {
        if (err) throw err;
        res.send('Product updated successfully');
    });
});

app.delete('/product/:id', (req, res) => {
    const id = req.params.id;
    db.collection('products').deleteOne({ _id: new ObjectId(id) }, (err, result) => {
        if (err) throw err;
        res.send('Product deleted successfully');
    });
});

app.get('/productprice', (req, res) => {
    console.log("product price");
    console.log("query : ", req.query);
    let minprice = parseFloat(req.query.min);
    let maxprice = parseFloat(req.query.max);

    if (isNaN(minprice) || isNaN(maxprice)) {
        return res.status(400).send("Invalid min or max price");
    }

    db.collection('products').find({ price: { $gte: minprice, $lte: maxprice } }).toArray((err, products) => {
        if (err) throw err;
        res.send(products);
    });
});
/**
try {
    console.log('Connecting to MongoDB....');
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    console.log('Connected to MongoDB');
    if (err) throw err;
    db = client.db(dbName);
    console.log('Connected to MongoDB');

    // Start the server only after the database connection is established
    app.listen(port, () => {
        console.log('Server started on port', port);
    });
});
} catch (error) {
    console.error('Failed to connect to MongoDB', error);
}
 */

app.listen(port, () => {
    console.log('server started on port ', port);
});


