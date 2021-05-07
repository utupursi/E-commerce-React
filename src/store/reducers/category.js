import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility.js';

const initialState = {
    categories: []
};

// const deleteResult = ( state, action ) => {
//     const updatedArray = state.results.filter( result => result.id !== action.resultElId );
//     return updateObject( state, { results: updatedArray } );
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY :
            return updateObject(state, {
                categories: action.result
            });
    }
    return state;
};

export default reducer;