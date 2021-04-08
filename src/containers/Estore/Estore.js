import React,{Component} from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import Brand from '../../components/Brand/Brand';
import Feature from '../../components/Feature/Feature';
import CategoryImage from '../../components/CategoryImage/CategoryImage';
import CallAction from '../../components/CallAction/CallAction';
import LatestProduct from '../../components/LatestProduct/LatestProduct';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import DiscountedProduct from '../../components/DiscountedProduct/DiscountedProduct';
import Review from '../../components/Review/Review';
class Estore extends Component{
    render(){
        return(
            <React.StrictMode>

            <MainSlider/>
            <Brand/>

            <Feature/>

            <CategoryImage/>

            <CallAction/>

            <LatestProduct/>

            <NewsLetter/>

            <DiscountedProduct/>
            
            <Review/>
            
            </React.StrictMode>
        )
    }
}

export default Estore;