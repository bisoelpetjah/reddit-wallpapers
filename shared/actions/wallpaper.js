const URL = 'https://reddit.com/r/wallpaper/.json'

export const REQUEST_WALLPAPERS = 'REQUEST_WALLPAPERS'

export function requestWallpapers(after) {
  return {
    type: REQUEST_WALLPAPERS,
    after
  }
}

export const RECEIVE_WALLPAPERS = 'RECEIVE_WALLPAPERS'

export function receiveWallpapers(json) {
  return {
    type: RECEIVE_WALLPAPERS,
    posts: json.data.children.map(child => child.data),
    after: json.data.after
  }
}

export function fetchWallpapers(after) {
  return dispatch => {
    dispatch(requestWallpapers(after))

    return fetch(URL + (after ? `?after=${after}` : ''))
        .then(response => response.json())
        .then(json => {
          dispatch(receiveWallpapers(json))
        })
  }
}
