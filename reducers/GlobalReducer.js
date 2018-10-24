import { combineReducers } from 'redux';

const INITIAL_STATE = {
  byId: ['1', '2', '3'],
  byHash: {
      '1': {id: '1', content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', lastName: 'lastName 1', firstName: 'firstName 1', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}},
      '2': {id: '2', content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', lastName: 'lastName 1', firstName: 'firstName 1', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}},
      '3': {id: '3', content: {photo: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg', thumbnail: 'https://banner2.kisspng.com/20180303/zhe/kisspng-snout-facial-expression-face-cartoon-cute-round-face-5a9b7bf16ad8d7.7816424615201392494377.jpg', lastName: 'lastName 1', firstName: 'firstName 1', date: '01/01/2018', likes: '5', nb_commentaires: '10', description: 'description'}},

  },
};



const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state;
    default:
      return state;
  }
};


export default combineReducers({
  data: postReducer,
});
