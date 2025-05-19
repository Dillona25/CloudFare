import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button/Button";

export const Navbar = () => {
  return (
    <div className="border-bottom drop-shadow">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-3"></div>
          <div className="col-6 d-flex justify-content-center gap-5">
            <a
              href=""
              className="d-flex align-items-center gap-2 text-decoration-none text-body"
            >
              <span>How We Get Our Data</span>
              <FontAwesomeIcon icon={faChartSimple} />
            </a>
            <a
              href=""
              className="d-flex align-items-center gap-2 text-decoration-none text-body"
            >
              <span>Get In Touch</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className="col-3 d-flex justify-content-end gap-3">
            <Button buttonVariant="primary" buttonText="Sign up" />
            <Button buttonVariant="border" buttonText="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
