export const addPost = post => (
  {
    type: 'ADD_POST',
    id: post.id,
    payload: post
  }
);

export const delPost = postId => (
  {
    type: 'REMOVE_POST',
    id: postId,
  }
);
