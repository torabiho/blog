import React from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import CloudinaryGallery from "./CloudinaryGallery";
import { convertNumbers2English } from "../helpers";

const ContentParser = ({ content, postId }) => {
  const chunks = content.split(/(\[\w.*?\])/g);

  return chunks.map((chunk, index) =>
    /(\[\w.*?\])/.test(chunk) ? (
      <CloudinaryGallery
        key={index}
        index={index}
        media={chunk.slice(1, -1).split(",")}
        postId={postId}
      />
    ) : (
      <ParagraphParser text={chunk} key={index} />
    )
  );
};

const ParagraphParser = ({ text }) => {
  const paragraphs = text.split(/\n\n/);

  return paragraphs.map((paragraph, index) => (
    <LineParser key={index} paragraph={paragraph} />
  ));
};

const LineParser = ({ paragraph }) => {
  const lines = paragraph.match(/.+/g);
  return (
    <p className="post__paragraph">
      {lines.length > 1 ? (
        lines.map((line, index) => (
          <React.Fragment key={index}>
            <PostScriptParser line={line} key={index} />
            <br />
          </React.Fragment>
        ))
      ) : (
        <PostScriptParser line={lines[0]} />
      )}
    </p>
  );
};

const PostScriptParser = ({ line }) => {
  const { i18n } = useTranslation();
  const chunks = line.split(/(\[[\u06F0-\u06F9|0-9]\])/g);

  return chunks.map((chunk, index) =>
    /(\[[\u06F0-\u06F9|0-9]\])/.test(chunk) ? (
      <ScrollLink
        key={index}
        className="postscript"
        activeClass="current"
        to="postscriptsRef"
        offset={-200}
        id={`postscript${
          i18n.language === "fa" ? convertNumbers2English(chunk) : chunk
        }`}
        smooth={true}
        duration={1500}
      >
        {chunk}
      </ScrollLink>
    ) : (
      chunk
    )
  );
};

export default ContentParser;
