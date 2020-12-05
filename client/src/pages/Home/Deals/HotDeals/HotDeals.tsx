import Slider from "react-slick";
import React from "react";
import "~/node_modules/slick-carousel/slick/slick.css";
import "./HotDeals.scss";
import { NextArrow, PrevArrow } from "@/components/view/SlickArrows/SlickArrows";
import BigDeal, { BigDealSkeleton } from "@/components/view/BigDeal/BigDeal";
import { useQuery } from "@apollo/client";
import { GET_HOT_DEALS } from "@/query/product";

function HotDeals() {
    const itemCount = 3;
    const { data, loading} = useQuery(GET_HOT_DEALS, {
        variables: {
            limit: itemCount,
            sort: "sales",
            sortDirection: -1,
        },
    });

    const setting = {
        infinite: true,
        slideToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 10000, //change every 10sec
        lazyLoad: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="hot-deals">
            <h3 className="hot-deals__title">Deals of the week</h3>
            <Slider {...setting}>
                {data &&
                    data.getProducts &&
                    data.getProducts.map((product) => (
                        <BigDeal
                            key={product._id}
                            _id={product._id}
                            image={product.images[0]}
                            title={product.title}
                            price={product.price}
                            salePrice={product.salePrice}
                            sales={product.sales}
                            sold={product.sold}
                            category={product.category}
                            remain={product.remain}
                        />
                    ))}
                {loading && <BigDealSkeleton />}
            </Slider>
        </div>
    );
}

export default HotDeals;
