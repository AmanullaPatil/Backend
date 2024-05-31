
import fetch from 'node-fetch'
import Posts from '../models/postSchema.js'



async function getPosts() {
    const myPosts = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
    const products = await myPosts.json()

    for (let i = 0; i < products.length; i++) {
        // console.log(products[i]['id'])

        const post = new Posts({

            title: products[i]['title'],
            price: products[i]['price'],
            description: products[i]['description'],
            image: products[i]['image'],
            sold: products[i]['sold'],
            dateOfSale: products[i]['dateOfSale'],
            category: products[i]['category']

        })

        post.save();


    }
}


// getPosts()

export default getPosts;

