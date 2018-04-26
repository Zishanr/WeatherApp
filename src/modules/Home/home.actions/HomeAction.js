/* Created By Zishan Rashid */

import NewListService from '../../../network/request/NewListService';
import { LOADING_DATA, GET_NEWS_LIST_SUCCESS, GET_NEWS_LIST_FAIL } from '../../../constants/ActionType';

export const fetchNewsDataAction = () => {

    return (dispatch) => {

        dispatch({
            type: LOADING_DATA,
        })

        NewListService.getListOfNews()
            .then(response => {
                dispatch({
                    type: GET_NEWS_LIST_SUCCESS,
                    payload: response
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_NEWS_LIST_FAIL,
                });
            });
    }
}