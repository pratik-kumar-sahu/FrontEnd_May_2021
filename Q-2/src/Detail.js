import React, { useEffect, useState } from "react";

function Detail({ match }) {
  const id = match.params.id;
  const [selectedPostInfo, setSelectedPostInfo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedPostInfo(data));
  }, [id]);

  return (
    <div className="column-2">
      <h2>Post Details</h2>
      {selectedPostInfo ? (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <strong>Title:</strong> {selectedPostInfo.title}
          </div>
          <div>
            <strong>Body:</strong> {selectedPostInfo.body}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Detail;
