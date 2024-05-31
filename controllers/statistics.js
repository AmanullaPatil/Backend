import Posts from "../models/postSchema.js";


const getStatistics = async (req, res) => {
    // const { dateOfSale } = req.query;
    // const queryObject = {}
    // if (dateOfSale) {
    //     queryObject.dateOfSale = dateOfSale
    // }
    // const myData = await Posts.find({ queryObject })
    // console.log(queryObject)
    // res.status(200).json({ myData })

    const { dateOfSale, sold } = req.query
    const queryObject = {}

    if (dateOfSale) {
        queryObject.dateOfSale = dateOfSale
    }
    if (sold) {
        queryObject.sold = sold
    }
    const products = await Posts.aggregate([
        {
            $group:
            {
                _id: "$price",
                totalAmount: { $sum: { $multiply: ["$price"] } },
                count: { $sum: 1 }
            }
        }

    ])
    console.log(products)

    const myData = await Posts.find(queryObject)
    // console.log(queryObject)
    // console.log("hello Iam from statistic api")
    res.status(200).json({ myData })


}


export default getStatistics