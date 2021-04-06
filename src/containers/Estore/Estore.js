import React,{Component} from 'react';
import Category from '../../components/Category/Category';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
class Estore extends Component{
    render(){
        return(
            <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <nav class="navbar bg-light">
                           <Category/>
                        </nav>
                    </div>
                    <div class="col-md-6">
                          <HeaderSlider/>
                    </div>
                    <div class="col-md-3">
                        <HeaderImage/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Estore;