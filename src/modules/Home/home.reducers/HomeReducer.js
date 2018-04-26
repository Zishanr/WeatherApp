import { LOADING_DATA, GET_NEWS_LIST_SUCCESS, GET_NEWS_LIST_FAIL } from '../../../constants/ActionType';


const INTIAL_STATE = {
    newList: [],
    loading: false,
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case GET_NEWS_LIST_SUCCESS:
            return {
                ...state, newList: [...state.newList, ...action.payload.sources], loading: false
            }
        case LOADING_DATA:
            return { ...state, loading: true, };
        default:
            return state;
    }
}