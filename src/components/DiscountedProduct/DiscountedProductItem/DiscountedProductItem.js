import React from 'react';

const DiscountedProduct=()=>{
    <div class="col-lg-3">
      <div class="product-item">
        <div class="product-title">
            <a href="#">Product Name</a>
            <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
         <div class="product-image">
            <a href="product-detail.html">
                <img src="https://volta.ge/../storage/product/802/20210411251-11~.png" alt="Product Image"/>
            </a>
            <div class="product-action">
                <a href="#"><i class="fa fa-cart-plus"></i></a>
                <a href="#"><i class="fa fa-heart"></i></a>
                <a href="#"><i class="fa fa-search"></i></a>
            </div>
        </div>
        <div class="product-price">
            <h3><span>$</span>99</h3>
            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Buy Now</a>
        </div>
    </div>
</div>
}

export default DiscountedProduct;