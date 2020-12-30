import React from 'react';


const Comments = (props) => {

  const displayComment = () => {
    return props.list.map(comment =>
      comment.postId === props.postId ? 
      <div className="comment" key={comment.id}>
        <div className="content">
          <div className="metadata">
            <span className="date">{comment.date}</span>
          </div>
          <div className="text">
            {comment.content}
          </div>
        </div>
      </div> : ''
    )
  }

  return(<div>{displayComment()}</div>);
}

export default Comments;