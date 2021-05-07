import React from 'react';
import Category from '../MainSlider/Category/Category';
import HeaderSlider from '../MainSlider/HeaderSlider/HeaderSlider';
import HeaderImage from '../MainSlider/HeaderImage/HeaderImage';
const MainSlider=(props)=>{

    return (
        <div className="header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <nav className="navbar bg-light">
                       <Category categories={props.categories} />
                    </nav>
                </div>
                <div className="col-md-6">
                      <HeaderSlider/>
                </div>
                <div className="col-md-3">
                    <HeaderImage/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainSlider;