const BASE_URL = 'https://reddit.com/r/wallpaper'

export const REQUEST = 'REQUEST'

export function request() {
  return {
    type: REQUEST
  }
}

export const RECEIVE_WALLPAPER_LIST = 'RECEIVE_WALLPAPER_LIST'

export function receiveWallpaperList(json) {
  return {
    type: RECEIVE_WALLPAPER_LIST,
    posts: json.data.children.map(child => child.data),
    after: json.data.after
  }
}

export function fetchWallpaperList(after) {
  return dispatch => {
    dispatch(request())

    return fetch(`${BASE_URL}/.json${after ? '?after=' + after : ''}`)
        .then(response => response.json())
        .then(json => {
          dispatch(receiveWallpaperList(json))
        })
  }
}
