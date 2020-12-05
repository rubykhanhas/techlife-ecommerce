import { ProductProp } from "@/@types/Product";
import { GET_BRANDS, GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCTS_ID } from "@/query/product";
import { NetworkStatus, useQuery } from "@apollo/client";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Range } from "react-input-range";
import { Col, Container, Row } from "reactstrap";
import ProductList from "./ProductList";
import ProductsFilter from "./ProductsFilter";
import ProductsPagination from "./ProductsPagination";
import ProductsSort, { OptionValue, SortOption } from "./ProductsSort";

type FilterType = { value: string; isActive: boolean };

function Products() {
    const { loading, data, refetch, networkStatus } = useQuery(GET_PRODUCTS, {
        notifyOnNetworkStatusChange: true,
    });
    const [products, setProducts] = useState<ProductProp[]>([]);
    //#region Page
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItem, setTotalItem] = useState(0);
    const { data: dataTotalItem, refetch: refetchTotalItem, networkStatus: networkStatusPage } = useQuery(
        GET_PRODUCTS_ID
    );
    const handlePageChange = (event: ChangeEvent<unknown>, page: number): void => {
        setCurrentPage(page);
    };
    //#endregion
    //#region Sort
    const sortOptions: SortOption[] = [
        {
            label: "highest price",
            value: {
                sort: "price",
                sortDirection: -1,
            },
        },
        {
            label: "lowest price",
            value: {
                sort: "price",
                sortDirection: 1,
            },
        },
        {
            label: "best seller",
            value: {
                sort: "sold",
                sortDirection: -1,
            },
        },
    ];
    const [sort, setSort] = useState<OptionValue>(sortOptions[0].value);
    const handleSortChange = (selectedValue: SortOption): void => {
        setSort(selectedValue.value);
    };
    //#endregion
    //#region RangePrice
    const [range, setRange] = useState<Range | number>({ min: 0, max: 5000 });
    const handleRangeChange = (value: Range | number) => {
        setRange(value);
    };
    //#endregion
    //#region CategoryFilter
    const { data: dataCategory } = useQuery(GET_CATEGORIES);
    const [categories, setCategories] = useState<FilterType[]>([{ value: "all", isActive: true }]);
    const handleCategoryChange = (event: MouseEvent<HTMLParagraphElement>): void => {
        const pTag: any = event.target;
        const value = pTag.getAttribute("data-value");
        const newCategories = categories.map((category) => {
            if (category.value === value) return { ...category, isActive: true };
            else return { ...category, isActive: false };
        });
        setCategories(newCategories);
    };
    useEffect(() => {
        let categoriesApi: FilterType[] = [];
        dataCategory &&
            dataCategory.getCategories &&
            dataCategory.getCategories.forEach((category) => {
                categoriesApi.push({
                    value: category,
                    isActive: false,
                });
            });
        setCategories((prev) => [...prev, ...categoriesApi]);
    }, [dataCategory]);
    //#endregion
    //#region BrandFilter
    const { data: dataBrand } = useQuery(GET_BRANDS);
    const [brands, setBrands] = useState<FilterType[]>([{ value: "all", isActive: true }]);
    const handleBrandChange = (event: MouseEvent<HTMLParagraphElement>): void => {
        const pTag: any = event.target;
        const value = pTag.getAttribute("data-value");
        const newBrands = brands.map((brand) => {
            if (brand.value === value) return { ...brand, isActive: true };
            else return { ...brand, isActive: false };
        });
        setBrands(newBrands);
    };
    useEffect(() => {
        let brandsApi: FilterType[] = [];
        dataBrand &&
            dataBrand.getBrands &&
            dataBrand.getBrands.forEach((brand) => {
                brandsApi.push({
                    value: brand,
                    isActive: false,
                });
            });
        setBrands((prev) => [...prev, ...brandsApi]);
    }, [dataBrand]);
    //#endregion

    useEffect(() => {
        //#region GET
        const categoryItem = categories.find((category) => category.isActive === true);
        const category = categoryItem?.value != "all" ? categoryItem?.value : "";
        const brandItem = brands.find((brand) => brand.isActive === true);
        const brand = brandItem?.value != "all" ? brandItem?.value : "";
        const { min: minPrice, max: maxPrice }: any = range;
        const offset = (currentPage - 1) * itemsPerPage;
        //#endregion
        (async () => {
            refetch({
                category,
                brand,
                limit: itemsPerPage,
                offset,
                minPrice,
                maxPrice,
                sort: sort.sort,
                sortDirection: sort.sortDirection,
            });
        })();
    }, [sort, brands, categories, range, currentPage]);
    useEffect(() => {
        const categoryItem = categories.find((category) => category.isActive === true);
        const category = categoryItem?.value != "all" ? categoryItem?.value : "";
        const brandItem = brands.find((brand) => brand.isActive === true);
        const brand = brandItem?.value != "all" ? brandItem?.value : "";
        const { min: minPrice, max: maxPrice }: any = range;
        refetchTotalItem({
            category,
            brand,
            minPrice,
            maxPrice,
        });
    }, [brands, categories, range]);
    useEffect(() => {
        if (dataTotalItem && dataTotalItem.getProducts) {
            setTotalItem(dataTotalItem.getProducts.length);
            setCurrentPage(1);
            console.log(networkStatus);
        }
    }, [dataTotalItem]);
    useEffect(() => {
        if (data && data.getProducts) {
            setProducts(data.getProducts);
        }
    }, [data]);

    return (
        <div className="products">
            <Container>
                <Row>
                    <Col xl="3" style={{ padding: 0 }}>
                        <ProductsFilter
                            rangeValue={range}
                            handleRangeChange={handleRangeChange}
                            brands={brands}
                            handleBrandChange={handleBrandChange}
                            categories={categories}
                            handleCategoryChange={handleCategoryChange}
                        />
                    </Col>
                    <Col xs="12" xl="9" style={{ padding: 0 }}>
                        <ProductsSort
                            loading={networkStatus === NetworkStatus.setVariables ? true : loading}
                            count={totalItem}
                            sortOptions={sortOptions}
                            handleSortChange={handleSortChange}
                        />
                        <ProductList
                            loading={
                                networkStatusPage === NetworkStatus.setVariables ||
                                networkStatus === NetworkStatus.setVariables
                                    ? true
                                    : loading
                            }
                            products={products}
                        />
                        <ProductsPagination
                            isLoading={networkStatus === NetworkStatus.setVariables ? true : loading}
                            pageCount={Math.ceil(totalItem / itemsPerPage)}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Products;
