import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../actions/comments"
import "./comments.css";
import DisplayComments from "./DisplayComments";
function Comments({videoId}) {
    const [commentText, setCommentText] = useState("");

    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const commentsList = useSelector((s) => s.commentReducer);
  
    // const commetsList = [
    //   {
    //     _id:"1",
    //     commentBody: "hello",
    //     userCommented: "abc",
    //   },
    //   {
    //     _id:"2",
    //     commentBody: "hiii",
    //     userCommented: "xyz",
    //   },
    // ];
  
    const dispatch = useDispatch();
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      console.log('Handling submit...');
      // console.log('CurrentUser:', CurrentUser);
      console.log('commentText:', commentText);

      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log('User Location:', userLocation);

      if (CurrentUser) {
        if (!commentText) {
          alert("Please Type your comment ! ");
        } 
        else {
          console.log('Dispatching comment...');
          dispatch(
            postComment({
              videoId: videoId,
              userId: CurrentUser?.result._id,
              commentBody: commentText,
              userCommented: CurrentUser?.result.name,
              userLocation: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            })
          );
          setCommentText("");
        } 
        
      }
      else{
        alert("Please login to post your comment !")
      }
    } catch (error) {
      console.error('Error getting user location:', error);
     
    }
  };


  return (
    <>
    <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="add comment here"
        value={commentText}
        className="comment_ibox"
      />
      <input type="submit" value="add" className="comment_add_btn_comments" />
    </form>
    <div className="display_comment_container">
      {commentsList?.data
        ?.filter((q) => videoId === q?.videoId)
        .reverse()
        .map((m) => {
          return (
            <DisplayComments
              key={m._id}
              cId={m._id}
              userId={m.userId}
              commentBody={m.commentBody}
              commentOn={m.commentOn}
              userCommented={m.userCommented}
              userLocation={m.userLocation}
            />
          );
        })}
    </div>
  </>
);
}

export default Comments