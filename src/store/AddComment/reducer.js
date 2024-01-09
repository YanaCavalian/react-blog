import { ADD_COMMENT, DELETE_COMMENT } from './actions'

const initialState = (() => {
  try {
    return JSON.parse(localStorage.getItem('comments')) || []
  } catch (error) {
    console.error('Error parsing data from Local Storage:', error)
    return []
  }
})()

const addComment = (state, action) => {
  return [...state, action.payload]
}
const deleteComment = (state, action) => {
  return state.filter((comment) => comment.id !== action.payload)
}
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return addComment(state, action)
    case DELETE_COMMENT:
      return deleteComment(state, action)
    default:
      return state
  }
}

export default commentReducer
