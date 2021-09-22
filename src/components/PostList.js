import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        <h2>All Blogs</h2>
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <h4>{post.title.rendered}</h4>
              <span>Date : {post.date}</span>
              <br></br>
              <span>Status : {post.status}</span>
              <p>{post.uagb_excerpt}</p>
            </div>
            <br></br>
          </div>
        ))}
        <button
          style={{
            textAlign: "center",
            height: "32px",
            width: "120px",
            borderRadius: "8px",
          }}
          className="load-button"
        >
          Load More Posts
        </button>
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
