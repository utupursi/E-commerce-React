import React,{useState} from 'react';
import slider2 from '../../../storage/images/slider-2.jpg';
import slider1 from '../../../storage/images/slider-1.jpg';
import slider3 from '../../../storage/images/slider-3.jpg';
import Slider from "react-slick";
import SliderItem from './SliderItem/SliderItem';
const HeaderSlider=()=>{
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const [sliders, setSliders] = useState([
        {
            imgSrc:slider1,
            text:"Some text goes here that describes the image",
            buttonText:"Shop Now",
            icconClass:"fa fa-shopping-cart"
        },
        {
            imgSrc:slider2,
            text:"Some text goes here that describes the image",
            buttonText:"Shop Now",
            icconClass:"fa fa-shopping-cart"
        },
        {
            imgSrc:slider3,
            text:"Some text goes here that describes the image",
            buttonText:"Shop Now",
            icconClass:"fa fa-shopping-cart"
        }
    ]);

    return(
        <div className="header-slider normal-slider">
            <Slider {...settings}>
            {sliders.map((item,i)=>(
                 <SliderItem key={i} src={item.imgSrc} text={item.text} buttonText={item.buttonText} icconClass={item.icconClass}/>
            ))}
      
        </Slider>
    </div>
    )
}

export default HeaderSlider