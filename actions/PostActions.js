export const addPostRequest = () => (
    {
        type: 'ADD_POST_REQUEST'
    }
);

export const addPostSuccess = post => (
    {
        type: 'ADD_POST_SUCCESS',
        id: post.id,
        payload: post
    }
);

export const addPostFailure = error => (
    {
        type: 'ADD_POST_FAILURE',
        payload: error
    }
);

export const delPostRequest = () => (
    {
        type: 'REMOVE_POST_REQUEST'
    }
);

export const delPostSuccess = postId => (
    {
        type: 'REMOVE_POST_SUCCESS',
        id: postId,
    }
);

export const delPostFailure = error => (
    {
        type: 'REMOVE_POST_FAILURE',
        payload: error,
    }
);


export const addPost = (item) => {
    return dispatch => {
        dispatch(addPostRequest());
        try {
            let response = await fetch('')
            let json = await response.json();
            dispatch(addPostSuccess(json.data));
        }
        catch(error) {
            dispatch(addPostFailure(error));
        }
    };
};

export const delPost = (item_id) => {
    return dispatch => {
        dispatch(delPostRequest());
        try {
            let response = await fetch('')
            let json = await response.json();
            dispatch(delPostSuccess(json.data.id));
        }
        catch(error) {
            dispatch(delPostFailure(error));
        }
    };
};
