export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const addComment = (comment) => {
  return { type: ADD_COMMENT, payload: comment }
}

export const deleteComment = (id) => {
  return { type: DELETE_COMMENT, payload: id }
}
