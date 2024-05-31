import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import products from './routes/products.js'
import totalsale from './controllers/statistics.js'
import getPosts from './data/thirdpartyData.js'


const app = express()
dotenv.config()

const PORT = process.env.PORT


const connectToMongo = () => {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on('connected', () => console.log('Connected'));
    mongoose.connection.on('error', (err) => console.log('Connection failed with - ', err));
}


connectToMongo()



app.get('/', (req, res) => {
    res.send('hii this is home page')
})

app.use('/api/products', products)
app.use('/api/sale', totalsale)




app.listen(PORT, () => {
    console.log("server running ")
})
// getPosts()


