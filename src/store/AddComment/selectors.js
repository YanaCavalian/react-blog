import { useSelector } from 'react-redux'

export const useCommentSelector = () => {
  return useSelector((state) => state.CommentInput)
}
