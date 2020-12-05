import { ProductProp } from "@/@types/Product";
import Product from "@/components/view/Product/Product";
import ProductSkeleton from "@/components/view/Product/ProductSkeleton";
import React from "react";
import "./ProductList.scss";

type ProductListProp = {
    products: ProductProp[];
    loading: boolean;
}

function ProductList(props: ProductListProp) {
    return (
        <section className="product-list">
            {
                !props.loading && props.products.length > 0 &&
                props.products.map((product) => (
                    <Product
                        key={product._id}
                        _id={product._id}
                        title={product.title}
                        images={product.images}
                        price={product.price}
                        salePrice={product.salePrice}
                        sales={product.sales}
                    />
                ))}
            {props.loading && [...Array(20)].map((item, index) => <ProductSkeleton key={index} />)}
        </section>
    );
}

export default ProductList;
