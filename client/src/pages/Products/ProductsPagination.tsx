import React, { ChangeEvent } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./ProductsPagination.scss";

type ProductsPaginationProp = {
    handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
    isLoading: boolean;
    pageCount: number;
    currentPage: number;
};

function ProductsPagination(props: ProductsPaginationProp) {
    return (
        <div className="product-pagination">
            <Pagination
                disabled={props.isLoading}
                count={props.pageCount}
                page={props.currentPage}
                onChange={props.handlePageChange}
                variant="outlined"
                shape="rounded"
                color="primary"
            />
        </div>
    );
}

export default ProductsPagination;
