import { Button } from "../button/Button";
import Dashboard from "../../images/Dashboard Example.png";

export const Hero = () => {
  return (
    <>
      <section id="#hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-5">
              <div className="position-relative z-2 p-4">
                <div className="hero-image-bg position-absolute w-100 h-100 rounded-4 z-1   "></div>
                <img
                  src={Dashboard}
                  alt="Flight price prediction"
                  className="hero-img w-100 h-auto position-relative rounded-4 z-3"
                />
              </div>
            </div>
            <div className="col-6 d-flex gap-2 flex-column">
              <h1>
                Never Overpay For{" "}
                <span className="relative hero-span">Flights</span> Again
              </h1>
              <h2 className="letter-wide">Data-Driven Pricing Predictions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse
              </p>
              <div className="d-flex gap-3">
                <Button buttonVariant="secondary" buttonText="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
