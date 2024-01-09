import { ADD_ARTICLE, DELETE_ARTICLE } from "./actions";

const initialState = (() => {
  try {
    return JSON.parse(localStorage.getItem("articles")) || [];
  } catch (error) {
    console.error("Error parsing data from Local Storage:", error);
    return [];
  }
})();

const addArticle = (state, action) => {
  return [...state, action.payload];
};

const deleteArticle = (state, action) => {
  return state.filter((articles) => articles.id !== action.payload);
};
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return addArticle(state, action);
    case DELETE_ARTICLE:
      return deleteArticle(state, action);

    default:
      return state;
  }
};

export default articleReducer;
