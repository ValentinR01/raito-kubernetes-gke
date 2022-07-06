import React from "react";

export default function PlusIcone(props) {
  return (
    <>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 0C7.0522 0 6.68925 0.362953 6.68925 0.810754V6.68925H0.810754C0.362953 6.68925 0 7.0522 0 7.5C0 7.9478 0.362953 8.31075 0.810754 8.31075H6.68925V14.1892C6.68925 14.637 7.0522 15 7.5 15C7.9478 15 8.31075 14.637 8.31075 14.1892V8.31075H14.1892C14.637 8.31075 15 7.9478 15 7.5C15 7.0522 14.637 6.68925 14.1892 6.68925H8.31075V0.810754C8.31075 0.362953 7.9478 0 7.5 0Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
}
