import { Link as ScrollLink } from "react-scroll";

const Postscripts = ({ postscripts }) => (
  <div className="post_postscripts" id="postscriptsRef">
    {postscripts.map((postscript, index) => (
      <p key={index}>
        <ScrollLink
          activeClass="current"
          className="postscript"
          to={`postscript[${index + 1}]`}
          offset={-200}
          smooth={true}
        >
          [{index + 1}]
        </ScrollLink>
        {postscript}
      </p>
    ))}
  </div>
);

export default Postscripts;
