const { gql } = require('apollo-server');

// typeDefs are like a schema (Structure of data)
// Scalar types ex: Boolean, String, Int, Float


exports.typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category

        # String here is a scalar type
        # we can use "!" to restrict NULL VALUES (non-nullable) after the DATA TYPE ex: String!, [String!]!

    }

    type Mutation{
        addCategory(input: AddCategoryInput): Category!
        addProduct(input: AddProductInput): Product!
        addReview(input: AddReviewInput): Review!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
        updateCategory(id: ID!, input: UpdateCategoryInput): Category
        updateProduct(id: ID!, input: updateProductInput): Product
        updateReview(id: ID!, input: updateReviewInput): Review
        
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category {
        # we only want to expose the name and Id
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]!

    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }

    input UpdateCategoryInput {
        name: String!
    }

    input AddProductInput { 
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: ID
    }

    input AddReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

    input updateProductInput { 
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: ID
    }

    input updateReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

`
