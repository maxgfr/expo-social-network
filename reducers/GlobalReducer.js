import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Google',
    'Facebook',
    'Twitter',
    'Instagram',
  ],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_POST':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const { current, possible } = state;

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      const addedPost = possible.splice(action.payload, 1);

      // And put friend in friends.current
      current.push(addedPost);

      // Finally, update our redux state
      const newState = { current, possible };
      return newState;
    default:
      return state;
  }
};


export default combineReducers({
  nb_post: postReducer,
});
