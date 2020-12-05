import SliderRange from "@/components/view/SliderRange/SliderRange";
import React, { useState, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { Range } from "react-input-range";
import "./ProductsFilter.scss";

type ProductsFilterProp = {
    rangeValue: Range | number;
    handleRangeChange: (value: Range | number) => void;
    brands: {value: string, isActive: boolean}[];
    handleBrandChange: (event: MouseEvent<HTMLParagraphElement>) => void;
    categories: {value: string, isActive: boolean}[];
    handleCategoryChange: (event: MouseEvent<HTMLParagraphElement>) => void;
};

function ProductsFilter(props: ProductsFilterProp) {
    return (
        <aside className="product-filter">
            <CategoryFilter categories={props.categories} handleClick={props.handleCategoryChange} />
            <SliderRange
                label="price range"
                minValue={0}
                maxValue={5000}
                step={100}
                value={props.rangeValue}
                handleChange={props.handleRangeChange}
            />
            <BrandFilter brands={props.brands} handleClick={props.handleBrandChange} />
        </aside>
    );
}

const CategoryFilter = (props: {
    categories: { value: string; isActive: boolean }[];
    handleClick: (event: MouseEvent<HTMLParagraphElement>) => void;
}) => {
    return (
        <div className="by-category filter-unit">
            <div className="title">Categories</div>
            <div className="list">
                {props.categories.length > 0 &&
                    props.categories.map((category) => (
                        <p
                            onClick={props.handleClick}
                            data-value={category.value}
                            className={category.isActive ? "active" : ""}
                            key={category.value}
                        >
                            {category.value}
                        </p>
                    ))}
            </div>
        </div>
    );
};

const BrandFilter = (props: {
    brands: { value: string; isActive: boolean }[];
    handleClick: (event: MouseEvent<HTMLParagraphElement>) => void;
}) => {
    return (
        <div className="by-brands filter-unit">
            <div className="title">Brands</div>
            <div className="list">
                {props.brands.length > 0 &&
                    props.brands.map((brand) => (
                        <p
                            onClick={props.handleClick}
                            data-value={brand.value}
                            className={brand.isActive ? "active" : ""}
                            key={brand.value}
                        >
                            {brand.value}
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default ProductsFilter;
