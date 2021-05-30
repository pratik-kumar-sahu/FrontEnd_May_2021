import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="heading">Click on Posts</div>
      <div className="container">
        <div className="column-1">
          <h2>Post List</h2>
          {posts.length !== 0 &&
            posts.map((post) => {
              return (
                <Link
                  key={post.id}
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/detail/${post.id}`}
                >
                  <div className="column-1__list">{post.title}</div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Post;
