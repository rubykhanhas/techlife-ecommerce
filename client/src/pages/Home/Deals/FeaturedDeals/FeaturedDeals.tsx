import { ProductProp } from "@/@types/Product";
import Product from "@/components/view/Product/Product";
import ProductSkeleton from "@/components/view/Product/ProductSkeleton";
import TabLine from "@/components/view/TabLine/TabLine";
import { GET_PRODUCTS } from "@/query/product";
import { useQuery } from "@apollo/client";
import React from "react";
import Slider from "react-slick";
import "./FeaturedDeals.scss";

interface ComboProductProp {
    loading: boolean;
    data: {
        getProducts: ProductProp[];
    };
}

function FeaturedDeals(props) {
    const itemCount = 12;
    const { data: bestSeller, loading: loadingBestSeller } = useQuery(GET_PRODUCTS, {
        variables: {
            limit: itemCount,
            sort: "sold",
            sortDirection: -1,
        },
    });
    const { data: mostSaleOff, loading: loadingMostSaleOff } = useQuery(GET_PRODUCTS, {
        variables: {
            limit: itemCount,
            sort: "sales",
            sortDirection: -1,
        },
    });
    const { data: mostRemain, loading: loadingMostRemain } = useQuery(GET_PRODUCTS, {
        variables: {
            limit: itemCount,
            sort: "remain",
            sortDirection: -1,
        },
    });

    return (
        <div className="featured-deals">
            <TabLine
                tabs={[
                    {
                        title: "Best Seller",
                        component: <ComboProduct data={bestSeller} loading={loadingBestSeller} />,
                    },
                    {
                        title: "On Sale",
                        component: <ComboProduct data={mostSaleOff} loading={loadingMostSaleOff} />,
                    },
                    {
                        title: "New",
                        component: <ComboProduct data={mostRemain} loading={loadingMostRemain} />,
                    },
                ]}
            />
        </div>
    );
}

function ComboProduct(props: ComboProductProp) {
    const setting = {
        rows: 2,
        slidesPerRow: 1,
        slidesToShow: 3,
        speed: 500,
        initialSlide: 0,
        swipeToSlide: true,
        lazyLoad: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Slider {...setting}>
            {props.data &&
                props.data.getProducts &&
                props.data.getProducts.map((product) => (
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
            {props.loading && [...Array(12)].map((item, index) => <ProductSkeleton key={index} />)}
        </Slider>
    );
}

export default FeaturedDeals;
