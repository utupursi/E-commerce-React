import React from 'react';
import Slider from 'react-slick';
import LatestProductItem from "../LatestProduct/LatestProductItem/LatestProductItem";
import DiscountedProductItem from "./DiscountedProductItem/DiscountedProductItem";

const DiscountedProduct=(props)=>{
    const settings={
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: props.products.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: props.products.length,
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
        <div class="recent-product product">
            <div class="container-fluid">
                <div class="section-header">
                    <h1>Discounted Products</h1>
                </div>
                <Slider {...settings}>

                    {props.products.map(item => (
                        <div className="col-lg-3">
                            <DiscountedProductItem product={item}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default DiscountedProduct;