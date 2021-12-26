import React, { useState, useMemo } from "react";
import Toolbar from "./Toolbar";
import "./Gallery.scss";
import { GridViewItem, ListViewItem } from "./GalleryItem";
import UnderConstruction from "../pages/UnderConstruction";

const gridView = "gridView";
const listView = "listView";

const Gallery = ({ data }) => {
  const [view, setView] = useState(listView);
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
    <section className="gallery-container hamburger-trigger">
      {data?.length === 0 ? (
        <UnderConstruction />
      ) : (
        <>
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
            {filteredPosts.map((post) =>
              view === gridView ? (
                <GridViewItem post={post} key={post._id} />
              ) : (
                <ListViewItem post={post} key={post._id} />
              )
            )}
          </ol>
        </>
      )}
    </section>
  );
};

export default Gallery;
