import * as actionTypes from './actionTypes';
import axios from 'axios';


export const getCategories = (res) => {
    return async (dispatch, getState) => {
        let categoriesResponse=await axios.get('http://127.0.0.1:8000/api/category');
        if(categoriesResponse.data.code===200){
            dispatch({
                type: actionTypes.GET_CATEGORY,
                result: categoriesResponse.data.categories
            });
        }
    }

}
