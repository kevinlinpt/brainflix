import React from "react";
import { useState } from "react";
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import moment from "moment/moment"; // DIVING DEEPER SECTION Sprint 1 - human readable format timestamp using moment.js
import axios from "axios";
import "./CommentSection.scss";

function CommentSection({
  currentVideo,
  setCurrentVideo,
  url,
  apikey,
  currentVideoId,
}) {
  const [newComment, setNewComment] = useState("");

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  // DIVING DEEPER SECTION Sprint 2- Posting and Deleting comments to API endpoint
  function postComment() {
    axios
      .post(
        `${url}/videos/${currentVideoId}/comments/${apikey}`,
        {
          name: "user",
          comment: newComment,
        }
      )
      .then((postedComment) => {
        currentVideo.comments.push(postedComment.data);
        let newCurrentVideo = { ...currentVideo };
        setCurrentVideo(newCurrentVideo);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  function deleteComment(id) {
    axios
      .delete(
        `${url}/videos/${currentVideoId}/comments/${id}/${apikey}`,
        {
          id: id,
          name: "user",
          comment: newComment,
        }
      )
      .then((deletedComment) => {
        var removeIndex = currentVideo.comments
          .map((comment) => comment.id)
          .indexOf(deletedComment.data.id);
        removeIndex && currentVideo.comments.splice(removeIndex, 1);
        let newCurrentVideo = { ...currentVideo };
        setCurrentVideo(newCurrentVideo);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  const commentData = currentVideo.comments;
  const numberOfComments = commentData.length;

  return (
    <>
      <div className="comments">
        <h2 className="subheader subheader__bold">
          {numberOfComments} Comments
        </h2>
        <div className="comments__form">
          <div className="comments__form_left_panel">
            <img className="avatar" src={UserImage} alt="user avatar" />
          </div>
          <div className="comments__form_right_panel">
            <h2 className="comments__form_label subheader subheader__silver">
              JOIN THE CONVERSATION
            </h2>
            <div className="comments__form_bottom_panel">
              <input
                type="text"
                comment="comment"
                className="comment-box comment-box__comment"
                onChange={handleChange}
                placeholder="Add a new comment"
              />
              <div className="comment__button">
                <button value="clear" className="button" onClick={postComment}>
                  <img
                    className="button__icon"
                    src={CommentIcon}
                    alt="comment button icon"
                  />
                  <h4 className="label-button">COMMENT</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* map through comments of the first array*/}
        <div className="comments__existing">
          {commentData.map((comments) => {
            const datePostedReadable = moment(comments.timestamp)
              .startOf("minutes")
              .fromNow();
            return (
              <div className="comments__existing_main" key={comments.id}>
                <hr />
                <div className="comment-container">
                  <div className="comment-container__left_panel">
                    <div className="avatar" alt="" />
                  </div>
                  <div className="comment-container__right_panel">
                    <div className="comment-container__user">
                      <div className="comment-container__user_name subheader">{comments.name}</div>
                      <div className="comment-container__user_date body-copy body-copy__silver">
                        {datePostedReadable}
                      </div>
                    </div>
                    <div className="comment-container__user_comment body-copy">
                      {comments.comment}
                    </div>
                    <div className="comment__button comment__button_delete">
                    <button
                      value="clear"
                      className="button button__delete_comment"
                      onClick={() => {deleteComment(comments.id)}}
                      key={comments.id}
                    >
                      <h4 className="label-button label-button__delete">DELETE</h4>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <hr className="hr__removed-desktop" />
        </div>
      </div>
    </>
  );
}

export default CommentSection;


