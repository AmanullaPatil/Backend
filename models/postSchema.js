import mongoose from "mongoose"


const { Schema } = mongoose;


const postsSchema = new Schema({


    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true

    },
    sold: {
        type: Boolean,
        required: true
    },
    dateOfSale: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    }



})

const Posts = mongoose.model('Posts', postsSchema)

export default Posts;