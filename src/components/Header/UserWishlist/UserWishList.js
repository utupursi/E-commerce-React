import React from 'react';
import {Link} from 'react-router-dom';
const userWishList=()=>{
    return (
        <div class="user">
            <Link to="/" className="btn wishlist">
                <i class="fa fa-heart"></i>
                <span>(0)</span>
            </Link>

           <Link to="/" className="btn cart">
               <i class="fa fa-shopping-cart"></i>
               <span>(0)</span>
           </Link>
    </div>
    )
}

export default userWishList;