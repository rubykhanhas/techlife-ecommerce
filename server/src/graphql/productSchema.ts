import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLSchema} from 'graphql';

const ProductType = new GraphQLObjectType({
    name: 'productQueryType',
    fields: () => ({
        _id: {type: GraphQLString},
        images: {type: new GraphQLList(GraphQLString)},
        title: {type: GraphQLString},
        category: {type: GraphQLString},
        brand: {type: GraphQLString},
        price: {type: GraphQLInt},
        sales: {type: GraphQLInt},
        salePrice: {type: GraphQLInt},
        sold: {type: GraphQLInt},
        remain: {type: GraphQLInt},
        shortDes: {type: GraphQLString},
        longDes: {type: GraphQLString}
    })
})

export {ProductType};