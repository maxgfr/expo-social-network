import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {
  byId: [],
  byHash: {},
};



const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'ADD_POST': {
        return {
          byId: [ ...state.byId, action.id],
          byHash: {
            ...state.byHash,
            [action.id]: action.payload
          }
        }
      }
      case 'REMOVE_POST': {
        const prunedIds = state.byId.filter(item => {
          return item !== action.id // return all the items not matching the action.id
        })
        delete state.byHash[action.id] // delete the hash associated with the action.id
        return {
          byId: prunedIds,
          byHash: state.byHash
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
