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
      <div className="comment-section-container">
        <h2 className="subheader subheader__bold">
          {numberOfComments} Comments
        </h2>
        <div className="enter-comments-section">
          <div className="left-panel">
            <img className="avatar" src={UserImage} alt="user avatar" />
          </div>
          <div className="right-panel">
            <h2 className="form-field-label subheader subheader__silver">
              JOIN THE CONVERSATION
            </h2>
            <div className="bottom-panel">
              <input
                type="text"
                comment="comment"
                className="comment-box comment-box__comment"
                onChange={handleChange}
                placeholder="Add a new comment"
              />
              <div className="comment-button">
                <button value="clear" className="button" onClick={postComment}>
                  <img
                    className="button-icon"
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
        <div className="existing-comments">
          {commentData.map((comments) => {
            const datePostedReadable = moment(comments.timestamp)
              .startOf("minutes")
              .fromNow();
            return (
              <div className="comment-container-main" key={comments.id}>
                <hr />
                <div className="comment-container">
                  <div className="left-panel__existing">
                    <div className="avatar" alt="" />
                  </div>
                  <div className="right-panel__existing">
                    <div className="user-container">
                      <div className="username subheader">{comments.name}</div>
                      <div className="userdate body-copy body-copy__silver">
                        {datePostedReadable}
                      </div>
                    </div>
                    <div className="user-comment body-copy">
                      {comments.comment}
                    </div>
                    <div className="comment-button comment-button__delete">
                    <button
                      value="clear"
                      className="button button__delete-comment"
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


