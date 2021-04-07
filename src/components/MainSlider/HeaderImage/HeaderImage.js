import React from 'react';
import category1 from '../../../storage/images/category-1.jpg';
import category2 from '../../../storage/images/category-2.jpg';
const headerImage=()=>{
     return(
        <div className="header-img">
        <div className="img-item">
            <img src={category1} />
            <a className="img-text" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
        <div className="img-item">
            <img src={category2} />
            <a className="img-text" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
    </div>
     )
}

export default headerImage;