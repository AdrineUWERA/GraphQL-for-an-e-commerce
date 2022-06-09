// const { products } = require('../db'); 
// resolvers are like functions that are used to return data

exports.Category = {
    products: (parent, {filter}, context) => {
        const products = context.db.products;
        // const categoryId = parent.id;
        let categoryProducts = products;
        if(filter){
            if(filter.onSale === true){
                categoryProducts = categoryProducts.filter((product) => {
                    return product.onSale;
                });
            }
        }
        return categoryProducts;
        // return products.filter((product) => product.categoryId === categoryId);
    },
}