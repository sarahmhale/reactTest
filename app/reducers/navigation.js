
import createReducer from '../lib/createReducers';
import * as types from '../actions/types';
import {NavigationExperimental} from 'react-native'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const allTabs = [
  (lastRoute)=> lastRoute || {key:'home', index:0},
  (lastRoute) => lastRoute || {key:'about', index:1},
];
export const tabs = createReducer({index:0, key:'home', routes: allTabs},{
  [types.SET_TABS](state,action){
    return Object.assign({}, state, allTabs[action.index]());
  }
});

export const navigationState = createReducer({index: 0, routes:[
  {key:'ApplicationTabs'},
  {key:'Detail'}
]},{
  [types.NAVIGATION_FORWARD](state, action){
    return NavigationStateUtils.forward(state);
  },
  [types.NAVIGATION_BACK](state, action){
    return NavigationStateUtils.back(state);
  },

});

export const navigationParams = createReducer({},{
  [types.NAVIGATION_FORWARD](state, action){
    return action.state;
  }
})
