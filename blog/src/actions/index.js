import jsonPlaceholder from '../api/jsonPlaceholder';

// Manual dispatch that redux-thunk will call. redux-thunk is a middleware
// used to call apis from redux.
// The fetcPosts function returning another function that dispatches the action.
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data});
};