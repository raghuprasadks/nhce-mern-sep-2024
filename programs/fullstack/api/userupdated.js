const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'merncsegpedb';
var client = require('mongodb')
const MongoClient = client.MongoClient;
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt'); // Import the bcrypt package

app.use(cors())
app.use(express.json())

app.get('/user', (req, res) => {
    res.send('welcome to user api')
})

const connectdb = async () => {
    console.log("connecting to db....  ")
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
}

// Method to check if user exists by email
const userExists = async (db, email) => {
    const user = await db.collection('users').findOne({ email: email });
    return user !== null;
}

app.post('/user', async (req, res) => {
    const user = req.body;
    const db = await connectdb();
    
    // Check if user already exists
    if (await userExists(db, user.email)) {
        return res.status(400).send('User already exists');
    }
    
    // Hash the password before saving
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
    
    const result = await db.collection('users').insertOne(user);    
    res.send("user created successfully")
})

// Login method
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const db = await connectdb();
    
    // Find the user by email
    const user = await db.collection('users').findOne({ email: email });
    
    if (!user) {
        return res.status(404).send('User not found');
    }
    
    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
        return res.status(401).send('Invalid password');
    }
    
    res.send('Login successful');
})


app.listen(port, () => {
    console.log('server is running on port ', port)
})