import type { MouseEventHandler } from "react";

type props = {
  buttonVariant: string;
  buttonText: string;
  onClick?: MouseEventHandler;
};

export const Button = ({ buttonVariant, buttonText, onClick }: props) => {
  // Button variant selection
  let variant;
  let commonClasses = "rounded-4 px-4 py-2";
  if (buttonVariant === "primary") {
    variant = `${commonClasses} primary-btn border-0 text-white position-relative z-1`;
  } else if (buttonVariant === "secondary") {
    variant = `${commonClasses} secondary-btn`;
  }

  return (
    <button type="submit" onClick={onClick} className={`${variant}`}>
      {buttonText}
    </button>
  );
};
