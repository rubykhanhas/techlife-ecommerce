import { Products } from '@/models/products';
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { ProductType } from './productSchema';

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: () => ({
        getProducts: {
            type: new GraphQLList(ProductType),
            args: {
                title: {type: GraphQLString || GraphQLInt},
                limit: {type: GraphQLInt},
                offset: {type: GraphQLInt},
                sort: {type: GraphQLString},
                sortDirection: {type: GraphQLInt},
                minPrice: {type: GraphQLInt},
                maxPrice: {type: GraphQLInt},
                category: {type: GraphQLString},
                brand: {type: GraphQLString}
            },
            resolve(parent, args){
                const title = new RegExp(args.title, 'img');
                const category = new RegExp(args.category, 'img');
                const brand = new RegExp(args.brand, 'img');
                return Products.find({title, category, brand})
                .lte('price', args.maxPrice || 9999)
                .gte('price', args.minPrice || 0)
                .sort({[args.sort]: args.sortDirection})
                .limit(args.limit)
                .skip(args.offset);
            }
        },
        getProductById: {
            type: ProductType,
            args: {
                _id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Products.findById(args._id);
            }
        },
        getCategories: {
            type: new GraphQLList(GraphQLString),
            resolve(){
                return Products.distinct('category');
            }
        },
        getBrands: {
            type: new GraphQLList(GraphQLString),
            resolve(){
                return Products.distinct('brand');
            }
        }
    })
})

const Root = new GraphQLSchema({
    query: RootQuery
})

export default Root;