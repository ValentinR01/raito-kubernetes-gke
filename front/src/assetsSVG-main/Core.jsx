import React from "react";

export default function Core(props) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 25 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.80971 1.90641C-0.604363 4.44804 -0.60211 8.53784 1.80971 11.0819L12.4931 22.3557C16.0584 18.602 19.6242 14.8486 23.1894 11.0947C25.6035 8.5531 25.6035 4.46073 23.1894 1.91929C20.7754 -0.622336 16.8884 -0.622336 14.4737 1.91929L12.5054 3.99159L10.5246 1.90622C8.11056 -0.635407 4.22333 -0.635407 1.80894 1.90622L1.80971 1.90641Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
}
