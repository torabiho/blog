import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import Toolbar from "./Toolbar";
import "./Gallery.scss";

const gridView = "gridView";

const Gallery = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const [view, setView] = useState(gridView);
  const [filter, setFilter] = useState("");

  const switchView = (newView) => {
    setView(newView);
  };

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (isMobile) {
      switchView(gridView);
    }
  }, [isMobile]);

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
    <section className="gallery" id="home-gallery">
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
              <Link to={`/post/${post._id}`} className="gallery-item__link">
                <figure>
                  <img
                    src={
                      "https://ichef.bbci.co.uk/news/800/cpsprodpb/4543/production/_121113771_gettyimages-1234407816.jpg"
                    }
                    alt={post.title}
                  />
                  <figcaption>
                    <p>{post.title}</p>
                    <p>{post.subtitle}</p>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Gallery;
