import React from 'react';
import Slider from "react-slick";

const LatestProductItem = (props) => {
    return (
        <div className="product-item">
            <div className="product-title">
                <a href="#">{props.product.available_language[0] ? props.product.available_language[0].title : ""}</a>
                <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="product-image">
                <a href="product-detail.html">
                    {props.product.files[0] ?
                        <img
                            src={"http://127.0.0.1:8000/storage/product/" + props.product.id + "/" + props.product.files[0].name}
                            alt="Product Image"/> : ""
                    }
                </a>
                <div className="product-action">
                    <a href="#"><i className="fa fa-cart-plus"></i></a>
                    <a href="#"><i className="fa fa-heart"></i></a>
                    <a href="#"><i className="fa fa-search"></i></a>
                </div>
            </div>
            <div className="product-price">
                <h3><span>$</span>{props.product.price / 100}</h3>
                {props.product.sale && props.product.sale_price ?
                    <span style={{fontSize: '15x', color: 'red', marginLeft: "5px"}}><del>$ {props.product.sale_price / 100}</del></span> : ""}

                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
            </div>
        </div>
    )
}

export default LatestProductItem;