import splash from '../api/unsplash';
import {FETCH_IMAGES, FETCH_ERROR} from './actionTypes';

export const fetchGallery = () => async dispatch => {
    try {
        await dispatch(fetchImages());
    } catch (error) {
        dispatch(requestError(error))
    }
};

export const fetchImages = () => async dispatch => {
    const result = await splash.get('');
    dispatch({
        type: FETCH_IMAGES,
        payload: result.data,
    });
};

const requestError = (error) => dispatch => {
    dispatch({type: FETCH_ERROR, payload: error});
};
