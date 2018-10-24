import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {
  byId: ['1', '2', '3'],
  byHash: {
      '1': {id: 'id', content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', lastName: 'lastName 1', firstName: 'firstName 1', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}},
      '2': {id: 'wesh', content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', lastName: 'lastName 1', firstName: 'firstName 1', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}},
      '3': {id: 'ldr', content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', lastName: 'lastName 1', firstName: 'firstName 1', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}},
  },
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
