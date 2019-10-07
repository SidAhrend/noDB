import React, { Component } from "react";
import "../App.css";
import ListMap from "./listMap";

import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  componentDidMount() {
    axios.get("/api/comments").then(res => {
      this.setState({
        items: res.data
      });
    });
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    let comment = this.state.term;
    axios.post("/api/comments", { comment }).then(res => {
      this.setState({
        items: res.data
      });
    });
  };
  deleteComment = (index) => {
    axios.delete(`/api/comments/${index}`).then(res => {
        this.setState({
            items: res.data
        });
    })
  }

  onDelete = (event) => {
     
  }

  render() {
    return (
      <div id="list">
        <form className="List" onSubmit={this.onSubmit}>
          <input
            placeholder="type here"
            value={this.state.term}
            onChange={this.onChange}
          />
          <br />
          <button className="comment-button">submit</button>
          <button className="comment-button" onClick={() => this.onDelete()}>
            clear comments
          </button>
          {/* <button className="comment-button" onClick={this.onEdit}>
            edit comments
          </button> */}
        </form>
        {this.state.items.map((item, index) => (
          <ListMap id="listController" items={this.state.items} item={item} index={index} deleteComment={this.deleteComment}/>
        ))}
      </div>
    );
  }
}
export default List;
