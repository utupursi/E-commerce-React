import React from 'react';
import Search from '../Search/Search';
import Logo from '../Logo /Logo';
import UserWishList  from '../UserWishlist/UserWishList';
const bottomBar=()=>{
    return (
    <div className="bottom-bar">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <Logo/>
                </div>
                <div className="col-md-6">
                  <Search/>
               </div>
                <div className="col-md-3">
                   <UserWishList/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default bottomBar