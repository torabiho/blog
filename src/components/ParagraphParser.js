import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { convertNumbers2English } from "../helpers";

const ParagraphParser = ({ text }) => {
  const paragraphs = text.split(/\n\n/);

  return paragraphs.map((paragraph, index) => (
    <PostScriptParser key={index} paragraph={paragraph} />
  ));
};

const LineParser = ({ text }) => {
  const lines = text.split(/\n/);
  return lines.map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

const PostScriptParser = ({ paragraph }) => {
  const { i18n } = useTranslation();
  const chunks = paragraph.split(/(\[.*?\])/g);
  return (
    <p className="post__paragraph">
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
          <LineParser key={index} text={chunk} />
        )
      )}
    </p>
  );
};

export default ParagraphParser;
