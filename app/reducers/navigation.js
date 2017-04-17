import {NavigationExperimental} from 'react-native';
import * as types from '../actions/types';

const {CardStack: NavigationCardStack, StateUtils: NavigationStateUtils} = NavigationExperimental

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: 'home',
            title: 'Home'
        }
    ]
}

function navigationState (state = initialState, action) {
  switch (action.type) {

    case NAVIGATION_FORWARD:
      if (state.routes[state.index].key === (action.route && action.route.key)) return state
    return NavigationStateUtils.push(state, action.route)

    case NAVIGATION_BACK:
      if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)

   default:
     return state

  }
}

export default navigationState
