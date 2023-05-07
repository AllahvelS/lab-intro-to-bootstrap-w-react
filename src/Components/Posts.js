import images from "../images/index.js";
import React from "react";

//prop {posts} which is filteredPosts is passed here 
//allowing the posts section to update on key press
export default function Posts({ posts }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {posts.map((p) => {
        const image = images[p.location.toLowerCase().replace(" ", "-")];
        return (
          <div key={p.id} className="col">
            <div className="card">
              <img
                src={image}
                className="card-img-top post-image-height"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <h6 className="card-title">{p.location}</h6>
                <p className="card-text d-block text-truncate">{p.content}</p>
                <div className="d-flex justify-content-end align-items-center">
                    <button className="btn btn-primary btn-warning p-1" type="submit">Go to Post ➤</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

