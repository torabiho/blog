import React, { useState, useMemo } from "react";
import Toolbar from "./Toolbar";
import "./Gallery.scss";

const gridView = "gridView";

const Gallery = ({ data }) => {
  const [view, setView] = useState(gridView);
  const [filter, setFilter] = useState("");

  const switchView = (newView) => {
    setView(newView);
  };

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const filteredPosts = useMemo(
    () =>
      data
        ? data.filter((item) =>
            item.title.toLowerCase().includes(filter.toLowerCase())
          )
        : [],
    [data, filter]
  );

  return (
    <section className="gallery">
      <div className="container">
        <Toolbar
          view={view}
          onHandleSearch={handleSearch}
          onSwitchView={switchView}
          total={filteredPosts.length}
        />
        <ol
          className={`image-list ${
            view === gridView ? "grid-view" : "list-view"
          }`}
        >
          {filteredPosts.map((post) => (
            <li key={post._id}>
              <figure>
                <img
                  src={
                    "https://ichef.bbci.co.uk/news/800/cpsprodpb/4543/production/_121113771_gettyimages-1234407816.jpg"
                  }
                  alt={post.title}
                />
                <figcaption>
                  <p>{post.title}</p>
                  <p>
                    <a href={post.link} rel="noreferrer" target="_blank">
                      {post.subtitle}
                    </a>
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Gallery;
