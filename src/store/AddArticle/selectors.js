import { useSelector } from 'react-redux'

export const useArticleSelector = () =>
  useSelector((state) => {
    return state.Article
  })
