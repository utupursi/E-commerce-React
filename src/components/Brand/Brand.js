import React,{useState} from 'react';
import brand1 from '../../storage/images/brand-1.png';
import brand2 from '../../storage/images/brand-2.png';
import brand3 from '../../storage/images/brand-3.png';
import brand4 from '../../storage/images/brand-4.png';
import brand5 from '../../storage/images/brand-5.png';
import brand6 from '../../storage/images/brand-6.png';
import Slider from "react-slick";
import BrandItem from './BrandItem/BrandItem';
const Brand=()=>{
    const settings = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };
    const [brands, setBrands] = useState(
        [
            {src:brand1},
            {src:brand2},
            {src:brand3},
            {src:brand4},
            {src:brand5},
            {src:brand6}
        ]
    )

     return(
        <div className="brand">
        <div className="container-fluid">
            <Slider {...settings}>
                {brands.map((item,i)=>(
                    <BrandItem key={i} src={item.src}/>
                ))}
            </Slider>

        </div>
    </div>
     )
}

export default Brand;