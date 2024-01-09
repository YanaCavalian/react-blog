import React, { useEffect, useState } from "react";
import "./Article.css";
import { useDispatch } from "react-redux";
import { addArticle, deleteArticle } from "../../store/AddArticle/actions";
import { useArticleSelector } from "../../store/AddArticle/selectors";

export const Article = () => {
  const dispatch = useDispatch();
  const articles = useArticleSelector();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddArticle = () => {
    const newArticle = {
      id: Date.now(),
      title,
      content,
    };

    dispatch(addArticle(newArticle));

    setTitle("");
    setContent("");
  };

  const handleDeleteArticle = (id) => {
    dispatch(deleteArticle(id));
  };

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  return (
    <div className="container">
      <h1>You can add an article</h1>
      <div className="form-container">
        <label className="label">
          Tittle:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </label>
        <label className="label">
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea-field"
          />
        </label>
        <button onClick={handleAddArticle} className="button">
          Add Article
        </button>
      </div>

      <div className="articles-container">
        <h2>Articles:</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="article">
              <div className="article-box">
                <div className="articles-block">
                  <div className="article-title">{article.title}</div>
                  <div className="article-content">{article.content}</div>
                </div>
                <button
                  onClick={() => handleDeleteArticle(article.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
