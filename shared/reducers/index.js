import {combineReducers} from 'redux'
import wallpaperReducer from 'reducers/wallpaper'

export default combineReducers({
  wallpaper: wallpaperReducer
})
