import axios from 'axios'

// Actions
const SET_TOKEN = 'auth/SET_TOKEN'
const REMOVE_TOKEN = 'auth/REMOVE_TOKEN'

// Initial State
const initialState = {
  token: undefined,
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem('token', action.payload)
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        action.payload
      }`
      return { ...state, token: action.payload }
    case REMOVE_TOKEN:
      localStorage.removeItem('token')
      return { ...initialState }
    default:
      return state
  }
}

// Action Creators
export const setToken = payload => ({
  type: SET_TOKEN,
  payload,
})

export const removeToken = () => ({
  type: REMOVE_TOKEN,
})
