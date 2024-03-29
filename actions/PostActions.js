import Firebase from '../lib/firebase';

const reloadPostRequest = () => (
    {
        type: 'RELOAD_POST_REQUEST'
    }
);

const reloadPostSuccess = posts => (
    {
        type: 'RELOAD_POST_SUCCESS',
        id: posts.id,
        payload: posts.payload
    }
);

const reloadPostFailure = error => (
    {
        type: 'RELOAD_POST_FAILURE',
        payload: error
    }
);

const getPostRequest = () => (
    {
        type: 'GET_POST_REQUEST'
    }
);

const getPostSuccess = posts => (
    {
        type: 'GET_POST_SUCCESS',
        id: posts.id,
        payload: posts.payload,
    }
);

const getPostFailure = error => (
    {
        type: 'GET_POST_FAILURE',
        payload: error,
    }
);

const addPostRequest = () => (
    {
        type: 'ADD_POST_REQUEST'
    }
);

const addPostSuccess = post => (
    {
        type: 'ADD_POST_SUCCESS',
        id: post.id,
        payload: post
    }
);

const addPostFailure = error => (
    {
        type: 'ADD_POST_FAILURE',
        payload: error
    }
);

const delPostRequest = () => (
    {
        type: 'REMOVE_POST_REQUEST'
    }
);

const delPostSuccess = postId => (
    {
        type: 'REMOVE_POST_SUCCESS',
        id: postId,
    }
);

const delPostFailure = error => (
    {
        type: 'REMOVE_POST_FAILURE',
        payload: error,
    }
);


export const reloadPost = () => {
    return dispatch => {
        console.log('ACTION RELOAD REQUEST');
        dispatch(reloadPostRequest());
        let firebase = Firebase.getInstance();
        firebase.getPost()
            .then((data) => {
                console.log('SUCCESS');
                console.log(data);
                dispatch(reloadPostSuccess(data));
            })
            .catch((error) => {
                console.log('FAILURE');
                console.log(error);
              dispatch(reloadPostFailure(error));
            });
    };
};

export const getPost = () => {
    return dispatch => {
        console.log('ACTION RELOAD REQUEST');
        dispatch(getPostRequest());
        let firebase = Firebase.getInstance();
        firebase.getPost()
            .then((data) => {
                console.log('SUCCESS');
                console.log(data);
                dispatch(getPostSuccess(data));
            })
            .catch((error) => {
                console.log('FAILURE');
                console.log(error);
              dispatch(getPostFailure(error));
            });
    };
};

export const addPost = (item) => {
    return dispatch => {
        dispatch(addPostRequest());
        let firebase = Firebase.getInstance();
        firebase.addPost(item)
            .then((data) => {
                console.log('SUCCESS');
                console.log(data);
                dispatch(addPostSuccess(data));
            })
            .catch((error) => {
                console.log('FAILURE');
                console.log(error);
                dispatch(addPostFailure(error));
            });
    };
};

export const delPost = (item_id) => {
    return dispatch => {
        dispatch(delPostRequest());
        let firebase = Firebase.getInstance();
        firebase.delPost(item_id)
            .then((data) => {
                console.log('SUCCESS');
                console.log(data);
                dispatch(delPostSuccess(data));
            })
            .catch((error) => {
                console.log('FAILURE');
                console.log(error);
              dispatch(delPostFailure(error));
            });
    };
};
