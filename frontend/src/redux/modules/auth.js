import axios from 'axios'
import curtApi from '../../lib/curtApi'

// Actions
const SET_TOKEN = 'auth/SET_TOKEN'
const REMOVE_TOKEN = 'auth/REMOVE_TOKEN'
const OPEN_MODAL = 'auth/OPEN_MODAL'
const CLOSE_MODAL = 'auth/CLOSE_MODAL'

// Initial State
const initialState = {
  token: undefined,
  isModalOpen: false,
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
    case OPEN_MODAL:
      return { ...state, isModalOpen: true }
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false }
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
  window.location.reload()
}

export const logout = () => dispatch => {
  dispatch({ type: REMOVE_TOKEN })
  window.location.reload()
}

export const openModal = () => ({ type: OPEN_MODAL })
export const closeModal = () => ({ type: CLOSE_MODAL })
