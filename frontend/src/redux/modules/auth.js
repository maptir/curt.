import axios from 'axios'
import curtApi from '../../lib/curtApi'

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
      delete axios.defaults.headers.common['Authorization']
      return { ...initialState }
    default:
      return state
  }
}

// Action Creators
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
})

export const login = ({ username, password }) => async dispatch => {
  const token = await curtApi.auth.login({ username, password })
  dispatch(setToken(token))
}

export const logout = () => ({ type: REMOVE_TOKEN })
