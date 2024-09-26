const express = require('express')
const app = express()
const port = 3000

//middleware
userRoutes = require('./userRoutes')
roleRoutes = require('./roleRoutes')

app.use(express.json());
app.use('/api/user',userRoutes)
app.use('/api/role',roleRoutes)

app.listen(port, () => {
    console.log('server started on port ',port)
})  