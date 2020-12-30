import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { addComment, getComments } from "../../../services/comments";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
    this.state = { comments: [] };
  }

  componentDidMount() {
    const callAPI = async () => {
      const res =  await getComments();
      this.setState({comments: res});
      this.props.comments(this.state.comments);
    }
    callAPI();
  }

  sendComment = async (e) => {
    e.preventDefault();
    this.setState({
      comments: await addComment(this.props.postId, this.state.comment),
    });
    this.props.comments(this.state.comments);
    this.setState({comment: ""});
  };

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <form className="ui icon input" onSubmit={this.sendComment}>
        <input
          type="text"
          value={this.state.comment || ''}
          onChange={this.onInputChange}
          placeholder="Add comment"
        ></input>
        <Icon className="angle right" onClick={this.sendComment}></Icon>
      </form>
    );
  }
}

export default CreateComment;
