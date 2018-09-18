// Actions
const INCREASE_COUNTER = 'INCREASE_COUNTER'
const DECREASE_COUNTER = 'DECREASE_COUNTER'

// Initial State
const initialState = {
  count: 0
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { count: state.count + 1 }
    case DECREASE_COUNTER:
      return { count: state.count - 1 }
    default:
      return state
  }
}

// Action Creators
export const increaseCounter = () => ({
  type: INCREASE_COUNTER
})

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER
})
