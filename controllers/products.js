
import Posts from "../models/postSchema.js";

const getProducts = async (req, res) => {
    const { title, price, description, dateOfSale } = req.query
    const queryObject = {}
    if (title) {
        queryObject.title = title
    }
    if (price) {
        queryObject.price = price
    }
    if (description) {
        queryObject.description = description
    }
    if (dateOfSale) {
        queryObject.dateOfSale = dateOfSale
    }


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit

    const myData = await Posts.find(queryObject).skip(skip).limit(limit)

    // console.log(queryObject)
    // console.log("hello Iam from Products api")
    res.status(200).json({ myData })

}



export default getProducts