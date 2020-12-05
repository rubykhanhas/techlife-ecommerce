import Shimmer from "@/components/view/Shimmer/Shimmer";
import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "~/node_modules/slick-carousel/slick/slick.css";
import "./Album.scss";

type AlbumProp = {
    images: string[];
};

function Album(props: AlbumProp) {
    const [main, setMain] = useState(null);

    const setting1 = {
        slidesToShow: 1,
        swipeToSlide: true,
        lazyLoad: true,
        arrows: false,
        speed: 500,
    };

    const setting2 = {
        slidesToShow: props.images.length > 3 ? 3 : props.images.length,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        lazyLoad: true,
        speed: 500,
    };

    return (
        <section className="album">
            {props.images && props.images.length > 0 && (
                <Fragment>
                    <div className="album__main">
                        <Slider ref={(slider) => setMain(slider)} {...setting1}>
                            {props.images.map((image) => (
                                <img key={image} src={image} alt={image} />
                            ))}
                        </Slider>
                    </div>
                    <div className="album__sub">
                        <Slider {...setting2} asNavFor={main}>
                            {props.images.map((image) => (
                                <img key={image} src={image} alt={image} />
                            ))}
                        </Slider>
                    </div>
                </Fragment>
            )}
        </section>
    );
}

export default Album;

export const AlbumSkeleton = () => (
    <div className="album album-skeleton">
        <div className="album__main skeleton">
            <div className="img" />
            <Shimmer />
        </div>
        <div className="album__sub skeleton">
            <div className="img" />
            <div className="img" />
            <div className="img" />
            <Shimmer />
        </div>
    </div>
)