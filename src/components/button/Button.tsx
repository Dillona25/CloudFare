import type { MouseEventHandler } from "react";

type props = {
  buttonVariant: string;
  buttonText: string;
  onClick?: MouseEventHandler;
};

export const Button = ({ buttonVariant, buttonText, onClick }: props) => {
  // Button variant selection
  let variant;
  if (buttonVariant === "primary") {
    variant = "btn btn-primary px-4 max-w-fit";
  } else if (buttonVariant === "dark") {
    variant = "btn btn-dark px-4 max-w-fit";
  } else if (buttonVariant === "border") {
    variant = "btn btn-outline-dark px-4 max-w-fit";
  }

  return (
    <button type="submit" onClick={onClick} className={`${variant}`}>
      {buttonText}
    </button>
  );
};
