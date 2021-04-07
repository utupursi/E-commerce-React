import React from 'react';


const Slider=(props)=>{
    return(
        <div className="header-slider-item">
        <img src={props.src} alt="Slider Image" />
        <div className="header-slider-caption">
            <p>{props.text}</p>
            <a className="btn" href=""><i className={props.icconClass}></i>{props.buttonText}</a>
        </div>
    </div>
    )
}

export default Slider;