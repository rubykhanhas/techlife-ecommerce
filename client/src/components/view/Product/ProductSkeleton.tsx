import React from 'react'
import Shimmer from '../Shimmer/Shimmer'
import './ProductSkeleton.scss';
function ProductSkeleton() {
    return (
        <div className="product-skeleton">
            <div className="product-skeleton__image"></div>
            <div className="product-skeleton__content">
                <div className="product-skeleton__content__price"></div>
                <p className="product-skeleton__content__title"></p>
            </div>
            <Shimmer />
        </div>
    )
}

export default ProductSkeleton
