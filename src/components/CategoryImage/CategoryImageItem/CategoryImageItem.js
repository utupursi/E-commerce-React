import React from 'react';
import CategoryImage from '../CategoryImage';

const CategoryImageItem=(props)=>{
    return(
        <div className={props.class}>
        <img src={props.src} />
        <a className="category-name" href="">
            <p>{props.text}</p>
        </a>
    </div>
    )
}
export default CategoryImageItem;