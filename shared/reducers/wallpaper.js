import {REQUEST_WALLPAPERS, RECEIVE_WALLPAPERS} from 'actions'
import {combineReducers} from 'redux'

export default function wallpaperReducer(state = {
  isFetching: false,
  posts: [],
  after: null
}, action) {
  switch (action.type) {
    case REQUEST_WALLPAPERS:
      return Object.assign({}, state, {isFetching: true})
    case RECEIVE_WALLPAPERS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts,
        after: action.after
      })
    default:
      return state
  }
}
