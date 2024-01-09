export const ADD_ARTICLE = 'ADD_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export const addArticle = (article) => {
  return { type: ADD_ARTICLE, payload: article }
}

export const deleteArticle = (id) => {
  return { type: DELETE_ARTICLE, payload: id }
}
