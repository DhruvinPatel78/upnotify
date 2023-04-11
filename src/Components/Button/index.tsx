import React  from "react";
interface ButtonProps {
  type: "contain" | "outline";
  background?: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: "small" | "medium" | "large";
  title?: String;
  buttonRender?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: String;
}

const Button = ({
  children = null,
  type = "contain",
  background = "",
  onClick = null,
  size = "medium",
  title = "",
  buttonRender = null,
  rightIcon = null,
  style = {},
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={`h-11 rounded-lg flex items-center justify-center w-full ${className} ${
        size === "small"
          ? "sm:w-smallWidth"
          : size === "medium"
          ? "sm:w-mediumWidth"
          : "sm:w-largeWidth"
      } 
      ${
        type === "contain"
          ? background
            ? `bg-${background}`
            : "bg-gradient-to-b from-[#2D66F8] via-[#2A5EE5] to-[#2554CC]"
          : "bg-transparent border-[#D0D5DD]"
      } `}
    >
      {title ? (
        <p className={"font-bold text-white text-base"}>{title}</p>
      ) : (
        buttonRender
      )}
      {rightIcon ? rightIcon : null}
    </button>
  );
};

export default Button;
