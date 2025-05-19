import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faEnvelope,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button/Button";

export const Navbar = () => {
  return (
    <div className="row justify-content-center pt-4 position-sticky">
      <div className="navbar bg-light drop-shadow light-border col-auto rounded-5 border d-flex gap-4 align-items-center p-3">
        <a className="navlink rounded-5 d-flex align-items-center gap-2 text-body text-decoration-none">
          <span>Contact</span>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a className="navlink rounded-5 d-flex align-items-center gap-2 text-body text-decoration-none">
          <span>Popular Routes</span>
          <FontAwesomeIcon icon={faPlane} />
        </a>

        <a className="navlink rounded-5 d-flex align-items-center gap-2 text-body text-decoration-none">
          <span>Data Integrity</span>
          <FontAwesomeIcon icon={faChartSimple} />
        </a>

        <Button buttonVariant="primary" buttonText="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
