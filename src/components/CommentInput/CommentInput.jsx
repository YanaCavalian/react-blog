import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addComment, deleteComment } from "../../store/AddComment/actions";
import "./CommentInput.css";
import { useCommentSelector } from "../../store/AddComment/selectors";

const CommentInput = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("change-massage");
  const comments = useCommentSelector();
  const handleSubmit = (e) => {
    e.preventDefault();

    const action = addComment({
      id: uuidv4(),
      comment: e.target.elements.inputComment.value,
    });
    dispatch(action);

    e.target.elements.inputComment.value = "";
    setTheme("change-massage-on");
    setTimeout(() => {
      setTheme("change-massage");
    }, 3000);
  };
  const onDelete = (id) => () => {
    dispatch(deleteComment(id));
  };

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          minLength="4"
          name="inputComment"
          type="text"
          placeholder="Enter your comment"
        />
        <button type="submit">Add a comment</button>
        <div className={theme}>Your massage sent</div>
      </form>
      {comments?.length > 0 ? (
        <div>
          {comments.map((massage) => {
            const { id, comment } = massage;
            return (
              <div className="comment-massage" key={id}>
                <p>{comment}</p>
                <button type="button" onClick={onDelete(id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default CommentInput;
