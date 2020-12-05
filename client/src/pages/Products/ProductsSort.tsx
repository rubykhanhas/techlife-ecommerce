import React, { useState } from 'react';
import Select from 'react-select';
import './ProductsSort.scss';

export type OptionValue = {
    sort: string;
    sortDirection: number;
}

export type SortOption = {label: string, value: OptionValue};

export type ProductsSortProp = {
    count: number,
    loading: boolean,
    sortOptions: SortOption[];
    handleSortChange: (selectedValue: SortOption) => void;
}

function ProductsSort(props: ProductsSortProp) {

    const handleChange = (value) => {
        console.log(value);
    }
    return (
        <aside className="product-sort">
            <div className="count"><span>{props.count}</span> products found</div>
            <div className="sort">
                <span>Sort by: </span>
                <Select
                    className="sort-by"
                    name="sort"
                    isLoading={props.loading}
                    defaultValue={props.sortOptions[0]}
                    options={props.sortOptions}
                    onChange={props.handleSortChange}
                />
            </div>
        </aside>
    )
}

export default ProductsSort;
