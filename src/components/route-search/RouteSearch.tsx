import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button/Button";

interface RouteSearchProps {
  showGetStarted: boolean;
}

export const RouteSearch = ({ showGetStarted }: RouteSearchProps) => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-10 card rounded-4 light-border drop-shadow p-4 position-relative">
        <div
          className={`p-2 card drop-shadow text-center font-weight-bold position-absolute get-started-container ${
            showGetStarted ? "active" : ""
          }`}
        >
          <p className="m-0">Search a trip/route to get started 😉</p>
        </div>
        <div className="row">
          <div className="col-12 inner-div card rounded-4 drop-shadow bg-primary-alt p-3">
            <form className="d-flex flex-column gap-4">
              <div className="d-flex gap-3 justify-content-between align-items-center">
                <div className="input-group">
                  <span className="input-group-text bg-white border-0">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 p-3"
                    placeholder="Departing From"
                  />
                </div>
                <div className="circle-icon d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faCaretRight} />
                </div>
                <div className="input-group">
                  <span className="input-group-text bg-white border-0">
                    <FontAwesomeIcon icon={faPlaneArrival} />
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 p-3"
                    placeholder="Arriving To"
                  />
                </div>
              </div>
              <Button
                buttonVariant="primary"
                buttonText="Search Route"
                className="rounded-1"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
