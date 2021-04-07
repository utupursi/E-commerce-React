import React,{Component} from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import Brand from '../../components/Brand/Brand';
import Feature from '../../components/Feature/Feature';
import CategoryImage from '../../components/CategoryImage/CategoryImage';
import CallAction from '../../components/CallAction/CallAction';
class Estore extends Component{
    render(){
        return(
            <React.StrictMode>

            <MainSlider/>
            <Brand/>
            <Feature/>
            <CategoryImage/>
            <CallAction/>
            
            </React.StrictMode>
        )
    }
}

export default Estore;