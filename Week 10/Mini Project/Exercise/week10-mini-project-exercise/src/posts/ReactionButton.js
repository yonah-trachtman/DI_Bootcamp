import { useState } from "react";
import { addReaction } from "./postsSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };



  const ReactionButton = (props) => {
    const dispatch = useDispatch()
    const {id, reactions } = props.post;
    return (
        <div>
           {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button key={name} onClick={() => dispatch(addReaction({id, name}))}>{emoji} {reactions[name]}</button>
      ))}
        </div>
    )
  }

  export default memo(ReactionButton);