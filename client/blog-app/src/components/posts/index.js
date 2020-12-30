import React, { Component } from "react";
import CreateComment from "./create-comment";
import Comments from "./comments";

export const Posts = (props) => {
  const getPosts = () => {
    if (props.posts.length === 0) {
      return;
    }

    return props.posts.map((post) => (
      <PostCard id={post.id} title={post.title} key={post.id}></PostCard>
    ));
  };
  return <div className="ui basic segment grid">{getPosts()}</div>;
};

export default Posts;

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  getComments = (c) => {
    this.setState({ comments: c });
  };

  render() {
    return (
      <div ref={this.postRef} className="four wide column">
        <div className="ui card">
          <div className="content">
            <div className="header">{this.props.title}</div>
            <div className="meta">{this.props.id}</div>
          </div>
          <div className="ui container" style={{ padding: "10px" }}>
            <div className="ui comments">
              {this.state.comments.length !== 0 ? (
                <React.Fragment>
                  <h4 className="ui dividing header">Comments</h4>
                  <Comments postId={this.props.id} list={this.state.comments} />
                </React.Fragment>
              ) : (
                <React.Fragment>No comments</React.Fragment>
              )}
            </div>
          </div>
          <CreateComment postId={this.props.id} comments={this.getComments} />
        </div>
      </div>
    );
  }
}
