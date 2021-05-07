import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility.js';

const initialState = {
    latestProducts: [],
    discountedProducts: [],
};

// const deleteResult = ( state, action ) => {
//     const updatedArray = state.results.filter( result => result.id !== action.resultElId );
//     return updateObject( state, { results: updatedArray } );
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LATEST_PRODUCT :
            return updateObject(state, {
                latestProducts: action.result
            });
        case actionTypes.GET_DISCOUNTED_PRODUCT :
            return updateObject(state, {
                discountedProducts: action.result
            });

        // case actionTypes.DELETE_RESULT : return deleteResult(state, action);
    }
    return state;
};

export default reducer;