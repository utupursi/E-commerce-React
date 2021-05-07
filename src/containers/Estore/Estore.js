import React, {Component} from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import Brand from '../../components/Brand/Brand';
import Feature from '../../components/Feature/Feature';
import CategoryImage from '../../components/CategoryImage/CategoryImage';
import CallAction from '../../components/CallAction/CallAction';
import LatestProduct from '../../components/LatestProduct/LatestProduct';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import DiscountedProduct from '../../components/DiscountedProduct/DiscountedProduct';
import Review from '../../components/Review/Review';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Estore extends Component {

    componentDidMount() {
        this.props.onComponentMount();
        this.props.getCategory();
    }

    render() {
        return (
            <React.StrictMode>
                <MainSlider categories={this.props.categories}/>
                <Brand/>

                <Feature/>

                <CategoryImage/>

                <CallAction/>

                <LatestProduct products={this.props.latestProducts}/>

                <NewsLetter/>

                <DiscountedProduct products={this.props.discountedProducts}/>

                <Review/>

            </React.StrictMode>
        )
    }
}


const mapStateToProps = state => {
    return {
        latestProducts: state.product.latestProducts,
        discountedProducts: state.product.discountedProducts,
        categories: state.category.categories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentMount: () => dispatch(actionCreators.getProducts()),
        getCategory: () => dispatch(actionCreators.getCategories())
        // onDecrementCounter: () => dispatch(actionCreators.decrement()),
        // onAddCounter: () => dispatch(actionCreators.add(10)),
        // onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        // onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Estore);