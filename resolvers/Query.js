// const { products, categories } = require('../db');

const { reviews } = require("../db");

// resolvers are like functions that are used to return data
exports.Query = {
    hello: () => {
        return "World!!!";
    },
    
    products: (parent, {filter}, {db}) => {
        let filterProducts = db.products;
        console.log(db.reviews)
        if(filter){
            const {onSale, avgRating} = filter;
            if(onSale === true){
                filterProducts = filterProducts.filter((product) => {
                    return product.onSale;
                });
            }
            // console.log(avgRating);

            if([1,2,3,4,5].includes(avgRating)){
                // console.log("yes")
                filterProducts = filterProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach(review => {
                        if(review.productId === product.id){
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });

                    const avgProductRating = sumRating/ numberOfReviews;

                    return avgProductRating >= avgRating;

                })
            }
        }
        return filterProducts;
    },

    product: (parent,args,{db}) => {
        const productId = args.id;
        //simplified extraction
        // const { id } = args;
        return product = db.products.find(product => product.id === productId);
        
    },

    categories: (parent,args,{db}) => {
        return db.categories;
    },

    category: (parent, {id}, {db}) => {
        // const { id } = args;
        return db.categories.find((category) => category.id === id);
    }
}