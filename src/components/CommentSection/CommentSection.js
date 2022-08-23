import React from "react";
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import videoDetails from "../../data/video-details.json";
import videoListData from "../../data/videos.json";
import "./CommentSection.scss";

function CommentSection({ currentVideoId }) {
  let currentCommentDetails = videoDetails.find(
    (video) => video.id === currentVideoId
  );
  const commentData = currentCommentDetails.comments;
  const numberOfComments = commentData.length;
  return (
    <div className="comment-section-container">
      <h2 className="subheader">{numberOfComments} Comments</h2>
      <div className="enter-comments-section">
        <div className="left-panel">
          <img className="avatar" src={UserImage} />
        </div>
        <div className="right-panel">
          <h2 className="form-field-label subheader subheader__silver">
            JOIN THE CONVERSATION
          </h2>
          <div className="bottom-panel">
            <input
              type="text"
              className="comment-box comment-box__comment"
              placeholder="Add a new comment"
            />
            <div className="comment-button">
              <button value="clear" className="button">
                <img
                  className="button-icon"
                  src={CommentIcon}
                  alt="comment button"
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
          const datePostedISO = new Date(comments.timestamp);
          const datePostedReadable =
            ("0" + (datePostedISO.getMonth() + 1)).slice(-2) +
            "/" +
            ("0" + datePostedISO.getDate()).slice(-2) +
            "/" +
            datePostedISO.getFullYear();
          return (
            <>
              <hr />
              <div className="comment-container" key={comments.timestamp}>
                <div className="left-panel__existing">
                  <img className="avatar" />
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
                </div>
              </div>
            </>
          );
        })}
        <hr className="hr__removed" />
      </div>
    </div>
  );
}

export default CommentSection;
