import React from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import PostMedia from "./PostMedia";
import { convertNumbers2English } from "../helpers";

const ContentParser = ({ content, postId, mediaDescription }) => {
  const chunks = content.split(/(\[[a-z].*?\])/gim);

  return chunks.map((chunk, index) =>
    /\[[a-z].*?\]/i.test(chunk) ? (
      <PostMedia
        key={index}
        index={index}
        media={chunk.slice(1, -1).split(",")}
        mediaDescription={mediaDescription}
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
    lines && (
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
    )
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
      <IFrameParser text={chunk} key={index} />
    )
  );
};

const IFrameParser = ({ text }) => {
  const chunks = text.split(/(<iframe.*?iframe>)/g);

  return chunks.map((chunk, index) => {
    if (/(<iframe.*?iframe>)/.test(chunk)) {
      return (
        <span
          className="post_iframe"
          key={index}
          dangerouslySetInnerHTML={{ __html: chunk }}
        />
      );
    }

    return <LinkParser text={chunk} key={index} />;
  });
};

const LinkParser = ({ text }) => {
  const chunks = text.split(/(<.*?>)/g);

  return chunks.map((chunk, index) => {
    if (/(<.*?>)/.test(chunk)) {
      const [address, tag] = chunk.slice(1, -1).split("|");
      return (
        <a
          href={address}
          className="post__link"
          target="_blank"
          rel="noreferrer"
          key={index}
        >
          {tag}
        </a>
      );
    } else {
      return chunk;
    }
  });
};

export default ContentParser;
