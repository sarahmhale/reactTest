import {combineReducers} from 'redux';
import * as ledamotReducer from './ledamoter';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(ledamotReducer, navigationReducer ));
