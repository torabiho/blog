import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { convertNumbers2English } from "../helpers";

const ParagraphParser = ({ paragraph }) => {
  const { i18n } = useTranslation();
  const words = paragraph.split(/(\[.*?\])/g);
  return (
    <p className="post__paragraph">
      {words.map((word, index) =>
        /(\[.*?\])/.test(word) ? (
          <ScrollLink
            key={index}
            className="postscript"
            activeClass="current"
            to="postscriptsRef"
            offset={-200}
            id={`postscript${
              i18n.language === "fa" ? convertNumbers2English(word) : word
            }`}
            smooth={true}
            duration={1500}
          >
            {word}
          </ScrollLink>
        ) : (
          word
        )
      )}
    </p>
  );
};

export default ParagraphParser;
