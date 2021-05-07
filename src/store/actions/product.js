import * as actionTypes from './actionTypes';
import axios from 'axios';


export const getProducts = (res) => {
    return async (dispatch, getState) => {

        let latestProductsResponse = await axios.get('http://127.0.0.1:8000/api/products');
        let discountedProductsResponse = await axios.get('http://127.0.0.1:8000/api/discounted-products');
        if(discountedProductsResponse.data.code===200) {
            dispatch({
                type: actionTypes.GET_LATEST_PRODUCT,
                result: latestProductsResponse.data.products
            });
        }
        if(latestProductsResponse.data.code===200){
            dispatch({
                type: actionTypes.GET_DISCOUNTED_PRODUCT,
                result: discountedProductsResponse.data.products
            });
        }

    }

}
