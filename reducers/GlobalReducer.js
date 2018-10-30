import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {
    byId: [],
    byHash: { },
    error: '',
    isFetching: false
};



const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_POST_REQUEST': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_POST_FAILURE': {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        case 'GET_POST_SUCCESS': {
            console.log('REDUCER - GET_POST_SUCCESS');
            var newState = {
                byId: [ ...state.byId, ...action.id],
                byHash: {
                    ...state.byHash,
                    ...action.payload
                },
                isFetching: false,
                error: ''
            }
            return newState;
        }
        case 'ADD_POST_REQUEST': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'ADD_POST_FAILURE': {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        case 'ADD_POST_SUCCESS': {
            return {
                byId: [ ...state.byId, action.id],
                byHash: {
                    ...state.byHash,
                    [action.id]: action.payload
                },
                isFetching: false,
                error: ''
            }
        }
        case 'REMOVE_POST_REQUEST': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'REMOVE_POST_FAILURE': {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        case 'REMOVE_POST_SUCCESS': {
            const prunedIds = state.byId.filter(item => {
                return item !== action.id // return all the items not matching the action.id
            })
            delete state.byHash[action.id] // delete the hash associated with the action.id
            return {
                byId: prunedIds,
                byHash: state.byHash,
                isFetching: false,
                error: ''
            }
        }
        default:
        return state;
    }
};


export default combineReducers({
    form: formReducer,
    data: postReducer,
});
