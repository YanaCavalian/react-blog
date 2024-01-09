import { createStore, combineReducers, compose } from 'redux'
import commentReducer from './AddComment/reducer'
import articleReducer from './AddArticle/reducer'

const rootReducer = combineReducers({
  CommentInput: commentReducer,
  Article: articleReducer
})

const store = createStore(
  rootReducer,
  {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
