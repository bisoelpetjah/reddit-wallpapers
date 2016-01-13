const BASE_URL = 'https://reddit.com/r/wallpaper'

export const REQUEST_WALLPAPER_LIST = 'REQUEST_WALLPAPER_LIST'

export function requestWallpaperList(after) {
  return {
    type: REQUEST_WALLPAPER_LIST,
    after
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
    dispatch(requestWallpaperList(after))

    return fetch(`${BASE_URL}/.json${after ? '?after=' + after : ''}`)
        .then(response => response.json())
        .then(json => {
          dispatch(receiveWallpaperList(json))
        })
  }
}
