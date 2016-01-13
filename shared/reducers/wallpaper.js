import {RECEIVE_WALLPAPER_LIST} from 'actions'

export default function wallpaperReducer(state = {
  posts: [],
  after: null
}, action) {
  switch (action.type) {
    case RECEIVE_WALLPAPER_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts,
        after: action.after
      })
    default:
      return state
  }
}
