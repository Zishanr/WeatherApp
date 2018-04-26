import { combineReducers } from 'redux';
import SplasReducer from '../modules/Splash/splash.reducer/SplashReducer';
import HomeReducer from '../modules/Home/home.reducers/HomeReducer';

const rootReducer = combineReducers({
    splasReducer : SplasReducer,
    homeReducer : HomeReducer,
})

export default rootReducer;