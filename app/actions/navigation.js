import * as types from './types'
import {
    NavigationExperimental
} from 'react-native'

const {
    jumpToIndex
} = NavigationExperimental.StateUtils

export function setTab(tabIndex) {
    return (dispatch, getState) => {
        const {
            tabs
        } = getState()
        dispatch(Object.assign({
            type: types.SET_TABS
        }, jumpToIndex(tabs, tabIndex)));
    }
}

export function navigate(action){
  return (dispatch,getState)=>{
    dispatch(navigationForward(action));
  }
}

function navigationForward(state){
  console.log("state:",state)
  return{
    type: types.NAVIGATION_FORWARD,
    state
  }
}

export function navigationBack(){
  return{
    type: types.NAVIGATION_BACK,

  }
}
