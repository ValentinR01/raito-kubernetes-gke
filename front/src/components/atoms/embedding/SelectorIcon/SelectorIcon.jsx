import React from "react";

const SelectorIcon = ({ width = 45, height = 47 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="12.5"
        width="33"
        height="23"
        fill="#F3EDD7"
        stroke="#F3EDD7"
      />
      <circle cx="33" cy="24" r="12" fill="#F3EDD7" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.04107 0H6V1V12H13.1966C8.96024 10.1475 6 5.91944 6 1C6 0.663247 6.01387 0.329733 6.04107 0Z"
        fill="#F3EDD7"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 35H6V47C6 41.4085 9.82432 36.7102 15 35.3781V35Z"
        fill="#F3EDD7"
      />
    </svg>
  );
};

export default SelectorIcon;
