import React from 'react';
import Search from '../Search/Search';
import Logo from '../Logo /Logo';
import UserWishList  from '../UserWishlist/UserWishList';
const bottomBar=()=>{
    return (
    <div class="bottom-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-3">
                    <Logo/>
                </div>
                <div class="col-md-6">
                  <Search/>
               </div>
                <div class="col-md-3">
                   <UserWishList/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default bottomBar