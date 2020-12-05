import { ProductProp } from "@/@types/Product";
import AddCart from "@/components/container/AddCart/AddCart";
import AddFavor from "@/components/container/AddFavor/AddFavor";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

export default function Product(props: ProductProp) {
    const [active, setActive] = useState(false);
    const classList = "product ";
    const handleActive = () => {
        setActive((prev) => !prev);
    };

    return (
        <div className={`${classList + (active ? "active" : "")}`} onClick={handleActive}>
            <div className="product__image">
                <img src={props.images[0]} alt={props.title} />
            </div>
            <div className="product__content">
                <div className="product__content__price">
                    {/* sales percent > 0 ? display old price */}
                    {props.sales > 0  && (
                        <span className="product__content__price--old">{`$${props.price}`}</span>
                    )}
                    ${props.salePrice}
                </div>
                <Link to={`/product/${props._id}`} className="product__content__title">
                    {props.title}
                </Link>
                <AddCart
                        classList="product__content__btn"
                        title={props.title}
                        _id={props._id}
                        color="gray"
                        imageUrl={props.images[0]}
                        salePrice={props.salePrice}
                />
            </div>
            <AddFavor classList="product__favor" _id={props._id} />
            <div className="product__marks">
                {props.sales ? (
                    <div className="product__marks__discount">{`-${props.sales}%`}</div>
                ) : (
                    <div className="product__marks__new">new</div>
                )}
            </div>
        </div>
    );
}
