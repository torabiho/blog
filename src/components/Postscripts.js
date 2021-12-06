import { Link as ScrollLink } from "react-scroll";

const Postscripts = ({ postscripts }) => (
  <div className="post_postscripts" id="postscriptsRef">
    {postscripts.map((postscript, index) => (
      <ScrollLink
        key={index}
        activeClass="current"
        to={`postscript[${index + 1}]`}
        offset={-200}
        smooth={true}
      >
        <p key={index}>
          <span className="postscript">[{index + 1}]</span> {postscript}
        </p>
      </ScrollLink>
    ))}
  </div>
);

export default Postscripts;
