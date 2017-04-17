import { NAVIGATION_FORWARD, NAVIGATION_BACK } from './types'

export function push (route) {
  return {
    type: NAVIGATION_FORWARD,
    route
  }
}

export function pop () {
  return {
    type: NAVIGATION_BACK
  }
}
