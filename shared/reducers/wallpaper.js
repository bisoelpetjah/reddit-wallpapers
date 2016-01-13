import {REQUEST_WALLPAPER_LIST, RECEIVE_WALLPAPER_LIST} from 'actions'

export default function wallpaperReducer(state = {
  isFetching: false,
  posts: [],
  after: null,
  currentPost: null
}, action) {
  switch (action.type) {
    case REQUEST_WALLPAPER_LIST:
      return Object.assign({}, state, {isFetching: true})
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
