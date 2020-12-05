import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    {
        getCategories
    }
`;
const GET_BRANDS = gql`
    {
        getBrands
    }
`;
const GET_PRODUCTS_ID = gql`
    query GetProductsId(
        $title: String
        $category: String
        $brand: String
        $limit: Int
        $offset: Int
        $sort: String
        $sortDirection: Int
        $minPrice: Int
        $maxPrice: Int
    ) {
        getProducts(
            title: $title
            category: $category
            brand: $brand
            limit: $limit
            offset: $offset
            sort: $sort
            sortDirection: $sortDirection
            minPrice: $minPrice
            maxPrice: $maxPrice
        ) {
            _id
        }
    }
`
const GET_PRODUCTS = gql`
    query GetProducts(
        $title: String
        $category: String
        $brand: String
        $limit: Int
        $offset: Int
        $sort: String
        $sortDirection: Int
        $minPrice: Int
        $maxPrice: Int
    ) {
        getProducts(
            title: $title
            category: $category
            brand: $brand
            limit: $limit
            offset: $offset
            sort: $sort
            sortDirection: $sortDirection
            minPrice: $minPrice
            maxPrice: $maxPrice
        ) {
            _id
            title
            images
            price
            salePrice
            sales
        }
    }
`;
const SEARCH_BY_TITLE = gql`
    query SearchByTitle($title: String!, $limit: Int, $offset: Int) {
        getProducts(title: $title, limit: $limit, offset: $offset) {
            _id
            title
        }
    }
`;
const GET_HOT_DEALS = gql`
    query GetBigDeals(
        $limit: Int
        $offset: Int
        $sort: String
        $sortDirection: Int
    ) {
        getProducts(
            limit: $limit
            offset: $offset
            sort: $sort
            sortDirection: $sortDirection
        ) {
            _id
            title
            images
            price
            salePrice
            sales
            remain
            sold
            category
        }
    }
`;
const GET_PRODUCT = gql`
    query GetProductByID($_id: ID!){
        getProductById(_id: $_id){
            _id
            images
            title
            category
            price
            salePrice
            shortDes
            longDes
        }
    }
`

export { GET_BRANDS, GET_CATEGORIES, GET_PRODUCTS, SEARCH_BY_TITLE, GET_HOT_DEALS, GET_PRODUCTS_ID, GET_PRODUCT };
