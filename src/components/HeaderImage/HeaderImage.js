import React from 'react';

const headerImage=()=>{
     return(
        <div class="header-img">
        <div class="img-item">
            <img src="img/category-1.jpg" />
            <a class="img-text" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
        <div class="img-item">
            <img src="img/category-2.jpg" />
            <a class="img-text" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
    </div>
     )
}

export default headerImage;