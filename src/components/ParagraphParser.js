import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { convertNumbers2English } from "../helpers";

const ParagraphParser = ({ text }) => {
  const paragraphs = text.split(/\n\n/);

  return paragraphs.map((paragraph, index) => (
    <LineParser key={index} paragraph={paragraph} />
  ));
};

const LineParser = ({ paragraph }) => {
  const lines = paragraph.split(/\n/);
  return (
    <p className="post__paragraph">
      {lines.map((line, index) => (
        <PostScriptParser line={line} key={index} />
      ))}
    </p>
  );
};

const PostScriptParser = ({ line }) => {
  const { i18n } = useTranslation();
  const chunks = line.split(/(\[.*?\])/g);

  return (
    <>
      {chunks.map((chunk, index) =>
        /(\[.*?\])/.test(chunk) ? (
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
          <>{chunk}</>
        )
      )}
      <br />
    </>
  );
};

export default ParagraphParser;
