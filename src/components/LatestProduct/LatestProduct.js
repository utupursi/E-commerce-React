import React from 'react';
import Slider from "react-slick";
import './LatestProduct.css';
import LatestProductItem from "./LatestProductItem/LatestProductItem";

const LatestProduct = (props) => {
    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: props.products.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <div className="featured-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Featured Product</h1>
                </div>

                <Slider {...settings} className="row align-items-center">

                    {props.products.map(item => (
                        <div className="col-lg-3">
                            <LatestProductItem product={item}/>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default LatestProduct;